"use strict";var A=Object.defineProperty,N=Object.defineProperties;var K=Object.getOwnPropertyDescriptors;var d=Object.getOwnPropertySymbols;var C=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var P=(t,o,e)=>o in t?A(t,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[o]=e,B=(t,o)=>{for(var e in o||(o={}))C.call(o,e)&&P(t,e,o[e]);if(d)for(var e of d(o))S.call(o,e)&&P(t,e,o[e]);return t},_=(t,o)=>N(t,K(o));var $=(t,o)=>{var e={};for(var r in t)C.call(t,r)&&o.indexOf(r)<0&&(e[r]=t[r]);if(t!=null&&d)for(var r of d(t))o.indexOf(r)<0&&S.call(t,r)&&(e[r]=t[r]);return e};var h=require("react/jsx-runtime"),c=require("react"),M=require("react-dom"),m=require("styled-components"),T=require("../../../shared/key.js"),z=require("../../../hooks/usePosition.js"),V=require("../../../hooks/useShortcut.js"),G=require("../../../hooks/useWindowResize.js"),I=require("../../../theme/theme.js"),J=require("../../../theme/common.js");function L(t){return t&&t.__esModule?t:{default:t}}var E=L(m);const g=2,Q=({fixedWidth:t})=>t!==null?m.css`
      width: ${t}px;
    `:m.css`
    min-width: 150px;
    max-width: 400px;
  `,U=E.default.div`
  ${J.CommonStyle};
  background: ${I.getColor("white")};
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.3);
  padding: 10px 0;
  position: fixed;
  opacity: ${({visible:t})=>t?1:0};
  transition: opacity 0.15s ease-in-out;
  z-index: 1901;
  top: ${({top:t})=>t}px;
  left: ${({left:t})=>t}px;
  ${Q};
`,X=E.default.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1900;
`,Y=(t,o,e,r,s)=>{if(r===void 0||s===void 0||r.current===null||s.current===null)return[0,0];const i=r.current.getBoundingClientRect(),n=s.current.getBoundingClientRect();let u=t==="up"?i.bottom-n.height+g:i.top-g;e&&(u=t==="up"?i.top-n.height:i.bottom+1);const a=window.innerHeight-i.bottom<n.height&&i.top>n.height;u=a?i.bottom-n.height+g:u,u=a&&e?i.top-n.height:u;const v=o==="left"?i.right-n.width:i.left;return[u,v]},O=k=>{var a=k,{verticalPosition:t,horizontalPosition:o,dropdownOpenerVisible:e=!1,fullWidth:r=!1,parentRef:s,onClose:i,children:n}=a,u=$(a,["verticalPosition","horizontalPosition","dropdownOpenerVisible","fullWidth","parentRef","onClose","children"]);var b,w,q;const[v,R]=c.useState([0,0]),f=document.createElement("div");f.setAttribute("id","dropdown-root");const p=c.useRef(f),l=c.useRef(null),y=z.useVerticalPosition(l,t),x=z.useHorizontalPosition(l,o),[W,j]=c.useState(!1);V.useShortcut(T.Key.Escape,i),G.useWindowResize(),c.useEffect(()=>(j(!0),document.body.appendChild(p.current),()=>{document.body.removeChild(p.current)}),[]),c.useEffect(()=>{R(Y(y,x,e,s,l))},[n,y,x,s,l,e]);const[D,H]=v,F=(q=(w=(b=s==null?void 0:s.current)==null?void 0:b.getBoundingClientRect())==null?void 0:w.width)!=null?q:null;return M.createPortal(h.jsxs(h.Fragment,{children:[h.jsx(X,{"data-testid":"backdrop",onClick:i}),h.jsx(U,_(B({ref:l,visible:W,top:D,left:H,fixedWidth:r?F:null},u),{children:n}))]}),p.current)};O.displayName="Overlay";exports.Overlay=O;
