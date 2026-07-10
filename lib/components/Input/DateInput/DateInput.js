"use strict";var _=Object.defineProperty;var p=Object.getOwnPropertySymbols;var f=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var h=(e,t,r)=>t in e?_(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,y=(e,t)=>{for(var r in t||(t={}))f.call(t,r)&&h(e,r,t[r]);if(p)for(var r of p(t))v.call(t,r)&&h(e,r,t[r]);return e};var C=(e,t)=>{var r={};for(var o in e)f.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(e!=null&&p)for(var o of p(e))t.indexOf(o)<0&&v.call(e,o)&&(r[o]=e[o]);return r};var s=require("react/jsx-runtime"),a=require("react"),b=require("styled-components"),w=require("../../../shared/key.js"),E=require("../../../icons/LockIcon.js"),P=require("../../../icons/DateIcon.js"),l=require("../../../theme/theme.js"),T=require("../../../hooks/useShortcut.js"),V=require("../../IconButton/IconButton.js"),B=require("./parsePastedDate.js");function D(e){return e&&e.__esModule?e:{default:e}}var L=D(a),u=D(b);const A=u.default.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
`,F=u.default.input`
  z-index: 0;
  width: 100%;
  height: 40px;
  border: 1px solid ${({$invalid:e})=>e?l.getColor("red",100):l.getColor("grey",80)};
  border-radius: 2px;
  box-sizing: border-box;
  background: ${({readOnly:e})=>e?l.getColor("grey",20):l.getColor("white")};
  color: ${({readOnly:e})=>e?l.getColor("grey",100):l.getColor("grey",140)};
  text-transform: uppercase;
  font-size: ${l.getFontSize("default")};
  line-height: 40px;
  padding: 0 ${({readOnly:e})=>e?"35px":"15px"} 0 15px;
  outline-style: none;
  cursor: ${({readOnly:e})=>e?"not-allowed":"auto"};

  ${({readOnly:e})=>e&&b.css`
      overflow: hidden;
      text-overflow: ellipsis;
    `}

  &:focus-within {
    box-shadow: 0 0 0 2px ${l.getColor("blue",40)};
  }

  &::placeholder {
    opacity: 1;
    color: ${l.getColor("grey",100)};
  }

  &::-webkit-datetime-edit-fields-wrapper {
    color: ${({readOnly:e})=>e?l.getColor("grey",100):l.getColor("grey",140)};
  }

  &::-webkit-calendar-picker-indicator {
    position: absolute;
    top: 0;
    right: 12px;
    bottom: 0;
    width: 16px;
    height: 100%;
    cursor: pointer;
    opacity: 0;
  }
`,K=u.default.div`
  position: absolute;
  right: 12px;
  top: 0;
  padding-left: 12px;
  pointer-events: none;
  z-index: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`,M=u.default(E.LockIcon)`
  color: ${l.getColor("grey",100)};
`,G=u.default.div`
  position: absolute;
  right: 32px;
  top: 0;
  height: 100%;
  display: flex;
  align-items: center;
  z-index: 2;
  color: ${l.getColor("grey",100)};
`,H=a.forwardRef((J,n)=>{var x=J,{invalid:e,onChange:t,value:r,readOnly:o,onSubmit:d,children:$}=x,I=C(x,["invalid","onChange","value","readOnly","onSubmit","children"]);const k=a.useRef(null);n=n!=null?n:k;const g=L.default.Children.map($,i=>a.isValidElement(i)&&V.IconButton===i.type?a.cloneElement(i,{level:"tertiary",ghost:"borderless",size:"small"}):null),q=a.useCallback(i=>{!o&&t&&t(i.currentTarget.value)},[o,t]),m=a.useCallback(i=>{const c=i.currentTarget.value;c!==""&&(i.clipboardData.setData("text/plain",c),i.preventDefault())},[]),z=a.useCallback(i=>{if(o||!t)return;const c=B.parsePastedDate(i.clipboardData.getData("text"),i.currentTarget.type==="datetime-local");c!==null&&(i.preventDefault(),t(c))},[o,t]),j=()=>{!o&&(d==null||d())};return T.useShortcut(w.Key.Enter,j,n),s.jsxs(A,{children:[s.jsx(F,y({ref:n,onChange:q,onCopy:m,onPaste:z,type:"date",readOnly:o,disabled:o,"aria-invalid":e,$invalid:e,title:r,value:r,pattern:"\\d{4}-\\d{2}-\\d{2}"},I)),g&&g.length>0&&s.jsx(G,{children:g}),s.jsxs(K,{readOnly:o,children:[o&&s.jsx(M,{size:16}),!o&&s.jsx(P.DateIcon,{size:16})]})]})});exports.DateInput=H;
