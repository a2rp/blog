import { Styled } from "./styled";
import laptop_buying_guide_normal_people from "../assets/covers/laptop-buying-guide-normal-people.png";

export const meta = {
    title: "The Laptop Buying Guide for Normal People (Not Geeks)",
    slug: "laptop-buying-guide-normal-people",
    date: "2025-08-04",
    author: "Ashish Ranjan - Full-Stack Developer",
    category: "Back to Basics & Forward Thinking",
    tags: ["Hardware", "Performance", "Platforms"],
    excerpt:
        "No alphabet soup, no fan wars. A simple way to choose a laptop you'll love-based on what you actually do-plus clear spec targets and a printable checklist.",
    cover: laptop_buying_guide_normal_people,
};

export default function Post() {
    return (
        <Styled.Wrapper>
            <Styled.Info>
                <h1>{meta.title}</h1>
                <div><b>By:</b> {meta.author}</div>
                <div><b>Published on:</b> August 4, 2025</div>
                <div><b>Category:</b> {meta.category}</div>
            </Styled.Info>

            <img src={meta.cover} alt={meta.title} style={{ height: "600px", width: "100%", marginBottom: "15px" }} />

            <p>
                Buying a laptop shouldn't require a degree in acronyms. Skip the spec wars-start with <em>what you do</em>, then
                pick the machine that fits. This guide gives you plain-English targets so you won't overpay or underbuy.
            </p>

            <Styled.Analogy>
                <p>
                    <strong>Analogy:</strong> Think of laptops like <em>cars</em>. A city hatchback (ultrabook) is great for daily
                    errands; a pickup (workstation) hauls heavy loads; a touring bike (2-in-1) is flexible. You don't need a race car
                    to fetch groceries.
                </p>
            </Styled.Analogy>

            <h2>Step 1 - Pick Your Use-Case (then follow its targets)</h2>
            <ul>
                <li><strong>Everyday / Student:</strong> browsing, docs, video calls, light photo edits.</li>
                <li><strong>Code / Data Learner:</strong> VS Code, Docker-lite, small datasets, light VMs.</li>
                <li><strong>Creator:</strong> Lightroom, Photoshop, Figma, 1080p-4K video edits.</li>
                <li><strong>Gamer / 3D:</strong> high-refresh gaming, Blender, Unreal.</li>
                <li><strong>Travel-first:</strong> meetings, notes, long flights, minimal charger weight.</li>
            </ul>

            <h2>Spec Targets (Good / Better / Best)</h2>
            <p>Use these as guardrails. If a store pitch doesn't beat these in your category, keep looking.</p>

            <h3>CPU (Processor)</h3>
            <ul>
                <li><strong>Everyday/Student:</strong> Good: modern mid-tier (e.g., Core i5 or Ryzen 5 class). Better: higher mid-tier. Best: high-tier or Apple M-series base.</li>
                <li><strong>Code/Data:</strong> Good: mid-tier 8+ threads. Better: higher tier with strong single-core. Best: high-tier or Apple M-series Pro/Max equivalents.</li>
                <li><strong>Creator:</strong> Better/Best tiers recommended for exports and batch edits.</li>
                <li><strong>Gamer/3D:</strong> High-tier with good sustained performance (pair with a real GPU).</li>
            </ul>

            <h3>Memory (RAM)</h3>
            <ul>
                <li><strong>Everyday/Student:</strong> 8&nbsp;GB (Good), 16&nbsp;GB (Better), 16&nbsp;GB+ (Best).</li>
                <li><strong>Code/Data &amp; Creator:</strong> 16&nbsp;GB (Good), 32&nbsp;GB (Better), 32-64&nbsp;GB (Best).</li>
                <li><strong>Gamer/3D:</strong> 16&nbsp;GB (Good), 32&nbsp;GB (Better/Best).</li>
            </ul>

            <h3>Storage (SSD)</h3>
            <ul>
                <li>256&nbsp;GB (Good) for light use, 512&nbsp;GB (Better) for most people, 1&nbsp;TB+ (Best) for creators/gamers.</li>
                <li>Prefer NVMe SSD. Bonus: a second M.2 slot or easy serviceability.</li>
            </ul>

            <h3>Display</h3>
            <ul>
                <li><strong>Size:</strong> Travel: 13-14″. Desk + portability: 14-15″. Creator/Gamer: 15-16″ (or external monitor).</li>
                <li><strong>Resolution:</strong> 1920x1200 (Good) → 2560x1600 (Better) → 2880x1800/4K (Best for creators).</li>
                <li><strong>Brightness:</strong> 300&nbsp;nits (Good indoor) → 400&nbsp;nits (Better) → 500&nbsp;+ for bright rooms.</li>
                <li><strong>Color:</strong> 100% sRGB (Better). Creators: near-DCI-P3 coverage + factory calibration.</li>
                <li><strong>Refresh:</strong> 60&nbsp;Hz (Good), 120&nbsp;Hz+ (Better for smoothness/gaming).</li>
            </ul>

            <h3>Graphics</h3>
            <ul>
                <li><strong>Everyday/Travel:</strong> Integrated graphics are fine.</li>
                <li><strong>Creator:</strong> Prefer a mid-tier discrete GPU (or Apple M-series with high media engine throughput).</li>
                <li><strong>Gamer/3D:</strong> Dedicated GPU with sufficient VRAM; prioritize cooling over raw nameplate watts.</li>
            </ul>

            <h3>Battery &amp; Portability</h3>
            <ul>
                <li><strong>Weight:</strong> Travel: ≤1.3&nbsp;kg (Great), ≤1.5&nbsp;kg (Good). Anything above 2&nbsp;kg is desk-bound.</li>
                <li><strong>Battery:</strong> 50-60&nbsp;Wh (Good), 60-75&nbsp;Wh (Better), 75&nbsp;Wh+ (Best). Real-world 6-10 hours for mixed use is healthy.</li>
                <li><strong>Charger:</strong> USB-C 65&nbsp;W+ preferred; bonus if it supports charging from power banks.</li>
            </ul>

            <h3>Ports &amp; Connectivity</h3>
            <ul>
                <li>At least two USB-C (preferably USB4/Thunderbolt on one), one USB-A, HDMI, headphone jack. SD/MicroSD is a creator bonus.</li>
                <li>Wi-Fi 6/6E or newer, Bluetooth 5.x, optional LTE/eSIM if you roam a lot.</li>
            </ul>

            <h3>Webcam, Mic &amp; Keyboard</h3>
            <ul>
                <li>1080p webcam with noise-reduced mics (or plan a tiny external camera). Physical shutter is nice.</li>
                <li>Backlit keyboard, decent travel, and a glassy precision touchpad. If possible, type for 5 minutes in-store.</li>
            </ul>

            <h2>Pick Your Category Cheat-Sheet</h2>
            <ul>
                <li><strong>Everyday / Student:</strong> 13-14″, mid-tier CPU, 16&nbsp;GB RAM, 512&nbsp;GB SSD, 300-400&nbsp;nits, 1.2-1.5&nbsp;kg, USB-C charging.</li>
                <li><strong>Code / Data:</strong> 14-15″, stronger CPU, 16-32&nbsp;GB RAM, 512&nbsp;GB-1&nbsp;TB SSD, 1200p+ display, USB-C + HDMI, good thermals.</li>
                <li><strong>Creator:</strong> 14-16″ high-quality display (color), 32&nbsp;GB RAM ideal, 1&nbsp;TB SSD, mid/high GPU, SD reader.</li>
                <li><strong>Gamer / 3D:</strong> 15-16″ 120-240&nbsp;Hz, dedicated GPU, strong cooling, 16-32&nbsp;GB RAM, 1&nbsp;TB SSD.</li>
                <li><strong>Travel-first:</strong> 13-14″, ≤1.3&nbsp;kg, long battery, quiet fans, great webcam/mics.</li>
            </ul>

            <h2>What Actually Matters (and What Doesn't)</h2>
            <ul>
                <li><strong>Matters:</strong> RAM (don't skimp), SSD size, screen quality, battery, keyboard/trackpad feel.</li>
                <li><strong>Doesn't (as much):</strong> 4K on 13″ (battery hit), RGB keyboards for non-gamers, extreme CPU tiers for basic tasks.</li>
            </ul>

            <h2>Try-Before-You-Buy Tests (5 Minutes in Store)</h2>
            <ul>
                <li>Open 10 browser tabs + a doc + a video call preview. Any stutter or fan roar? Walk away.</li>
                <li>Max the screen brightness; check viewing angles and text crispness.</li>
                <li>Type a paragraph. If you miss keys or the deck flexes, it won't improve at home.</li>
                <li>Pinch-zoom an image and scroll a long page. Trackpad should feel precise, not floaty.</li>
            </ul>

            <h2>Service, Warranty &amp; Upgrades</h2>
            <ul>
                <li><strong>Warranty:</strong> 1 year standard; consider 2-3 years if the keyboard/battery isn't easily replaceable.</li>
                <li><strong>Upgrades:</strong> If you're budget-watching, a model with user-upgradeable RAM/SSD can save money later.</li>
                <li><strong>Parts &amp; repairability:</strong> Availability of batteries/keycaps/fans matters more than a tiny spec bump.</li>
            </ul>

            <h2>Privacy &amp; Security Basics</h2>
            <ul>
                <li>Prefer fingerprint or face unlock + TPM/secure enclave support and disk encryption.</li>
                <li>Physical webcam shutter or a clear on-screen indicator for camera/mic use.</li>
            </ul>

            <Styled.Analogy>
                <p>
                    <strong>Builder's Note:</strong> If you're making apps for everyday users, assume mid-tier laptops and flaky networks.
                    Optimize for battery (idle timers, efficient rendering) and memory (avoid bloated caches).
                </p>
            </Styled.Analogy>

            <h2>Common Traps (Avoid These)</h2>
            <ul>
                <li><strong>8&nbsp;GB RAM + 256&nbsp;GB SSD for pro use:</strong> Feels fine day 1, cramped by day 30.</li>
                <li><strong>Shiny 4K on small screens:</strong> Gorgeous, but often halves battery life.</li>
                <li><strong>Huge “gaming” power in a thin chassis:</strong> Loud, hot, throttled. Balance power with cooling.</li>
                <li><strong>Single USB-C port:</strong> Dongle life forever-prefer at least two.</li>
            </ul>

            <h2>Printable Mini-Checklist</h2>
            <ul>
                <li>[ ] Use-case picked (Everyday / Code / Creator / Gamer / Travel)</li>
                <li>[ ] RAM meets target (16&nbsp;GB+ for most; 32&nbsp;GB for creator/gamer)</li>
                <li>[ ] SSD size fits (512&nbsp;GB min for comfort; 1&nbsp;TB if media-heavy)</li>
                <li>[ ] Screen: 300-400&nbsp;nits+, 1200p+, good color</li>
                <li>[ ] Weight &amp; battery match your lifestyle</li>
                <li>[ ] Ports you need (USB-C, HDMI, SD for creators)</li>
                <li>[ ] Webcam 1080p + decent mics (or plan external)</li>z
                <li>[ ] Warranty length + repairability considered</li>
            </ul>

            <h2>The Bottom Line</h2>
            <p>
                You don't need the “fastest” laptop-you need the <em>right</em> one. Start with your real tasks, hit the targets
                above, and ignore the hype. A balanced mid-tier machine with a great screen, solid battery, and 16&nbsp;GB RAM
                will serve most people for years.
            </p>
        </Styled.Wrapper>
    );
}
