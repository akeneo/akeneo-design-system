"use strict";var R=Object.defineProperty,z=Object.defineProperties;var $=Object.getOwnPropertyDescriptors;var i=Object.getOwnPropertySymbols;var C=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var f=(e,n,t)=>n in e?R(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,v=(e,n)=>{for(var t in n||(n={}))C.call(n,t)&&f(e,t,n[t]);if(i)for(var t of i(n))I.call(n,t)&&f(e,t,n[t]);return e},j=(e,n)=>z(e,$(n));var B=(e,n)=>{var t={};for(var o in e)C.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(e!=null&&i)for(var o of i(e))n.indexOf(o)<0&&I.call(e,o)&&(t[o]=e[o]);return t};var r=require("react/jsx-runtime"),A=require("react"),w=require("../../../Badge/Badge.js"),P=require("styled-components"),y=require("../../../../theme/theme.js"),l=require("../../../Dropdown/Dropdown.js"),S=require("../../../../icons/ArrowDownIcon.js"),M=require("../../../../icons/CloseIcon.js"),N=require("../../../../hooks/useBooleanState.js"),b=require("../../../IconButton/IconButton.js"),V=require("../shared/TableInputReadOnlyCell.js"),Y=require("../TableInputContext.js"),E=require("../shared/highlightCell.js");function q(e){return e&&e.__esModule?e:{default:e}}var F=q(A),c=q(P);const G=c.default(l.Dropdown)`
  width: 100%;
  color: ${y.getColor("grey",140)};
`,H=c.default.button`
  color: ${y.getColor("grey",140)};
  width: 100%;
  background: none;
  border: none;
  text-align: left;
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  height: 39px;
  line-height: 39px;
  align-items: center;
  cursor: pointer;
  background: none;

  ${E.highlightCell};
`,J=c.default.div`
  display: inline-flex;
  gap: 10px;
  position: absolute;
  right: 10px;
  height: 39px;
  align-items: center;
`,K=Q=>{var p=Q,{value:e,onChange:n,yesLabel:t,noLabel:o,highlighted:D=!1,clearLabel:m,openDropdownLabel:k,inError:_=!1}=p,O=B(p,["value","onChange","yesLabel","noLabel","highlighted","clearLabel","openDropdownLabel","inError"]);const[h,x,g]=N.useBooleanState(!1),a=u=>{n(u),g()},s=r.jsx(w.Badge,{level:"primary",children:t}),d=r.jsx(w.Badge,{level:"tertiary",children:o}),{readOnly:T}=F.default.useContext(Y.TableInputContext);return T?r.jsx(V.TableInputReadOnlyCell,{title:e!==null?e?t:o:void 0,children:e!==null&&(e?s:d)}):r.jsxs(G,j(v({},O),{children:[r.jsxs(H,{tabIndex:-1,highlighted:D,onClick:u=>{u.preventDefault(),x()},inError:_,children:[e!==null&&(e?s:d)," "]}),r.jsxs(J,{children:[e!==null&&!h&&r.jsx(b.IconButton,{icon:r.jsx(M.CloseIcon,{}),size:"small",title:m,ghost:"borderless",level:"tertiary",onClick:()=>a(null)}),r.jsx(b.IconButton,{icon:r.jsx(S.ArrowDownIcon,{}),size:"small",title:k,ghost:"borderless",level:"tertiary",onClick:x})]}),h&&r.jsx(l.Dropdown.Overlay,{onClose:g,dropdownOpenerVisible:!0,horizontalPosition:"left",children:r.jsxs(l.Dropdown.ItemCollection,{children:[r.jsx(l.Dropdown.Item,{onClick:()=>a(!0),children:s}),r.jsx(l.Dropdown.Item,{onClick:()=>a(!1),children:d})]})})]}))};exports.TableInputBoolean=K;
