"use strict";var a=require("react/jsx-runtime"),i=require("styled-components"),d=require("../../../theme/theme.js"),o=require("react");function r(e){return e&&e.__esModule?e:{default:e}}var n=r(i),u=r(o);const l=n.default.div`
  box-sizing: border-box;
  border-bottom: 1px solid ${d.getColor("brand",100)};
  height: 34px;
  line-height: 34px;
  margin: 0 20px 10px 20px;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  & > * {
    flex-grow: 1;
  }
`,s=u.default.forwardRef(({children:e},t)=>a.jsx(l,{ref:t,children:e}));exports.Header=s;
