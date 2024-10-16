"use strict";var g=Object.defineProperty,x=Object.defineProperties;var c=Object.getOwnPropertyDescriptors;var a=Object.getOwnPropertySymbols;var i=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable;var n=(e,r,t)=>r in e?g(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,b=(e,r)=>{for(var t in r||(r={}))i.call(r,t)&&n(e,t,r[t]);if(a)for(var t of a(r))d.call(r,t)&&n(e,t,r[t]);return e},o=(e,r)=>x(e,c(r));var p=(e,r)=>{var t={};for(var u in e)i.call(e,u)&&r.indexOf(u)<0&&(t[u]=e[u]);if(e!=null&&a)for(var u of a(e))r.indexOf(u)<0&&d.call(e,u)&&(t[u]=e[u]);return t};var s=require("react/jsx-runtime"),f=require("react"),T=require("../TableInputRow/TableInputRow.js"),m=require("styled-components"),q=require("../../NumberInput/NumberInput.js"),v=require("../../../../theme/theme.js"),C=require("../shared/TableInputReadOnlyCell.js"),y=require("../TableInputContext.js"),N=require("../shared/highlightCell.js");function I(e){return e&&e.__esModule?e:{default:e}}var R=I(f),_=I(m);const j=_.default(q.NumberInput)`
  height: 39px;
  padding-left: 10px;
  padding-right: 35px;
  border-radius: 0;
  border: none;
  background: none;

  ${N.highlightCell};

  &:focus {
    box-shadow: 0 0 0 1px ${v.getColor("grey",100)};
  }
`,w=u=>{var l=u,{children:e,value:r}=l,t=p(l,["children","value"]);const{readOnly:h}=R.default.useContext(y.TableInputContext);return h?s.jsx(C.TableInputReadOnlyCell,{title:r,children:r}):s.jsx(j,o(b({value:r},t),{children:e}))};T.TableInputRow.displayName="TableInput.NumberInput";exports.TableInputNumber=w;
