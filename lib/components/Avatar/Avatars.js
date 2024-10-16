"use strict";var $=Object.defineProperty,b=Object.defineProperties;var w=Object.getOwnPropertyDescriptors;var s=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable;var f=(e,r,t)=>r in e?$(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,v=(e,r)=>{for(var t in r||(r={}))h.call(r,t)&&f(e,t,r[t]);if(s)for(var t of s(r))p.call(r,t)&&f(e,t,r[t]);return e},g=(e,r)=>b(e,w(r));var m=(e,r)=>{var t={};for(var n in e)h.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&s)for(var n of s(e))r.indexOf(n)<0&&p.call(e,n)&&(t[n]=e[n]);return t};var y=require("react/jsx-runtime"),l=require("react"),M=require("styled-components"),z=require("../../theme/theme.js");function x(e){return e&&e.__esModule?e:{default:e}}var D=x(l),C=x(M);const E=C.default.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
  & > * {
    position: relative;
  }
`,L=C.default.span`
  height: 32px;
  width: 32px;
  color: ${z.getColor("grey",120)};
  border: 1px solid;
  line-height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  border-radius: 32px;
`,U=V=>{var o=V,{max:e,maxTitle:r=10,children:t}=o,n=m(o,["max","maxTitle","children"]);const i=l.Children.toArray(t),_=i.slice(0,e),a=i.slice(e,i.length+1),d=i.length-e,j=_.reverse(),A=l.useMemo(()=>{const c=a.map(u=>{if(!D.default.isValidElement(u))return;const{firstName:q,lastName:R,username:N}=u.props;return`${q||""} ${R||""}`.trim()||N}).slice(0,r).join(`
`);return a.length>r?c.concat(`
`,"..."):c},[r,a]);return y.jsxs(E,g(v({title:n.title||A},n),{children:[d>0&&y.jsxs(L,{children:["+",d]}),j]}))};exports.Avatars=U;
