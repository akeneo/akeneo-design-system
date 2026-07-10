"use strict";var D=Object.defineProperty,S=Object.defineProperties;var G=Object.getOwnPropertyDescriptors;var s=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable;var b=(o,e,t)=>e in o?D(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,k=(o,e)=>{for(var t in e||(e={}))v.call(e,t)&&b(o,t,e[t]);if(s)for(var t of s(e))m.call(e,t)&&b(o,t,e[t]);return o},w=(o,e)=>S(o,G(e));var I=(o,e)=>{var t={};for(var n in o)v.call(o,n)&&e.indexOf(n)<0&&(t[n]=o[n]);if(o!=null&&s)for(var n of s(o))e.indexOf(n)<0&&m.call(o,n)&&(t[n]=o[n]);return t};var l=require("react/jsx-runtime"),B=require("react"),a=require("styled-components"),r=require("../../../theme/theme.js"),y=require("../../../theme/common.js"),M=require("../../../icons/DangerIcon.js"),N=require("../../../icons/EraseIcon.js"),T=require("../../../icons/LockIcon.js");function q(o){return o&&o.__esModule?o:{default:o}}var j=q(B),i=q(a);const Y=i.default.div``,A=i.default.span`
  vertical-align: middle;
  ${({$fit:o})=>o==="contain"&&a.css`
      display: inline-table;
      max-width: 600px;
    `}
`,_=i.default.button`
  ${y.CommonStyle}
  height: ${({$size:o})=>o==="small"?30:40}px;
  ${({$fit:o,$size:e})=>o==="contain"?a.css`
          display: table-cell;
          width: 50%;
          padding: 0 12px;
        `:a.css`
          display: inline-block;
          width: ${e==="small"?48:60}px;
        `}
  line-height: ${({$size:o})=>o==="small"?26:36}px;
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;
  overflow: hidden;
  ${({$fit:o})=>o==="fix"&&a.css`
      text-overflow: ellipsis;
    `}
  background: ${r.getColor("white")};

  ${({$readOnly:o,$invalid:e})=>o?a.css`
          border: 1px solid ${r.getColor("grey",60)};
          color: ${r.getColor("grey",80)};
          &:hover {
            background: ${r.getColor("white")};
            color: ${r.getColor("grey",80)};
          }
        `:a.css`
          border: 1px solid ${e?r.getColor("red",100):r.getColor("grey",80)};
          cursor: pointer;
          &:hover {
            background: ${r.getColor("grey",20)};
            color: ${r.getColor("grey",140)};
          }
        `}
`,F=i.default(_)`
  border-radius: 2px 0 0 2px;
  border-right-width: 1px;

  ${({$value:o,$readOnly:e,$invalid:t})=>o===!1&&a.css`
      background: ${r.getColor("grey",e?80:100)};
      border-color: ${t?r.getColor("red",100):r.getColor("grey",e?80:100)};
      color: ${r.getColor("white")};
      &:hover {
        background: ${r.getColor("grey",e?80:120)};
        color: ${r.getColor("white")};
      }
      &:active {
        background: ${r.getColor("grey",e?80:140)};
      }
    `}
`,H=i.default(_)`
  border-radius: 0 2px 2px 0;
  border-left-width: 0;

  ${({$value:o,$readOnly:e,$invalid:t})=>o===!0&&a.css`
      background: ${r.getColor("blue",e?60:100)};
      border-color: ${t?r.getColor("red",100):r.getColor("grey",e?60:100)};
      color: ${r.getColor("white")};

      &:hover {
        background: ${r.getColor("blue",e?60:120)};
        color: ${r.getColor("white")};
      }

      &:active {
        background: ${r.getColor("blue",e?60:140)};
      }
    `}
`,J=i.default.button`
  ${y.CommonStyle}
  border: 0;
  margin-left: 5px;
  padding: 5px;
  vertical-align: middle;
  background: ${r.getColor("white")};
  color: ${r.getColor("grey",100)};
`,K=i.default(N.EraseIcon)`
  vertical-align: bottom;
  margin-right: 6px;
  cursor: pointer;
`,L=i.default.span`
  color: 1px solid ${r.getColor("grey",100)};
  vertical-align: middle;
  margin-left: 10px;
`,P=i.default(T.LockIcon)``,Q=i.default.div`
  display: flex;
  font-weight: 400;
  padding-right: 20px;
  color: ${r.getColor("red",100)};
`,U=i.default.span`
  margin: 2px 0;
  color: ${r.getColor("red",100)};
`,V=i.default.div`
  font-size: 11px;
  padding-left: 4px;
  white-space: break-spaces;
  flex: 1;

  a {
    color: ${r.getColor("red",100)};
  }
`,W=j.default.forwardRef((X,E)=>{var h=X,{value:o,readOnly:e=!1,onChange:t,clearable:n=!1,yesLabel:u,noLabel:p,clearLabel:f,clearButtonDisplay:x="full",invalid:c,children:$,size:C="normal",fit:d="fix"}=h,z=I(h,["value","readOnly","onChange","clearable","yesLabel","noLabel","clearLabel","clearButtonDisplay","invalid","children","size","fit"]);const g=B.useCallback(R=>{t&&t(R)},[t,e]);return l.jsxs(Y,w(k({role:"switch","aria-checked":o===null?void 0:o,ref:E},z),{children:[l.jsxs(A,{$fit:d,children:[l.jsx(F,{$value:o,$readOnly:e,"aria-readonly":e,disabled:e,onClick:()=>{g(!1)},title:p,"aria-invalid":c,$invalid:c,$size:C,$fit:d,children:p}),l.jsx(H,{$value:o,$readOnly:e,"aria-readonly":e,disabled:e,onClick:()=>{g(!0)},title:u,"aria-invalid":c,$invalid:c,$size:C,$fit:d,children:u})]}),o!==null&&!e&&n&&l.jsxs(J,{onClick:()=>{g(null)},title:x==="icon"?f:void 0,children:[l.jsx(K,{size:16}),x==="full"&&f]}),e&&l.jsx(L,{children:l.jsx(P,{size:16})}),c&&$&&l.jsxs(Q,{children:[l.jsx(U,{children:j.default.cloneElement(l.jsx(M.DangerIcon,{size:13}))}),l.jsx(V,{children:$})]})]}))});exports.BooleanInput=W;
