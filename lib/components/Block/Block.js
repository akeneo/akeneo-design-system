"use strict";var U=Object.defineProperty,E=Object.defineProperties;var F=Object.getOwnPropertyDescriptors;var f=Object.getOwnPropertySymbols;var j=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var A=(e,t,r)=>t in e?U(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,k=(e,t)=>{for(var r in t||(t={}))j.call(t,r)&&A(e,r,t[r]);if(f)for(var r of f(t))I.call(t,r)&&A(e,r,t[r]);return e},C=(e,t)=>E(e,F(t));var _=(e,t)=>{var r={};for(var o in e)j.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(e!=null&&f)for(var o of f(e))t.indexOf(o)<0&&I.call(e,o)&&(r[o]=e[o]);return r};var i=require("react/jsx-runtime"),l=require("react"),h=require("styled-components"),c=require("../../theme/theme.js"),G=require("../../icons/ArrowDownIcon.js"),J=require("../../icons/ArrowUpIcon.js"),K=require("../IconButton/IconButton.js");function q(e){return e&&e.__esModule?e:{default:e}}var L=q(l),u=q(h);const R=100,P=u.default.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
  justify-content: space-between;
`,Q=u.default.div``,V=u.default.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 24px;
  color: ${c.getColor("grey",140)};
`,W=u.default.div`
  overflow-wrap: break-word;
  white-space: break-spaces;
  margin-top: ${({$height:e,$isCollapsable:t})=>e===0&&t?0:10}px;
  ${({$isCollapsable:e,$height:t,$overflow:r,$shouldAnimate:o})=>e&&h.css`
      max-height: ${t}px;
      overflow: ${r};
      ${o&&h.css`
        transition: all ${R}ms ease-in-out;
        transition-property: max-height, margin-top;
      `}
    `}
`,X=u.default.div`
  box-sizing: border-box;
  padding: 10px 15px;
  border-style: solid;
  border-width: 1px;
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  font-family: inherit;
  font-size: ${c.getFontSize("default")};
  font-weight: 400;
  background-color: ${c.getColor("white")};
  border-color: ${c.getColor("grey",80)};

  &:hover {
    background-color: ${c.getColor("grey",20)};
  }
`,Y=L.default.forwardRef((Z,H)=>{var v=Z,{title:e,actions:t,ariaDescribedBy:r,ariaLabel:o,ariaLabelledBy:T,isOpen:n,collapseButtonLabel:g,onCollapse:d,children:B}=v,D=_(v,["title","actions","ariaDescribedBy","ariaLabel","ariaLabelledBy","isOpen","collapseButtonLabel","onCollapse","children"]);const[x,z]=l.useState(0),[b,S]=l.useState(!1),a=l.useRef(null),s=g!==void 0&&d!==void 0&&n!==void 0,M=()=>d==null?void 0:d(!n);return l.useEffect(()=>{if(!s)return;const w=()=>{var y,$;const p=($=(y=a.current)==null?void 0:y.scrollHeight)!=null?$:0;z(p===0?x:p)};w();const m=new MutationObserver(w);a.current&&m.observe(a.current,{childList:!0,subtree:!0,characterData:!0});const N=window.setTimeout(()=>{S(!0)},R);return()=>{m.disconnect(),window.clearTimeout(N)}},[a.current,s]),i.jsxs(X,C(k({"aria-describedby":r,"aria-label":o,"aria-labelledby":T,ref:H},D),{children:[i.jsxs(V,{children:[i.jsx(Q,{children:e}),i.jsxs(P,{children:[t,s?i.jsx(K.IconButton,{icon:n?i.jsx(J.ArrowUpIcon,{}):i.jsx(G.ArrowDownIcon,{}),title:g,level:"tertiary",ghost:!0,size:"small",onClick:M}):null]})]}),s?i.jsx(W,{ref:a,$isCollapsable:s,$overflow:b||!n?"hidden":"inherit",$height:n===!0?x:0,$shouldAnimate:b,"aria-hidden":!n,children:B}):null]}))});exports.Block=Y;
