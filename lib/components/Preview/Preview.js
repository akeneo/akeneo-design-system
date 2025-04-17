"use strict";var F=Object.defineProperty,M=Object.defineProperties;var L=Object.getOwnPropertyDescriptors;var c=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;var $=(e,r,o)=>r in e?F(e,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[r]=o,j=(e,r)=>{for(var o in r||(r={}))y.call(r,o)&&$(e,o,r[o]);if(c)for(var o of c(r))b.call(r,o)&&$(e,o,r[o]);return e},I=(e,r)=>M(e,L(r));var A=(e,r)=>{var o={};for(var n in e)y.call(e,n)&&r.indexOf(n)<0&&(o[n]=e[n]);if(e!=null&&c)for(var n of c(e))r.indexOf(n)<0&&b.call(e,n)&&(o[n]=e[n]);return o};var l=require("react/jsx-runtime"),s=require("react"),d=require("styled-components"),t=require("../../theme/theme.js"),R=require("../IconButton/IconButton.js"),V=require("../../icons/ArrowDownIcon.js"),G=require("../../icons/ArrowUpIcon.js");function k(e){return e&&e.__esModule?e:{default:e}}var J=k(s),i=k(d);const _=100,K=e=>{switch(e){case"info":return t.getColor("blue",10);case"warning":return t.getColor("yellow",10);case"error":return t.getColor("red",10);case"success":return t.getColor("green",10)}},q=e=>{switch(e){case"info":return t.getColor("blue",100);case"warning":return t.getColor("yellow",120);case"error":return t.getColor("red",120);case"success":return t.getColor("green",120)}},Q=e=>{switch(e){case"info":return t.getColor("blue",100);case"warning":return t.getColor("yellow",120);case"error":return t.getColor("red",120);case"success":return t.getColor("green",120)}},W=e=>{switch(e){case"info":return t.getColor("blue",100);case"warning":return t.getColor("yellow",120);case"error":return t.getColor("red",120);case"success":return t.getColor("green",120)}},X=i.default.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  border-radius: 3px;
  border: 1px solid ${t.getColor("blue",40)};
  color: ${e=>q(e.$level)};
  background-color: ${e=>K(e.$level)};
`,Y=i.default.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px 15px;
`,Z=i.default.span`
  height: 20px;
  margin: 12px 10px;
  color: ${e=>Q(e.$level)};
`,O=i.default.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: ${t.getFontSize("small")};
  color: ${e=>q(e.$level)};
`,ee=i.default.div`
  overflow-wrap: break-word;
  white-space: break-spaces;
  color: ${t.getColor("grey",140)};
  margin-top: ${({$height:e,isCollapsable:r})=>e===0&&r?0:5}px;
  ${({isCollapsable:e,$height:r,$overflow:o,shouldAnimate:n})=>e&&d.css`
      max-height: ${r}px;
      overflow: ${o};
      ${n&&d.css`
        transition: all ${_}ms ease-in-out;
        transition-property: max-height, margin-top;
      `}
    `}

  a {
    color: ${({$level:e})=>W(e)};
  }
`,H=i.default.span`
  color: ${t.getColor("brand",100)};
  font-weight: bold;
`,P=i.default.div`
  opacity: 0;
  display: flex;
  align-items: center;
  height: 0;

  button:hover {
    background: none !important;
  }
`,re=i.default.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 -4px;
  padding: 4px;

  &:hover {
    background: ${t.getColor("blue",20)};

    ${P} {
      opacity: 1;
    }
  }
`,T=({action:e,children:r})=>l.jsxs(re,{children:[r,e&&l.jsx(P,{children:s.isValidElement(e)&&e.type===R.IconButton?s.cloneElement(e,{level:"tertiary",ghost:"borderless",size:"small"}):e})]}),g=te=>{var f=te,{title:e,level:r="info",icon:o,isOpen:n,collapseButtonLabel:h,onCollapse:a,children:w}=f,z=A(f,["title","level","icon","isOpen","collapseButtonLabel","onCollapse","children"]);const[N,D]=s.useState(0),[v,E]=s.useState(!1),m=s.useRef(null),u=h!==void 0&&a!==void 0&&n!==void 0,S=()=>a==null?void 0:a(!n);return s.useEffect(()=>{if(!u)return;D(U=>{var p,C;const x=(C=(p=m.current)==null?void 0:p.scrollHeight)!=null?C:0;return x===0?U:x});const B=window.setTimeout(()=>{E(!0)},_);return()=>{window.clearTimeout(B)}},[w]),l.jsxs(X,{$level:r,children:[o&&l.jsx(Z,{$level:r,children:J.default.cloneElement(o,{size:20})}),l.jsxs(Y,I(j({},z),{children:[l.jsxs(O,{$level:r,onClick:S,children:[e,u&&l.jsx(R.IconButton,{icon:n?l.jsx(G.ArrowUpIcon,{}):l.jsx(V.ArrowDownIcon,{}),title:h,level:"tertiary",ghost:"borderless",size:"small"})]}),l.jsx(ee,{ref:m,isCollapsable:u,$overflow:v||!n?"hidden":"inherit",$height:n===!0?N:0,shouldAnimate:v,"aria-hidden":!n,$level:r,children:w})]}))]})};H.displayName="Preview.Highlight";T.displayName="Preview.Row";g.Highlight=H;g.Row=T;exports.Preview=g;
