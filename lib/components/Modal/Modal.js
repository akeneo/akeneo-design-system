"use strict";var j=Object.defineProperty,T=Object.defineProperties;var I=Object.getOwnPropertyDescriptors;var a=Object.getOwnPropertySymbols;var g=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var x=(t,e,o)=>e in t?j(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,m=(t,e)=>{for(var o in e||(e={}))g.call(e,o)&&x(t,o,e[o]);if(a)for(var o of a(e))v.call(e,o)&&x(t,o,e[o]);return t},h=(t,e)=>T(t,I(e));var y=(t,e)=>{var o={};for(var n in t)g.call(t,n)&&e.indexOf(n)<0&&(o[n]=t[n]);if(t!=null&&a)for(var n of a(t))e.indexOf(n)<0&&v.call(t,n)&&(o[n]=t[n]);return o};var i=require("react/jsx-runtime"),u=require("react"),R=require("react-dom"),S=require("styled-components"),d=require("../../theme/theme.js"),_=require("../../theme/common.js"),$=require("../IconButton/IconButton.js"),w=require("../../icons/CloseIcon.js"),E=require("../../hooks/useShortcut.js"),k=require("../../shared/key.js"),C=require("./ModalContext.js");function b(t){return t&&t.__esModule?t:{default:t}}var P=b(u),r=b(S);const z=r.default.div`
  ${_.CommonStyle}
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: ${d.getColor("white")};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1800;
  overflow: hidden;
  padding: 20px 80px;
  box-sizing: border-box;
`,D=r.default($.IconButton)`
  position: fixed;
  top: 40px;
  left: 40px;
`,F=r.default.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
`,L=r.default.div`
  display: flex;
  flex-direction: column;
  padding: 20px 40px;
  min-width: 480px;
  border-left: 1px solid ${d.getColor("brand",100)};
`,A=r.default.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 40px;
`,K=r.default.div`
  height: 20px;
  color: ${({color:t})=>d.getColor(t!=null?t:"grey",120)};
  font-size: ${({size:t})=>d.getFontSize(t!=null?t:"default")};
  text-transform: uppercase;
`,N=r.default.div`
  display: flex;
  align-items: center;
  height: 40px;
  color: ${d.getColor("grey",140)};
  font-size: ${d.getFontSize("title")};
  margin-bottom: 10px;
`,c=r.default.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
`,G=r.default(c)`
  position: fixed;
  top: 40px;
  right: 40px;
  margin: 0;
`,H=r.default(c)`
  position: fixed;
  top: 40px;
  left: 82px;
  margin: 0;
`,l=J=>{var p=J,{onClose:t,illustration:e,closeTitle:o,children:n}=p,q=y(p,["onClose","illustration","closeTitle","children"]);const f=document.createElement("div");f.setAttribute("id","modal-root");const s=u.useRef(f);E.useShortcut(k.Key.Escape,t),u.useEffect(()=>(document.body.appendChild(s.current),()=>{document.body.removeChild(s.current)}),[]);const B=M=>{M.stopPropagation()};return R.createPortal(i.jsx(C.ModalContext.Provider,{value:!0,children:i.jsxs(z,h(m({onClick:B,role:"dialog"},q),{children:[i.jsx(D,{title:o,level:"tertiary",ghost:"borderless",icon:i.jsx(w.CloseIcon,{}),onClick:t}),e===void 0?n:i.jsxs(F,{children:[i.jsx(A,{children:P.default.cloneElement(e,{size:220})}),i.jsx(L,{children:n})]})]}))}),s.current)};l.BottomButtons=c;l.TopRightButtons=G;l.TopLeftButtons=H;l.Title=N;l.SectionTitle=K;exports.useInModal=C.useInModal;exports.Modal=l;
