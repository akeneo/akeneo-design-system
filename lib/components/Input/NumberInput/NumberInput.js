"use strict";var B=Object.defineProperty,E=Object.defineProperties;var L=Object.getOwnPropertyDescriptors;var a=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var h=(t,n,e)=>n in t?B(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e,m=(t,n)=>{for(var e in n||(n={}))v.call(n,e)&&h(t,e,n[e]);if(a)for(var e of a(n))I.call(n,e)&&h(t,e,n[e]);return t},y=(t,n)=>E(t,L(n));var k=(t,n)=>{var e={};for(var r in t)v.call(t,r)&&n.indexOf(r)<0&&(e[r]=t[r]);if(t!=null&&a)for(var r of a(t))n.indexOf(r)<0&&I.call(t,r)&&(e[r]=t[r]);return e};var u=require("react/jsx-runtime"),c=require("react"),C=require("styled-components"),W=require("../../../icons/ArrowDownIcon.js"),F=require("../../../icons/ArrowUpIcon.js"),H=require("../../../icons/LockIcon.js"),K=require("../../../shared/key.js"),o=require("../../../theme/theme.js"),M=require("../../../hooks/useShortcut.js");function $(t){return t&&t.__esModule?t:{default:t}}var G=$(c),p=$(C);const J=p.default.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
`,P=p.default.input`
  width: 100%;
  height: 40px;
  border: 1px solid ${({$invalid:t})=>t?o.getColor("red",100):o.getColor("grey",80)};
  border-radius: 2px;
  background: ${({readOnly:t})=>t?o.getColor("grey",20):o.getColor("white")};
  color: ${({readOnly:t})=>t?o.getColor("grey",100):o.getColor("grey",140)};
  font-size: ${o.getFontSize("default")};
  line-height: 40px;
  padding: 0 ${({readOnly:t})=>t?"35px":"15px"} 0 15px;
  box-sizing: border-box;
  outline-style: none;
  appearance: textfield;
  ${({readOnly:t})=>t&&C.css`
      overflow: hidden;
      text-overflow: ellipsis;
    `}

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }

  &:focus {
    box-shadow: 0 0 0 2px ${o.getColor("blue",40)};
  }

  &::placeholder {
    opacity: 1;
    color: ${o.getColor("grey",100)};
  }
`,Q=p.default(H.LockIcon)`
  position: absolute;
  right: 0;
  top: 0;
  margin: 12px;
  color: ${o.getColor("grey",100)};
`,S=p.default.div`
  position: absolute;
  right: 0;
  top: 0;
  margin: 0 12px;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  cursor: pointer;
  color: ${o.getColor("grey",100)};
`,V=G.default.forwardRef((X,i)=>{var g=X,{invalid:t,onChange:n,readOnly:e,step:r,value:l,onSubmit:x,withIncrementIcons:d=!0}=g,q=k(g,["invalid","onChange","readOnly","step","value","onSubmit","withIncrementIcons"]);const j=c.useRef(null);i=i!=null?i:j;const[_,z]=c.useState(!1),D=s=>{s.currentTarget.blur()},A=c.useCallback(s=>{z(s.currentTarget.validity.badInput),!e&&n&&n(s.currentTarget.value)},[e,n]),N=()=>{!e&&(x==null||x())};M.useShortcut(K.Key.Enter,N,i);const T=c.useCallback(()=>{i&&typeof i!="function"&&i.current&&!e&&n&&r!=="any"&&(i.current.stepUp(r),n(i.current.value))},[i,r,e,l,n]),U=c.useCallback(()=>{i&&typeof i!="function"&&i.current&&!e&&n&&r!=="any"&&(i.current.stepDown(r),n(i.current.value))},[i,r,e,l,n]),b=t||_&&l==="";return u.jsxs(J,{children:[u.jsx(P,y(m({ref:i,onChange:A,type:"number",readOnly:e,disabled:e,"aria-invalid":b,$invalid:b,autoComplete:"off",value:l,title:l,step:r},q),{onWheel:D})),e&&u.jsx(Q,{size:16}),!e&&d&&r!=="any"&&u.jsxs(S,{children:[u.jsx(F.ArrowUpIcon,{size:16,"data-testid":"increment-number-input",onClick:T}),u.jsx(W.ArrowDownIcon,{size:16,"data-testid":"decrement-number-input",onClick:U})]})]})});exports.NumberInput=V;
