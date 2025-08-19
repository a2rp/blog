import React, { Suspense, useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { Styled } from "./styled";

// Lazy loaders for components
const loaders = import.meta.glob("../../blogs/*.jsx");
// Eager meta for list/navigation
const metaModules = import.meta.glob("../../blogs/*.jsx", { eager: true });

function allPosts() {
    return Object.entries(metaModules)
        .map(([path, mod]) => {
            const fileSlug = path.split("/").pop().replace(".jsx", "");
            const m = mod.meta || {};
            return { slug: m.slug || fileSlug, title: m.title || fileSlug, date: m.date || "1970-01-01" };
        })
        .sort((a, b) => new Date(b.date) - new Date(a.date));
}

export default function Blog() {
    const { slug } = useParams();
    const posts = useMemo(() => allPosts(), []);
    const key = Object.keys(loaders).find((k) => k.endsWith(`/${slug}.jsx`));

    const idx = posts.findIndex((p) => p.slug === slug);
    const prev = idx > 0 ? posts[idx - 1] : null;
    const next = idx < posts.length - 1 ? posts[idx + 1] : null;

    if (!key) {
        return (
            <Styled.Wrapper>
                <Styled.Main>
                    <p>Post not found.</p>
                    <Link to="/">← Back to all posts</Link>
                </Styled.Main>
            </Styled.Wrapper>
        );
    }

    const PostComp = React.lazy(loaders[key]);

    return (
        <Styled.Wrapper>
            <Styled.Main>
                <Link to="/">← Back</Link>
                <Suspense fallback={<p>Loading…</p>}>
                    <PostComp />
                </Suspense>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginTop: 18 }}>
                    {/* {prev ? <Link to={`/blog/${prev.slug}`}>← {prev.title}</Link> : <span />}
                    {next ? <Link style={{ textAlign: "right" }} to={`/blog/${next.slug}`}>{next.title} →</Link> : <span />} */}
                    {prev && <Link to={`/${prev.slug}`}>← {prev.title}</Link>}
                    {next && <Link to={`/${next.slug}`}>{next.title} →</Link>}
                </div>

                <div style={{ marginTop: 24 }}>
                    <h3>More posts</h3>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 12 }}>
                        {posts.filter(p => p.slug !== slug).slice(0, 4).map(p => (
                            <Link key={p.slug} to={`/${p.slug}`} style={{ textDecoration: "none" }}>
                                <div style={{ border: "1px solid rgba(255,255,255,.1)", borderRadius: 12, padding: 12 }}>
                                    <div style={{ fontSize: 12, opacity: .8 }}>{p.date}</div>
                                    <div style={{ fontWeight: 600 }}>{p.title}</div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </Styled.Main>
        </Styled.Wrapper>
    );
}
