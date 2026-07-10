"use strict";var z=Object.defineProperty,N=Object.defineProperties;var B=Object.getOwnPropertyDescriptors;var a=Object.getOwnPropertySymbols;var C=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable;var p=(e,r,t)=>r in e?z(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,w=(e,r)=>{for(var t in r||(r={}))C.call(r,t)&&p(e,t,r[t]);if(a)for(var t of a(r))$.call(r,t)&&p(e,t,r[t]);return e},b=(e,r)=>N(e,B(r));var j=(e,r)=>{var t={};for(var i in e)C.call(e,i)&&r.indexOf(i)<0&&(t[i]=e[i]);if(e!=null&&a)for(var i of a(e))r.indexOf(i)<0&&$.call(e,i)&&(t[i]=e[i]);return t};var o=require("react/jsx-runtime"),l=require("react"),D=require("styled-components"),u=require("../../theme/theme.js"),I=require("../IconButton/IconButton.js"),L=require("../../icons/CheckPartialIcon.js"),M=require("../../icons/PlusIcon.js");function _(e){return e&&e.__esModule?e:{default:e}}var E=_(l),n=_(D);const q=100,F=n.default.div`
  width: 100%;
  border: solid ${u.getColor("grey",40)};
  border-width: 0 0 1px 0;

  &:first-child {
    border-width: 1px 0;
  }
  padding-bottom: ${({$isOpen:e})=>e?"10px":0};
`,U=n.default.div`
  max-height: ${({$height:e})=>e}px;
  overflow: ${({$overflow:e})=>e};
  ${({$shouldAnimate:e})=>e&&`
    transition: max-height ${q}ms ease-in-out;
  `}
`,G=n.default.div`
  height: 44px;
  padding-right: 2px; // To manage the outline of the collapse icon being cropped in case of overflow hidden
  display: flex;
  align-items: center;
  cursor: pointer;
`,J=n.default.div`
  flex: 1;
  text-transform: uppercase;
  color: ${u.getColor("grey",140)};
  font-size: ${u.getFontSize("default")};
  display: flex;
  align-items: center;
  gap: 10px;
`,K=E.default.forwardRef((Q,A)=>{var h=Q,{label:e,collapseButtonLabel:r,isOpen:t,onCollapse:i,openIcon:s,closeIcon:d,children:c}=h,y=j(h,["label","collapseButtonLabel","isOpen","onCollapse","openIcon","closeIcon","children"]);const[R,T]=l.useState(0),[f,H]=l.useState(!1),g=l.useRef(null),P=()=>i(!t);return l.useEffect(()=>{T(k=>{var m,v;const x=(v=(m=g.current)==null?void 0:m.scrollHeight)!=null?v:0;return x===0?k:x});const S=window.setTimeout(()=>{H(!0)},q);return()=>{window.clearTimeout(S)}},[c]),o.jsxs(F,b(w({ref:A,$isOpen:t},y),{children:[o.jsxs(G,{onClick:P,children:[o.jsx(J,{children:e}),o.jsx(I.IconButton,{size:"small",level:"tertiary",ghost:"borderless",title:r,icon:t?s!=null?s:o.jsx(L.CheckPartialIcon,{}):d!=null?d:o.jsx(M.PlusIcon,{})})]}),o.jsx(U,{ref:g,$overflow:f||!t?"hidden":"inherit",$height:t?R:0,$shouldAnimate:f,children:c})]}))});exports.Collapse=K;
