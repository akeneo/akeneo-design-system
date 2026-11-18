"use strict";var g=Object.defineProperty,I=Object.defineProperties;var c=Object.getOwnPropertyDescriptors;var l=Object.getOwnPropertySymbols;var i=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable;var u=(e,t,r)=>t in e?g(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,o=(e,t)=>{for(var r in t||(t={}))i.call(t,r)&&u(e,r,t[r]);if(l)for(var r of l(t))d.call(t,r)&&u(e,r,t[r]);return e},p=(e,t)=>I(e,c(t));var s=(e,t)=>{var r={};for(var a in e)i.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&l)for(var a of l(e))t.indexOf(a)<0&&d.call(e,a)&&(r[a]=e[a]);return r};var x=require("react/jsx-runtime"),f=require("react"),q=require("../TableInputRow/TableInputRow.js"),v=require("styled-components"),C=require("../../TextInput/TextInput.js"),y=require("../../../../theme/theme.js"),R=require("../TableInputContext.js"),_=require("../shared/TableInputReadOnlyCell.js"),$=require("../shared/highlightCell.js");function T(e){return e&&e.__esModule?e:{default:e}}var j=T(f),m=T(v);const w=m.default(C.TextInput)`
  height: 39px;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 0;
  border: none;
  background: none;

  ${$.highlightCell};

  &:focus {
    box-shadow: 0 0 0 1px ${y.getColor("grey",100)};
  }
`,O=E=>{var n=E,{children:e,value:t,highlighted:r,inError:a}=n,b=s(n,["children","value","highlighted","inError"]);const{readOnly:h}=j.default.useContext(R.TableInputContext);return h?x.jsx(_.TableInputReadOnlyCell,{title:t,$highlighted:r,$inError:a,children:t}):x.jsx(w,p(o({value:t,$highlighted:r,$inError:a},b),{children:e}))};q.TableInputRow.displayName="TableInput.TextInput";exports.TableInputText=O;
