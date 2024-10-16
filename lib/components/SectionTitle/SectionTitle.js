"use strict";var y=Object.defineProperty,w=Object.defineProperties;var $=Object.getOwnPropertyDescriptors;var u=Object.getOwnPropertySymbols;var f=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable;var c=(e,t,r)=>t in e?y(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))f.call(t,r)&&c(e,r,t[r]);if(u)for(var r of u(t))g.call(t,r)&&c(e,r,t[r]);return e},m=(e,t)=>w(e,$(t));var d=(e,t)=>{var r={};for(var o in e)f.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(e!=null&&u)for(var o of u(e))t.indexOf(o)<0&&g.call(e,o)&&(r[o]=e[o]);return r};var x=require("react/jsx-runtime"),a=require("react"),h=require("styled-components"),i=require("../../theme/theme.js"),C=require("../Button/Button.js"),S=require("../IconButton/IconButton.js");function b(e){return e&&e.__esModule?e:{default:e}}var l=b(h);const z=l.default.div`
  display: flex;
  width: 100%;
  gap: 10px;
  align-items: center;
  height: 44px;
  line-height: 44px;
  border-bottom: 1px solid ${i.getColor("grey",140)};

  ${({sticky:e})=>e!==void 0&&h.css`
      position: sticky;
      top: ${e}px;
      background-color: ${i.getColor("white")};
      z-index: 9;
    `}
`,q=l.default.h2`
  color: ${i.getColor("grey",140)};
  font-size: ${i.getFontSize("big")};
  font-weight: 400;
  text-transform: ${({level:e})=>e==="primary"?"uppercase":"unset"};
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`,T=r=>{var o=r,{level:e="primary"}=o,t=d(o,["level"]);return x.jsx(q,p({as:e==="secondary"?"h3":"h2",level:e},t))},_=l.default.div`
  flex-grow: 1;
`,B=l.default.div`
  border-left: 1px solid ${i.getColor("grey",100)};
  margin: 0 10px;
  height: 24px;
`,E=l.default.div`
  font-size: ${i.getFontSize("default")};
  font-weight: normal;
  color: ${i.getColor("brand",100)};
  white-space: nowrap;
`,s=r=>{var o=r,{children:e}=o,t=d(o,["children"]);const v=a.Children.map(e,n=>a.isValidElement(n)&&n.type===S.IconButton?a.cloneElement(n,{level:"tertiary",size:"small",ghost:"borderless"}):a.isValidElement(n)&&n.type===C.Button?a.cloneElement(n,p({level:"tertiary",size:"small",ghost:!0},n.props)):n);return x.jsx(z,m(p({},t),{children:v}))};s.Title=T;s.Spacer=_;s.Separator=B;s.Information=E;exports.SectionTitle=s;
