import{j as e}from"./index-CggoZFON.js";const s={slug:"kickoff-tech-blog-2025",title:"My 2025 Tech Blog Plan — What I’ll Write, How I’ll Ship, and Why",date:"2025-01-05",tags:["blogging","react","productivity","career"],excerpt:"Weekly tech posts in 2025: my stack (React + Vite + GH Pages), workflow, and the promise I’m making to myself.",cover:"https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1200"};function i(){return e.jsxs("article",{children:[e.jsx("h1",{children:s.title}),e.jsxs("p",{children:[e.jsx("em",{children:s.date})," • ",s.tags.join(", ")]}),e.jsx("p",{children:"I’ve decided to publish one post every week in 2025. Short, practical, and honest—stuff I actually use while building products in React/MERN. This post is the kickoff: what I’ll write about, the stack I’m using, and my workflow so I don’t miss a week."}),e.jsx("h2",{children:"Why weekly?"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Writing clarifies thinking and improves code quality."}),e.jsx("li",{children:"Public notes help future-me (and maybe help you too)."}),e.jsx("li",{children:"Consistency beats perfection—ship small, ship often."})]}),e.jsx("h2",{children:"Publishing stack (simple & free)"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("b",{children:"React + Vite + styled-components"})," — file-based posts (each post is a component + ",e.jsx("code",{children:"meta"}),")."]}),e.jsxs("li",{children:[e.jsx("b",{children:"GitHub Pages"})," — deploy from ",e.jsx("code",{children:"gh-pages"})," branch."]}),e.jsxs("li",{children:[e.jsx("b",{children:"Zero CMS"})," — fewer moving parts, easy to review in PRs."]})]}),e.jsx("h3",{children:"Post component template I’ll reuse"}),e.jsx("pre",{children:`export const meta = {
  slug: "my-slug",
  title: "Readable Title",
  date: "2025-01-12",
  tags: ["react", "pattern"],
  excerpt: "One-liner describing the value.",
  cover: "https://images.unsplash.com/...",
};

export default function Post() {
  return (
    <article>
      <h1>{meta.title}</h1>
      <p><em>{meta.date}</em> • {meta.tags.join(", ")}</p>
      <p>Intro…</p>
      <h2>Section</h2>
      <pre>{\`// code goes here\`}</pre>
      <p>Wrap-up & CTA.</p>
    </article>
  );
}`}),e.jsx("h2",{children:"Editorial rules I’ll follow"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Write in a conversational “I/we” voice. No fluff."}),e.jsx("li",{children:"Lead with the outcome; add context; then code."}),e.jsx("li",{children:"Keep posts ~800–1200 words. Code is the hero."}),e.jsx("li",{children:"One diagram or screenshot if it saves 200 words."})]}),e.jsx("h2",{children:"Themes for Q1 2025"}),e.jsxs("ul",{children:[e.jsx("li",{children:"React patterns I actually use (forms, state, performance)."}),e.jsx("li",{children:"MERN bits: auth, payments, file uploads, queues."}),e.jsx("li",{children:"Tooling that saves time: Vite, ESLint, PNPM, GitHub Actions."}),e.jsx("li",{children:"Career/portfolio notes: shipping fast, writing good READMEs."})]}),e.jsx("h2",{children:"My writing workflow (90-minute sprint)"}),e.jsxs("ol",{children:[e.jsxs("li",{children:[e.jsx("b",{children:"Idea → outline (10m):"})," 3–5 bullet outcomes."]}),e.jsxs("li",{children:[e.jsx("b",{children:"Draft (50m):"})," code first, text second."]}),e.jsxs("li",{children:[e.jsx("b",{children:"Edit (20m):"})," cut 20%, add headings, check links."]}),e.jsxs("li",{children:[e.jsx("b",{children:"Ship (10m):"})," commit message = post title, deploy."]})]}),e.jsx("p",{children:"That’s it. If you’re reading this and want a specific topic covered, ping me—DMs open. Next week we dive into a hands-on technical post."})]})}const l=Object.freeze(Object.defineProperty({__proto__:null,default:i,meta:s},Symbol.toStringTag,{value:"Module"})),t={slug:"mern-n-plus-one-bug",title:"The Hidden N+1 Bug in My MERN App (and how I shaved ~1.8s off TTFB)",date:"2025-01-19",tags:["mern","mongodb","mongoose","react","performance","api"],excerpt:"Orders page felt slow. Network waterfall exposed an N+1 pattern I’d accidentally created across FE and BE. Here’s the exact diff and the fix.",cover:"https://images.unsplash.com/photo-1556157382-97eda2d62296?w=1200"};function o(){return e.jsxs("article",{children:[e.jsx("h1",{children:t.title}),e.jsxs("p",{children:[e.jsx("em",{children:t.date})," • ",t.tags.join(", ")]}),e.jsxs("p",{children:["The symptom was subtle: the ",e.jsx("code",{children:"/orders"})," screen “hung” for a second or two before showing rows. Dev felt fine; production felt heavy. Lighthouse didn’t scream, but Chrome’s Network tab did—a staircase waterfall of tiny requests. Classic N+1, and I had managed to create it on both the backend and the frontend."]}),e.jsx("h2",{children:"What I saw (production)"}),e.jsx("pre",{children:`GET /api/orders?status=paid               200   520ms
GET /api/users/65f...                     200   48ms
GET /api/products/650...                  200   35ms
GET /api/products/651...                  200   41ms
GET /api/products/652...                  200   37ms
... (20+ more product calls)
TTFB (first row visible): ~2.3s`}),e.jsx("p",{children:"I expected one API call returning everything needed to render a table. Instead, I was fetching the order list and then fanning out into per-product and per-user requests. And yes, my database logs confirmed the backend was doing its own version of N+1."}),e.jsx("h2",{children:"The accidental N+1 (backend)"}),e.jsx("p",{children:"In Express, I queried orders and then “hydrated” related docs in a loop. Looked harmless in code review, destroyed latency in prod."}),e.jsx("pre",{children:`// ❌ Before (looping + per-doc queries)
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
});`}),e.jsx("h3",{children:"Backend fix"}),e.jsxs("p",{children:["Use one query with ",e.jsx("code",{children:"populate"})," (or go all-in with an"," ",e.jsx("code",{children:"$lookup"})," aggregation). Also return lean JSON to skip Mongoose document overhead."]}),e.jsx("pre",{children:`// ✅ After (single roundtrip, no per-item loops)
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
});`}),e.jsx("p",{children:"If you prefer aggregation, this also works and scales well when you need projections or grouping:"}),e.jsx("pre",{children:`// Alternative: Aggregation with $lookup (shortened)
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
});`}),e.jsx("h2",{children:"The accidental N+1 (frontend)"}),e.jsxs("p",{children:["My React code was making things worse. I fetched orders, then spun up a second effect to fetch product details per order (which the backend should have provided in the first place). On top of that, my"," ",e.jsx("code",{children:"filters"})," object was recreated each render, so the effect ran more than necessary."]}),e.jsx("pre",{children:`// ❌ Before
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
}, [orders]);`}),e.jsx("h3",{children:"Frontend fix"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Return enriched data from the backend. No per-item fetches."}),e.jsx("li",{children:"Stabilize dependencies; memoize objects passed to effects."}),e.jsx("li",{children:"Use an abort controller to cancel in-flight requests on rerender."})]}),e.jsx("pre",{children:`// ✅ After
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
}, [memoFilters]);`}),e.jsx("h2",{children:"Impact (measured)"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Requests: from ~27 down to 1."}),e.jsx("li",{children:"TTFB (first row visible): ~2.3s → ~0.5s on mid-tier hosting."}),e.jsx("li",{children:"DB load: fewer roundtrips, fewer locks during peaks."})]}),e.jsx("h2",{children:"How I’ll catch this earlier next time"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Turn on query logging in lower envs:"})," ",e.jsx("code",{children:'mongoose.set("debug", true)'})," and watch for repeated"," ",e.jsx("code",{children:"findById"})," in loops."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Budget per screen:"})," “table view = ≤2 requests, ≤600ms TTFB”. If I exceed it, I stop and redesign the endpoint."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Shape the payload for the UI:"})," return exactly what the component needs; no client-side fan-out."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Lean + projection:"})," ",e.jsx("code",{children:".lean()"})," and"," ",e.jsx("code",{children:"select"})," only required fields."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Indexes:"})," make sure ",e.jsx("code",{children:"userId"}),","," ",e.jsx("code",{children:"items.productId"}),", and common filters are indexed."]})]}),e.jsx("p",{children:"This wasn’t a fancy micro-optimization—just removing accidental work. If your UI stutters on list pages, check for N+1 first. It’s usually the cheapest 1–2 seconds you’ll ever win back."})]})}const a=Object.freeze(Object.defineProperty({__proto__:null,default:o,meta:t},Symbol.toStringTag,{value:"Module"})),r={slug:"react-router-gh-pages-404",title:"The Sunday Night 404: Fixing React Router on GitHub Pages (and the double /blog bug)",date:"2025-01-12",tags:["react","vite","github-pages","react-router","debugging"],excerpt:"Deployed a React app to GitHub Pages, deep links returned 404, and some routes showed /blog/blog/... Here’s exactly what broke and the 15-minute fix.",cover:"https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200"};function n(){return e.jsxs("article",{children:[e.jsx("h1",{children:r.title}),e.jsxs("p",{children:[e.jsx("em",{children:r.date})," • ",r.tags.join(", ")]}),e.jsxs("p",{children:["Sunday night, I pushed a fresh build of my React blog to GitHub Pages, shared the link, opened a post on my phone—and hit a ",e.jsx("strong",{children:"404"}),". The home page loaded, but any deep link like ",e.jsx("code",{children:"/script-vs-module"})," failed. On top of that, a few URLs turned into ",e.jsx("code",{children:"/blog/blog/slug"}),". Perfect chaos."]}),e.jsx("h2",{children:"What actually broke"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"SPA deep links:"})," GitHub Pages serves static files. If you visit",e.jsx("code",{children:" /some-route"})," directly, it looks for ",e.jsx("code",{children:"some-route.html"}),". In a single-page app, we need every unknown path to load ",e.jsx("code",{children:"index.html"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Base URL mismatch:"})," Project pages live under ",e.jsx("code",{children:"/<repo>/"}),". If assets or routes assume site root ",e.jsx("code",{children:"/"}),", you’ll see broken CSS/JS or duplicated segments like ",e.jsx("code",{children:"/blog/blog/..."}),"."]})]}),e.jsx("h2",{children:"The 15-minute fix I used"}),e.jsxs("h3",{children:["1) Set Vite ",e.jsx("code",{children:"base"})," to the repo path"]}),e.jsx("pre",{children:`// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/blog/", // <-- repo name
});`}),e.jsxs("p",{children:["This makes built asset URLs resolve from ",e.jsx("code",{children:"/blog/"}),". Without it, CSS/JS can 404 on Pages."]}),e.jsx("h3",{children:"2) Make the router basename portable"}),e.jsx("pre",{children:`// src/main.jsx
import { BrowserRouter } from "react-router-dom";
// ...
<BrowserRouter basename={import.meta.env.BASE_URL}>
  <App />
</BrowserRouter>`}),e.jsxs("p",{children:["In local dev, ",e.jsx("code",{children:'BASE_URL = "/"'}),"; on Pages, it’s ",e.jsx("code",{children:'"/blog/"'}),". Same code works in both places."]}),e.jsxs("h3",{children:["3) Remove hardcoded ",e.jsx("code",{children:"/blog"})," from routes/links"]}),e.jsx("pre",{children:`// ✅ Correct (let basename handle the prefix)
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/:slug" element={<Post />} />
  <Route path="/about" element={<About />} />
  <Route path="*" element={<NotFound />} />
</Routes>

// ✅ Links
<Link to={\`/\${post.slug}\`}>{post.title}</Link>`}),e.jsxs("p",{children:["My mistake was having both a basename ",e.jsx("em",{children:"and"})," hardcoded ",e.jsx("code",{children:"/blog"})," in paths, producing ",e.jsx("code",{children:"/blog/blog/slug"}),"."]}),e.jsx("h3",{children:"4) Add SPA fallback for deep links"}),e.jsx("pre",{children:`// public/404.html
// Copy your index.html as 404.html.
// Vite will ship it to dist/ so GH Pages serves the SPA for unknown routes.`}),e.jsxs("p",{children:["When Pages can’t find a file for ",e.jsx("code",{children:"/some-route"}),", it serves ",e.jsx("code",{children:"404.html"}),". If that bootstraps the SPA, the client router resolves the route."]}),e.jsx("h2",{children:"Sanity checks before you share the link"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Local prod preview:"})," ",e.jsx("code",{children:"npm run build && npm run preview"}),". Test deep links like ",e.jsx("code",{children:"/any-slug"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"No duplicate segments:"})," Inspect links. If you see ",e.jsx("code",{children:"/blog/blog"}),", you’re adding the prefix twice."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Pages settings:"})," Repo → ",e.jsx("em",{children:"Settings → Pages"})," → Deploy from",e.jsx("code",{children:" gh-pages"})," (if using the ",e.jsx("code",{children:"gh-pages"})," CLI) or the Actions environment (if using CI)."]})]}),e.jsx("h2",{children:"CLI vs Actions (I used CLI here)"}),e.jsx("p",{children:"Simple and reliable for a blog:"}),e.jsx("pre",{children:`"scripts": {
  "predeploy": "vite build",
  "deploy": "gh-pages -d dist -b gh-pages"
}`}),e.jsx("h2",{children:"Symptoms → Causes (quick map)"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Home works, deep links 404:"})," Missing ",e.jsx("code",{children:"public/404.html"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"CSS/JS 404 only on Pages:"})," Missing/incorrect ",e.jsx("code",{children:"base"})," in Vite config."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Routes look like /blog/blog/slug:"})," Hardcoded ",e.jsx("code",{children:"/blog"})," + router ",e.jsx("code",{children:"basename"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Works locally, fails after deploy:"})," You tested the dev server, not the production preview."]})]}),e.jsx("h2",{children:"What changed in my commits"}),e.jsx("pre",{children:`feat: set Vite base to /blog/
chore: BrowserRouter basename = import.meta.env.BASE_URL
fix: remove hardcoded /blog from routes and links
chore: add public/404.html for SPA fallback
chore: add gh-pages deploy script`}),e.jsx("p",{children:"That was it. I reloaded on the phone, the post opened instantly, and I finally sent the “live now” message without sweating. If you’re on a custom domain, the same checklist applies—just make sure DNS and Pages are aligned."}),e.jsxs("p",{children:["Next week I’ll share a real bug-hunt from a MERN app where an innocent ",e.jsx("code",{children:"useEffect"}),"created a hidden N+1 API problem. Fun one."]})]})}const c=Object.freeze(Object.defineProperty({__proto__:null,default:n,meta:r},Symbol.toStringTag,{value:"Module"}));export{c as _,a,l as b};
