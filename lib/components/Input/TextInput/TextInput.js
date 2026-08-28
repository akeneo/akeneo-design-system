"use strict";var T=Object.defineProperty;var p=Object.getOwnPropertySymbols;var $=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var f=(e,o,t)=>o in e?T(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,C=(e,o)=>{for(var t in o||(o={}))$.call(o,t)&&f(e,t,o[t]);if(p)for(var t of p(o))y.call(o,t)&&f(e,t,o[t]);return e};var b=(e,o)=>{var t={};for(var l in e)$.call(e,l)&&o.indexOf(l)<0&&(t[l]=e[l]);if(e!=null&&p)for(var l of p(e))o.indexOf(l)<0&&y.call(e,l)&&(t[l]=e[l]);return t};var s=require("react/jsx-runtime"),u=require("react"),m=require("styled-components"),A=require("../../../icons/LockIcon.js"),H=require("../../../shared/key.js"),r=require("../../../theme/theme.js"),B=require("../../../hooks/useShortcut.js"),F=require("../../IconButton/IconButton.js");function I(e){return e&&e.__esModule?e:{default:e}}var L=I(u),c=I(m);const q=c.default.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
`,M={default:"grey100",warning:"yellow140",error:"red100"},w=c.default.input`
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
  ${({$readOnly:e})=>e&&m.css`
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
`,N=c.default(w).attrs({as:"div",inert:""})`
  && {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
    white-space: pre;
    pointer-events: none;
    color: transparent;
    background: none;
    box-shadow: none;
    border-color: transparent;
    mix-blend-mode: multiply;
  }

  ${q}:focus-within & {
    display: none;
  }
`,D=c.default(A.LockIcon)`
  position: absolute;
  right: 0;
  top: 0;
  margin: 12px;
  color: ${r.getColor("grey",100)};
`,K=c.default.div`
  font-size: ${r.getFontSize("small")};
  align-self: flex-end;
  color: ${({$variant:e})=>r.getColor(M[e])};
`,G=c.default.div`
  position: absolute;
  right: 0;
  top: 0;
  margin: 8px;
  color: ${r.getColor("grey",100)};
`,J=u.forwardRef((P,a)=>{var h=P,{invalid:e,onChange:o,readOnly:t,characterLeftLabel:l,onSubmit:g,children:j,characterLeftLabelVariant:z="default",highlightable:_=!1}=h,i=b(h,["invalid","onChange","readOnly","characterLeftLabel","onSubmit","children","characterLeftLabelVariant","highlightable"]);var x,v;const k=u.useRef(null);a=a!=null?a:k;const V=u.useCallback(d=>{!t&&o&&o(d.currentTarget.value)},[t,o]),E=()=>{!t&&(g==null||g())};B.useShortcut(H.Key.Enter,E,a);const n=L.default.Children.map(j,d=>u.isValidElement(d)&&F.IconButton===d.type?u.cloneElement(d,{level:"tertiary",ghost:"borderless",size:"small"}):null);return s.jsxs(q,{children:[s.jsx(w,C({ref:a,onChange:V,type:"text",readOnly:t,disabled:t,"aria-invalid":e,$invalid:e,title:i.value,$readOnly:t,$isValueHidden:i.isValueHidden,$hasActions:((x=n==null?void 0:n.length)!=null?x:0)>0},i)),_&&!i.isValueHidden&&s.jsx(N,{"aria-hidden":!0,className:i.className,$readOnly:t,$hasActions:((v=n==null?void 0:n.length)!=null?v:0)>0,children:i.value}),n&&s.jsx(G,{children:n}),t&&s.jsx(D,{size:16}),l&&s.jsx(K,{$variant:z,children:l})]})});exports.TextInput=J;
