import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Styled = {
    Wrapper: styled.div``,
    Main: styled.main`
        min-height: 100vh;
        padding: 100px 50px;
        @media (width<900px) {
            padding: 80px 15px;
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
            animation: slideIn 3s linear 1 forwards;
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
