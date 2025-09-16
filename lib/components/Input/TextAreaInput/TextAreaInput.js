"use strict";var _=Object.defineProperty;var s=Object.getOwnPropertySymbols;var f=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable;var x=(e,o,t)=>o in e?_(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,C=(e,o)=>{for(var t in o||(o={}))f.call(o,t)&&x(e,t,o[t]);if(s)for(var t of s(o))p.call(o,t)&&x(e,t,o[t]);return e};var h=(e,o)=>{var t={};for(var r in e)f.call(e,r)&&o.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&s)for(var r of s(e))o.indexOf(r)<0&&p.call(e,r)&&(t[r]=e[r]);return t};var i=require("react/jsx-runtime"),u=require("react"),v=require("styled-components"),j=require("../../../icons/LockIcon.js"),l=require("../../../theme/theme.js"),q=require("../../IconButton/IconButton.js");function b(e){return e&&e.__esModule?e:{default:e}}var y=b(u),a=b(v);const R=a.default.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
`,T=v.css`
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
`,k=a.default.textarea`
  ${T}
  resize: none;
  height: 200px;
  padding: 10px 30px 10px 15px;

  &::placeholder {
    opacity: 1;
    color: ${l.getColor("grey",100)};
  }
`,A=a.default(j.LockIcon)`
  position: absolute;
  right: 0;
  top: 0;
  margin: 12px;
  color: ${l.getColor("grey",100)};
`,S={default:"grey100",warning:"yellow140",error:"red100"},B=a.default.div`
  font-size: ${l.getFontSize("small")};
  align-self: flex-end;
  color: ${({variant:e})=>l.getColor(S[e])};
`,E=a.default.div`
  position: absolute;
  right: 0;
  top: 0;
  margin: 8px;
  color: ${l.getColor("grey",100)};
`,F=y.default.forwardRef((L,z)=>{var c=L,{value:e,invalid:o,onChange:t,readOnly:r,characterLeftLabel:d,children:m,characterLeftLabelVariant:$="default"}=c,w=h(c,["value","invalid","onChange","readOnly","characterLeftLabel","children","characterLeftLabelVariant"]);const I=u.useCallback(n=>{!r&&t&&t(n.currentTarget.value)},[r,t]),g=y.default.Children.map(m,n=>u.isValidElement(n)&&q.IconButton===n.type?u.cloneElement(n,{level:"tertiary",ghost:"borderless",size:"small"}):null);return i.jsxs(R,{children:[i.jsx(k,C({ref:z,value:e,onChange:I,type:"text",readOnly:r,disabled:r,"aria-invalid":o,invalid:o},w)),g&&i.jsx(E,{children:g}),r&&i.jsx(A,{size:16}),d&&i.jsx(B,{variant:$,children:d})]})});exports.TextAreaInput=F;
