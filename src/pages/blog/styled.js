import styled from "styled-components";

export const Styled = {
    Wrapper: styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
    `,
    Main: styled.div`
        /* border: 1px solid #f00; */
        width: 100%;
        max-width: 1440px;

        a {
            color: lightcoral;
            text-decoration: none;
            padding: 5px;
            border-bottom: 1px solid lightcoral;
            &:hover {
                border-bottom: none;
            }
        }

        .goBackLink {
            /* background-color: #111; */
            border: 1px solid #333;
            color: #fff;
            text-decoration: none;
            padding: 5px 20px;
            border-radius: 6px;
            display: inline-flex;
            gap: 15px;
            &:hover {
                border: 1px solid #aaa;
            }
        }

        .absolutePrev,
        .absoluteNext {
            /* border: 1px solid #333; */
            position: fixed;
            top: 60px;
            width: 50px;
            height: calc(100vh - 60px);
            overflow: hidden;
            /* cursor: pointer; */
            opacity: 0;
            transition: opacity 0.3s ease;
            &:hover {
                opacity: 1;
            }

            a {
                border: none;
                border: 1px solid #111;
                display: flex;
                align-items: center;
                justify-content: center;
                height: 100%;
                width: 100%;
                display: inline-flex;
                text-decoration: none;
                color: #fff;
            }
        }

        .absolutePrev {
            writing-mode: vertical-lr;
            /* text-orientation: sideways-left; */
            left: 0;
        }

        .absoluteNext {
            writing-mode: vertical-rl;
            /* text-orientation: sideways-left; */
            right: 0;
        }

        .mainBlogWrapper {
            /* border: 1px solid #ff0; */
            min-height: 100vh;
            position: relative;
            display: flex;
            gap: 15px;
            align-items: flex-start;
            margin-bottom: 30px;

            .blog {
                /* border: 1px solid #ff0; */
                width: 100%;
            }
            .controls {
                /* border: 1px solid #ff0; */
                flex: 1 1 400px;
                background: #1a1a1a;
                border-radius: 12px;
                min-height: 300px;
                padding: 15px;
                position: sticky;
                top: 100px;
                @media (width<1000px) {
                    display: none;
                }
            }
        }

        .prevNextWrapper {
            border: 1px solid #333;
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            /* flex-wrap: wrap; */
            gap: 30px;
            margin-bottom: 100px;
            padding: 15px;
            border-radius: 8px;

            a {
                font-size: 12px;
                line-height: 1.35;
                display: -webkit-box;
                -webkit-line-clamp: 1;
                -webkit-box-orient: vertical;
                overflow: hidden;
                text-overflow: ellipsis;
                color: #aaa;
                text-decoration: none;
                max-width: 300px;
                line-height: 2;

                &:hover {
                    color: #fff;
                }
            }
        }

        .morePostsWrapper {
            .morePostsHeading {
                margin-bottom: 15px;
            }

            .morePostsContent {
                display: flex;
                gap: 15px;
                flex-wrap: wrap;

                .postLink {
                    border: 1px solid #333;
                    border-radius: 6px;
                    padding: 15px;
                    color: #aaa;
                    text-decoration: none;
                    flex: 1 1 300px;

                    &:hover {
                        border: 1px solid #aaa;
                    }

                    .postDate {
                        font-size: 12px;
                        color: lightcoral;
                    }
                }
            }
        }

        h3 {
            color: #fff;
        }

        p {
            margin-bottom: 30px;

            b {
                color: lightcoral;
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
