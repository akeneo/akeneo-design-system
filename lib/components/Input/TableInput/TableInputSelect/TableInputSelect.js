"use strict";var J=Object.defineProperty,K=Object.defineProperties;var L=Object.getOwnPropertyDescriptors;var a=Object.getOwnPropertySymbols;var j=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable;var g=(e,t,r)=>t in e?J(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,y=(e,t)=>{for(var r in t||(t={}))j.call(t,r)&&g(e,r,t[r]);if(a)for(var r of a(t))q.call(t,r)&&g(e,r,t[r]);return e},S=(e,t)=>K(e,L(t));var D=(e,t)=>{var r={};for(var l in e)j.call(e,l)&&t.indexOf(l)<0&&(r[l]=e[l]);if(e!=null&&a)for(var l of a(e))t.indexOf(l)<0&&q.call(e,l)&&(r[l]=e[l]);return r};var o=require("react/jsx-runtime"),N=require("react"),d=require("../../../Dropdown/Dropdown.js"),Q=require("../../../../hooks/useBooleanState.js"),U=require("../../../../icons/ArrowDownIcon.js"),W=require("../../../../icons/CloseIcon.js"),X=require("../../../Search/Search.js"),Y=require("styled-components"),v=require("../../../IconButton/IconButton.js"),C=require("../../../../theme/theme.js"),Z=require("../TableInputContext.js"),O=require("../shared/TableInputReadOnlyCell.js"),ee=require("../shared/highlightCell.js");function R(e){return e&&e.__esModule?e:{default:e}}var c=R(N),p=R(Y);const te=p.default(d.Dropdown)`
  width: 100%;
  color: ${C.getColor("grey",140)};
`,re=p.default.button`
  color: ${C.getColor("grey",140)};
  width: 100%;
  background: none;
  border: none;
  text-align: left;
  display: inline-block;
  justify-content: space-between;
  padding: 0 70px 0 10px;
  height: 39px;
  line-height: 39px;
  align-items: center;
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  background: none;

  ${ee.highlightCell};
`,oe=p.default.div`
  display: inline-flex;
  gap: 10px;
  position: absolute;
  right: 10px;
  height: 39px;
  align-items: center;
`,le=ne=>{var x=ne,{value:e,onClear:t,clearLabel:r,openDropdownLabel:l,highlighted:m=!1,searchValue:B="",searchPlaceholder:_,onSearchChange:h,searchTitle:k,onNextPage:T,children:z,inError:E,closeTick:$=!1,bottomHelper:A,withSearch:P=!0,onOpenChange:n}=x,H=D(x,["value","onClear","clearLabel","openDropdownLabel","highlighted","searchValue","searchPlaceholder","onSearchChange","searchTitle","onNextPage","children","inError","closeTick","bottomHelper","withSearch","onOpenChange"]);const[i,M,V]=Q.useBooleanState(!1),u=()=>{M(),n==null||n(!0)},f=()=>{V(),n==null||n(!1)},w=c.default.createRef(),F=s=>{var I;(I=s.current)==null||I.focus()};c.default.useEffect(()=>{i&&F(w)},[i]),c.default.useEffect(()=>{i?f():u()},[$]),c.default.useEffect(()=>{f(),b("")},[e]);const b=s=>{h&&h(s)},{readOnly:G}=c.default.useContext(Z.TableInputContext);return G?o.jsx(O.TableInputReadOnlyCell,{title:e==null?void 0:e.toString(),children:e}):o.jsxs(te,S(y({},H),{children:[o.jsxs(re,{onClick:s=>{s.preventDefault(),u()},tabIndex:-1,highlighted:m,title:e==null?void 0:e.toString(),inError:E,children:[e," "]}),o.jsxs(oe,{children:[e&&!i&&o.jsx(v.IconButton,{icon:o.jsx(W.CloseIcon,{}),size:"small",title:r,ghost:"borderless",level:"tertiary",onClick:t}),o.jsx(v.IconButton,{icon:o.jsx(U.ArrowDownIcon,{}),size:"small",title:l,ghost:"borderless",level:"tertiary",onClick:u})]}),i&&o.jsxs(d.Dropdown.Overlay,{onClose:f,dropdownOpenerVisible:!0,horizontalPosition:"left",children:[P&&o.jsx(d.Dropdown.Header,{children:o.jsx(X.Search,{inputRef:w,onSearchChange:b,placeholder:_,searchValue:B,title:k})}),o.jsx(d.Dropdown.ItemCollection,{onNextPage:T,children:z}),A]})]}))};exports.TableInputSelect=le;
