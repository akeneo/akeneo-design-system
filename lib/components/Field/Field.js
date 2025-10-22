"use strict";var R=Object.defineProperty,z=Object.defineProperties;var B=Object.getOwnPropertyDescriptors;var o=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable;var m=(e,t,r)=>t in e?R(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,j=(e,t)=>{for(var r in t||(t={}))v.call(t,r)&&m(e,r,t[r]);if(o)for(var r of o(t))g.call(t,r)&&m(e,r,t[r]);return e},y=(e,t)=>z(e,B(t));var h=(e,t)=>{var r={};for(var l in e)v.call(e,l)&&t.indexOf(l)<0&&(r[l]=e[l]);if(e!=null&&o)for(var l of o(e))t.indexOf(l)<0&&g.call(e,l)&&(r[l]=e[l]);return r};var a=require("react/jsx-runtime"),H=require("react"),L=require("styled-components"),V=require("../Helper/Helper.js"),k=require("../Locale/Locale.js"),P=require("../Pill/Pill.js"),D=require("../Block/Block.js"),_=require("../../hooks/useId.js"),w=require("../../theme/theme.js");function C(e){return e&&e.__esModule?e:{default:e}}var i=C(H),s=C(L);const M=s.default.div`
  display: flex;
  flex-direction: column;
  max-width: ${({fullWidth:e})=>e?"100%":"460px"};
`,S=s.default.div`
  display: flex;
  align-items: center;
  line-height: 16px;
  margin-bottom: 8px;
  gap: 5px;
`,A=s.default.label`
  flex: 1;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`,G=s.default.span`
  text-transform: capitalize;
`,J=s.default.div`
  margin-top: 5px;
  max-width: 460px;
`,K=s.default.span`
  font-size: ${w.getFontSize("small")};
  color: ${w.getColor("grey",100)};
  margin-right: 10px;
`,N=i.default.forwardRef((O,I)=>{var x=O,{label:e,locale:t,channel:r,incomplete:l=!1,incompleteLabel:b,fullWidth:u=!1,requiredLabel:d,children:q,actions:E,labelPrefix:c}=x,F=h(x,["label","locale","channel","incomplete","incompleteLabel","fullWidth","requiredLabel","children","actions","labelPrefix"]);const f=_.useId("input_"),p=_.useId("label_"),$=i.default.Children.map(q,n=>i.default.isValidElement(n)&&n.type===V.Helper?a.jsx(J,{children:i.default.cloneElement(n,{inline:!0})}):i.default.isValidElement(n)&&n.type===D.Block?i.default.cloneElement(n,{id:f,ariaLabelledBy:p}):i.default.isValidElement(n)?i.default.cloneElement(n,{id:f,"aria-labelledby":p}):null);return a.jsxs(M,y(j({ref:I,fullWidth:u!=null?u:!1},F),{children:[a.jsxs(S,{children:[l&&a.jsx(P.Pill,{level:"warning","aria-label":b}),a.jsxs(A,{htmlFor:f,id:p,title:`${e}${d?" "+d:""}`,children:[c&&a.jsxs(K,{children:[c," "]}),e,d&&a.jsxs(a.Fragment,{children:[" ",a.jsx("em",{children:d})]})]}),r&&a.jsx(G,{children:r}),t&&(typeof t=="string"?a.jsx(k.Locale,{code:t}):t),E]}),$]}))});exports.Field=N;
