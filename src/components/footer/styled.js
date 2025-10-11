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
            text-align: center;
            gap: 8px;
        }
    `,
    FooterCol: styled.div`
        font-size: 12px;
        color: var(--muted);

        a {
            color: var(--text);
            text-decoration: none;
            border-bottom: 1px dotted transparent;
            transition: color 0.25s var(--easing),
                border-color 0.25s var(--easing), background 0.25s var(--easing);

            &:hover {
                color: var(--accent);
                border-color: var(--accent);
                background: var(--accent-soft);
                border-radius: 4px;
            }

            &:focus-visible {
                outline: 3px solid var(--accent);
                outline-offset: 2px;
            }
        }
    `,
};
