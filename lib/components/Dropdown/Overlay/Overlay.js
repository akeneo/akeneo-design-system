"use strict";var X=Object.defineProperty,J=Object.defineProperties;var K=Object.getOwnPropertyDescriptors;var v=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var $=(t,e,r)=>e in t?X(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,T=(t,e)=>{for(var r in e||(e={}))w.call(e,r)&&$(t,r,e[r]);if(v)for(var r of v(e))I.call(e,r)&&$(t,r,e[r]);return t},R=(t,e)=>J(t,K(e));var B=(t,e)=>{var r={};for(var o in t)w.call(t,o)&&e.indexOf(o)<0&&(r[o]=t[o]);if(t!=null&&v)for(var o of v(t))e.indexOf(o)<0&&I.call(t,o)&&(r[o]=t[o]);return r};var p=require("react/jsx-runtime"),c=require("react"),Q=require("react-dom"),h=require("styled-components"),k=require("../../../shared/key.js"),z=require("../../../hooks/usePosition.js"),U=require("../../../hooks/useShortcut.js"),Y=require("../../../hooks/useWindowResize.js"),Z=require("../../../theme/theme.js"),tt=require("../../../theme/common.js"),et=require("../Item/Item.js"),rt=require("../ItemCollection/ItemCollection.js"),ot=require("../Header/Header.js");function it(t){return t&&t.__esModule?t:{default:t}}var A=it(h);const nt=2,st=0,ut=({$fixedWidth:t})=>t!==null?h.css`
      width: ${t}px;
    `:h.css`
    min-width: 150px;
    max-width: 400px;
  `,lt=A.default.div`
  ${tt.CommonStyle};
  background: ${Z.getColor("white")};
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.3);
  padding: 10px 0;
  position: fixed;
  opacity: ${({$visible:t})=>t?1:0};
  transition: opacity 0.15s ease-in-out;
  z-index: 1901;
  top: ${({$top:t})=>t}px;
  left: ${({$left:t})=>t}px;
  ${ut};
`,ct=A.default.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1900;
`,N=(t,e,r,o,i)=>{if(o===void 0||i===void 0||o.current===null||i.current===null)return[0,0];const n=o.current.getBoundingClientRect(),u=i.current.getBoundingClientRect(),a=t==="up"?n.top-u.height:n.top-nt,f=n.bottom+1,y=Math.max(r&&t!=="up"?f:a,st),d=e==="left"?n.right-u.width:n.left;return[y,d]},D=y=>{var d=y,{verticalPosition:t,horizontalPosition:e,dropdownOpenerVisible:r=!1,fullWidth:o=!1,parentRef:i,onClose:n,onKeyDown:u,children:a}=d,f=B(d,["verticalPosition","horizontalPosition","dropdownOpenerVisible","fullWidth","parentRef","onClose","onKeyDown","children"]);var O,b,q;const[H,L]=c.useState([0,0]),g=document.createElement("div");g.setAttribute("id","dropdown-root");const m=c.useRef(g),s=c.useRef(null),x=z.useVerticalPosition(s,i,t),E=z.useHorizontalPosition(s,e),[W,j]=c.useState(!1);U.useShortcut(k.Key.Escape,n),Y.useWindowResize(),c.useEffect(()=>(j(!0),document.body.appendChild(m.current),()=>{document.body.removeChild(m.current)}),[]),c.useEffect(()=>{L(N(x,E,r,i,s))},[a,x,E,i,s,r]);const M=l=>{var _,C;if(u==null||u(l),k.Key.ArrowDown!==l.key||l.defaultPrevented)return;const P=l.target instanceof Element?l.target.closest(ot.HEADER_SELECTOR):null;if(P===null||!((_=s.current)!=null&&_.contains(P)))return;const S=(C=s.current)==null?void 0:C.querySelector(`${rt.LISTBOX_SELECTOR} ${et.NAVIGABLE_ITEM_SELECTOR}`);S&&(l.preventDefault(),S.focus())},[V,F]=H,G=(q=(b=(O=i==null?void 0:i.current)==null?void 0:O.getBoundingClientRect())==null?void 0:b.width)!=null?q:null;return Q.createPortal(p.jsxs(p.Fragment,{children:[p.jsx(ct,{"data-testid":"backdrop",onClick:n}),p.jsx(lt,R(T({ref:s,$visible:W,$top:V,$left:F,$fixedWidth:o?G:null,onKeyDown:M},f),{children:a}))]}),m.current)};D.displayName="Overlay";exports.Overlay=D;exports.getOverlayPosition=N;
