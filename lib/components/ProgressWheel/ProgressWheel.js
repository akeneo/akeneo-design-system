"use strict";var R=Object.defineProperty,j=Object.defineProperties;var $=Object.getOwnPropertyDescriptors;var a=Object.getOwnPropertySymbols;var g=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable;var h=(e,r,t)=>r in e?R(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,x=(e,r)=>{for(var t in r||(r={}))g.call(r,t)&&h(e,t,r[t]);if(a)for(var t of a(r))f.call(r,t)&&h(e,t,r[t]);return e},v=(e,r)=>j(e,$(r));var m=(e,r)=>{var t={};for(var s in e)g.call(e,s)&&r.indexOf(s)<0&&(t[s]=e[s]);if(e!=null&&a)for(var s of a(e))r.indexOf(s)<0&&f.call(e,s)&&(t[s]=e[s]);return t};var o=require("react/jsx-runtime"),k=require("react"),w=require("styled-components"),i=require("../../theme/theme.js");function y(e){return e&&e.__esModule?e:{default:e}}var l=y(w);const c=6,p=2*Math.PI*c,W=e=>e==="brand"?i.getColor("purple",100):i.getColorForLevel(e,100),M=l.default.div`
  display: flex;
  align-items: center;
  gap: 5px;
`,_=l.default.div`
  color: ${i.getColor("grey",120)};
  font-size: ${e=>e.$size-5}px;
`,q=l.default.circle`
  ${({level:e})=>w.css`
    stroke: ${W(e)};
  `}
`,D=l.default.circle`
  stroke: white;
`,E=e=>Math.min(100,Math.max(0,isNaN(e)?0:e)),I=k.forwardRef((N,P)=>{var d=N,{level:e,percent:r,size:t=16,title:s}=d,C=m(d,["level","percent","size","title"]);const u=E(r),n=p*(1-u/100);return o.jsxs(M,{children:[o.jsxs("svg",v(x({ref:P,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:t,height:t,role:"progressbar","aria-valuenow":u,"aria-valuemin":0,"aria-valuemax":100},C),{fill:"none",children:[s&&o.jsx("title",{children:s}),o.jsxs("g",{fill:"none",fillRule:"evenodd",children:[o.jsx(q,{cx:"8",cy:"8",r:c,strokeWidth:"4",level:e}),n!==0&&o.jsx(D,{cx:"8",cy:"8",r:c,strokeWidth:"2",strokeLinecap:"round",strokeDasharray:`${n} ${p-n}`,strokeDashoffset:n,transform:"rotate(-90 8 8)"})]})]})),o.jsxs(_,{$size:t,children:[r,"%"]})]})});exports.ProgressWheel=I;
