import React, { Suspense, useEffect, useMemo } from "react";
import { NavLink, useParams } from "react-router-dom";
import { Styled } from "./styled";
import { formatDate } from "../../utils/format";
import { Box, CircularProgress } from "@mui/material";

// Lazy loaders for components
const loaders = import.meta.glob("../../blogs/*.jsx");
// Eager meta for list/navigation
const metaModules = import.meta.glob("../../blogs/*.jsx", { eager: true });

function allPosts() {
    return Object.entries(metaModules)
        .map(([path, mod]) => {
            const fileSlug = path.split("/").pop().replace(".jsx", "");
            const m = mod?.meta || {};
            return {
                slug: m.slug || fileSlug,
                title: m.title || fileSlug,
                date: m.date || "1970-01-01",
            };
        })
        .sort((a, b) => new Date(b.date) - new Date(a.date));
}

export default function Blog() {
    const { slug } = useParams();
    const posts = useMemo(() => allPosts(), []);

    const key =
        Object.keys(loaders).find((k) => k.endsWith(`/${slug}.jsx`)) ||
        Object.keys(metaModules).find((k) => metaModules[k]?.meta?.slug === slug);

    const idx = posts.findIndex((p) => p.slug === slug);
    const prev = idx > 0 ? posts[idx - 1] : null;
    const next = idx >= 0 && idx < posts.length - 1 ? posts[idx + 1] : null;

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "auto" });
    }, [slug]);

    if (!key || idx === -1) {
        return (
            <Styled.Wrapper>
                <Styled.Main>
                    <h2>Post not found</h2>
                    <p>
                        We couldn't find "<code>{slug}</code>". Check that file name and <code>meta.slug</code> match.
                    </p>
                    <NavLink to="/" className="goBackLink">← Back to all posts</NavLink>
                </Styled.Main>
            </Styled.Wrapper>
        );
    }

    const PostComp = React.lazy(loaders[key]);
    return (
        <Styled.Wrapper>
            <Styled.Main>
                {/* Optional SPA back link:
        <NavLink
          to="/"
          className="goBackLink"
          onClick={(e) => {
            if (canGoBack) {
              e.preventDefault();
              navigate(-1);
            }
          }}
        >
          ← Back
        </NavLink>
        */}

                <div className="absolutePrev">
                    {prev ? (
                        <NavLink to={`/${prev.slug}`} title={prev.title}>
                            Prev
                        </NavLink>
                    ) : null}
                </div>

                <div className="absoluteNext">
                    {next ? (
                        <NavLink to={`/${next.slug}`} title={next.title}>
                            Next
                        </NavLink>
                    ) : null}
                </div>

                <div className="mainBlogWrapper">
                    <div className="blog">
                        <Suspense
                            fallback={
                                <Box
                                    sx={{
                                        position: "fixed",
                                        inset: 0,
                                        display: "grid",
                                        placeItems: "center",
                                        background: "transparent",
                                    }}
                                >
                                    <CircularProgress />
                                </Box>
                            }
                        >
                            <PostComp />
                        </Suspense>
                    </div>
                </div>

                <div className="prevNextWrapper">
                    {prev ? (
                        <NavLink to={`/${prev.slug}`} title={prev.title}>
                            Prev: {prev.title}
                        </NavLink>
                    ) : null}
                    {next ? (
                        <NavLink to={`/${next.slug}`} title={next.title}>
                            Next: {next.title}
                        </NavLink>
                    ) : null}
                </div>

                <div className="morePostsWrapper">
                    <h3 className="morePostsHeading">More posts</h3>
                    <div className="morePostsContent">
                        {posts
                            .filter((p) => p.slug !== slug)
                            .slice(0, 4)
                            .map((p) => (
                                <NavLink key={p.slug} to={`/${p.slug}`} className="postLink" title={p.title}>
                                    <div className="postDate">{formatDate(p.date)}</div>
                                    <div className="postTitle">{p.title}</div>
                                </NavLink>
                            ))}
                    </div>
                </div>
            </Styled.Main>
        </Styled.Wrapper>
    );
}
