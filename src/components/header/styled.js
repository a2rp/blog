import styled from "styled-components";

const HEADER_H = 60;

export const Styled = {
    Wrapper: styled.header`
        position: fixed;
        inset: 0 0 auto 0;
        width: 100%;
        height: ${HEADER_H}px;
        box-sizing: border-box;
        background: var(--surface);
        color: var(--text);
        border-bottom: 1px solid var(--border);
        display: grid;
        align-items: center;
        z-index: 9999;
        backdrop-filter: saturate(120%) blur(4px);
    `,

    Main: styled.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
        width: 100%;
        max-width: none;
        margin: 0;
        padding: 0 16px;
    `,

    Col: styled.div`
        display: flex;
        align-items: center;
        gap: 12px;
    `,

    Brand: styled.span`
        font-family: "Antonio", sans-serif;
        font-weight: 700;
        letter-spacing: 0.5px;
        color: var(--text);
        text-decoration: none;
        padding: 6px 10px;
        border-radius: 8px;
        transition: background 0.25s var(--easing), color 0.25s var(--easing);
        &:hover {
            color: var(--accent);
            background: var(--accent-soft);
        }
    `,

    ThemeButton: styled.button`
        display: inline-grid;
        place-items: center;
        width: 36px;
        height: 36px;
        border-radius: 10px;
        border: 1px solid var(--border);
        background: var(--card);
        color: var(--text);
        transition: transform 0.15s var(--easing),
            border-color 0.25s var(--easing), background 0.25s var(--easing),
            color 0.25s var(--easing);
        cursor: pointer;
        &:hover {
            border-color: var(--accent);
            color: var(--accent);
            background: var(--accent-soft);
        }
        &:active {
            transform: translateY(1px) rotate(-8deg);
        }
    `,

    SliderButton: styled.button`
        display: inline-grid;
        place-items: center;
        width: 36px;
        height: 36px;
        border-radius: 10px;
        border: 1px solid var(--border);
        background: var(--card);
        color: var(--text);
        transition: transform 0.15s var(--easing),
            border-color 0.25s var(--easing), background 0.25s var(--easing),
            color 0.25s var(--easing);
        cursor: pointer;
        &:hover {
            border-color: var(--accent);
            color: var(--accent);
            background: var(--accent-soft);
        }
        &:active {
            transform: translateY(1px) scale(0.98);
        }
    `,
};
