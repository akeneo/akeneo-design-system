"use strict";var l=require("styled-components"),t=require("../../../../theme/theme.js"),i=require("./highlightCell.js");function r(e){return e&&e.__esModule?e:{default:e}}var a=r(l);const n=a.default.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: not-allowed;
  padding: 0 10px;
  color: ${t.getColor("grey",100)};
  height: 39px;
  line-height: 39px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${i.highlightCell};
`;exports.TableInputReadOnlyCell=n;
