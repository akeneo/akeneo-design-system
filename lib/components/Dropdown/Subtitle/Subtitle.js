"use strict";var x=Object.defineProperty,p=Object.defineProperties;var w=Object.getOwnPropertyDescriptors;var i=Object.getOwnPropertySymbols;var f=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable;var a=(e,t,l)=>t in e?x(e,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[t]=l,u=(e,t)=>{for(var l in t||(t={}))f.call(t,l)&&a(e,l,t[l]);if(i)for(var l of i(t))d.call(t,l)&&a(e,l,t[l]);return e},c=(e,t)=>p(e,w(t));var h=(e,t)=>{var l={};for(var o in e)f.call(e,o)&&t.indexOf(o)<0&&(l[o]=e[o]);if(e!=null&&i)for(var o of i(e))t.indexOf(o)<0&&d.call(e,o)&&(l[o]=e[o]);return l};var n=require("react/jsx-runtime"),m=require("styled-components"),v=require("../../../theme/theme.js");function g(e){return e&&e.__esModule?e:{default:e}}var r=g(m);const y=r.default.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1;
`,j=r.default.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
  line-height: normal;
  overflow: hidden;
`,_=r.default.span`
  color: ${v.getColor("grey",120)};
  font-size: ${v.getFontSize("small")};
  font-style: normal;
  font-weight: 400;
  overflow: hidden;
  text-overflow: ellipsis;
`,S=o=>{var s=o,{label:e,children:t}=s,l=h(s,["label","children"]);return n.jsxs(j,c(u({},l),{children:[n.jsx(y,{children:t}),n.jsx(_,{title:e,children:e})]}))};exports.Subtitle=S;
