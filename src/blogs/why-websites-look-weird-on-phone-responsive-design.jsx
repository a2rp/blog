import { Styled } from "./styled";
import why_websites_look_weird_on_phone_responsive_design from "../assets/covers/why-websites-look-weird-on-phone-responsive-design.png";

export const meta = {
    title: "Why Does This Website Look Weird on My Phone? An Intro to Responsive Design",
    slug: "why-websites-look-weird-on-phone-responsive-design",
    date: "2025-01-21",
    author: "Ashish Ranjan - Full-Stack Developer",
    category: "How The Internet Works",
    tags: ["UX", "Web Basics", "Accessibility"],
    excerpt: "Ever tried to read a website on your phone and had to play the pinch-and-zoom game? That's a failure of responsive design. Here's how the good websites get it right.",
    cover: why_websites_look_weird_on_phone_responsive_design,
};

export default function Post() {
    return (
        <Styled.Wrapper>
            <Styled.Info>
                <h1>{meta.title}</h1>
                <div><b>By:</b> {meta.author}</div>
                <div><b>Published on:</b> January 21, 2025</div>
                <div><b>Category:</b> How The Internet Works</div>
            </Styled.Info>

            <img src={meta.cover} alt={meta.title} style={{ height: "600px", width: "100%", marginBottom: "15px" }} />

            <p>
                I have a confession. The other day, I was waiting for a friend at a cafe and made the mistake of trying to pay a bill on a website that was, to put it nicely, not built for phones. I spent a full minute pinching and zooming, trying to tap a microscopic "Submit" button, and eventually gave up in frustration.
            </p>
            <p>
                We've all been there. It's a special kind of modern annoyance. But on the flip side, we've also had the seamless experience of browsing a site like Netflix or Wikipedia that just... works, no matter what device we're on.
            </p>
            <p>
                The difference between these two experiences boils down to one concept: <strong>responsive design</strong>. It's not magic; it's a set of thoughtful rules that developers follow to make sure a website can adapt to any screen, from a massive desktop monitor to the smartwatch on your wrist.
            </p>

            <h2>The "Good Ol' Days" (Which Weren't Actually That Good)</h2>
            <p>
                Back when everyone browsed the internet on a chunky CRT monitor, life was simple for developers. You built one page, for one screen size.
            </p>
            <p>
                Then the iPhone happened. Suddenly, everyone was trying to shove a website designed for a 1000-pixel-wide screen onto a device that was only 320 pixels wide. The result was a disaster of microscopic text and horizontal scrolling. The quick-and-dirty solution was to build a separate, stripped-down "mobile website" (you might remember URLs like <code>m.facebook.com</code>).
            </p>
            <p>
                This was a pain for everyone. Companies had to build and maintain two separate websites. It was clunky, and you'd often get stuck on the mobile version even when you were on a desktop browser.
            </p>

            <h2>Enter Responsive Design: The One-Site-Fits-All Solution</h2>
            <p>
                The core idea of responsive design is beautifully simple: instead of building multiple fixed-size pages, build one flexible page that <em>responds</em> to its environment.
            </p>
            <p>
                Think of it like water. Pour water into a cup, it becomes a cup. Pour it into a vase, it becomes a vase. A responsive website does the same thing with your screen. It flows to fill the space it's given.
            </p>
            <p>
                So how does this digital shape-shifting actually work? It's built on three core techniques.
            </p>

            <h3>1. The Fluid Grid: No More Rigid Rulers</h3>
            <p>
                Old websites were laid out with fixed pixels. A sidebar might be <code>200px</code> wide. On a phone, those 200 pixels would take over the entire screen, squishing the main content into oblivion.
            </p>
            <p>
                Responsive design uses relative units like <strong>percentages</strong> instead. A sidebar might be set to <code>25%</code> wide. That means it will always take up a quarter of the available space, whether that space is 400 pixels or 4000. Everything becomes proportional, and the layout can breathe and flex.
            </p>

            <h3>2. Flexible Images: No More Breaking The Layout</h3>
            <p>
                A fixed, large image was a great way to break a mobile layout. The solution is simple but effective:
            </p>
            <p>
                <code>img {'{'}' max-width: 100%; height: auto; {'}'}'</code>
            </p>
            <p>
                This little snippet of CSS is the unsung hero of responsive design. It tells every image: "Hey, you can be as big as you want, but never bigger than your container." This one line prevents images from bursting out of their elements and causing havoc on small screens.
            </p>

            <h3>3. CSS Media Queries: The Brain Behind the Operation</h3>
            <p>
                This is the real genius. <strong>Media queries</strong> are like little "if-then" statements for our CSS. They allow us to ask the browser a question about its environment—usually, "How wide is your screen right now?"—and apply different styles based on the answer.
            </p>
            <p>
                For example, we can write:
            </p>
            <p>
                <em>"If the screen is narrower than 768 pixels (a typical phone size), then stack these two boxes on top of each other and change the navigation menu into a hamburger icon."</em>
            </p>
            <p>
                This is how a complex desktop layout with multiple columns can gracefully collapse into a single, easy-to-scroll column on a mobile device. It's not a different website; it's the same website, just wearing different clothes for a different occasion.
            </p>

            <h2>Why Bother? It's a Lot of Work.</h2>
            <p>
                You might be thinking, "This sounds complicated. Why go through the trouble?"
            </p>
            <p>
                The answer is simple: <strong>you</strong>.
            </p>
            <p>
                More people now browse the internet on mobile devices than on desktop computers. Google now prioritizes mobile-friendly websites in its search results. If your site isn't responsive, you're providing a bad experience for the majority of your users, and they will leave. It's that simple.
            </p>
            <p>
                For developers, maintaining one responsive site is far easier than building and updating two separate ones. It's an investment that pays for itself in user satisfaction and reach.
            </p>

            <h2>The Pinch-and-Zoom Test</h2>
            <p>
                The next time you're browsing the web on your phone, take notice. If you never once have to pinch-to-zoom to read text or struggle to tap a button, tip your hat to the developers. They did their job well.
            </p>
            <p>
                They built you a website made of water, not brick. And that's a small miracle of modern web design.
            </p>
        </Styled.Wrapper>
    );
}