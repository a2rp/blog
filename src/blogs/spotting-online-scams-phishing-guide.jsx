import { Styled } from "./styled";

export const meta = {
    title: "A Developer's Guide to Spotting Online Scams and Phishing Emails",
    slug: "spotting-online-scams-phishing-guide",
    date: "2025-02-18",
    author: "Ashish Ranjan - Full-Stack Developer",
    category: "Digital Life & Security",
    tags: ["Phishing", "Scams", "Security", "Email", "Cyber Safety"],
    excerpt: "That urgent email from 'your bank' looks real. The website it links to looks perfect. But it's all a trap. Learn the telltale signs developers look for to spot a phishing attempt from a mile away.",
    cover: null,
};

export default function Post() {
    return (
        <Styled.Wrapper>
            <Styled.Info>
                <h1>{meta.title}</h1>
                <div><b>By:</b> {meta.author}</div>
                <div><b>Published on:</b> February 18, 2025</div>
                <div><b>Category:</b> Digital Life & Security</div>
            </Styled.Info>

            <p>
                A few years ago, my non-tech-savvy uncle nearly fell for one. The email was impeccable—it had the bank's logo, the right fonts, and a message that made his heart drop: "Suspicious activity detected on your account. Click here to secure it immediately."
            </p>
            <p>
                He was moments away from clicking. What stopped him? He called me, panicked. I took one look and saw the red flags screaming from the screen. The only thing "suspicious" was the email itself.
            </p>
            <p>
                Scammers don't just rely on poorly written emails from a "Nigerian prince" anymore. Their tactics, known as <strong>phishing</strong>, have become scarily sophisticated. They use psychology and technical trickery to create a perfect replica of a trusted brand to steal your login info, money, or identity.
            </p>
            <p>
                But no matter how good the disguise, they always leave clues. After a decade of looking at code and URLs all day, developers learn to spot these clues instinctively. Here's how you can, too.
            </p>

            <h2>The Number One Rule: Slow Down</h2>
            <p>
                This is the scammer's greatest weapon: <strong>urgency.</strong> They want to trigger your panic reflex—"Your account will be closed!" "You've been charged $999.99!" "Your package couldn't be delivered!"—so you act first and think later.
            </p>
            <p>
                <strong>Your best defense is to pause.</strong> Take a deep breath. Legitimate companies will never force you to make a security decision in a 60-second panic window.
            </p>

            <h2>The Red Flags Developers Look For</h2>
            <p>
                Once you've paused, put on your detective hat and look for these telltale signs.
            </p>

            <h3>1. The From Address: The Devil's in the Details</h3>
            <p>
                This is the easiest place to start. The sender's name might display as "Amazon Support," but that's just a label anyone can set. You need to look at the actual email address.
            </p>
            <p>
                Hover your mouse over the sender's name to see the real address.
            </p>
            <ul>
                <li><strong>Legitimate:</strong> <code>support@amazon.com</code></li>
                <li><strong>Scam:</strong> <code>amazon-support@secure-service.xyz</code> or <code>amazon.security@gmail.com</code></li>
            </ul>
            <p>
                See the difference? A big company will <em>never</em> use a public email domain like <code>@gmail.com</code> or a weird, unrelated domain like <code>@xyz</code>.
            </p>

            <h3>2. The Greeting: Is It Personal or Vague?</h3>
            <p>
                Your bank, Netflix, or PayPal knows your name. They will use it: "Hello, Ashish Ranjan," or "Dear Mr. Ranjan."
            </p>
            <p>
                Phishing emails often use generic greetings because they're blasted out to millions of people. Be wary of emails that start with:
            </p>
            <ul>
                <li>"Dear Valued Customer"</li>
                <li>"Hello User"</li>
                <li>"Attention Account Holder"</li>
            </ul>

            <h3>3. The Link: Where Does It *Really* Go?</h3>
            <p>
                This is the most important technical check. The text of a link can say anything, but it can point somewhere entirely different.
            </p>
            <p>
                <strong>Never click without checking.</strong> Hover your mouse over the link (don't click!) and look at the bottom corner of your browser. The true destination URL will appear.
            </p>
            <ul>
                <li><strong>Legitimate Amazon link:</strong> <code>https://www.amazon.com/your-account</code></li>
                <li><strong>Phishing link:</strong> <code>https://amazon-security-login.vercel.app</code> or <code>http://45.33.112.77/amazon/verify</code></li>
            </ul>
            <p>
                The scam links try to <em>look</em> right by including "amazon," but the actual domain name (<code>vercel.app</code>, an IP address) is a dead giveaway. The real domain is always the last part right before the first single slash <code>/</code>.
            </p>

            <h3>4. The Request: What Are They Asking For?</h3>
            <p>
                <strong>Legitimate companies will never email you asking for your password, Social Security number, or credit card number.</strong> They already have that information on file.
            </p>
            <p>
                If an email asks you to "confirm" or "re-enter" this sensitive data, it's a trap. Full stop.
            </p>

            <h3>5. The Grammar and Spelling</h3>
            <p>
                While many scams are well-written, some still have subtle mistakes. Poor grammar, awkward phrasing, or unusual word choices can be a sign of a non-native speaker running a scam operation. Big corporations have teams of people who proofread their customer communications.
            </p>

            <h2>What to Do If You're Unsure</h2>
            <p>
                If you get an email that feels off but you're not 100% sure:
            </p>
            <ol>
                <li><strong>Do NOT click any links.</strong></li>
                <li><strong>Do NOT download attachments.</strong></li>
                <li><strong>Go directly to the source.</strong> Open your web browser and type the company's website address yourself (e.g., <code>amazon.com</code>), log in normally, and check for any messages there. Or, call the customer service number listed on their official website.</li>
            </ol>

            <h2>The Bottom Line</h2>
            <p>
                Scammers are good, but they're not perfect. They rely on our trust and our panic. By learning to slow down and check the simple details—the real email address, the true link destination, and the type of request—you can see through the disguise every time.
            </p>
            <p>
                Think of it like checking the peephole before you open your door. It takes two seconds, and it keeps you safe. Your inbox is your digital front door. It's always worth taking that second look.
            </p>
        </Styled.Wrapper>
    );
}