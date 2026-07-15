"use strict";var V=Object.defineProperty,P=Object.defineProperties;var D=Object.getOwnPropertyDescriptors;var d=Object.getOwnPropertySymbols;var g=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var h=(e,t,r)=>t in e?V(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,y=(e,t)=>{for(var r in t||(t={}))g.call(t,r)&&h(e,r,t[r]);if(d)for(var r of d(t))w.call(t,r)&&h(e,r,t[r]);return e},j=(e,t)=>P(e,D(t));var _=(e,t)=>{var r={};for(var n in e)g.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&d)for(var n of d(e))t.indexOf(n)<0&&w.call(e,n)&&(r[n]=e[n]);return r};var i=require("react/jsx-runtime"),M=require("react"),S=require("styled-components"),A=require("../Helper/Helper.js"),G=require("../Locale/Locale.js"),C=require("../Pill/Pill.js"),J=require("../Block/Block.js"),q=require("../../hooks/useId.js"),E=require("../../theme/theme.js");function F(e){return e&&e.__esModule?e:{default:e}}var a=F(M),s=F(S);const K=s.default.div`
  display: flex;
  flex-direction: column;
  max-width: ${({$fullWidth:e})=>e?"100%":"460px"};
`,N=s.default.div`
  display: flex;
  align-items: baseline;
  line-height: 16px;
  margin-bottom: 8px;
  min-height: 16px; /* To keep the height consistent when the label is empty */
  gap: 5px;
`,O=s.default.label`
  flex: 1;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`,Q=s.default.span`
  text-transform: capitalize;
`,U=s.default.div`
  margin-top: 5px;
  max-width: 460px;
`,X=s.default.div`
  font-size: ${E.getFontSize("small")};
  color: ${E.getColor("grey",100)};
  margin-bottom: -5px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Y=a.default.forwardRef((Z,z)=>{var m=Z,{label:e,locale:t,channel:r,incomplete:n=!1,incompleteLabel:$,isModified:I=!1,fullWidth:u=!1,requiredLabel:o,children:B,actions:R,labelDecoration:b,labelPrefix:f,labelTitle:p}=m,k=_(m,["label","locale","channel","incomplete","incompleteLabel","isModified","fullWidth","requiredLabel","children","actions","labelDecoration","labelPrefix","labelTitle"]);const c=q.useId("input_"),x=q.useId("label_"),v=p!=null?p:typeof e=="string"?e:void 0,H=v?`${v}${o?" "+o:""}`:void 0,L=a.default.Children.map(B,l=>a.default.isValidElement(l)&&l.type===A.Helper?i.jsx(U,{children:a.default.cloneElement(l,{inline:!0})}):a.default.isValidElement(l)&&l.type===J.Block?a.default.cloneElement(l,{id:c,ariaLabelledBy:x}):a.default.isValidElement(l)?a.default.cloneElement(l,{id:c,"aria-labelledby":x}):null);return i.jsxs(K,j(y({ref:z,$fullWidth:u!=null?u:!1},k),{children:[f&&i.jsx(X,{title:f,children:f}),i.jsxs(N,{children:[b,n&&i.jsx(C.Pill,{level:"warning","aria-label":$}),I&&i.jsx(C.Pill,{level:"primary"}),i.jsxs(O,{htmlFor:c,id:x,title:H,children:[e,o&&i.jsxs(i.Fragment,{children:[" ",i.jsx("em",{children:o})]})]}),r&&i.jsx(Q,{children:r}),t&&(typeof t=="string"?i.jsx(G.Locale,{code:t}):t),R]}),L]}))});exports.Field=Y;
