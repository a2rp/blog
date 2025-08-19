// src/pages/home/styled.js
import styled from "styled-components";

export const Styled = {
    Wrapper: styled.div`
        display: flex;
        justify-content: center;
        min-height: 100vh;
        padding: 24px 0 60px;
    `,
    Main: styled.div`
        width: 100%;
        max-width: 1200px;
        padding: 0 18px;
    `,
    Head: styled.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        margin: 6px 0 14px;
    `,
    Right: styled.div`
        display: flex;
        align-items: center;
        gap: 10px;
    `,
    Search: styled.input`
        padding: 8px 10px;
        min-width: 260px;
        border-radius: 12px;
        background: rgba(255, 255, 255, 0.06);
        border: 1px solid rgba(255, 255, 255, 0.1);
        outline: none;
        color: inherit;
        font-size: 14px;
    `,
    Grid: styled.div`
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 18px;
        @media (max-width: 1000px) {
            grid-template-columns: repeat(2, 1fr);
        }
        @media (max-width: 640px) {
            grid-template-columns: 1fr;
        }
    `,
    Card: styled.article`
        border: 1px solid rgba(255, 255, 255, 0.1);
        background: rgba(255, 255, 255, 0.03);
        border-radius: 16px;
        overflow: hidden;
        transition: transform 0.2s ease, box-shadow 0.2s ease;
        &:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
        }
    `,
    Cover: styled.div`
        height: 160px;
        background: #111 center/cover no-repeat;
    `,
    CardBody: styled.div`
        padding: 14px;
        display: grid;
        gap: 8px;
    `,
    Title: styled.h3`
        margin: 0;
        font-size: 18px;
        line-height: 1.35;
    `,
    Meta: styled.div`
        font-size: 12px;
        opacity: 0.8;
    `,
    Excerpt: styled.p`
        margin: 0;
        font-size: 14px;
        opacity: 0.92;
    `,
    Tags: styled.div`
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        margin-top: 4px;
    `,
    Tag: styled.span`
        font-size: 12px;
        opacity: 0.9;
        border: 1px solid rgba(255, 255, 255, 0.12);
        padding: 4px 8px;
        border-radius: 999px;
    `,
};
