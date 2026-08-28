"use strict";var I=Object.defineProperty,x=Object.defineProperties;var c=Object.getOwnPropertyDescriptors;var l=Object.getOwnPropertySymbols;var i=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable;var a=(e,r,t)=>r in e?I(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,o=(e,r)=>{for(var t in r||(r={}))i.call(r,t)&&a(e,t,r[t]);if(l)for(var t of l(r))d.call(r,t)&&a(e,t,r[t]);return e},b=(e,r)=>x(e,c(r));var p=(e,r)=>{var t={};for(var u in e)i.call(e,u)&&r.indexOf(u)<0&&(t[u]=e[u]);if(e!=null&&l)for(var u of l(e))r.indexOf(u)<0&&d.call(e,u)&&(t[u]=e[u]);return t};var h=require("react/jsx-runtime"),f=require("react"),T=require("../TableInputRow/TableInputRow.js"),m=require("styled-components"),q=require("../../NumberInput/NumberInput.js"),v=require("../../../../theme/theme.js"),C=require("../shared/TableInputReadOnlyCell.js"),y=require("../TableInputContext.js"),N=require("../shared/highlightCell.js");function g(e){return e&&e.__esModule?e:{default:e}}var R=g(f),_=g(m);const $=_.default(q.NumberInput)`
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
`,j=u=>{var n=u,{children:e,value:r}=n,t=p(n,["children","value"]);const{readOnly:s}=R.default.useContext(y.TableInputContext);return s?h.jsx(C.TableInputReadOnlyCell,{title:r,$highlighted:t.highlighted,$inError:t.inError,children:r}):h.jsx($,b(o({value:r},t),{children:e}))};T.TableInputRow.displayName="TableInput.NumberInput";exports.TableInputNumber=j;
