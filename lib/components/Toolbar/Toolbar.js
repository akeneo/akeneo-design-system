"use strict";var g=Object.defineProperty,b=Object.defineProperties;var v=Object.getOwnPropertyDescriptors;var o=Object.getOwnPropertySymbols;var u=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable;var d=(e,t,i)=>t in e?g(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,p=(e,t)=>{for(var i in t||(t={}))u.call(t,i)&&d(e,i,t[i]);if(o)for(var i of o(t))f.call(t,i)&&d(e,i,t[i]);return e},c=(e,t)=>b(e,v(t));var x=(e,t)=>{var i={};for(var n in e)u.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(e!=null&&o)for(var n of o(e))t.indexOf(n)<0&&f.call(e,n)&&(i[n]=e[n]);return i};var h=require("react/jsx-runtime"),m=require("styled-components"),r=require("../../theme/theme.js");function C(e){return e&&e.__esModule?e:{default:e}}var a=C(m);const y=a.default.div`
  display: flex;
  gap: 15px;
  padding: 0 15px;
  background-color: ${r.getColor("white")};
  align-items: center;
  border-top: 1px solid ${({$isVisible:e})=>e?r.getColor("grey",80):"transparent"};
  flex-basis: ${({$isVisible:e})=>e?"70px":0};
  min-height: ${({$isVisible:e})=>e?"70px":0};
  transition: flex-basis 0.3s ease-in-out, min-height 0.3s ease-in-out, border 0.3s ease-in-out;
  overflow: ${({$isVisible:e})=>e?"visible":"hidden"};
`,$=a.default.div`
  display: flex;
  gap: 10px;
  align-items: center;
`,w=a.default.div`
  display: flex;
  gap: 10px;
  align-items: center;
  flex: 1 1 auto;
  min-width: 0;
  overflow-x: auto;
  overflow-y: hidden;

  & > * {
    flex-shrink: 0;
  }
`,_=a.default.div`
  white-space: nowrap;
  color: ${r.getColor("grey",120)};
  text-transform: uppercase;
  font-size: ${r.getFontSize("default")};
  align-items: center;
`,l=n=>{var s=n,{isVisible:e=!0,children:t}=s,i=x(s,["isVisible","children"]);return h.jsx(y,c(p({$isVisible:e},i),{children:t}))};l.LabelContainer=_;l.SelectionContainer=$;l.ActionsContainer=w;exports.Toolbar=l;
