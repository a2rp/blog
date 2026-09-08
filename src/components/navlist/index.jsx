import React, { useEffect, useMemo, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { MdClear } from "react-icons/md";
import { Styled } from "./styled";
import { formatDate } from "../../utils/format";

// read meta from /blogs/*.jsx
const metaModules = import.meta.glob("../../blogs/*.jsx", { eager: true });

const STORAGE_KEY = "navlist.search";

function norm(s) {
    return (s || "").toLowerCase().normalize("NFKD");
}
function tokenize(q) {
    return norm(q).split(/\s+/).filter(Boolean);
}
function escapeRegExp(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function highlight(text, q) {
    const tokens = tokenize(q);
    if (!tokens.length) return text;
    const pattern = tokens.map(escapeRegExp).join("|");
    const rx = new RegExp(`(${pattern})`, "gi");
    const parts = String(text).split(rx);
    return parts.map((part, i) =>
        i % 2 === 1 ? <mark key={i}>{part}</mark> : <span key={i}>{part}</span>
    );
}

function collectPosts() {
    return Object.entries(metaModules)
        .map(([path, mod]) => {
            const fileSlug = path.split("/").pop().replace(".jsx", "");
            const m = mod.meta || {};
            const date = m.date || "1970-01-01";
            return {
                slug: m.slug || fileSlug,
                title: m.title || fileSlug,
                date,
                tags: m.tags || [],
                category: m.category || "",
                excerpt: m.excerpt || "",
            };
        })
        .sort((a, b) => new Date(b.date) - new Date(a.date));
}

function score(title, tokens) {
    const t = norm(title);
    let s = 0;
    for (const q of tokens) {
        if (!t.includes(q)) return -1;
        if (t.startsWith(q)) s += 3;
        else if (t.includes(` ${q}`)) s += 2;
        else s += 1;
    }
    return s - t.length * 0.0005;
}

const NavList = () => {
    const { pathname } = useLocation();
    const inputRef = useRef(null);

    const [query, setQuery] = useState(() => {
        try { return sessionStorage.getItem(STORAGE_KEY) ?? ""; } catch { return ""; }
    });
    useEffect(() => {
        try { sessionStorage.setItem(STORAGE_KEY, query); } catch { /* storage unavailable */ }
    }, [query]);

    useEffect(() => {
        const onKey = (e) => {
            if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
                e.preventDefault();
                inputRef.current?.focus();
            }
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, []);

    useEffect(() => {
        const container = document.querySelector("[data-navlist-scroll]");
        const active = container?.querySelector("a.active");
        if (container && active) {
            const cRect = container.getBoundingClientRect();
            const aRect = active.getBoundingClientRect();
            const offset = aRect.top - cRect.top - cRect.height / 2 + aRect.height / 2;
            container.scrollBy({ top: offset, behavior: "smooth" });
        }
    }, [pathname]);

    const allPosts = useMemo(() => collectPosts(), []);
    const tokens = useMemo(() => tokenize(query), [query]);

    const results = useMemo(() => {
        if (!tokens.length) return allPosts;
        return [...allPosts]
            .map((p) => ({ ...p, _score: score(p.title, tokens) }))
            .filter((p) => p._score >= 0)
            .sort((a, b) => b._score - a._score);
    }, [allPosts, tokens]);

    const clear = () => setQuery("");

    return (
        <Styled.Wrapper>
            <Styled.Main>
                <Styled.SearchWrapper className="container">
                    <input
                        ref={inputRef}
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search posts… (Ctrl+K)"
                        aria-label="Search posts"
                        onKeyDown={(e) => { if (e.key === "Escape") clear(); }}
                    />
                    <div
                        className="clear"
                        role="button"
                        tabIndex={0}
                        onClick={clear}
                        onKeyDown={(event) => {
                            if (event.key === "Enter" || event.key === " ") {
                                event.preventDefault();
                                clear();
                            }
                        }}
                        title="Clear search"
                    >
                        <MdClear size={18} />
                    </div>
                    <div className="meta">
                        <span>{results.length} result{results.length !== 1 ? "s" : ""}</span>
                        {query ? <span>Filtering: “{query}”</span> : <span>Type to filter</span>}
                    </div>
                </Styled.SearchWrapper>

                <Styled.ListWrapper data-navlist-scroll>
                    <Styled.UL>
                        {results.length === 0 && (
                            <li>
                                <Styled.Item as="div" style={{ color: "var(--muted)" }}>
                                    No matches. Try broader keywords.
                                </Styled.Item>
                            </li>
                        )}

                        {results.map((p) => (
                            <li key={p.slug}>
                                <Styled.Item
                                    as={NavLink}
                                    to={`/${p.slug}`}
                                    title={p.title}
                                    className={({ isActive }) => (isActive ? "active" : "")}
                                >
                                    <div className="title">
                                        {tokens.length ? highlight(p.title, query) : p.title}
                                    </div>

                                    <div className="metaRow">
                                        <div className="tags">
                                            {p.tags.map((t) => (
                                                <span
                                                    key={t}
                                                    className="tag"
                                                    title={`Filter: #${t}`}
                                                    role="button"
                                                    tabIndex={0}
                                                    onClick={(e) => { e.preventDefault(); e.stopPropagation(); setQuery(t); }}
                                                    onKeyDown={(e) => {
                                                        if (e.key === "Enter" || e.key === " ") {
                                                            e.preventDefault(); e.stopPropagation(); setQuery(t);
                                                        }
                                                    }}
                                                >
                                                    #{t}
                                                </span>
                                            ))}
                                        </div>
                                        <span className="date">{formatDate(p.date)}</span>
                                    </div>
                                </Styled.Item>
                            </li>
                        ))}
                    </Styled.UL>
                </Styled.ListWrapper>
            </Styled.Main>
        </Styled.Wrapper>
    );
};

export default NavList;
