"use strict";var $=Object.defineProperty,m=Object.defineProperties;var p=Object.getOwnPropertyDescriptors;var s=Object.getOwnPropertySymbols;var u=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;var a=(e,t,r)=>t in e?$(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))u.call(t,r)&&a(e,r,t[r]);if(s)for(var r of s(t))o.call(t,r)&&a(e,r,t[r]);return e},i=(e,t)=>m(e,p(t));var c=(e,t)=>{var r={};for(var n in e)u.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&s)for(var n of s(e))t.indexOf(n)<0&&o.call(e,n)&&(r[n]=e[n]);return r};var x=require("react/jsx-runtime"),y=require("react"),b=require("styled-components"),B=require("../Button/Button.js");function _(e){return e&&e.__esModule?e:{default:e}}var f=_(y),q=_(b);const I=q.default(B.Button)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  padding: 0;
  width: ${({size:e})=>e==="small"?24:32}px;
  border-style: ${({$borderless:e,ghost:t})=>!e&&t?"solid":"none"};
  ${({$borderless:e})=>e&&b.css`
      background: transparent;
    `};
`,R=e=>{switch(e){case"small":return 16;case"default":return 20}},g=f.default.forwardRef((h,v)=>{var l=h,{icon:e,size:t="default",ghost:r}=l,n=c(l,["icon","size","ghost"]);return x.jsx(I,i(d({ref:v,ghost:r===!0||r==="borderless",$borderless:r==="borderless",size:t},n),{children:f.default.cloneElement(e,{size:R(t)})}))});exports.IconButton=g;
