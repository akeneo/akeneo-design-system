"use strict";var I=Object.defineProperty,h=Object.defineProperties;var g=Object.getOwnPropertyDescriptors;var l=Object.getOwnPropertySymbols;var i=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable;var u=(e,t,r)=>t in e?I(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,o=(e,t)=>{for(var r in t||(t={}))i.call(t,r)&&u(e,r,t[r]);if(l)for(var r of l(t))d.call(t,r)&&u(e,r,t[r]);return e},p=(e,t)=>h(e,g(t));var s=(e,t)=>{var r={};for(var a in e)i.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&l)for(var a of l(e))t.indexOf(a)<0&&d.call(e,a)&&(r[a]=e[a]);return r};var x=require("react/jsx-runtime"),c=require("react"),f=require("../TableInputRow/TableInputRow.js"),q=require("styled-components"),v=require("../../TextInput/TextInput.js"),C=require("../../../../theme/theme.js"),y=require("../TableInputContext.js"),R=require("../shared/TableInputReadOnlyCell.js"),_=require("../shared/highlightCell.js");function T(e){return e&&e.__esModule?e:{default:e}}var j=T(c),m=T(q);const w=m.default(v.TextInput)`
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
`,O=a=>{var n=a,{children:e,value:t}=n,r=s(n,["children","value"]);const{readOnly:b}=j.default.useContext(y.TableInputContext);return b?x.jsx(R.TableInputReadOnlyCell,{title:t,children:t}):x.jsx(w,p(o({value:t},r),{children:e}))};f.TableInputRow.displayName="TableInput.TextInput";exports.TableInputText=O;
