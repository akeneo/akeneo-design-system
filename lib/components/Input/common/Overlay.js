"use strict";var k=Object.defineProperty,z=Object.defineProperties;var B=Object.getOwnPropertyDescriptors;var a=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable;var x=(t,e,o)=>e in t?k(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,h=(t,e)=>{for(var o in e||(e={}))y.call(e,o)&&x(t,o,e[o]);if(a)for(var o of a(e))m.call(e,o)&&x(t,o,e[o]);return t},b=(t,e)=>z(t,B(e));var g=(t,e)=>{var o={};for(var r in t)y.call(t,r)&&e.indexOf(r)<0&&(o[r]=t[r]);if(t!=null&&a)for(var r of a(t))e.indexOf(r)<0&&m.call(t,r)&&(o[r]=t[r]);return o};var c=require("react/jsx-runtime"),i=require("react"),E=require("react-dom"),S=require("styled-components"),V=require("../../../hooks/usePosition.js"),D=require("../../../hooks/useWindowResize.js"),W=require("../../../theme/theme.js"),A=require("../../../theme/common.js");function $(t){return t&&t.__esModule?t:{default:t}}var F=$(i),w=$(S);const M=w.default.div`
  ${A.CommonStyle}
  background: ${W.getColor("white")};
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.3);
  padding: 10px 0 10px 0;
  position: fixed;
  opacity: ${({$visible:t})=>t?1:0};
  transition: opacity 0.15s ease-in-out;
  z-index: 2001;
  top: ${({$top:t})=>t}px;
  left: ${({$left:t})=>t}px;
  width: ${({$width:t})=>t}px;
  min-width: ${({$minWidth:t})=>t?`${t}px`:"unset"};
`,N=w.default.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2000;
`,G=(t,e,o)=>{if(e===void 0||o===void 0||e.current===null||o.current===null)return[0,0,0];const r=e.current.getBoundingClientRect(),n=o.current.getBoundingClientRect(),l=t==="up"?r.top-n.height:r.bottom,v=r.left,s=r.width;return[l,v,s]},H=v=>{var s=v,{verticalPosition:t,parentRef:e,minWidth:o,onClose:r,children:n}=s,l=g(s,["verticalPosition","parentRef","minWidth","onClose","children"]);const p=document.createElement("div");p.setAttribute("id","input-overlay-root");const d=i.useRef(p),u=i.useRef(null),[q,C]=i.useState(!1),[P,R]=i.useState([0,0,0]),f=V.useVerticalPosition(u,e,t);D.useWindowResize(),i.useEffect(()=>(C(!0),document.body.appendChild(d.current),()=>{document.body.removeChild(d.current)}),[]),F.default.useEffect(()=>{R(G(f,e,u))},[n,f,e,u]);const[_,O,j]=P;return E.createPortal(c.jsxs(c.Fragment,{children:[c.jsx(N,{"data-testid":"backdrop",onClick:r}),c.jsx(M,b(h({ref:u,$visible:q,$top:_,$left:O,$width:j,$minWidth:o},l),{children:n}))]}),d.current)};exports.Overlay=H;
