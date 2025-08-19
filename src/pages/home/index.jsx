import { useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Styled } from "./styled";

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

    return (
        <Styled.Wrapper>
            <Styled.Main>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
                    <h1>Blog</h1>
                    <input
                        value={q}
                        onChange={(e) => {
                            const v = e.target.value;
                            const next = new URLSearchParams(params);
                            v ? next.set("q", v) : next.delete("q");
                            setParams(next, { replace: false });
                        }}
                        placeholder="Search posts, tags…"
                        style={{ padding: "8px 10px", borderRadius: 10, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", color: "inherit" }}
                    />
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 18, marginTop: 16 }}>
                    {filtered.map((p) => (
                        <Link key={p.slug} to={`/${p.slug}`} style={{ textDecoration: "none", color: "inherit" }}>
                            <article style={{ border: "1px solid rgba(255,255,255,0.1)", borderRadius: 16, overflow: "hidden", background: "rgba(255,255,255,0.03)" }}>
                                <div style={{ height: 160, background: `#111 url(${p.cover}) center/cover no-repeat` }} />
                                <div style={{ padding: 14 }}>
                                    <h3 style={{ margin: "0 0 6px" }}>{p.title}</h3>
                                    <div style={{ opacity: .8, fontSize: 12, marginBottom: 6 }}>{p.date}</div>
                                    <p style={{ margin: 0, opacity: .9, fontSize: 14 }}>{p.excerpt}</p>
                                    <div style={{ marginTop: 8, display: "flex", flexWrap: "wrap", gap: 6 }}>
                                        {p.tags.map((t) => (
                                            <span key={t} style={{ fontSize: 12, opacity: .9, border: "1px solid rgba(255,255,255,.12)", padding: "4px 8px", borderRadius: 999 }}>
                                                #{t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </article>
                        </Link>
                    ))}
                </div>
            </Styled.Main>
        </Styled.Wrapper>
    );
}
