import {
    NavLink

} from "react-router-dom";
import styled from "styled-components";

export default function AllPostsList() {
    return (
        <Styled.Wrapper>
            <nav aria-label="All Posts">
                <ul style={{ border: "0px solid #f00", height: "100%", listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 6 }}>
                    <li>
                        <NavLink
                            to="/ai-101-how-you-already-use-it-every-day"
                            title="AI 101: It's Not Just Sci-Fi. How You Already Use It Every Day."
                        >
                            AI 101: It's Not Just Sci-Fi. How You Already Use It Every Day.
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/are-software-subscriptions-a-good-deal"
                            title="Are Software Subscriptions (Like Netflix and Adobe) a Good Deal?"
                        >
                            Are Software Subscriptions (Like Netflix and Adobe) a Good Deal?
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/are-you-addicted-how-apps-keep-you-scrolling"
                            title="Are You Addicted to Your Phone? How Apps Are Designed to Keep You Scrolling"
                        >
                            Are You Addicted to Your Phone? How Apps Are Designed to Keep You Scrolling
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/beginners-guide-backing-up-photos"
                            title="Don't Get Locked Out! The Beginner's Guide to Backing Up Your Digital Photos"
                        >
                            Don't Get Locked Out! The Beginner's Guide to Backing Up Your Digital Photos
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/behind-scenes-software-update"
                            title={`"It's Not a Bug, It's a Feature!" — Behind the Scenes of a Software Update`}
                        >
                            "It's Not a Bug, It's a Feature!" — Behind the Scenes of a Software Update
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/beyond-bitcoin-simple-idea-blockchain"
                            title="Beyond Bitcoin: The Simple Idea Behind Blockchain"
                        >
                            Beyond Bitcoin: The Simple Idea Behind Blockchain
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/biggest-misconceptions-about-being-a-developer"
                            title="The Biggest Misconceptions About Being a Developer (It's Not Like the Movies)"
                        >
                            The Biggest Misconceptions About Being a Developer (It's Not Like the Movies)
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/cookies-website-tracking-guide"
                            title="Cookies Aren't Just for Eating: A Simple Guide to Website Tracking"
                        >
                            Cookies Aren't Just for Eating: A Simple Guide to Website Tracking
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/day-in-life-website-developer"
                            title="A Day in the Life of a Website Developer (No, It's Not Just Coffee)"
                        >
                            A Day in the Life of a Website Developer (No, It's Not Just Coffee)
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/decoding-tech-job-titles-devops-ux-sre-pm"
                            title={`Why Do Tech Companies Have So Many Weird Job Titles? (Decoding "DevOps," "UX," etc.)`}
                        >
                            Why Do Tech Companies Have So Many Weird Job Titles? (Decoding "DevOps," "UX," etc.)
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/designer-vs-developer-who-builds-website"
                            ttile={`Designer vs. Developer: Who Actually Builds a Website?`}
                        >
                            Designer vs. Developer: Who Actually Builds a Website?
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/digital-spring-cleaning-tidy-online-life"
                            title={`Digital Spring Cleaning: 5 Things You Can Do Today to Tidy Your Online Life`}
                        >
                            Digital Spring Cleaning: 5 Things You Can Do Today to Tidy Your Online Life
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/from-idea-to-app-long-journey-of-a-simple-feature"
                            title={`From Idea to App: The Long Journey of a Simple Feature`}
                        >
                            From Idea to App: The Long Journey of a Simple Feature
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/how-netflix-spotify-know-what-you-like"
                            title={`The Invisible UI: How Apps Like Netflix and Spotify REALLY Know What You'll Like`}
                        >
                            The Invisible UI: How Apps Like Netflix and Spotify REALLY Know What You'll Like
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/internets-memory-what-happens-when-website-deleted"
                            title={`The Internet's Memory: What Happens to a Website When It's Deleted?`}
                        >
                            The Internet's Memory: What Happens to a Website When It's Deleted?
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/is-your-smart-device-listening"
                            title="Is Your Smart Device Listening to You? The Truth About Microphones and Ads."
                        >
                            Is Your Smart Device Listening to You? The Truth About Microphones and Ads.
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/laptop-buying-guide-normal-people"
                            title="The Laptop Buying Guide for Normal People (Not Geeks)"
                        >
                            The Laptop Buying Guide for Normal People (Not Geeks)
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/open-source-hidden-collaboration"
                            title="Open Source: The Hidden Collaboration Behind Most Software"
                        >
                            Open Source: The Hidden Collaboration Behind Most Software
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/read-before-you-post-digital-footprint-permanence"
                            title="Read This Before You Post: The Permanence of Your Digital Footprint"
                        >
                            Read This Before You Post: The Permanence of Your Digital Footprint
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/right-to-repair-why-cant-you-fix-your-own-phone"
                            title={`The "Right to Repair": Why Can't You Fix Your Own Phone?`}
                        >
                            The "Right to Repair": Why Can't You Fix Your Own Phone?
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/spotting-online-scams-phishing-guide"
                            title="A Developer's Guide to Spotting Online Scams and Phishing Emails"
                        >
                            A Developer's Guide to Spotting Online Scams and Phishing Emails
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/tech-behind-summer-blockbuster-more-than-cgi"
                            ttile="The Tech Behind Your Summer Blockbuster: More Than Just CGI"
                        >
                            The Tech Behind Your Summer Blockbuster: More Than Just CGI
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/the-cloud-is-someone-elses-computer"
                            title={`"The Cloud" Isn't Magic: It's Just Someone Else's Computer`}
                        >
                            "The Cloud" Isn't Magic: It's Just Someone Else's Computer
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/the-uber-effect-how-an-app-disrupts-industries"
                            title={`The "Uber Effect": How an App Can Disrupt an Entire Industry`}
                        >
                            The "Uber Effect": How an App Can Disrupt an Entire Industry
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/travel-smarter-tech-on-vacation"
                            title="Travel Smarter: How to Use Technology on Your Summer Vacation"
                        >
                            Travel Smarter: How to Use Technology on Your Summer Vacation
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/what-does-beta-actually-mean-peek-into-software-testing"
                            title={`What Does "Beta" Actually Mean? A Peek into Software Testing`}
                        >
                            What Does "Beta" Actually Mean? A Peek into Software Testing
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/what-happens-when-you-type-a-web-address"
                            title={`What Really Happens When You Type a Web Address and Press Enter?`}
                        >
                            What Really Happens When You Type a Web Address and Press Enter?
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/why-apps-feel-slow-speed-vs-features"
                            title={`Why Does This App Feel So Slow? The Developer's Dilemma of Speed vs. Features`}
                        >
                            Why Does This App Feel So Slow? The Developer's Dilemma of Speed vs. Features
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/why-internet-slow-on-the-beach-vacation-tech-woes"
                            title={`Why Your Internet Is So Slow on the Beach (And Other Vacation Tech Woes)`}
                        >
                            Why Your Internet Is So Slow on the Beach (And Other Vacation Tech Woes)
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/why-website-projects-cost-more-than-you-think"
                            title={`The Hidden Work: Why Your Website Project Costs More Than You Think`}
                        >
                            The Hidden Work: Why Your Website Project Costs More Than You Think
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/why-websites-look-weird-on-phone-responsive-design"
                            title={`Why Does This Website Look Weird on My Phone? An Intro to Responsive Design`}
                        >
                            Why Does This Website Look Weird on My Phone? An Intro to Responsive Design
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/wifi-vs-internet-difference-and-why-it-matters"
                            title={`Wi-Fi vs. Internet: What's the Difference and Why It Matters`}
                        >
                            Wi-Fi vs. Internet: What's the Difference and Why It Matters
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/your-data-is-valuable-privacy-settings-social-media"
                            title={`Your Data is Valuable: A Simple Guide to Privacy Settings on Social Media`}
                        >
                            Your Data is Valuable: A Simple Guide to Privacy Settings on Social Media
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/your-password-is-terrible"
                            title={`Your Password is Terrible, and Here's Why.`}
                        >
                            Your Password is Terrible, and Here's Why.
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </Styled.Wrapper>
    );
}

const Styled = {
    Wrapper: styled.div`
        nav {
            margin-bottom: 30px;;
            overflow: hidden;
            width: 300px;
            height: 500px;

            &:hover {
                overflow-y: auto;
            }
            
            ul {
                li {
                    a {
                        color: aqua;
                        border: 1px solid transparent;
                        padding: 0;
                        white-space: nowrap;
                        padding: 2px;

                        display: block;        /* block makes width/ellipsis predictable */
                        max-width: 100%;
                        white-space: nowrap;   /* no wrap */
                        overflow: hidden;      /* hide overflow */
                        text-overflow: ellipsis; /* … */
                        color: rgba(255,255,255,.9);
                        text-decoration: none;

                        &:hover { color: #4fc3f7; }
                        &.active { color: #4fc3f7; font-weight: 600; }

                        &:hover {
                            border-bottom: 1px solid #fff;
                        }
                    }
                }
            }
        }
    `,
};
