"use strict";var w=Object.defineProperty,v=Object.defineProperties;var y=Object.getOwnPropertyDescriptors;var u=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable;var f=(e,t,r)=>t in e?w(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,s=(e,t)=>{for(var r in t||(t={}))x.call(t,r)&&f(e,r,t[r]);if(u)for(var r of u(t))m.call(t,r)&&f(e,r,t[r]);return e},h=(e,t)=>v(e,y(t));var g=(e,t)=>{var r={};for(var o in e)x.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(e!=null&&u)for(var o of u(e))t.indexOf(o)<0&&m.call(e,o)&&(r[o]=e[o]);return r};var c=require("react/jsx-runtime"),p=require("react"),b=require("styled-components"),i=require("../../theme/theme.js"),S=require("../Button/Button.js"),C=require("../IconButton/IconButton.js");function $(e){return e&&e.__esModule?e:{default:e}}var l=$(b);const z=l.default.div`
  display: flex;
  width: 100%;
  gap: 10px;
  align-items: center;
  height: 44px;
  line-height: 44px;
  border-bottom: 1px solid ${i.getColor("grey",140)};

  ${({$sticky:e})=>e!==void 0&&b.css`
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
`,T=r=>{var o=r,{level:e="primary"}=o,t=g(o,["level"]);return c.jsx(q,s({as:e==="secondary"?"h3":"h2",level:e},t))},j=l.default.div`
  flex-grow: 1;
`,_=l.default.div`
  border-left: 1px solid ${i.getColor("grey",100)};
  margin: 0 10px;
  height: 24px;
`,B=l.default.div`
  font-size: ${i.getFontSize("default")};
  font-weight: normal;
  color: ${i.getColor("brand",100)};
  white-space: nowrap;
`,E=l.default.span`
  display: inline-block;
  vertical-align: top;
  min-width: 28px;
  height: 23px;
  margin: calc((44px - 23px) / 2) 10px 0 0;
  padding: 0 5px;
  box-sizing: border-box;
  border-radius: 2px;
  background-color: ${i.getColor("blue",120)};
  color: ${i.getColor("white")};
  font-size: ${i.getFontSize("default")};
  font-weight: 600;
  line-height: 23px;
  text-align: center;
`,I=l.default.span`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  border: 0;
  overflow: hidden;
  clip: rect(0 0 0 0);
  white-space: nowrap;
`,k=o=>{var d=o,{label:e,children:t}=d,r=g(d,["label","children"]);return c.jsxs(E,h(s({},r),{children:[c.jsxs(I,{children:[e," "]}),t]}))},F=l.default.span`
  font-weight: 700;
`,a=r=>{var o=r,{children:e}=o,t=g(o,["children"]);const d=p.Children.map(e,n=>p.isValidElement(n)&&n.type===C.IconButton?p.cloneElement(n,{level:"tertiary",size:"small",ghost:"borderless"}):p.isValidElement(n)&&n.type===S.Button?p.cloneElement(n,s({level:"tertiary",size:"small",ghost:!0},n.props)):n);return c.jsx(z,h(s({},t),{children:d}))};a.Title=T;a.Spacer=j;a.Separator=_;a.Information=B;a.StepNumber=k;a.Highlight=F;exports.SectionTitle=a;
