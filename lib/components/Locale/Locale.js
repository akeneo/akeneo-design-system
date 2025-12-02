"use strict";var _=Object.defineProperty,q=Object.defineProperties;var x=Object.getOwnPropertyDescriptors;var i=Object.getOwnPropertySymbols;var s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;var o=(e,r,t)=>r in e?_(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,c=(e,r)=>{for(var t in r||(r={}))s.call(r,t)&&o(e,t,r[t]);if(i)for(var t of i(r))u.call(r,t)&&o(e,t,r[t]);return e},f=(e,r)=>q(e,x(r));var d=(e,r)=>{var t={};for(var a in e)s.call(e,a)&&r.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&i)for(var a of i(e))r.indexOf(a)<0&&u.call(e,a)&&(t[a]=e[a]);return t};var g=require("react/jsx-runtime"),F=require("react"),w=require("styled-components"),C=require("../../shared/flag.js"),m=require("../../theme/theme.js");function E(e){return e&&e.__esModule?e:{default:e}}var p=E(w);const L=p.default.span`
  display: inline-flex;
  align-items: center;
  white-space: nowrap;
`,R=p.default.span`
  font-size: ${m.getFontSize("bigger")};
  margin-right: 3px;
  font-family: 'Flag Emoji', ${m.getFontFamily("default")};
`,b=F.forwardRef((z,j)=>{var n=z,{code:e,languageLabel:r,displayLanguage:t=!0,flagElement:a}=n,h=d(n,["code","languageLabel","displayLanguage","flagElement"]);const{0:v,length:y,[y-1]:l}=e.split("_");return g.jsxs(L,f(c({ref:j},h),{children:[g.jsx(R,{role:"img","aria-label":l,children:a||C.getEmoji(l)}),t&&(r||v)]}))});exports.Locale=b;
