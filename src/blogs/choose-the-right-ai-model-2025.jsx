import { Styled } from "./styled";
import ai_model_chooser_2025 from "../assets/covers/choose-the-right-ai-model-2025.png";

export const meta = {
    title: "Choosing the Right AI Model in 2025 - A Practical Playbook for MERN Devs",
    slug: "choose-the-right-ai-model-2025",
    date: "2025-08-31",
    author: "Ashish Ranjan - Full-Stack Developer",
    category: "AI & LLMs",
    tags: ["AI", "LLM", "Beginner", "MERN", "Practical"],
    excerpt:
        "I'm a self-taught AI dev. This is my no-drama checklist for picking models: define the job, pick a speed, keep outputs tidy, only add RAG if it truly helps, and ship small.",
    cover: ai_model_chooser_2025,
};

export default function Post() {
    return (
        <Styled.Wrapper>
            <Styled.Info>
                <h1>{meta.title}</h1>
                <div><b>By:</b> {meta.author}</div>
                <div><b>Published on:</b> August 31, 2025</div>
                <div><b>Category:</b> {meta.category}</div>
            </Styled.Info>

            <img
                src={meta.cover}
                alt={meta.title}
                style={{ height: "600px", width: "100%", marginBottom: "15px", objectFit: "cover", borderRadius: 8 }}
            />

            <p>
                I'm a self-taught AI developer. When I first added AI to my MERN apps, I did what most of us do:
                pick the biggest model, write a long prompt, and hope users say "wow". They didn't. The UI lagged,
                JSON was messy, and my "smart" feature quietly annoyed people. So I simplified my approach.
                This post is a longer, honest version of the checklist I now follow.
            </p>

            <Styled.Analogy>
                <p>
                    <strong>Analogy:</strong> Choosing a model is like picking a vehicle for city errands. You don't
                    bring a truck to buy milk. A scooter that starts fast, handles traffic, and parks anywhere wins.
                    Same with models: match the size to the job, not the other way around.
                </p>
            </Styled.Analogy>

            <h2>What I usually build with AI</h2>
            <ul>
                <li>Turn unstructured text into small, neat JSON (for forms, product data, small summaries).</li>
                <li>Answer short, practical questions inside the app (not a full chat app). </li>
                <li>Light planning or suggestions that should appear in ~1-2 seconds.</li>
            </ul>

            <h2>Step 1 - Write the job in one line</h2>
            <p>If I can't write this sentence, I'm not ready to choose anything:</p>
            <pre>{`"Given X, return Y in Z seconds, shaped like this JSON: S."`}</pre>
            <p>Examples I actually use:</p>
            <ul>
                <li>"Given a product description, return <code>{`{title, price, currency, bullets[], inStock}`}</code> in ≤ <b>1.5s</b>."</li>
                <li>"Given a support message, return <code>{`{intent, priority, tags[]}`}</code> in ≤ <b>800ms</b>."</li>
                <li>"Given a paragraph, return a <code>{`{summary}`}</code> (≤ 70 words) in ≤ <b>2s</b>."</li>
            </ul>

            <h2>Step 2 - Pick the speed first (how it should <em>feel</em>)</h2>
            <ul>
                <li><b>&lt; 0.15s (instant):</b> type-ahead vibes. Use tiny/edge models. Keep prompts tiny.</li>
                <li><b>0.15-0.8s (snappy):</b> autocomplete / re-rank. Mid models can fit well.</li>
                <li><b>0.8-3s (comfortable):</b> answer boxes / short summaries. Large is okay if you stream tokens.</li>
                <li><b>3-10s (heavy):</b> reports / tool-use. Always show progress + a cancel button.</li>
            </ul>
            <p><em>Tip:</em> Decide the seconds before you decide the model. Users notice seconds more than model names.</p>

            <h2>Step 3 - Small / Medium / Large (that's it)</h2>
            <ul>
                <li><b>Small:</b> fast + cheap. Great for classify/extract, re-rankers, and "first pass".</li>
                <li><b>Medium:</b> balanced default for many app answers. Good quality without big delays.</li>
                <li><b>Large:</b> best reliability for tricky outputs. Use when quality matters and 1-3s is acceptable.</li>
            </ul>
            <p>
                I keep a tiny wrapper function in my code (like <em>askModel("small" | "medium" | "large", payload)</em>),
                so I can switch sizes later without touching my UI.
            </p>

            <h2>Three everyday tasks (how I start)</h2>
            <ol>
                <li>
                    <p><b>Extract product fields from messy text</b></p>
                    <ul>
                        <li><b>Start with:</b> Small or Medium (I value speed here).</li>
                        <li><b>Output:</b> strict JSON with a few keys (title, price, currency…)</li>
                        <li><b>Why:</b> Users paste text and want quick, consistent results.</li>
                    </ul>
                </li>
                <li>
                    <p><b>Short answer box inside my app</b></p>
                    <ul>
                        <li><b>Start with:</b> Medium.</li>
                        <li><b>Trick:</b> Stream the answer so users feel progress.</li>
                        <li><b>Fallback:</b> If answers feel weak, try Large, but cap the tokens.</li>
                    </ul>
                </li>
                <li>
                    <p><b>Routing a support message (intent + priority)</b></p>
                    <ul>
                        <li><b>Start with:</b> Small (classify fast), maybe add a few examples in the prompt.</li>
                        <li><b>Why:</b> Consistency matters more than long texts.</li>
                    </ul>
                </li>
            </ol>

            <h2>Prompts that don't try too hard</h2>
            <p>My prompts got shorter over time. I try to be clear, not poetic.</p>
            <pre>{`Role: You return only valid JSON. No extra text.
Task: Extract {title, price, currency, bullets[], inStock} from the given text.
Rules: If unknown, use null. Keep bullets <= 5. currency in ["INR","USD","EUR"].
Return: ONLY JSON.`}</pre>
            <p>
                Small things help: set the role, list the fields, define limits, say "ONLY JSON". That's it.
            </p>

            <h2>Keep outputs tidy (tiny JSON only)</h2>
            <p>For the product example, here's what I expect:</p>
            <pre>{`{
  "title": "Apple iPhone 14",
  "price": 69990,
  "currency": "INR",
  "bullets": ["128GB", "Blue", "1-year warranty"],
  "inStock": true
}`}</pre>
            <p>
                <em>Why:</em> Neat JSON means my frontend stays stable. I can format that into UI later.
            </p>

            <h2>RAG or not? (my simple rule)</h2>
            <ul>
                <li><b>Use RAG</b> when the answer must come from <em>my</em> docs/data or I need citations.</li>
                <li><b>Skip RAG</b> for simple classify/extract tasks (just keep a solid prompt).</li>
            </ul>
            <p>If I add RAG, I start tiny: a few documents, short chunks (don't split tables), and a small context.</p>

            <h2>Latency tricks (no fancy infra needed)</h2>
            <ul>
                <li><b>Cache repeated requests:</b> Same input? Return the same result instantly.</li>
                <li><b>Cap output length:</b> Keep answers short; long answers = slow + costly.</li>
                <li><b>Stream where it helps:</b> Users feel progress even if full answer takes 2s.</li>
                <li><b>Progress UI + Cancel:</b> Users relax when they can stop a slow action.</li>
            </ul>

            <h2>Cost sanity (lightweight habits)</h2>
            <ul>
                <li>Log roughly: <em>how long</em> it took and <em>about how big</em> the answer was.</li>
                <li>Use Small/Medium by default; switch to Large only for tough cases.</li>
                <li>Limit max output tokens; short answers are usually enough.</li>
            </ul>

            <Styled.Analogy>
                <p>
                    <strong>Real talk:</strong> My best upgrades were boring ones-shorter prompts, smaller context,
                    strict JSON, caching. Users noticed speed; nobody missed my fancy instructions.
                </p>
            </Styled.Analogy>

            <h2>Mistakes I actually made (so you can skip them)</h2>
            <ul>
                <li><b>Started huge:</b> latency spiked, bills grew, users bounced.</li>
                <li><b>No JSON guard:</b> one stray quote and the UI died-now I always expect "ONLY JSON".</li>
                <li><b>Too much context:</b> more text ≠ better. Tighter context improved answers.</li>
                <li><b>No cancel:</b> people hate being stuck-always show a cancel/close.</li>
                <li><b>No tiny test set:</b> now I keep 10-20 examples and re-check after changes.</li>
            </ul>

            <h2>Mini "how I ship" plan</h2>
            <ol>
                <li>Write the one-line job with a time target.</li>
                <li>Pick Small/Medium/Large based on that time target.</li>
                <li>Ask for tiny JSON only (and keep fields few).</li>
                <li>Skip RAG unless I truly need my docs or citations.</li>
                <li>Ship one small flow → log time + success.</li>
                <li>Watch usage for a day → tweak prompt/size if needed.</li>
            </ol>

            <h2>FAQ (the things I wondered)</h2>
            <p><b>Q: Which provider is "best"?</b><br />
                <b>A:</b> It changes. Your UX target (seconds), data needs, and costs matter more. Start with what's simple in your stack and switch later if needed.
            </p>
            <p><b>Q: Do I need a vector database on day one?</b><br />
                <b>A:</b> No. If your task doesn't need your own docs or citations, skip it. Add later when it clearly helps.
            </p>
            <p><b>Q: Should I fine-tune?</b><br />
                <b>A:</b> Not for most app basics. Good prompts + small examples go far. Consider fine-tuning only when you see repeatable gaps.
            </p>
            <p><b>Q: How big should my prompt be?</b><br />
                <b>A:</b> Short and specific. Define fields, limits, and tone. Remove filler words. Your model will thank you.
            </p>

            <h2>My simple checklist (print-worthy)</h2>
            <ul>
                <li>[ ] One-liner with seconds + JSON shape</li>
                <li>[ ] Choose size (Small/Medium/Large) to hit the seconds</li>
                <li>[ ] Ask for "ONLY JSON" (keep it tiny)</li>
                <li>[ ] Add RAG only if answers must use my docs/fresh data</li>
                <li>[ ] Log time + success (parsed?)</li>
                <li>[ ] Keep 10-20 examples and re-test after changes</li>
            </ul>

            <h2>Closing</h2>
            <p>
                If you're self-taught like me, keep it simple: decide the seconds, choose the size, keep outputs clean,
                and ship small. You'll learn faster, your app will feel better, and switching models later will be a
                boring refactor-not a panic. That's the goal.
            </p>
        </Styled.Wrapper>
    );
}
