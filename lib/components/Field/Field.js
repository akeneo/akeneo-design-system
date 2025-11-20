"use strict";var B=Object.defineProperty,H=Object.defineProperties;var L=Object.getOwnPropertyDescriptors;var o=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable;var m=(e,t,r)=>t in e?B(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,j=(e,t)=>{for(var r in t||(t={}))v.call(t,r)&&m(e,r,t[r]);if(o)for(var r of o(t))g.call(t,r)&&m(e,r,t[r]);return e},y=(e,t)=>H(e,L(t));var h=(e,t)=>{var r={};for(var a in e)v.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&o)for(var a of o(e))t.indexOf(a)<0&&g.call(e,a)&&(r[a]=e[a]);return r};var l=require("react/jsx-runtime"),P=require("react"),V=require("styled-components"),k=require("../Helper/Helper.js"),D=require("../Locale/Locale.js"),_=require("../Pill/Pill.js"),M=require("../Block/Block.js"),w=require("../../hooks/useId.js"),C=require("../../theme/theme.js");function q(e){return e&&e.__esModule?e:{default:e}}var i=q(P),s=q(V);const S=s.default.div`
  display: flex;
  flex-direction: column;
  max-width: ${({fullWidth:e})=>e?"100%":"460px"};
`,A=s.default.div`
  display: flex;
  align-items: center;
  line-height: 16px;
  margin-bottom: 8px;
  gap: 5px;
`,G=s.default.label`
  flex: 1;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`,J=s.default.span`
  text-transform: capitalize;
`,K=s.default.div`
  margin-top: 5px;
  max-width: 460px;
`,N=s.default.span`
  font-size: ${C.getFontSize("small")};
  color: ${C.getColor("grey",100)};
  margin-right: 10px;
`,O=i.default.forwardRef((Q,R)=>{var c=Q,{label:e,locale:t,channel:r,incomplete:a=!1,incompleteLabel:E,isModified:F=!1,fullWidth:u=!1,requiredLabel:d,children:b,actions:I,labelPrefix:x}=c,$=h(c,["label","locale","channel","incomplete","incompleteLabel","isModified","fullWidth","requiredLabel","children","actions","labelPrefix"]);const f=w.useId("input_"),p=w.useId("label_"),z=i.default.Children.map(b,n=>i.default.isValidElement(n)&&n.type===k.Helper?l.jsx(K,{children:i.default.cloneElement(n,{inline:!0})}):i.default.isValidElement(n)&&n.type===M.Block?i.default.cloneElement(n,{id:f,ariaLabelledBy:p}):i.default.isValidElement(n)?i.default.cloneElement(n,{id:f,"aria-labelledby":p}):null);return l.jsxs(S,y(j({ref:R,fullWidth:u!=null?u:!1},$),{children:[l.jsxs(A,{children:[a&&l.jsx(_.Pill,{level:"warning","aria-label":E}),F&&l.jsx(_.Pill,{level:"primary"}),l.jsxs(G,{htmlFor:f,id:p,title:typeof e=="string"?`${e}${d?" "+d:""}`:void 0,children:[x&&l.jsxs(N,{children:[x," "]}),e,d&&l.jsxs(l.Fragment,{children:[" ",l.jsx("em",{children:d})]})]}),r&&l.jsx(J,{children:r}),t&&(typeof t=="string"?l.jsx(D.Locale,{code:t}):t),I]}),z]}))});exports.Field=O;
