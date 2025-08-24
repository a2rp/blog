import { useEffect, useState } from "react";
import styled from "styled-components";
import { MdKeyboardArrowUp } from "react-icons/md";

/**
 * Floating "scroll to top" button.
 * Props:
 * - threshold (number): px to scroll before showing. Default 320.
 * - ariaLabel (string): a11y label. Default "Scroll to top".
 * - title (string): tooltip text. Default "Scroll to top".
 */
export default function ScrollToTopButton({
    threshold = 320,
    ariaLabel = "Scroll to top",
    title = "Scroll to top",
}) {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => setVisible(window.scrollY > threshold);
        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll(); // initialize on mount
        return () => window.removeEventListener("scroll", onScroll);
    }, [threshold]);

    const toTop = () => {
        const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
        if (reduce) window.scrollTo(0, 0);
        else window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <Fab
            type="button"
            aria-label={ariaLabel}
            title={title}
            $visible={visible}
            onClick={toTop}
            onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    toTop();
                }
            }}
        >
            <MdKeyboardArrowUp size={22} />
        </Fab>
    );
}

const Fab = styled.button`
  position: fixed;
  right: calc(20px + env(safe-area-inset-right, 0px));
  bottom: calc(20px + env(safe-area-inset-bottom, 0px));
  z-index: 40;

  width: 44px;
  height: 44px;
  border-radius: 999px;

  display: grid;
  place-items: center;

  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.18);
  color: #e0e0e0;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.35);
  backdrop-filter: blur(6px);
  cursor: pointer;

  opacity: ${(p) => (p.$visible ? 1 : 0)};
  transform: translateY(${(p) => (p.$visible ? "0" : "8px")});
  pointer-events: ${(p) => (p.$visible ? "auto" : "none")};
  transition: opacity 0.18s ease, transform 0.18s ease, background 0.2s ease;

  &:hover { background: rgba(255, 255, 255, 0.10); }
  &:active { transform: translateY(1px); }
  &:focus-visible { outline: 2px solid #4fc3f7; outline-offset: 2px; }
`;
