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

        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 12;

        margin-bottom: 30px;

        position: relative;
        overflow: hidden;

        input {
            padding: 8px 50px 8px 15px;
            border-radius: 6px;
            background: rgba(255, 255, 255, 0.06);
            border: 1px solid rgba(255, 255, 255, 0.1);
            color: inherit;
            width: 100%;
            outline: none;
            height: 50px;
        }

        .clearIconWrapper {
            /* border: 1px solid #fff; */
            position: absolute;
            right: 0;
            height: 100%;
            width: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
        }
    `,
    CardsWrapper: styled.div`
        display: flex;
        gap: 18px;
        margin-top: 16px;
        flex-wrap: wrap;
    `,
    Card: styled.div`
        border: 1px solid rgba(255, 255, 255, 0.1);
        background: rgba(255, 255, 255, 0.03);
        border-radius: 16px;
        overflow: hidden;
        transition: transform 0.2s ease, box-shadow 0.2s ease;
        &:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
        }
        flex: 1 1 300px;
    `,
    Cover: styled.div`
        /* border: 1px solid #f00; */
        height: 160px;
        background: #111 center/cover no-repeat;
    `,
    TextWrapper: styled.div`
        padding: 15px;
    `,
    LinkDateWrapper: styled.div`
        margin-bottom: 30px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        a {
            text-decoration: none;
            color: orangered;
            &:hover {
                text-decoration: underline;
            }
        }

        .date {
            font-size: 12px;
        }
    `,
    Title: styled.h3`
        font-size: 18px;
        line-height: 1.35;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-bottom: 15px;
    `,
    Meta: styled.div`
        font-size: 12px;
        opacity: 0.8;
    `,
    Excerpt: styled.p`
        font-size: 14px;
        opacity: 0.9;
        line-height: 1.5;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
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
