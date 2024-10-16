"use strict";var j=Object.defineProperty,z=Object.defineProperties;var _=Object.getOwnPropertyDescriptors;var l=Object.getOwnPropertySymbols;var c=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;var g=(e,r,o)=>r in e?j(e,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[r]=o,p=(e,r)=>{for(var o in r||(r={}))c.call(r,o)&&g(e,o,r[o]);if(l)for(var o of l(r))u.call(r,o)&&g(e,o,r[o]);return e},h=(e,r)=>z(e,_(r));var f=(e,r)=>{var o={};for(var t in e)c.call(e,t)&&r.indexOf(t)<0&&(o[t]=e[t]);if(e!=null&&l)for(var t of l(e))r.indexOf(t)<0&&u.call(e,t)&&(o[t]=e[t]);return o};var d=require("react/jsx-runtime"),w=require("react"),b=require("styled-components"),q=require("../../../icons/LockIcon.js"),i=require("../../../theme/theme.js"),I=require("./RichTextEditor.js");function m(e){return e&&e.__esModule?e:{default:e}}var k=m(w),a=m(b);const A=a.default.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
`,C=b.css`
  border: 1px solid ${({invalid:e})=>e?i.getColor("red",100):i.getColor("grey",80)};
  border-radius: 2px;
  color: ${({readOnly:e})=>e?i.getColor("grey",100):i.getColor("grey",140)};
  font-size: ${i.getFontSize("default")};
  line-height: 20px;
  width: 100%;
  box-sizing: border-box;
  font-family: inherit;
  outline-style: none;
  background: ${({readOnly:e})=>e?i.getColor("grey",20):i.getColor("white")};
  cursor: ${({readOnly:e})=>e?"not-allowed":"auto"};

  &:focus-within {
    box-shadow: 0 0 0 2px ${i.getColor("blue",40)};
  }

  a.rdw-dropdown-selectedtext > span {
    color: ${({readOnly:e})=>e?i.getColor("grey",100):i.getColor("grey",140)};
  }
`,E=a.default.div`
  ${C}
  padding: 0;
  padding-bottom: 10px;

  & .rdw-editor-main {
    min-height: 200px;
    max-height: 400px;
    padding: 0 30px 10px 15px;
  }

  & .rdw-option-wrapper {
    min-width: 30px;
    height: 30px;
  }

  & .rdw-editor-toolbar {
    border: none;
    padding: 0;
    margin: 0;
    padding: 5px 30px 0 0;
    border-radius: 0;
    border-bottom: 1px solid ${({invalid:e})=>e?i.getColor("red",100):i.getColor("grey",80)};
  }

  & .rdw-dropdown-wrapper:hover,
  & .rdw-option-wrapper:hover,
  & .rdw-dropdown-optionwrapper:hover {
    box-shadow: none;
  }
`,S=a.default.textarea`
  ${C}
  resize: none;
  height: 200px;
  padding: 10px 30px 10px 15px;

  &::placeholder {
    opacity: 1;
    color: ${i.getColor("grey",100)};
  }
`,F=a.default(q.LockIcon)`
  position: absolute;
  right: 0;
  top: 0;
  margin: 12px;
  color: ${i.getColor("grey",100)};
`,L=a.default.div`
  font-size: ${i.getFontSize("small")};
  align-self: flex-end;
  color: ${i.getColor("grey",100)};
`,D=k.default.forwardRef((M,R)=>{var x=M,{value:e,invalid:r,onChange:o,readOnly:t,characterLeftLabel:s,isRichText:v=!1,richTextEditorProps:$}=x,y=f(x,["value","invalid","onChange","readOnly","characterLeftLabel","isRichText","richTextEditorProps"]);const T=w.useCallback(n=>{!t&&o&&o(n.currentTarget.value)},[t,o]);return d.jsxs(A,{children:[v?d.jsx(E,{readOnly:t,invalid:r,children:d.jsx(I.RichTextEditor,h(p({readOnly:t,value:e},$),{onChange:n=>o==null?void 0:o(n)}))}):d.jsx(S,p({ref:R,value:e,onChange:T,type:"text",readOnly:t,disabled:t,"aria-invalid":r,invalid:r},y)),t&&d.jsx(F,{size:16}),s&&d.jsx(L,{children:s})]})});exports.TextAreaInput=D;
