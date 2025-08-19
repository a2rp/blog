const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/format-BXIPQUU4.js","assets/index-B19SVUgE.js","assets/index-Res90zYB.css"])))=>i.map(i=>d[i]);
import{d as b,a as v,b as k,r as x,j as e,L as w,R as y,N as c,_ as d}from"./index-B19SVUgE.js";import{f as P,_ as N,a as L,b as E,c as D}from"./format-BXIPQUU4.js";const p={Wrapper:b.div`
        display: flex;
        justify-content: center;
        align-items: center;
    `,Main:b.div`
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
    `},u=Object.assign({"../../blogs/account-security-basics.jsx":()=>d(()=>import("./format-BXIPQUU4.js").then(s=>s.c),__vite__mapDeps([0,1,2])),"../../blogs/fix-slow-home-wifi.jsx":()=>d(()=>import("./format-BXIPQUU4.js").then(s=>s.b),__vite__mapDeps([0,1,2])),"../../blogs/frontend-pre-deploy-checklist.jsx":()=>d(()=>import("./format-BXIPQUU4.js").then(s=>s.a),__vite__mapDeps([0,1,2])),"../../blogs/kickoff-tech-blog-2025.jsx":()=>d(()=>import("./format-BXIPQUU4.js").then(s=>s._),__vite__mapDeps([0,1,2]))}),g=Object.assign({"../../blogs/account-security-basics.jsx":D,"../../blogs/fix-slow-home-wifi.jsx":E,"../../blogs/frontend-pre-deploy-checklist.jsx":L,"../../blogs/kickoff-tech-blog-2025.jsx":N});function O(){return Object.entries(g).map(([s,o])=>{const i=s.split("/").pop().replace(".jsx",""),a=(o==null?void 0:o.meta)||{};return{slug:a.slug||i,title:a.title||i,date:a.date||"1970-01-01"}}).sort((s,o)=>new Date(o.date)-new Date(s.date))}function B(){var f;const s=v(),{slug:o}=k(),i=x.useMemo(()=>O(),[]),a=Object.keys(u).find(t=>t.endsWith(`/${o}.jsx`))||Object.keys(g).find(t=>{var m,h;return((h=(m=g[t])==null?void 0:m.meta)==null?void 0:h.slug)===o}),r=i.findIndex(t=>t.slug===o),l=r>0?i[r-1]:null,n=r>=0&&r<i.length-1?i[r+1]:null;if(!a||r===-1)return e.jsx(p.Wrapper,{children:e.jsxs(p.Main,{children:[e.jsx("h2",{children:"Post not found"}),e.jsxs("p",{children:["We couldn’t find “",o,"”. Check that file name and ",e.jsx("code",{children:"meta.slug"})," match."]}),e.jsx(w,{to:"/",children:"← Back to all posts"})]})});const _=y.lazy(u[a]),j=((f=window.history.state)==null?void 0:f.idx)>0;return x.useEffect(()=>{window.scrollTo({top:0,behavior:"auto"})},[o]),e.jsx(p.Wrapper,{children:e.jsxs(p.Main,{children:[e.jsx(c,{to:"/",className:"goBackLink",onClick:t=>{j&&(t.preventDefault(),s(-1))},children:"← Back"}),e.jsx(x.Suspense,{fallback:e.jsx("p",{children:"Loading…"}),children:e.jsx(_,{})}),e.jsxs("div",{className:"prevNextWrapper",children:[l?e.jsxs(c,{to:`/${l.slug}`,title:l.title,children:["Prev: ",l.title]}):e.jsx("span",{}),n?e.jsxs(c,{to:`/${n.slug}`,title:n.title,children:["Next: ",n.title]}):e.jsx("span",{})]}),e.jsxs("div",{className:"morePostsWrapper",children:[e.jsx("h3",{className:"morePostsHeading",children:"More posts"}),e.jsx("div",{className:"morePostsContent",children:i.filter(t=>t.slug!==o).slice(0,4).map(t=>e.jsxs(c,{to:`/${t.slug}`,className:"postLink",title:t.title,children:[e.jsx("div",{className:"postDate",children:P(t.date)}),e.jsx("div",{className:"postTitle",children:t.title})]},t.slug))})]})]})})}export{B as default};
