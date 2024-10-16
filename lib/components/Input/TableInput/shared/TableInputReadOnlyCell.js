"use strict";var t=require("styled-components"),l=require("../../../../theme/theme.js");function r(e){return e&&e.__esModule?e:{default:e}}var n=r(t);const a=n.default.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: not-allowed;
  padding: 0 10px;
  color: ${l.getColor("grey",100)};
  height: 39px;
  line-height: 39px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;exports.TableInputReadOnlyCell=a;
