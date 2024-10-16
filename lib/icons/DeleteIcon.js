"use strict";var p=Object.defineProperty,g=Object.defineProperties;var _=Object.getOwnPropertyDescriptors;var s=Object.getOwnPropertySymbols;var l=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable;var a=(e,t,n)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&a(e,n,t[n]);if(s)for(var n of s(t))d.call(t,n)&&a(e,n,t[n]);return e},c=(e,t)=>g(e,_(t));var f=(e,t)=>{var n={};for(var r in e)l.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&s)for(var r of s(e))t.indexOf(r)<0&&d.call(e,r)&&(n[r]=e[r]);return n};var i=require("react/jsx-runtime"),h=require("styled-components");function k(e){return e&&e.__esModule?e:{default:e}}var v=k(h);const x=v.default.path`
  transition: transform 0.1s linear;
  transform-origin: 60% 90%;
`,M=h.css`
  ${x} {
    transform: rotate(15deg) translate(-3px, -2px);
  }
`,D=v.default.svg`
  :hover {
    ${({animateOnHover:e})=>e&&M}
  }
`,j=L=>{var o=L,{title:e,size:t=24,color:n="currentColor",animateOnHover:r=!1}=o,m=f(o,["title","size","color","animateOnHover"]);return i.jsxs(D,c(u({viewBox:"0 0 24 24",width:t,height:t,animateOnHover:r},m),{children:[e&&i.jsx("title",{children:e}),i.jsxs("g",{stroke:n,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsx("path",{d:"M5 8h14v14H5zM8.5 11v7.5M12 11v7.5M15.5 11v7.5"}),i.jsx(x,{d:"M3 5h18v3H3zM8.5 2.5h7"})]})]}))};j.animatedMixin=M;exports.DeleteIcon=j;
