"use strict";var a=require("react/jsx-runtime"),j=require("react"),_=require("../NumberInput/NumberInput.js"),d=require("../SelectInput/SelectInput.js"),M=require("styled-components"),r=require("../../../theme/theme.js");function N(e){return e&&e.__esModule?e:{default:e}}var n=N(M);const S=n.default(_.NumberInput)`
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  min-width: 60px;
  &:focus {
    border-right: 1px solid ${r.getColor("grey",80)};
    width: calc(100% - 2px);
  }
`,c=n.default(d.SelectInput)`
  position: relative;
  min-width: 140px;

  &::after {
    content: '';
    position: absolute;
    top: 4px;
    bottom: 4px;
    left: 0;
    width: 1px;
    background-color: ${({$invalid:e})=>e?r.getColor("red",100):r.getColor("grey",80)};
    pointer-events: none;
  }

  input {
    border-left: none;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    &:focus {
      border-left: 1px solid ${r.getColor("grey",80)};
    }
  }
  span {
    text-transform: uppercase;
    color: ${r.getColor("grey",100)};
  }
`,k=n.default.div`
  display: flex;
  > *:nth-child(2) {
    width: auto;
  }
  &:focus-within ${c}::after {
    display: none;
  }
`,R=({amount:e,onAmountChange:p,unit:b,onUnitChange:f,unitOptions:o,openLabel:h,emptyResultLabel:g="No result found",amountPlaceholder:v,unitPlaceholder:x,min:m,max:I,invalid:u=!1,readOnly:i=!1,id:y,"aria-labelledby":C,unitAriaLabel:w})=>{const s=j.useCallback((t,q)=>{const l=o.find($=>$.value===t);return l?typeof l.label=="string"?l.label:l.label(q):""},[o]);return a.jsxs(k,{children:[a.jsx(S,{value:e,onChange:p,withIncrementIcons:!1,placeholder:v,min:m,max:I,invalid:u,"data-testid":"value",readOnly:i,id:y}),a.jsx(c,{onChange:f,value:b||null,clearable:!1,openLabel:h,emptyResultLabel:g,placeholder:x,invalid:u,$invalid:u,"data-testid":"currency",readOnly:i,"aria-labelledby":C,"aria-label":w,children:o.map(t=>a.jsx(d.SelectInput.Option,{value:t.value,title:s(t.value,e),children:s(t.value,e)},t.value))})]})};exports.MetricInput=R;
