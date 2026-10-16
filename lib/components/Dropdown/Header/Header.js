"use strict";var a=require("react/jsx-runtime"),d=require("styled-components"),o=require("../../../theme/theme.js"),n=require("react");function r(e){return e&&e.__esModule?e:{default:e}}var i=r(d),u=r(n);const l=i.default.div`
  box-sizing: border-box;
  border-bottom: 1px solid ${o.getColor("brand",100)};
  height: 34px;
  line-height: 34px;
  margin: 0 20px 10px 20px;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  & > * {
    flex-grow: 1;
  }
`,s="[data-dropdown-header]",f=u.default.forwardRef(({children:e},t)=>a.jsx(l,{"data-dropdown-header":!0,ref:t,children:e}));exports.HEADER_SELECTOR=s;exports.Header=f;
