"use strict";var l=require("react/jsx-runtime"),g=require("react"),m=require("../NumberInput/NumberInput.js"),s=require("../SelectInput/SelectInput.js"),I=require("styled-components"),a=require("../../../theme/theme.js");function x(e){return e&&e.__esModule?e:{default:e}}var o=x(I);const C=o.default.div`
  display: flex;
  > *:nth-child(2) {
    width: auto;
  }
`,y=o.default(m.NumberInput)`
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  min-width: 60px;
  &:focus {
    border-right: 1px solid ${a.getColor("grey",80)};
    width: calc(100% - 2px);
  }
`,q=o.default(s.SelectInput)`
  input {
    border-left: none;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    &:focus {
      border-left: 1px solid ${a.getColor("grey",80)};
    }
  }
  span {
    text-transform: uppercase;
    color: ${a.getColor("grey",100)};
  }
`,j=({amount:e,onAmountChange:d,unit:i,onUnitChange:c,unitOptions:u,openLabel:p,min:b,max:f})=>{const n=g.useCallback((r,h)=>{const t=u.find(v=>v.value===r);return t?typeof t.label=="string"?t.label:t.label(h):""},[u]);return l.jsxs(C,{children:[l.jsx(y,{value:e,onChange:d,withIncrementIcons:!1,min:b,max:f}),l.jsx(q,{onChange:c,value:i,clearable:!1,openLabel:p,emptyResultLabel:"No result found",children:u.map(r=>l.jsx(s.SelectInput.Option,{value:r.value,title:n(r.value,e),children:n(r.value,e)},r.value))})]})};exports.MetricInput=j;
