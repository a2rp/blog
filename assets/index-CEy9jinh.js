import{d as e,X as n,j as o,N as a}from"./index-Bfig8YMp.js";const t={Wrapper:e.div`
        background-color: #111;
        padding: 15px;
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 80vh;
    `,Inner:e.div`
        width: 100%;
        max-width: 760px;
        text-align: center;
    `,Code:e.div`
        font-weight: 800;
        font-size: clamp(40px, 8vw, 84px);
        letter-spacing: 2px;
        line-height: 1;
    `,Title:e.h1`
        font-size: clamp(22px, 3.2vw, 32px);
        margin: 8px 0 6px;
    `,Subtitle:e.p`
        color: #666;
        margin: 0 auto 16px;
        max-width: 56ch;
    `,Actions:e.div`
        margin: 24px 0 8px;
        display: flex;
        gap: 12px;
        justify-content: center;
        flex-wrap: wrap;
        align-items: center;

        a {
            text-decoration: none;
        }
    `,Button:e.button`
        appearance: none;
        border: 1px solid lightcoral;
        background: lightcoral;
        color: #fff;
        padding: 10px 16px;
        border-radius: 12px;
        cursor: pointer;
        font-weight: 600;
        transition: border-color 0.2s ease, box-shadow 0.2s ease,
            text-shadow 0.2s ease;
        &:hover {
            border-color: #fff;
            box-shadow: 0 0 14px rgba(255, 127, 127, 0.55);
            text-shadow: 0 0 8px rgba(255, 255, 255, 0.7);
        }
    `,OutlineButton:e.button`
        appearance: none;
        border: 1px solid #111;
        background: transparent;
        color: #111;
        padding: 10px 16px;
        border-radius: 12px;
        cursor: pointer;
        font-weight: 600;
        transition: border-color 0.2s ease, box-shadow 0.2s ease,
            text-shadow 0.2s ease;
        &:hover {
            border-color: #111;
            box-shadow: 0 0 12px rgba(17, 17, 17, 0.22);
            text-shadow: 0 0 8px rgba(17, 17, 17, 0.35);
        }
    `,Hint:e.p`
        color: #888;
        margin-top: 16px;
    `,Links:e.div`
        display: flex;
        gap: 16px;
        justify-content: center;
        flex-wrap: wrap;
        a {
            color: #111;
            text-decoration: underline;
            text-underline-offset: 3px;
            &:hover {
                opacity: 0.8;
            }
        }
    `,Small:e.p`
        margin-top: 28px;
        font-size: 13px;
        color: #777;
    `},s=()=>{const r=n();return o.jsx(t.Wrapper,{role:"main","aria-labelledby":"nf-title",children:o.jsxs(t.Inner,{children:[o.jsx(t.Code,{children:"404"}),o.jsx(t.Title,{id:"nf-title",children:"Page not found"}),o.jsx(t.Subtitle,{children:"The page you're looking for may have moved, been renamed, or never existed."}),o.jsxs(t.Actions,{children:[o.jsx(t.Button,{onClick:()=>r(-1),"aria-label":"Go back",children:"Go back"}),o.jsx(a,{to:"/",children:o.jsx(t.Button,{as:"span",children:"Go home"})})]}),o.jsx(t.Small,{children:"Availability: Open to full-time roles (Bengaluru/remote) & select freelance projects."})]})})};export{s as default};
