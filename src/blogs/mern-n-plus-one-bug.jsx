export const meta = {
    slug: "mern-n-plus-one-bug",
    title: "The Hidden N+1 Bug in My MERN App (and how I shaved ~1.8s off TTFB)",
    date: "2025-01-19",
    tags: ["mern", "mongodb", "mongoose", "react", "performance", "api"],
    excerpt:
        "Orders page felt slow. Network waterfall exposed an N+1 pattern I’d accidentally created across FE and BE. Here’s the exact diff and the fix.",
    cover:
        "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=1200",
};

export default function Post() {
    return (
        <article>
            <h1>{meta.title}</h1>
            <p>
                <em>{meta.date}</em> • {meta.tags.join(", ")}
            </p>

            <p>
                The symptom was subtle: the <code>/orders</code> screen “hung” for a
                second or two before showing rows. Dev felt fine; production felt heavy.
                Lighthouse didn’t scream, but Chrome’s Network tab did—a staircase
                waterfall of tiny requests. Classic N+1, and I had managed to create it
                on both the backend and the frontend.
            </p>

            <h2>What I saw (production)</h2>
            <pre>{`GET /api/orders?status=paid               200   520ms
GET /api/users/65f...                     200   48ms
GET /api/products/650...                  200   35ms
GET /api/products/651...                  200   41ms
GET /api/products/652...                  200   37ms
... (20+ more product calls)
TTFB (first row visible): ~2.3s`}</pre>

            <p>
                I expected one API call returning everything needed to render a table.
                Instead, I was fetching the order list and then fanning out into
                per-product and per-user requests. And yes, my database logs confirmed
                the backend was doing its own version of N+1.
            </p>

            <h2>The accidental N+1 (backend)</h2>
            <p>
                In Express, I queried orders and then “hydrated” related docs in a loop.
                Looked harmless in code review, destroyed latency in prod.
            </p>

            <pre>{`// ❌ Before (looping + per-doc queries)
app.get("/api/orders", async (req, res) => {
  const orders = await Order.find({ userId: req.user._id }).limit(25);
  for (const o of orders) {
    o.user = await User.findById(o.userId).select("name email");
    // each item triggers a product query
    o.items = await Promise.all(
      o.items.map(async it => ({
        ...it,
        product: await Product.findById(it.productId).select("name price sku"),
      }))
    );
  }
  res.json(orders);
});`}</pre>

            <h3>Backend fix</h3>
            <p>
                Use one query with <code>populate</code> (or go all-in with an{" "}
                <code>$lookup</code> aggregation). Also return lean JSON to skip
                Mongoose document overhead.
            </p>

            <pre>{`// ✅ After (single roundtrip, no per-item loops)
app.get("/api/orders", async (req, res) => {
  const orders = await Order.find({ userId: req.user._id })
    .limit(25)
    .populate({ path: "userId", select: "name email", model: User })
    .populate({ path: "items.productId", select: "name price sku", model: Product })
    .lean(); // plain objects, faster to serialize

  // normalize shape a bit (optional)
  const shaped = orders.map(o => ({
    _id: o._id,
    createdAt: o.createdAt,
    user: o.userId, // now an object {name,email}
    items: o.items.map(it => ({
      qty: it.qty,
      product: it.productId, // {name, price, sku}
    })),
  }));

  res.json(shaped);
});`}</pre>

            <p>
                If you prefer aggregation, this also works and scales well when you need
                projections or grouping:
            </p>

            <pre>{`// Alternative: Aggregation with $lookup (shortened)
import { Types } from "mongoose";
app.get("/api/orders", async (req, res) => {
  const userId = new Types.ObjectId(req.user._id);
  const docs = await Order.aggregate([
    { $match: { userId } },
    { $unwind: "$items" },
    { $lookup: {
        from: "products",
        localField: "items.productId",
        foreignField: "_id",
        as: "product"
      } },
    { $unwind: "$product" },
    { $lookup: {
        from: "users",
        localField: "userId",
        foreignField: "_id",
        as: "user"
      } },
    { $unwind: "$user" },
    { $group: {
        _id: "$_id",
        createdAt: { $first: "$createdAt" },
        user: { $first: { name: "$user.name", email: "$user.email" } },
        items: { $push: { qty: "$items.qty", product: {
          name: "$product.name", price: "$product.price", sku: "$product.sku"
        } } }
      } },
    { $project: { /* strip sensitive fields if any */ } }
  ]).allowDiskUse(true);
  res.json(docs);
});`}</pre>

            <h2>The accidental N+1 (frontend)</h2>
            <p>
                My React code was making things worse. I fetched orders, then spun up a
                second effect to fetch product details per order (which the backend
                should have provided in the first place). On top of that, my{" "}
                <code>filters</code> object was recreated each render, so the effect ran
                more than necessary.
            </p>

            <pre>{`// ❌ Before
const [orders, setOrders] = useState([]);
const filters = { status, sort }; // new object every render

useEffect(() => {
  fetch(\`/api/orders?status=\${status}\`)
    .then(r => r.json())
    .then(setOrders);
}, [status, filters]); // 'filters' changes every render

useEffect(() => {
  // N extra requests, one per item
  orders.forEach(o => {
    o.items.forEach(it => {
      fetch(\`/api/products/\${it.productId}\`).then(/* ... */);
    });
  });
}, [orders]);`}</pre>

            <h3>Frontend fix</h3>
            <ul>
                <li>Return enriched data from the backend. No per-item fetches.</li>
                <li>Stabilize dependencies; memoize objects passed to effects.</li>
                <li>Use an abort controller to cancel in-flight requests on rerender.</li>
            </ul>

            <pre>{`// ✅ After
const [orders, setOrders] = useState([]);
const memoFilters = useMemo(() => ({ status, sort }), [status, sort]);

useEffect(() => {
  const ctrl = new AbortController();
  (async () => {
    const q = new URLSearchParams(memoFilters).toString();
    const res = await fetch(\`/api/orders?\${q}\`, { signal: ctrl.signal });
    const data = await res.json();
    setOrders(data); // already includes user + product summary
  })();
  return () => ctrl.abort();
}, [memoFilters]);`}</pre>

            <h2>Impact (measured)</h2>
            <ul>
                <li>Requests: from ~27 down to 1.</li>
                <li>TTFB (first row visible): ~2.3s → ~0.5s on mid-tier hosting.</li>
                <li>DB load: fewer roundtrips, fewer locks during peaks.</li>
            </ul>

            <h2>How I’ll catch this earlier next time</h2>
            <ul>
                <li>
                    <strong>Turn on query logging in lower envs:</strong>{" "}
                    <code>mongoose.set("debug", true)</code> and watch for repeated{" "}
                    <code>findById</code> in loops.
                </li>
                <li>
                    <strong>Budget per screen:</strong> “table view = ≤2 requests, ≤600ms
                    TTFB”. If I exceed it, I stop and redesign the endpoint.
                </li>
                <li>
                    <strong>Shape the payload for the UI:</strong> return exactly what the
                    component needs; no client-side fan-out.
                </li>
                <li>
                    <strong>Lean + projection:</strong> <code>.lean()</code> and{" "}
                    <code>select</code> only required fields.
                </li>
                <li>
                    <strong>Indexes:</strong> make sure <code>userId</code>,{" "}
                    <code>items.productId</code>, and common filters are indexed.
                </li>
            </ul>

            <p>
                This wasn’t a fancy micro-optimization—just removing accidental work.
                If your UI stutters on list pages, check for N+1 first. It’s usually the
                cheapest 1–2 seconds you’ll ever win back.
            </p>
        </article>
    );
}
