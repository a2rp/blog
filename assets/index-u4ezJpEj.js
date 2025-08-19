const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/resume-portfolio-checklist-B0BDvmOX.js","assets/index-ElV9W-F9.js","assets/index-Res90zYB.css"])))=>i.map(i=>d[i]);
import{d as m,a as v,b as k,r as x,j as e,L as w,R as y,N as d,_ as r}from"./index-ElV9W-F9.js";import{f as P,_ as E,a as L,b as N,c as D,d as O,e as R}from"./resume-portfolio-checklist-B0BDvmOX.js";const p={Wrapper:m.div`
        display: flex;
        justify-content: center;
        align-items: center;
    `,Main:m.div`
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
    `},h=Object.assign({"../../blogs/account-security-basics.jsx":()=>r(()=>import("./resume-portfolio-checklist-B0BDvmOX.js").then(t=>t.e),__vite__mapDeps([0,1,2])),"../../blogs/backup-3-2-1.jsx":()=>r(()=>import("./resume-portfolio-checklist-B0BDvmOX.js").then(t=>t.d),__vite__mapDeps([0,1,2])),"../../blogs/fix-slow-home-wifi.jsx":()=>r(()=>import("./resume-portfolio-checklist-B0BDvmOX.js").then(t=>t.c),__vite__mapDeps([0,1,2])),"../../blogs/frontend-pre-deploy-checklist.jsx":()=>r(()=>import("./resume-portfolio-checklist-B0BDvmOX.js").then(t=>t.b),__vite__mapDeps([0,1,2])),"../../blogs/kickoff-tech-blog-2025.jsx":()=>r(()=>import("./resume-portfolio-checklist-B0BDvmOX.js").then(t=>t.a),__vite__mapDeps([0,1,2])),"../../blogs/resume-portfolio-checklist.jsx":()=>r(()=>import("./resume-portfolio-checklist-B0BDvmOX.js").then(t=>t._),__vite__mapDeps([0,1,2]))}),_=Object.assign({"../../blogs/account-security-basics.jsx":R,"../../blogs/backup-3-2-1.jsx":O,"../../blogs/fix-slow-home-wifi.jsx":D,"../../blogs/frontend-pre-deploy-checklist.jsx":N,"../../blogs/kickoff-tech-blog-2025.jsx":L,"../../blogs/resume-portfolio-checklist.jsx":E});function W(){return Object.entries(_).map(([t,o])=>{const i=t.split("/").pop().replace(".jsx",""),a=(o==null?void 0:o.meta)||{};return{slug:a.slug||i,title:a.title||i,date:a.date||"1970-01-01"}}).sort((t,o)=>new Date(o.date)-new Date(t.date))}function A(){var g;const t=v(),{slug:o}=k(),i=x.useMemo(()=>W(),[]),a=Object.keys(h).find(s=>s.endsWith(`/${o}.jsx`))||Object.keys(_).find(s=>{var f,b;return((b=(f=_[s])==null?void 0:f.meta)==null?void 0:b.slug)===o}),l=i.findIndex(s=>s.slug===o),n=l>0?i[l-1]:null,c=l>=0&&l<i.length-1?i[l+1]:null;if(!a||l===-1)return e.jsx(p.Wrapper,{children:e.jsxs(p.Main,{children:[e.jsx("h2",{children:"Post not found"}),e.jsxs("p",{children:["We couldn’t find “",o,"”. Check that file name and ",e.jsx("code",{children:"meta.slug"})," match."]}),e.jsx(w,{to:"/",children:"← Back to all posts"})]})});const u=y.lazy(h[a]),j=((g=window.history.state)==null?void 0:g.idx)>0;return x.useEffect(()=>{window.scrollTo({top:0,behavior:"auto"})},[o]),e.jsx(p.Wrapper,{children:e.jsxs(p.Main,{children:[e.jsx(d,{to:"/",className:"goBackLink",onClick:s=>{j&&(s.preventDefault(),t(-1))},children:"← Back"}),e.jsx(x.Suspense,{fallback:e.jsx("p",{children:"Loading…"}),children:e.jsx(u,{})}),e.jsxs("div",{className:"prevNextWrapper",children:[n?e.jsxs(d,{to:`/${n.slug}`,title:n.title,children:["Prev: ",n.title]}):e.jsx("span",{}),c?e.jsxs(d,{to:`/${c.slug}`,title:c.title,children:["Next: ",c.title]}):e.jsx("span",{})]}),e.jsxs("div",{className:"morePostsWrapper",children:[e.jsx("h3",{className:"morePostsHeading",children:"More posts"}),e.jsx("div",{className:"morePostsContent",children:i.filter(s=>s.slug!==o).slice(0,4).map(s=>e.jsxs(d,{to:`/${s.slug}`,className:"postLink",title:s.title,children:[e.jsx("div",{className:"postDate",children:P(s.date)}),e.jsx("div",{className:"postTitle",children:s.title})]},s.slug))})]})]})})}export{A as default};
