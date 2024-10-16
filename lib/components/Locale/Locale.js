"use strict";var v=Object.defineProperty,y=Object.defineProperties;var _=Object.getOwnPropertyDescriptors;var i=Object.getOwnPropertySymbols;var s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;var o=(e,r,t)=>r in e?v(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,c=(e,r)=>{for(var t in r||(r={}))s.call(r,t)&&o(e,t,r[t]);if(i)for(var t of i(r))u.call(r,t)&&o(e,t,r[t]);return e},f=(e,r)=>y(e,_(r));var d=(e,r)=>{var t={};for(var a in e)s.call(e,a)&&r.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&i)for(var a of i(e))r.indexOf(a)<0&&u.call(e,a)&&(t[a]=e[a]);return t};var g=require("react/jsx-runtime"),q=require("react"),x=require("styled-components"),F=require("../../shared/flag.js"),m=require("../../theme/theme.js");function w(e){return e&&e.__esModule?e:{default:e}}var p=w(x);const C=p.default.span`
  display: inline-flex;
  align-items: center;
  white-space: nowrap;
`,E=p.default.span`
  font-size: ${m.getFontSize("bigger")};
  margin-right: 3px;
  font-family: 'Flag Emoji', ${m.getFontFamily("default")};
`,L=q.forwardRef((R,a)=>{var n=R,{code:e,languageLabel:r}=n,t=d(n,["code","languageLabel"]);const{0:h,length:j,[j-1]:l}=e.split("_");return g.jsxs(C,f(c({ref:a},t),{children:[g.jsx(E,{role:"img","aria-label":l,children:F.getEmoji(l)}),r||h]}))});exports.Locale=L;
