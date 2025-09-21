import { Styled } from "./styled";
import how_to_talk_to_ai_better_answers from "../assets/covers/how-to-talk-to-ai-better-answers.png";

export const meta = {
    title: "How to Talk to AI: A 10-Minute Guide for Better Answers",
    slug: "how-to-talk-to-ai-better-answers",
    date: "2025-09-21",
    author: "Ashish Ranjan - Full-Stack Developer",
    category: "AI for Everyone",
    tags: ["AI", "Productivity", "Education", "Privacy"],
    excerpt:
        "Achhe sawaal → achhe jawaab. Master a 5-step prompt formula (Goal, Context, Constraints, Example, Format) with ready templates for teachers, students, founders, and devs.",
    cover: how_to_talk_to_ai_better_answers,
};

export default function Post() {
    return (
        <Styled.Wrapper>
            <Styled.Info>
                <h1>{meta.title}</h1>
                <div><b>By:</b> {meta.author}</div>
                <div><b>Published on:</b> September 21, 2025</div>
                <div><b>Category:</b> {meta.category}</div>
            </Styled.Info>

            <img
                src={meta.cover}
                alt={meta.title}
                style={{ height: "600px", width: "100%", marginBottom: "15px", objectFit: "cover" }}
            />

            <p>
                Most people use AI like a search box: type anything, hope for magic. Senior devs treat it like a junior
                teammate-give a clear job, the right context, and a format to deliver in. This post gives you a simple,
                repeatable formula anyone can use: students, teachers, business owners, and developers.
            </p>

            <Styled.Analogy>
                <p>
                    <strong>Analogy:</strong> AI is an <em>apprentice</em>. It's fast, pattern-smart, and tireless-but literal.
                    If your instructions are vague, outcomes are random. Be specific about what, for whom, and how to present it.
                </p>
            </Styled.Analogy>

            <h2>TL;DR - The 5-Step Prompt Formula (G-C-C-E-F)</h2>
            <ul>
                <li><strong>Goal:</strong> What outcome do you want?</li>
                <li><strong>Context:</strong> Who is it for, what's the background?</li>
                <li><strong>Constraints:</strong> Limits like length, tone, locale, budget, tools.</li>
                <li><strong>Example:</strong> Show a tiny sample or style hint.</li>
                <li><strong>Format:</strong> Ask for a table, bullets, JSON, or a checklist.</li>
            </ul>
            <p><em>One-line memory hook:</em> <strong>G-C-C-E-F</strong> - Goal, Context, Constraints, Example, Format.</p>

            <h2>Why This Works (Without Jargon)</h2>
            <p>
                AI predicts the most likely next words. When you anchor the task with a <em>clear goal</em> and reduce ambiguity
                with <em>context</em> and <em>constraints</em>, you narrow the solution space. An <em>example</em> sets style,
                and a <em>format</em> makes the answer copy-paste-ready.
            </p>

            <h2>The Master Template (Copy-Paste)</h2>
            <p>
                <code>
                    Help me &lt;GOAL&gt; for &lt;AUDIENCE&gt;. Context: &lt;key details&gt;. Constraints: &lt;limits/tone/INR/locale&gt;. Example style: &lt;brief hint&gt;. Output format: &lt;table/bullets/JSON&gt;. If info missing, ask me 3 questions first.
                </code>
            </p>

            <h2>6 Ready-Made Mini Prompts (For Different People)</h2>
            <ul>
                <li>
                    <strong>Teacher:</strong> "Make a 40-min lesson plan for Grade 8 History on 'Indian Constitution'.
                    Include: learning goals (3), warm-up (5 min), activity (20 min), assessment (5 Qs), homework (1).
                    <em>Output:</em> bullet list".
                </li>
                <li>
                    <strong>Small Business:</strong> "Give 5 WhatsApp templates for a boutique sale (Bengaluru, 20% off this weekend). Keep &lt;140 chars, polite, with CTA and INR pricing. <em>Output:</em> table with columns: Message, Use-case".
                </li>
                <li>
                    <strong>Student:</strong> "Explain Pythagoras theorem in simple Hindi + 1 real-life example. Then 3 practice questions with answers. <em>Output:</em> bullets".
                </li>
                <li>
                    <strong>Developer:</strong> "Write acceptance criteria for a login page (email+password). Include success, error, and edge cases. <em>Output:</em> checklist".
                </li>
                <li>
                    <strong>Parent:</strong> "Create a 7-day study plan for Class 6 Maths, 45 minutes/day, mix revision + practice. <em>Output:</em> table with Day, Topic, Tasks".
                </li>
                <li>
                    <strong>Founder:</strong> "Draft a 1-page product brief for a note-taking app. Sections: target users, top 3 jobs-to-be-done, must-haves, nice-to-haves, launch metrics. <em>Output:</em> markdown headings".
                </li>
            </ul>

            <h2>Turn Good to Great - Follow-Ups That Improve Quality</h2>
            <ul>
                <li><strong>Refine tone:</strong> "More friendly". / "More concise". / "Hindi + English mix".</li>
                <li><strong>Narrow scope:</strong> "Only 3 options". / "Focus on beginners". / "Indian examples only".</li>
                <li><strong>Change form:</strong> "Turn into a checklist". / "Return JSON". / "Make it printable bullets".</li>
                <li><strong>Validate:</strong> "List assumptions you made". / "What info do you still need?"</li>
            </ul>

            <Styled.Analogy>
                <p>
                    <strong>Builder's Note:</strong> Think in <em>iterations</em>. First prompt = draft. Each follow-up trims ambiguity.
                    Two or three tight follow-ups often beat one giant prompt.
                </p>
            </Styled.Analogy>

            <h2>Safety & Privacy - Simple, Practical Defaults</h2>
            <ul>
                <li><strong>Redact sensitive info:</strong> No PAN/Aadhaar/passwords. Summarize instead of pasting raw confidential data.</li>
                <li><strong>Prefer on-device features</strong> when available (dictation, translation packs) for speed + privacy.</li>
                <li><strong>Ask tools:</strong> "Does this run locally or in cloud?" Choose the private path for personal docs.</li>
                <li><strong>Export & delete:</strong> Know where to download your data; clean old histories periodically.</li>
            </ul>

            <h2>What Bad Prompts Look Like (and Fixes)</h2>
            <ul>
                <li>
                    <strong>Vague:</strong> "Make a lesson plan". → <em>Fix:</em> Add grade, duration, topic, activities,
                    assessment, <strong>and</strong> output format.
                </li>
                <li>
                    <strong>Open-ended:</strong> "Write marketing ideas". → <em>Fix:</em> industry, city, target audience,
                    budget range, channel, examples you like, tone.
                </li>
                <li>
                    <strong>Overloaded:</strong> 3000 words of paste → <em>Fix:</em> summarize context in 5 lines; attach
                    only the necessary excerpt.
                </li>
            </ul>

            <h2>Quick Cheatsheet (Bookmark This)</h2>
            <p>
                <code>
                    Help me &lt;goal&gt; for &lt;audience&gt;. Context: &lt;3 lines max&gt;. Constraints: &lt;limits/tone/INR/locale&gt;. Example style: &lt;hint&gt;. Output: &lt;bullets/table/JSON&gt;. Ask 3 clarifying questions if needed.
                </code>
            </p>

            <h2>Printable Mini-Checklist</h2>
            <ul>
                <li>[ ] Define the <strong>Goal</strong> in one line</li>
                <li>[ ] Add <strong>Context</strong>: audience, background, locale</li>
                <li>[ ] Set <strong>Constraints</strong>: length, tone, INR, platform</li>
                <li>[ ] Drop an <strong>Example</strong> (1-2 lines) for style</li>
                <li>[ ] Lock the <strong>Format</strong>: bullets / table / JSON</li>
                <li>[ ] Follow-up: refine tone, scope, and assumptions</li>
                <li>[ ] Safety: redact sensitive data; prefer on-device if possible</li>
            </ul>

            <h2>For Power Users - Prompts That Scale</h2>
            <ul>
                <li><strong>Role prompts:</strong> "Act as a friendly Grade 7 science teacher from Bengaluru."</li>
                <li><strong>Constraints as tests:</strong> "If you exceed 120 words, rewrite until under limit."</li>
                <li><strong>Quality bars:</strong> "List 3 failure modes and fix them before final output."</li>
                <li><strong>Reusable macros:</strong> Save your best prompts as templates/snippets for weekly tasks.</li>
            </ul>

            <h2>Common Myths (Debunked)</h2>
            <ul>
                <li><strong>"AI understands like a human."</strong> It recognizes patterns; it doesn't have intent.</li>
                <li><strong>"One monster prompt solves everything."</strong> Iteration beats mega-prompts.</li>
                <li><strong>"Privacy means no AI."</strong> Many features run on-device-use them first.</li>
            </ul>

            <h2>The Bottom Line</h2>
            <p>
                Better prompts aren't about fancy words-they're about <em>clarity</em>. Lead with the outcome, add just enough
                context and constraints, show a tiny example, and demand a clean format. Do this, and your results jump-
                whether you're a teacher planning tomorrow's class, a founder writing product copy, or a developer drafting
                acceptance criteria.
            </p>

            <p><strong>CTA:</strong> Want a printable one-pager with teacher, founder, and developer templates? Comment <em>TEMPLATE</em> and I'll share the PDF.</p>
        </Styled.Wrapper>
    );
}
