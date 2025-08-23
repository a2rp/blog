import { Styled } from "./styled";

export const meta = {
    title: "Digital Spring Cleaning: 5 Things You Can Do Today to Tidy Your Online Life",
    slug: "digital-spring-cleaning-tidy-online-life",
    date: "2025-05-05",
    author: "Ashish Ranjan - Full-Stack Developer",
    category: "Practical Tech Skills",
    tags: ["Privacy", "Security", "Backups", "Productivity", "Digital Hygiene"],
    excerpt:
        "Quick, high-impact steps to protect accounts, cut noise, and back up what matters. No jargon—just a focused checklist you can finish in an hour.",
    cover: null,
};

export default function Post() {
    return (
        <Styled.Wrapper>
            <Styled.Info>
                <h1>{meta.title}</h1>
                <div><b>By:</b> {meta.author}</div>
                <div><b>Published on:</b> May 5, 2025</div>
                <div><b>Category:</b> {meta.category}</div>
            </Styled.Info>

            <p>
                Spring cleaning isn't just for closets. Your digital life gathers dust too—unused apps, noisy notifications,
                old logins, and photos scattered across devices. Here's a fast, developer-approved plan to tidy up
                (without going full “Inbox Zero monk”).
            </p>

            <Styled.Analogy>
                <p>
                    <strong>Analogy:</strong> Treat your digital world like a <em>home with many doors</em>.
                    Cleaning is nice; locking the doors is vital. We'll do both.
                </p>
            </Styled.Analogy>

            <h2>First: A 3-Minute Snapshot</h2>
            <ul>
                <li>List your <strong>top 5 critical accounts</strong>: email, password manager, bank/UPI, cloud storage, primary social.</li>
                <li>Note where your <strong>photos live</strong> (phone, cloud, laptop) and how they're backed up (if at all).</li>
                <li>Open the <strong>permissions page</strong> for your main sign-in provider (Google/Apple/Microsoft/Facebook) in a tab.</li>
            </ul>

            <h2>1) Lock Down Your Logins (15 minutes)</h2>
            <p>
                Your email is the master key—if someone owns it, they can reset everything else. Start there.
            </p>
            <ul>
                <li><strong>Turn on 2-Factor Authentication</strong> for email and your password manager first. Prefer an authenticator app over SMS.</li>
                <li><strong>Rotate weak/reused passwords</strong>. Use a password manager; generate unique 16+ char passwords.</li>
                <li><strong>Store recovery codes</strong> in your manager's secure notes. Delete old screenshots/text copies.</li>
                <li><strong>Passkeys readiness:</strong> If available, add a passkey for your main accounts for faster, phishing-resistant logins.</li>
            </ul>

            <h2>2) Revoke Zombie App Access (10 minutes)</h2>
            <p>
                Over years, we click “Continue with Google/Apple/GitHub” on dozens of services and forget them.
            </p>
            <ul>
                <li>In your identity provider's security settings, <strong>remove third-party apps</strong> you don't use.</li>
                <li>Audit <strong>browser extensions</strong>: uninstall anything you don't recognize; review permissions on the rest.</li>
                <li>On your phone, <strong>deny location/mic/camera</strong> for apps that don't truly need them.</li>
            </ul>

            <h2>3) Back Up What You'd Cry Over (15 minutes)</h2>
            <p>
                If your laptop and phone vanished today, what would hurt? Photos, documents, keys—protect those first.
            </p>
            <ul>
                <li><strong>Adopt 3-2-1</strong>: 3 copies, 2 different media/locations, 1 offsite (cloud or external drive).</li>
                <li><strong>Automate photo backup</strong> from phone → cloud (or NAS). Deduplicate by month; keep originals.</li>
                <li><strong>Export critical docs</strong> (IDs, receipts, tax PDFs) to an encrypted folder; back that up too.</li>
                <li><strong>Test a restore</strong>: retrieve one random file to ensure your backup actually works.</li>
            </ul>

            <h2>4) Tame Notifications &amp; Email (10 minutes)</h2>
            <p>
                Default settings are designed to pull you back. You can keep the value without the noise.
            </p>
            <ul>
                <li><strong>Keep only “human” pings</strong>: calls, messages, calendar. Silence “likes,” “promotions,” “new for you.”</li>
                <li>Create two email rules: <strong>Receipts → Receipts/Finance</strong> and <strong>Bulk → Later</strong>. Instant calm.</li>
                <li>Unsubscribe from five newsletters you skip anyway. (If you hesitate, that's a unsubscribe.)</li>
            </ul>

            <h2>5) Update &amp; Patch (7 minutes)</h2>
            <p>
                Boring but big impact.
            </p>
            <ul>
                <li><strong>Update OS</strong> on phone and laptop. Turn on automatic security updates.</li>
                <li><strong>Patch browsers</strong> and your password manager. Restart to apply.</li>
                <li>Verify <strong>account recovery info</strong> (backup email/phone) on your primary accounts.</li>
            </ul>

            <Styled.Analogy>
                <p>
                    <strong>Builder's Note:</strong> For your own apps, add a quarterly <em>security day</em>:
                    rotate API keys, audit user roles, purge stale OAuth apps, and review logs &amp; alerts.
                </p>
            </Styled.Analogy>

            <h2>Optional: 15-Minute Power Ups</h2>
            <ul>
                <li><strong>Privacy tune-up</strong>: tighten ad personalization and location history on your main account.</li>
                <li><strong>Device hygiene</strong>: delete large downloads, clear “Downloads” spam, archive desktop clutter.</li>
                <li><strong>Photo sanity</strong>: star/favorite the keepers from last month; delete the obvious duds.</li>
            </ul>

            <h2>Printable Mini-Checklist</h2>
            <ul>
                <li>[ ] 2FA on email &amp; password manager</li>
                <li>[ ] Rotate reused passwords; add passkeys where possible</li>
                <li>[ ] Revoke unused OAuth apps &amp; risky extensions</li>
                <li>[ ] Automate photo + docs backup; test a restore</li>
                <li>[ ] Silence non-human notifications; add two email rules</li>
                <li>[ ] Update OS/browser; verify recovery email/phone</li>
            </ul>

            <h2>The Bottom Line</h2>
            <p>
                You don't need a weekend retreat to feel safer and lighter online. One focused hour gets you most of the
                benefits: stronger doors, less noise, and backups that actually work. Future-you will thank you.
            </p>
        </Styled.Wrapper>
    );
}
