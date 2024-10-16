"use strict";var U=Object.defineProperty,M=Object.defineProperties;var E=Object.getOwnPropertyDescriptors;var u=Object.getOwnPropertySymbols;var $=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var y=(e,t,r)=>t in e?U(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,A=(e,t)=>{for(var r in t||(t={}))$.call(t,r)&&y(e,r,t[r]);if(u)for(var r of u(t))j.call(t,r)&&y(e,r,t[r]);return e},I=(e,t)=>M(e,E(t));var k=(e,t)=>{var r={};for(var o in e)$.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(e!=null&&u)for(var o of u(e))t.indexOf(o)<0&&j.call(e,o)&&(r[o]=e[o]);return r};var i=require("react/jsx-runtime"),l=require("react"),f=require("styled-components"),a=require("../../theme/theme.js"),F=require("../../icons/ArrowDownIcon.js"),G=require("../../icons/ArrowUpIcon.js"),J=require("../IconButton/IconButton.js");function _(e){return e&&e.__esModule?e:{default:e}}var K=_(l),s=_(f);const q=100,P=s.default.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
  justify-content: space-between;
`,Q=s.default.div``,V=s.default.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 24px;
  color: ${a.getColor("grey",140)};
`,W=s.default.div`
  overflow-wrap: break-word;
  white-space: break-spaces;
  margin-top: ${({$height:e,isCollapsable:t})=>e===0&&t?0:10}px;
  ${({isCollapsable:e,$height:t,$overflow:r,shouldAnimate:o})=>e&&f.css`
      max-height: ${t}px;
      overflow: ${r};
      ${o&&f.css`
        transition: all ${q}ms ease-in-out;
        transition-property: max-height, margin-top;
      `}
    `}
`,X=s.default.div`
  box-sizing: border-box;
  padding: 10px 15px;
  border-style: solid;
  border-width: 1px;
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  font-family: inherit;
  font-size: ${a.getFontSize("default")};
  font-weight: 400;
  background-color: ${a.getColor("white")};
  border-color: ${a.getColor("grey",80)};

  &:hover {
    background-color: ${a.getColor("grey",20)};
  }
`,Y=K.default.forwardRef((Z,T)=>{var x=Z,{title:e,actions:t,ariaDescribedBy:r,ariaLabel:o,ariaLabelledBy:C,isOpen:n,collapseButtonLabel:h,onCollapse:c,children:g}=x,R=k(x,["title","actions","ariaDescribedBy","ariaLabel","ariaLabelledBy","isOpen","collapseButtonLabel","onCollapse","children"]);const[B,z]=l.useState(0),[v,D]=l.useState(!1),w=l.useRef(null),d=h!==void 0&&c!==void 0&&n!==void 0,H=()=>c==null?void 0:c(!n);return l.useEffect(()=>{if(!d)return;z(N=>{var b,p;const m=(p=(b=w.current)==null?void 0:b.scrollHeight)!=null?p:0;return m===0?N:m});const S=window.setTimeout(()=>{D(!0)},q);return()=>{window.clearTimeout(S)}},[g]),i.jsxs(X,I(A({"aria-describedby":r,"aria-label":o,"aria-labelledby":C,ref:T},R),{children:[i.jsxs(V,{children:[i.jsx(Q,{children:e}),i.jsxs(P,{children:[t,d?i.jsx(J.IconButton,{icon:n?i.jsx(G.ArrowUpIcon,{}):i.jsx(F.ArrowDownIcon,{}),title:h,level:"tertiary",ghost:!0,size:"small",onClick:H}):null]})]}),d?i.jsx(W,{ref:w,isCollapsable:d,$overflow:v||!n?"hidden":"inherit",$height:n===!0?B:0,shouldAnimate:v,"aria-hidden":!n,children:g}):null]}))});exports.Block=Y;
