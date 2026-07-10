"use strict";var R=Object.defineProperty,$=Object.defineProperties;var z=Object.getOwnPropertyDescriptors;var i=Object.getOwnPropertySymbols;var C=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var f=(e,n,r)=>n in e?R(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r,v=(e,n)=>{for(var r in n||(n={}))C.call(n,r)&&f(e,r,n[r]);if(i)for(var r of i(n))I.call(n,r)&&f(e,r,n[r]);return e},j=(e,n)=>$(e,z(n));var B=(e,n)=>{var r={};for(var o in e)C.call(e,o)&&n.indexOf(o)<0&&(r[o]=e[o]);if(e!=null&&i)for(var o of i(e))n.indexOf(o)<0&&I.call(e,o)&&(r[o]=e[o]);return r};var t=require("react/jsx-runtime"),A=require("react"),w=require("../../../Badge/Badge.js"),P=require("styled-components"),y=require("../../../../theme/theme.js"),l=require("../../../Dropdown/Dropdown.js"),S=require("../../../../icons/ArrowDownIcon.js"),E=require("../../../../icons/CloseIcon.js"),M=require("../../../../hooks/useBooleanState.js"),b=require("../../../IconButton/IconButton.js"),N=require("../shared/TableInputReadOnlyCell.js"),V=require("../TableInputContext.js"),Y=require("../shared/highlightCell.js");function q(e){return e&&e.__esModule?e:{default:e}}var F=q(A),c=q(P);const G=c.default(l.Dropdown)`
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

  ${Y.highlightCell};
`,J=c.default.div`
  display: inline-flex;
  gap: 10px;
  position: absolute;
  right: 10px;
  height: 39px;
  align-items: center;
`,K=Q=>{var h=Q,{value:e,onChange:n,yesLabel:r,noLabel:o,highlighted:D=!1,clearLabel:m,openDropdownLabel:k,inError:_=!1}=h,O=B(h,["value","onChange","yesLabel","noLabel","highlighted","clearLabel","openDropdownLabel","inError"]);const[p,g,x]=M.useBooleanState(!1),a=u=>{n(u),x()},s=t.jsx(w.Badge,{level:"primary",children:r}),d=t.jsx(w.Badge,{level:"tertiary",children:o}),{readOnly:T}=F.default.useContext(V.TableInputContext);return T?t.jsx(N.TableInputReadOnlyCell,{title:e!==null?e?r:o:void 0,children:e!==null&&(e?s:d)}):t.jsxs(G,j(v({},O),{children:[t.jsxs(H,{tabIndex:-1,$highlighted:D,onClick:u=>{u.preventDefault(),g()},$inError:_,children:[e!==null&&(e?s:d)," "]}),t.jsxs(J,{children:[e!==null&&!p&&t.jsx(b.IconButton,{icon:t.jsx(E.CloseIcon,{}),size:"small",title:m,ghost:"borderless",level:"tertiary",onClick:()=>a(null)}),t.jsx(b.IconButton,{icon:t.jsx(S.ArrowDownIcon,{}),size:"small",title:k,ghost:"borderless",level:"tertiary",onClick:g})]}),p&&t.jsx(l.Dropdown.Overlay,{onClose:x,dropdownOpenerVisible:!0,horizontalPosition:"left",children:t.jsxs(l.Dropdown.ItemCollection,{children:[t.jsx(l.Dropdown.Item,{onClick:()=>a(!0),children:s}),t.jsx(l.Dropdown.Item,{onClick:()=>a(!1),children:d})]})})]}))};exports.TableInputBoolean=K;
