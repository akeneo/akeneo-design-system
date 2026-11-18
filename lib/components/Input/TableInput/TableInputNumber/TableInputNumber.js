"use strict";var x=Object.defineProperty,c=Object.defineProperties;var f=Object.getOwnPropertyDescriptors;var a=Object.getOwnPropertySymbols;var i=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable;var n=(e,r,t)=>r in e?x(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,o=(e,r)=>{for(var t in r||(r={}))i.call(r,t)&&n(e,t,r[t]);if(a)for(var t of a(r))d.call(r,t)&&n(e,t,r[t]);return e},b=(e,r)=>c(e,f(r));var p=(e,r)=>{var t={};for(var u in e)i.call(e,u)&&r.indexOf(u)<0&&(t[u]=e[u]);if(e!=null&&a)for(var u of a(e))r.indexOf(u)<0&&d.call(e,u)&&(t[u]=e[u]);return t};var s=require("react/jsx-runtime"),T=require("react"),m=require("../TableInputRow/TableInputRow.js"),q=require("styled-components"),v=require("../../NumberInput/NumberInput.js"),C=require("../../../../theme/theme.js"),y=require("../shared/TableInputReadOnlyCell.js"),N=require("../TableInputContext.js"),R=require("../shared/highlightCell.js");function h(e){return e&&e.__esModule?e:{default:e}}var _=h(T),$=h(q);const j=$.default(v.NumberInput)`
  height: 39px;
  padding-left: 10px;
  padding-right: 35px;
  border-radius: 0;
  border: none;
  background: none;

  ${R.highlightCell};

  &:focus {
    box-shadow: 0 0 0 1px ${C.getColor("grey",100)};
  }
`,w=O=>{var l=O,{children:e,value:r,highlighted:t,inError:u}=l,g=p(l,["children","value","highlighted","inError"]);const{readOnly:I}=_.default.useContext(N.TableInputContext);return I?s.jsx(y.TableInputReadOnlyCell,{title:r,$highlighted:t,$inError:u,children:r}):s.jsx(j,b(o({value:r,$highlighted:t,$inError:u},g),{children:e}))};m.TableInputRow.displayName="TableInput.NumberInput";exports.TableInputNumber=w;
