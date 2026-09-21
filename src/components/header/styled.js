import styled from "styled-components";

const HEADER_H = 60;

export const Styled = {
    Wrapper: styled.header`
        @keyframes headerReveal {
            from {
                opacity: 0;
                transform: translateY(-8px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

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
        animation: headerReveal 420ms ease-out both;
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
        display: inline-flex;
        align-items: center;
        gap: 10px;
        font-family: "Antonio", sans-serif;
        font-weight: 700;
        letter-spacing: 0.5px;
        color: var(--text);
        text-decoration: none;
        padding: 6px 10px;
        border-radius: 8px;
        transition: border-color 0.25s var(--easing), box-shadow 0.25s var(--easing), text-shadow 0.25s var(--easing);
        &:hover {
            border-color: var(--accent);
            box-shadow: 0 0 14px var(--accent-soft);
            text-shadow: 0 0 10px var(--accent);
        }
    `,
    Logo: styled.img`
        width: 32px;
        height: 32px;
        padding: 4px;
        border: 1px solid var(--border);
        border-radius: 8px;
        background: var(--card);
        object-fit: contain;
        @media (max-width: 560px) {
            width: 28px;
            height: 28px;
            padding: 3px;
        }
    `,
    BrandText: styled.span`
        white-space: nowrap;
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
        transition: border-color 0.25s var(--easing), box-shadow 0.25s var(--easing), text-shadow 0.25s var(--easing);
        cursor: pointer;
        &:hover {
            border-color: var(--accent);
            box-shadow: 0 0 14px var(--accent-soft);
            text-shadow: 0 0 10px var(--accent);
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
        transition: border-color 0.25s var(--easing), box-shadow 0.25s var(--easing), text-shadow 0.25s var(--easing);
        cursor: pointer;
        &:hover {
            border-color: var(--accent);
            box-shadow: 0 0 14px var(--accent-soft);
            text-shadow: 0 0 10px var(--accent);
        }
    `,
};
