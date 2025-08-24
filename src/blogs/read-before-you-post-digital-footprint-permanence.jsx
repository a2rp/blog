import { Styled } from "./styled";

export const meta = {
    title: "Read This Before You Post: The Permanence of Your Digital Footprint",
    slug: "read-before-you-post-digital-footprint-permanence",
    date: "2025-05-26",
    author: "Ashish Ranjan - Full-Stack Developer",
    category: "Practical Tech Skills",
    tags: ["Privacy", "Backups", "Platforms"],
    excerpt:
        "The internet never truly forgets. Here's how posts live on through screenshots, caches, data brokers, and backups—plus a simple pre-post checklist you can actually use.",
    cover: null,
};

export default function Post() {
    return (
        <Styled.Wrapper>
            <Styled.Info>
                <h1>{meta.title}</h1>
                <div><b>By:</b> {meta.author}</div>
                <div><b>Published on:</b> May 26, 2025</div>
                <div><b>Category:</b> {meta.category}</div>
            </Styled.Info>

            <p>
                We love the “delete” button because it feels like an undo. Post → regret → delete → peace. Except that's
                not how the web works. As a developer, I've seen the layers where content lingers: caches, backups,
                screenshots, mirrors, logs. This doesn't mean you should never share—just that you should share <em>on purpose</em>.
            </p>

            <Styled.Analogy>
                <p>
                    <strong>Analogy:</strong> Posting online is like speaking into a <em>cathedral</em>.
                    Your words echo, bounce, and get recorded by dozens of microphones you can't see. You can walk away,
                    but the echoes carry.
                </p>
            </Styled.Analogy>

            <h2>Why “Delete” Rarely Means Gone</h2>
            <ul>
                <li>
                    <strong>Screenshots &amp; Forwards:</strong> Anyone can capture and share your post in seconds—often
                    out of context, without your name on it, or with your name emphasized.
                </li>
                <li>
                    <strong>Search &amp; Social Caches:</strong> Platforms cache previews (title, image), and search engines
                    may keep snapshots for a while even after a page disappears.
                </li>
                <li>
                    <strong>CDNs &amp; Browser Caches:</strong> Edge servers and browsers hold copies for speed. Those
                    copies can outlive the original for hours or days.
                </li>
                <li>
                    <strong>Backups &amp; Logs:</strong> Companies keep backups and audit logs for reliability, security,
                    and compliance. Your content may persist there for months.
                </li>
                <li>
                    <strong>Data Brokers:</strong> Likes, follows, and public posts feed ad and identity graphs that are
                    hard to unwind later.
                </li>
            </ul>

            <h2>Hidden Leaks You Might Forget</h2>
            <ul>
                <li>
                    <strong>Metadata:</strong> Photos and files can include time, device, and location (EXIF). Strip or
                    review before sharing publicly.
                </li>
                <li>
                    <strong>Context Collapse:</strong> A joke for friends looks different to recruiters or relatives.
                    Screenshots collapse audiences into one unpredictable crowd.
                </li>
                <li>
                    <strong>Thread Drift:</strong> Replies taken alone can look like your entire stance.
                </li>
                <li>
                    <strong>“Delete account” ≠ purge:</strong> Many platforms retain some data for fraud prevention or legal reasons.
                </li>
            </ul>

            <h2>Real-World Stakes (Not Just “What-if”)</h2>
            <ul>
                <li><strong>Jobs:</strong> Employers search candidates. Old posts can surface at the worst time.</li>
                <li><strong>Travel &amp; Security:</strong> Public location posts can signal an empty home.</li>
                <li><strong>Relationships:</strong> Private jokes age poorly; irony doesn't travel well.</li>
                <li><strong>Mental Load:</strong> The anxiety of “did I overshare?” is real. Defaults can reduce it.</li>
            </ul>

            <h2>The Pre-Post Checklist (10 Seconds, Seriously)</h2>
            <ul>
                <li><strong>Audience:</strong> Who is this truly for? Use close friends / restricted lists when appropriate.</li>
                <li><strong>Context:</strong> Will this make sense a year from now—without the surrounding thread?</li>
                <li><strong>Trace:</strong> Comfortable with this being screenshot and sent to a boss/parent/stranger?</li>
                <li><strong>Metadata:</strong> Does this reveal location/kids/sensitive details unintentionally?</li>
                <li><strong>Temperature:</strong> If emotional, wait 24 minutes (or hours) and reread.</li>
            </ul>

            <h2>Safer Sharing Defaults</h2>
            <ul>
                <li><strong>Friends-only by default</strong>; switch to Public intentionally.</li>
                <li><strong>Turn off precise location</strong> on social apps; share place names manually if needed.</li>
                <li><strong>Blur backgrounds</strong> (license plates, house numbers) before posting photos.</li>
                <li><strong>Use ephemeral with care</strong>: stories and “vanish mode” reduce visibility, not permanence.</li>
                <li><strong>Separate identities</strong>: public professional vs. private personal accounts.</li>
            </ul>

            <Styled.Analogy>
                <p>
                    <strong>Builder's Note:</strong> If you design apps, add <em>stopping cues</em> and safety rails:
                    audience preview before posting, location off by default, one-tap redaction (faces/plates), clear
                    “what happens when you delete,” and easy bulk archive. Ethical defaults build trust.
                </p>
            </Styled.Analogy>

            <h2>If You Need to Clean Up</h2>
            <ul>
                <li><strong>Audit first:</strong> Search your name/handles. Check image search too.</li>
                <li><strong>Archive or delete in bulk:</strong> Many platforms offer bulk tools—start with old public posts.</li>
                <li><strong>Update privacy settings</strong> (discoverability, tagging, ad personalization).</li>
                <li><strong>Request removals</strong> from sites you control; for third-parties, ask politely and persistently.</li>
                <li><strong>Future-proof:</strong> Set new defaults so cleanup isn't a recurring project.</li>
            </ul>

            <h2>Printable Mini-Checklist</h2>
            <ul>
                <li>[ ] Friends-only default; review audience per post</li>
                <li>[ ] Location off; scrub sensitive metadata</li>
                <li>[ ] OK with screenshots out of context?</li>
                <li>[ ] Separate public/professional vs private spaces</li>
                <li>[ ] Quarterly audit + bulk archive of old posts</li>
            </ul>

            <h2>The Bottom Line</h2>
            <p>
                The internet rewards speed; your future self rewards care. A 10-second pause and better defaults let you
                share freely <em>and</em> sleep well later. Post with intention, not impulse.
            </p>
        </Styled.Wrapper>
    );
}
