"use strict";var v=Object.defineProperty,h=Object.defineProperties;var p=Object.getOwnPropertyDescriptors;var i=Object.getOwnPropertySymbols;var u=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable;var d=(e,t,l)=>t in e?v(e,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[t]=l,a=(e,t)=>{for(var l in t||(t={}))u.call(t,l)&&d(e,l,t[l]);if(i)for(var l of i(t))f.call(t,l)&&d(e,l,t[l]);return e},c=(e,t)=>h(e,p(t));var x=(e,t)=>{var l={};for(var r in e)u.call(e,r)&&t.indexOf(r)<0&&(l[r]=e[r]);if(e!=null&&i)for(var r of i(e))t.indexOf(r)<0&&f.call(e,r)&&(l[r]=e[r]);return l};var o=require("react/jsx-runtime"),w=require("styled-components"),j=require("../../../theme/theme.js");function m(e){return e&&e.__esModule?e:{default:e}}var n=m(w);const y=n.default.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1;
`,_=n.default.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
  line-height: normal;
  overflow: hidden;
`,g=n.default.span`
  color: ${j.getColor("grey",100)};
  font-size: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
`,q=r=>{var s=r,{label:e,children:t}=s,l=x(s,["label","children"]);return o.jsxs(_,c(a({},l),{children:[o.jsx(g,{title:e,children:e}),o.jsx(y,{children:t})]}))};exports.Surtitle=q;
