import{d as s,u as k,r as u,j as o,M as C,N as S,f as D,_ as F,a as N,b as M,c as A,e as W,g as L,h as T,i as z,k as P,l as R,m as B,n as E,o as I,p as q,q as O,s as H,t as J,v as Y,w as K,x as U,y as $,z as G,A as Q,B as V,C as X,D as Z,E as ee,F as oe,G as re,H as ae,I as te,J as se,K as ie,L as ne,O as le,P as ce,Q as de,R as ge}from"./index-B42va_G0.js";const c={Wrapper:s.div`
        display: flex;
        justify-content: center;
        min-height: 100vh;
        padding: 24px 0 60px;
        max-width: 1000px;
        margin: auto;
        color: var(--text);
        background: transparent;
    `,Main:s.div`
        width: 100%;
        max-width: 1200px;
    `,Info:s.div`
        margin-bottom: 30px;

        h1 {
            color: var(--text);
        }
        p {
            color: var(--text);
            opacity: 0.95;
        }
        span {
            color: var(--muted);
            font-size: 12px;
        }
    `,Head:s.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        margin-bottom: 30px;

        position: relative;
        overflow: hidden;

        input {
            padding: 8px 50px 8px 15px;
            border-radius: 6px;
            background: var(--card);
            border: 1px solid var(--border);
            color: var(--text);
            width: 100%;
            outline: none;
            height: 50px;
            transition: border-color 0.25s var(--easing),
                box-shadow 0.25s var(--easing), background 0.25s var(--easing);
            &::placeholder {
                color: var(--muted);
            }
            &:focus {
                border-color: var(--accent);
                box-shadow: 0 0 0 3px var(--accent-soft);
            }
        }

        .clearIconWrapper {
            position: absolute;
            right: 0;
            height: 100%;
            width: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            color: var(--muted);
            transition: color 0.25s var(--easing),
                background 0.25s var(--easing);
            border-left: 1px solid var(--border);
            &:hover {
                color: var(--accent);
                background: var(--accent-soft);
            }
        }
    `,FilterWrapper:s.div`
        display: flex;
        justify-content: space-between;
        gap: 15px;
        margin: 10px 0 18px;
        align-items: center;
        flex-wrap: wrap;

        select {
            flex: 1 1 100px;
            background: var(--card);
            color: var(--text);
            height: 30px;
            padding: 0 8px;
            border-radius: 6px;
            border: 1px solid var(--border);
            transition: border-color 0.25s var(--easing),
                box-shadow 0.25s var(--easing), background 0.25s var(--easing);
            &:focus {
                border-color: var(--accent);
                box-shadow: 0 0 0 3px var(--accent-soft);
                outline: none;
            }
        }

        .clearFilterButton {
            padding: 3px 15px;
            border-radius: 6px;
            border: 1px solid var(--border);
            background: var(--card);
            cursor: pointer;
            color: var(--text);
            white-space: nowrap;
            height: 30px;
            transition: border-color 0.25s var(--easing),
                background 0.25s var(--easing), color 0.25s var(--easing);
            &:hover {
                border-color: var(--accent);
                color: var(--accent);
                background: var(--accent-soft);
            }
            &:focus-visible {
                outline: 3px solid var(--accent);
                outline-offset: 2px;
            }
        }
    `,CardsWrapper:s.div`
        display: flex;
        gap: 18px;
        margin-top: 16px;
        flex-wrap: wrap;
    `,Card:s.div`
        background: var(--card);
        border: 1px solid var(--border);
        border-radius: 16px;
        overflow: hidden;
        max-width: 300px;
        height: 450px;
        position: relative;
        transition: transform 0.2s var(--easing), box-shadow 0.2s var(--easing),
            border-color 0.2s var(--easing);
        flex: 1 1 300px;

        &:hover {
            transform: translateY(-3px);
            box-shadow: var(--shadow);
            border-color: var(--accent);
        }
    `,Cover:s.div`
        position: relative;
        height: 140px;
        background: var(--surface) center/cover no-repeat;
    `,TextWrapper:s.div`
        height: 420px;
        padding: 15px;
        color: var(--text);
    `,LinkDateWrapper:s.div`
        margin-bottom: 30px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        a {
            text-decoration: none;
            color: var(--accent);
            padding: 3px;
            border-bottom: 1px solid transparent;
            transition: border-color 0.25s var(--easing),
                background 0.25s var(--easing), color 0.25s var(--easing);
            &:hover {
                border-bottom: 1px solid var(--accent);
                background: var(--accent-soft);
                border-radius: 4px;
            }
            &:focus-visible {
                outline: 3px solid var(--accent);
                outline-offset: 2px;
            }
        }

        .date {
            font-size: 12px;
            color: var(--accent);
        }
    `,Title:s.h3`
        font-size: 18px;
        line-height: 1.35;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-bottom: 15px;
        color: var(--text);
    `,Meta:s.div`
        font-size: 12px;
        opacity: 0.8;
        color: var(--muted);
    `,Excerpt:s.p`
        font-size: 14px;
        opacity: 0.9;
        line-height: 1.5;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        color: var(--text);
    `,Tags:s.div`
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        margin-top: 4px;
    `,Tag:s.span`
        font-size: 12px;
        border: 1px solid var(--border);
        padding: 4px 8px;
        border-radius: 999px;
        background: var(--surface);
        color: var(--text);
        transition: border-color 0.25s var(--easing),
            background 0.25s var(--easing), color 0.25s var(--easing);
        &:hover {
            border-color: var(--accent);
            background: var(--accent-soft);
            color: var(--accent);
        }
    `},pe=Object.assign({"../../blogs/ai-101-how-you-already-use-it-every-day.jsx":ge,"../../blogs/are-software-subscriptions-a-good-deal.jsx":de,"../../blogs/are-you-addicted-how-apps-keep-you-scrolling.jsx":ce,"../../blogs/beginners-guide-backing-up-photos.jsx":le,"../../blogs/behind-scenes-software-update.jsx":ne,"../../blogs/beyond-bitcoin-simple-idea-blockchain.jsx":ie,"../../blogs/biggest-misconceptions-about-being-a-developer.jsx":se,"../../blogs/choose-the-right-ai-model-2025.jsx":te,"../../blogs/cookies-website-tracking-guide.jsx":ae,"../../blogs/day-in-life-website-developer.jsx":re,"../../blogs/decoding-tech-job-titles-devops-ux-sre-pm.jsx":oe,"../../blogs/designer-vs-developer-who-builds-website.jsx":ee,"../../blogs/digital-spring-cleaning-tidy-online-life.jsx":Z,"../../blogs/from-idea-to-app-long-journey-of-a-simple-feature.jsx":X,"../../blogs/how-netflix-spotify-know-what-you-like.jsx":V,"../../blogs/how-to-talk-to-ai-better-answers.jsx":Q,"../../blogs/internets-memory-what-happens-when-website-deleted.jsx":G,"../../blogs/is-your-smart-device-listening.jsx":$,"../../blogs/laptop-buying-guide-normal-people.jsx":U,"../../blogs/open-source-hidden-collaboration.jsx":K,"../../blogs/read-before-you-post-digital-footprint-permanence.jsx":Y,"../../blogs/real-world-ai-learning-by-doing-across-stacks.jsx":J,"../../blogs/right-to-repair-why-cant-you-fix-your-own-phone.jsx":H,"../../blogs/spotting-online-scams-phishing-guide.jsx":O,"../../blogs/tech-behind-summer-blockbuster-more-than-cgi.jsx":q,"../../blogs/the-cloud-is-someone-elses-computer.jsx":I,"../../blogs/the-dignity-stack-for-india.jsx":E,"../../blogs/the-uber-effect-how-an-app-disrupts-industries.jsx":B,"../../blogs/travel-smarter-tech-on-vacation.jsx":R,"../../blogs/what-does-beta-actually-mean-peek-into-software-testing.jsx":P,"../../blogs/what-happens-when-you-type-a-web-address.jsx":z,"../../blogs/why-apps-feel-slow-speed-vs-features.jsx":T,"../../blogs/why-internet-slow-on-the-beach-vacation-tech-woes.jsx":L,"../../blogs/why-website-projects-cost-more-than-you-think.jsx":W,"../../blogs/why-websites-look-weird-on-phone-responsive-design.jsx":A,"../../blogs/wifi-vs-internet-difference-and-why-it-matters.jsx":M,"../../blogs/your-data-is-valuable-privacy-settings-social-media.jsx":N,"../../blogs/your-password-is-terrible.jsx":F}),be=["January","February","March","April","May","June","July","August","September","October","November","December"];function xe(){return Object.entries(pe).map(([n,b])=>{const l=n.split("/").pop().replace(".jsx",""),i=b.meta||{},p=i.date||"1970-01-01",d=new Date(p);return{slug:i.slug||l,title:i.title||l,date:p,tags:i.tags||[],excerpt:i.excerpt||"",cover:i.cover||"",category:i.category||"",year:isNaN(d)?"":String(d.getFullYear()),monthNum:isNaN(d)?"":d.getMonth()+1}}).sort((n,b)=>new Date(b.date)-new Date(n.date))}function _e(){const[n,b]=k(),l=(n.get("q")||"").toLowerCase(),i=n.get("year")||"",p=n.get("month")||"",d=n.get("category")||"",v=n.get("tag")||"",f=n.get("sort")||"new",g=(e,t)=>{const r=new URLSearchParams(n);t?r.set(e,t):r.delete(e),b(r,{replace:!1})},x=u.useMemo(()=>xe(),[]),w=u.useMemo(()=>{const e=Array.from(new Set(x.map(a=>a.year).filter(Boolean))).sort((a,_)=>_-a),t=Array.from(new Set(x.map(a=>a.category).filter(Boolean))).sort((a,_)=>a.localeCompare(_)),r=Array.from(new Set(x.flatMap(a=>a.tags||[]).filter(Boolean))).sort((a,_)=>a.localeCompare(_));return{years:e,categories:t,tagsAll:r}},[x]),h=u.useMemo(()=>{let e=x;return l&&(e=e.filter(r=>r.title.toLowerCase().includes(l)||r.excerpt.toLowerCase().includes(l)||(r.category||"").toLowerCase().includes(l)||r.tags.some(a=>a.toLowerCase().includes(l)))),i&&(e=e.filter(r=>r.year===i)),p&&(e=e.filter(r=>String(r.monthNum)===p)),d&&(e=e.filter(r=>r.category===d)),v&&(e=e.filter(r=>r.tags.includes(v))),[...e].sort((r,a)=>f==="old"?new Date(r.date)-new Date(a.date):new Date(a.date)-new Date(r.date))},[l,i,p,d,v,f,x]),m=u.useRef(null),y=()=>{var e;g("q",""),(e=m.current)==null||e.focus()},j=()=>{const e=new URLSearchParams(n);["q","year","month","category","tag"].forEach(t=>e.delete(t)),b(e,{replace:!1})};return o.jsx(c.Wrapper,{children:o.jsxs(c.Main,{children:[o.jsxs(c.Info,{children:[o.jsx("h1",{children:"No-jargon tech for normal humans"}),o.jsx("p",{children:"Short reads from a developer: how the internet really works, what to buy, and how to stay safe."}),o.jsx("span",{children:'Tip: Try searching "Privacy", "Networking", or "UX".'})]}),o.jsxs(c.Head,{children:[o.jsx("input",{ref:m,value:l,onChange:e=>g("q",e.target.value),placeholder:"Search posts, tags…","aria-label":"Search posts"}),l&&o.jsx("div",{type:"button",className:"clearIconWrapper","aria-label":"Clear search",onClick:y,onKeyDown:e=>{(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),y())},role:"button",tabIndex:0,children:o.jsx(C,{size:20})})]}),o.jsxs(c.FilterWrapper,{children:[o.jsxs("select",{"aria-label":"Filter by Year",value:i,onChange:e=>g("year",e.target.value),children:[o.jsx("option",{value:"",children:"All Years"}),w.years.map(e=>o.jsx("option",{value:e,children:e},e))]}),o.jsxs("select",{"aria-label":"Filter by Month",value:p,onChange:e=>g("month",e.target.value),children:[o.jsx("option",{value:"",children:"All Months"}),be.map((e,t)=>o.jsx("option",{value:String(t+1),children:e},e))]}),o.jsxs("select",{"aria-label":"Filter by Category",value:d,onChange:e=>g("category",e.target.value),children:[o.jsx("option",{value:"",children:"All Categories"}),w.categories.map(e=>o.jsx("option",{value:e,children:e},e))]}),o.jsxs("select",{"aria-label":"Filter by Tag",value:v,onChange:e=>g("tag",e.target.value),children:[o.jsx("option",{value:"",children:"All Tags"}),w.tagsAll.map(e=>o.jsx("option",{value:e,children:e},e))]}),o.jsxs("select",{"aria-label":"Sort order",value:f,onChange:e=>g("sort",e.target.value),children:[o.jsx("option",{value:"new",children:"Newest first"}),o.jsx("option",{value:"old",children:"Oldest first"})]}),(l||i||p||d||v)&&o.jsx("button",{onClick:j,className:"clearFilterButton",children:"Clear filters"})]}),o.jsxs("div",{style:{opacity:.8,marginBottom:8},children:[h.length," post",h.length!==1?"s":""," found"]}),o.jsx("br",{}),h.length>0?o.jsx(o.Fragment,{children:o.jsx(c.CardsWrapper,{children:h.map(e=>o.jsx(c.Card,{style:{textDecoration:"none",color:"inherit"},children:o.jsxs("article",{style:{border:"1px solid rgba(255,255,255,0.1)",borderRadius:16,overflow:"hidden",background:"rgba(255,255,255,0.03)"},children:[o.jsx(c.Cover,{style:{background:`#111 url(${e.cover}) center/cover no-repeat`}}),o.jsxs(c.TextWrapper,{children:[o.jsx(c.Title,{title:e.title,children:e.title}),o.jsxs(c.LinkDateWrapper,{children:[o.jsx(S,{to:`/${e.slug}`,children:"View Blog"}),o.jsx("div",{className:"date",children:D(e.date)})]}),o.jsx(c.Excerpt,{title:e.excerpt,children:e.excerpt}),o.jsxs("div",{children:[e.category&&o.jsx("div",{style:{fontSize:12,opacity:.95,border:"1px solid rgba(255,255,255,.18)",padding:"4px 8px",borderRadius:999,background:"rgba(255,255,255,0.04)",margin:"15px 0",textAlign:"center"},children:e.category}),o.jsx("div",{style:{display:"flex",gap:"5px",flexWrap:"wrap"},children:e.tags.map(t=>o.jsxs("span",{title:`Filter by #${t}`,role:"button",tabIndex:0,onClick:()=>g("tag",t),onKeyDown:r=>{(r.key==="Enter"||r.key===" ")&&(r.preventDefault(),g("tag",t))},style:{fontSize:12,opacity:.9,border:"1px solid rgba(255,255,255,.12)",padding:"3px 15px",borderRadius:"6px",cursor:"pointer",whiteSpace:"nowrap"},children:["#",t]},t))})]})]})]})},e.slug))})}):o.jsx(o.Fragment,{children:o.jsx("h1",{children:"No Posts Found"})})]})})}export{_e as default};
