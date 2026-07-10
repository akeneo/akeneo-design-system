"use strict";var S=Object.defineProperty,T=Object.defineProperties;var I=Object.getOwnPropertyDescriptors;var a=Object.getOwnPropertySymbols;var C=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;var y=(e,t,o)=>t in e?S(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,c=(e,t)=>{for(var o in t||(t={}))C.call(t,o)&&y(e,o,t[o]);if(a)for(var o of a(t))b.call(t,o)&&y(e,o,t[o]);return e},p=(e,t)=>T(e,I(t));var f=(e,t)=>{var o={};for(var i in e)C.call(e,i)&&t.indexOf(i)<0&&(o[i]=e[i]);if(e!=null&&a)for(var i of a(e))t.indexOf(i)<0&&b.call(e,i)&&(o[i]=e[i]);return o};var r=require("react/jsx-runtime"),x=require("react"),R=require("react-dom"),_=require("styled-components"),l=require("../../theme/theme.js"),w=require("../../theme/common.js"),z=require("../IconButton/IconButton.js"),E=require("../../icons/CloseIcon.js"),k=require("../../hooks/useShortcut.js"),P=require("../../shared/key.js"),j=require("./ModalContext.js");function q(e){return e&&e.__esModule?e:{default:e}}var D=q(x),n=q(_);const F=n.default.div`
  ${w.CommonStyle}
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: ${l.getColor("white")};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1800;
  overflow: hidden;
  padding: 20px 80px;
  box-sizing: border-box;
`,L=n.default(z.IconButton)`
  position: fixed;
  top: 40px;
  left: 40px;
  z-index: 200;
`,A=n.default.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  height: 100%;
  align-items: center;
`,K=n.default.div`
  display: flex;
  flex-direction: column;
  padding: 20px 40px;
  min-width: 480px;
  border-left: 1px solid ${l.getColor("brand",100)};
  max-height: 100%;
  overflow: auto;
`,N=n.default.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 40px;
`,$=n.default.div`
  height: 20px;
  color: ${({$color:e})=>l.getColor(e!=null?e:"grey",120)};
  font-size: ${({$size:e})=>l.getFontSize(e!=null?e:"default")};
  text-transform: uppercase;
`,G=m=>{var s=m,{size:e,color:t,children:o}=s,i=f(s,["size","color","children"]);return r.jsx($,p(c({$size:e,$color:t},i),{children:o}))},H=n.default.div`
  display: flex;
  align-items: center;
  height: 40px;
  color: ${l.getColor("grey",140)};
  font-size: ${l.getFontSize("title")};
  margin-bottom: 10px;
`,g=n.default.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
`,J=n.default(g)`
  position: fixed;
  top: 40px;
  right: 40px;
  margin: 0;
`,O=n.default(g)`
  position: fixed;
  top: 40px;
  left: 82px;
  margin: 0;
`,d=s=>{var v=s,{onClose:e,illustration:t,closeTitle:o,children:i}=v,m=f(v,["onClose","illustration","closeTitle","children"]);const h=document.createElement("div");h.setAttribute("id","modal-root");const u=x.useRef(h);k.useShortcut(P.Key.Escape,e),x.useEffect(()=>(document.body.appendChild(u.current),()=>{document.body.removeChild(u.current)}),[]);const B=M=>{M.stopPropagation()};return R.createPortal(r.jsx(j.ModalContext.Provider,{value:!0,children:r.jsxs(F,p(c({onClick:B,role:"dialog"},m),{children:[r.jsx(L,{title:o,level:"tertiary",ghost:"borderless",icon:r.jsx(E.CloseIcon,{}),onClick:e}),t===void 0?i:r.jsxs(A,{children:[r.jsx(N,{children:D.default.cloneElement(t,{size:220})}),r.jsx(K,{children:i})]})]}))}),u.current)};d.BottomButtons=g;d.TopRightButtons=J;d.TopLeftButtons=O;d.Title=H;d.SectionTitle=G;exports.useInModal=j.useInModal;exports.Modal=d;
