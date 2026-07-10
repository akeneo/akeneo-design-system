"use strict";var F=Object.defineProperty,I=Object.defineProperties;var M=Object.getOwnPropertyDescriptors;var d=Object.getOwnPropertySymbols;var $=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable;var q=(t,o,e)=>o in t?F(t,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[o]=e,S=(t,o)=>{for(var e in o||(o={}))$.call(o,e)&&q(t,e,o[e]);if(d)for(var e of d(o))O.call(o,e)&&q(t,e,o[e]);return t},_=(t,o)=>I(t,M(o));var C=(t,o)=>{var e={};for(var i in t)$.call(t,i)&&o.indexOf(i)<0&&(e[i]=t[i]);if(t!=null&&d)for(var i of d(t))o.indexOf(i)<0&&O.call(t,i)&&(e[i]=t[i]);return e};var h=require("react/jsx-runtime"),c=require("react"),T=require("react-dom"),m=require("styled-components"),A=require("../../../shared/key.js"),B=require("../../../hooks/usePosition.js"),K=require("../../../hooks/useShortcut.js"),V=require("../../../hooks/useWindowResize.js"),G=require("../../../theme/theme.js"),J=require("../../../theme/common.js");function L(t){return t&&t.__esModule?t:{default:t}}var z=L(m);const g=2,Q=0,U=({$fixedWidth:t})=>t!==null?m.css`
      width: ${t}px;
    `:m.css`
    min-width: 150px;
    max-width: 400px;
  `,X=z.default.div`
  ${J.CommonStyle};
  background: ${G.getColor("white")};
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.3);
  padding: 10px 0;
  position: fixed;
  opacity: ${({$visible:t})=>t?1:0};
  transition: opacity 0.15s ease-in-out;
  z-index: 1901;
  top: ${({$top:t})=>t}px;
  left: ${({$left:t})=>t}px;
  ${U};
`,Y=z.default.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1900;
`,Z=(t,o,e,i,n)=>{if(i===void 0||n===void 0||i.current===null||n.current===null)return[0,0];const r=i.current.getBoundingClientRect(),s=n.current.getBoundingClientRect();let u=t==="up"?Math.max(r.bottom-s.height,Q)+g:r.top-g;e&&(u=t==="up"?r.top-s.height:r.bottom+1);const l=window.innerHeight-r.bottom<s.height&&r.top>s.height;u=l?r.bottom-s.height+g:u,u=l&&e?r.top-s.height:u;const v=o==="left"?r.right-s.width:r.left;return[u,v]},E=k=>{var l=k,{verticalPosition:t,horizontalPosition:o,dropdownOpenerVisible:e=!1,fullWidth:i=!1,parentRef:n,onClose:r,children:s}=l,u=C(l,["verticalPosition","horizontalPosition","dropdownOpenerVisible","fullWidth","parentRef","onClose","children"]);var b,w,P;const[v,W]=c.useState([0,0]),f=document.createElement("div");f.setAttribute("id","dropdown-root");const p=c.useRef(f),a=c.useRef(null),x=B.useVerticalPosition(a,n,t),y=B.useHorizontalPosition(a,o),[j,D]=c.useState(!1);K.useShortcut(A.Key.Escape,r),V.useWindowResize(),c.useEffect(()=>(D(!0),document.body.appendChild(p.current),()=>{document.body.removeChild(p.current)}),[]),c.useEffect(()=>{W(Z(x,y,e,n,a))},[s,x,y,n,a,e]);const[H,N]=v,R=(P=(w=(b=n==null?void 0:n.current)==null?void 0:b.getBoundingClientRect())==null?void 0:w.width)!=null?P:null;return T.createPortal(h.jsxs(h.Fragment,{children:[h.jsx(Y,{"data-testid":"backdrop",onClick:r}),h.jsx(X,_(S({ref:a,$visible:j,$top:H,$left:N,$fixedWidth:i?R:null},u),{children:s}))]}),p.current)};E.displayName="Overlay";exports.Overlay=E;
