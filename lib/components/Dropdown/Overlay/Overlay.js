"use strict";var F=Object.defineProperty,H=Object.defineProperties;var I=Object.getOwnPropertyDescriptors;var a=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable;var q=(t,e,o)=>e in t?F(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,_=(t,e)=>{for(var o in e||(e={}))w.call(e,o)&&q(t,o,e[o]);if(a)for(var o of a(e))$.call(e,o)&&q(t,o,e[o]);return t},C=(t,e)=>H(t,I(e));var S=(t,e)=>{var o={};for(var r in t)w.call(t,r)&&e.indexOf(r)<0&&(o[r]=t[r]);if(t!=null&&a)for(var r of a(t))e.indexOf(r)<0&&$.call(t,r)&&(o[r]=t[r]);return o};var d=require("react/jsx-runtime"),s=require("react"),M=require("react-dom"),h=require("styled-components"),V=require("../../../shared/key.js"),z=require("../../../hooks/usePosition.js"),A=require("../../../hooks/useShortcut.js"),K=require("../../../hooks/useWindowResize.js"),G=require("../../../theme/theme.js"),J=require("../../../theme/common.js");function L(t){return t&&t.__esModule?t:{default:t}}var E=L(h);const Q=2,U=0,X=({$fixedWidth:t})=>t!==null?h.css`
      width: ${t}px;
    `:h.css`
    min-width: 150px;
    max-width: 400px;
  `,Y=E.default.div`
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
  ${X};
`,Z=E.default.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1900;
`,k=(t,e,o,r,i)=>{if(r===void 0||i===void 0||r.current===null||i.current===null)return[0,0];const n=r.current.getBoundingClientRect(),u=i.current.getBoundingClientRect(),v=t==="up"?n.top-u.height:n.top-Q,f=n.bottom+1,l=Math.max(o&&t!=="up"?f:v,U),p=e==="left"?n.right-u.width:n.left;return[l,p]},B=f=>{var l=f,{verticalPosition:t,horizontalPosition:e,dropdownOpenerVisible:o=!1,fullWidth:r=!1,parentRef:i,onClose:n,children:u}=l,v=S(l,["verticalPosition","horizontalPosition","dropdownOpenerVisible","fullWidth","parentRef","onClose","children"]);var b,O,P;const[p,W]=s.useState([0,0]),m=document.createElement("div");m.setAttribute("id","dropdown-root");const y=s.useRef(m),c=s.useRef(null),x=z.useVerticalPosition(c,i,t),g=z.useHorizontalPosition(c,e),[j,D]=s.useState(!1);A.useShortcut(V.Key.Escape,n),K.useWindowResize(),s.useEffect(()=>(D(!0),document.body.appendChild(y.current),()=>{document.body.removeChild(y.current)}),[]),s.useEffect(()=>{W(k(x,g,o,i,c))},[u,x,g,i,c,o]);const[N,R]=p,T=(P=(O=(b=i==null?void 0:i.current)==null?void 0:b.getBoundingClientRect())==null?void 0:O.width)!=null?P:null;return M.createPortal(d.jsxs(d.Fragment,{children:[d.jsx(Z,{"data-testid":"backdrop",onClick:n}),d.jsx(Y,C(_({ref:c,$visible:j,$top:N,$left:R,$fixedWidth:r?T:null},v),{children:u}))]}),y.current)};B.displayName="Overlay";exports.Overlay=B;exports.getOverlayPosition=k;
