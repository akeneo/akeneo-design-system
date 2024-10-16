"use strict";var T=Object.defineProperty,j=Object.defineProperties;var _=Object.getOwnPropertyDescriptors;var d=Object.getOwnPropertySymbols;var c=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;var h=(e,n,l)=>n in e?T(e,n,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[n]=l,g=(e,n)=>{for(var l in n||(n={}))c.call(n,l)&&h(e,l,n[l]);if(d)for(var l of d(n))b.call(n,l)&&h(e,l,n[l]);return e},v=(e,n)=>j(e,_(n));var x=(e,n)=>{var l={};for(var r in e)c.call(e,r)&&n.indexOf(r)<0&&(l[r]=e[r]);if(e!=null&&d)for(var r of d(e))n.indexOf(r)<0&&b.call(e,r)&&(l[r]=e[r]);return l};var u=require("react/jsx-runtime"),M=require("react"),R=require("../../NumberInput/NumberInput.js"),O=require("styled-components"),f=require("../../SelectInput/SelectInput.js"),k=require("../../../../theme/theme.js"),S=require("../TableInputContext.js"),A=require("../shared/TableInputReadOnlyCell.js"),N=require("../shared/highlightCell.js");function m(e){return e&&e.__esModule?e:{default:e}}var $=m(M),i=m(O);const w=i.default.div`
  display: flex;
  & > *:nth-child(1) {
    margin-right: -5px;
  }
  & > *:nth-child(2) {
    margin-left: -5px;
  }

  ${N.highlightCell};
`,D=i.default(R.NumberInput)`
  height: 39px;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 0;
  border: none;
  background: none;

  & + div {
    display: none; // Hide arrow buttons
  }
`,H=i.default(f.SelectInput)`
  & > div {
    background: none;

    & > div:nth-child(1) {
      justify-content: flex-end;
    }

    & > div {
      background: none;
      color: ${k.getColor("grey",100)};

      & > input {
        border: none;
        text-align: right;
        padding-right: 38px;
      }
    }
  }
`,z=B=>{var p=B,{amount:e,unit:n,emptyResultLabel:l,openLabel:r,onChange:o,units:s}=p,I=x(p,["amount","unit","emptyResultLabel","openLabel","onChange","units"]);const{readOnly:C}=$.default.useContext(S.TableInputContext),y=t=>{o(e,t)},q=t=>{o(t,n)},a=s.find(({value:t})=>t===n);return C?u.jsxs(A.TableInputReadOnlyCell,{children:[e," ",u.jsx("span",{children:(a==null?void 0:a.symbol)||(a==null?void 0:a.label)})]}):u.jsxs(w,v(g({},I),{children:[u.jsx(D,{value:e,onChange:q}),u.jsx(H,{value:n||null,emptyResultLabel:l,openLabel:r,onChange:y,clearable:!1,children:s.map(t=>u.jsx(f.SelectInput.Option,{title:t.label,value:t.value,children:t.symbol||t.label},t.value))})]}))};exports.TableInputMeasurement=z;
