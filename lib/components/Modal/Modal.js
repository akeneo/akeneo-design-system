"use strict";var j=Object.defineProperty,T=Object.defineProperties;var I=Object.getOwnPropertyDescriptors;var a=Object.getOwnPropertySymbols;var g=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable;var x=(t,e,o)=>e in t?j(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,v=(t,e)=>{for(var o in e||(e={}))g.call(e,o)&&x(t,o,e[o]);if(a)for(var o of a(e))m.call(e,o)&&x(t,o,e[o]);return t},h=(t,e)=>T(t,I(e));var y=(t,e)=>{var o={};for(var n in t)g.call(t,n)&&e.indexOf(n)<0&&(o[n]=t[n]);if(t!=null&&a)for(var n of a(t))e.indexOf(n)<0&&m.call(t,n)&&(o[n]=t[n]);return o};var r=require("react/jsx-runtime"),u=require("react"),R=require("react-dom"),S=require("styled-components"),l=require("../../theme/theme.js"),_=require("../../theme/common.js"),$=require("../IconButton/IconButton.js"),w=require("../../icons/CloseIcon.js"),E=require("../../hooks/useShortcut.js"),k=require("../../shared/key.js"),C=require("./ModalContext.js");function b(t){return t&&t.__esModule?t:{default:t}}var P=b(u),i=b(S);const z=i.default.div`
  ${_.CommonStyle}
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
`,D=i.default($.IconButton)`
  position: fixed;
  top: 40px;
  left: 40px;
`,F=i.default.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  height: 100%;
  align-items: center;
`,L=i.default.div`
  display: flex;
  flex-direction: column;
  padding: 20px 40px;
  min-width: 480px;
  border-left: 1px solid ${l.getColor("brand",100)};
  max-height: 100%;
  overflow: auto;
`,A=i.default.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 40px;
`,K=i.default.div`
  height: 20px;
  color: ${({color:t})=>l.getColor(t!=null?t:"grey",120)};
  font-size: ${({size:t})=>l.getFontSize(t!=null?t:"default")};
  text-transform: uppercase;
`,N=i.default.div`
  display: flex;
  align-items: center;
  height: 40px;
  color: ${l.getColor("grey",140)};
  font-size: ${l.getFontSize("title")};
  margin-bottom: 10px;
`,c=i.default.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
`,G=i.default(c)`
  position: fixed;
  top: 40px;
  right: 40px;
  margin: 0;
`,H=i.default(c)`
  position: fixed;
  top: 40px;
  left: 82px;
  margin: 0;
`,d=J=>{var p=J,{onClose:t,illustration:e,closeTitle:o,children:n}=p,q=y(p,["onClose","illustration","closeTitle","children"]);const f=document.createElement("div");f.setAttribute("id","modal-root");const s=u.useRef(f);E.useShortcut(k.Key.Escape,t),u.useEffect(()=>(document.body.appendChild(s.current),()=>{document.body.removeChild(s.current)}),[]);const B=M=>{M.stopPropagation()};return R.createPortal(r.jsx(C.ModalContext.Provider,{value:!0,children:r.jsxs(z,h(v({onClick:B,role:"dialog"},q),{children:[r.jsx(D,{title:o,level:"tertiary",ghost:"borderless",icon:r.jsx(w.CloseIcon,{}),onClick:t}),e===void 0?n:r.jsxs(F,{children:[r.jsx(A,{children:P.default.cloneElement(e,{size:220})}),r.jsx(L,{children:n})]})]}))}),s.current)};d.BottomButtons=c;d.TopRightButtons=G;d.TopLeftButtons=H;d.Title=N;d.SectionTitle=K;exports.useInModal=C.useInModal;exports.Modal=d;
