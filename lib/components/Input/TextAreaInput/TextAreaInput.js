"use strict";var _=Object.defineProperty;var s=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable;var p=(e,t,o)=>t in e?_(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,C=(e,t)=>{for(var o in t||(t={}))x.call(t,o)&&p(e,o,t[o]);if(s)for(var o of s(t))f.call(t,o)&&p(e,o,t[o]);return e};var h=(e,t)=>{var o={};for(var r in e)x.call(e,r)&&t.indexOf(r)<0&&(o[r]=e[r]);if(e!=null&&s)for(var r of s(e))t.indexOf(r)<0&&f.call(e,r)&&(o[r]=e[r]);return o};var a=require("react/jsx-runtime"),u=require("react"),v=require("styled-components"),j=require("../../../icons/LockIcon.js"),l=require("../../../theme/theme.js"),q=require("../../IconButton/IconButton.js");function b(e){return e&&e.__esModule?e:{default:e}}var y=b(u),i=b(v);const R=i.default.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
`,T=v.css`
  border: 1px solid ${({invalid:e})=>e?l.getColor("red",100):l.getColor("grey",80)};
  border-radius: 2px;
  color: ${({readOnly:e,isValueHidden:t})=>t?"transparent":e?l.getColor("grey",100):l.getColor("grey",140)};
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
`,k=i.default.textarea`
  ${T}
  resize: none;
  height: 200px;
  padding: 10px 30px 10px 15px;

  &::placeholder {
    opacity: 1;
    color: ${l.getColor("grey",100)};
  }
`,A=i.default(j.LockIcon)`
  position: absolute;
  right: 0;
  top: 0;
  margin: 12px;
  color: ${l.getColor("grey",100)};
`,S={default:"grey100",warning:"yellow140",error:"red100"},B=i.default.div`
  font-size: ${l.getFontSize("small")};
  align-self: flex-end;
  color: ${({variant:e})=>l.getColor(S[e])};
`,E=i.default.div`
  position: absolute;
  right: 0;
  top: 0;
  margin: 8px;
  color: ${l.getColor("grey",100)};
`,F=y.default.forwardRef((L,z)=>{var c=L,{value:e,invalid:t,onChange:o,readOnly:r,characterLeftLabel:d,children:m,characterLeftLabelVariant:$="default"}=c,w=h(c,["value","invalid","onChange","readOnly","characterLeftLabel","children","characterLeftLabelVariant"]);const I=u.useCallback(n=>{!r&&o&&o(n.currentTarget.value)},[r,o]),g=y.default.Children.map(m,n=>u.isValidElement(n)&&q.IconButton===n.type?u.cloneElement(n,{level:"tertiary",ghost:"borderless",size:"small"}):null);return a.jsxs(R,{children:[a.jsx(k,C({ref:z,value:e,onChange:I,type:"text",readOnly:r,disabled:r,"aria-invalid":t,invalid:t},w)),g&&a.jsx(E,{children:g}),r&&a.jsx(A,{size:16}),d&&a.jsx(B,{variant:$,children:d})]})});exports.TextAreaInput=F;
