import{f as w,_ as j,a as y,b as O,c as P,d as k,e as C,g as z,h as E,i as S,j as D,k as L,l as W,m as N,n as M,o as R,p as T,q as H,r as q,s as I,t as B,u as F,v as V,w as K,x as U,y as A,z as G,A as Y,B as $,C as J}from"./format-BO0JKHlK.js";import{d as n,R as d,u as Q,r as u,j as s,N as X}from"./index-DPMN5tv2.js";const c={Wrapper:n.div`
        display: flex;
        justify-content: center;
        min-height: 100vh;
        padding: 24px 0 60px;
    `,Main:n.div`
        width: 100%;
        max-width: 1200px;
        padding: 0 18px;
    `,Head:n.div`
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
    `,CardsWrapper:n.div`
        display: flex;
        gap: 18px;
        margin-top: 16px;
        flex-wrap: wrap;
    `,Card:n.div`
        border: 1px solid rgba(255, 255, 255, 0.1);
        background: rgba(255, 255, 255, 0.03);
        border-radius: 16px;
        overflow: hidden;
        transition: transform 0.2s ease, box-shadow 0.2s ease;
        &:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
        }
        flex: 1 1 300px;
    `,Cover:n.div`
        /* border: 1px solid #f00; */
        height: 160px;
        background: #111 center/cover no-repeat;
    `,TextWrapper:n.div`
        padding: 15px;
    `,LinkDateWrapper:n.div`
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
    `,Title:n.h3`
        font-size: 18px;
        line-height: 1.35;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-bottom: 15px;
    `,Meta:n.div`
        font-size: 12px;
        opacity: 0.8;
    `,Excerpt:n.p`
        font-size: 14px;
        opacity: 0.9;
        line-height: 1.5;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
    `,Tags:n.div`
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        margin-top: 4px;
    `,Tag:n.span`
        font-size: 12px;
        opacity: 0.9;
        border: 1px solid rgba(255, 255, 255, 0.12);
        padding: 4px 8px;
        border-radius: 999px;
    `};var v={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},h=d.createContext&&d.createContext(v),Z=["attr","size","title"];function ee(e,r){if(e==null)return{};var t=te(e,r),i,l;if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(l=0;l<p.length;l++)i=p[l],!(r.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(e,i)&&(t[i]=e[i])}return t}function te(e,r){if(e==null)return{};var t={};for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){if(r.indexOf(i)>=0)continue;t[i]=e[i]}return t}function b(){return b=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},b.apply(this,arguments)}function f(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);r&&(i=i.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),t.push.apply(t,i)}return t}function _(e){for(var r=1;r<arguments.length;r++){var t=arguments[r]!=null?arguments[r]:{};r%2?f(Object(t),!0).forEach(function(i){re(e,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):f(Object(t)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))})}return e}function re(e,r,t){return r=ie(r),r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function ie(e){var r=oe(e,"string");return typeof r=="symbol"?r:r+""}function oe(e,r){if(typeof e!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var i=t.call(e,r);if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(e)}function m(e){return e&&e.map((r,t)=>d.createElement(r.tag,_({key:t},r.attr),m(r.child)))}function se(e){return r=>d.createElement(ae,b({attr:_({},e.attr)},r),m(e.child))}function ae(e){var r=t=>{var{attr:i,size:l,title:p}=e,g=ee(e,Z),o=l||t.size||"1em",a;return t.className&&(a=t.className),e.className&&(a=(a?a+" ":"")+e.className),d.createElement("svg",b({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,i,g,{className:a,style:_(_({color:e.color||t.color},t.style),e.style),height:o,width:o,xmlns:"http://www.w3.org/2000/svg"}),p&&d.createElement("title",null,p),e.children)};return h!==void 0?d.createElement(h.Consumer,null,t=>r(t)):r(v)}function ne(e){return se({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12 1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"},child:[]}]})(e)}const le=Object.assign({"../../blogs/ai-101-how-you-use-it-every-day.jsx":J,"../../blogs/are-you-addicted-how-apps-keep-you-scrolling.jsx":$,"../../blogs/beginners-guide-backing-up-photos.jsx":Y,"../../blogs/behind-scenes-software-update.jsx":G,"../../blogs/beyond-bitcoin-simple-idea-blockchain.jsx":A,"../../blogs/biggest-misconceptions-about-being-a-developer.jsx":U,"../../blogs/cookies-website-tracking-guide.jsx":K,"../../blogs/day-in-life-website-developer.jsx":V,"../../blogs/decoding-tech-job-titles-devops-ux-sre-pm.jsx":F,"../../blogs/designer-vs-developer-who-builds-website.jsx":B,"../../blogs/digital-spring-cleaning-tidy-online-life.jsx":I,"../../blogs/from-idea-to-app-long-journey-of-a-simple-feature.jsx":q,"../../blogs/how-netflix-spotify-know-what-you-like.jsx":H,"../../blogs/internets-memory-what-happens-when-website-deleted.jsx":T,"../../blogs/is-your-smart-device-listening.jsx":R,"../../blogs/open-source-hidden-collaboration.jsx":M,"../../blogs/read-before-you-post-digital-footprint-permanence.jsx":N,"../../blogs/spotting-online-scams-phishing-guide.jsx":W,"../../blogs/tech-behind-summer-blockbuster-more-than-cgi.jsx":L,"../../blogs/the-cloud-is-someone-elses-computer.jsx":D,"../../blogs/travel-smarter-tech-on-vacation.jsx":S,"../../blogs/what-does-beta-mean-software-testing.jsx":E,"../../blogs/what-happens-when-you-type-a-web-address.jsx":z,"../../blogs/why-apps-feel-slow-speed-vs-features.jsx":C,"../../blogs/why-internet-slow-on-the-beach-vacation-tech-woes.jsx":k,"../../blogs/why-website-projects-cost-more-than-you-think.jsx":P,"../../blogs/why-websites-look-weird-on-phone-responsive-design.jsx":O,"../../blogs/your-data-is-valuable-privacy-settings-social-media.jsx":y,"../../blogs/your-password-is-terrible.jsx":j});function ce(){return Object.entries(le).map(([e,r])=>{const t=e.split("/").pop().replace(".jsx",""),i=r.meta||{};return{slug:i.slug||t,title:i.title||t,date:i.date||"1970-01-01",tags:i.tags||[],excerpt:i.excerpt||"",cover:i.cover||""}}).sort((e,r)=>new Date(r.date)-new Date(e.date))}function ge(){const[e,r]=Q(),t=(e.get("q")||"").toLowerCase(),i=u.useMemo(()=>ce(),[]),l=u.useMemo(()=>t?i.filter(o=>o.title.toLowerCase().includes(t)||o.excerpt.toLowerCase().includes(t)||o.tags.some(a=>a.toLowerCase().includes(t))):i,[t,i]),p=u.useRef(null),g=()=>{var a;const o=new URLSearchParams(e);o.delete("q"),r(o,{replace:!1}),(a=p.current)==null||a.focus()};return s.jsx(c.Wrapper,{children:s.jsxs(c.Main,{children:[s.jsxs(c.Head,{children:[s.jsx("input",{ref:p,value:t,onChange:o=>{const a=o.target.value,x=new URLSearchParams(e);a?x.set("q",a):x.delete("q"),r(x,{replace:!1})},placeholder:"Search posts, tags…"}),t&&s.jsx("div",{type:"button",className:"clearIconWrapper","aria-label":"Clear search",onClick:g,onKeyDown:o=>{(o.key==="Enter"||o.key===" ")&&(o.preventDefault(),g())},children:s.jsx(ne,{size:20})})]}),l.length>0?s.jsx(s.Fragment,{children:s.jsx(c.CardsWrapper,{children:l.map(o=>s.jsx(c.Card,{style:{textDecoration:"none",color:"inherit"},children:s.jsx("article",{style:{border:"1px solid rgba(255,255,255,0.1)",borderRadius:16,overflow:"hidden",background:"rgba(255,255,255,0.03)"},children:s.jsxs(c.TextWrapper,{children:[s.jsx(c.Title,{title:o.title,children:o.title}),s.jsxs(c.LinkDateWrapper,{children:[s.jsx(X,{to:`/${o.slug}`,children:"View Blog"}),s.jsx("div",{className:"date",children:w(o.date)})]}),s.jsx(c.Excerpt,{title:o.excerpt,children:o.excerpt}),s.jsx("div",{style:{marginTop:8,display:"flex",flexWrap:"wrap",gap:6},children:o.tags.map(a=>s.jsxs("span",{style:{fontSize:12,opacity:.9,border:"1px solid rgba(255,255,255,.12)",padding:"4px 8px",borderRadius:999},children:["#",a]},a))})]})})},o.slug))})}):s.jsx(s.Fragment,{children:s.jsx("h1",{children:"No Posts Found"})})]})})}export{ge as default};
