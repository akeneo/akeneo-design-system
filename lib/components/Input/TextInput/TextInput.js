"use strict";var j=Object.defineProperty;var c=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var h=(e,o,t)=>o in e?j(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,f=(e,o)=>{for(var t in o||(o={}))v.call(o,t)&&h(e,t,o[t]);if(c)for(var t of c(o))C.call(o,t)&&h(e,t,o[t]);return e};var y=(e,o)=>{var t={};for(var l in e)v.call(e,l)&&o.indexOf(l)<0&&(t[l]=e[l]);if(e!=null&&c)for(var l of c(e))o.indexOf(l)<0&&C.call(e,l)&&(t[l]=e[l]);return t};var u=require("react/jsx-runtime"),n=require("react"),$=require("styled-components"),m=require("../../../icons/LockIcon.js"),k=require("../../../shared/key.js"),r=require("../../../theme/theme.js"),E=require("../../../hooks/useShortcut.js"),T=require("../../IconButton/IconButton.js");function b(e){return e&&e.__esModule?e:{default:e}}var w=b(n),a=b($);const B=a.default.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
`,F=a.default.input`
  width: 100%;
  height: 40px;
  border: 1px solid ${({invalid:e})=>e?r.getColor("red",100):r.getColor("grey",80)};
  border-radius: 2px;
  box-sizing: border-box;
  background: ${({readOnly:e})=>e?r.getColor("grey",20):r.getColor("white")};
  color: ${({readOnly:e})=>e?r.getColor("grey",100):r.getColor("grey",140)};
  font-size: ${r.getFontSize("default")};
  line-height: 40px;
  padding: 0 ${({readOnly:e})=>e?"35px":"15px"} 0 15px;
  outline-style: none;
  cursor: ${({readOnly:e})=>e?"not-allowed":"auto"};
  ${({readOnly:e})=>e&&$.css`
      overflow: hidden;
      text-overflow: ellipsis;
    `}
  &:focus-within {
    box-shadow: 0 0 0 2px ${r.getColor("blue",40)};
  }

  &::placeholder {
    opacity: 1;
    color: ${r.getColor("grey",100)};
  }
`,L=a.default(m.LockIcon)`
  position: absolute;
  right: 0;
  top: 0;
  margin: 12px;
  color: ${r.getColor("grey",100)};
`,A=a.default.div`
  font-size: ${r.getFontSize("small")};
  align-self: flex-end;
  color: ${r.getColor("grey",100)};
`,D=a.default.div`
  position: absolute;
  right: 0;
  top: 0;
  margin: 8px;
  color: ${r.getColor("grey",100)};
`,K=n.forwardRef((M,i)=>{var x=M,{invalid:e,onChange:o,readOnly:t,characterLeftLabel:l,onSubmit:g,children:I}=x,p=y(x,["invalid","onChange","readOnly","characterLeftLabel","onSubmit","children"]);const q=n.useRef(null);i=i!=null?i:q;const z=n.useCallback(s=>{!t&&o&&o(s.currentTarget.value)},[t,o]),_=()=>{!t&&(g==null||g())};E.useShortcut(k.Key.Enter,_,i);const d=w.default.Children.map(I,s=>n.isValidElement(s)&&T.IconButton===s.type?n.cloneElement(s,{level:"tertiary",ghost:"borderless",size:"small"}):null);return u.jsxs(B,{children:[u.jsx(F,f({ref:i,onChange:z,type:"text",readOnly:t,disabled:t,"aria-invalid":e,invalid:e,title:p.value},p)),d&&u.jsx(D,{children:d}),t&&u.jsx(L,{size:16}),l&&u.jsx(A,{children:l})]})});exports.TextInput=K;
