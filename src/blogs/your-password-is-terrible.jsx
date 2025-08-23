import { Styled } from "./styled";

export const meta = {
    title: "Your Password is Terrible, and Here's Why.",
    slug: "your-password-is-terrible",
    date: "2025-02-04",
    author: "Ashish Ranjan - Full-Stack Developer",
    category: "Digital Life & Security",
    tags: ["Passwords", "Security", "Privacy", "Password Managers", "Cybersecurity"],
    excerpt: "Let's be honest, you've used 'password123' more than once. It's not your fault—remembering dozens of passwords is impossible. Here's why weak passwords are a problem and what you can actually do about it.",
    cover: null,
};

export default function Post() {
    return (
        <Styled.Wrapper>
            <Styled.Info>
                <h1>{meta.title}</h1>
                <div><b>By:</b> {meta.author}</div>
                <div><b>Published on:</b> February 4, 2025</div>
                <div><b>Category:</b> Digital Life & Security</div>
            </Styled.Info>

            <p>
                Go on, admit it. You have a "system." Maybe it's your pet's name followed by your birth year. Maybe it's the same semi-respectable word you've been using since college, but with an exclamation point added when a website demands a "special character."
            </p>
            <p>
                I'm not here to judge. I've been there. For years, my "system" was a masterpiece of incremental complexity that I alone could decipher. I felt clever. Then I started working in tech and realized I wasn't clever—I was vulnerable.
            </p>
            <p>
                The truth is, most of our password habits are terrible. But it's not really our fault. We're asked to create dozens, even hundreds, of them. Remembering truly unique, complex passwords for every single site is a task for a supercomputer, not a human brain.
            </p>
            <p>
                So let's talk about <em>why</em> our go-to passwords are so weak, and more importantly, what we can do about it without losing our minds.
            </p>

            <h2>How Hackers Actually "Guess" Passwords (It's Not a Person Typing)</h2>
            <p>
                The image of a hooded figure manually typing guesses into a login box is dramatic, but almost entirely wrong. Real password cracking is done by software, and it's brutal, efficient, and automated.
            </p>
            <p>
                When a company gets hacked, the attackers often steal a list of user emails and encrypted passwords. The "encryption" (hashing) is a one-way street—it's easy to encrypt a password but very hard to decrypt it. So, the hackers' strategy is to guess the password, encrypt their guess the same way, and see if it matches.
            </p>
            <p>
                They don't do this guessing randomly. They use:
            </p>
            <ul>
                <li><strong>Dictionary Attacks:</strong> The software runs through a list of the most common passwords ("password," "123456," "qwerty," "letmein") and every word in the dictionary.</li>
                <li><strong>Brute Force Attacks:</strong> The software tries every possible combination of characters, starting with the shortest and simplest. Modern hardware can try <em>billions</em> of combinations per second.</li>
            </ul>
            <p>
                If your password is simple or common, it will be cracked in a matter of seconds.
            </p>

            <h2>The One Thing You're Probably Doing Wrong (And How to Fix It)</h2>
            <p>
                The biggest mistake isn't a weak password; it's <strong>password reuse</strong>.
            </p>
            <p>
                Let's say you use the same pretty-good password for your social media, your email, and your online banking. If that social media site gets hacked (and they do, all the time), attackers now have your email and password combination. Their first move is to try that same combo on every other important site—especially your email, which is the master key to resetting all your other passwords.
            </p>
            <p>
                Suddenly, one data breach at a trivial site can lead to your entire digital life being compromised. The solution is simple in theory but hard in practice: <strong>use a unique password for every single account.</strong>
            </p>
            <p>
                "But how am I supposed to remember hundreds of unique passwords?!" you ask. You're not. And that's the key.
            </p>

            <h2>Your New Best Friend: The Password Manager</h2>
            <p>
                This is the part where people usually tune out. "Ugh, a password manager? That sounds complicated and technical."
            </p>
            <p>
                I promise you, it's the opposite. It's the tool that <em>eliminates</em> complexity from your life. Think of it as a secure, digital vault that has one master key. You only have to remember one <em>really</em> strong password—the one that unlocks the vault.
            </p>
            <p>
                Once inside, the password manager:
            </p>
            <ul>
                <li><strong>Generates</strong> incredibly strong, random passwords for you (like <code>Xp@2#8!9qL$%kM*z</code>).</li>
                <li><strong>Stores</strong> them all securely in an encrypted vault.</li>
                <li><strong>Auto-fills</strong> your login details on websites and apps.</li>
            </ul>
            <p>
                You don't need to remember them, you don't need to type them. You just unlock your vault with your one master password, and it handles the rest. Popular options include <strong>Bitwarden</strong> (my favorite, and it has a great free plan), <strong>1Password</strong>, and <strong>LastPass</strong>.
            </p>

            <h2>Your Action Plan (No, You Don't Have to Do It All Today)</h2>
            <p>
                This doesn't have to be overwhelming. Start small.
            </p>
            <ol>
                <li><strong>Download a password manager.</strong> I recommend starting with Bitwarden. It takes five minutes to set up.</li>
                <li><strong>Change your email password first.</strong> Make it a long, unique passphrase (e.g., <code>glance-orange-battery-staple</code>). This is your most important account.</li>
                <li><strong>Next time you log in to a site,</strong> let the password manager generate and save a new, strong password for it. Do this one account at a time.</li>
            </ol>
            <p>
                Slowly, over time, you'll replace all your old, reused passwords without the stress of doing it all at once.
            </p>

            <h2>It's About Risk, Not Perfection</h2>
            <p>
                The goal isn't to become unhackable—that's impossible. The goal is to be a less attractive target than the next person. By using a password manager and unique passwords, you raise the effort required to hack you so high that most attackers will simply move on to easier prey.
            </p>
            <p>
                It's the digital equivalent of not being the slowest runner in the herd. Ditch the terrible passwords. Your future self will thank you.
            </p>
        </Styled.Wrapper>
    );
}