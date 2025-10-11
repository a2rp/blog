import styled from "styled-components";

export const Styled = {
    Wrapper: styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--text);
        background: transparent;
    `,
    Main: styled.div`
        width: 100%;
        max-width: 600px;

        h3 {
            color: var(--text);
        }

        p {
            margin-bottom: 30px;
            color: var(--text);

            b {
                color: var(--accent); /* was lightcoral */
                margin-top: 15px;
                display: block;
            }
        }

        ul {
            margin-left: 15px;
            margin-bottom: 30px;

            li::marker {
                color: var(--muted);
            }
        }
    `,
};
