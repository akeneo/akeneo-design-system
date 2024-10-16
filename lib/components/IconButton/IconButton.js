"use strict";var m=Object.defineProperty,p=Object.defineProperties;var x=Object.getOwnPropertyDescriptors;var a=Object.getOwnPropertySymbols;var u=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;var s=(e,t,r)=>t in e?m(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))u.call(t,r)&&s(e,r,t[r]);if(a)for(var r of a(t))o.call(t,r)&&s(e,r,t[r]);return e},i=(e,t)=>p(e,x(t));var c=(e,t)=>{var r={};for(var n in e)u.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&a)for(var n of a(e))t.indexOf(n)<0&&o.call(e,n)&&(r[n]=e[n]);return r};var y=require("react/jsx-runtime"),B=require("react"),_=require("styled-components"),q=require("../Button/Button.js");function v(e){return e&&e.__esModule?e:{default:e}}var f=v(B),I=v(_);const R=I.default(q.Button)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  padding: 0;
  width: ${({size:e})=>e==="small"?24:32}px;
  border-style: ${({borderless:e,ghost:t})=>!e&&t?"solid":"none"};
  ${({borderless:e})=>e&&_.css`
      background: transparent;
    `};
`,g=e=>{switch(e){case"small":return 16;case"default":return 20}},h=f.default.forwardRef((j,b)=>{var l=j,{icon:e,size:t="default",ghost:r}=l,n=c(l,["icon","size","ghost"]);return y.jsx(R,i(d({ref:b,ghost:r===!0||r==="borderless",borderless:r==="borderless",size:t},n),{children:f.default.cloneElement(e,{size:g(t)})}))});exports.IconButton=h;
