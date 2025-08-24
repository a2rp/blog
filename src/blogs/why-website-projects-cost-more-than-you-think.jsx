import { Styled } from "./styled";

export const meta = {
    title: "The Hidden Work: Why Your Website Project Costs More Than You Think",
    slug: "why-website-projects-cost-more-than-you-think",
    date: "2025-03-31",
    author: "Ashish Ranjan - Full-Stack Developer",
    category: "Behind The Digital Curtain",
    tags: ["Web Basics", "UX", "DevOps"],
    excerpt: "That quote for a new website seems high for 'just putting some text and pictures online.' But beneath the visible surface lies an iceberg of planning, testing, and decisions that clients never see.",
    cover: null,
};

export default function Post() {
    return (
        <Styled.Wrapper>
            <Styled.Info>
                <h1>{meta.title}</h1>
                <div><b>By:</b> {meta.author}</div>
                <div><b>Published on:</b> March 31, 2025</div>
                <div><b>Category:</b> Behind The Digital Curtain</div>
            </Styled.Info>

            <p>
                Early in my freelance career, I landed a client who wanted a "simple" five-page website. They had the text and images ready. "How long could it possibly take?" they asked. I gave them a quote based on the naive math of hours-per-page. They agreed, and I got to work, confident I'd underpromised and would overdeliver.
            </p>
            <p>
                I was wrong. The project became a nightmare of endless emails, changed minds, and technical hiccups. What I had estimated as a 20-hour project ballooned into 60. I was working for far below minimum wage, and the client was frustrated by my requests for clarification. We both lost.
            </p>
            <p>
                That project was my brutal education in the hidden economy of web development. Clients often see the tip of the iceberg—the beautiful, finished site. They rarely see the massive structure of planning, communication, and problem-solving lurking beneath the surface that makes it float.
            </p>
            <p>
                If you've ever wondered why a website costs more than you expected, here's a tour of the invisible work you're paying for.
            </p>

            <h2>The Iceberg Under the Surface</h2>
            <p>
                Imagine a website project is an iceberg.
            </p>
            <p>
                <strong>The Tip (What the Client Sees):</strong>
                <br />
                - The beautiful design
                <br />
                - The written content
                <br />
                - The final code
            </p>
            <p>
                <strong>The Massive Base (The Hidden Work):</strong>
                <br />
                - Discovery & Planning
                <br />
                - Communication & Project Management
                <br />
                - Testing & Quality Assurance
                <br />
                - Deployment & Troubleshooting
                <br />
                - Maintenance & Updates
            </p>

            <h2>1. Discovery & Planning: The Blueprint Phase</h2>
            <p>
                This is the most crucial and most invisible phase. Before a single line of code is written, a good developer asks a million questions:
            </p>
            <ul>
                <li>"What is the primary goal of this site? To get leads, sell products, or display information?"</li>
                <li>"Who is your target audience? What are their needs?"</li>
                <li>"What actions do you want users to take?"</li>
                <li>"How will you maintain the site after it's built? Will you need to update content yourself?"</li>
            </ul>
            <p>
                This phase defines the project's scope. Skipping it is like building a house without a blueprint—it will inevitably lead to costly changes and frustrations later.
            </p>

            <h2>2. Communication & Project Management: The Glue</h2>
            <p>
                Writing code is often the fastest part. The rest of the time is spent on:
            </p>
            <ul>
                <li><strong>Emails and Meetings:</strong> Clarifying goals, providing updates, making decisions.</li>
                <li><strong>Writing Proposals and Invoices:</strong> The administrative work of running a business.</li>
                <li><strong>Chasing Feedback:</strong> Gently reminding clients to provide content or review designs.</li>
            </ul>
            <p>
                This "project management" is the glue that holds everything together. It's uninterrupted work and is essential for a successful outcome, but it's rarely billed explicitly, so its cost gets baked into the overall price.
            </p>

            <h2>3. The "Simple" Change That Isn't</h2>
            <p>
                This is the biggest source of misunderstanding. A client might ask for a "simple" change: "Can we just move that button from the right to the left?"
            </p>
            <p>
                What seems simple on the surface can have cascading effects:
            </p>
            <ul>
                <li>It might break the layout on mobile devices.</li>
                <li>It might require rewriting the responsive CSS.</li>
                <li>It might affect the user flow that was carefully designed around that button's original placement.</li>
                <li>It needs to be tested on all browsers and devices again.</li>
            </ul>
            <p>
                A five-minute change can easily become an hour of work. This is why developers often seem resistant to changes—we're visualizing the domino effect.
            </p>

            <h2>4. Testing: The Final, Crucial Gate</h2>
            <p>
                As we've discussed before, a website isn't done when it looks good on the developer's screen. It has to be tested rigorously:
            </p>
            <ul>
                <li>On different browsers (Chrome, Safari, Firefox, Edge)</li>
                <li>On different devices (iPhone, Android, tablet, desktop)</li>
                <li>With different internet speeds</li>
                <li>For functionality: do all the forms, buttons, and links work?</li>
            </ul>
            <p>
                This process is meticulous and time-consuming. Skipping it means shipping a broken experience to users.
            </p>

            <h2>5. The Launch (It's Not Just a Button)</h2>
            <p>
                "Going live" is a process, not an event. It involves:
            </p>
            <ul>
                <li>Setting up hosting and configuring servers.</li>
                <li>Transferring the domain name.</li>
                <li>Setting up SSL certificates for security (that little padlock icon).</li>
                <li>Testing everything <em>again</em> on the live server.</li>
            </ul>
            <p>
                And something always goes wrong. A plugin might be incompatible, an image might not load. The developer needs to be on hand to troubleshoot immediately.
            </p>

            <h2>6. The Future: Maintenance and Updates</h2>
            <p>
                A website is not a painting you hang on the wall and forget. It's more like a car that needs regular maintenance. Software updates, security patches, and content changes are ongoing needs. A good quote often includes an estimate for the first few months of this care, or a plan for future maintenance.
            </p>

            <h2>The Value of Getting It Right</h2>
            <p>
                When you hire a professional, you're not just paying for their coding time. You're paying for their experience—the ability to ask the right questions upfront, to foresee problems, to manage the process smoothly, and to deliver a product that isn't just beautiful, but is fast, secure, and functional for every user.
            </p>
            <p>
                You're paying them to navigate the iceberg so you don't have to. You're investing in the 90% of the work that happens beneath the surface, which is what ultimately ensures your website isn't just a pretty face, but a reliable engine for your business.
            </p>
        </Styled.Wrapper>
    );
}