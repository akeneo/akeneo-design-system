"use strict";var A=Object.defineProperty;var s=Object.getOwnPropertySymbols;var b=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable;var g=(t,o,e)=>o in t?A(t,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[o]=e,v=(t,o)=>{for(var e in o||(o={}))b.call(o,e)&&g(t,e,o[e]);if(s)for(var e of s(o))h.call(o,e)&&g(t,e,o[e]);return t};var m=(t,o)=>{var e={};for(var i in t)b.call(t,i)&&o.indexOf(i)<0&&(e[i]=t[i]);if(t!=null&&s)for(var i of s(t))o.indexOf(i)<0&&h.call(t,i)&&(e[i]=t[i]);return e};var u=require("react/jsx-runtime"),c=require("react"),I=require("styled-components"),N=require("../../../icons/ArrowDownIcon.js"),U=require("../../../icons/ArrowUpIcon.js"),E=require("../../../icons/LockIcon.js"),L=require("../../../shared/key.js"),n=require("../../../theme/theme.js"),d=require("../../../hooks/useShortcut.js");function k(t){return t&&t.__esModule?t:{default:t}}var F=k(c),p=k(I);const K=p.default.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
`,M=p.default.input`
  width: 100%;
  height: 40px;
  border: 1px solid ${({invalid:t})=>t?n.getColor("red",100):n.getColor("grey",80)};
  border-radius: 2px;
  background: ${({readOnly:t})=>t?n.getColor("grey",20):n.getColor("white")};
  color: ${({readOnly:t})=>t?n.getColor("grey",100):n.getColor("grey",140)};
  font-size: ${n.getFontSize("default")};
  line-height: 40px;
  padding: 0 ${({readOnly:t})=>t?"35px":"15px"} 0 15px;
  box-sizing: border-box;
  outline-style: none;
  appearance: textfield;
  ${({readOnly:t})=>t&&I.css`
      overflow: hidden;
      text-overflow: ellipsis;
    `}

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }

  &:focus {
    box-shadow: 0 0 0 2px ${n.getColor("blue",40)};
  }

  &::placeholder {
    opacity: 1;
    color: ${n.getColor("grey",100)};
  }
`,T=p.default(E.LockIcon)`
  position: absolute;
  right: 0;
  top: 0;
  margin: 12px;
  color: ${n.getColor("grey",100)};
`,B=p.default.div`
  position: absolute;
  right: 0;
  top: 0;
  margin: 0 12px;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  cursor: pointer;
  color: ${n.getColor("grey",100)};
`,G=F.default.forwardRef((H,r)=>{var x=H,{invalid:t,onChange:o,readOnly:e,step:i,value:l,onSubmit:a,withIncrementIcons:C=!0}=x,y=m(x,["invalid","onChange","readOnly","step","value","onSubmit","withIncrementIcons"]);const $=c.useRef(null);r=r!=null?r:$;const q=c.useCallback(D=>{!e&&o&&o(D.currentTarget.value)},[e,o]),j=()=>{!e&&(a==null||a())};d.useShortcut(L.Key.Enter,j,r);const _=c.useCallback(()=>{r&&typeof r!="function"&&r.current&&!e&&o&&(r.current.stepUp(i),o(r.current.value))},[r,i,e,l,o]),z=c.useCallback(()=>{r&&typeof r!="function"&&r.current&&!e&&o&&(r.current.stepDown(i),o(r.current.value))},[r,i,e,l,o]);return u.jsxs(K,{children:[u.jsx(M,v({ref:r,onChange:q,type:"number",readOnly:e,disabled:e,"aria-invalid":t,invalid:t,autoComplete:"off",value:l,title:l},y)),e&&u.jsx(T,{size:16}),!e&&C&&u.jsxs(B,{children:[u.jsx(U.ArrowUpIcon,{size:16,"data-testid":"increment-number-input",onClick:_}),u.jsx(N.ArrowDownIcon,{size:16,"data-testid":"decrement-number-input",onClick:z})]})]})});exports.NumberInput=G;
