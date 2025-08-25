"use strict";var $=Object.defineProperty,R=Object.defineProperties;var z=Object.getOwnPropertyDescriptors;var o=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable;var m=(e,t,r)=>t in e?$(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,j=(e,t)=>{for(var r in t||(t={}))v.call(t,r)&&m(e,r,t[r]);if(o)for(var r of o(t))g.call(t,r)&&m(e,r,t[r]);return e},y=(e,t)=>R(e,z(t));var h=(e,t)=>{var r={};for(var l in e)v.call(e,l)&&t.indexOf(l)<0&&(r[l]=e[l]);if(e!=null&&o)for(var l of o(e))t.indexOf(l)<0&&g.call(e,l)&&(r[l]=e[l]);return r};var n=require("react/jsx-runtime"),B=require("react"),H=require("styled-components"),L=require("../Helper/Helper.js"),V=require("../Locale/Locale.js"),k=require("../Pill/Pill.js"),P=require("../Block/Block.js"),_=require("../../hooks/useId.js"),w=require("../../theme/theme.js");function C(e){return e&&e.__esModule?e:{default:e}}var i=C(B),s=C(H);const D=s.default.div`
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
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`,A=s.default.span`
  text-transform: capitalize;
`,G=s.default.div`
  margin-top: 5px;
  max-width: 460px;
`,J=s.default.span`
  font-size: ${w.getFontSize("small")};
  color: ${w.getColor("grey",100)};
  margin-right: 10px;
`,K=i.default.forwardRef((N,b)=>{var x=N,{label:e,locale:t,channel:r,incomplete:l=!1,fullWidth:u=!1,requiredLabel:d,children:q,actions:E,labelPrefix:c}=x,F=h(x,["label","locale","channel","incomplete","fullWidth","requiredLabel","children","actions","labelPrefix"]);const f=_.useId("input_"),p=_.useId("label_"),I=i.default.Children.map(q,a=>i.default.isValidElement(a)&&a.type===L.Helper?n.jsx(G,{children:i.default.cloneElement(a,{inline:!0})}):i.default.isValidElement(a)&&a.type===P.Block?i.default.cloneElement(a,{id:f,ariaLabelledBy:p}):i.default.isValidElement(a)?i.default.cloneElement(a,{id:f,"aria-labelledby":p}):null);return n.jsxs(D,y(j({ref:b,fullWidth:u!=null?u:!1},F),{children:[n.jsxs(M,{children:[l&&n.jsx(k.Pill,{level:"warning"}),n.jsxs(S,{htmlFor:f,id:p,title:`${e}${d?" "+d:""}`,children:[c&&n.jsxs(J,{children:[c," "]}),e,d&&n.jsxs(n.Fragment,{children:[" ",n.jsx("em",{children:d})]})]}),r&&n.jsx(A,{children:r}),t&&(typeof t=="string"?n.jsx(V.Locale,{code:t}):t),E]}),I]}))});exports.Field=K;
