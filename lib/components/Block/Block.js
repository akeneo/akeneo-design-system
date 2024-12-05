"use strict";var U=Object.defineProperty,E=Object.defineProperties;var F=Object.getOwnPropertyDescriptors;var f=Object.getOwnPropertySymbols;var A=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var j=(e,t,r)=>t in e?U(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,k=(e,t)=>{for(var r in t||(t={}))A.call(t,r)&&j(e,r,t[r]);if(f)for(var r of f(t))I.call(t,r)&&j(e,r,t[r]);return e},_=(e,t)=>E(e,F(t));var q=(e,t)=>{var r={};for(var o in e)A.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(e!=null&&f)for(var o of f(e))t.indexOf(o)<0&&I.call(e,o)&&(r[o]=e[o]);return r};var i=require("react/jsx-runtime"),c=require("react"),h=require("styled-components"),l=require("../../theme/theme.js"),G=require("../../icons/ArrowDownIcon.js"),J=require("../../icons/ArrowUpIcon.js"),K=require("../IconButton/IconButton.js");function C(e){return e&&e.__esModule?e:{default:e}}var L=C(c),u=C(h);const R=100,P=u.default.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
  justify-content: space-between;
`,Q=u.default.div``,V=u.default.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 24px;
  color: ${l.getColor("grey",140)};
`,W=u.default.div`
  overflow-wrap: break-word;
  white-space: break-spaces;
  margin-top: ${({$height:e,isCollapsable:t})=>e===0&&t?0:10}px;
  ${({isCollapsable:e,$height:t,$overflow:r,shouldAnimate:o})=>e&&h.css`
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
  font-size: ${l.getFontSize("default")};
  font-weight: 400;
  background-color: ${l.getColor("white")};
  border-color: ${l.getColor("grey",80)};

  &:hover {
    background-color: ${l.getColor("grey",20)};
  }
`,Y=L.default.forwardRef((Z,H)=>{var v=Z,{title:e,actions:t,ariaDescribedBy:r,ariaLabel:o,ariaLabelledBy:T,isOpen:n,collapseButtonLabel:g,onCollapse:d,children:B}=v,D=q(v,["title","actions","ariaDescribedBy","ariaLabel","ariaLabelledBy","isOpen","collapseButtonLabel","onCollapse","children"]);const[x,z]=c.useState(0),[w,S]=c.useState(!1),a=c.useRef(null),s=g!==void 0&&d!==void 0&&n!==void 0,M=()=>d==null?void 0:d(!n);return c.useEffect(()=>{if(!s)return;const b=()=>{var y,$;const p=($=(y=a.current)==null?void 0:y.scrollHeight)!=null?$:0;z(p===0?x:p)};b();const m=new MutationObserver(b);a.current&&m.observe(a.current,{childList:!0,subtree:!0,characterData:!0});const N=window.setTimeout(()=>{S(!0)},R);return()=>{m.disconnect(),window.clearTimeout(N)}},[a.current,s]),i.jsxs(X,_(k({"aria-describedby":r,"aria-label":o,"aria-labelledby":T,ref:H},D),{children:[i.jsxs(V,{children:[i.jsx(Q,{children:e}),i.jsxs(P,{children:[t,s?i.jsx(K.IconButton,{icon:n?i.jsx(J.ArrowUpIcon,{}):i.jsx(G.ArrowDownIcon,{}),title:g,level:"tertiary",ghost:!0,size:"small",onClick:M}):null]})]}),s?i.jsx(W,{ref:a,isCollapsable:s,$overflow:w||!n?"hidden":"inherit",$height:n===!0?x:0,shouldAnimate:w,"aria-hidden":!n,children:B}):null]}))});exports.Block=Y;
