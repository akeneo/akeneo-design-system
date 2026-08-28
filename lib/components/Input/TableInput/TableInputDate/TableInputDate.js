"use strict";var I=Object.defineProperty,x=Object.defineProperties;var c=Object.getOwnPropertyDescriptors;var l=Object.getOwnPropertySymbols;var i=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable;var u=(e,t,r)=>t in e?I(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,o=(e,t)=>{for(var r in t||(t={}))i.call(t,r)&&u(e,r,t[r]);if(l)for(var r of l(t))d.call(t,r)&&u(e,r,t[r]);return e},p=(e,t)=>x(e,c(t));var h=(e,t)=>{var r={};for(var a in e)i.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&l)for(var a of l(e))t.indexOf(a)<0&&d.call(e,a)&&(r[a]=e[a]);return r};var b=require("react/jsx-runtime"),f=require("react"),T=require("../TableInputRow/TableInputRow.js"),q=require("styled-components"),v=require("../../DateInput/DateInput.js"),C=require("../../../../theme/theme.js"),y=require("../TableInputContext.js"),D=require("../shared/TableInputReadOnlyCell.js"),R=require("../shared/highlightCell.js");function g(e){return e&&e.__esModule?e:{default:e}}var _=g(f),$=g(q);const j=$.default(v.DateInput)`
  height: 39px;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 0;
  border: none;
  background: none;

  ${R.highlightCell};

  &:focus {
    box-shadow: 0 0 0 1px ${C.getColor("grey",100)};
  }
`,m=a=>{var n=a,{children:e,value:t}=n,r=h(n,["children","value"]);const{readOnly:s}=_.default.useContext(y.TableInputContext);return s?b.jsx(D.TableInputReadOnlyCell,{title:t,$highlighted:r.highlighted,$inError:r.inError,children:t}):b.jsx(j,p(o({value:t},r),{children:e}))};T.TableInputRow.displayName="TableInput.DateInput";exports.TableInputDate=m;
