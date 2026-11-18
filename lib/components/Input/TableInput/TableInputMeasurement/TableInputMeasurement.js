"use strict";var _=Object.defineProperty,M=Object.defineProperties;var $=Object.getOwnPropertyDescriptors;var i=Object.getOwnPropertySymbols;var b=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var g=(e,n,r)=>n in e?_(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r,x=(e,n)=>{for(var r in n||(n={}))b.call(n,r)&&g(e,r,n[r]);if(i)for(var r of i(n))v.call(n,r)&&g(e,r,n[r]);return e},f=(e,n)=>M(e,$(n));var m=(e,n)=>{var r={};for(var l in e)b.call(e,l)&&n.indexOf(l)<0&&(r[l]=e[l]);if(e!=null&&i)for(var l of i(e))n.indexOf(l)<0&&v.call(e,l)&&(r[l]=e[l]);return r};var u=require("react/jsx-runtime"),R=require("react"),O=require("../../NumberInput/NumberInput.js"),k=require("styled-components"),I=require("../../SelectInput/SelectInput.js"),S=require("../../../../theme/theme.js"),A=require("../TableInputContext.js"),N=require("../shared/TableInputReadOnlyCell.js"),w=require("../shared/highlightCell.js");function C(e){return e&&e.__esModule?e:{default:e}}var D=C(R),d=C(k);const E=d.default.div`
  display: flex;
  & > *:nth-child(1) {
    margin-right: -5px;
  }
  & > *:nth-child(2) {
    margin-left: -5px;
  }

  ${w.highlightCell};
`,H=d.default(O.NumberInput)`
  height: 39px;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 0;
  border: none;
  background: none;

  & + div {
    display: none; // Hide arrow buttons
  }
`,z=d.default(I.SelectInput)`
  & > div {
    background: none;

    & > div:nth-child(1) {
      justify-content: flex-end;
    }

    & > div {
      background: none;
      color: ${S.getColor("grey",100)};

      & > input {
        border: none;
        text-align: right;
        padding-right: 38px;
      }
    }
  }
`,B=F=>{var c=F,{amount:e,unit:n,emptyResultLabel:r,openLabel:l,onChange:o,units:s,highlighted:h,inError:p}=c,y=m(c,["amount","unit","emptyResultLabel","openLabel","onChange","units","highlighted","inError"]);const{readOnly:q}=D.default.useContext(A.TableInputContext),T=t=>{o(e,t)},j=t=>{o(t,n)},a=s.find(({value:t})=>t===n);return q?u.jsxs(N.TableInputReadOnlyCell,{$highlighted:h,$inError:p,children:[e," ",u.jsx("span",{children:(a==null?void 0:a.symbol)||(a==null?void 0:a.label)})]}):u.jsxs(E,f(x({$highlighted:h,$inError:p},y),{children:[u.jsx(H,{value:e,onChange:j}),u.jsx(z,{value:n||null,emptyResultLabel:r,openLabel:l,onChange:T,clearable:!1,children:s.map(t=>u.jsx(I.SelectInput.Option,{title:t.label,value:t.value,children:t.symbol||t.label},t.value))})]}))};exports.TableInputMeasurement=B;
