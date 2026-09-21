import styled from "styled-components";

export const Styled = {
    Footer: styled.footer`
        border-top: 1px solid var(--border);
        background: var(--surface);
        color: var(--text);
        display: flex;
        align-items: center;
        justify-content: center;
    `,
    FooterMain: styled.div`
        width: 100%;
        max-width: var(--maxw);
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        padding: 15px 50px;

        @media (width < 900px) {
            padding: 15px;
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;
        }
    `,
    Copyright: styled.p`
        margin: 0;
        font-size: 12px;
        color: var(--muted);
        a {
            color: var(--text);
            text-decoration: none;
            font-weight: 700;
            transition: text-shadow 0.25s var(--easing);
            &:hover {
                text-shadow: 0 0 10px var(--accent);
            }
        }
    `,
    Links: styled.nav`
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-end;
        gap: 8px;
    `,
    Link: styled.a`
        width: 34px;
        height: 34px;
        display: grid;
        place-items: center;
        border: 1px solid var(--border);
        border-radius: 9px;
        color: var(--muted);
        text-decoration: none;
        transition: border-color 0.25s var(--easing), box-shadow 0.25s var(--easing), text-shadow 0.25s var(--easing);
        svg {
            width: 16px;
            height: 16px;
        }
        &:hover {
            border-color: var(--accent);
            box-shadow: 0 0 16px var(--accent-soft);
            text-shadow: 0 0 10px var(--accent);
        }
    `,
};
