import { Styled } from "./styled";

export const meta = {
    title: "From Idea to App: The Long Journey of a Simple Feature",
    slug: "from-idea-to-app-long-journey-of-a-simple-feature",
    date: "2025-06-16",
    author: "Ashish Ranjan - Full-Stack Developer",
    category: "A Look at Tech Culture & Careers",
    tags: ["UX", "DevOps", "Accessibility"],
    excerpt:
        "“It's just a button.” Famous last words. Walk with me through how a small feature actually ships—from fuzzy idea to pixels in production—without breaking everything else.",
    cover: null,
};

export default function Post() {
    return (
        <Styled.Wrapper>
            <Styled.Info>
                <h1>{meta.title}</h1>
                <div><b>By:</b> {meta.author}</div>
                <div><b>Published on:</b> June 16, 2025</div>
                <div><b>Category:</b> {meta.category}</div>
            </Styled.Info>

            <p>
                If you've ever asked a developer “Can we just add a button?”, you probably saw a nervous smile.
                Not because we don't want to build it—but because a “simple” feature lives inside a web of users,
                data, performance, accessibility, compliance, and rollout safety. Here's a realistic guided tour using a
                humble example: <strong>“Export to CSV”</strong> from a dashboard.
            </p>

            <Styled.Analogy>
                <p>
                    <strong>Analogy:</strong> Shipping a feature is like <em>adding a new exit ramp to a busy highway</em>.
                    The concrete (code) is straightforward. The real work is <em>traffic planning</em>—signage, guardrails,
                    detours, inspections, and opening it gradually so no one crashes.
                </p>
            </Styled.Analogy>

            <h2>0) Why This Feature Exists (Problem, not Solution)</h2>
            <p>
                Before touching code, we confirm the <em>user problem</em>. For CSV export, users might say:
                “I need to share filtered reports with finance every Friday.” Now we have success criteria:
                correct filters, correct columns, reasonable file size, and a repeatable workflow.
            </p>

            <h2>1) Discovery &amp; Scope (1-2 days)</h2>
            <ul>
                <li><strong>Users &amp; Jobs-to-be-done:</strong> Who clicks it? How often? What's the next step (email, Excel, import)?</li>
                <li><strong>Constraints:</strong> Max rows? PII columns? Timeouts? Mobile vs desktop?</li>
                <li><strong>Definition of Done (DoD):</strong> “Exports filtered rows &amp; visible columns within 5s; accessible, localized filename; telemetry added.”</li>
            </ul>

            <h2>2) UX &amp; Content Design (0.5-1 day)</h2>
            <ul>
                <li><strong>Placement:</strong> Primary vs. overflow menu. Avoid crowding the toolbar.</li>
                <li><strong>States:</strong> Idle, loading, success, error (with retry).</li>
                <li><strong>Copy:</strong> “Export CSV” &gt; “Download”; clear subtext for limits (e.g., “Max 50k rows”).</li>
                <li><strong>Accessibility:</strong> Focus order, ARIA label, keyboard trigger, visible progress.</li>
            </ul>

            <h2>3) Technical Design (0.5-1 day)</h2>
            <ul>
                <li><strong>Data source:</strong> Export from client cache or server query? (Server → consistent, scalable.)</li>
                <li><strong>API contract:</strong> <code>POST /reports/export</code> with filters; returns a job <code>id</code>.</li>
                <li><strong>Async pattern:</strong> Long exports become background jobs. Client polls <code>/jobs/:id</code> until ready.</li>
                <li><strong>Security:</strong> Authorization per column/row (no leaking admin-only data).</li>
                <li><strong>Performance:</strong> Stream rows; avoid loading all into memory. Compress on the fly if needed.</li>
                <li><strong>Observability:</strong> Log job duration, row count, errors; metric: “exports per day” and “fail rate.”</li>
            </ul>

            <h2>4) Spike &amp; Risks (0.5 day)</h2>
            <ul>
                <li>Prototype a 5k-row export locally to surface bottlenecks.</li>
                <li>Confirm CSV encoding (UTF-8 with BOM?), delimiter, line endings, and Excel quirks.</li>
                <li>Validate PII masking rules and consent flags.</li>
            </ul>

            <h2>5) Implementation (1-3 days)</h2>
            <ul>
                <li><strong>Backend:</strong> Query builder honoring filters, streaming writer, job queue, signed URL for download.</li>
                <li><strong>Frontend:</strong> Button → starts job → progress indicator → download link; disable while running.</li>
                <li><strong>Error paths:</strong> Timeouts, “too many rows,” permission denied, network drop → human messages.</li>
                <li><strong>i18n:</strong> Localize button text and generated filename (<code>Report_2025-06-16.csv</code>).</li>
            </ul>

            <h2>6) Quality &amp; Accessibility (0.5-1 day)</h2>
            <ul>
                <li><strong>Unit tests:</strong> Filters applied, column order, escaping commas/quotes/newlines.</li>
                <li><strong>Integration tests:</strong> End-to-end export for a typical user role.</li>
                <li><strong>A11y:</strong> Keyboard-only flow, screen reader announcements (“Export started… Export ready”).</li>
                <li><strong>Limits:</strong> Verify warnings at 50k rows; ensure server refuses &gt;100k with a helpful error.</li>
            </ul>

            <h2>7) Privacy, Legal, and Compliance (as needed)</h2>
            <ul>
                <li><strong>Data retention:</strong> Signed URLs expire in minutes; no long-term copies on the server.</li>
                <li><strong>Masking:</strong> Obfuscate sensitive fields unless the role permits.</li>
                <li><strong>Audit:</strong> Record who exported, when, row counts—visible in admin logs.</li>
            </ul>

            <h2>8) Rollout Plan (0.5 day)</h2>
            <ul>
                <li><strong>Feature flag:</strong> Enable internally, then 5% of users, then 25% → 100%.</li>
                <li><strong>Kill switch:</strong> Instant disable if error rate spikes or performance dips.</li>
                <li><strong>Docs &amp; help:</strong> Short tooltip or “Learn more” linking to a help page.</li>
            </ul>

            <h2>9) Post-Launch (ongoing)</h2>
            <ul>
                <li><strong>Observe:</strong> Track success rate &lt; 2% failures; median export &lt; 3s.</li>
                <li><strong>Support:</strong> Triage tickets: wrong columns, timezone issues, Excel import gotchas.</li>
                <li><strong>Iterate:</strong> Add “Export current view” vs “Full dataset,” and scheduled exports via email.</li>
            </ul>

            <Styled.Analogy>
                <p>
                    <strong>Builder's Note:</strong> “Just a button” only works because invisible systems do the heavy lifting:
                    job queues, auth, logging, tests, and flags. Invest there and every future button gets cheaper.
                </p>
            </Styled.Analogy>

            <h2>Feature Timeline (At a Glance)</h2>
            <ol>
                <li><strong>Problem framing</strong> → write the DoD</li>
                <li><strong>UX copy &amp; states</strong> → placement and messaging</li>
                <li><strong>Tech design</strong> → API, security, performance</li>
                <li><strong>Spike</strong> → de-risk the unknowns</li>
                <li><strong>Build</strong> → backend + frontend + errors</li>
                <li><strong>Test</strong> → unit, integration, a11y, limits</li>
                <li><strong>Rollout</strong> → flags, kill switch, docs</li>
                <li><strong>Observe &amp; iterate</strong> → metrics, support, enhancements</li>
            </ol>

            <h2>Common Pitfalls (and Fixes)</h2>
            <ul>
                <li><strong>Scope creep:</strong> Start with the highest-value slice; defer XLSX, scheduled emails, and custom columns.</li>
                <li><strong>Silent failures:</strong> Always surface progress and errors; log with IDs users can quote to support.</li>
                <li><strong>“Works on my machine”:</strong> Seed realistic data; test slow networks and huge filters.</li>
                <li><strong>Security gaps:</strong> Re-check permissions on the export <em>server-side</em>, not just the UI.</li>
            </ul>

            <h2>Printable Mini-Checklist</h2>
            <ul>
                <li>[ ] DoD written (who, what, limits, success metric)</li>
                <li>[ ] States defined (idle/loading/success/error)</li>
                <li>[ ] Server-side auth + streaming export</li>
                <li>[ ] Tests for filters, escaping, large datasets</li>
                <li>[ ] A11y: focus, labels, announcements</li>
                <li>[ ] Telemetry + alerting + kill switch</li>
                <li>[ ] Feature flag rollout + help docs</li>
            </ul>

            <h2>The Bottom Line</h2>
            <p>
                Simple features aren't simple—they're <em>small</em>. When you respect the full journey—clarity, design,
                safety, and feedback—you ship faster <em>and</em> sleep better. The button is easy. Making it <em>reliable</em>
                is the craft.
            </p>
        </Styled.Wrapper>
    );
}
