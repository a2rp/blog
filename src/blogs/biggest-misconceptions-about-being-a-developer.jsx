import { Styled } from "./styled";
import biggest_misconceptions_about_being_a_developer from "../assets/covers/biggest-misconceptions-about-being-a-developer.png";

export const meta = {
    title: "The Biggest Misconceptions About Being a Developer (It's Not Like the Movies)",
    slug: "biggest-misconceptions-about-being-a-developer",
    date: "2025-06-09",
    author: "Ashish Ranjan - Full-Stack Developer",
    category: "A Look at Tech Culture & Careers",
    tags: ["Careers", "DevOps", "UX"],
    excerpt:
        "Hoodies, neon terminals, and overnight 'genius' builds make great cinema—but bad career expectations. Here's what real software work looks like, and how to thrive in it.",
    cover: biggest_misconceptions_about_being_a_developer,
};

export default function Post() {
    return (
        <Styled.Wrapper>
            <Styled.Info>
                <h1>{meta.title}</h1>
                <div><b>By:</b> {meta.author}</div>
                <div><b>Published on:</b> June 9, 2025</div>
                <div><b>Category:</b> {meta.category}</div>
            </Styled.Info>

            <img src={meta.cover} alt={meta.title} style={{ height: "600px", width: "100%", marginBottom: "15px" }} />

            <p>
                Ask 10 people what developers do, and half will picture a hoodie-wearing hacker pounding keys while green
                code rains down. It's a vibe—but not the job. The real craft is calmer, more collaborative, and built on
                small, reversible changes that add up.
            </p>

            <Styled.Analogy>
                <p>
                    <strong>Analogy:</strong> Building software is like <em>renovating a busy airport</em> while flights
                    are taking off. You can't shut it down. You stage changes, coordinate with many teams, add safety
                    rails, and roll out in phases—quiet excellence beats dramatic heroics.
                </p>
            </Styled.Analogy>

            <h2>Myths vs. Reality</h2>

            <h3>Myth #1: “Developers write code all day.”</h3>
            <p>
                <strong>Reality:</strong> We spend more time reading than writing—requirements, existing code, logs, PRs.
                Good outcomes depend on understanding the system and the users before changing anything.
            </p>

            <h3>Myth #2: “You must memorize everything.”</h3>
            <p>
                <strong>Reality:</strong> Fundamentals + documentation win. We look things up constantly. Knowing <em>how to learn</em>
                beats hoarding syntax in your head.
            </p>

            <h3>Myth #3: “It's a solo genius sport.”</h3>
            <p>
                <strong>Reality:</strong> It's a team game—PMs, designers, QA, security, ops. Pull requests, pair sessions,
                and design reviews are where quality happens.
            </p>

            <h3>Myth #4: “Once it ships, it's done.”</h3>
            <p>
                <strong>Reality:</strong> Most work is maintenance: bugs, refactors, migrations, performance, accessibility,
                and security patches. Software has a long tail.
            </p>

            <h3>Myth #5: “Great devs write the most code.”</h3>
            <p>
                <strong>Reality:</strong> Senior devs often <em>delete</em> code—simplifying flows, consolidating modules,
                and designing APIs that make future changes smaller.
            </p>

            <h3>Myth #6: “Debugging means you failed.”</h3>
            <p>
                <strong>Reality:</strong> Debugging <em>is</em> the job: forming hypotheses, isolating variables, writing
                small tests, and using tools to make unknowns visible.
            </p>

            <h3>Myth #7: “More hours = more output.”</h3>
            <p>
                <strong>Reality:</strong> Tired brains ship bugs. Sustainable pace, automation, and tight feedback loops
                beat weekend marathons.
            </p>

            <h3>Myth #8: “It's all algorithms and whiteboards.”</h3>
            <p>
                <strong>Reality:</strong> You'll use data structures and complexity thinking, but most days are about
                product tradeoffs, data models, API design, and clear UX.
            </p>

            <h3>Myth #9: “Meetings are a waste.”</h3>
            <p>
                <strong>Reality:</strong> Bad meetings are. Good ones align constraints quickly and prevent weeks of rework.
                Short, focused syncs &gt; long, vague ones.
            </p>

            <h3>Myth #10: “You need to be a math prodigy.”</h3>
            <p>
                <strong>Reality:</strong> Curiosity, communication, and systematic thinking carry you far. Specialized math
                pops up in certain fields (graphics, ML), but most web work relies on logic and design sense.
            </p>

            <h2>What Work Actually Feels Like</h2>
            <ul>
                <li><strong>Small slices:</strong> Scope narrowly, ship, observe, iterate.</li>
                <li><strong>Guardrails:</strong> Tests, linters, CI, feature flags, rollbacks.</li>
                <li><strong>Observability:</strong> Logs, metrics, traces. You build dashboards like you build features.</li>
                <li><strong>Docs &amp; notes:</strong> ADRs and READMEs reduce tribal knowledge and speed new teammates up.</li>
                <li><strong>Respect for users:</strong> Real-world constraints (accessibility, low bandwidth, old devices) matter.</li>
            </ul>

            <Styled.Analogy>
                <p>
                    <strong>Builder's Note:</strong> If you lead teams, make the invisible work visible—track time on
                    refactors, migrations, and reliability. When you celebrate only new features, you incentivize brittle systems.
                </p>
            </Styled.Analogy>

            <h2>How to Evaluate a Team Before You Join</h2>
            <ul>
                <li><strong>Deployment frequency &amp; rollback ease:</strong> Can they ship daily and undo safely?</li>
                <li><strong>PR culture:</strong> Are reviews kind, specific, and timely?</li>
                <li><strong>Product alignment:</strong> Do PM/design changes come early, not post-implementation?</li>
                <li><strong>On-call health:</strong> Clear runbooks, sane rotations, real postmortems.</li>
                <li><strong>Learning time:</strong> Budget for spikes, cleanup, and mentorship.</li>
            </ul>

            <h2>For New (or Aspiring) Developers</h2>
            <ul>
                <li><strong>Ship tiny projects publicly.</strong> Confidence comes from reps.</li>
                <li><strong>Practice reading code.</strong> Follow a bug fix in an open-source repo.</li>
                <li><strong>Write things down.</strong> Your future self is your most frequent collaborator.</li>
                <li><strong>Ask better questions.</strong> State what you tried, what you observed, and your hypothesis.</li>
                <li><strong>Mind the user.</strong> Feature success is measured in user outcomes, not lines of code.</li>
            </ul>

            <h2>The Bottom Line</h2>
            <p>
                The best developers aren't movie hackers; they're diligent teammates who make complex systems feel simple.
                If you enjoy learning in public, collaborating across disciplines, and improving a product a little every
                day, you'll love this work.
            </p>
        </Styled.Wrapper>
    );
}
