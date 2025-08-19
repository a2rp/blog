import { useMemo, useRef } from "react";
import { Link, NavLink, useSearchParams } from "react-router-dom";
import { Styled } from "./styled";
import { formatDate } from "../../utils/format";
import { MdDeleteForever } from "react-icons/md";

// Eager import ONLY for meta
const metaModules = import.meta.glob("../../blogs/*.jsx", { eager: true });

function collectPosts() {
    return Object.entries(metaModules)
        .map(([path, mod]) => {
            const fileSlug = path.split("/").pop().replace(".jsx", "");
            const m = mod.meta || {};
            return {
                slug: m.slug || fileSlug,
                title: m.title || fileSlug,
                date: m.date || "1970-01-01",
                tags: m.tags || [],
                excerpt: m.excerpt || "",
                cover: m.cover || "",
            };
        })
        .sort((a, b) => new Date(b.date) - new Date(a.date));
}

export default function Home() {
    const [params, setParams] = useSearchParams();
    const q = (params.get("q") || "").toLowerCase();

    const posts = useMemo(() => collectPosts(), []);
    const filtered = useMemo(() => {
        if (!q) return posts;
        return posts.filter(
            (p) =>
                p.title.toLowerCase().includes(q) ||
                p.excerpt.toLowerCase().includes(q) ||
                p.tags.some((t) => t.toLowerCase().includes(q))
        );
    }, [q, posts]);

    const inputRef = useRef(null);
    const clearSearch = () => {
        const next = new URLSearchParams(params);
        next.delete("q");
        setParams(next, { replace: false });
        inputRef.current?.focus();
    };

    return (
        <Styled.Wrapper>
            <Styled.Main>
                <Styled.Head>
                    <input
                        ref={inputRef}
                        value={q}
                        onChange={(e) => {
                            const v = e.target.value;
                            const next = new URLSearchParams(params);
                            v ? next.set("q", v) : next.delete("q");
                            setParams(next, { replace: false });
                        }}
                        placeholder="Search posts, tags…"
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
                        >
                            <MdDeleteForever size={20} />
                        </div>
                    )}
                </Styled.Head>


                {filtered.length > 0 ? <>
                    <Styled.CardsWrapper>
                        {filtered.map((p) => (
                            <Styled.Card
                                key={p.slug}
                                style={{ textDecoration: "none", color: "inherit" }}
                            >
                                <article
                                    style={{ border: "1px solid rgba(255,255,255,0.1)", borderRadius: 16, overflow: "hidden", background: "rgba(255,255,255,0.03)" }}
                                >
                                    <Styled.Cover style={{ background: `#111 url(${p.cover}) center/cover no-repeat` }} />

                                    <Styled.TextWrapper>
                                        <Styled.Title title={p.title}>{p.title}</Styled.Title>

                                        <Styled.LinkDateWrapper>
                                            <NavLink
                                                to={`/${p.slug}`}
                                            >View Blog</NavLink>
                                            <div className="date">{formatDate(p.date)}</div>
                                        </Styled.LinkDateWrapper>

                                        {/* excerpt */}
                                        <Styled.Excerpt title={p.excerpt}>{p.excerpt}</Styled.Excerpt>

                                        <div style={{ marginTop: 8, display: "flex", flexWrap: "wrap", gap: 6 }}>
                                            {p.tags.map((t) => (
                                                <span key={t} style={{ fontSize: 12, opacity: .9, border: "1px solid rgba(255,255,255,.12)", padding: "4px 8px", borderRadius: 999 }}>
                                                    #{t}
                                                </span>
                                            ))}
                                        </div>
                                    </Styled.TextWrapper>
                                </article>
                            </Styled.Card>
                        ))}
                    </Styled.CardsWrapper>
                </> : <>
                    <h1>No Posts Found</h1>
                </>}
            </Styled.Main>
        </Styled.Wrapper>
    );
}
