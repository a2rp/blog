import{_ as c}from"./kickoff-tech-blog-2025-35Qm9Ubb.js";import{d as r,u as g,r as p,j as e,L as m}from"./index-B2c9NimY.js";const l={Wrapper:r.div`
        display: flex;
        justify-content: center;
        min-height: 100vh;
        padding: 24px 0 60px;
    `,Main:r.div`
        width: 100%;
        max-width: 1200px;
        padding: 0 18px;
    `,Head:r.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        margin: 6px 0 14px;
    `,Right:r.div`
        display: flex;
        align-items: center;
        gap: 10px;
    `,Search:r.input`
        padding: 8px 10px;
        min-width: 260px;
        border-radius: 12px;
        background: rgba(255, 255, 255, 0.06);
        border: 1px solid rgba(255, 255, 255, 0.1);
        outline: none;
        color: inherit;
        font-size: 14px;
    `,Grid:r.div`
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 18px;
        @media (max-width: 1000px) {
            grid-template-columns: repeat(2, 1fr);
        }
        @media (max-width: 640px) {
            grid-template-columns: 1fr;
        }
    `,Card:r.article`
        border: 1px solid rgba(255, 255, 255, 0.1);
        background: rgba(255, 255, 255, 0.03);
        border-radius: 16px;
        overflow: hidden;
        transition: transform 0.2s ease, box-shadow 0.2s ease;
        &:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
        }
    `,Cover:r.div`
        height: 160px;
        background: #111 center/cover no-repeat;
    `,CardBody:r.div`
        padding: 14px;
        display: grid;
        gap: 8px;
    `,Title:r.h3`
        margin: 0;
        font-size: 18px;
        line-height: 1.35;
    `,Meta:r.div`
        font-size: 12px;
        opacity: 0.8;
    `,Excerpt:r.p`
        margin: 0;
        font-size: 14px;
        opacity: 0.92;
    `,Tags:r.div`
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        margin-top: 4px;
    `,Tag:r.span`
        font-size: 12px;
        opacity: 0.9;
        border: 1px solid rgba(255, 255, 255, 0.12);
        padding: 4px 8px;
        border-radius: 999px;
    `},u=Object.assign({"../../blogs/kickoff-tech-blog-2025.jsx":c});function h(){return Object.entries(u).map(([o,d])=>{const i=o.split("/").pop().replace(".jsx",""),a=d.meta||{};return{slug:a.slug||i,title:a.title||i,date:a.date||"1970-01-01",tags:a.tags||[],excerpt:a.excerpt||"",cover:a.cover||""}}).sort((o,d)=>new Date(d.date)-new Date(o.date))}function y(){const[o,d]=g(),i=(o.get("q")||"").toLowerCase(),a=p.useMemo(()=>h(),[]),x=p.useMemo(()=>i?a.filter(t=>t.title.toLowerCase().includes(i)||t.excerpt.toLowerCase().includes(i)||t.tags.some(s=>s.toLowerCase().includes(i))):a,[i,a]);return e.jsx(l.Wrapper,{children:e.jsxs(l.Main,{children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",gap:12},children:[e.jsx("h1",{children:"Blog"}),e.jsx("input",{value:i,onChange:t=>{const s=t.target.value,n=new URLSearchParams(o);s?n.set("q",s):n.delete("q"),d(n,{replace:!1})},placeholder:"Search posts, tags…",style:{padding:"8px 10px",borderRadius:10,background:"rgba(255,255,255,0.06)",border:"1px solid rgba(255,255,255,0.1)",color:"inherit"}})]}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:18,marginTop:16},children:x.map(t=>e.jsx(m,{to:`/${t.slug}`,style:{textDecoration:"none",color:"inherit"},children:e.jsxs("article",{style:{border:"1px solid rgba(255,255,255,0.1)",borderRadius:16,overflow:"hidden",background:"rgba(255,255,255,0.03)"},children:[e.jsx("div",{style:{height:160,background:`#111 url(${t.cover}) center/cover no-repeat`}}),e.jsxs("div",{style:{padding:14},children:[e.jsx("h3",{style:{margin:"0 0 6px"},children:t.title}),e.jsx("div",{style:{opacity:.8,fontSize:12,marginBottom:6},children:t.date}),e.jsx("p",{style:{margin:0,opacity:.9,fontSize:14},children:t.excerpt}),e.jsx("div",{style:{marginTop:8,display:"flex",flexWrap:"wrap",gap:6},children:t.tags.map(s=>e.jsxs("span",{style:{fontSize:12,opacity:.9,border:"1px solid rgba(255,255,255,.12)",padding:"4px 8px",borderRadius:999},children:["#",s]},s))})]})]})},t.slug))})]})})}export{y as default};
