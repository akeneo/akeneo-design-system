"use strict";var E=Object.defineProperty,L=Object.defineProperties;var M=Object.getOwnPropertyDescriptors;var p=Object.getOwnPropertySymbols;var m=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var d=(t,n,e)=>n in t?E(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e,I=(t,n)=>{for(var e in n||(n={}))m.call(n,e)&&d(t,e,n[e]);if(p)for(var e of p(n))v.call(n,e)&&d(t,e,n[e]);return t},y=(t,n)=>L(t,M(n));var $=(t,n)=>{var e={};for(var o in t)m.call(t,o)&&n.indexOf(o)<0&&(e[o]=t[o]);if(t!=null&&p)for(var o of p(t))n.indexOf(o)<0&&v.call(t,o)&&(e[o]=t[o]);return e};var l=require("react/jsx-runtime"),c=require("react"),k=require("styled-components"),W=require("../../../icons/ArrowDownIcon.js"),F=require("../../../icons/ArrowUpIcon.js"),H=require("../../../icons/LockIcon.js"),K=require("../../../shared/key.js"),i=require("../../../theme/theme.js"),V=require("../../../hooks/useShortcut.js");function C(t){return t&&t.__esModule?t:{default:t}}var G=C(c),s=C(k);const j=s.default.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
`,q=s.default.input`
  width: 100%;
  height: 40px;
  border: 1px solid ${({$invalid:t})=>t?i.getColor("red",100):i.getColor("grey",80)};
  border-radius: 2px;
  background: ${({$readOnly:t})=>t?i.getColor("grey",20):i.getColor("white")};
  color: ${({$readOnly:t})=>t?i.getColor("grey",100):i.getColor("grey",140)};
  font-size: ${i.getFontSize("default")};
  line-height: 40px;
  padding: 0 ${({$readOnly:t})=>t?"35px":"15px"} 0 15px;
  box-sizing: border-box;
  outline-style: none;
  appearance: textfield;
  ${({$readOnly:t})=>t&&k.css`
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
`,J=s.default(q).attrs({as:"div",inert:""})`
  && {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
    white-space: pre;
    pointer-events: none;
    color: transparent;
    background: none;
    box-shadow: none;
    border-color: transparent;
    mix-blend-mode: multiply;
  }

  ${j}:focus-within & {
    display: none;
  }
`,P=s.default(H.LockIcon)`
  position: absolute;
  right: 0;
  top: 0;
  margin: 12px;
  color: ${i.getColor("grey",100)};
`,Q=s.default.div`
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
`,S=G.default.forwardRef((X,r)=>{var h=X,{invalid:t,onChange:n,readOnly:e,step:o,value:u,onSubmit:b,withIncrementIcons:_=!0,highlightable:z=!1}=h,x=$(h,["invalid","onChange","readOnly","step","value","onSubmit","withIncrementIcons","highlightable"]);const D=c.useRef(null);r=r!=null?r:D;const[N,A]=c.useState(!1),f=a=>{a.currentTarget.blur()},T=c.useCallback(a=>{A(a.currentTarget.validity.badInput),!e&&n&&n(a.currentTarget.value)},[e,n]),U=()=>{!e&&(b==null||b())};V.useShortcut(K.Key.Enter,U,r);const w=c.useCallback(()=>{r&&typeof r!="function"&&r.current&&!e&&n&&o!=="any"&&(r.current.stepUp(o),n(r.current.value))},[r,o,e,u,n]),B=c.useCallback(()=>{r&&typeof r!="function"&&r.current&&!e&&n&&o!=="any"&&(r.current.stepDown(o),n(r.current.value))},[r,o,e,u,n]),g=t||N&&u==="";return l.jsxs(j,{children:[l.jsx(q,y(I({ref:r,onChange:T,type:"number",readOnly:e,disabled:e,"aria-invalid":g,$invalid:g,$readOnly:e,autoComplete:"off",value:u,title:u,step:o},x),{onWheel:f})),z&&l.jsx(J,{"aria-hidden":!0,className:x.className,$readOnly:e,children:u}),e&&l.jsx(P,{size:16}),!e&&_&&o!=="any"&&l.jsxs(Q,{children:[l.jsx(F.ArrowUpIcon,{size:16,"data-testid":"increment-number-input",onClick:w}),l.jsx(W.ArrowDownIcon,{size:16,"data-testid":"decrement-number-input",onClick:B})]})]})});exports.NumberInput=S;
