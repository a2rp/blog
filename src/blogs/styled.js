import styled from "styled-components";

export const Styled = {
    Wrapper: styled.article`
        color: var(--text);
        /* max-width: 1000px; */
        /* margin: 40px auto; */
        padding: 20px;
        font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI",
            Roboto, sans-serif;
        line-height: 1.7;
        background: var(--card);
        border-radius: var(--radius);
        box-shadow: var(--shadow);
        max-width: 1100px;
        margin: auto;

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
            margin-bottom: 15px;
            color: var(--text);
            font-weight: 600;
        }

        h1 {
            font-size: 2.5rem;
            margin-top: 0;
            color: var(--accent);
        }

        h2 {
            font-size: 1.8rem;
            margin-top: 40px;
            padding-bottom: 10px;
            border-bottom: 1px solid var(--border);
            color: var(--accent);
        }

        p {
            margin-bottom: 20px;
            font-size: 1.1rem;
            color: var(--text);
        }

        code {
            background: var(--surface);
            padding: 2px 6px;
            border-radius: 6px;
            font-family: "Fira Code", ui-monospace, SFMono-Regular, Menlo,
                Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
            color: var(--warning);
            border: 1px solid var(--border);
        }

        ul {
            margin: 20px 0;
            padding-left: 30px;
        }

        li {
            margin-bottom: 10px;
        }

        em {
            color: var(--success);
            font-style: italic;
        }

        strong {
            color: var(--text);
            font-weight: 600;
        }
    `,

    Info: styled.div`
        border-bottom: 1px solid var(--border);
        padding-bottom: 30px;
        margin-bottom: 30px;

        div {
            font-style: italic;
            margin: 8px 0;
            color: var(--muted);
        }
    `,

    Analogy: styled.div`
        background: var(--surface);
        border-left: 4px solid var(--accent);
        padding: 15px 20px;
        margin: 25px 0;
        border-radius: 0 8px 8px 0;

        p {
            margin: 0;
            color: var(--text);
        }
    `,
};
