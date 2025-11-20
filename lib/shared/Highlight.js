"use strict";var r=require("react/jsx-runtime"),a=require("styled-components"),i=require("../theme/theme.js");function g(t){return t&&t.__esModule?t:{default:t}}var l=g(a);const d=l.default.span`
  background-color: ${i.getColor("brand",20)};
`,c=({children:t,highlight:s})=>{const e=t.toLowerCase().indexOf(s.toLowerCase());if(e<0)return r.jsx(r.Fragment,{children:t});const n=t.substring(0,e),o=t.substring(e,e+s.length),u=t.substring(e+s.length);return r.jsxs(r.Fragment,{children:[n,r.jsx(d,{children:o}),u]})};exports.Highlight=c;
