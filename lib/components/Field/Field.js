"use strict";var h=Object.defineProperty,w=Object.defineProperties;var L=Object.getOwnPropertyDescriptors;var s=Object.getOwnPropertySymbols;var m=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var p=(e,r,t)=>r in e?h(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,j=(e,r)=>{for(var t in r||(r={}))m.call(r,t)&&p(e,t,r[t]);if(s)for(var t of s(r))v.call(r,t)&&p(e,t,r[t]);return e},y=(e,r)=>w(e,L(r));var _=(e,r)=>{var t={};for(var l in e)m.call(e,l)&&r.indexOf(l)<0&&(t[l]=e[l]);if(e!=null&&s)for(var l of s(e))r.indexOf(l)<0&&v.call(e,l)&&(t[l]=e[l]);return t};var a=require("react/jsx-runtime"),R=require("react"),B=require("styled-components"),H=require("../Helper/Helper.js"),V=require("../Locale/Locale.js"),k=require("../Pill/Pill.js"),P=require("../Block/Block.js"),b=require("../../hooks/useId.js");function g(e){return e&&e.__esModule?e:{default:e}}var i=g(R),d=g(B);const z=d.default.div`
  display: flex;
  flex-direction: column;
  max-width: ${({fullWidth:e})=>e?"100%":"460px"};
`,D=d.default.div`
  display: flex;
  align-items: center;
  line-height: 16px;
  margin-bottom: 8px;
  gap: 5px;
`,M=d.default.label`
  flex: 1;
`,$=d.default.span`
  text-transform: capitalize;
`,A=d.default.div`
  margin-top: 5px;
  max-width: 460px;
`,G=i.default.forwardRef((J,F)=>{var c=J,{label:e,locale:r,channel:t,incomplete:l=!1,fullWidth:u=!1,requiredLabel:x,children:q,actions:C}=c,E=_(c,["label","locale","channel","incomplete","fullWidth","requiredLabel","children","actions"]);const f=b.useId("input_"),o=b.useId("label_"),I=i.default.Children.map(q,n=>i.default.isValidElement(n)&&n.type===H.Helper?a.jsx(A,{children:i.default.cloneElement(n,{inline:!0})}):i.default.isValidElement(n)&&n.type===P.Block?i.default.cloneElement(n,{id:f,ariaLabelledBy:o}):i.default.isValidElement(n)?i.default.cloneElement(n,{id:f,"aria-labelledby":o}):null);return a.jsxs(z,y(j({ref:F,fullWidth:u!=null?u:!1},E),{children:[a.jsxs(D,{children:[l&&a.jsx(k.Pill,{level:"warning"}),a.jsxs(M,{htmlFor:f,id:o,children:[e,x&&a.jsxs(a.Fragment,{children:[" ",a.jsx("em",{children:x})]})]}),t&&a.jsx($,{children:t}),r&&(typeof r=="string"?a.jsx(V.Locale,{code:r}):r),C]}),I]}))});exports.Field=G;
