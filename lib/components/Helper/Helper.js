"use strict";var j=Object.defineProperty,q=Object.defineProperties;var R=Object.getOwnPropertyDescriptors;var c=Object.getOwnPropertySymbols;var i=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable;var g=(e,r,t)=>r in e?j(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,C=(e,r)=>{for(var t in r||(r={}))i.call(r,t)&&g(e,t,r[t]);if(c)for(var t of c(r))d.call(r,t)&&g(e,t,r[t]);return e},f=(e,r)=>q(e,R(r));var p=(e,r)=>{var t={};for(var n in e)i.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&c)for(var n of c(e))r.indexOf(n)<0&&d.call(e,n)&&(t[n]=e[n]);return t};var s=require("react/jsx-runtime"),k=require("react"),a=require("styled-components"),_=require("../../icons/CheckRoundIcon.js"),$=require("../../icons/DangerIcon.js"),b=require("../../icons/InfoRoundIcon.js"),m=require("../../icons/LightIcon.js"),o=require("../../theme/theme.js");function h(e){return e&&e.__esModule?e:{default:e}}var x=h(k),l=h(a);const z=e=>{switch(e){case"info":return o.getColor("blue",10);case"warning":return o.getColor("yellow",10);case"error":return o.getColor("red",10);case"success":return o.getColor("green",10);case"learn":return o.getColor("purple",10)}},D=(e,r)=>{switch(e){case"info":return o.getColor("grey",120);case"warning":return o.getColor(r?"grey":"yellow",120);case"error":return o.getColor("red",r?100:120);case"success":return o.getColor(r?"grey":"green",120);case"learn":return o.getColor(r?"grey":"purple",120)}},L=(e,r)=>{switch(e){case"info":return o.getColor("blue",100);case"warning":return o.getColor("yellow",r?100:120);case"error":return o.getColor("red",r?100:120);case"success":return o.getColor("green",r?100:120);case"learn":return o.getColor("purple",r?100:120)}},F=e=>{switch(e){case"info":return s.jsx(b.InfoRoundIcon,{});case"warning":return s.jsx($.DangerIcon,{});case"error":return s.jsx($.DangerIcon,{});case"success":return s.jsx(_.CheckRoundIcon,{});case"learn":return s.jsx(m.LightIcon,{})}},H=e=>{switch(e){case"info":return o.getColor("grey",80);case"warning":return o.getColor("yellow",120);case"error":return o.getColor("red",120);case"success":return o.getColor("green",120);case"learn":return o.getColor("purple",120)}},S=(e,r)=>{switch(e){case"info":return o.getColor("blue",100);case"warning":return o.getColor("yellow",120);case"error":return o.getColor("red",r?100:120);case"success":return o.getColor("green",r?100:120);case"learn":return o.getColor("purple",r?100:120)}},B=l.default.div`
  display: flex;
  font-weight: 400;
  font-size: ${({$size:e})=>o.getFontSize(e)};
  padding-right: 20px;
  color: ${e=>D(e.$level,e.$inline)};

  ${e=>!e.$inline&&a.css`
      min-height: 44px;
      background-color: ${z(e.$level)};
    `}

  ${({$sticky:e})=>e!==void 0&&a.css`
      position: sticky;
      top: ${e}px;
      z-index: 1;
    `}
`,E=l.default.span`
  height: ${({$inline:e})=>e?"16px":"20px"};
  margin: ${({$inline:e})=>e?"2px 0":"12px 10px"};
  color: ${e=>L(e.$level,e.$inline)};
`,M=l.default.div`
  padding-left: ${({$inline:e})=>e?"4px":"10px"};
  white-space: break-spaces;
  flex: 1;

  a {
    color: ${({$level:e,$inline:r})=>S(e,r)};
  }

  ${({$inline:e,$level:r})=>!e&&a.css`
      margin: 12px 0;
      border-left: 1px solid ${H(r)};
    `}
`,T=x.default.forwardRef((A,I)=>{var u=A,{level:e="info",inline:r=!1,size:t="default",icon:n,children:w,sticky:v}=u,y=p(u,["level","inline","size","icon","children","sticky"]);return s.jsxs(B,f(C({ref:I,$level:e,$inline:r,$sticky:v,$size:t},y),{children:[s.jsx(E,{$inline:r,$level:e,children:x.default.cloneElement(n===void 0?F(e):n,{size:r?16:20})}),s.jsx(M,{$level:e,$inline:r,children:w})]}))});exports.Helper=T;
