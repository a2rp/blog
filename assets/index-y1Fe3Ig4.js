import{f as y,_ as j,a as O,b as _,c as P}from"./format-BXIPQUU4.js";import{d as s,R as d,u as C,r as b,j as a,N as z}from"./index-B19SVUgE.js";const c={Wrapper:s.div`
        display: flex;
        justify-content: center;
        min-height: 100vh;
        padding: 24px 0 60px;
    `,Main:s.div`
        width: 100%;
        max-width: 1200px;
        padding: 0 18px;
    `,Head:s.div`
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
    `,CardsWrapper:s.div`
        display: flex;
        gap: 18px;
        margin-top: 16px;
        flex-wrap: wrap;
    `,Card:s.div`
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
    `,Cover:s.div`
        /* border: 1px solid #f00; */
        height: 160px;
        background: #111 center/cover no-repeat;
    `,TextWrapper:s.div`
        padding: 15px;
    `,LinkDateWrapper:s.div`
        margin-bottom: 30px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        a {
            text-decoration: none;
            color: orangered;
            &:hover {
                text-decoration: underline;
            }
        }

        .date {
            font-size: 12px;
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
    `,Meta:s.div`
        font-size: 12px;
        opacity: 0.8;
    `,Excerpt:s.p`
        font-size: 14px;
        opacity: 0.9;
        line-height: 1.5;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
    `,Tags:s.div`
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        margin-top: 4px;
    `,Tag:s.span`
        font-size: 12px;
        opacity: 0.9;
        border: 1px solid rgba(255, 255, 255, 0.12);
        padding: 4px 8px;
        border-radius: 999px;
    `};var v={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},h=d.createContext&&d.createContext(v),k=["attr","size","title"];function E(e,r){if(e==null)return{};var t=S(e,r),n,l;if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(l=0;l<p.length;l++)n=p[l],!(r.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}function S(e,r){if(e==null)return{};var t={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(r.indexOf(n)>=0)continue;t[n]=e[n]}return t}function x(){return x=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},x.apply(this,arguments)}function m(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),t.push.apply(t,n)}return t}function f(e){for(var r=1;r<arguments.length;r++){var t=arguments[r]!=null?arguments[r]:{};r%2?m(Object(t),!0).forEach(function(n){D(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}function D(e,r,t){return r=L(r),r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function L(e){var r=W(e,"string");return typeof r=="symbol"?r:r+""}function W(e,r){if(typeof e!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var n=t.call(e,r);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(e)}function w(e){return e&&e.map((r,t)=>d.createElement(r.tag,f({key:t},r.attr),w(r.child)))}function N(e){return r=>d.createElement(M,x({attr:f({},e.attr)},r),w(e.child))}function M(e){var r=t=>{var{attr:n,size:l,title:p}=e,u=E(e,k),i=l||t.size||"1em",o;return t.className&&(o=t.className),e.className&&(o=(o?o+" ":"")+e.className),d.createElement("svg",x({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,n,u,{className:o,style:f(f({color:e.color||t.color},t.style),e.style),height:i,width:i,xmlns:"http://www.w3.org/2000/svg"}),p&&d.createElement("title",null,p),e.children)};return h!==void 0?d.createElement(h.Consumer,null,t=>r(t)):r(v)}function R(e){return N({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12 1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"},child:[]}]})(e)}const T=Object.assign({"../../blogs/account-security-basics.jsx":P,"../../blogs/fix-slow-home-wifi.jsx":_,"../../blogs/frontend-pre-deploy-checklist.jsx":O,"../../blogs/kickoff-tech-blog-2025.jsx":j});function H(){return Object.entries(T).map(([e,r])=>{const t=e.split("/").pop().replace(".jsx",""),n=r.meta||{};return{slug:n.slug||t,title:n.title||t,date:n.date||"1970-01-01",tags:n.tags||[],excerpt:n.excerpt||"",cover:n.cover||""}}).sort((e,r)=>new Date(r.date)-new Date(e.date))}function F(){const[e,r]=C(),t=(e.get("q")||"").toLowerCase(),n=b.useMemo(()=>H(),[]),l=b.useMemo(()=>t?n.filter(i=>i.title.toLowerCase().includes(t)||i.excerpt.toLowerCase().includes(t)||i.tags.some(o=>o.toLowerCase().includes(t))):n,[t,n]),p=b.useRef(null),u=()=>{var o;const i=new URLSearchParams(e);i.delete("q"),r(i,{replace:!1}),(o=p.current)==null||o.focus()};return a.jsx(c.Wrapper,{children:a.jsxs(c.Main,{children:[a.jsxs(c.Head,{children:[a.jsx("input",{ref:p,value:t,onChange:i=>{const o=i.target.value,g=new URLSearchParams(e);o?g.set("q",o):g.delete("q"),r(g,{replace:!1})},placeholder:"Search posts, tags…"}),t&&a.jsx("div",{type:"button",className:"clearIconWrapper","aria-label":"Clear search",onClick:u,onKeyDown:i=>{(i.key==="Enter"||i.key===" ")&&(i.preventDefault(),u())},children:a.jsx(R,{size:20})})]}),l.length>0?a.jsx(a.Fragment,{children:a.jsx(c.CardsWrapper,{children:l.map(i=>a.jsx(c.Card,{style:{textDecoration:"none",color:"inherit"},children:a.jsxs("article",{style:{border:"1px solid rgba(255,255,255,0.1)",borderRadius:16,overflow:"hidden",background:"rgba(255,255,255,0.03)"},children:[a.jsx(c.Cover,{style:{background:`#111 url(${i.cover}) center/cover no-repeat`}}),a.jsxs(c.TextWrapper,{children:[a.jsx(c.Title,{title:i.title,children:i.title}),a.jsxs(c.LinkDateWrapper,{children:[a.jsx(z,{to:`/${i.slug}`,children:"View Blog"}),a.jsx("div",{className:"date",children:y(i.date)})]}),a.jsx(c.Excerpt,{title:i.excerpt,children:i.excerpt}),a.jsx("div",{style:{marginTop:8,display:"flex",flexWrap:"wrap",gap:6},children:i.tags.map(o=>a.jsxs("span",{style:{fontSize:12,opacity:.9,border:"1px solid rgba(255,255,255,.12)",padding:"4px 8px",borderRadius:999},children:["#",o]},o))})]})]})},i.slug))})}):a.jsx(a.Fragment,{children:a.jsx("h1",{children:"No Posts Found"})})]})})}export{F as default};
