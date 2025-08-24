import { Styled } from "./styled";

export const meta = {
    title: "Your Data is Valuable: A Simple Guide to Privacy Settings on Social Media",
    slug: "your-data-is-valuable-privacy-settings-social-media",
    date: "2025-05-12",
    author: "Ashish Ranjan - Full-Stack Developer",
    category: "Practical Tech Skills",
    tags: ["Privacy", "Security", "Platforms"],
    excerpt:
        "A friendly, platform-agnostic checklist to make your social accounts safer and quieter—without disappearing from the internet.",
    cover: null,
};

export default function Post() {
    return (
        <Styled.Wrapper>
            <Styled.Info>
                <h1>{meta.title}</h1>
                <div><b>By:</b> {meta.author}</div>
                <div><b>Published on:</b> May 12, 2025</div>
                <div><b>Category:</b> {meta.category}</div>
            </Styled.Info>

            <p>
                Most people treat privacy settings like a fire extinguisher—nice to have, rarely tested. But the web runs
                on incentives, and your attention + data are the product. Good news: with 20–30 focused minutes, you can
                dramatically reduce accidental oversharing <em>and</em> targeted noise without deleting your accounts.
            </p>

            <Styled.Analogy>
                <p>
                    <strong>Analogy:</strong> Think of each social app as a <em>house with many windows</em>. Privacy
                    settings are blinds, locks, and nameplates. You don't have to brick the windows—just control what's
                    visible from the street.
                </p>
            </Styled.Analogy>

            <h2>Mindset First: Three Questions to Guide Every Toggle</h2>
            <ul>
                <li><strong>Who can see me?</strong> (posts, stories, activity status, last seen)</li>
                <li><strong>Who can find me?</strong> (via phone/email lookups, search engine indexing, mentions)</li>
                <li><strong>How am I tracked?</strong> (ad personalization, off-platform activity, location, contacts)</li>
            </ul>

            <h2>Baseline Settings to Change on Any Platform</h2>
            <ul>
                <li><strong>Make new posts "Friends/Followers only" by default</strong>; share to "Public" intentionally.</li>
                <li><strong>Hide phone/email discoverability</strong>: disable "let people find me by phone/email."</li>
                <li><strong>Turn off activity status</strong> (last seen/online). You'll reply when you can.</li>
                <li><strong>Limit tagging &amp; mentions</strong>: require approval before tags appear on your profile.</li>
                <li><strong>Review ad settings</strong>: turn off "ads based on activity from partners/off-platform."</li>
                <li><strong>Disable precise location</strong> for social apps; keep "approximate" at most.</li>
                <li><strong>Turn off contact syncing</strong> (address book uploads) unless you truly need it.</li>
                <li><strong>Lock down stories/reels</strong> (close friends/custom list) for casual daily updates.</li>
                <li><strong>Set 2FA/passkeys</strong> for account security; update recovery email/phone.</li>
            </ul>

            <h2>Platform Quick-Start (Paths may vary by version)</h2>

            <h3>Instagram</h3>
            <ul>
                <li><code>Settings → Privacy → Account Privacy</code>: switch to <strong>Private</strong> (if personal).</li>
                <li><code>Privacy → Tags</code>: <strong>Manually approve tags</strong>.</li>
                <li><code>Privacy → Mentions</code>: <strong>People you follow</strong> or <strong>No one</strong> (your call).</li>
                <li><code>Privacy → Story</code>: <strong>Hide Story From…</strong> or use <strong>Close Friends</strong>.</li>
                <li><code>Privacy → Activity Status</code>: turn <strong>Off</strong>.</li>
                <li><code>Settings → Ads → Ad Preferences</code>: limit interest categories; turn off activity-based ads where possible.</li>
                <li><code>Account → Contacts Syncing</code>: turn <strong>Off</strong>.</li>
            </ul>

            <h3>Facebook</h3>
            <ul>
                <li><code>Settings → Privacy</code>: set <strong>Who can see your future posts?</strong> to Friends.</li>
                <li><code>Privacy → How people find and contact you</code>: disable phone/email lookup; turn off search engine linking.</li>
                <li><code>Profile and Tagging</code>: review tags before they appear; limit who can post on your profile.</li>
                <li><code>Location</code>: disable precise location; clear location history.</li>
                <li><code>Ads → Ad Settings</code>: turn off "Data about your activity from partners."</li>
            </ul>

            <h3>X (Twitter)</h3>
            <ul>
                <li><code>Settings → Privacy and safety</code>: <strong>Protect your posts</strong> (if personal account).</li>
                <li><code>Discoverability</code>: disable "let others find you by email/phone."</li>
                <li><code>Direct messages</code>: restrict to people you follow.</li>
                <li><code>Location information</code>: disable; remove past locations from tweets.</li>
                <li><code>Ads preferences</code>: limit personalization and inferred interests.</li>
            </ul>

            <h3>LinkedIn</h3>
            <ul>
                <li><code>Settings → Visibility</code>: control profile photo visibility; hide last name to first initial if desired.</li>
                <li><code>Visibility → Profile viewing options</code>: consider <strong>Private mode</strong> when researching.</li>
                <li><code>Data privacy → Advertising data</code>: reduce ad personalization; turn off partner data.</li>
                <li><code>Sign in &amp; security</code>: enable 2FA/passkeys.</li>
            </ul>

            <h3>TikTok</h3>
            <ul>
                <li><code>Settings → Privacy</code>: set account to <strong>Private</strong> if personal; restrict duet/stitch.</li>
                <li><code>Suggest your account to others</code>: turn off contacts/Facebook suggestions.</li>
                <li><code>Location services</code>: disable precise; review ad personalization.</li>
            </ul>

            <h3>WhatsApp</h3>
            <ul>
                <li><code>Settings → Privacy</code>: set <strong>Last seen &amp; Online</strong> to <strong>Nobody</strong> or <strong>My Contacts</strong>.</li>
                <li><code>Profile Photo / About / Status</code>: <strong>My Contacts</strong> (or <strong>My Contacts Except…</strong>).</li>
                <li><code>Groups</code>: limit to <strong>My Contacts</strong> to avoid random adds.</li>
                <li><code>Two-step verification</code>: enable; add an email for recovery.</li>
            </ul>

            <h2>15-Minute Privacy Reset (Do This Quarterly)</h2>
            <ul>
                <li><strong>Run a security checkup</strong>: sign-in alerts, active sessions, connected devices—sign out of unknowns.</li>
                <li><strong>App &amp; site permissions</strong>: review third-party logins (Google/Apple/GitHub/Facebook) and revoke zombies.</li>
                <li><strong>Export your data</strong> (optional): skim what platforms store; delete what you don't want kept.</li>
                <li><strong>Photos &amp; posts audit</strong>: bulk-hide or archive old content that no longer represents you.</li>
            </ul>

            <Styled.Analogy>
                <p>
                    <strong>Builder's Note:</strong> Designing an app? Default to minimal data collection, explicit consent,
                    and <em>progressive disclosure</em>—show advanced toggles only when relevant. "Privacy by default" beats
                    "privacy by hunt-the-toggle."
                </p>
            </Styled.Analogy>

            <h2>Common Myths (Quick Debunk)</h2>
            <ul>
                <li><strong>"I'm not famous, so who cares."</strong> Your data still fuels ad models and identity graphs.</li>
                <li><strong>"Private account = invisible."</strong> Metadata (who/when/where) can still leak patterns.</li>
                <li><strong>"Deleting the app deletes my data."</strong> Not necessarily—delete or deactivate the account inside settings.</li>
            </ul>

            <h2>Printable Mini-Checklist</h2>
            <ul>
                <li>[ ] Friends/followers-only default for posts</li>
                <li>[ ] Disable phone/email discoverability</li>
                <li>[ ] Approve tags &amp; mentions; hide activity status</li>
                <li>[ ] Limit ad personalization &amp; partner data</li>
                <li>[ ] Turn off precise location; stop contact uploads</li>
                <li>[ ] Enable 2FA/passkeys; confirm recovery info</li>
                <li>[ ] Revoke third-party app access you don't use</li>
            </ul>

            <h2>The Bottom Line</h2>
            <p>
                Privacy isn't about hiding—it's about <em>choosing what to share</em>, <em>with whom</em>, and <em>why</em>.
                Set your defaults once, review them quarterly, and you'll keep social media useful without paying with more
                data than you meant to.
            </p>
        </Styled.Wrapper>
    );
}
