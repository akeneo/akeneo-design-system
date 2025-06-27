"use strict";var l=require("react/jsx-runtime"),x=require("react"),C=require("../NumberInput/NumberInput.js"),c=require("../SelectInput/SelectInput.js"),y=require("styled-components"),u=require("../../../theme/theme.js");function q(e){return e&&e.__esModule?e:{default:e}}var o=q(y);const j=o.default.div`
  display: flex;
  > *:nth-child(2) {
    width: auto;
  }
`,_=o.default(C.NumberInput)`
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  min-width: 60px;
  &:focus {
    border-right: 1px solid ${u.getColor("grey",80)};
    width: calc(100% - 2px);
  }
`,w=o.default(c.SelectInput)`
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
`,M=({amount:e,onAmountChange:i,unit:f,onUnitChange:p,unitOptions:a,openLabel:b,emptyResultLabel:h="No result found",min:v,max:g,invalid:s=!1,readOnly:n=!1})=>{const d=x.useCallback((r,I)=>{const t=a.find(m=>m.value===r);return t?typeof t.label=="string"?t.label:t.label(I):""},[a]);return l.jsxs(j,{children:[l.jsx(_,{value:e,onChange:i,withIncrementIcons:!1,min:v,max:g,invalid:s,"data-testid":"value",readOnly:n}),l.jsx(w,{onChange:p,value:f,clearable:!1,openLabel:b,emptyResultLabel:h,invalid:s,"data-testid":"currency",readOnly:n,children:a.map(r=>l.jsx(c.SelectInput.Option,{value:r.value,title:d(r.value,e),children:d(r.value,e)},r.value))})]})};exports.MetricInput=M;
