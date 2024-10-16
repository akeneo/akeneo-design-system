"use strict";var x=Object.defineProperty,b=Object.defineProperties;var v=Object.getOwnPropertyDescriptors;var r=Object.getOwnPropertySymbols;var u=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable;var d=(e,t,i)=>t in e?x(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,c=(e,t)=>{for(var i in t||(t={}))u.call(t,i)&&d(e,i,t[i]);if(r)for(var i of r(t))p.call(t,i)&&d(e,i,t[i]);return e},f=(e,t)=>b(e,v(t));var g=(e,t)=>{var i={};for(var n in e)u.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(e!=null&&r)for(var n of r(e))t.indexOf(n)<0&&p.call(e,n)&&(i[n]=e[n]);return i};var C=require("react/jsx-runtime"),m=require("styled-components"),o=require("../../theme/theme.js");function h(e){return e&&e.__esModule?e:{default:e}}var a=h(m);const y=a.default.div`
  display: flex;
  gap: 15px;
  padding: 0 15px;
  background-color: ${o.getColor("white")};
  align-items: center;
  border-top: 1px solid ${({isVisible:e})=>e?o.getColor("grey",80):"transparent"};
  flex-basis: ${({isVisible:e})=>e?"70px":0};
  min-height: ${({isVisible:e})=>e?"70px":0};
  transition: flex-basis 0.3s ease-in-out, min-height 0.3s ease-in-out, border 0.3s ease-in-out;
  overflow: ${({isVisible:e})=>e?"visible":"hidden"};
`,$=a.default.div`
  display: flex;
  gap: 10px;
  align-items: center;
`,_=a.default.div`
  display: flex;
  gap: 10px;
  align-items: center;
`,w=a.default.div`
  white-space: nowrap;
  color: ${o.getColor("grey",120)};
  text-transform: uppercase;
  font-size: ${o.getFontSize("default")};
  align-items: center;
`,s=n=>{var l=n,{isVisible:e=!0,children:t}=l,i=g(l,["isVisible","children"]);return C.jsx(y,f(c({isVisible:e},i),{children:t}))};s.LabelContainer=w;s.SelectionContainer=$;s.ActionsContainer=_;exports.Toolbar=s;
