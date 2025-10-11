// src/pages/home/styled.js
import styled from "styled-components";

export const Styled = {
    Wrapper: styled.div`
        display: flex;
        justify-content: center;
        min-height: 100vh;
        padding: 24px 0 60px;
        max-width: 1000px;
        margin: auto;
        color: var(--text);
        background: transparent;
    `,

    Main: styled.div`
        width: 100%;
        max-width: 1200px;
    `,

    Info: styled.div`
        margin-bottom: 30px;

        h1 {
            color: var(--text);
        }
        p {
            color: var(--text);
            opacity: 0.95;
        }
        span {
            color: var(--muted);
            font-size: 12px;
        }
    `,

    Head: styled.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        margin-bottom: 30px;

        position: relative;
        overflow: hidden;

        input {
            padding: 8px 50px 8px 15px;
            border-radius: 6px;
            background: var(--card);
            border: 1px solid var(--border);
            color: var(--text);
            width: 100%;
            outline: none;
            height: 50px;
            transition: border-color 0.25s var(--easing),
                box-shadow 0.25s var(--easing), background 0.25s var(--easing);
            &::placeholder {
                color: var(--muted);
            }
            &:focus {
                border-color: var(--accent);
                box-shadow: 0 0 0 3px var(--accent-soft);
            }
        }

        .clearIconWrapper {
            position: absolute;
            right: 0;
            height: 100%;
            width: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            color: var(--muted);
            transition: color 0.25s var(--easing),
                background 0.25s var(--easing);
            border-left: 1px solid var(--border);
            &:hover {
                color: var(--accent);
                background: var(--accent-soft);
            }
        }
    `,

    FilterWrapper: styled.div`
        display: flex;
        justify-content: space-between;
        gap: 15px;
        margin: 10px 0 18px;
        align-items: center;
        flex-wrap: wrap;

        select {
            flex: 1 1 100px;
            background: var(--card);
            color: var(--text);
            height: 30px;
            padding: 0 8px;
            border-radius: 6px;
            border: 1px solid var(--border);
            transition: border-color 0.25s var(--easing),
                box-shadow 0.25s var(--easing), background 0.25s var(--easing);
            &:focus {
                border-color: var(--accent);
                box-shadow: 0 0 0 3px var(--accent-soft);
                outline: none;
            }
        }

        .clearFilterButton {
            padding: 3px 15px;
            border-radius: 6px;
            border: 1px solid var(--border);
            background: var(--card);
            cursor: pointer;
            color: var(--text);
            white-space: nowrap;
            height: 30px;
            transition: border-color 0.25s var(--easing),
                background 0.25s var(--easing), color 0.25s var(--easing);
            &:hover {
                border-color: var(--accent);
                color: var(--accent);
                background: var(--accent-soft);
            }
            &:focus-visible {
                outline: 3px solid var(--accent);
                outline-offset: 2px;
            }
        }
    `,

    CardsWrapper: styled.div`
        display: flex;
        gap: 18px;
        margin-top: 16px;
        flex-wrap: wrap;
    `,

    Card: styled.div`
        background: var(--card);
        border: 1px solid var(--border);
        border-radius: 16px;
        overflow: hidden;
        max-width: 300px;
        height: 450px;
        position: relative;
        transition: transform 0.2s var(--easing), box-shadow 0.2s var(--easing),
            border-color 0.2s var(--easing);
        flex: 1 1 300px;

        &:hover {
            transform: translateY(-3px);
            box-shadow: var(--shadow);
            border-color: var(--accent);
        }
    `,

    Cover: styled.div`
        position: relative;
        height: 140px;
        background: var(--surface) center/cover no-repeat;
    `,

    TextWrapper: styled.div`
        height: 420px;
        padding: 15px;
        color: var(--text);
    `,

    LinkDateWrapper: styled.div`
        margin-bottom: 30px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        a {
            text-decoration: none;
            color: var(--accent);
            padding: 3px;
            border-bottom: 1px solid transparent;
            transition: border-color 0.25s var(--easing),
                background 0.25s var(--easing), color 0.25s var(--easing);
            &:hover {
                border-bottom: 1px solid var(--accent);
                background: var(--accent-soft);
                border-radius: 4px;
            }
            &:focus-visible {
                outline: 3px solid var(--accent);
                outline-offset: 2px;
            }
        }

        .date {
            font-size: 12px;
            color: var(--accent);
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
        color: var(--text);
    `,

    Meta: styled.div`
        font-size: 12px;
        opacity: 0.8;
        color: var(--muted);
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
        color: var(--text);
    `,

    Tags: styled.div`
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        margin-top: 4px;
    `,

    Tag: styled.span`
        font-size: 12px;
        border: 1px solid var(--border);
        padding: 4px 8px;
        border-radius: 999px;
        background: var(--surface);
        color: var(--text);
        transition: border-color 0.25s var(--easing),
            background 0.25s var(--easing), color 0.25s var(--easing);
        &:hover {
            border-color: var(--accent);
            background: var(--accent-soft);
            color: var(--accent);
        }
    `,
};
