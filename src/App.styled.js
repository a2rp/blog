import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Styled = {
    Wrapper: styled.div``,
    Main: styled.main`
        min-height: calc(100vh - 60px);
        padding: 34px clamp(20px, 4vw, 64px);
    `,
    Layout: styled.div`
        display: flex;
        min-height: 100vh;
        padding-top: 60px;
    `,
    Sidebar: styled.aside`
        position: fixed;
        top: 60px;
        bottom: 0;
        left: 0;
        width: 320px;
        z-index: 20;
        border-right: 1px solid var(--border);
        background: var(--surface);
        overflow: hidden;

        @media (max-width: 900px) {
            display: none;
        }
    `,
    Content: styled.div`
        width: calc(100% - 320px);
        margin-left: 320px;
        min-width: 0;

        @media (max-width: 900px) {
            width: 100%;
            margin-left: 0;
        }
    `,
    SliderWrapper: styled.div`
        position: fixed;
        top: 60px;
        left: 0;
        width: 100%;
        height: calc(100% - 60px);
        background: var(--color-bg);
        z-index: 1000;

        background-color: rgba(var(--color-bg-rgb), 0.95);
        backdrop-filter: blur(4px);
        -webkit-backdrop-filter: blur(4px);

        display: flex;
        align-items: stretch;

        .empty {
            width: 100%;
            cursor: pointer;
        }
        .navlistWrapper {
            width: 300px;
            flex: 0 0 300px;
            background-color: var(--surface);
            border-left: 1px solid var(--color-border);
            box-shadow: -2px 0 4px rgba(0, 0, 0, 0.1);
            animation: slideIn 180ms ease-out 1 forwards;
            @keyframes slideIn {
                from {
                    transform: translateX(100%);
                }
                to {
                    transform: translateX(0);
                }
            }
        }
    `,
};
