"use strict";var w=Object.defineProperty;var i=Object.getOwnPropertySymbols;var c=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable;var u=(e,t,o)=>t in e?w(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,x=(e,t)=>{for(var o in t||(t={}))c.call(t,o)&&u(e,o,t[o]);if(i)for(var o of i(t))g.call(t,o)&&u(e,o,t[o]);return e};var f=(e,t)=>{var o={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(o[r]=e[r]);if(e!=null&&i)for(var r of i(e))t.indexOf(r)<0&&g.call(e,r)&&(o[r]=e[r]);return o};var a=require("react/jsx-runtime"),p=require("react"),h=require("styled-components"),m=require("../../../icons/LockIcon.js"),l=require("../../../theme/theme.js");function C(e){return e&&e.__esModule?e:{default:e}}var z=C(p),n=C(h);const _=n.default.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
`,I=h.css`
  border: 1px solid ${({invalid:e})=>e?l.getColor("red",100):l.getColor("grey",80)};
  border-radius: 2px;
  color: ${({readOnly:e})=>e?l.getColor("grey",100):l.getColor("grey",140)};
  font-size: ${l.getFontSize("default")};
  line-height: 20px;
  width: 100%;
  box-sizing: border-box;
  font-family: inherit;
  outline-style: none;
  background: ${({readOnly:e})=>e?l.getColor("grey",20):l.getColor("white")};
  cursor: ${({readOnly:e})=>e?"not-allowed":"auto"};

  &:focus-within {
    box-shadow: 0 0 0 2px ${l.getColor("blue",40)};
  }

  a.rdw-dropdown-selectedtext > span {
    color: ${({readOnly:e})=>e?l.getColor("grey",100):l.getColor("grey",140)};
  }
`,j=n.default.textarea`
  ${I}
  resize: none;
  height: 200px;
  padding: 10px 30px 10px 15px;

  &::placeholder {
    opacity: 1;
    color: ${l.getColor("grey",100)};
  }
`,q=n.default(m.LockIcon)`
  position: absolute;
  right: 0;
  top: 0;
  margin: 12px;
  color: ${l.getColor("grey",100)};
`,R=n.default.div`
  font-size: ${l.getFontSize("small")};
  align-self: flex-end;
  color: ${l.getColor("grey",100)};
`,T=z.default.forwardRef((k,$)=>{var d=k,{value:e,invalid:t,onChange:o,readOnly:r,characterLeftLabel:s}=d,y=f(d,["value","invalid","onChange","readOnly","characterLeftLabel"]);const b=p.useCallback(v=>{!r&&o&&o(v.currentTarget.value)},[r,o]);return a.jsxs(_,{children:[a.jsx(j,x({ref:$,value:e,onChange:b,type:"text",readOnly:r,disabled:r,"aria-invalid":t,invalid:t},y)),r&&a.jsx(q,{size:16}),s&&a.jsx(R,{children:s})]})});exports.TextAreaInput=T;
