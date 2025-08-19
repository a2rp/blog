const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/react-router-gh-pages-404-DviZw8MO.js","assets/index-CggoZFON.js","assets/index-BHLEFoNj.css"])))=>i.map(i=>d[i]);
import{d as p,a as j,r as g,j as e,L as r,R as _,_ as c}from"./index-CggoZFON.js";import{_ as h,a as m,b}from"./react-router-gh-pages-404-DviZw8MO.js";const n={Wrapper:p.div`
        display: flex;
        justify-content: center;
        align-items: center;
    `,Main:p.div`
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
    `},x=Object.assign({"../../blogs/kickoff-tech-blog-2025.jsx":()=>c(()=>import("./react-router-gh-pages-404-DviZw8MO.js").then(s=>s.b),__vite__mapDeps([0,1,2])),"../../blogs/mern-n-plus-one-bug.jsx":()=>c(()=>import("./react-router-gh-pages-404-DviZw8MO.js").then(s=>s.a),__vite__mapDeps([0,1,2])),"../../blogs/react-router-gh-pages-404.jsx":()=>c(()=>import("./react-router-gh-pages-404-DviZw8MO.js").then(s=>s._),__vite__mapDeps([0,1,2]))}),f=Object.assign({"../../blogs/kickoff-tech-blog-2025.jsx":b,"../../blogs/mern-n-plus-one-bug.jsx":m,"../../blogs/react-router-gh-pages-404.jsx":h});function y(){return Object.entries(f).map(([s,l])=>{const i=s.split("/").pop().replace(".jsx",""),o=l.meta||{};return{slug:o.slug||i,title:o.title||i,date:o.date||"1970-01-01"}}).sort((s,l)=>new Date(l.date)-new Date(s.date))}function E(){const{slug:s}=j(),l=g.useMemo(()=>y(),[]),i=Object.keys(x).find(t=>t.endsWith(`/${s}.jsx`)),o=l.findIndex(t=>t.slug===s),a=o>0?l[o-1]:null,d=o<l.length-1?l[o+1]:null;if(!i)return e.jsx(n.Wrapper,{children:e.jsxs(n.Main,{children:[e.jsx("p",{children:"Post not found."}),e.jsx(r,{to:"/",children:"← Back to all posts"})]})});const u=_.lazy(x[i]);return e.jsx(n.Wrapper,{children:e.jsxs(n.Main,{children:[e.jsx(r,{to:"/",children:"← Back"}),e.jsx(g.Suspense,{fallback:e.jsx("p",{children:"Loading…"}),children:e.jsx(u,{})}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12,marginTop:18},children:[a&&e.jsxs(r,{to:`/${a.slug}`,children:["← ",a.title]}),d&&e.jsxs(r,{to:`/${d.slug}`,children:[d.title," →"]})]}),e.jsxs("div",{style:{marginTop:24},children:[e.jsx("h3",{children:"More posts"}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:12},children:l.filter(t=>t.slug!==s).slice(0,4).map(t=>e.jsx(r,{to:`/${t.slug}`,style:{textDecoration:"none"},children:e.jsxs("div",{style:{border:"1px solid rgba(255,255,255,.1)",borderRadius:12,padding:12},children:[e.jsx("div",{style:{fontSize:12,opacity:.8},children:t.date}),e.jsx("div",{style:{fontWeight:600},children:t.title})]})},t.slug))})]})]})})}export{E as default};
