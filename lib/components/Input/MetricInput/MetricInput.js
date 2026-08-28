"use strict";var a=require("react/jsx-runtime"),_=require("react"),M=require("../NumberInput/NumberInput.js"),s=require("../SelectInput/SelectInput.js"),N=require("styled-components"),r=require("../../../theme/theme.js");function S(e){return e&&e.__esModule?e:{default:e}}var n=S(N);const k=n.default(M.NumberInput)`
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  min-width: 60px;
  &:focus {
    border-right: 1px solid ${r.getColor("grey",80)};
    width: calc(100% - 2px);
  }
`,c=n.default(s.SelectInput)`
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
    color: ${r.getColor("grey",100)};
  }
`,R=n.default.div`
  display: flex;
  > *:nth-child(2) {
    width: auto;
  }
  &:focus-within ${c}::after {
    display: none;
  }
`,D=({amount:e,onAmountChange:p,unit:b,onUnitChange:f,unitOptions:o,openLabel:h,emptyResultLabel:g="No result found",amountPlaceholder:v,unitPlaceholder:x,min:m,max:I,invalid:u=!1,readOnly:i=!1,id:y,"aria-labelledby":C,unitAriaLabel:w,highlightable:q=!1})=>{const d=_.useCallback((t,$)=>{const l=o.find(j=>j.value===t);return l?typeof l.label=="string"?l.label:l.label($):""},[o]);return a.jsxs(R,{children:[a.jsx(k,{value:e,onChange:p,withIncrementIcons:!1,placeholder:v,min:m,max:I,invalid:u,"data-testid":"value",readOnly:i,id:y,highlightable:q}),a.jsx(c,{onChange:f,value:b||null,clearable:!1,openLabel:h,emptyResultLabel:g,placeholder:x,invalid:u,$invalid:u,"data-testid":"currency",readOnly:i,"aria-labelledby":C,"aria-label":w,children:o.map(t=>a.jsx(s.SelectInput.Option,{value:t.value,title:d(t.value,e),children:d(t.value,e)},t.value))})]})};exports.MetricInput=D;
