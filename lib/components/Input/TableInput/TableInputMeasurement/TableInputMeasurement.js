"use strict";var T=Object.defineProperty,j=Object.defineProperties;var _=Object.getOwnPropertyDescriptors;var i=Object.getOwnPropertySymbols;var c=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;var g=(e,n,r)=>n in e?T(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r,v=(e,n)=>{for(var r in n||(n={}))c.call(n,r)&&g(e,r,n[r]);if(i)for(var r of i(n))b.call(n,r)&&g(e,r,n[r]);return e},x=(e,n)=>j(e,_(n));var f=(e,n)=>{var r={};for(var l in e)c.call(e,l)&&n.indexOf(l)<0&&(r[l]=e[l]);if(e!=null&&i)for(var l of i(e))n.indexOf(l)<0&&b.call(e,l)&&(r[l]=e[l]);return r};var u=require("react/jsx-runtime"),M=require("react"),R=require("../../NumberInput/NumberInput.js"),O=require("styled-components"),m=require("../../SelectInput/SelectInput.js"),$=require("../../../../theme/theme.js"),k=require("../TableInputContext.js"),S=require("../shared/TableInputReadOnlyCell.js"),A=require("../shared/highlightCell.js");function I(e){return e&&e.__esModule?e:{default:e}}var E=I(M),o=I(O);const N=o.default.div`
  display: flex;
  & > *:nth-child(1) {
    margin-right: -5px;
  }
  & > *:nth-child(2) {
    margin-left: -5px;
  }

  ${A.highlightCell};
`,w=o.default(R.NumberInput)`
  height: 39px;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 0;
  border: none;
  background: none;

  & + div {
    display: none; // Hide arrow buttons
  }
`,D=o.default(m.SelectInput)`
  & > div {
    background: none;

    & > div:nth-child(1) {
      justify-content: flex-end;
    }

    & > div {
      background: none;
      color: ${$.getColor("grey",100)};

      & > input {
        border: none;
        text-align: right;
        padding-right: 38px;
      }
    }
  }
`,H=z=>{var p=z,{amount:e,unit:n,emptyResultLabel:r,openLabel:l,onChange:h,units:s}=p,d=f(p,["amount","unit","emptyResultLabel","openLabel","onChange","units"]);const{readOnly:C}=E.default.useContext(k.TableInputContext),y=t=>{h(e,t)},q=t=>{h(t,n)},a=s.find(({value:t})=>t===n);return C?u.jsxs(S.TableInputReadOnlyCell,{$highlighted:d.highlighted,$inError:d.inError,children:[e," ",u.jsx("span",{children:(a==null?void 0:a.symbol)||(a==null?void 0:a.label)})]}):u.jsxs(N,x(v({},d),{children:[u.jsx(w,{value:e,onChange:q}),u.jsx(D,{value:n||null,emptyResultLabel:r,openLabel:l,onChange:y,clearable:!1,children:s.map(t=>u.jsx(m.SelectInput.Option,{title:t.label,value:t.value,children:t.symbol||t.label},t.value))})]}))};exports.TableInputMeasurement=H;
