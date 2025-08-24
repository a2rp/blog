import { useMemo, useRef } from "react";
import { Link, NavLink, useSearchParams } from "react-router-dom";
import { Styled } from "./styled";
import { formatDate } from "../../utils/format";
import { MdDeleteForever } from "react-icons/md";

// Eager import ONLY for meta
const metaModules = import.meta.glob("../../blogs/*.jsx", { eager: true });

const MONTHS = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

function collectPosts() {
    return Object.entries(metaModules)
        .map(([path, mod]) => {
            const fileSlug = path.split("/").pop().replace(".jsx", "");
            const m = mod.meta || {};
            const date = m.date || "1970-01-01";
            const d = new Date(date);
            return {
                slug: m.slug || fileSlug,
                title: m.title || fileSlug,
                date,
                tags: m.tags || [],
                excerpt: m.excerpt || "",
                cover: m.cover || "",
                category: m.category || "",
                year: isNaN(d) ? "" : String(d.getFullYear()),
                monthNum: isNaN(d) ? "" : d.getMonth() + 1, // 1..12
            };
        })
        .sort((a, b) => new Date(b.date) - new Date(a.date));
}

export default function Home() {
    const [params, setParams] = useSearchParams();
    const q = (params.get("q") || "").toLowerCase();
    const year = params.get("year") || "";
    const month = params.get("month") || ""; // "1".."12"
    const category = params.get("category") || "";
    const tag = params.get("tag") || "";
    const sort = params.get("sort") || "new"; // "new" | "old"

    const setParam = (key, value) => {
        const next = new URLSearchParams(params);
        value ? next.set(key, value) : next.delete(key);
        setParams(next, { replace: false });
    };

    const posts = useMemo(() => collectPosts(), []);

    const facets = useMemo(() => {
        const years = Array.from(new Set(posts.map(p => p.year).filter(Boolean))).sort((a, b) => b - a);
        const categories = Array.from(new Set(posts.map(p => p.category).filter(Boolean))).sort((a, b) => a.localeCompare(b));
        const tagsAll = Array.from(new Set(posts.flatMap(p => p.tags || []).filter(Boolean))).sort((a, b) => a.localeCompare(b));
        return { years, categories, tagsAll };
    }, [posts]);

    const filtered = useMemo(() => {
        let list = posts;

        if (q) {
            list = list.filter(
                (p) =>
                    p.title.toLowerCase().includes(q) ||
                    p.excerpt.toLowerCase().includes(q) ||
                    (p.category || "").toLowerCase().includes(q) ||
                    p.tags.some((t) => t.toLowerCase().includes(q))
            );
        }

        if (year) list = list.filter((p) => p.year === year);
        if (month) list = list.filter((p) => String(p.monthNum) === month);
        if (category) list = list.filter((p) => p.category === category);
        if (tag) list = list.filter((p) => p.tags.includes(tag));

        const sorted = [...list].sort((a, b) =>
            sort === "old"
                ? new Date(a.date) - new Date(b.date)
                : new Date(b.date) - new Date(a.date)
        );

        return sorted;
    }, [q, year, month, category, tag, sort, posts]);

    const inputRef = useRef(null);
    const clearSearch = () => {
        setParam("q", "");
        inputRef.current?.focus();
    };
    const clearAllFilters = () => {
        const next = new URLSearchParams(params);
        ["q", "year", "month", "category", "tag"].forEach(k => next.delete(k));
        // keep sort unless you also want to reset:
        // next.delete("sort");
        setParams(next, { replace: false });
    };

    return (
        <Styled.Wrapper>
            <Styled.Main>
                <Styled.Info>
                    <h1>No-jargon tech for normal humans</h1>
                    <p>
                        Short reads from a developer: how the internet really works, what to buy, and how to stay safe.
                    </p>
                    <span>
                        Tip: Try searching "Privacy", "Networking", or "UX".
                    </span>
                </Styled.Info>
                <Styled.Head>
                    <input
                        ref={inputRef}
                        value={q}
                        onChange={(e) => setParam("q", e.target.value)}
                        placeholder="Search posts, tags…"
                        aria-label="Search posts"
                    />

                    {q && (
                        <div
                            type="button"
                            className="clearIconWrapper"
                            aria-label="Clear search"
                            onClick={clearSearch}
                            onKeyDown={(e) => {
                                if (e.key === "Enter" || e.key === " ") {
                                    e.preventDefault();
                                    clearSearch();
                                }
                            }}
                            role="button"
                            tabIndex={0}
                        >
                            <MdDeleteForever size={20} />
                        </div>
                    )}
                </Styled.Head>

                {/* Filters Bar */}
                <Styled.FilterWrapper>
                    <select
                        aria-label="Filter by Year"
                        value={year}
                        onChange={(e) => setParam("year", e.target.value)}
                    >
                        <option value="">All Years</option>
                        {facets.years.map((y) => (
                            <option key={y} value={y}>{y}</option>
                        ))}
                    </select>

                    <select
                        aria-label="Filter by Month"
                        value={month}
                        onChange={(e) => setParam("month", e.target.value)}
                    >
                        <option value="">All Months</option>
                        {MONTHS.map((m, i) => (
                            <option key={m} value={String(i + 1)}>{m}</option>
                        ))}
                    </select>

                    <select
                        aria-label="Filter by Category"
                        value={category}
                        onChange={(e) => setParam("category", e.target.value)}
                    >
                        <option value="">All Categories</option>
                        {facets.categories.map((c) => (
                            <option key={c} value={c}>{c}</option>
                        ))}
                    </select>

                    <select
                        aria-label="Filter by Tag"
                        value={tag}
                        onChange={(e) => setParam("tag", e.target.value)}
                    >
                        <option value="">All Tags</option>
                        {facets.tagsAll.map((t) => (
                            <option key={t} value={t}>{t}</option>
                        ))}
                    </select>

                    <select
                        aria-label="Sort order"
                        value={sort}
                        onChange={(e) => setParam("sort", e.target.value)}
                    >
                        <option value="new">Newest first</option>
                        <option value="old">Oldest first</option>
                    </select>

                    {(q || year || month || category || tag) && (
                        <button
                            onClick={clearAllFilters}
                            className="clearFilterButton"
                        >
                            Clear filters
                        </button>
                    )}
                </Styled.FilterWrapper>

                {/* Results count */}
                <div style={{ opacity: 0.8, marginBottom: 8 }}>
                    {filtered.length} post{filtered.length !== 1 ? "s" : ""} found
                </div>
                <br />

                {filtered.length > 0 ? (
                    <>
                        <Styled.CardsWrapper>
                            {filtered.map((p) => (
                                <Styled.Card
                                    key={p.slug}
                                    style={{ textDecoration: "none", color: "inherit" }}
                                >
                                    <article
                                        style={{
                                            border: "1px solid rgba(255,255,255,0.1)",
                                            borderRadius: 16,
                                            overflow: "hidden",
                                            background: "rgba(255,255,255,0.03)",
                                        }}
                                    >
                                        <Styled.Cover style={{ background: `#111 url(${p.cover}) center/cover no-repeat` }} />

                                        <Styled.TextWrapper>
                                            <Styled.Title title={p.title}>{p.title}</Styled.Title>

                                            <Styled.LinkDateWrapper>
                                                <NavLink to={`/${p.slug}`}>View Blog</NavLink>
                                                <div className="date">{formatDate(p.date)}</div>
                                            </Styled.LinkDateWrapper>

                                            {/* excerpt */}
                                            <Styled.Excerpt title={p.excerpt}>{p.excerpt}</Styled.Excerpt>

                                            {/* category + tags */}
                                            <div>
                                                {p.category && (
                                                    <div
                                                        style={{
                                                            fontSize: 12,
                                                            opacity: 0.95,
                                                            border: "1px solid rgba(255,255,255,.18)",
                                                            padding: "4px 8px",
                                                            borderRadius: 999,
                                                            background: "rgba(255,255,255,0.04)",
                                                            margin: "15px 0",
                                                            textAlign: "center"
                                                        }}
                                                    >
                                                        {p.category}
                                                    </div>
                                                )}
                                                <div style={{ display: "flex", gap: "5px", flexWrap: "wrap" }}>
                                                    {p.tags.map((t) => (
                                                        <span
                                                            key={t}
                                                            title={`Filter by #${t}`}
                                                            role="button"
                                                            tabIndex={0}
                                                            onClick={() => setParam("tag", t)}
                                                            onKeyDown={(e) => {
                                                                if (e.key === "Enter" || e.key === " ") {
                                                                    e.preventDefault();
                                                                    setParam("tag", t);
                                                                }
                                                            }}
                                                            style={{
                                                                fontSize: 12,
                                                                opacity: 0.9,
                                                                border: "1px solid rgba(255,255,255,.12)",
                                                                padding: "3px 15px",
                                                                borderRadius: "6px",
                                                                cursor: "pointer",
                                                                whiteSpace: "nowrap"
                                                            }}
                                                        >
                                                            #{t}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </Styled.TextWrapper>
                                    </article>
                                </Styled.Card>
                            ))}
                        </Styled.CardsWrapper>
                    </>
                ) : (
                    <>
                        <h1>No Posts Found</h1>
                    </>
                )}
            </Styled.Main>
        </Styled.Wrapper >
    );
}
