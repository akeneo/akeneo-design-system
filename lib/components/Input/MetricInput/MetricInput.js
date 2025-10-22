"use strict";var l=require("react/jsx-runtime"),q=require("react"),j=require("../NumberInput/NumberInput.js"),i=require("../SelectInput/SelectInput.js"),_=require("styled-components"),u=require("../../../theme/theme.js");function w(e){return e&&e.__esModule?e:{default:e}}var o=w(_);const M=o.default.div`
  display: flex;
  > *:nth-child(2) {
    width: auto;
  }
`,N=o.default(j.NumberInput)`
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  min-width: 60px;
  &:focus {
    border-right: 1px solid ${u.getColor("grey",80)};
    width: calc(100% - 2px);
  }
`,S=o.default(i.SelectInput)`
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
`,$=({amount:e,onAmountChange:c,unit:b,onUnitChange:f,unitOptions:a,openLabel:p,emptyResultLabel:h="No result found",min:v,max:g,invalid:s=!1,readOnly:d=!1,id:I,"aria-labelledby":m,unitAriaLabel:x})=>{const n=q.useCallback((r,y)=>{const t=a.find(C=>C.value===r);return t?typeof t.label=="string"?t.label:t.label(y):""},[a]);return l.jsxs(M,{children:[l.jsx(N,{value:e,onChange:c,withIncrementIcons:!1,min:v,max:g,invalid:s,"data-testid":"value",readOnly:d,id:I}),l.jsx(S,{onChange:f,value:b,clearable:!1,openLabel:p,emptyResultLabel:h,invalid:s,"data-testid":"currency",readOnly:d,"aria-labelledby":m,"aria-label":x,children:a.map(r=>l.jsx(i.SelectInput.Option,{value:r.value,title:n(r.value,e),children:n(r.value,e)},r.value))})]})};exports.MetricInput=$;
