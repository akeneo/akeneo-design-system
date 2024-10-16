"use strict";var h=Object.defineProperty,c=Object.defineProperties;var v=Object.getOwnPropertyDescriptors;var l=Object.getOwnPropertySymbols;var d=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;var n=(e,t,r)=>t in e?h(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))d.call(t,r)&&n(e,r,t[r]);if(l)for(var r of l(t))o.call(t,r)&&n(e,r,t[r]);return e},f=(e,t)=>c(e,v(t));var p=(e,t)=>{var r={};for(var a in e)d.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&l)for(var a of l(e))t.indexOf(a)<0&&o.call(e,a)&&(r[a]=e[a]);return r};var x=require("react/jsx-runtime"),_=require("react"),g=require("styled-components"),m=require("../../../../theme/theme.js");function s(e){return e&&e.__esModule?e:{default:e}}var b=s(_),T=s(g);const q=T.default.th`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: normal;
  padding: 0 10px;
  color: ${m.getColor("grey",140)};
  text-align: left;
  font-weight: bold;
  white-space: nowrap;
  min-width: 150px;
  max-width: 250px;
`,w=b.default.forwardRef((a,r)=>{var i=a,{children:e}=i,t=p(i,["children"]);return x.jsx(q,f(u({ref:r},t),{children:e}))});w.displayName="TableInput.HeaderCell";exports.TableInputHeaderCell=w;
