"use strict";var g=require("react/jsx-runtime"),o=require("react"),u=require("styled-components"),t=require("../../theme/theme.js");function k(e){return e&&e.__esModule?e:{default:e}}var b=k(u);const s="…",m=({currentPage:e,page:r,followPage:i,numberOfPages:c})=>{const[d,x]=o.useState(!1),[p,f]=o.useState(""),h=o.useRef(null),n=o.useCallback(()=>{x(!1),f("")},[]),C=o.useCallback(()=>{r===s?x(!0):i(parseInt(r))},[r,i]),I=o.useCallback(a=>{if(a.key==="Enter"){const l=parseInt(p,10);isNaN(l)?n():l<1?(i(1),n()):l>c?(i(c),n()):(i(l),n())}else a.key==="Escape"&&n()},[p,c,i,n]),y=o.useCallback(()=>{n()},[n]);return o.useEffect(()=>{d&&h.current&&h.current.focus()},[d]),r===s&&d?g.jsx(w,{ref:h,type:"text",value:p,onChange:a=>f(a.target.value),onKeyDown:I,onBlur:y,placeholder:s}):g.jsx(R,{onClick:C,"data-testid":"paginationItem",title:r!==s?`No. ${r}`:"",currentPage:e,disabled:!1,type:"button",children:r})},$=u.css`
  border: 1px ${t.getColor("brand",100)} solid;
  color: ${t.getColor("brand",100)};
`,v=u.css`
  border: 1px ${t.getColor("grey",80)} solid;
  color: ${t.getColor("grey",100)};
`,A=u.css`
  cursor: default;
  :hover {
    background-color: ${t.getColor("white")};
  }
`,R=b.default.button`
  ${({currentPage:e})=>e?$:v}
  display: inline-block;
  border-width: 1px;
  font-size: 13px;
  font-weight: 400;
  text-transform: uppercase;
  border-radius: 16px;
  padding: 0 10px;
  height: 22px;
  line-height: 21px;
  cursor: pointer;
  font-family: inherit;
  transition: background-color 0.1s ease 0s;
  min-width: 40px;
  text-align: center;
  box-sizing: border-box;
  background-color: ${t.getColor("white")};

  :hover {
    background-color: ${t.getColor("grey",20)};
  }

  :focus {
    outline: 0;
  }

  ${({disabled:e})=>e?A:null}
`,w=b.default.input`
  border: none;
  background: transparent;
  font-size: 13px;
  font-weight: 400;
  text-transform: uppercase;
  padding: 0 10px;
  height: 22px;
  line-height: 21px;
  font-family: inherit;
  min-width: 40px;
  width: 40px;
  text-align: center;
  box-sizing: border-box;
  color: ${t.getColor("grey",100)};

  ::placeholder {
    color: ${t.getColor("grey",100)};
  }

  :focus {
    outline: none;
  }
`;exports.PAGINATION_SEPARATOR=s;exports.PaginationItem=m;
