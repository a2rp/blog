import { Styled } from "./styled";
import { formatDate } from "../utils/format";
import cover from "../assets/covers/the-dignity-stack-for-india.png";

export const meta = {
    title: "The Dignity Stack: Local-First, Print-Ready, Privacy-Respecting Apps for Bharat",
    slug: "the-dignity-stack-for-india",
    date: "2025-10-11",
    author: "Ashish Ranjan - Full-Stack Developer",
    category: "Architecture",
    tags: ["Local-First", "UX", "Privacy", "Performance", "MERN"],
    excerpt:
        "₹0 infra vibes, offline-by-default speed, section-level print, and data dignity. A humane blueprint for apps that real users trust and love.",
    cover,
};

export default function Post() {
    return (
        <Styled.Wrapper>
            <Styled.Info>
                <h1>{meta.title}</h1>
                <div><b>By:</b> {meta.author}</div>
                <div><b>Published on:</b> {formatDate(meta.date)}</div>
                <div><b>Category:</b> {meta.category}</div>
            </Styled.Info>

            <img
                src={meta.cover}
                alt="A small Indian shop counter with a phone, a thermal printer, and a printed receipt-symbolizing local-first, print-first software."
                style={{ height: "420px", width: "100%", objectFit: "cover", borderRadius: "12px", marginBottom: "18px" }}
            />

            <p>
                Software impresses in demos; dignity arrives when the network dies and the work keeps going. After a decade of dashboards,
                ERPs, and field tools, I stopped chasing "cloud-first" and started designing for the real user: a ₹7k Android on spotty data,
                shared devices, and an auditor who asks for proof on paper <em>now</em>. I call this approach the <strong>Dignity Stack</strong>.
            </p>

            <Styled.Analogy>
                <p>
                    <strong>Thesis:</strong> If your app adds friction, it subtracts dignity. The Dignity Stack restores it-by being local-first,
                    print-ready, and privacy-respecting from day zero.
                </p>
            </Styled.Analogy>

            <h2>What The Dignity Stack Promises</h2>
            <ul>
                <li><strong>Works offline, syncs later.</strong> Users keep working; data reconciles when the network returns.</li>
                <li><strong>Proof on demand.</strong> Section-level print/PDF-exactly what the customer, accountant, or auditor needs.</li>
                <li><strong>Privacy by default.</strong> Minimal data, consent surfaces, export/import without caprice.</li>
                <li><strong>Runs on weak phones.</strong> The cheapest device is your performance budget.</li>
            </ul>

            <h2>Pillar 1 - Local-First Data (Speed + Resilience)</h2>
            <p>
                Treat the browser as a capable client with a <strong>canonical working set</strong> in IndexedDB. All mutations go to a
                <em>write-ahead queue</em> and the UI updates optimistically. A background worker syncs deltas and resolves conflicts with
                human-readable diffs-not silent "last writer wins."
            </p>

            <pre>
                {`// concept sketch: local-first write-ahead queue
const db = await openDB("app", 1, { upgrade(db) {
  db.createObjectStore("items", { keyPath: "id" });
  db.createObjectStore("queue", { keyPath: "qid" });
}});

function deterministicId(deviceId) {
  // example: 20251011T142301Z-deviceId-000042
  const ts = new Date().toISOString().split(".")[0].replace(/[-:]/g, "");
  const counter = String(Math.floor(Math.random() * 999999)).padStart(6, "0");
  return ts + "-" + deviceId + "-" + counter;
}

async function createItem(local) {
  await db.put("items", local); // optimistic
  await db.put("queue", { qid: crypto.randomUUID(), op: "CREATE", payload: local });
  // background sync will replay
}`}
            </pre>

            <p><strong>Conflict policy:</strong> return server hints (who/what/when), show a diff, and let the human choose. Never silently drop work.</p>

            <h2>Pillar 2 - Print-First UX (Trust You Can Hold)</h2>
            <p>
                "Share PDF" is not enough. Real-world trust needs <strong>section-level print</strong> (just the invoice, or just the trip sheet),
                <strong>B/W-safe</strong> colors, legal footers, page numbers, and timestamps. Print is a UX surface-treat it like one.
            </p>

            <pre>
                {`<!-- concept: section-only print -->
<section id="invoice">
  <!-- ...invoice markup... -->
</section>

<button onclick="printSection('invoice')">Print this invoice</button>

<script>
  function printSection(id){
    const el = document.getElementById(id);
    const w = window.open('', '_blank');
    w.document.write('<html><head><title>Print</title>');
    w.document.write('<link rel="stylesheet" href="/print.css">');
    w.document.write('</head><body>');
    w.document.write(el.outerHTML);
    w.document.write('</body></html>');
    w.document.close(); w.focus(); w.print(); w.close();
  }
</script>`}
            </pre>

            <p>
                <strong>Legal footer:</strong> "Invoice #{'{'}number{'}'} • Generated {`{timestamp}`} • Page {`{current}/{total}`}` with company GST/PAN.
                In audits, clarity beats aesthetics every time.
            </p>

            <h2>Pillar 3 - Privacy-by-Default (Control + Consent)</h2>
            <ul>
                <li><strong>Data minimization:</strong> collect only what the job needs, not what the dashboard dreams.</li>
                <li><strong>No-account modes:</strong> single-device shops shouldn’t need passwords to <em>start</em> working.</li>
                <li><strong>Export/Import:</strong> one-click JSON backup; import restores state deterministically.</li>
                <li><strong>Transparent logs:</strong> human-readable audit trail for who/what/when (and how to undo).</li>
            </ul>

            <pre>
                {`// audit event shape (append-only)
{
  "id": "evt_20251011T074501Z_x7f",
  "actor": { "id": "u_17", "name": "Operator A" },
  "action": "UPDATE_ITEM",
  "entity": { "type": "Item", "id": "it_42" },
  "diff": { "qty": { "from": 2, "to": 3 } },
  "at": "2025-10-11T07:45:01Z",
  "meta": { "deviceId": "dev_hy7", "offline": true }
}`}
            </pre>

            <Styled.Analogy>
                <p>
                    <strong>Builder’s Note:</strong> Trust is a feature. Users forgive bugs; they don’t forgive ambiguity. When in doubt, log it,
                    show it, make it reversible-and printable.
                </p>
            </Styled.Analogy>

            <h2>Rupee-Aware UX (Design for the ₹7k Android)</h2>
            <ul>
                <li><strong>Perceived speed:</strong> optimistic UI, hover-prefetch, debounce; keep input latency &lt; 50ms.</li>
                <li><strong>Weight:</strong> first load &lt; 100KB gz; compress images; avoid icon zoos.</li>
                <li><strong>Shortcuts:</strong> Ctrl/Cmd+K focus, Esc clear, Enter to commit-on desktop <em>and</em> Android keyboards.</li>
                <li><strong>Share primitives:</strong> SMS/WhatsApp links first; email optional.</li>
            </ul>

            <h2>MERN Blueprint (Minimal, Durable)</h2>
            <ul>
                <li><strong>React</strong> reads/writes a local store; mutations enqueue; UI is the source of truth between syncs.</li>
                <li><strong>Service/Worker</strong> replays queue with backoff; pulls server deltas; tags conflicts.</li>
                <li><strong>Node/Express</strong> exposes idempotent endpoints that accept client IDs + timestamps; replies with conflict hints.</li>
                <li><strong>Mongo</strong> keeps an append-only event log; "current state" is a materialized view (can be rebuilt).</li>
            </ul>

            <pre>
                {`// idempotent write (concept)
POST /api/items
Headers: Idempotency-Key: 20251011T142301Z-dev-000042
Body: { "id": "it_42", "name": "Widget", "qty": 3, "ts": "2025-10-11T14:23:01Z" }
↳ 200 OK { "status": "ok", "conflict": null }  // or { conflict: { field: "qty", server: 2, client: 3 } }`}
            </pre>

            <h2>Try It Now (2 Minutes)</h2>
            <ul>
                <li>Disable Wi-Fi, create a record, <em>then</em> re-enable. Does your app keep the work and sync reliably?</li>
                <li>Print just the invoice section. Is it B/W-safe with page numbers and a timestamp?</li>
                <li>Export JSON backup. Can a non-technical teammate restore it on another device?</li>
            </ul>

            <h2>Anti-Patterns (How Dignity Breaks)</h2>
            <ul>
                <li>Blocking non-critical flows with "Please connect to the internet."</li>
                <li>Whole-page prints full of nav/ads; no page numbers or timestamp.</li>
                <li>Forced sign-up before read-only features.</li>
                <li>Silent conflict resolution; overwritten work with no audit trail.</li>
            </ul>

            <h2>The Dignity Audit (Ship Checklist)</h2>
            <ul>
                <li>[ ] Offline create/update works; queue visibly retries on reconnect.</li>
                <li>[ ] Every critical screen has <strong>Print This Section</strong>.</li>
                <li>[ ] Print styles B/W-safe; page # + timestamp visible.</li>
                <li>[ ] Export/Import present; JSON human-readable and versioned.</li>
                <li>[ ] First paint &lt; 100KB gz; fonts ≤ 2; CLS ≤ 0.1.</li>
                <li>[ ] Keyboard nav + focus states across forms and dialogs.</li>
                <li>[ ] All destructive actions are reversible and logged.</li>
                <li>[ ] Dates use a single format (e.g., <em>Oct 11, 2025 14:23:09 hrs</em> IST).</li>
                <li>[ ] Consent surfaces for any analytics/training; private by default.</li>
                <li>[ ] "Works on ₹7k Android" manual test pass (throttle + low memory).</li>
                <li>[ ] Clear error recovery paths (retry, print draft, save local).</li>
                <li>[ ] Section links are shareable anchors where relevant.</li>
            </ul>

            <h2>FAQ (Short + Honest)</h2>
            <ul>
                <li><strong>Isn’t cloud cheaper?</strong> Bandwidth isn’t free and reliability isn’t guaranteed. Local-first cuts retries and support calls.</li>
                <li><strong>What about security?</strong> Privacy-by-default + audit logs + least-privilege tokens beat "everything on the server" theater.</li>
                <li><strong>Will this scale?</strong> Yes-events scale; conflicts are handled at human speed with clear UI, not magic.</li>
            </ul>

            <Styled.Analogy>
                <p>
                    <strong>Closer:</strong> Fast is a feeling; dignity is a promise. Build apps that keep working, keep proof,
                    and keep the user in control. Respect follows.
                </p>
            </Styled.Analogy>
        </Styled.Wrapper>
    );
}
