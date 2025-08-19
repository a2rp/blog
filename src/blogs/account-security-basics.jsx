import styled from "styled-components";

import vaultImg from "../assets/blogs/account-security-basics/password-manager-vault-example.png";
import twoFAImg from "../assets/blogs/account-security-basics/enable-2fa-settings-screenshot.png";
import passkeyImg from "../assets/blogs/account-security-basics/passkey-prompt-browser.png";
import { formatDate } from "../utils/format";

export const meta = {
    slug: "account-security-basics",
    title: "Account Security That Actually Sticks: Password Manager, 2FA, and Passkeys",
    date: "2025-03-02",
    tags: ["security", "privacy", "beginners", "students"],
    excerpt:
        "The three habits that protect most people most of the time: a password manager, app-based 2FA, and passkeys. Here's exactly how I set them up.",
    cover: vaultImg,
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
                I wrote this for friends and juniors who ask, “What should I actually do to
                keep my accounts safe?” My answer hasn't changed in years: use a password
                manager, turn on two-factor (using an authenticator app), and enable
                passkeys wherever possible. That's it. Do these once, and you're ahead of most people.
            </p>

            <h2>1) Password manager: one strong master, unique everywhere</h2>
            <p>
                I use a password manager so I don't reuse passwords. I set one long master
                password, then let the app generate and store random passwords for every site.
            </p>

            <Figure>
                <FigImg
                    src={vaultImg}
                    alt="Password manager vault showing multiple saved logins with a generate-password button"
                    loading="lazy"
                />
                <FigCap>My vault: one strong master password, unique logins everywhere else.</FigCap>
            </Figure>

            <h3>How I set it up (quick)</h3>
            <ol>
                <li>Create a long master password (a sentence is great: 5-7 random words).</li>
                <li>Install the browser extension and mobile app from the provider.</li>
                <li>Turn on the “generate strong password” option by default.</li>
                <li>Import or update your top 10 sites first (email, banking, socials).</li>
            </ol>

            <p><strong>Tip:</strong> If the manager offers a security report, run it and fix reused/weak passwords first.</p>

            <h2>2) Two-factor auth (2FA): use an authenticator app, not just SMS</h2>
            <p>
                SMS codes are better than nothing, but authenticator apps (TOTP) are more reliable.
                I enable 2FA on email, GitHub, banking, and anything with money or identity tied to it.
            </p>

            <Figure>
                <FigImg
                    src={twoFAImg}
                    alt="Account settings page showing a toggle to enable two-factor authentication using an authenticator app"
                    loading="lazy"
                />
                <FigCap>Find “Security” or “Two-Factor Authentication” in account settings and choose “Authenticator App”.</FigCap>
            </Figure>

            <h3>Enabling it (the way I do it)</h3>
            <ol>
                <li>Go to the account's <em>Security</em> or <em>Login</em> settings.</li>
                <li>Choose <strong>Authenticator App</strong> (Google Auth, Microsoft Authenticator, 1Password/Bitwarden built-in, etc.).</li>
                <li>Scan the QR in your app and enter the 6-digit code to confirm.</li>
                <li>Download and store the backup codes somewhere safe (I save them in my password manager's secure notes).</li>
            </ol>

            <p><strong>Tip:</strong> If a site only offers SMS, I still turn it on as a fallback, but I prefer app-based codes.</p>

            <h2>3) Passkeys: sign in without passwords</h2>
            <p>
                Passkeys let me sign in with my device biometrics (fingerprint/Face ID).
                No password to steal, nothing to remember. I enable them wherever the site supports it.
            </p>

            <Figure>
                <FigImg
                    src={passkeyImg}
                    alt="Browser dialog asking to create a passkey using fingerprint or face unlock"
                    loading="lazy"
                />
                <FigCap>When a site offers “Create a passkey,” I say yes. It makes phishing much harder.</FigCap>
            </Figure>

            <h3>My quick setup flow</h3>
            <ol>
                <li>On supported sites, go to Security → <strong>Passkeys</strong> → Create.</li>
                <li>Use device biometrics (fingerprint/Face ID) to confirm.</li>
                <li>If I use multiple devices, I add a second passkey later (phone + laptop).</li>
            </ol>

            <h2>Phishing: the 30-second gut check I use</h2>
            <ul>
                <li>If a message creates panic (“your account will be closed”), I don't click— I open the site manually.</li>
                <li>I hover links on desktop to check the domain (look for extra words or misspellings).</li>
                <li>Attachments from unknown senders stay unopened. If it's legit, they can re-send after I confirm.</li>
            </ul>

            <h2>Backups that save the day</h2>
            <ul>
                <li>I keep my password manager's recovery options up to date (email, phone).</li>
                <li>I store 2FA backup codes in the vault (one note per service).</li>
                <li>I add a secondary email to important accounts so I'm not locked out.</li>
            </ul>

            <h2>What I actually did this month</h2>
            <ul>
                <li>Rotated two old reused passwords I'd forgotten about.</li>
                <li>Moved three accounts from SMS codes to an authenticator app.</li>
                <li>Added passkeys on two sites that started supporting them.</li>
            </ul>

            <p>
                That's the whole playbook. Do these once, and you'll avoid most of the common headaches
                people deal with after a leak or a suspicious login alert. It's boring—and it works.
            </p>
        </article>
    );
}
