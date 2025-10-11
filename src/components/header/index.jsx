import React, { useCallback, useEffect, useState } from "react";
import { Styled } from "./styled";
import { TbSunMoon } from "react-icons/tb";
import { IoIosMenu } from "react-icons/io";
import { NavLink } from "react-router-dom";

const THEME_KEY = "ui.theme"; // 'light' | 'dark'

function getInitialTheme() {
    try {
        const saved = localStorage.getItem(THEME_KEY);
        if (saved === "light" || saved === "dark") return saved;
    } catch { }
    // If nothing saved, infer from current DOM / OS
    const isLightAttr = document.documentElement.getAttribute("data-theme") === "light";
    if (isLightAttr) return "light";
    const prefersLight = window.matchMedia?.("(prefers-color-scheme: light)").matches;
    return prefersLight ? "light" : "dark";
}

const Header = ({ handleSliderButtonClick }) => {
    const [theme, setTheme] = useState(getInitialTheme);

    // apply to <html data-theme="light"|unset> and persist
    useEffect(() => {
        const root = document.documentElement;
        if (theme === "light") {
            root.setAttribute("data-theme", "light");
        } else {
            // our CSS uses dark as the default when no data-theme is set
            root.removeAttribute("data-theme");
        }
        try { localStorage.setItem(THEME_KEY, theme); } catch { }
    }, [theme]);

    const toggleTheme = useCallback(() => {
        setTheme((t) => (t === "light" ? "dark" : "light"));
    }, []);

    return (
        <Styled.Wrapper role="banner">
            <Styled.Main className="container">
                <Styled.Col>
                    <Styled.Brand as={NavLink} to="/" aria-label="Go to home">
                        Blogs
                    </Styled.Brand>
                </Styled.Col>

                <Styled.Col>
                    <Styled.ThemeButton
                        onClick={toggleTheme}
                        aria-pressed={theme === "light"}
                        title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
                    >
                        <TbSunMoon size={16} />
                        <span className="sr-only">Toggle theme</span>
                    </Styled.ThemeButton>

                    <Styled.SliderButton
                        aria-label="Open menu"
                        title="Open menu"
                        onClick={handleSliderButtonClick}
                    >
                        <IoIosMenu size={16} />
                    </Styled.SliderButton>
                </Styled.Col>
            </Styled.Main>
        </Styled.Wrapper>
    );
};

export default Header;
