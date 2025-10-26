// src/blogs/real-world-ai-learning-by-doing-across-stacks.jsx

import React from "react";
import { Styled } from "./styled"; // same pattern as your working post ✅

// Images (ensure these exist; ?url forces URL string even if SVGR is enabled)

const COVER = new URL("../assets/covers/ai-learning-by-doing-cover.png", import.meta.url).href;
const FIG_ARCH = new URL("../assets/covers/ai-learning-by-doing-architecture.svg", import.meta.url).href;
const FIG_FLOW = new URL("../assets/covers/ai-learning-by-doing-flow.svg", import.meta.url).href;
const FIG_EVAL = new URL("../assets/covers/ai-learning-by-doing-eval.svg", import.meta.url).href;

// tiny fallback (gray rect) if an asset 404s
const FALLBACK_SVG = `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='560'><rect width='100%' height='100%' fill='%23121214'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-family='Inter,system-ui' font-size='20' fill='%23a0a0a7'>image not found</text></svg>`;


export const meta = {
    title:
        "Real-World AI: What I Built in React, Vanilla JS, Node.js & Python — And Why Each Was Right",
    slug: "real-world-ai-learning-by-doing-across-stacks",
    date: "2025-10-26",
    author: "Ashish Ranjan — Full-Stack Developer",
    category: "AI by Doing",
    tags: [
        "AI",
        "RAG",
        "Semantic Search",
        "React",
        "Vanilla JS",
        "Node.js",
        "Python",
        "Evaluation",
    ],
    excerpt:
        "Not the same demo in four languages—real situations. I shipped UX in React, privacy in the browser, guardrails in Node, and truth in Python. Here’s the playbook with code and visuals.",
    cover: COVER,
};

export default function Post() {
    return (
        <Styled.Wrapper>
            <Styled.Info>
                <h1>{meta.title}</h1>
                <div>
                    <b>By:</b> {meta.author}
                </div>
                <div>
                    <b>Published on:</b> October 26, 2025
                </div>
                <div>
                    <b>Category:</b> {meta.category} • <b>Tags:</b> {meta.tags.join(", ")}
                </div>
            </Styled.Info>

            <figure className="card" style={{ marginBottom: 18 }}>
                <img
                    src={meta.cover}
                    alt="Cover: learning-by-doing across React, JS, Node and Python"
                    style={{ borderRadius: 12 }}
                />
            </figure>

            <p>
                I didn’t learn AI by rewriting a toy app four times. I learned it by{" "}
                <strong>responding to constraints</strong>—shipping delightful UX in
                React, privacy-first logic in the browser, integration & guardrails in
                Node, and evaluation truth in Python. This post is a field guide: what I
                built, why that stack, what broke, and what I’ll repeat next time. It
                includes practical code you can lift and bend.
            </p>

            <figure className="card" style={{ margin: "20px 0" }}>
                <img
                    src={FIG_ARCH}
                    alt="Four lanes: React (UX), Browser (privacy/offline), Node (integration/guardrails), Python (experiments/eval)"
                    onError={(e) => { console.error("ARCH SVG failed:", FIG_ARCH); e.currentTarget.src = FALLBACK_SVG; }}
                    style={{ borderRadius: 12 }}
                />

                <figcaption className="mt-1">
                    Four lanes, one goal: ship useful intelligence. Pick by constraint,
                    not habit.
                </figcaption>
            </figure>

            <h2>The Thesis: Pick the Runtime by Constraint, Not Habit</h2>
            <ul>
                <li>
                    <strong>React</strong> when the UI <em>is</em> the feature & streaming
                    feedback matters.
                </li>
                <li>
                    <strong>Vanilla JS (Browser-only)</strong> when privacy/offline/zero-ops
                    are the priority.
                </li>
                <li>
                    <strong>Node.js</strong> when you need integration, guardrails,
                    caching, logging & rate limits.
                </li>
                <li>
                    <strong>Python</strong> when you need experiments, evaluation, and
                    batch jobs with honest metrics.
                </li>
            </ul>

            <figure className="card" style={{ margin: "20px 0" }}>
                <img
                    src={FIG_FLOW}
                    alt="Common AI flow: ingest → chunk → embed → retrieve → rerank → prompt → stream → evaluate"
                    style={{ borderRadius: 12 }}
                />
                <figcaption className="mt-1">
                    Most features rhyme: ingest → embed → retrieve → answer → evaluate. The
                    runtime shapes <em>how</em>.
                </figcaption>
            </figure>

            <Styled.Analogy>
                <p>
                    Think of the stacks like instruments: React is the lead vocal (UX),
                    Browser JS is the acoustic set (privacy/offline), Node is the rhythm
                    section (guardrails/integration), and Python is the sound engineer
                    (evaluation). Together, the song lands.
                </p>
            </Styled.Analogy>

            {/* -------------------------------------------------- */}
            {/* Case 1: React — streaming UX                      */}
            {/* -------------------------------------------------- */}
            <h2>Case 1 — React First: Streaming UX That Feels Alive</h2>
            <p>
                <strong>Situation:</strong> I needed a “type → get answer → cite
                sources” experience that feels progressive: partial tokens, visible
                thinking, retries, copy-to-clipboard, and graceful aborts.
            </p>
            <p>
                <strong>Why React:</strong> Component boundaries + Suspense + evented
                state make streaming a first-class citizen.
            </p>

            <pre>
                <code>{reactStreamSnippet}</code>
            </pre>

            <ul>
                <li>
                    <strong>Skeletons &gt; spinners:</strong> pre-shape the answer region.
                </li>
                <li>
                    <strong>Abort early:</strong> keep an <code>AbortController</code>;
                    users change their minds.
                </li>
                <li>
                    <strong>Token streams:</strong> UI feels faster without changing total
                    time.
                </li>
            </ul>

            {/* -------------------------------------------------- */}
            {/* Case 2: Browser-only — privacy/offline            */}
            {/* -------------------------------------------------- */}
            <h2>Case 2 — Vanilla JS in the Browser: Privacy + Offline Win</h2>
            <p>
                <strong>Situation:</strong> For “semantic search over my blog,” I wanted{" "}
                <strong>no server</strong> for read-only users and privacy by default.
                The index can live in <code>IndexedDB</code>. First-run may be slower;
                warm-cache flies.
            </p>

            <pre>
                <code>{browserWorkerSnippet}</code>
            </pre>

            <ul>
                <li>
                    <strong>Warm-up dominates:</strong> cache model + embeddings; use a{" "}
                    <code>Worker</code> to keep the UI smooth.
                </li>
                <li>
                    <strong>Chunk sizes matter:</strong> smaller chunks improve recall but
                    grow comparisons—find balance.
                </li>
                <li>
                    <strong>Query caps:</strong> normalize & cap length to avoid stalls.
                </li>
            </ul>

            {/* -------------------------------------------------- */}
            {/* Case 3: Node — service w/ guardrails              */}
            {/* -------------------------------------------------- */}
            <h2>Case 3 — Node.js Service: Integration, Guardrails, Reality</h2>
            <p>
                <strong>Situation:</strong> I needed a backend that retrieves, reranks,
                answers with citations, caches expensive steps, throttles spikes, and{" "}
                <em>logs everything</em>.
            </p>

            <pre>
                <code>{nodeServiceSnippet}</code>
            </pre>

            <ul>
                <li>
                    <strong>Batching = free speed.</strong>
                </li>
                <li>
                    <strong>Retries bounded + jittered:</strong> unbounded retries burn
                    quota &amp; patience.
                </li>
                <li>
                    <strong>Cache retrieval</strong> before full answers; it saves more.
                </li>
            </ul>

            {/* -------------------------------------------------- */}
            {/* Case 4: Python — experiments & eval               */}
            {/* -------------------------------------------------- */}
            <h2>Case 4 — Python: Experiments, Evaluation, Batch Jobs</h2>
            <p>
                <strong>Situation:</strong> I needed to <em>measure</em> honestly and
                run batch jobs—site-wide embeddings, answer quality checks, and image
                captions for accessibility/SEO.
            </p>

            <pre>
                <code>{pythonEvalSnippet}</code>
            </pre>

            <figure className="card" style={{ margin: "20px 0" }}>
                <img
                    src={FIG_EVAL}
                    alt="Evaluation snapshot: nDCG@3 bars across configurations; cache hit ratio; p95 chart"
                    style={{ borderRadius: 12 }}
                />
                <figcaption className="mt-1">
                    Treat quality like a feature: keep a small golden set, lock versions,
                    and compare fairly.
                </figcaption>
            </figure>

            {/* -------------------------------------------------- */}
            {/* Decision Tree + Truths                             */}
            {/* -------------------------------------------------- */}
            <h2>The Decision Tree I Actually Use</h2>
            <ul>
                <li>
                    <strong>Must keep data on device / work offline?</strong> → Start in{" "}
                    <strong>browser</strong>.
                </li>
                <li>
                    <strong>Need integrations, guardrails, logging?</strong> → Add{" "}
                    <strong>Node</strong>.
                </li>
                <li>
                    <strong>Want delightful progressive UX?</strong> → Build{" "}
                    <strong>React</strong> surface first.
                </li>
                <li>
                    <strong>Not confident about quality/speed?</strong> → Prototype/eval
                    in <strong>Python</strong>.
                </li>
            </ul>

            <h2>Performance Truths That Changed My Mind</h2>
            <ul>
                <li>
                    <strong>p50 lies; p95 tells the story.</strong>
                </li>
                <li>Streaming hides latency better than micro-optimizing decode.</li>
                <li>
                    Cache the expensive step upstream; retrieval cache beats answer cache.
                </li>
                <li>
                    Small models + good retrieval often beat giant models + bad context.
                </li>
            </ul>

            <h2>Safety, Cost &amp; Ops That Actually Matter</h2>
            <ul>
                <li>
                    Sanitize inputs, cap context, never execute model output; secrets stay
                    server-side.
                </li>
                <li>Rate limits protect UX from your own success.</li>
                <li>Alert on p95 and cache hit ratio, not every 500.</li>
                <li>
                    Feature flags let you dark-launch prompts without redeploys.
                </li>
            </ul>

            <h2>Reusable Checklist (I Paste This Into Every New AI Task)</h2>
            <ul>
                <li>One-line problem; one-line success metric.</li>
                <li>Golden eval set (100–300 items) + baseline numbers.</li>
                <li>
                    Runtime decision (Browser / Node / React / Python) with a one-line
                    why.
                </li>
                <li>Guardrails: input caps, filters, rate limits, retries.</li>
                <li>Observability: logs, p95, cache hits, token usage.</li>
                <li>Rollout: flags, fallbacks, timeouts, abort.</li>
                <li>Postmortem: surprises + what I’d change.</li>
            </ul>

            <h2>Closing</h2>
            <p>
                I didn’t learn AI by repeating one demo across stacks. I learned it by{" "}
                <strong>shipping to constraints</strong>—UX in React, privacy in the
                browser, guardrails in Node, and truth in Python. The stack is a means.
                The metric is the point.
            </p>
        </Styled.Wrapper>
    );
}

/* =========================================================
   CODE SNIPPETS (inline as strings to render pretty)
   ========================================================= */

const reactStreamSnippet = `// React — streaming answer with AbortController & progressive UI
import { useRef, useState } from "react";

export default function AskBox() {
  const [q, setQ] = useState("");
  const [ans, setAns] = useState("");
  const [busy, setBusy] = useState(false);
  const abortRef = useRef(null);

  async function ask() {
    setBusy(true);
    setAns("");
    abortRef.current?.abort();
    abortRef.current = new AbortController();

    try {
      const res = await fetch("/answer/stream", {
        method: "POST",
        body: JSON.stringify({ q }),
        headers: { "Content-Type": "application/json" },
        signal: abortRef.current.signal,
      });
      const reader = res.body.getReader();
      const dec = new TextDecoder();

      while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        setAns((prev) => prev + dec.decode(value, { stream: true }));
      }
    } catch (e) {
      if (e.name !== "AbortError") console.error(e);
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="askBox">
      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Ask about my blog…"
      />
      <button onClick={ask} disabled={!q || busy}>Ask</button>
      <button onClick={() => abortRef.current?.abort()} disabled={!busy}>
        Stop
      </button>

      <div className="answer">
        {!ans && busy && <span className="skeleton">Thinking…</span>}
        <pre>{ans}</pre>
      </div>
    </div>
  );
}`;

const browserWorkerSnippet = `// Browser-only — Worker computes cosine similarity on toy embeddings

// main.js
const worker = new Worker(new URL("./search.worker.js", import.meta.url), {
  type: "module",
});
const docs = [
  { id: 1, text: "Lazy loading routes in React with Suspense…" },
  { id: 2, text: "Vector search basics and cosine similarity…" },
  // …
];
const store = { embeddings: [] };

async function init() {
  // imagine this loads a tiny embedding model or a pre-baked array
  store.embeddings = await fetch("/embeddings.json").then((r) => r.json());
}
function query(q) {
  return new Promise((resolve) => {
    worker.onmessage = (e) => resolve(e.data); // [{id, score}]
    worker.postMessage({ q, docs, embeddings: store.embeddings });
  });
}

// search.worker.js
self.onmessage = (e) => {
  const { q, docs, embeddings } = e.data;
  const qVec = embedToy(q);
  const scored = docs
    .map((d, i) => ({ id: d.id, score: cosine(qVec, embeddings[i]) }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 5);
  self.postMessage(scored);
};

function embedToy(text) {
  const v = new Float32Array(64);
  for (let ch of text.toLowerCase()) v[ch.charCodeAt(0) % 64] += 1;
  return l2norm(v);
}
function cosine(a, b) {
  let dot = 0,
    na = 0,
    nb = 0;
  for (let i = 0; i < a.length; i++) {
    dot += a[i] * b[i];
    na += a[i] * a[i];
    nb += b[i] * b[i];
  }
  return dot / (Math.sqrt(na) * Math.sqrt(nb) + 1e-8);
}
function l2norm(v) {
  let n = 0;
  for (let i = 0; i < v.length; i++) n += v[i] * v[i];
  n = Math.sqrt(n) + 1e-8;
  for (let i = 0; i < v.length; i++) v[i] /= n;
  return v;
}`;

const nodeServiceSnippet = `// Node.js — Express endpoints: /embed, /search, /answer
import express from "express";

const app = express();
app.use(express.json());

const store = {
  docs: [],             // { id, text, meta }
  embeddings: new Map() // id -> Float32Array
};

// Fake embed (for demo). Replace with real model/SDK.
function embed(text) {
  const v = new Float32Array(64);
  for (let ch of text.toLowerCase()) v[ch.charCodeAt(0) % 64] += 1;
  // L2 norm
  let n = 0;
  for (let i = 0; i < v.length; i++) n += v[i] * v[i];
  n = Math.sqrt(n) + 1e-8;
  for (let i = 0; i < v.length; i++) v[i] /= n;
  return v;
}
function cosine(a, b) {
  let dot = 0,
    na = 0,
    nb = 0;
  for (let i = 0; i < a.length; i++) {
    dot += a[i] * b[i];
    na += a[i] * a[i];
    nb += b[i] * b[i];
  }
  return dot / (Math.sqrt(na) * Math.sqrt(nb) + 1e-8);
}

// Embed documents (batch)
app.post("/embed", (req, res) => {
  const { docs } = req.body; // [{id,text,meta}]
  for (const d of docs) {
    store.docs.push(d);
    store.embeddings.set(d.id, embed(d.text));
  }
  res.json({ ok: true, count: docs.length });
});

// Search
app.post("/search", (req, res) => {
  const { q, k = 5 } = req.body;
  const qVec = embed(q);
  const scored = store.docs
    .map((d) => ({
      id: d.id,
      score: cosine(qVec, store.embeddings.get(d.id)),
      meta: d.meta,
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, k);
  res.json(scored);
});

// Answer (toy; for demo purposes)
app.post("/answer", (req, res) => {
  const { q } = req.body;
  const top = store.docs.slice(0, 3).map((d) => d.text).join("\\n");
  const summary = \`Q: \${q}\\nA (heuristic): \${top.slice(0, 320)}...\`;
  res.json({ summary, sources: store.docs.slice(0, 3).map((d) => d.id) });
});

app.listen(1198, () => console.log("AI service on :1198"));`;

const pythonEvalSnippet = `# Python — tiny retrieval evaluation (nDCG@3) + batch embed cache
import math, json

def embed_toy(text):
    v = [0.0] * 64
    for ch in text.lower():
        v[ord(ch) % 64] += 1.0
    n = math.sqrt(sum(x*x for x in v)) + 1e-8
    return [x/n for x in v]

def cosine(a, b):
    dot = sum(x*y for x, y in zip(a, b))
    na = math.sqrt(sum(x*x for x in a))
    nb = math.sqrt(sum(x*x for x in b))
    return dot / (na*nb + 1e-8)

def dcg(scores):
    return sum((2**rel - 1) / math.log2(i + 2) for i, rel in enumerate(scores))

def ndcg_at_k(gt_rels, pred_ids, k=3):
    gains = [gt_rels.get(doc_id, 0) for doc_id in pred_ids[:k]]
    ideal = sorted(gt_rels.values(), reverse=True)[:k]
    return dcg(gains) / (dcg(ideal) + 1e-8)

# Fake dataset
docs = {i: f"Doc {i} about embeddings and cosine {i % 3}." for i in range(1, 101)}
emb = {i: embed_toy(t) for i, t in docs.items()}

queries = {
    "how cosine works": {5: 3, 8: 2, 12: 1},
    "embeddings basics": {2: 3, 7: 2, 14: 1},
}

def search(q, k=3):
    qv = embed_toy(q)
    scored = sorted(docs.keys(), key=lambda i: cosine(qv, emb[i]), reverse=True)[:k]
    return scored

scores = [ndcg_at_k(gt, search(q), k=3) for q, gt in queries.items()]
print("nDCG@3 =", sum(scores) / len(scores))

# Save embeddings cache artifact
with open("embeddings_cache.json", "w") as f:
    json.dump({i: emb[i] for i in emb}, f)
print("Saved embeddings_cache.json")`;
