"use strict";var y=Object.defineProperty,_=Object.defineProperties;var q=Object.getOwnPropertyDescriptors;var i=Object.getOwnPropertySymbols;var s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;var o=(e,r,t)=>r in e?y(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,c=(e,r)=>{for(var t in r||(r={}))s.call(r,t)&&o(e,t,r[t]);if(i)for(var t of i(r))u.call(r,t)&&o(e,t,r[t]);return e},f=(e,r)=>_(e,q(r));var d=(e,r)=>{var t={};for(var a in e)s.call(e,a)&&r.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&i)for(var a of i(e))r.indexOf(a)<0&&u.call(e,a)&&(t[a]=e[a]);return t};var g=require("react/jsx-runtime"),x=require("react"),F=require("styled-components"),w=require("../../shared/flag.js"),m=require("../../theme/theme.js");function C(e){return e&&e.__esModule?e:{default:e}}var p=C(F);const E=p.default.span`
  display: inline-flex;
  align-items: center;
  white-space: nowrap;
`,L=p.default.span`
  font-size: ${m.getFontSize("bigger")};
  margin-right: 3px;
  font-family: 'Flag Emoji', ${m.getFontFamily("default")};
`,R=x.forwardRef((b,h)=>{var n=b,{code:e,languageLabel:r,flagElement:t}=n,a=d(n,["code","languageLabel","flagElement"]);const{0:j,length:v,[v-1]:l}=e.split("_");return g.jsxs(E,f(c({ref:h},a),{children:[g.jsx(L,{role:"img","aria-label":l,children:t||w.getEmoji(l)}),r||j]}))});exports.Locale=R;
