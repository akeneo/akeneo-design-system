"use strict";var I=Object.defineProperty;var n=Object.getOwnPropertySymbols;var d=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable;var p=(e,o,t)=>o in e?I(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,v=(e,o)=>{for(var t in o||(o={}))d.call(o,t)&&p(e,t,o[t]);if(n)for(var t of n(o))h.call(o,t)&&p(e,t,o[t]);return e};var C=(e,o)=>{var t={};for(var r in e)d.call(e,r)&&o.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&n)for(var r of n(e))o.indexOf(r)<0&&h.call(e,r)&&(t[r]=e[r]);return t};var s=require("react/jsx-runtime"),c=require("react"),$=require("styled-components"),z=require("../../../icons/LockIcon.js"),j=require("../../../shared/key.js"),l=require("../../../theme/theme.js"),k=require("../../../hooks/useShortcut.js");function _(e){return e&&e.__esModule?e:{default:e}}var u=_($);const T=u.default.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
`,w=u.default.input`
  width: 100%;
  height: 40px;
  border: 1px solid ${({invalid:e})=>e?l.getColor("red",100):l.getColor("grey",80)};
  border-radius: 2px;
  box-sizing: border-box;
  background: ${({readOnly:e})=>e?l.getColor("grey",20):l.getColor("white")};
  color: ${({readOnly:e})=>e?l.getColor("grey",100):l.getColor("grey",140)};
  font-size: ${l.getFontSize("default")};
  line-height: 40px;
  padding: 0 ${({readOnly:e})=>e?"35px":"15px"} 0 15px;
  outline-style: none;
  cursor: ${({readOnly:e})=>e?"not-allowed":"auto"};
  ${({readOnly:e})=>e&&$.css`
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
`,E=u.default(z.LockIcon)`
  position: absolute;
  right: 0;
  top: 0;
  margin: 12px;
  color: ${l.getColor("grey",100)};
`,F=u.default.div`
  font-size: ${l.getFontSize("small")};
  align-self: flex-end;
  color: ${l.getColor("grey",100)};
`,L=c.forwardRef((m,i)=>{var x=m,{invalid:e,onChange:o,readOnly:t,characterLeftLabel:r,onSubmit:a}=x,g=C(x,["invalid","onChange","readOnly","characterLeftLabel","onSubmit"]);const y=c.useRef(null);i=i!=null?i:y;const f=c.useCallback(q=>{!t&&o&&o(q.currentTarget.value)},[t,o]),b=()=>{!t&&(a==null||a())};return k.useShortcut(j.Key.Enter,b,i),s.jsxs(T,{children:[s.jsx(w,v({ref:i,onChange:f,type:"text",readOnly:t,disabled:t,"aria-invalid":e,invalid:e,title:g.value},g)),t&&s.jsx(E,{size:16}),r&&s.jsx(F,{children:r})]})});exports.TextInput=L;
