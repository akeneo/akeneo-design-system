"use strict";var P=Object.defineProperty,S=Object.defineProperties;var k=Object.getOwnPropertyDescriptors;var l=Object.getOwnPropertySymbols;var m=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var p=(e,o,t)=>o in e?P(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,C=(e,o)=>{for(var t in o||(o={}))m.call(o,t)&&p(e,t,o[t]);if(l)for(var t of l(o))v.call(o,t)&&p(e,t,o[t]);return e},w=(e,o)=>S(e,k(o));var I=(e,o)=>{var t={};for(var r in e)m.call(e,r)&&o.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&l)for(var r of l(e))o.indexOf(r)<0&&v.call(e,r)&&(t[r]=e[r]);return t};var n=require("react/jsx-runtime"),i=require("react"),z=require("styled-components"),s=require("../../theme/theme.js"),N=require("../IconButton/IconButton.js"),B=require("../../icons/CheckPartialIcon.js"),D=require("../../icons/PlusIcon.js");function $(e){return e&&e.__esModule?e:{default:e}}var L=$(i),a=$(z);const b=100,M=a.default.div`
  width: 100%;
  border: solid ${s.getColor("grey",40)};
  border-width: 0 0 1px 0;

  &:first-child {
    border-width: 1px 0;
  }
  padding-bottom: ${({isOpen:e})=>e?"10px":0};
`,E=a.default.div`
  max-height: ${({$height:e})=>e}px;
  overflow: ${({$overflow:e})=>e};
  ${({shouldAnimate:e})=>e&&`
    transition: max-height ${b}ms ease-in-out;
  `}
`,F=a.default.div`
  height: 44px;
  padding-right: 2px; // To manage the outline of the collapse icon being cropped in case of overflow hidden
  display: flex;
  align-items: center;
  cursor: pointer;
`,U=a.default.div`
  flex: 1;
  text-transform: uppercase;
  color: ${s.getColor("grey",140)};
  font-size: ${s.getFontSize("default")};
  display: flex;
  align-items: center;
  gap: 10px;
`,G=L.default.forwardRef((J,_)=>{var u=J,{label:e,collapseButtonLabel:o,isOpen:t,onCollapse:r,children:d}=u,j=I(u,["label","collapseButtonLabel","isOpen","onCollapse","children"]);const[q,y]=i.useState(0),[c,R]=i.useState(!1),h=i.useRef(null),A=()=>r(!t);return i.useEffect(()=>{y(H=>{var g,x;const f=(x=(g=h.current)==null?void 0:g.scrollHeight)!=null?x:0;return f===0?H:f});const T=window.setTimeout(()=>{R(!0)},b);return()=>{window.clearTimeout(T)}},[d]),n.jsxs(M,w(C({ref:_,isOpen:t},j),{children:[n.jsxs(F,{onClick:A,children:[n.jsx(U,{children:e}),n.jsx(N.IconButton,{size:"small",level:"tertiary",ghost:"borderless",title:o,icon:t?n.jsx(B.CheckPartialIcon,{}):n.jsx(D.PlusIcon,{})})]}),n.jsx(E,{ref:h,$overflow:c||!t?"hidden":"inherit",$height:t?q:0,shouldAnimate:c,children:d})]}))});exports.Collapse=G;
