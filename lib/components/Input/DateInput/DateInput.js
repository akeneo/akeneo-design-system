"use strict";var w=Object.defineProperty;var c=Object.getOwnPropertySymbols;var C=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable;var x=(e,o,r)=>o in e?w(e,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[o]=r,b=(e,o)=>{for(var r in o||(o={}))C.call(o,r)&&x(e,r,o[r]);if(c)for(var r of c(o))f.call(o,r)&&x(e,r,o[r]);return e};var k=(e,o)=>{var r={};for(var t in e)C.call(e,t)&&o.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&c)for(var t of c(e))o.indexOf(t)<0&&f.call(e,t)&&(r[t]=e[t]);return r};var a=require("react/jsx-runtime"),u=require("react"),v=require("styled-components"),z=require("../../../shared/key.js"),D=require("../../../icons/LockIcon.js"),_=require("../../../icons/DateIcon.js"),i=require("../../../theme/theme.js"),m=require("../../../hooks/useShortcut.js");function E(e){return e&&e.__esModule?e:{default:e}}var p=E(v);const L=p.default.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
`,F=p.default.input`
  z-index: 0;
  width: 100%;
  height: 40px;
  border: 1px solid ${({invalid:e})=>e?i.getColor("red",100):i.getColor("grey",80)};
  border-radius: 2px;
  box-sizing: border-box;
  background: ${({readOnly:e})=>e?i.getColor("grey",20):i.getColor("white")};
  color: ${({readOnly:e})=>e?i.getColor("grey",100):i.getColor("grey",140)};
  text-transform: uppercase;
  font-size: ${i.getFontSize("default")};
  line-height: 40px;
  padding: 0 ${({readOnly:e})=>e?"35px":"15px"} 0 15px;
  outline-style: none;
  cursor: ${({readOnly:e})=>e?"not-allowed":"auto"};

  ${({readOnly:e})=>e&&v.css`
      overflow: hidden;
      text-overflow: ellipsis;
    `}

  &:focus-within {
    box-shadow: 0 0 0 2px ${i.getColor("blue",40)};
  }

  &::placeholder {
    opacity: 1;
    color: ${i.getColor("grey",100)};
  }

  &::-webkit-datetime-edit-fields-wrapper {
    color: ${({readOnly:e})=>e?i.getColor("grey",100):i.getColor("grey",140)};
  }

  &::-webkit-calendar-picker-indicator {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: auto;
    height: auto;
    color: transparent;
    background: transparent;
  }
`,K=p.default.div`
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
`,M=p.default(D.LockIcon)`
  color: ${i.getColor("grey",100)};
`,P=u.forwardRef((T,l)=>{var g=T,{invalid:e,onChange:o,value:r,readOnly:t,onSubmit:d}=g,$=k(g,["invalid","onChange","value","readOnly","onSubmit"]);const y=u.useRef(null);l=l!=null?l:y;const I=u.useCallback(n=>{var h;const s=n==null?void 0:n.target;!t&&((h=s==null?void 0:s.showPicker)==null||h.call(s))},[t]),q=u.useCallback(n=>{!t&&o&&o(n.currentTarget.value)},[t,o]),j=()=>{!t&&(d==null||d())};return m.useShortcut(z.Key.Enter,j,l),a.jsxs(L,{children:[a.jsx(F,b({ref:l,onChange:q,type:"date",readOnly:t,disabled:t,"aria-invalid":e,invalid:e,title:r,value:r,pattern:"\\d{4}-\\d{2}-\\d{2}",onClick:I},$)),a.jsxs(K,{readOnly:t,children:[t&&a.jsx(M,{size:16}),!t&&a.jsx(_.DateIcon,{size:16})]})]})});exports.DateInput=P;
