import { Styled } from "./styled";
import beginners_guide_backing_up_photos from "../assets/covers/beginners-guide-backing-up-photos.png";

export const meta = {
    title: "Don't Get Locked Out! The Beginner's Guide to Backing Up Your Digital Photos",
    slug: "beginners-guide-backing-up-photos",
    date: "2025-05-19",
    author: "Ashish Ranjan - Full-Stack Developer",
    category: "Practical Tech Skills",
    tags: ["Backups", "Cloud", "Platforms"]
    ,
    excerpt:
        "Phones get lost, drives fail, and accounts lock you out. Here's a friendly, no-jargon plan to keep your memories safe—with simple defaults you can set up in one hour.",
    cover: beginners_guide_backing_up_photos,
};

export default function Post() {
    return (
        <Styled.Wrapper>
            <Styled.Info>
                <h1>{meta.title}</h1>
                <div><b>By:</b> {meta.author}</div>
                <div><b>Published on:</b> May 19, 2025</div>
                <div><b>Category:</b> {meta.category}</div>
            </Styled.Info>

            <img src={meta.cover} alt={meta.title} style={{ height: "600px", width: "100%", marginBottom: "15px" }} />

            <p>
                If your phone vanished right now, how many photos would you lose—baby pics, vacations, old friends?
                I've seen too many “I'll back up later" stories end in tears. The good news: you don't need a NAS closet
                or a PhD in storage to protect your memories. You just need a <em>simple, automatic system</em>.
            </p>

            <Styled.Analogy>
                <p>
                    <strong>Analogy:</strong> Treat photos like <em>jewelry</em>, not <em>laundry</em>. Jewelry lives in
                    a safe with a spare key; laundry lives in a basket. We're building the safe.
                </p>
            </Styled.Analogy>

            <h2>What “Good" Looks Like: The 3-2-1 Rule</h2>
            <ul>
                <li><strong>3 copies</strong> of your photo library</li>
                <li><strong>2 different types of storage</strong> (e.g., cloud + external drive)</li>
                <li><strong>1 offsite</strong> (not in your home)—usually your cloud provider</li>
            </ul>
            <p>
                Why this matters: phones get lost, drives fail, accounts get locked. With 3-2-1, one bad day won't erase a decade.
            </p>

            <h2>Step 1 — Turn On Automatic Cloud Backup (10 minutes)</h2>
            <p>
                Pick <em>one</em> cloud service you trust and enable automatic upload on your phone. Keep “<strong>Original quality</strong>"
                if offered. Make sure it backs up on Wi-Fi and while charging so you don't think about it again.
            </p>
            <ul>
                <li><strong>iPhone:</strong> Enable the built-in photo backup; verify you're backing up <em>originals</em> and not just thumbnails.</li>
                <li><strong>Android:</strong> Turn on your chosen cloud backup app; confirm both camera and screenshots folders are included.</li>
                <li><strong>All phones:</strong> Open the app once a week initially and check the “<em>Last backup</em>" date says <strong>Today</strong>.</li>
            </ul>

            <h2>Step 2 — Create a Home Copy (20 minutes + a drive)</h2>
            <p>
                Buy a simple external SSD (fast and tiny) or HDD (cheaper, bulkier). Once a month, plug it into your laptop/desktop and
                copy your latest photos. Keep this drive in a different room from your laptop.
            </p>
            <ul>
                <li>
                    <strong>Folder recipe:</strong> <code>Photos/2025/2025-05/2025-05-19 Goa Trip</code>. Simple, portable, future-proof.
                </li>
                <li>
                    <strong>File naming:</strong> If you export from phone, prefer timestamped names:
                    <code>YYYYMMDD_HHMMSS_original.ext</code>. This sorts reliably everywhere.
                </li>
                <li>
                    <strong>Don't edit originals</strong> on the drive. Keep edits/exports in a separate <code>Edits/</code> folder.
                </li>
            </ul>

            <h2>Step 3 — Test a Restore (5 minutes)</h2>
            <p>
                A backup isn't real until you can restore from it.
            </p>
            <ul>
                <li>From your cloud app, <strong>download one random photo</strong> to your computer. Open it. Good? Great.</li>
                <li>From your external drive, open a <strong>photo from last year</strong>. If it loads, your offline copy is good too.</li>
            </ul>

            <h2>Optional Power-Ups (Choose 1–2)</h2>
            <h3>Shared Family Library</h3>
            <p>
                Set up a shared space so key photos are backed up for your partner/parents too. This also helps if one person
                loses access—someone else still has the originals.
            </p>

            <h3>Space-Saving on Phone</h3>
            <p>
                After cloud backup is working, enable “optimize storage" on your phone so originals live in the cloud and
                your device keeps smaller copies. Your favorites still load fast; your storage stops screaming.
            </p>

            <h3>HEIC, RAW, and Live Photos</h3>
            <ul>
                <li><strong>Keep originals</strong> (HEIC/RAW) in backup; export JPEG/PNG only for sharing.</li>
                <li>RAW? Store on the external drive as well; these files are large but future-friendly for editing.</li>
                <li>Live Photos/short clips count as video—verify your backup includes them.</li>
            </ul>

            <h3>Dedup &amp; Cleanup</h3>
            <p>
                Every few months, archive the keepers and delete obvious duplicates or screenshots. Don't over-organize; just
                keep the <em>year/month/event</em> folders tidy.
            </p>

            <h2>A Simple Monthly Workflow (15 minutes)</h2>
            <ol>
                <li>Plug in the external drive.</li>
                <li>Export this month's new photos from your cloud/phone to <code>Photos/YYYY/YYYY-MM/</code>.</li>
                <li>Skim and star your favorites; move heavy edits to <code>Edits/</code>.</li>
                <li>Verify cloud shows “Backed up today."</li>
                <li>Unplug the drive and store it safely.</li>
            </ol>

            <Styled.Analogy>
                <p>
                    <strong>Builder's Note:</strong> If you're building a photo app, add <em>trust features</em>:
                    clear “Last backup" status, one-click export of originals + metadata, and an easy restore wizard.
                </p>
            </Styled.Analogy>

            <h2>Avoid These Common Traps</h2>
            <ul>
                <li><strong>One copy only:</strong> Cloud <em>or</em> drive alone isn't enough. Do both.</li>
                <li><strong>“High quality" compression:</strong> Use original/full-resolution when possible.</li>
                <li><strong>Forgotten accounts:</strong> Keep recovery email/phone up-to-date and 2FA turned on.</li>
                <li><strong>Everything in WhatsApp:</strong> Chats aren't a library. Save key photos to your camera roll.</li>
            </ul>

            <h2>Privacy &amp; Longevity Tips</h2>
            <ul>
                <li><strong>Metadata stays:</strong> Photos carry time/location. Be mindful when sharing publicly.</li>
                <li><strong>Export occasionally:</strong> Do a full export (originals + albums) once a year to your drive.</li>
                <li><strong>Account legacy:</strong> Add an emergency contact/legacy option so family can access memories if needed.</li>
            </ul>

            <h2>Printable Mini-Checklist</h2>
            <ul>
                <li>[ ] Cloud backup on, originals quality, “last backup: today"</li>
                <li>[ ] External drive copy with <code>Photos/YYYY/YYYY-MM/</code> folders</li>
                <li>[ ] Restore test: 1 file from cloud + 1 file from drive</li>
                <li>[ ] Monthly: plug in, export, skim favorites, verify, unplug</li>
                <li>[ ] Yearly: full export + verify recovery email/phone &amp; 2FA</li>
            </ul>

            <h2>The Bottom Line</h2>
            <p>
                Your photos are priceless. A one-hour setup today—and a 15-minute monthly habit—means you'll never have
                to post “phone died, lost everything." Future-you (and your future kids) will be very, very glad.
            </p>
        </Styled.Wrapper>
    );
}
