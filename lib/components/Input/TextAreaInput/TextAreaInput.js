"use strict";var j=Object.defineProperty;var s=Object.getOwnPropertySymbols;var p=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var f=(e,t,o)=>t in e?j(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,C=(e,t)=>{for(var o in t||(t={}))p.call(t,o)&&f(e,o,t[o]);if(s)for(var o of s(t))x.call(t,o)&&f(e,o,t[o]);return e};var h=(e,t)=>{var o={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(o[r]=e[r]);if(e!=null&&s)for(var r of s(e))t.indexOf(r)<0&&x.call(e,r)&&(o[r]=e[r]);return o};var a=require("react/jsx-runtime"),d=require("react"),v=require("styled-components"),q=require("../../../icons/LockIcon.js"),l=require("../../../theme/theme.js"),R=require("../../IconButton/IconButton.js");function $(e){return e&&e.__esModule?e:{default:e}}var y=$(d),i=$(v);const T=i.default.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
`,k=v.css`
  border: 1px solid ${({$invalid:e})=>e?l.getColor("red",100):l.getColor("grey",80)};
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
`,A=i.default.textarea`
  ${k}
  resize: ${({$resizable:e})=>e?"both":"none"};
  height: 200px;
  padding: 10px 30px 10px 15px;

  &::placeholder {
    opacity: 1;
    color: ${l.getColor("grey",100)};
  }
`,S=i.default(q.LockIcon)`
  position: absolute;
  right: 0;
  top: 0;
  margin: 12px;
  color: ${l.getColor("grey",100)};
`,B={default:"grey100",warning:"yellow140",error:"red100"},E=i.default.div`
  font-size: ${l.getFontSize("small")};
  align-self: flex-end;
  color: ${({$variant:e})=>l.getColor(B[e])};
`,F=i.default.div`
  position: absolute;
  right: 0;
  top: 0;
  margin: 8px;
  color: ${l.getColor("grey",100)};
`,L=y.default.forwardRef((D,I)=>{var c=D,{value:e,invalid:t,onChange:o,readOnly:r,characterLeftLabel:u,children:b,characterLeftLabelVariant:m="default",resizable:w=!1}=c,z=h(c,["value","invalid","onChange","readOnly","characterLeftLabel","children","characterLeftLabelVariant","resizable"]);const _=d.useCallback(n=>{!r&&o&&o(n.currentTarget.value)},[r,o]),g=y.default.Children.map(b,n=>d.isValidElement(n)&&R.IconButton===n.type?d.cloneElement(n,{level:"tertiary",ghost:"borderless",size:"small"}):null);return a.jsxs(T,{children:[a.jsx(A,C({ref:I,value:e,onChange:_,type:"text",readOnly:r,disabled:r,"aria-invalid":t,$invalid:t,$resizable:w},z)),g&&a.jsx(F,{children:g}),r&&a.jsx(S,{size:16}),u&&a.jsx(E,{$variant:m,children:u})]})});exports.TextAreaInput=L;
