import{j as e}from"./index-B2c9NimY.js";const i={slug:"kickoff-tech-blog-2025",title:"My 2025 Tech Blog Plan — What I’ll Write, How I’ll Ship, and Why",date:"2025-01-05",tags:["blogging","react","productivity","career"],excerpt:"Weekly tech posts in 2025: my stack (React + Vite + GH Pages), workflow, and the promise I’m making to myself.",cover:"https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1200"};function t(){return e.jsxs("article",{children:[e.jsx("h1",{children:i.title}),e.jsxs("p",{children:[e.jsx("em",{children:i.date})," • ",i.tags.join(", ")]}),e.jsx("p",{children:"I’ve decided to publish one post every week in 2025. Short, practical, and honest—stuff I actually use while building products in React/MERN. This post is the kickoff: what I’ll write about, the stack I’m using, and my workflow so I don’t miss a week."}),e.jsx("h2",{children:"Why weekly?"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Writing clarifies thinking and improves code quality."}),e.jsx("li",{children:"Public notes help future-me (and maybe help you too)."}),e.jsx("li",{children:"Consistency beats perfection—ship small, ship often."})]}),e.jsx("h2",{children:"Publishing stack (simple & free)"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("b",{children:"React + Vite + styled-components"})," — file-based posts (each post is a component + ",e.jsx("code",{children:"meta"}),")."]}),e.jsxs("li",{children:[e.jsx("b",{children:"GitHub Pages"})," — deploy from ",e.jsx("code",{children:"gh-pages"})," branch."]}),e.jsxs("li",{children:[e.jsx("b",{children:"Zero CMS"})," — fewer moving parts, easy to review in PRs."]})]}),e.jsx("h3",{children:"Post component template I’ll reuse"}),e.jsx("pre",{children:`export const meta = {
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
}`}),e.jsx("h2",{children:"Editorial rules I’ll follow"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Write in a conversational “I/we” voice. No fluff."}),e.jsx("li",{children:"Lead with the outcome; add context; then code."}),e.jsx("li",{children:"Keep posts ~800–1200 words. Code is the hero."}),e.jsx("li",{children:"One diagram or screenshot if it saves 200 words."})]}),e.jsx("h2",{children:"Themes for Q1 2025"}),e.jsxs("ul",{children:[e.jsx("li",{children:"React patterns I actually use (forms, state, performance)."}),e.jsx("li",{children:"MERN bits: auth, payments, file uploads, queues."}),e.jsx("li",{children:"Tooling that saves time: Vite, ESLint, PNPM, GitHub Actions."}),e.jsx("li",{children:"Career/portfolio notes: shipping fast, writing good READMEs."})]}),e.jsx("h2",{children:"My writing workflow (90-minute sprint)"}),e.jsxs("ol",{children:[e.jsxs("li",{children:[e.jsx("b",{children:"Idea → outline (10m):"})," 3–5 bullet outcomes."]}),e.jsxs("li",{children:[e.jsx("b",{children:"Draft (50m):"})," code first, text second."]}),e.jsxs("li",{children:[e.jsx("b",{children:"Edit (20m):"})," cut 20%, add headings, check links."]}),e.jsxs("li",{children:[e.jsx("b",{children:"Ship (10m):"})," commit message = post title, deploy."]})]}),e.jsx("p",{children:"That’s it. If you’re reading this and want a specific topic covered, ping me—DMs open. Next week we dive into a hands-on technical post."})]})}const l=Object.freeze(Object.defineProperty({__proto__:null,default:t,meta:i},Symbol.toStringTag,{value:"Module"}));export{l as _};
