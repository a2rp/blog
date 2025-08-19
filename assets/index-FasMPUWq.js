const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/kickoff-tech-blog-2025-35Qm9Ubb.js","assets/index-B2c9NimY.js","assets/index-BHLEFoNj.css"])))=>i.map(i=>d[i]);
import{d as c,a as j,r as p,j as e,L as o,R as u,_ as h}from"./index-B2c9NimY.js";import{_ as m}from"./kickoff-tech-blog-2025-35Qm9Ubb.js";const r={Wrapper:c.div`
        display: flex;
        justify-content: center;
        align-items: center;
    `,Main:c.div`
        width: 100%;
        max-width: 600px;

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
    `},x=Object.assign({"../../blogs/kickoff-tech-blog-2025.jsx":()=>h(()=>import("./kickoff-tech-blog-2025-35Qm9Ubb.js").then(t=>t._),__vite__mapDeps([0,1,2]))}),f=Object.assign({"../../blogs/kickoff-tech-blog-2025.jsx":m});function b(){return Object.entries(f).map(([t,i])=>{const n=t.split("/").pop().replace(".jsx",""),l=i.meta||{};return{slug:l.slug||n,title:l.title||n,date:l.date||"1970-01-01"}}).sort((t,i)=>new Date(i.date)-new Date(t.date))}function v(){const{slug:t}=j(),i=p.useMemo(()=>b(),[]),n=Object.keys(x).find(s=>s.endsWith(`/${t}.jsx`)),l=i.findIndex(s=>s.slug===t),a=l>0?i[l-1]:null,d=l<i.length-1?i[l+1]:null;if(!n)return e.jsx(r.Wrapper,{children:e.jsxs(r.Main,{children:[e.jsx("p",{children:"Post not found."}),e.jsx(o,{to:"/",children:"← Back to all posts"})]})});const g=u.lazy(x[n]);return e.jsx(r.Wrapper,{children:e.jsxs(r.Main,{children:[e.jsx(o,{to:"/",children:"← Back"}),e.jsx(p.Suspense,{fallback:e.jsx("p",{children:"Loading…"}),children:e.jsx(g,{})}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12,marginTop:18},children:[a&&e.jsxs(o,{to:`/${a.slug}`,children:["← ",a.title]}),d&&e.jsxs(o,{to:`/${d.slug}`,children:[d.title," →"]})]}),e.jsxs("div",{style:{marginTop:24},children:[e.jsx("h3",{children:"More posts"}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:12},children:i.filter(s=>s.slug!==t).slice(0,4).map(s=>e.jsx(o,{to:`/${s.slug}`,style:{textDecoration:"none"},children:e.jsxs("div",{style:{border:"1px solid rgba(255,255,255,.1)",borderRadius:12,padding:12},children:[e.jsx("div",{style:{fontSize:12,opacity:.8},children:s.date}),e.jsx("div",{style:{fontWeight:600},children:s.title})]})},s.slug))})]})]})})}export{v as default};
