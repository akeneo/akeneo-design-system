"use strict";var s=require("react/jsx-runtime"),l=require("react"),i=require("styled-components"),r=require("../../theme/theme.js");function c(t){return t&&t.__esModule?t:{default:t}}var d=c(i);const e="…",u=({currentPage:t,page:o,followPage:n})=>{const a=l.useCallback(()=>{o!==e&&n(parseInt(o))},[o,n]);return s.jsx(h,{onClick:a,"data-testid":"paginationItem",title:o!==e?`No. ${o}`:"",disabled:o===e,currentPage:t,type:"button",children:o})},b=i.css`
  border: 1px ${r.getColor("brand",100)} solid;
  color: ${r.getColor("brand",100)};
`,g=i.css`
  border: 1px ${r.getColor("grey",80)} solid;
  color: ${r.getColor("grey",100)};
`,x=i.css`
  cursor: default;
  :hover {
    background-color: ${r.getColor("white")};
  }
`,h=d.default.button`
  ${({currentPage:t})=>t?b:g}
  display: inline-block;
  border-width: 1px;
  font-size: 13px;
  font-weight: 400;
  text-transform: uppercase;
  border-radius: 4px;
  padding: 0 10px;
  height: 22px;
  line-height: 21px;
  cursor: pointer;
  font-family: inherit;
  transition: background-color 0.1s ease 0s;
  min-width: 40px;
  text-align: center;
  box-sizing: border-box;
  background-color: ${r.getColor("white")};

  :hover {
    background-color: ${r.getColor("grey",20)};
  }

  :focus {
    outline: 0;
  }

  ${({disabled:t})=>t?x:null}
`;exports.PAGINATION_SEPARATOR=e;exports.PaginationItem=u;
