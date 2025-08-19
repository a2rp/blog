import styled from "styled-components";

import planDiagram from "../assets/blogs/backup-3-2-1/backup-plan-diagram.png";
import driveSetup from "../assets/blogs/backup-3-2-1/external-drive-setup-screenshot.png";
import versionHistory from "../assets/blogs/backup-3-2-1/cloud-backup-version-history.png";

export const meta = {
    slug: "backup-3-2-1",
    title: "How I Back Up My Laptop & Phone: The 3–2–1 Rule in Plain English",
    date: "2025-03-16", // Sunday
    tags: ["backup", "privacy", "laptop", "phone", "students"],
    excerpt:
        "My simple 3–2–1 backup plan: one external drive, one cloud, and a monthly restore test. Set it once and forget it.",
    cover: planDiagram,
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
            <p><em>{meta.date}</em> • {meta.tags.join(", ")}</p>

            <p>
                I don’t wait for a crash. I keep a boring backup routine that survived a dead SSD
                and one stolen phone. It follows the 3–2–1 rule: <strong>3 copies</strong> of my data,
                on <strong>2 different kinds of storage</strong>, with <strong>1 copy off-site</strong>.
            </p>

            <Figure>
                <FigImg
                    src={planDiagram}
                    alt="Diagram showing 3–2–1: laptop → external drive + cloud (off-site)"
                    loading="lazy"
                />
                <FigCap>One local copy, one external drive, one cloud. That’s it.</FigCap>
            </Figure>

            <h2>My laptop setup (10–15 minutes)</h2>
            <ul>
                <li>
                    <strong>External drive:</strong> I plug in a portable SSD and set an automatic
                    daily backup. On macOS that’s Time Machine; on Windows I use File History or an
                    imaging tool. I exclude bulky caches and node_modules.
                </li>
                <li>
                    <strong>Folders I care about:</strong> code, docs, photos, finance, exports.
                    Downloads get cleaned weekly; I don’t back up junk.
                </li>
                <li>
                    <strong>Encryption:</strong> I keep the drive encrypted (BitLocker/FileVault compatible).
                </li>
            </ul>

            <Figure>
                <FigImg
                    src={driveSetup}
                    alt="External drive backup settings scheduled for daily incremental backups"
                    loading="lazy"
                />
                <FigCap>Daily incremental backups to an encrypted portable SSD.</FigCap>
            </Figure>

            <h2>Cloud backup (off-site)</h2>
            <p>
                The cloud copy protects me from theft, fire, or losing the drive. I pick a provider with
                version history and set bandwidth limits so it doesn’t hog my internet.
            </p>
            <ul>
                <li><strong>What I sync:</strong> Home folders and photos. Large archives live locally only.</li>
                <li><strong>Versioning:</strong> I keep ~30–90 days of file versions for “oops I overwrote it.”</li>
                <li><strong>Privacy:</strong> I enable end-to-end encryption if the provider supports it.</li>
            </ul>

            <Figure>
                <FigImg
                    src={versionHistory}
                    alt="Cloud backup app showing file version history and restore options"
                    loading="lazy"
                />
                <FigCap>Version history has saved me more times than full disk clones.</FigCap>
            </Figure>

            <h2>Phone backup (photos + chats)</h2>
            <ul>
                <li><strong>Photos:</strong> automatic cloud backup with original quality for the albums I care about.</li>
                <li><strong>Chats:</strong> app-native backups on a schedule (and I verify encryption where offered).</li>
                <li><strong>SIM swap sanity:</strong> I note my recovery emails and 2FA method in my password manager.</li>
            </ul>

            <h2>Monthly restore test (5 minutes)</h2>
            <p>
                Backups are only real if I can restore. Once a month I restore a single folder from the
                external drive and one file from the cloud. If either fails, I fix it immediately.
            </p>

            <h2>Costs & time</h2>
            <ul>
                <li><strong>External SSD:</strong> one-time purchase.</li>
                <li><strong>Cloud:</strong> a few GBs are free; plans are cheap for students.</li>
                <li><strong>Time:</strong> setup once, then I spend ~5 minutes a month checking a restore.</li>
            </ul>

            <h2>Quick checklist (copy/paste)</h2>
            <ol>
                <li>Plug in an external SSD → enable daily backups → encrypt the drive.</li>
                <li>Turn on cloud backup with version history; limit bandwidth.</li>
                <li>Enable automatic photo & chat backups on the phone.</li>
                <li>Do a tiny restore test every month.</li>
            </ol>

            <p>
                That’s the whole plan. It’s not fancy, and that’s why it works. When something dies,
                I plug in the drive, pull a file from the cloud, and keep moving.
            </p>
        </article>
    );
}
