const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-DI0ENTy4.js","assets/index-DVpGZlzD.css"])))=>i.map(i=>d[i]);
import{d as h,S as m,T as j,r as g,j as t,N as l,U as w,V as f,W as y,f as E,X as o,_ as k,a as P,b as D,c as L,e as O,g as I,h as R,i as T,k as A,l as V,m as N,n as W,o as B,p as C,q as M,s as $,t as z,v as H,w as S,x as q,y as F,z as G,A as J,B as K,C as Q,D as U,E as X,F as Y,G as Z,H as ee,I as oe,J as te,K as se,L as ie,O as re,P as ae,Q as ne,R as le}from"./index-DI0ENTy4.js";const d={Wrapper:h.div`
        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--text);
        background: transparent;
    `,Main:h.div`
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
    `},v=Object.assign({"../../blogs/ai-101-how-you-already-use-it-every-day.jsx":()=>o(()=>import("./index-DI0ENTy4.js").then(e=>e.R),__vite__mapDeps([0,1])),"../../blogs/are-software-subscriptions-a-good-deal.jsx":()=>o(()=>import("./index-DI0ENTy4.js").then(e=>e.Q),__vite__mapDeps([0,1])),"../../blogs/are-you-addicted-how-apps-keep-you-scrolling.jsx":()=>o(()=>import("./index-DI0ENTy4.js").then(e=>e.P),__vite__mapDeps([0,1])),"../../blogs/beginners-guide-backing-up-photos.jsx":()=>o(()=>import("./index-DI0ENTy4.js").then(e=>e.O),__vite__mapDeps([0,1])),"../../blogs/behind-scenes-software-update.jsx":()=>o(()=>import("./index-DI0ENTy4.js").then(e=>e.L),__vite__mapDeps([0,1])),"../../blogs/beyond-bitcoin-simple-idea-blockchain.jsx":()=>o(()=>import("./index-DI0ENTy4.js").then(e=>e.K),__vite__mapDeps([0,1])),"../../blogs/biggest-misconceptions-about-being-a-developer.jsx":()=>o(()=>import("./index-DI0ENTy4.js").then(e=>e.J),__vite__mapDeps([0,1])),"../../blogs/choose-the-right-ai-model-2025.jsx":()=>o(()=>import("./index-DI0ENTy4.js").then(e=>e.I),__vite__mapDeps([0,1])),"../../blogs/cookies-website-tracking-guide.jsx":()=>o(()=>import("./index-DI0ENTy4.js").then(e=>e.H),__vite__mapDeps([0,1])),"../../blogs/day-in-life-website-developer.jsx":()=>o(()=>import("./index-DI0ENTy4.js").then(e=>e.G),__vite__mapDeps([0,1])),"../../blogs/decoding-tech-job-titles-devops-ux-sre-pm.jsx":()=>o(()=>import("./index-DI0ENTy4.js").then(e=>e.F),__vite__mapDeps([0,1])),"../../blogs/designer-vs-developer-who-builds-website.jsx":()=>o(()=>import("./index-DI0ENTy4.js").then(e=>e.E),__vite__mapDeps([0,1])),"../../blogs/digital-spring-cleaning-tidy-online-life.jsx":()=>o(()=>import("./index-DI0ENTy4.js").then(e=>e.D),__vite__mapDeps([0,1])),"../../blogs/from-idea-to-app-long-journey-of-a-simple-feature.jsx":()=>o(()=>import("./index-DI0ENTy4.js").then(e=>e.C),__vite__mapDeps([0,1])),"../../blogs/how-netflix-spotify-know-what-you-like.jsx":()=>o(()=>import("./index-DI0ENTy4.js").then(e=>e.B),__vite__mapDeps([0,1])),"../../blogs/how-to-talk-to-ai-better-answers.jsx":()=>o(()=>import("./index-DI0ENTy4.js").then(e=>e.A),__vite__mapDeps([0,1])),"../../blogs/internets-memory-what-happens-when-website-deleted.jsx":()=>o(()=>import("./index-DI0ENTy4.js").then(e=>e.z),__vite__mapDeps([0,1])),"../../blogs/is-your-smart-device-listening.jsx":()=>o(()=>import("./index-DI0ENTy4.js").then(e=>e.y),__vite__mapDeps([0,1])),"../../blogs/laptop-buying-guide-normal-people.jsx":()=>o(()=>import("./index-DI0ENTy4.js").then(e=>e.x),__vite__mapDeps([0,1])),"../../blogs/open-source-hidden-collaboration.jsx":()=>o(()=>import("./index-DI0ENTy4.js").then(e=>e.w),__vite__mapDeps([0,1])),"../../blogs/read-before-you-post-digital-footprint-permanence.jsx":()=>o(()=>import("./index-DI0ENTy4.js").then(e=>e.v),__vite__mapDeps([0,1])),"../../blogs/real-world-ai-learning-by-doing-across-stacks.jsx":()=>o(()=>import("./index-DI0ENTy4.js").then(e=>e.t),__vite__mapDeps([0,1])),"../../blogs/right-to-repair-why-cant-you-fix-your-own-phone.jsx":()=>o(()=>import("./index-DI0ENTy4.js").then(e=>e.s),__vite__mapDeps([0,1])),"../../blogs/spotting-online-scams-phishing-guide.jsx":()=>o(()=>import("./index-DI0ENTy4.js").then(e=>e.q),__vite__mapDeps([0,1])),"../../blogs/tech-behind-summer-blockbuster-more-than-cgi.jsx":()=>o(()=>import("./index-DI0ENTy4.js").then(e=>e.p),__vite__mapDeps([0,1])),"../../blogs/the-cloud-is-someone-elses-computer.jsx":()=>o(()=>import("./index-DI0ENTy4.js").then(e=>e.o),__vite__mapDeps([0,1])),"../../blogs/the-dignity-stack-for-india.jsx":()=>o(()=>import("./index-DI0ENTy4.js").then(e=>e.n),__vite__mapDeps([0,1])),"../../blogs/the-uber-effect-how-an-app-disrupts-industries.jsx":()=>o(()=>import("./index-DI0ENTy4.js").then(e=>e.m),__vite__mapDeps([0,1])),"../../blogs/travel-smarter-tech-on-vacation.jsx":()=>o(()=>import("./index-DI0ENTy4.js").then(e=>e.l),__vite__mapDeps([0,1])),"../../blogs/what-does-beta-actually-mean-peek-into-software-testing.jsx":()=>o(()=>import("./index-DI0ENTy4.js").then(e=>e.k),__vite__mapDeps([0,1])),"../../blogs/what-happens-when-you-type-a-web-address.jsx":()=>o(()=>import("./index-DI0ENTy4.js").then(e=>e.i),__vite__mapDeps([0,1])),"../../blogs/why-apps-feel-slow-speed-vs-features.jsx":()=>o(()=>import("./index-DI0ENTy4.js").then(e=>e.h),__vite__mapDeps([0,1])),"../../blogs/why-internet-slow-on-the-beach-vacation-tech-woes.jsx":()=>o(()=>import("./index-DI0ENTy4.js").then(e=>e.g),__vite__mapDeps([0,1])),"../../blogs/why-website-projects-cost-more-than-you-think.jsx":()=>o(()=>import("./index-DI0ENTy4.js").then(e=>e.e),__vite__mapDeps([0,1])),"../../blogs/why-websites-look-weird-on-phone-responsive-design.jsx":()=>o(()=>import("./index-DI0ENTy4.js").then(e=>e.c),__vite__mapDeps([0,1])),"../../blogs/wifi-vs-internet-difference-and-why-it-matters.jsx":()=>o(()=>import("./index-DI0ENTy4.js").then(e=>e.b),__vite__mapDeps([0,1])),"../../blogs/your-data-is-valuable-privacy-settings-social-media.jsx":()=>o(()=>import("./index-DI0ENTy4.js").then(e=>e.a),__vite__mapDeps([0,1])),"../../blogs/your-password-is-terrible.jsx":()=>o(()=>import("./index-DI0ENTy4.js").then(e=>e._),__vite__mapDeps([0,1]))}),c=Object.assign({"../../blogs/ai-101-how-you-already-use-it-every-day.jsx":le,"../../blogs/are-software-subscriptions-a-good-deal.jsx":ne,"../../blogs/are-you-addicted-how-apps-keep-you-scrolling.jsx":ae,"../../blogs/beginners-guide-backing-up-photos.jsx":re,"../../blogs/behind-scenes-software-update.jsx":ie,"../../blogs/beyond-bitcoin-simple-idea-blockchain.jsx":se,"../../blogs/biggest-misconceptions-about-being-a-developer.jsx":te,"../../blogs/choose-the-right-ai-model-2025.jsx":oe,"../../blogs/cookies-website-tracking-guide.jsx":ee,"../../blogs/day-in-life-website-developer.jsx":Z,"../../blogs/decoding-tech-job-titles-devops-ux-sre-pm.jsx":Y,"../../blogs/designer-vs-developer-who-builds-website.jsx":X,"../../blogs/digital-spring-cleaning-tidy-online-life.jsx":U,"../../blogs/from-idea-to-app-long-journey-of-a-simple-feature.jsx":Q,"../../blogs/how-netflix-spotify-know-what-you-like.jsx":K,"../../blogs/how-to-talk-to-ai-better-answers.jsx":J,"../../blogs/internets-memory-what-happens-when-website-deleted.jsx":G,"../../blogs/is-your-smart-device-listening.jsx":F,"../../blogs/laptop-buying-guide-normal-people.jsx":q,"../../blogs/open-source-hidden-collaboration.jsx":S,"../../blogs/read-before-you-post-digital-footprint-permanence.jsx":H,"../../blogs/real-world-ai-learning-by-doing-across-stacks.jsx":z,"../../blogs/right-to-repair-why-cant-you-fix-your-own-phone.jsx":$,"../../blogs/spotting-online-scams-phishing-guide.jsx":M,"../../blogs/tech-behind-summer-blockbuster-more-than-cgi.jsx":C,"../../blogs/the-cloud-is-someone-elses-computer.jsx":B,"../../blogs/the-dignity-stack-for-india.jsx":W,"../../blogs/the-uber-effect-how-an-app-disrupts-industries.jsx":N,"../../blogs/travel-smarter-tech-on-vacation.jsx":V,"../../blogs/what-does-beta-actually-mean-peek-into-software-testing.jsx":A,"../../blogs/what-happens-when-you-type-a-web-address.jsx":T,"../../blogs/why-apps-feel-slow-speed-vs-features.jsx":R,"../../blogs/why-internet-slow-on-the-beach-vacation-tech-woes.jsx":I,"../../blogs/why-website-projects-cost-more-than-you-think.jsx":O,"../../blogs/why-websites-look-weird-on-phone-responsive-design.jsx":L,"../../blogs/wifi-vs-internet-difference-and-why-it-matters.jsx":D,"../../blogs/your-data-is-valuable-privacy-settings-social-media.jsx":P,"../../blogs/your-password-is-terrible.jsx":k});function _e(){return Object.entries(c).map(([e,i])=>{const _=e.split("/").pop().replace(".jsx",""),r=(i==null?void 0:i.meta)||{};return{slug:r.slug||_,title:r.title||_,date:r.date||"1970-01-01"}}).sort((e,i)=>new Date(i.date)-new Date(e.date))}function ge(){var b;m();const{slug:e}=j(),i=g.useMemo(()=>_e(),[]),_=Object.keys(v).find(s=>s.endsWith(`/${e}.jsx`))||Object.keys(c).find(s=>{var p,x;return((x=(p=c[s])==null?void 0:p.meta)==null?void 0:x.slug)===e}),r=i.findIndex(s=>s.slug===e),a=r>0?i[r-1]:null,n=r>=0&&r<i.length-1?i[r+1]:null;if(!_||r===-1)return t.jsx(d.Wrapper,{children:t.jsxs(d.Main,{children:[t.jsx("h2",{children:"Post not found"}),t.jsxs("p",{children:[`We couldn't find "`,t.jsx("code",{children:e}),'". Check that file name and ',t.jsx("code",{children:"meta.slug"})," match."]}),t.jsx(l,{to:"/",className:"goBackLink",children:"← Back to all posts"})]})});const u=w.lazy(v[_]);return((b=window.history.state)==null?void 0:b.idx)>0,g.useEffect(()=>{window.scrollTo({top:0,behavior:"auto"})},[e]),t.jsx(d.Wrapper,{children:t.jsxs(d.Main,{children:[t.jsx("div",{className:"absolutePrev",children:a?t.jsx(l,{to:`/${a.slug}`,title:a.title,children:"Prev"}):null}),t.jsx("div",{className:"absoluteNext",children:n?t.jsx(l,{to:`/${n.slug}`,title:n.title,children:"Next"}):null}),t.jsx("div",{className:"mainBlogWrapper",children:t.jsx("div",{className:"blog",children:t.jsx(g.Suspense,{fallback:t.jsx(f,{sx:{position:"fixed",inset:0,display:"grid",placeItems:"center",background:"transparent"},children:t.jsx(y,{})}),children:t.jsx(u,{})})})}),t.jsxs("div",{className:"prevNextWrapper",children:[a?t.jsxs(l,{to:`/${a.slug}`,title:a.title,children:["Prev: ",a.title]}):null,n?t.jsxs(l,{to:`/${n.slug}`,title:n.title,children:["Next: ",n.title]}):null]}),t.jsxs("div",{className:"morePostsWrapper",children:[t.jsx("h3",{className:"morePostsHeading",children:"More posts"}),t.jsx("div",{className:"morePostsContent",children:i.filter(s=>s.slug!==e).slice(0,4).map(s=>t.jsxs(l,{to:`/${s.slug}`,className:"postLink",title:s.title,children:[t.jsx("div",{className:"postDate",children:E(s.date)}),t.jsx("div",{className:"postTitle",children:s.title})]},s.slug))})]})]})})}export{ge as default};
