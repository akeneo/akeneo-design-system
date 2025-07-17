"use strict";var w=Object.defineProperty,R=Object.defineProperties;var z=Object.getOwnPropertyDescriptors;var d=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable;var m=(e,r,t)=>r in e?w(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,j=(e,r)=>{for(var t in r||(r={}))v.call(r,t)&&m(e,t,r[t]);if(d)for(var t of d(r))g.call(r,t)&&m(e,t,r[t]);return e},y=(e,r)=>R(e,z(r));var _=(e,r)=>{var t={};for(var l in e)v.call(e,l)&&r.indexOf(l)<0&&(t[l]=e[l]);if(e!=null&&d)for(var l of d(e))r.indexOf(l)<0&&g.call(e,l)&&(t[l]=e[l]);return t};var a=require("react/jsx-runtime"),B=require("react"),H=require("styled-components"),V=require("../Helper/Helper.js"),$=require("../Locale/Locale.js"),k=require("../Pill/Pill.js"),P=require("../Block/Block.js"),b=require("../../hooks/useId.js"),q=require("../../theme/theme.js");function h(e){return e&&e.__esModule?e:{default:e}}var i=h(B),s=h(H);const D=s.default.div`
  display: flex;
  flex-direction: column;
  max-width: ${({fullWidth:e})=>e?"100%":"460px"};
`,M=s.default.div`
  display: flex;
  align-items: center;
  line-height: 16px;
  margin-bottom: 8px;
  gap: 5px;
`,S=s.default.label`
  flex: 1;
`,A=s.default.span`
  text-transform: capitalize;
`,G=s.default.div`
  margin-top: 5px;
  max-width: 460px;
`,J=s.default.span`
  font-size: ${q.getFontSize("small")};
  color: ${q.getColor("grey",100)};
  margin-right: 10px;
`,K=i.default.forwardRef((N,I)=>{var p=N,{label:e,locale:r,channel:t,incomplete:l=!1,fullWidth:u=!1,requiredLabel:c,children:C,actions:E,labelPrefix:x}=p,F=_(p,["label","locale","channel","incomplete","fullWidth","requiredLabel","children","actions","labelPrefix"]);const o=b.useId("input_"),f=b.useId("label_"),L=i.default.Children.map(C,n=>i.default.isValidElement(n)&&n.type===V.Helper?a.jsx(G,{children:i.default.cloneElement(n,{inline:!0})}):i.default.isValidElement(n)&&n.type===P.Block?i.default.cloneElement(n,{id:o,ariaLabelledBy:f}):i.default.isValidElement(n)?i.default.cloneElement(n,{id:o,"aria-labelledby":f}):null);return a.jsxs(D,y(j({ref:I,fullWidth:u!=null?u:!1},F),{children:[a.jsxs(M,{children:[l&&a.jsx(k.Pill,{level:"warning"}),a.jsxs(S,{htmlFor:o,id:f,children:[x&&a.jsxs(J,{children:[x," "]}),e,c&&a.jsxs(a.Fragment,{children:[" ",a.jsx("em",{children:c})]})]}),t&&a.jsx(A,{children:t}),r&&(typeof r=="string"?a.jsx($.Locale,{code:r}):r),E]}),L]}))});exports.Field=K;
