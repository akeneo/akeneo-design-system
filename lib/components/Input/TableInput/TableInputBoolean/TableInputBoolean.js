"use strict";var T=Object.defineProperty,R=Object.defineProperties;var z=Object.getOwnPropertyDescriptors;var i=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var I=(e,n,r)=>n in e?T(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r,B=(e,n)=>{for(var r in n||(n={}))v.call(n,r)&&I(e,r,n[r]);if(i)for(var r of i(n))j.call(n,r)&&I(e,r,n[r]);return e},w=(e,n)=>R(e,z(n));var b=(e,n)=>{var r={};for(var o in e)v.call(e,o)&&n.indexOf(o)<0&&(r[o]=e[o]);if(e!=null&&i)for(var o of i(e))n.indexOf(o)<0&&j.call(e,o)&&(r[o]=e[o]);return r};var t=require("react/jsx-runtime"),A=require("react"),y=require("../../../Badge/Badge.js"),P=require("styled-components"),D=require("../../../../theme/theme.js"),l=require("../../../Dropdown/Dropdown.js"),S=require("../../../../icons/ArrowDownIcon.js"),E=require("../../../../icons/CloseIcon.js"),M=require("../../../../hooks/useBooleanState.js"),q=require("../../../IconButton/IconButton.js"),N=require("../shared/TableInputReadOnlyCell.js"),V=require("../TableInputContext.js"),Y=require("../shared/highlightCell.js");function m(e){return e&&e.__esModule?e:{default:e}}var F=m(A),c=m(P);const G=c.default(l.Dropdown)`
  width: 100%;
  color: ${D.getColor("grey",140)};
`,H=c.default.button`
  color: ${D.getColor("grey",140)};
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
`,K=Q=>{var g=Q,{value:e,onChange:n,yesLabel:r,noLabel:o,highlighted:h=!1,clearLabel:k,openDropdownLabel:_,inError:p=!1}=g,$=b(g,["value","onChange","yesLabel","noLabel","highlighted","clearLabel","openDropdownLabel","inError"]);const[x,f,C]=M.useBooleanState(!1),a=u=>{n(u),C()},s=t.jsx(y.Badge,{level:"primary",children:r}),d=t.jsx(y.Badge,{level:"tertiary",children:o}),{readOnly:O}=F.default.useContext(V.TableInputContext);return O?t.jsx(N.TableInputReadOnlyCell,{title:e!==null?e?r:o:void 0,$highlighted:h,$inError:p,children:e!==null&&(e?s:d)}):t.jsxs(G,w(B({},$),{children:[t.jsxs(H,{tabIndex:-1,$highlighted:h,onClick:u=>{u.preventDefault(),f()},$inError:p,children:[e!==null&&(e?s:d)," "]}),t.jsxs(J,{children:[e!==null&&!x&&t.jsx(q.IconButton,{icon:t.jsx(E.CloseIcon,{}),size:"small",title:k,ghost:"borderless",level:"tertiary",onClick:()=>a(null)}),t.jsx(q.IconButton,{icon:t.jsx(S.ArrowDownIcon,{}),size:"small",title:_,ghost:"borderless",level:"tertiary",onClick:f})]}),x&&t.jsx(l.Dropdown.Overlay,{onClose:C,dropdownOpenerVisible:!0,horizontalPosition:"left",children:t.jsxs(l.Dropdown.ItemCollection,{children:[t.jsx(l.Dropdown.Item,{onClick:()=>a(!0),children:s}),t.jsx(l.Dropdown.Item,{onClick:()=>a(!1),children:d})]})})]}))};exports.TableInputBoolean=K;
