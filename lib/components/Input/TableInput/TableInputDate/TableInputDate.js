"use strict";var x=Object.defineProperty,c=Object.defineProperties;var f=Object.getOwnPropertyDescriptors;var l=Object.getOwnPropertySymbols;var i=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable;var u=(e,t,r)=>t in e?x(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,o=(e,t)=>{for(var r in t||(t={}))i.call(t,r)&&u(e,r,t[r]);if(l)for(var r of l(t))d.call(t,r)&&u(e,r,t[r]);return e},p=(e,t)=>c(e,f(t));var s=(e,t)=>{var r={};for(var a in e)i.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&l)for(var a of l(e))t.indexOf(a)<0&&d.call(e,a)&&(r[a]=e[a]);return r};var b=require("react/jsx-runtime"),T=require("react"),q=require("../TableInputRow/TableInputRow.js"),v=require("styled-components"),C=require("../../DateInput/DateInput.js"),y=require("../../../../theme/theme.js"),D=require("../TableInputContext.js"),R=require("../shared/TableInputReadOnlyCell.js"),_=require("../shared/highlightCell.js");function h(e){return e&&e.__esModule?e:{default:e}}var $=h(T),j=h(v);const m=j.default(C.DateInput)`
  height: 39px;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 0;
  border: none;
  background: none;

  ${_.highlightCell};

  &:focus {
    box-shadow: 0 0 0 1px ${y.getColor("grey",100)};
  }
`,w=O=>{var n=O,{children:e,value:t,highlighted:r,inError:a}=n,g=s(n,["children","value","highlighted","inError"]);const{readOnly:I}=$.default.useContext(D.TableInputContext);return I?b.jsx(R.TableInputReadOnlyCell,{title:t,$highlighted:r,$inError:a,children:t}):b.jsx(m,p(o({value:t,$highlighted:r,$inError:a},g),{children:e}))};q.TableInputRow.displayName="TableInput.DateInput";exports.TableInputDate=w;
