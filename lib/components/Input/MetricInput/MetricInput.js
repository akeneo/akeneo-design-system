"use strict";var l=require("react/jsx-runtime"),m=require("react"),x=require("../NumberInput/NumberInput.js"),d=require("../SelectInput/SelectInput.js"),C=require("styled-components"),u=require("../../../theme/theme.js");function y(e){return e&&e.__esModule?e:{default:e}}var o=y(C);const q=o.default.div`
  display: flex;
  > *:nth-child(2) {
    width: auto;
  }
`,j=o.default(x.NumberInput)`
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  min-width: 60px;
  &:focus {
    border-right: 1px solid ${u.getColor("grey",80)};
    width: calc(100% - 2px);
  }
`,_=o.default(d.SelectInput)`
  input {
    border-left: none;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    &:focus {
      border-left: 1px solid ${u.getColor("grey",80)};
    }
  }
  span {
    text-transform: uppercase;
    color: ${u.getColor("grey",100)};
  }
`,w=({amount:e,onAmountChange:c,unit:i,onUnitChange:f,unitOptions:a,openLabel:p,emptyResultLabel:b="No result found",min:h,max:v,invalid:s=!1})=>{const n=m.useCallback((r,g)=>{const t=a.find(I=>I.value===r);return t?typeof t.label=="string"?t.label:t.label(g):""},[a]);return l.jsxs(q,{children:[l.jsx(j,{value:e,onChange:c,withIncrementIcons:!1,min:h,max:v,invalid:s,"data-testid":"value"}),l.jsx(_,{onChange:f,value:i,clearable:!1,openLabel:p,emptyResultLabel:b,invalid:s,"data-testid":"currency",children:a.map(r=>l.jsx(d.SelectInput.Option,{value:r.value,title:n(r.value,e),children:n(r.value,e)},r.value))})]})};exports.MetricInput=w;
