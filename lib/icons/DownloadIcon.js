"use strict";var p=Object.defineProperty,M=Object.defineProperties;var g=Object.getOwnPropertyDescriptors;var r=Object.getOwnPropertySymbols;var d=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;var l=(n,t,a)=>t in n?p(n,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):n[t]=a,c=(n,t)=>{for(var a in t||(t={}))d.call(t,a)&&l(n,a,t[a]);if(r)for(var a of r(t))u.call(t,a)&&l(n,a,t[a]);return n},m=(n,t)=>M(n,g(t));var f=(n,t)=>{var a={};for(var e in n)d.call(n,e)&&t.indexOf(e)<0&&(a[e]=n[e]);if(n!=null&&r)for(var e of r(n))t.indexOf(e)<0&&u.call(n,e)&&(a[e]=n[e]);return a};var o=require("react/jsx-runtime"),s=require("styled-components");function _(n){return n&&n.__esModule?n:{default:n}}var h=_(s);const k=s.keyframes`
  0% {
    transform: translateY(0)
  }
  25% {
    transform: translateY(2px)
  }
  50% {
    transform: translateY(-2px)
  }
  100% {
    transform: translateY(0)
  }
`,v=h.default.path`
  animation-duration: 0.5s;
  animation-iteration-count: 1;
`,x=s.css`
  ${v} {
    animation-name: ${k};
  }
`,L=h.default.svg`
  :hover {
    ${({$animateOnHover:n})=>n&&x}
  }
`,w=Y=>{var i=Y,{title:n,size:t=24,color:a="currentColor",animateOnHover:e=!1}=i,j=f(i,["title","size","color","animateOnHover"]);return o.jsxs(L,m(c({viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",width:t,height:t,$animateOnHover:e},j),{children:[n&&o.jsx("title",{children:n}),o.jsxs("g",{stroke:a,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",children:[o.jsx("path",{d:"M17 16.5h3.5v5h-17v-5H7M12 2v16V2zm5 11l-5 5.5L7 13h0"}),o.jsx(v,{d:"M12 2v16V2zM17 13l-5 5.5L7 13h0"})]})]}))};w.animatedMixin=x;exports.DownloadIcon=w;
