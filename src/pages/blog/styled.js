import styled from "styled-components";

export const Styled = {
    Wrapper: styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
    `,
    Main: styled.div`
        width: 100%;
        max-width: 1200px;

        .goBackLink {
            background-color: #111;
            border: 1px solid #333;
            color: #fff;
            text-decoration: none;
            padding: 5px 20px;
            border-radius: 6px;
            margin-bottom: 30px;
            display: inline-flex;
            gap: 15px;
            &:hover {
                border: 1px solid #aaa;
            }
        }

        .prevNextWrapper {
            border: 1px solid #333;
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            flex-wrap: wrap;
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
                        color: orangered;
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
                color: orangered;
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
