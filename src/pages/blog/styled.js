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
        max-width: var(--maxw);

        a {
            color: var(--accent);
            text-decoration: none;
            padding: 5px;
            border-bottom: 1px solid var(--accent);
            transition: color 0.25s var(--easing),
                border-color 0.25s var(--easing), background 0.25s var(--easing);
            &:hover {
                border-bottom: none;
                background: var(--accent-soft);
                border-radius: 4px;
            }
            &:focus-visible {
                outline: 3px solid var(--accent);
                outline-offset: 2px;
            }
        }

        .goBackLink {
            border: 1px solid var(--border);
            color: var(--text);
            background: var(--card);
            text-decoration: none;
            padding: 5px 20px;
            border-radius: 6px;
            display: inline-flex;
            gap: 15px;
            transition: border-color 0.25s var(--easing),
                color 0.25s var(--easing), background 0.25s var(--easing);
            &:hover {
                border-color: var(--accent);
                color: var(--accent);
                background: var(--accent-soft);
            }
        }

        .absolutePrev,
        .absoluteNext {
            position: fixed;
            top: 60px; /* header height */
            width: 50px;
            height: calc(100vh - 60px);
            overflow: hidden;
            opacity: 0;
            transition: opacity 0.3s var(--easing);
            &:hover {
                opacity: 1;
            }

            a {
                border: 1px solid var(--border);
                background: var(--surface);
                color: var(--muted);
                display: inline-flex;
                align-items: center;
                justify-content: center;
                height: 100%;
                width: 100%;
                text-decoration: none;
                transition: border-color 0.25s var(--easing),
                    color 0.25s var(--easing), background 0.25s var(--easing);
                &:hover {
                    border-color: var(--accent);
                    color: var(--accent);
                    background: var(--accent-soft);
                }
            }
        }
        .absolutePrev {
            writing-mode: vertical-lr;
            left: 0;
        }
        .absoluteNext {
            writing-mode: vertical-rl;
            right: 0;
        }

        .mainBlogWrapper {
            min-height: 100vh;
            position: relative;
            display: flex;
            gap: 15px;
            align-items: flex-start;
            margin-bottom: 30px;

            .blog {
                width: 100%;
            }
        }

        .prevNextWrapper {
            border: 1px solid var(--border);
            background: var(--card);
            border-radius: 8px;
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            gap: 30px;
            margin-bottom: 100px;
            padding: 15px;

            a {
                font-size: 12px;
                line-height: 1.35;
                display: -webkit-box;
                -webkit-line-clamp: 1;
                -webkit-box-orient: vertical;
                overflow: hidden;
                text-overflow: ellipsis;
                color: var(--muted);
                text-decoration: none;
                max-width: 300px;
                line-height: 2;

                &:hover {
                    color: var(--accent);
                    background: var(--accent-soft);
                    border-radius: 4px;
                }
            }
        }

        .morePostsWrapper {
            .morePostsHeading {
                margin-bottom: 15px;
                color: var(--text);
            }

            .morePostsContent {
                display: flex;
                gap: 15px;
                flex-wrap: wrap;

                .postLink {
                    border: 1px solid var(--border);
                    border-radius: 6px;
                    padding: 15px;
                    color: var(--text);
                    text-decoration: none;
                    flex: 1 1 300px;
                    background: var(--card);
                    transition: border-color 0.25s var(--easing),
                        transform 0.15s var(--easing),
                        background 0.25s var(--easing);
                    &:hover {
                        border-color: var(--accent);
                        transform: translateY(-1px);
                        background: var(--accent-soft);
                    }

                    .postDate {
                        font-size: 12px;
                        color: var(--accent);
                        margin-bottom: 6px;
                    }
                    .postTitle {
                        color: var(--text);
                    }
                }
            }
        }

        h3 {
            color: var(--text);
        }

        p {
            margin-bottom: 30px;
            color: var(--text);

            b {
                color: var(--accent);
                margin-top: 15px;
                display: block;
            }
        }

        ul {
            margin-left: 15px;
            margin-bottom: 30px;
        }
    `,
};
