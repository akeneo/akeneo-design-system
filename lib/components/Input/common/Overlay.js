"use strict";var j=Object.defineProperty,k=Object.defineProperties;var z=Object.getOwnPropertyDescriptors;var a=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var f=(t,e,o)=>e in t?j(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,m=(t,e)=>{for(var o in e||(e={}))y.call(e,o)&&f(t,o,e[o]);if(a)for(var o of a(e))x.call(e,o)&&f(t,o,e[o]);return t},g=(t,e)=>k(t,z(e));var h=(t,e)=>{var o={};for(var r in t)y.call(t,r)&&e.indexOf(r)<0&&(o[r]=t[r]);if(t!=null&&a)for(var r of a(t))e.indexOf(r)<0&&x.call(t,r)&&(o[r]=t[r]);return o};var c=require("react/jsx-runtime"),i=require("react"),B=require("react-dom"),E=require("styled-components"),S=require("../../../hooks/usePosition.js"),V=require("../../../hooks/useWindowResize.js"),D=require("../../../theme/theme.js"),W=require("../../../theme/common.js");function b(t){return t&&t.__esModule?t:{default:t}}var A=b(i),q=b(E);const F=q.default.div`
  ${W.CommonStyle}
  background: ${D.getColor("white")};
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.3);
  padding: 10px 0 10px 0;
  position: fixed;
  opacity: ${({visible:t})=>t?1:0};
  transition: opacity 0.15s ease-in-out;
  z-index: 2001;
  top: ${({top:t})=>t}px;
  left: ${({left:t})=>t}px;
  width: ${({width:t})=>t}px;
`,M=q.default.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2000;
`,N=(t,e,o)=>{if(e===void 0||o===void 0||e.current===null||o.current===null)return[0,0,0];const r=e.current.getBoundingClientRect(),l=o.current.getBoundingClientRect(),v=t==="up"?r.top-l.height:r.bottom,n=r.left,s=r.width;return[v,n,s]},G=v=>{var n=v,{verticalPosition:t,parentRef:e,onClose:o,children:r}=n,l=h(n,["verticalPosition","parentRef","onClose","children"]);const s=document.createElement("div");s.setAttribute("id","input-overlay-root");const d=i.useRef(s),u=i.useRef(null),[w,C]=i.useState(!1),[R,P]=i.useState([0,0,0]),p=S.useVerticalPosition(u,t);V.useWindowResize(),i.useEffect(()=>(C(!0),document.body.appendChild(d.current),()=>{document.body.removeChild(d.current)}),[]),A.default.useEffect(()=>{P(N(p,e,u))},[r,p,e,u]);const[_,$,O]=R;return B.createPortal(c.jsxs(c.Fragment,{children:[c.jsx(M,{"data-testid":"backdrop",onClick:o}),c.jsx(F,g(m({ref:u,visible:w,top:_,left:$,width:O},l),{children:r}))]}),d.current)};exports.Overlay=G;
