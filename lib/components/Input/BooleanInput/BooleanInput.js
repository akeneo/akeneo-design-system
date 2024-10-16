"use strict";var R=Object.defineProperty,z=Object.defineProperties;var D=Object.getOwnPropertyDescriptors;var d=Object.getOwnPropertySymbols;var $=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable;var x=(o,e,t)=>e in o?R(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,b=(o,e)=>{for(var t in e||(e={}))$.call(e,t)&&x(o,t,e[t]);if(d)for(var t of d(e))h.call(e,t)&&x(o,t,e[t]);return o},v=(o,e)=>z(o,D(e));var m=(o,e)=>{var t={};for(var l in o)$.call(o,l)&&e.indexOf(l)<0&&(t[l]=o[l]);if(o!=null&&d)for(var l of d(o))e.indexOf(l)<0&&h.call(o,l)&&(t[l]=o[l]);return t};var i=require("react/jsx-runtime"),w=require("react"),c=require("styled-components"),r=require("../../../theme/theme.js"),I=require("../../../theme/common.js"),S=require("../../../icons/DangerIcon.js"),L=require("../../../icons/EraseIcon.js"),M=require("../../../icons/LockIcon.js");function j(o){return o&&o.__esModule?o:{default:o}}var k=j(w),n=j(c);const N=n.default.div``,B=n.default.button`
  ${I.CommonStyle}
  height: ${({size:o})=>o==="small"?30:40}px;
  width: ${({size:o})=>o==="small"?48:60}px;
  display: inline-block;
  line-height: ${({size:o})=>o==="small"?26:36}px;
  text-align: center;
  vertical-align: middle;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  background: ${r.getColor("white")};

  ${({readOnly:o,invalid:e})=>o?c.css`
          border: 1px solid ${r.getColor("grey",60)};
          color: ${r.getColor("grey",80)};
          &:hover {
            background: ${r.getColor("white")};
            color: ${r.getColor("grey",80)};
          }
        `:c.css`
          border: 1px solid ${e?r.getColor("red",100):r.getColor("grey",80)};
          cursor: pointer;
          &:hover {
            background: ${r.getColor("grey",20)};
            color: ${r.getColor("grey",140)};
          }
        `}
`,T=n.default(B)`
  border-radius: 2px 0 0 2px;
  border-right-width: 1px;

  ${({$value:o,readOnly:e,invalid:t})=>o===!1&&c.css`
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
`,Y=n.default(B)`
  border-radius: 0 2px 2px 0;
  border-left-width: 0;

  ${({$value:o,readOnly:e,invalid:t})=>o===!0&&c.css`
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
`,A=n.default.button`
  ${I.CommonStyle}
  border: 0;
  margin-left: 5px;
  padding: 5px;
  vertical-align: middle;
  background: ${r.getColor("white")};
  color: ${r.getColor("grey",100)};
`,F=n.default(L.EraseIcon)`
  vertical-align: bottom;
  margin-right: 6px;
`,G=n.default.span`
  color: 1px solid ${r.getColor("grey",100)};
  vertical-align: middle;
  margin-left: 10px;
`,H=n.default(M.LockIcon)``,J=n.default.div`
  display: flex;
  font-weight: 400;
  padding-right: 20px;
  color: ${r.getColor("red",100)};
`,K=n.default.span`
  margin: 2px 0;
  color: ${r.getColor("red",100)};
`,P=n.default.div`
  font-size: 11px;
  padding-left: 4px;
  white-space: break-spaces;
  flex: 1;

  a {
    color: ${r.getColor("red",100)};
  }
`,Q=k.default.forwardRef((U,y)=>{var f=U,{value:o,readOnly:e=!1,onChange:t,clearable:l=!1,yesLabel:g,noLabel:u,clearLabel:q,invalid:a,children:C,size:p="normal"}=f,_=m(f,["value","readOnly","onChange","clearable","yesLabel","noLabel","clearLabel","invalid","children","size"]);const s=w.useCallback(E=>{t&&t(E)},[t,e]);return i.jsxs(N,v(b({role:"switch","aria-checked":o===null?void 0:o,ref:y},_),{children:[i.jsx(T,{$value:o,readOnly:e,"aria-readonly":e,disabled:e,onClick:()=>{s(!1)},title:u,"aria-invalid":a,invalid:a,size:p,children:u}),i.jsx(Y,{$value:o,readOnly:e,"aria-readonly":e,disabled:e,onClick:()=>{s(!0)},title:g,"aria-invalid":a,invalid:a,size:p,children:g}),o!==null&&!e&&l&&i.jsxs(A,{onClick:()=>{s(null)},children:[i.jsx(F,{size:16}),q]}),e&&i.jsx(G,{children:i.jsx(H,{size:16})}),a&&C&&i.jsxs(J,{children:[i.jsx(K,{children:k.default.cloneElement(i.jsx(S.DangerIcon,{size:13}))}),i.jsx(P,{children:C})]})]}))});exports.BooleanInput=Q;
