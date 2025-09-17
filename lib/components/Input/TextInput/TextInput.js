"use strict";var k=Object.defineProperty;var g=Object.getOwnPropertySymbols;var C=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable;var v=(e,t,o)=>t in e?k(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,y=(e,t)=>{for(var o in t||(t={}))C.call(t,o)&&v(e,o,t[o]);if(g)for(var o of g(t))f.call(t,o)&&v(e,o,t[o]);return e};var $=(e,t)=>{var o={};for(var l in e)C.call(e,l)&&t.indexOf(l)<0&&(o[l]=e[l]);if(e!=null&&g)for(var l of g(e))t.indexOf(l)<0&&f.call(e,l)&&(o[l]=e[l]);return o};var u=require("react/jsx-runtime"),i=require("react"),b=require("styled-components"),w=require("../../../icons/LockIcon.js"),E=require("../../../shared/key.js"),r=require("../../../theme/theme.js"),T=require("../../../hooks/useShortcut.js"),A=require("../../IconButton/IconButton.js");function I(e){return e&&e.__esModule?e:{default:e}}var B=I(i),c=I(b);const F=c.default.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
`,L={default:"grey100",warning:"yellow140",error:"red100"},D=c.default.input`
  width: 100%;
  height: 40px;
  border: 1px solid ${({invalid:e})=>e?r.getColor("red",100):r.getColor("grey",80)};
  border-radius: 2px;
  box-sizing: border-box;
  background: ${({readOnly:e})=>e?r.getColor("grey",20):r.getColor("white")};
  color: ${({readOnly:e,isValueHidden:t})=>t?"transparent":e?r.getColor("grey",100):r.getColor("grey",140)};
  font-size: ${r.getFontSize("default")};
  line-height: 40px;
  padding: 0 ${({readOnly:e,hasActions:t})=>e||t?"35px":"15px"} 0 15px;
  outline-style: none;
  cursor: ${({readOnly:e})=>e?"not-allowed":"auto"};
  ${({readOnly:e})=>e&&b.css`
      overflow: hidden;
      text-overflow: ellipsis;
    `}
  &:focus-within {
    box-shadow: 0 0 0 2px ${r.getColor("blue",40)};
  }

  &::placeholder {
    opacity: 1;
    color: ${r.getColor("grey",100)};
  }
`,K=c.default(w.LockIcon)`
  position: absolute;
  right: 0;
  top: 0;
  margin: 12px;
  color: ${r.getColor("grey",100)};
`,M=c.default.div`
  font-size: ${r.getFontSize("small")};
  align-self: flex-end;
  color: ${({variant:e})=>r.getColor(L[e])};
`,V=c.default.div`
  position: absolute;
  right: 0;
  top: 0;
  margin: 8px;
  color: ${r.getColor("grey",100)};
`,G=i.forwardRef((H,n)=>{var x=H,{invalid:e,onChange:t,readOnly:o,characterLeftLabel:l,onSubmit:p,children:q,characterLeftLabelVariant:z="default"}=x,d=$(x,["invalid","onChange","readOnly","characterLeftLabel","onSubmit","children","characterLeftLabelVariant"]);var h;const _=i.useRef(null);n=n!=null?n:_;const j=i.useCallback(a=>{!o&&t&&t(a.currentTarget.value)},[o,t]),m=()=>{!o&&(p==null||p())};T.useShortcut(E.Key.Enter,m,n);const s=B.default.Children.map(q,a=>i.isValidElement(a)&&A.IconButton===a.type?i.cloneElement(a,{level:"tertiary",ghost:"borderless",size:"small"}):null);return u.jsxs(F,{children:[u.jsx(D,y({ref:n,onChange:j,type:"text",readOnly:o,disabled:o,"aria-invalid":e,invalid:e,title:d.value,hasActions:((h=s==null?void 0:s.length)!=null?h:0)>0},d)),s&&u.jsx(V,{children:s}),o&&u.jsx(K,{size:16}),l&&u.jsx(M,{variant:z,children:l})]})});exports.TextInput=G;
