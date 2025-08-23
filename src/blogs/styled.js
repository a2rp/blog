import styled from "styled-components";

export const Styled = {
    Wrapper: styled.article`
        color: #e0e0e0;
        max-width: 900px;
        margin: 40px auto;
        padding: 20px;
        font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI",
            Roboto, sans-serif;
        line-height: 1.7;
        background: #1a1a1a;
        border-radius: 12px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
            margin-bottom: 15px;
            color: #fff;
            font-weight: 600;
        }

        h1 {
            font-size: 2.5rem;
            margin-top: 0;
            color: #4fc3f7;
        }

        h2 {
            font-size: 1.8rem;
            margin-top: 40px;
            padding-bottom: 10px;
            border-bottom: 1px solid #333;
            color: #4fc3f7;
        }

        p {
            margin-bottom: 20px;
            font-size: 1.1rem;
        }

        code {
            background: #2d2d2d;
            padding: 2px 6px;
            border-radius: 4px;
            font-family: "Fira Code", monospace;
            color: #ffa726;
        }

        ul {
            margin: 20px 0;
            padding-left: 30px;
        }

        li {
            margin-bottom: 10px;
        }

        em {
            color: #9ccc65;
            font-style: italic;
        }

        strong {
            color: #fff;
            font-weight: 600;
        }
    `,
    Info: styled.div`
        border-bottom: 1px solid #333;
        padding-bottom: 30px;
        margin-bottom: 30px;

        div {
            font-style: italic;
            margin: 8px 0;
            color: #aaa;
        }
    `,
    Analogy: styled.div`
        background: #2d2d2d;
        border-left: 4px solid #4fc3f7;
        padding: 15px 20px;
        margin: 25px 0;
        border-radius: 0 8px 8px 0;

        p {
            margin: 0;
            color: #e0e0e0;
        }
    `,
};
