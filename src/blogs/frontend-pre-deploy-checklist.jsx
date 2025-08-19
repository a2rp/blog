import styled from "styled-components";

import cover from "../assets/blogs/pre-deploy-checklist/cover.png";
import lighthouse from "../assets/blogs/pre-deploy-checklist/lighthouse.png";
import ogPreview from "../assets/blogs/pre-deploy-checklist/og-preview.png";
import { formatDate } from "../utils/format";

export const meta = {
    slug: "frontend-pre-deploy-checklist",
    title: "My Frontend Pre-Deploy Checklist (and where AI actually helps)",
    date: "2025-02-16",
    tags: ["frontend", "react", "seo", "accessibility", "ai"],
    excerpt:
        "Before I ship a React site, I run the same short checklist: build, links, meta, images, a11y, and basic perf. Here's exactly what I do and the tiny AI assists I trust.",
    cover,
};

const Figure = styled.figure`
  margin: 16px 0;
  display: grid;
  gap: 8px;
`;
const FigImg = styled.img`
  width: 100%;
  height: auto;
  border-radius: 12px;
  border: 1px solid rgba(255,255,255,.08);
`;
const FigCap = styled.figcaption`
  font-size: 13px;
  opacity: .8;
`;

export default function Post() {
    return (
        <article>
            <h1>{meta.title}</h1>
            <p><em>{formatDate(meta.date)}</em> • {meta.tags.join(", ")}</p>

            <p>
                I don't push a React site live without doing these checks. It takes me
                ~15-20 minutes and saves me from obvious "why is the preview broken on
                WhatsApp?" or "why is the CSS missing on GitHub Pages?" messages. I also
                use AI in a few tiny places—never blindly.
            </p>

            <Figure>
                <FigImg src={cover} alt="Laptop with a short deployment checklist on a sticky note" loading="lazy" />
                <FigCap>The goal is boring deploys. This checklist keeps them boring.</FigCap>
            </Figure>

            <h2>1) Production build & preview</h2>
            <pre>{`npm run build && npm run preview  # always test the prod build locally`}</pre>
            <ul>
                <li>I click through the main routes, including deep links like <code>/post/some-slug</code>.</li>
                <li>I watch the console for missing asset paths or CORS errors.</li>
            </ul>

            <h3>Where AI helps</h3>
            <p>
                If I see a vague error ("Cannot read properties of undefined"), I paste a
                <em>minimal</em> snippet and ask for likely causes. I ignore any fix that
                rewrites half my app. Small hints only.
            </p>

            <h2>2) Base path & router sanity (GH Pages / subfolders)</h2>
            <pre>{`// vite.config.js
export default defineConfig({
  base: "/blog/", // if deploying to a subpath
});`}</pre>
            <pre>{`// main.jsx
<BrowserRouter basename={import.meta.env.BASE_URL}>
  <App />
</BrowserRouter>`}</pre>
            <p>
                I've broken this enough times to respect it. I don't hardcode <code>/blog</code> in routes.
            </p>

            <h2>3) Links, 404s, and simple crawl</h2>
            <p>I run a quick broken-link check against the local preview:</p>
            <pre>{`// scripts/check-links.mjs (very small)
import fetch from "node-fetch";
const routes = ["/", "/about", "/contact"]; // add more
const base = "http://localhost:4173";
for (const r of routes) {
  const res = await fetch(base + r);
  console.log(r, res.status);
}`}</pre>
            <p>
                It's basic, but it catches fat-fingered paths. I also copy
                <code>index.html</code> to <code>public/404.html</code> for SPA fallback.
            </p>

            <h2>4) Meta tags, Open Graph, and share previews</h2>
            <pre>{`<meta name="description" content="Short, human summary under 160 chars" />
<meta property="og:title" content="Site Title" />
<meta property="og:description" content="Same short summary" />
<meta property="og:image" content="/cover-1200x630.jpg" />
<meta name="twitter:card" content="summary_large_image" />`}</pre>
            <p>
                I keep one default OG image in <code>public/</code> and add per-post overrides for blog pages.
            </p>

            <Figure>
                <FigImg src={ogPreview} alt="Social preview image showing title and banner" loading="lazy" />
                <FigCap>On day one, a clean OG image is higher ROI than a fancy animation.</FigCap>
            </Figure>

            <h3>Where AI helps</h3>
            <p>
                I ask for 2-3 alternative meta descriptions from my own draft and pick
                the cleanest one. I never let it invent facts.
            </p>

            <h2>5) Images: size, lazy, alt text</h2>
            <ul>
                <li>I avoid shipping 2000px images in 300px cards.</li>
                <li>I add <code>loading="lazy"</code> below the fold.</li>
                <li>I write <em>short, literal</em> alt text. If I use AI, I keep it to a prompt like "write a 6-10 word literal alt text."</li>
            </ul>
            <pre>{`<img
  src="/covers/hero-640.webp"
  srcSet="/covers/hero-640.webp 640w, /covers/hero-960.webp 960w"
  sizes="(max-width: 768px) 100vw, 640px"
  loading="lazy"
  alt="Product dashboard with charts"
/>`}</pre>

            <h2>6) Accessibility quick pass</h2>
            <ul>
                <li>Tab through the page; check focus, skip links, visible outlines.</li>
                <li>Check color contrast on a couple of key components.</li>
                <li>Ensure buttons are buttons (not divs), links are links.</li>
            </ul>
            <p>
                I don't rely on AI here—small screens and keyboard feel tell me more than a score.
            </p>

            <h2>7) Lighthouse basics (not chasing 100)</h2>
            <p>
                I run one Lighthouse report, fix the obvious (render-blocking fonts, unused huge images),
                and stop when it's "good enough" for my use case.
            </p>

            <Figure>
                <FigImg src={lighthouse} alt="Lighthouse report screenshot with decent scores" loading="lazy" />
                <FigCap>Good enough beats perfect. I fix the big reds, not every nit.</FigCap>
            </Figure>

            <h2>8) Environment variables and secrets</h2>
            <ul>
                <li>Confirm public keys are in <code>VITE_*</code> and safe to expose.</li>
                <li>Ensure I didn't log secrets in the console during dev.</li>
            </ul>

            <h2>9) Analytics & privacy basics</h2>
            <ul>
                <li>Pageview fires once per route change (SPAs need manual hooks).</li>
                <li>Respect "Do Not Track" if that's a policy; cookie banner is not a license to collect everything.</li>
            </ul>

            <h2>10) Version bump, changelog, deploy</h2>
            <pre>{`npm version patch -m "chore: release %s"
git push && npm run deploy`}</pre>

            <h2>Where AI didn't help (for me)</h2>
            <ul>
                <li>Auto-fix PRs that touch multiple concerns. It looked smart, broke edge cases.</li>
                <li>"Write all the tests" prompts—too generic. I do one happy path myself, then ask for variations.</li>
            </ul>

            <p>
                That's it. Boring steps, fewer surprises. If I had to pick just three:
                production preview, OG image/description, and a quick Lighthouse pass.
                The rest is muscle memory.
            </p>
        </article>
    );
}
