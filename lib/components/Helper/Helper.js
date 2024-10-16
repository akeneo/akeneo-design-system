"use strict";var y=Object.defineProperty,I=Object.defineProperties;var j=Object.getOwnPropertyDescriptors;var c=Object.getOwnPropertySymbols;var i=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable;var g=(e,r,t)=>r in e?y(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,C=(e,r)=>{for(var t in r||(r={}))i.call(r,t)&&g(e,t,r[t]);if(c)for(var t of c(r))d.call(r,t)&&g(e,t,r[t]);return e},f=(e,r)=>I(e,j(r));var x=(e,r)=>{var t={};for(var n in e)i.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&c)for(var n of c(e))r.indexOf(n)<0&&d.call(e,n)&&(t[n]=e[n]);return t};var s=require("react/jsx-runtime"),R=require("react"),a=require("styled-components"),q=require("../../icons/CheckRoundIcon.js"),$=require("../../icons/DangerIcon.js"),_=require("../../icons/InfoRoundIcon.js"),o=require("../../theme/theme.js");function h(e){return e&&e.__esModule?e:{default:e}}var w=h(R),l=h(a);const b=e=>{switch(e){case"info":return o.getColor("blue",10);case"warning":return o.getColor("yellow",10);case"error":return o.getColor("red",10);case"success":return o.getColor("green",10)}},k=(e,r)=>{switch(e){case"info":return o.getColor("grey",120);case"warning":return o.getColor(r?"grey":"yellow",120);case"error":return o.getColor("red",r?100:120);case"success":return o.getColor(r?"grey":"green",120)}},m=(e,r)=>{switch(e){case"info":return o.getColor("blue",100);case"warning":return o.getColor("yellow",r?100:120);case"error":return o.getColor("red",r?100:120);case"success":return o.getColor("green",r?100:120)}},D=e=>{switch(e){case"info":return s.jsx(_.InfoRoundIcon,{});case"warning":return s.jsx($.DangerIcon,{});case"error":return s.jsx($.DangerIcon,{});case"success":return s.jsx(q.CheckRoundIcon,{})}},z=e=>{switch(e){case"info":return o.getColor("grey",80);case"warning":return o.getColor("yellow",120);case"error":return o.getColor("red",120);case"success":return o.getColor("green",120)}},H=(e,r)=>{switch(e){case"info":return o.getColor("blue",100);case"warning":return o.getColor("yellow",120);case"error":return o.getColor("red",r?100:120);case"success":return o.getColor("green",r?100:120)}},B=l.default.div`
  display: flex;
  font-weight: 400;
  padding-right: 20px;
  color: ${e=>k(e.$level,e.$inline)};

  ${e=>!e.$inline&&a.css`
      min-height: 44px;
      background-color: ${b(e.$level)};
    `}

  ${({sticky:e})=>e!==void 0&&a.css`
      position: sticky;
      top: ${e}px;
      z-index: 1;
    `}
`,E=l.default.span`
  height: ${({$inline:e})=>e?"16px":"20px"};
  margin: ${({$inline:e})=>e?"2px 0":"12px 10px"};
  color: ${e=>m(e.$level,e.$inline)};
`,F=l.default.div`
  padding-left: ${({$inline:e})=>e?"4px":"10px"};
  white-space: break-spaces;
  flex: 1;

  a {
    color: ${({$level:e,$inline:r})=>H(e,r)};
  }

  ${({$inline:e,$level:r})=>!e&&a.css`
      margin: 12px 0;
      border-left: 1px solid ${z(r)};
    `}
`,L=w.default.forwardRef((M,v)=>{var u=M,{level:e="info",inline:r=!1,icon:t,children:n}=u,p=x(u,["level","inline","icon","children"]);return s.jsxs(B,f(C({ref:v,$level:e,$inline:r},p),{children:[s.jsx(E,{$inline:r,$level:e,children:w.default.cloneElement(t===void 0?D(e):t,{size:r?16:20})}),s.jsx(F,{$level:e,$inline:r,children:n})]}))});exports.Helper=L;
