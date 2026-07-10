"use strict";var v=Object.defineProperty;var a=Object.getOwnPropertySymbols;var d=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;var u=(e,t,r)=>t in e?v(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,o=(e,t)=>{for(var r in t||(t={}))d.call(t,r)&&u(e,r,t[r]);if(a)for(var r of a(t))n.call(t,r)&&u(e,r,t[r]);return e};var f=(e,t)=>{var r={};for(var i in e)d.call(e,i)&&t.indexOf(i)<0&&(r[i]=e[i]);if(e!=null&&a)for(var i of a(e))t.indexOf(i)<0&&n.call(e,i)&&(r[i]=e[i]);return r};var c=require("react/jsx-runtime"),h=require("react"),_=require("styled-components"),g=require("../../theme/theme.js");function s(e){return e&&e.__esModule?e:{default:e}}var x=s(h),p=s(_);const m=p.default.div`
  width: 10px;
  height: 10px;
  min-width: 10px;
  min-height: 10px;
  background-color: ${({$level:e})=>g.getColorForLevel(e,100)};
  border-radius: 50%;
`,q=x.default.forwardRef((i,r)=>{var l=i,{level:e="warning"}=l,t=f(l,["level"]);return c.jsx(m,o({role:e==="danger"?"alert":void 0,$level:e,ref:r},t))});exports.Pill=q;
