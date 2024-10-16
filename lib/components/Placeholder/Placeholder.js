"use strict";var h=Object.defineProperty,v=Object.defineProperties;var m=Object.getOwnPropertyDescriptors;var i=Object.getOwnPropertySymbols;var o=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;var d=(e,r,t)=>r in e?h(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,c=(e,r)=>{for(var t in r||(r={}))o.call(r,t)&&d(e,t,r[t]);if(i)for(var t of i(r))u.call(r,t)&&d(e,t,r[t]);return e},g=(e,r)=>v(e,m(r));var s=(e,r)=>{var t={};for(var l in e)o.call(e,l)&&r.indexOf(l)<0&&(t[l]=e[l]);if(e!=null&&i)for(var l of i(e))r.indexOf(l)<0&&u.call(e,l)&&(t[l]=e[l]);return t};var f=require("react/jsx-runtime"),_=require("react"),q=require("styled-components"),n=require("../../theme/theme.js");function y(e){return e&&e.__esModule?e:{default:e}}var p=y(q);const C=p.default.div`
  padding: 0 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: ${({size:e})=>e==="large"?20:5}px;
`,$=p.default.div`
  color: ${n.getColor("grey",140)};
  font-size: ${({size:e})=>n.getFontSize(e==="large"?"title":"big")};
  line-height: ${({size:e})=>n.getFontSize(e==="large"?"title":"big")};
  text-align: center;
`,j=b=>{var a=b,{illustration:e,title:r,size:t="default",children:l}=a,x=s(a,["illustration","title","size","children"]);return f.jsxs(C,g(c({size:t},x),{children:[_.cloneElement(e,{size:t==="large"?256:120}),f.jsx($,{size:t,children:r}),l]}))};exports.Placeholder=j;
