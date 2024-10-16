"use strict";var x=Object.defineProperty,h=Object.defineProperties;var v=Object.getOwnPropertyDescriptors;var a=Object.getOwnPropertySymbols;var d=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable;var n=(e,r,o)=>r in e?x(e,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[r]=o,u=(e,r)=>{for(var o in r||(r={}))d.call(r,o)&&n(e,o,r[o]);if(a)for(var o of a(r))s.call(r,o)&&n(e,o,r[o]);return e},f=(e,r)=>h(e,v(r));var p=(e,r)=>{var o={};for(var t in e)d.call(e,t)&&r.indexOf(t)<0&&(o[t]=e[t]);if(e!=null&&a)for(var t of a(e))r.indexOf(t)<0&&s.call(e,t)&&(o[t]=e[t]);return o};var b=require("react/jsx-runtime"),m=require("react"),c=require("styled-components"),i=require("../../theme/theme.js");function g(e){return e&&e.__esModule?e:{default:e}}var w=g(m),_=g(c);const y=_.default.span`
  display: inline-flex;
  height: 18px;
  line-height: 16px;
  border: 1px solid;
  padding: 0 6px;
  border-radius: 2px;
  text-transform: uppercase;
  box-sizing: border-box;
  background-color: ${i.getColor("white")};
  font-size: ${i.getFontSize("small")};
  font-weight: normal;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  flex-shrink: 0;

  ${({$level:e="primary"})=>c.css`
    color: ${i.getColorForLevel(e,140)};
    border-color: ${i.getColorForLevel(e,100)};
  `}
`,$=w.default.forwardRef((q,t)=>{var l=q,{level:e="primary",children:r}=l,o=p(l,["level","children"]);return b.jsx(y,f(u({$level:e,ref:t},o),{children:r}))});exports.Badge=$;
