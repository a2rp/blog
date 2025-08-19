import styled from "styled-components";

import resumeLayout from "../assets/blogs/resume-portfolio-checklist/resume-structure-example.png";
import portfolioHome from "../assets/blogs/resume-portfolio-checklist/portfolio-homepage-screenshot.png";
import readmeShot from "../assets/blogs/resume-portfolio-checklist/project-readme-example.png";
import { formatDate } from "../utils/format";

export const meta = {
    slug: "resume-portfolio-checklist",
    title: "My Resume & Portfolio Checklist for Tech Students (practical and short)",
    date: "2025-03-23", // Sunday
    tags: ["career", "students", "resume", "portfolio", "jobs"],
    excerpt:
        "What I keep on a one-page resume, how I shape project write-ups, and a quick 30-minute routine that actually improves callbacks.",
    cover: resumeLayout,
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
                I keep this post for juniors and friends who ask, “What should my resume and
                portfolio actually look like?” This is the simple version I use myself—one
                page, clear projects, and links that work.
            </p>

            <h2>1) My one-page resume layout</h2>
            <ul>
                <li><strong>Header:</strong> Name • city • email • <code>yourdomain.com</code> • GitHub • LinkedIn.</li>
                <li><strong>Summary (2 lines max):</strong> what you build + one strength (e.g., “React + Node; shipped 3 small apps”).</li>
                <li><strong>Projects (top section):</strong> 2-3 best projects with a single measurable line each.</li>
                <li><strong>Experience (if any):</strong> internships or freelance with outcome metrics.</li>
                <li><strong>Skills:</strong> grouped (Frontend, Backend, Tools). No 5-star bars.</li>
                <li><strong>Education:</strong> school, degree, year (relevant coursework optional).</li>
            </ul>

            <Figure>
                <FigImg
                    src={resumeLayout}
                    alt="One-page resume example with sections: header, projects, experience, skills, education"
                    loading="lazy"
                />
                <FigCap>One page is enough. Put your best projects above the fold.</FigCap>
            </Figure>

            <h3>Bullet that actually helps (before → after)</h3>
            <pre>{`// Before (vague):
Built an e-commerce site in MERN.

// After (specific + impact):
Built a MERN e-commerce app with Razorpay; cut checkout time ~35% by moving address validation client-side and caching product queries.`}</pre>

            <h3>PDF naming + links</h3>
            <ul>
                <li>Export as <strong>PDF</strong>: <code>Firstname-Lastname-Resume.pdf</code>.</li>
                <li>Make sure links (portfolio, GitHub, email) are clickable in the PDF.</li>
            </ul>

            <h2>2) Portfolio: what I show on the homepage</h2>
            <ul>
                <li><strong>One-line intro:</strong> “I build small, fast web apps with React & Node.”</li>
                <li><strong>Top projects grid:</strong> each card shows cover image, 1-line outcome, tech stack, and 2 links (Live • Code).</li>
                <li><strong>About/contact:</strong> a short paragraph and a clear email/DM link.</li>
            </ul>

            <Figure>
                <FigImg
                    src={portfolioHome}
                    alt="Portfolio homepage with hero line and a grid of project cards"
                    loading="lazy"
                />
                <FigCap>Hero line + 3 best projects with Live/Code buttons. That's enough.</FigCap>
            </Figure>

            <h2>3) How I write a project entry (card → detail)</h2>
            <ul>
                <li><strong>Problem:</strong> one sentence.</li>
                <li><strong>What I built:</strong> one sentence + stack.</li>
                <li><strong>Impact:</strong> a number or before/after (“-35% checkout time”).</li>
                <li><strong>Role:</strong> solo or team; what <em>I</em> did.</li>
                <li><strong>Links:</strong> Live • Code • README.</li>
                <li><strong>2-3 screenshots:</strong> home, a key flow, and mobile.</li>
            </ul>

            <h2>4) README structure I use (keeps reviewers on the page)</h2>
            <Figure>
                <FigImg
                    src={readmeShot}
                    alt="Project README with sections: demo, features, tech stack, setup, screenshots"
                    loading="lazy"
                />
                <FigCap>Short, skimmable README beats a giant essay.</FigCap>
            </Figure>

            <pre>{`# Project Name
One line: what it does and for whom.

## Demo
Live URL • short GIF/screenshot

## Features
- Feature A (why it exists)
- Feature B (impact)

## Tech
React, Vite, Node, MongoDB, Stripe

## Setup
pnpm i
pnpm dev
# .env keys listed here

## Screenshots
/img/home.png • /img/checkout.png • /img/mobile.png`}</pre>

            <h2>5) Common mistakes I remove</h2>
            <ul>
                <li>Paragraphs with no numbers. I add one measurable outcome per project.</li>
                <li>10 “mini projects” no one can open. I keep 2-3, make them solid.</li>
                <li>Broken links. I click every Live/Code link once a month.</li>
                <li>Fancy skill bars. Recruiters skip them; keep text lists instead.</li>
            </ul>

            <h2>6) My 30-minute tidy routine</h2>
            <ol>
                <li>Open resume → swap in the newest/best project bullet.</li>
                <li>Open portfolio → verify links, fix a typo, update a screenshot.</li>
                <li>Open top project README → add missing setup step or a recent change.</li>
            </ol>

            <h2>7) Sending applications (what I actually do)</h2>
            <ul>
                <li>I keep one base resume and make a small variant for the role (frontend vs backend).</li>
                <li>I reference one matching project in the first line of the email.</li>
                <li>I attach the PDF and also paste the portfolio link in the body.</li>
            </ul>

            <p>
                That's it. Clean one-pager, portfolio with three honest projects, and a README
                that answers setup questions. It's simple, and it works.
            </p>
        </article>
    );
}
