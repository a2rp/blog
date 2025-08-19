import { formatDate } from "../utils/format";

export const meta = {
    slug: "kickoff-tech-blog-2025",
    title: "My 2025 Tech Blog Plan — What I'll Write, How I'll Ship, and Why",
    date: "2025-01-05",
    tags: ["blogging", "react", "productivity", "career"],
    excerpt:
        "Weekly tech posts in 2025: my stack (React + Vite + GH Pages), workflow, and the promise I'm making to myself.",
    cover:
        "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1200",
};

export default function Post() {
    return (
        <article>
            <h1>{meta.title}</h1>
            <p><em>{formatDate(meta.date)}</em> • {meta.tags.join(", ")}</p>

            <p>
                I've decided to publish one post every week in 2025. Short, practical,
                and honest—stuff I actually use while building products in React/MERN.
                This post is the kickoff: what I'll write about, the stack I'm using,
                and my workflow so I don't miss a week.
            </p>

            <h2>Why weekly?</h2>
            <ul>
                <li>Writing clarifies thinking and improves code quality.</li>
                <li>Public notes help future-me (and maybe help you too).</li>
                <li>Consistency beats perfection—ship small, ship often.</li>
            </ul>

            <h2>Publishing stack (simple & free)</h2>
            <ul>
                <li>
                    <b>React + Vite + styled-components</b> — file-based posts (each post
                    is a component + <code>meta</code>).
                </li>
                <li>
                    <b>GitHub Pages</b> — deploy from <code>gh-pages</code> branch.
                </li>
                <li>
                    <b>Zero CMS</b> — fewer moving parts, easy to review in PRs.
                </li>
            </ul>

            <h3>Post component template I'll reuse</h3>
            <pre>{`export const meta = {
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
}`}</pre>

            <h2>Editorial rules I'll follow</h2>
            <ul>
                <li>Write in a conversational “I/we” voice. No fluff.</li>
                <li>Lead with the outcome; add context; then code.</li>
                <li>Keep posts ~800-1200 words. Code is the hero.</li>
                <li>One diagram or screenshot if it saves 200 words.</li>
            </ul>

            <h2>Themes for Q1 2025</h2>
            <ul>
                <li>React patterns I actually use (forms, state, performance).</li>
                <li>MERN bits: auth, payments, file uploads, queues.</li>
                <li>Tooling that saves time: Vite, ESLint, PNPM, GitHub Actions.</li>
                <li>Career/portfolio notes: shipping fast, writing good READMEs.</li>
            </ul>

            <h2>My writing workflow (90-minute sprint)</h2>
            <ol>
                <li><b>Idea → outline (10m):</b> 3-5 bullet outcomes.</li>
                <li><b>Draft (50m):</b> code first, text second.</li>
                <li><b>Edit (20m):</b> cut 20%, add headings, check links.</li>
                <li><b>Ship (10m):</b> commit message = post title, deploy.</li>
            </ol>

            <p>
                That's it. If you're reading this and want a specific topic covered,
                ping me—DMs open. Next week we dive into a hands-on technical post.
            </p>
        </article>
    );
}
