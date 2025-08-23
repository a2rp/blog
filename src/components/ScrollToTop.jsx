import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop({ smooth = true }) {
    const { pathname, hash } = useLocation();

    // Disable browser's automatic scroll restoration (so back doesn't restore old position)
    useEffect(() => {
        const prev = window.history.scrollRestoration;
        try { window.history.scrollRestoration = "manual"; } catch { }
        return () => {
            try { window.history.scrollRestoration = prev || "auto"; } catch { }
        };
    }, []);

    useEffect(() => {
        // If there's a #hash, prefer scrolling to that element
        if (hash) {
            const el = document.querySelector(hash);
            if (el) {
                el.scrollIntoView({ behavior: smooth ? "smooth" : "auto", block: "start" });
                return;
            }
        }

        const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        const behavior = smooth && !prefersReduced ? "smooth" : "auto";

        // Run after layout (and after any history restoration would have happened)
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                window.scrollTo({ top: 0, left: 0, behavior });
            });
        });
    }, [pathname, hash, smooth]);

    return null;
}
