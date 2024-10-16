"use strict";var l=require("react/jsx-runtime"),i=require("styled-components"),t=require("../../../theme/theme.js"),o=require("react");function r(e){return e&&e.__esModule?e:{default:e}}var u=r(i),n=r(o);const s=u.default.div`
  font-size: ${t.getFontSize("small")};
  text-transform: uppercase;
  color: ${t.getColor("brand",100)};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,f=n.default.forwardRef(({children:e},a)=>l.jsx(s,{ref:a,children:e}));exports.Title=f;
