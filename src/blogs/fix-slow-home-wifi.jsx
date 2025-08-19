import styled from "styled-components";

import speedtestNear from "../assets/blogs/fix-slow-home-wifi/speedtest-near-router.png";
import placementDiagram from "../assets/blogs/fix-slow-home-wifi/router-placement-diagram.png";
import interferenceChart from "../assets/blogs/fix-slow-home-wifi/channel-interference-chart.png";

export const meta = {
    slug: "fix-slow-home-wifi",
    title: "Fixing Slow Home Wi-Fi: What I Actually Do (10–30 min checklist)",
    date: "2025-03-09", // Sunday
    tags: ["networking", "wifi", "home-tech", "how-to"],
    excerpt:
        "When my internet feels slow, I run the same quick routine: verify the line, test near the router, pick the right band/channel, move the box, and set a few sane router options.",
    cover: speedtestNear,
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
                If your video buffers or downloads crawl, try this before calling the ISP.
                This is my real checklist—short, boring, and it usually fixes it.
            </p>

            <h2>1) Verify the line, not the Wi-Fi</h2>
            <ul>
                <li>Run a speed test <strong>on your phone next to the router</strong> and again in the slow room.</li>
                <li>If you can, plug a laptop into the router with <strong>Ethernet</strong> and test once more.</li>
                <li>If Ethernet is fast but Wi-Fi is slow → it’s a wireless issue, not the ISP line.</li>
            </ul>

            <Figure>
                <FigImg src={speedtestNear} alt="Speed test result taken close to the router" loading="lazy" />
                <FigCap>Baseline near the router. If this is fine, the line is fine.</FigCap>
            </Figure>

            <h2>2) Use the right band</h2>
            <ul>
                <li><strong>2.4 GHz</strong> goes farther, slower. Good for old/IoT devices.</li>
                <li><strong>5 GHz</strong> (or 6 GHz if you have Wi-Fi 6E/7) is faster but hates walls. Use it for phones/laptops.</li>
                <li>Give the bands different names like <code>Home-2G</code> and <code>Home-5G</code> so devices don’t pick the wrong one.</li>
            </ul>

            <h2>3) Move the box (yes, really)</h2>
            <ul>
                <li>Center of the home, shoulder height, away from thick walls and metal.</li>
                <li>Don’t hide it in a cupboard. Height helps more than people expect.</li>
            </ul>

            <Figure>
                <FigImg src={placementDiagram} alt="Diagram of good router placement in a home" loading="lazy" />
                <FigCap>Middle of the house beats “next to the TV cabinet” every time.</FigCap>
            </Figure>

            <h2>4) Pick a cleaner channel</h2>
            <p>
                In apartments, everyone shares the same air. I scan channels and switch
                to the least crowded one.
            </p>
            <ul>
                <li>2.4 GHz → use channels <strong>1, 6, or 11</strong> only.</li>
                <li>5 GHz → try 40/80 MHz width; auto is fine but avoid DFS if your router drops when radar is detected.</li>
            </ul>

            <Figure>
                <FigImg src={interferenceChart} alt="Chart showing overlapping Wi-Fi channels and interference" loading="lazy" />
                <FigCap>Overlapping channels = drops. 1/6/11 on 2.4 GHz keeps things sane.</FigCap>
            </Figure>

            <h2>5) Router settings I actually change</h2>
            <ul>
                <li><strong>Update firmware</strong> (often fixes stability).</li>
                <li><strong>Disable WPS</strong>; keep WPA2/WPA3. Set a strong Wi-Fi password.</li>
                <li><strong>Reboot</strong> once after changes; it clears stuck radios.</li>
                <li>Optional: Set <strong>DNS</strong> to your preference (ISP, Cloudflare 1.1.1.1, or Google 8.8.8.8).</li>
            </ul>

            <h2>6) Extender vs mesh</h2>
            <p>
                Extenders can halve your speed. If you have many dead spots, a <strong>mesh</strong> kit
                (2–3 nodes over Ethernet backhaul if possible) is a better long-term fix.
            </p>

            <h2>7) When I call the ISP</h2>
            <ul>
                <li>Ethernet test is slow too.</li>
                <li>Downstream/upstream light keeps dropping or modem logs show frequent reconnects.</li>
                <li>Neighbors on the same provider report issues at the same time.</li>
            </ul>

            <h2>10-minute quick version</h2>
            <ol>
                <li>Speed test near router → far room.</li>
                <li>Use 5 GHz for phones/laptops, 2.4 GHz for IoT.</li>
                <li>Move router higher/central; update firmware.</li>
                <li>Pick 1/6/11 on 2.4 GHz; try different channel on 5 GHz.</li>
            </ol>

            <p>
                Most “slow internet” complaints I get are Wi-Fi positioning or band/channel choices.
                Do the basics once and it stays fast.
            </p>
        </article>
    );
}
