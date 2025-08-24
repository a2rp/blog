import{f as z,_ as M,a as E,b as F,c as W,d as L,e as A,g as T,h as B,i as I,j as R,k as H,l as q,m as V,n as Y,o as J,p as K,q as U,r as G,s as $,t as X,u as Q,v as Z,w as ee,x as te,y as re,z as ae,A as oe,B as ie,C as se,D as ne,E as le,F as ce,G as pe,H as de}from"./format-DOf5QwGZ.js";import{d as g,R as u,u as ge,r as m,j as a,N as be}from"./index-BFEC8LPM.js";const b={Wrapper:g.div`
        /* border: 1px solid #f00; */
        display: flex;
        justify-content: center;
        min-height: 100vh;
        padding: 24px 0 60px;
        max-width: 1000px;
        margin: auto;
    `,Main:g.div`
        width: 100%;
        max-width: 1200px;
        padding: 0 18px;
    `,Info:g.div`
        margin-bottom: 30px;
        h1 {
        }
        p {
        }
        span {
        }
    `,Head:g.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        margin: 6px 0 14px;

        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 12;

        margin-bottom: 30px;

        position: relative;
        overflow: hidden;

        input {
            padding: 8px 50px 8px 15px;
            border-radius: 6px;
            background: rgba(255, 255, 255, 0.06);
            border: 1px solid rgba(255, 255, 255, 0.1);
            color: inherit;
            width: 100%;
            outline: none;
            height: 50px;
        }

        .clearIconWrapper {
            /* border: 1px solid #fff; */
            position: absolute;
            right: 0;
            height: 100%;
            width: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
        }
    `,FilterWrapper:g.div`
        /* border: 1px solid #f00; */
        display: flex;
        /* grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); */
        justify-content: space-between;
        gap: 15px;
        margin: 10px 0 18px;
        align-items: center;
        flex-wrap: wrap;

        select {
            flex: 1 1 100px;
            background-color: #000;
            color: #aaa;
            height: 30px;
            padding: 0 5px;
            border-radius: 6px;
        }

        .clearFilterButton {
            padding: 3px 15px;
            border-radius: 6px;
            border: 1px solid rgba(255, 255, 255, 0.18);
            background: rgba(255, 255, 255, 0.06);
            cursor: pointer;
            color: #aaa;
            white-space: nowrap;
            height: 30px;
        }
    `,CardsWrapper:g.div`
        display: flex;
        gap: 18px;
        margin-top: 16px;
        flex-wrap: wrap;
    `,Card:g.div`
        /* border: 1px solid rgba(255, 255, 255, 0.1); */
        /* border: 1px solid #f00; */
        background: rgba(255, 255, 255, 0.03);
        border-radius: 16px;
        overflow: hidden;
        max-width: 300px;
        height: 320px;
        position: relative;
        transition: transform 0.2s ease, box-shadow 0.2s ease;
        &:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
        }
        flex: 1 1 300px;
    `,Cover:g.div`
        /* border: 1px solid #f00; */
        position: relative;
        height: 320px;
        background: #111 center/cover no-repeat;
    `,TextWrapper:g.div`
        /* border: 1px solid #f00; */
        height: 320px;
        padding: 15px;
    `,LinkDateWrapper:g.div`
        margin-bottom: 30px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        a {
            text-decoration: none;
            color: lightseagreen;
            padding: 3px;
            &:hover {
                border-bottom: 1px solid lightcoral;
            }
        }

        .date {
            font-size: 12px;
            color: lightcoral;
        }
    `,Title:g.h3`
        font-size: 18px;
        line-height: 1.35;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-bottom: 15px;
    `,Meta:g.div`
        font-size: 12px;
        opacity: 0.8;
    `,Excerpt:g.p`
        font-size: 14px;
        opacity: 0.9;
        line-height: 1.5;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
    `,Tags:g.div`
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        margin-top: 4px;
    `,Tag:g.span`
        font-size: 12px;
        opacity: 0.9;
        border: 1px solid rgba(255, 255, 255, 0.12);
        padding: 4px 8px;
        border-radius: 999px;
    `};var S={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},k=u.createContext&&u.createContext(S),xe=["attr","size","title"];function ue(e,o){if(e==null)return{};var r=he(e,o),i,n;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)i=l[n],!(o.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}function he(e,o){if(e==null)return{};var r={};for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){if(o.indexOf(i)>=0)continue;r[i]=e[i]}return r}function y(){return y=Object.assign?Object.assign.bind():function(e){for(var o=1;o<arguments.length;o++){var r=arguments[o];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},y.apply(this,arguments)}function P(e,o){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);o&&(i=i.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),r.push.apply(r,i)}return r}function w(e){for(var o=1;o<arguments.length;o++){var r=arguments[o]!=null?arguments[o]:{};o%2?P(Object(r),!0).forEach(function(i){_e(e,i,r[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):P(Object(r)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(r,i))})}return e}function _e(e,o,r){return o=fe(o),o in e?Object.defineProperty(e,o,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[o]=r,e}function fe(e){var o=ve(e,"string");return typeof o=="symbol"?o:o+""}function ve(e,o){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var i=r.call(e,o);if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(o==="string"?String:Number)(e)}function N(e){return e&&e.map((o,r)=>u.createElement(o.tag,w({key:r},o.attr),N(o.child)))}function me(e){return o=>u.createElement(ye,y({attr:w({},e.attr)},o),N(e.child))}function ye(e){var o=r=>{var{attr:i,size:n,title:l}=e,x=ue(e,xe),h=n||r.size||"1em",p;return r.className&&(p=r.className),e.className&&(p=(p?p+" ":"")+e.className),u.createElement("svg",y({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,i,x,{className:p,style:w(w({color:e.color||r.color},r.style),e.style),height:h,width:h,xmlns:"http://www.w3.org/2000/svg"}),l&&u.createElement("title",null,l),e.children)};return k!==void 0?u.createElement(k.Consumer,null,r=>o(r)):o(S)}function we(e){return me({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12 1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"},child:[]}]})(e)}const je=Object.assign({"../../blogs/ai-101-how-you-already-use-it-every-day.jsx":de,"../../blogs/are-software-subscriptions-a-good-deal.jsx":pe,"../../blogs/are-you-addicted-how-apps-keep-you-scrolling.jsx":ce,"../../blogs/beginners-guide-backing-up-photos.jsx":le,"../../blogs/behind-scenes-software-update.jsx":ne,"../../blogs/beyond-bitcoin-simple-idea-blockchain.jsx":se,"../../blogs/biggest-misconceptions-about-being-a-developer.jsx":ie,"../../blogs/cookies-website-tracking-guide.jsx":oe,"../../blogs/day-in-life-website-developer.jsx":ae,"../../blogs/decoding-tech-job-titles-devops-ux-sre-pm.jsx":re,"../../blogs/designer-vs-developer-who-builds-website.jsx":te,"../../blogs/digital-spring-cleaning-tidy-online-life.jsx":ee,"../../blogs/from-idea-to-app-long-journey-of-a-simple-feature.jsx":Z,"../../blogs/how-netflix-spotify-know-what-you-like.jsx":Q,"../../blogs/internets-memory-what-happens-when-website-deleted.jsx":X,"../../blogs/is-your-smart-device-listening.jsx":$,"../../blogs/laptop-buying-guide-normal-people.jsx":G,"../../blogs/open-source-hidden-collaboration.jsx":U,"../../blogs/read-before-you-post-digital-footprint-permanence.jsx":K,"../../blogs/right-to-repair-why-cant-you-fix-your-own-phone.jsx":J,"../../blogs/spotting-online-scams-phishing-guide.jsx":Y,"../../blogs/tech-behind-summer-blockbuster-more-than-cgi.jsx":V,"../../blogs/the-cloud-is-someone-elses-computer.jsx":q,"../../blogs/the-uber-effect-how-an-app-disrupts-industries.jsx":H,"../../blogs/travel-smarter-tech-on-vacation.jsx":R,"../../blogs/what-does-beta-actually-mean-peek-into-software-testing.jsx":I,"../../blogs/what-happens-when-you-type-a-web-address.jsx":B,"../../blogs/why-apps-feel-slow-speed-vs-features.jsx":T,"../../blogs/why-internet-slow-on-the-beach-vacation-tech-woes.jsx":A,"../../blogs/why-website-projects-cost-more-than-you-think.jsx":L,"../../blogs/why-websites-look-weird-on-phone-responsive-design.jsx":W,"../../blogs/wifi-vs-internet-difference-and-why-it-matters.jsx":F,"../../blogs/your-data-is-valuable-privacy-settings-social-media.jsx":E,"../../blogs/your-password-is-terrible.jsx":M}),Oe=["January","February","March","April","May","June","July","August","September","October","November","December"];function Ce(){return Object.entries(je).map(([e,o])=>{const r=e.split("/").pop().replace(".jsx",""),i=o.meta||{},n=i.date||"1970-01-01",l=new Date(n);return{slug:i.slug||r,title:i.title||r,date:n,tags:i.tags||[],excerpt:i.excerpt||"",cover:i.cover||"",category:i.category||"",year:isNaN(l)?"":String(l.getFullYear()),monthNum:isNaN(l)?"":l.getMonth()+1}}).sort((e,o)=>new Date(o.date)-new Date(e.date))}function Se(){const[e,o]=ge(),r=(e.get("q")||"").toLowerCase(),i=e.get("year")||"",n=e.get("month")||"",l=e.get("category")||"",x=e.get("tag")||"",h=e.get("sort")||"new",p=(t,d)=>{const s=new URLSearchParams(e);d?s.set(t,d):s.delete(t),o(s,{replace:!1})},_=m.useMemo(()=>Ce(),[]),j=m.useMemo(()=>{const t=Array.from(new Set(_.map(c=>c.year).filter(Boolean))).sort((c,f)=>f-c),d=Array.from(new Set(_.map(c=>c.category).filter(Boolean))).sort((c,f)=>c.localeCompare(f)),s=Array.from(new Set(_.flatMap(c=>c.tags||[]).filter(Boolean))).sort((c,f)=>c.localeCompare(f));return{years:t,categories:d,tagsAll:s}},[_]),v=m.useMemo(()=>{let t=_;return r&&(t=t.filter(s=>s.title.toLowerCase().includes(r)||s.excerpt.toLowerCase().includes(r)||(s.category||"").toLowerCase().includes(r)||s.tags.some(c=>c.toLowerCase().includes(r)))),i&&(t=t.filter(s=>s.year===i)),n&&(t=t.filter(s=>String(s.monthNum)===n)),l&&(t=t.filter(s=>s.category===l)),x&&(t=t.filter(s=>s.tags.includes(x))),[...t].sort((s,c)=>h==="old"?new Date(s.date)-new Date(c.date):new Date(c.date)-new Date(s.date))},[r,i,n,l,x,h,_]),O=m.useRef(null),C=()=>{var t;p("q",""),(t=O.current)==null||t.focus()},D=()=>{const t=new URLSearchParams(e);["q","year","month","category","tag"].forEach(d=>t.delete(d)),o(t,{replace:!1})};return a.jsx(b.Wrapper,{children:a.jsxs(b.Main,{children:[a.jsxs(b.Info,{children:[a.jsx("h1",{children:"No-jargon tech for normal humans"}),a.jsx("p",{children:"Short reads from a developer: how the internet really works, what to buy, and how to stay safe."}),a.jsx("span",{children:'Tip: Try searching "Privacy", "Networking", or "UX".'})]}),a.jsxs(b.Head,{children:[a.jsx("input",{ref:O,value:r,onChange:t=>p("q",t.target.value),placeholder:"Search posts, tags…","aria-label":"Search posts"}),r&&a.jsx("div",{type:"button",className:"clearIconWrapper","aria-label":"Clear search",onClick:C,onKeyDown:t=>{(t.key==="Enter"||t.key===" ")&&(t.preventDefault(),C())},role:"button",tabIndex:0,children:a.jsx(we,{size:20})})]}),a.jsxs(b.FilterWrapper,{children:[a.jsxs("select",{"aria-label":"Filter by Year",value:i,onChange:t=>p("year",t.target.value),children:[a.jsx("option",{value:"",children:"All Years"}),j.years.map(t=>a.jsx("option",{value:t,children:t},t))]}),a.jsxs("select",{"aria-label":"Filter by Month",value:n,onChange:t=>p("month",t.target.value),children:[a.jsx("option",{value:"",children:"All Months"}),Oe.map((t,d)=>a.jsx("option",{value:String(d+1),children:t},t))]}),a.jsxs("select",{"aria-label":"Filter by Category",value:l,onChange:t=>p("category",t.target.value),children:[a.jsx("option",{value:"",children:"All Categories"}),j.categories.map(t=>a.jsx("option",{value:t,children:t},t))]}),a.jsxs("select",{"aria-label":"Filter by Tag",value:x,onChange:t=>p("tag",t.target.value),children:[a.jsx("option",{value:"",children:"All Tags"}),j.tagsAll.map(t=>a.jsx("option",{value:t,children:t},t))]}),a.jsxs("select",{"aria-label":"Sort order",value:h,onChange:t=>p("sort",t.target.value),children:[a.jsx("option",{value:"new",children:"Newest first"}),a.jsx("option",{value:"old",children:"Oldest first"})]}),(r||i||n||l||x)&&a.jsx("button",{onClick:D,className:"clearFilterButton",children:"Clear filters"})]}),a.jsxs("div",{style:{opacity:.8,marginBottom:8},children:[v.length," post",v.length!==1?"s":""," found"]}),a.jsx("br",{}),v.length>0?a.jsx(a.Fragment,{children:a.jsx(b.CardsWrapper,{children:v.map(t=>a.jsx(b.Card,{style:{textDecoration:"none",color:"inherit"},children:a.jsx("article",{style:{border:"1px solid rgba(255,255,255,0.1)",borderRadius:16,overflow:"hidden",background:"rgba(255,255,255,0.03)"},children:a.jsxs(b.TextWrapper,{children:[a.jsx(b.Title,{title:t.title,children:t.title}),a.jsxs(b.LinkDateWrapper,{children:[a.jsx(be,{to:`/${t.slug}`,children:"View Blog"}),a.jsx("div",{className:"date",children:z(t.date)})]}),a.jsx(b.Excerpt,{title:t.excerpt,children:t.excerpt}),a.jsxs("div",{children:[t.category&&a.jsx("div",{style:{fontSize:12,opacity:.95,border:"1px solid rgba(255,255,255,.18)",padding:"4px 8px",borderRadius:999,background:"rgba(255,255,255,0.04)",margin:"15px 0",textAlign:"center"},children:t.category}),a.jsx("div",{style:{display:"flex",gap:"5px",flexWrap:"wrap"},children:t.tags.map(d=>a.jsxs("span",{title:`Filter by #${d}`,role:"button",tabIndex:0,onClick:()=>p("tag",d),onKeyDown:s=>{(s.key==="Enter"||s.key===" ")&&(s.preventDefault(),p("tag",d))},style:{fontSize:12,opacity:.9,border:"1px solid rgba(255,255,255,.12)",padding:"3px 15px",borderRadius:"6px",cursor:"pointer",whiteSpace:"nowrap"},children:["#",d]},d))})]})]})})},t.slug))})}):a.jsx(a.Fragment,{children:a.jsx("h1",{children:"No Posts Found"})})]})})}export{Se as default};
