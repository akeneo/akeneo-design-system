"use strict";var g=Object.defineProperty,s=Object.defineProperties;var I=Object.getOwnPropertyDescriptors;var n=Object.getOwnPropertySymbols;var i=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable;var u=(e,t,r)=>t in e?g(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,o=(e,t)=>{for(var r in t||(t={}))i.call(t,r)&&u(e,r,t[r]);if(n)for(var r of n(t))d.call(t,r)&&u(e,r,t[r]);return e},p=(e,t)=>s(e,I(t));var h=(e,t)=>{var r={};for(var l in e)i.call(e,l)&&t.indexOf(l)<0&&(r[l]=e[l]);if(e!=null&&n)for(var l of n(e))t.indexOf(l)<0&&d.call(e,l)&&(r[l]=e[l]);return r};var x=require("react/jsx-runtime"),c=require("react"),f=require("../TableInputRow/TableInputRow.js"),q=require("styled-components"),v=require("../../TextInput/TextInput.js"),C=require("../../../../theme/theme.js"),y=require("../TableInputContext.js"),R=require("../shared/TableInputReadOnlyCell.js"),_=require("../shared/highlightCell.js");function T(e){return e&&e.__esModule?e:{default:e}}var $=T(c),j=T(q);const m=j.default(v.TextInput)`
  height: 39px;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 0;
  border: none;
  background: none;

  ${_.highlightCell};

  &:focus {
    box-shadow: 0 0 0 1px ${C.getColor("grey",100)};
  }
`,w=l=>{var a=l,{children:e,value:t}=a,r=h(a,["children","value"]);const{readOnly:b}=$.default.useContext(y.TableInputContext);return b?x.jsx(R.TableInputReadOnlyCell,{title:t,$highlighted:r.highlighted,$inError:r.inError,children:t}):x.jsx(m,p(o({value:t},r),{children:e}))};f.TableInputRow.displayName="TableInput.TextInput";exports.TableInputText=w;
