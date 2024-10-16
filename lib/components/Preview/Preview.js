"use strict";var S=Object.defineProperty,E=Object.defineProperties;var U=Object.getOwnPropertyDescriptors;var a=Object.getOwnPropertySymbols;var b=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var x=(e,t,r)=>t in e?S(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,$=(e,t)=>{for(var r in t||(t={}))b.call(t,r)&&x(e,r,t[r]);if(a)for(var r of a(t))y.call(t,r)&&x(e,r,t[r]);return e},j=(e,t)=>E(e,U(t));var A=(e,t)=>{var r={};for(var o in e)b.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(e!=null&&a)for(var o of a(e))t.indexOf(o)<0&&y.call(e,o)&&(r[o]=e[o]);return r};var i=require("react/jsx-runtime"),s=require("react"),d=require("styled-components"),n=require("../../theme/theme.js"),I=require("../IconButton/IconButton.js"),B=require("../../icons/ArrowDownIcon.js"),M=require("../../icons/ArrowUpIcon.js");function F(e){return e&&e.__esModule?e:{default:e}}var l=F(d);const R=100,V=l.default.div`
  padding: 10px 15px;
  background: ${n.getColor("blue",10)};
  border-radius: 3px;
  border: 1px solid ${n.getColor("blue",40)};
  display: flex;
  flex-direction: column;
`,G=l.default.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-transform: uppercase;
  font-size: ${n.getFontSize("small")};
  color: ${n.getColor("blue",100)};
`,J=l.default.div`
  overflow-wrap: break-word;
  white-space: break-spaces;
  color: ${n.getColor("grey",140)};
  margin-top: ${({$height:e,isCollapsable:t})=>e===0&&t?0:5}px;
  ${({isCollapsable:e,$height:t,$overflow:r,shouldAnimate:o})=>e&&d.css`
      max-height: ${t}px;
      overflow: ${r};
      ${o&&d.css`
        transition: all ${R}ms ease-in-out;
        transition-property: max-height, margin-top;
      `}
    `}
`,C=l.default.span`
  color: ${n.getColor("brand",100)};
  font-weight: bold;
`,q=l.default.div`
  opacity: 0;
  display: flex;
  align-items: center;
  height: 0;

  button:hover {
    background: none !important;
  }
`,K=l.default.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 -4px;
  padding: 4px;

  &:hover {
    background: ${n.getColor("blue",20)};

    ${q} {
      opacity: 1;
    }
  }
`,H=({action:e,children:t})=>i.jsxs(K,{children:[t,e&&i.jsx(q,{children:s.isValidElement(e)&&e.type===I.IconButton?s.cloneElement(e,{level:"tertiary",ghost:"borderless",size:"small"}):e})]}),u=L=>{var h=L,{title:e,isOpen:t,collapseButtonLabel:r,onCollapse:o,children:g}=h,P=A(h,["title","isOpen","collapseButtonLabel","onCollapse","children"]);const[k,T]=s.useState(0),[f,_]=s.useState(!1),v=s.useRef(null),c=r!==void 0&&o!==void 0&&t!==void 0,N=()=>o==null?void 0:o(!t);return s.useEffect(()=>{if(!c)return;T(D=>{var m,p;const w=(p=(m=v.current)==null?void 0:m.scrollHeight)!=null?p:0;return w===0?D:w});const z=window.setTimeout(()=>{_(!0)},R);return()=>{window.clearTimeout(z)}},[g]),i.jsxs(V,j($({},P),{children:[i.jsxs(G,{onClick:N,children:[e,c&&i.jsx(I.IconButton,{icon:t?i.jsx(M.ArrowUpIcon,{}):i.jsx(B.ArrowDownIcon,{}),title:r,level:"tertiary",ghost:"borderless",size:"small"})]}),i.jsx(J,{ref:v,isCollapsable:c,$overflow:f||!t?"hidden":"inherit",$height:t===!0?k:0,shouldAnimate:f,"aria-hidden":!t,children:g})]}))};C.displayName="Preview.Highlight";H.displayName="Preview.Row";u.Highlight=C;u.Row=H;exports.Preview=u;
