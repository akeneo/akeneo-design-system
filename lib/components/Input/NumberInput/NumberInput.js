"use strict";var A=Object.defineProperty;var s=Object.getOwnPropertySymbols;var b=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable;var g=(t,n,e)=>n in t?A(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e,v=(t,n)=>{for(var e in n||(n={}))b.call(n,e)&&g(t,e,n[e]);if(s)for(var e of s(n))h.call(n,e)&&g(t,e,n[e]);return t};var m=(t,n)=>{var e={};for(var o in t)b.call(t,o)&&n.indexOf(o)<0&&(e[o]=t[o]);if(t!=null&&s)for(var o of s(t))n.indexOf(o)<0&&h.call(t,o)&&(e[o]=t[o]);return e};var u=require("react/jsx-runtime"),c=require("react"),I=require("styled-components"),N=require("../../../icons/ArrowDownIcon.js"),U=require("../../../icons/ArrowUpIcon.js"),E=require("../../../icons/LockIcon.js"),L=require("../../../shared/key.js"),i=require("../../../theme/theme.js"),d=require("../../../hooks/useShortcut.js");function y(t){return t&&t.__esModule?t:{default:t}}var F=y(c),p=y(I);const K=p.default.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
`,M=p.default.input`
  width: 100%;
  height: 40px;
  border: 1px solid ${({invalid:t})=>t?i.getColor("red",100):i.getColor("grey",80)};
  border-radius: 2px;
  background: ${({readOnly:t})=>t?i.getColor("grey",20):i.getColor("white")};
  color: ${({readOnly:t})=>t?i.getColor("grey",100):i.getColor("grey",140)};
  font-size: ${i.getFontSize("default")};
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
    box-shadow: 0 0 0 2px ${i.getColor("blue",40)};
  }

  &::placeholder {
    opacity: 1;
    color: ${i.getColor("grey",100)};
  }
`,T=p.default(E.LockIcon)`
  position: absolute;
  right: 0;
  top: 0;
  margin: 12px;
  color: ${i.getColor("grey",100)};
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
  color: ${i.getColor("grey",100)};
`,G=F.default.forwardRef((H,r)=>{var x=H,{invalid:t,onChange:n,readOnly:e,step:o,value:l,onSubmit:a,withIncrementIcons:k=!0}=x,C=m(x,["invalid","onChange","readOnly","step","value","onSubmit","withIncrementIcons"]);const $=c.useRef(null);r=r!=null?r:$;const q=c.useCallback(D=>{!e&&n&&n(D.currentTarget.value)},[e,n]),j=()=>{!e&&(a==null||a())};d.useShortcut(L.Key.Enter,j,r);const _=c.useCallback(()=>{r&&typeof r!="function"&&r.current&&!e&&n&&o!=="any"&&(r.current.stepUp(o),n(r.current.value))},[r,o,e,l,n]),z=c.useCallback(()=>{r&&typeof r!="function"&&r.current&&!e&&n&&o!=="any"&&(r.current.stepDown(o),n(r.current.value))},[r,o,e,l,n]);return u.jsxs(K,{children:[u.jsx(M,v({ref:r,onChange:q,type:"number",readOnly:e,disabled:e,"aria-invalid":t,invalid:t,autoComplete:"off",value:l,title:l,step:o},C)),e&&u.jsx(T,{size:16}),!e&&k&&o!=="any"&&u.jsxs(B,{children:[u.jsx(U.ArrowUpIcon,{size:16,"data-testid":"increment-number-input",onClick:_}),u.jsx(N.ArrowDownIcon,{size:16,"data-testid":"decrement-number-input",onClick:z})]})]})});exports.NumberInput=G;
