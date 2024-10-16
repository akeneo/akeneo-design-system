"use strict";var c=Object.defineProperty;var a=Object.getOwnPropertySymbols;var d=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;var u=(r,t,e)=>t in r?c(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,o=(r,t)=>{for(var e in t||(t={}))d.call(t,e)&&u(r,e,t[e]);if(a)for(var e of a(t))n.call(t,e)&&u(r,e,t[e]);return r};var f=(r,t)=>{var e={};for(var i in r)d.call(r,i)&&t.indexOf(i)<0&&(e[i]=r[i]);if(r!=null&&a)for(var i of a(r))t.indexOf(i)<0&&n.call(r,i)&&(e[i]=r[i]);return e};var v=require("react/jsx-runtime"),h=require("react"),_=require("styled-components"),g=require("../../theme/theme.js");function s(r){return r&&r.__esModule?r:{default:r}}var x=s(h),p=s(_);const m=p.default.div`
  width: 10px;
  height: 10px;
  min-width: 10px;
  min-height: 10px;
  background-color: ${({level:r})=>g.getColorForLevel(r,100)};
  border-radius: 50%;
`,q=x.default.forwardRef((i,e)=>{var l=i,{level:r="warning"}=l,t=f(l,["level"]);return v.jsx(m,o({role:r==="danger"?"alert":void 0,level:r,ref:e},t))});exports.Pill=q;
