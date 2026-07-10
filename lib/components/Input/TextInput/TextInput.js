"use strict";var k=Object.defineProperty;var g=Object.getOwnPropertySymbols;var $=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var v=(e,o,t)=>o in e?k(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,f=(e,o)=>{for(var t in o||(o={}))$.call(o,t)&&v(e,t,o[t]);if(g)for(var t of g(o))C.call(o,t)&&v(e,t,o[t]);return e};var y=(e,o)=>{var t={};for(var l in e)$.call(e,l)&&o.indexOf(l)<0&&(t[l]=e[l]);if(e!=null&&g)for(var l of g(e))o.indexOf(l)<0&&C.call(e,l)&&(t[l]=e[l]);return t};var u=require("react/jsx-runtime"),i=require("react"),b=require("styled-components"),w=require("../../../icons/LockIcon.js"),E=require("../../../shared/key.js"),r=require("../../../theme/theme.js"),T=require("../../../hooks/useShortcut.js"),V=require("../../IconButton/IconButton.js");function I(e){return e&&e.__esModule?e:{default:e}}var A=I(i),c=I(b);const B=c.default.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
`,F={default:"grey100",warning:"yellow140",error:"red100"},H=c.default.input`
  width: 100%;
  height: 40px;
  border: 1px solid ${({$invalid:e})=>e?r.getColor("red",100):r.getColor("grey",80)};
  border-radius: 2px;
  box-sizing: border-box;
  background: ${({$readOnly:e})=>e?r.getColor("grey",20):r.getColor("white")};
  color: ${({$readOnly:e,$isValueHidden:o})=>o?"transparent":e?r.getColor("grey",100):r.getColor("grey",140)};
  font-size: ${r.getFontSize("default")};
  line-height: 40px;
  padding: 0 ${({$readOnly:e,$hasActions:o})=>e||o?"35px":"15px"} 0 15px;
  outline-style: none;
  cursor: ${({$readOnly:e})=>e?"not-allowed":"auto"};
  ${({$readOnly:e})=>e&&b.css`
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
`,L=c.default(w.LockIcon)`
  position: absolute;
  right: 0;
  top: 0;
  margin: 12px;
  color: ${r.getColor("grey",100)};
`,D=c.default.div`
  font-size: ${r.getFontSize("small")};
  align-self: flex-end;
  color: ${({$variant:e})=>r.getColor(F[e])};
`,K=c.default.div`
  position: absolute;
  right: 0;
  top: 0;
  margin: 8px;
  color: ${r.getColor("grey",100)};
`,M=i.forwardRef((G,n)=>{var x=G,{invalid:e,onChange:o,readOnly:t,characterLeftLabel:l,onSubmit:d,children:q,characterLeftLabelVariant:z="default"}=x,p=y(x,["invalid","onChange","readOnly","characterLeftLabel","onSubmit","children","characterLeftLabelVariant"]);var h;const _=i.useRef(null);n=n!=null?n:_;const j=i.useCallback(a=>{!t&&o&&o(a.currentTarget.value)},[t,o]),m=()=>{!t&&(d==null||d())};T.useShortcut(E.Key.Enter,m,n);const s=A.default.Children.map(q,a=>i.isValidElement(a)&&V.IconButton===a.type?i.cloneElement(a,{level:"tertiary",ghost:"borderless",size:"small"}):null);return u.jsxs(B,{children:[u.jsx(H,f({ref:n,onChange:j,type:"text",readOnly:t,disabled:t,"aria-invalid":e,$invalid:e,title:p.value,$readOnly:t,$isValueHidden:p.isValueHidden,$hasActions:((h=s==null?void 0:s.length)!=null?h:0)>0},p)),s&&u.jsx(K,{children:s}),t&&u.jsx(L,{size:16}),l&&u.jsx(D,{$variant:z,children:l})]})});exports.TextInput=M;
