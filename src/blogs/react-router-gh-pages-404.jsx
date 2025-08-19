export const meta = {
    slug: "react-router-gh-pages-404",
    title:
        "The Sunday Night 404: Fixing React Router on GitHub Pages (and the double /blog bug)",
    date: "2025-01-12",
    tags: ["react", "vite", "github-pages", "react-router", "debugging"],
    excerpt:
        "Deployed a React app to GitHub Pages, deep links returned 404, and some routes showed /blog/blog/... Here’s exactly what broke and the 15-minute fix.",
    cover:
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200",
};

export default function Post() {
    return (
        <article>
            <h1>{meta.title}</h1>
            <p>
                <em>{meta.date}</em> • {meta.tags.join(", ")}
            </p>

            <p>
                Sunday night, I pushed a fresh build of my React blog to GitHub Pages,
                shared the link, opened a post on my phone—and hit a <strong>404</strong>.
                The home page loaded, but any deep link like <code>/script-vs-module</code> failed.
                On top of that, a few URLs turned into <code>/blog/blog/slug</code>. Perfect chaos.
            </p>

            <h2>What actually broke</h2>
            <ul>
                <li>
                    <strong>SPA deep links:</strong> GitHub Pages serves static files. If you visit
                    <code> /some-route</code> directly, it looks for <code>some-route.html</code>.
                    In a single-page app, we need every unknown path to load <code>index.html</code>.
                </li>
                <li>
                    <strong>Base URL mismatch:</strong> Project pages live under <code>/&lt;repo&gt;/</code>.
                    If assets or routes assume site root <code>/</code>, you’ll see broken CSS/JS or duplicated
                    segments like <code>/blog/blog/...</code>.
                </li>
            </ul>

            <h2>The 15-minute fix I used</h2>

            <h3>1) Set Vite <code>base</code> to the repo path</h3>
            <pre>{`// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/blog/", // <-- repo name
});`}</pre>
            <p>
                This makes built asset URLs resolve from <code>/blog/</code>. Without it, CSS/JS can 404 on Pages.
            </p>

            <h3>2) Make the router basename portable</h3>
            <pre>{`// src/main.jsx
import { BrowserRouter } from "react-router-dom";
// ...
<BrowserRouter basename={import.meta.env.BASE_URL}>
  <App />
</BrowserRouter>`}</pre>
            <p>
                In local dev, <code>BASE_URL = "/"</code>; on Pages, it’s <code>"/blog/"</code>.
                Same code works in both places.
            </p>

            <h3>3) Remove hardcoded <code>/blog</code> from routes/links</h3>
            <pre>{`// ✅ Correct (let basename handle the prefix)
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/:slug" element={<Post />} />
  <Route path="/about" element={<About />} />
  <Route path="*" element={<NotFound />} />
</Routes>

// ✅ Links
<Link to={\`/\${post.slug}\`}>{post.title}</Link>`}</pre>
            <p>
                My mistake was having both a basename <em>and</em> hardcoded <code>/blog</code> in paths,
                producing <code>/blog/blog/slug</code>.
            </p>

            <h3>4) Add SPA fallback for deep links</h3>
            <pre>{`// public/404.html
// Copy your index.html as 404.html.
// Vite will ship it to dist/ so GH Pages serves the SPA for unknown routes.`}</pre>
            <p>
                When Pages can’t find a file for <code>/some-route</code>, it serves <code>404.html</code>.
                If that bootstraps the SPA, the client router resolves the route.
            </p>

            <h2>Sanity checks before you share the link</h2>
            <ul>
                <li>
                    <strong>Local prod preview:</strong> <code>npm run build && npm run preview</code>.
                    Test deep links like <code>/any-slug</code>.
                </li>
                <li>
                    <strong>No duplicate segments:</strong> Inspect links. If you see <code>/blog/blog</code>,
                    you’re adding the prefix twice.
                </li>
                <li>
                    <strong>Pages settings:</strong> Repo → <em>Settings → Pages</em> → Deploy from
                    <code> gh-pages</code> (if using the <code>gh-pages</code> CLI) or the Actions environment (if using CI).
                </li>
            </ul>

            <h2>CLI vs Actions (I used CLI here)</h2>
            <p>Simple and reliable for a blog:</p>
            <pre>{`"scripts": {
  "predeploy": "vite build",
  "deploy": "gh-pages -d dist -b gh-pages"
}`}</pre>

            <h2>Symptoms → Causes (quick map)</h2>
            <ul>
                <li>
                    <strong>Home works, deep links 404:</strong> Missing <code>public/404.html</code>.
                </li>
                <li>
                    <strong>CSS/JS 404 only on Pages:</strong> Missing/incorrect <code>base</code> in Vite config.
                </li>
                <li>
                    <strong>Routes look like /blog/blog/slug:</strong> Hardcoded <code>/blog</code> + router <code>basename</code>.
                </li>
                <li>
                    <strong>Works locally, fails after deploy:</strong> You tested the dev server, not the production preview.
                </li>
            </ul>

            <h2>What changed in my commits</h2>
            <pre>{`feat: set Vite base to /blog/
chore: BrowserRouter basename = import.meta.env.BASE_URL
fix: remove hardcoded /blog from routes and links
chore: add public/404.html for SPA fallback
chore: add gh-pages deploy script`}</pre>

            <p>
                That was it. I reloaded on the phone, the post opened instantly, and I finally sent the
                “live now” message without sweating. If you’re on a custom domain, the same checklist applies—just
                make sure DNS and Pages are aligned.
            </p>

            <p>
                Next week I’ll share a real bug-hunt from a MERN app where an innocent <code>useEffect</code>
                created a hidden N+1 API problem. Fun one.
            </p>
        </article>
    );
}
