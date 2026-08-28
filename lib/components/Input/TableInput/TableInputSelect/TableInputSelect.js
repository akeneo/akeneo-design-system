"use strict";var J=Object.defineProperty,K=Object.defineProperties;var L=Object.getOwnPropertyDescriptors;var a=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var q=(e,t,r)=>t in e?J(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,D=(e,t)=>{for(var r in t||(t={}))y.call(t,r)&&q(e,r,t[r]);if(a)for(var r of a(t))S.call(t,r)&&q(e,r,t[r]);return e},v=(e,t)=>K(e,L(t));var C=(e,t)=>{var r={};for(var l in e)y.call(e,l)&&t.indexOf(l)<0&&(r[l]=e[l]);if(e!=null&&a)for(var l of a(e))t.indexOf(l)<0&&S.call(e,l)&&(r[l]=e[l]);return r};var o=require("react/jsx-runtime"),N=require("react"),d=require("../../../Dropdown/Dropdown.js"),Q=require("../../../../hooks/useBooleanState.js"),U=require("../../../../icons/ArrowDownIcon.js"),W=require("../../../../icons/CloseIcon.js"),X=require("../../../Search/Search.js"),Y=require("styled-components"),R=require("../../../IconButton/IconButton.js"),m=require("../../../../theme/theme.js"),Z=require("../TableInputContext.js"),O=require("../shared/TableInputReadOnlyCell.js"),ee=require("../shared/highlightCell.js");function B(e){return e&&e.__esModule?e:{default:e}}var c=B(N),h=B(Y);const te=h.default(d.Dropdown)`
  width: 100%;
  color: ${m.getColor("grey",140)};
`,re=h.default.button`
  color: ${m.getColor("grey",140)};
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
`,oe=h.default.div`
  display: inline-flex;
  gap: 10px;
  position: absolute;
  right: 10px;
  height: 39px;
  align-items: center;
`,le=ie=>{var b=ie,{value:e,onClear:t,clearLabel:r,openDropdownLabel:l,highlighted:p=!1,searchValue:_="",searchPlaceholder:$,onSearchChange:x,searchTitle:k,onNextPage:T,children:E,inError:w,closeTick:z=!1,bottomHelper:A,withSearch:P=!0,onOpenChange:i}=b,H=C(b,["value","onClear","clearLabel","openDropdownLabel","highlighted","searchValue","searchPlaceholder","onSearchChange","searchTitle","onNextPage","children","inError","closeTick","bottomHelper","withSearch","onOpenChange"]);const[n,M,V]=Q.useBooleanState(!1),u=()=>{M(),i==null||i(!0)},f=()=>{V(),i==null||i(!1)},g=c.default.createRef(),F=s=>{var j;(j=s.current)==null||j.focus()};c.default.useEffect(()=>{n&&F(g)},[n]),c.default.useEffect(()=>{n?f():u()},[z]),c.default.useEffect(()=>{f(),I("")},[e]);const I=s=>{x&&x(s)},{readOnly:G}=c.default.useContext(Z.TableInputContext);return G?o.jsx(O.TableInputReadOnlyCell,{title:e==null?void 0:e.toString(),$highlighted:p,$inError:w,children:e}):o.jsxs(te,v(D({},H),{children:[o.jsxs(re,{onClick:s=>{s.preventDefault(),u()},tabIndex:-1,$highlighted:p,title:e==null?void 0:e.toString(),$inError:w,children:[e," "]}),o.jsxs(oe,{children:[e&&!n&&o.jsx(R.IconButton,{icon:o.jsx(W.CloseIcon,{}),size:"small",title:r,ghost:"borderless",level:"tertiary",onClick:t}),o.jsx(R.IconButton,{icon:o.jsx(U.ArrowDownIcon,{}),size:"small",title:l,ghost:"borderless",level:"tertiary",onClick:u})]}),n&&o.jsxs(d.Dropdown.Overlay,{onClose:f,dropdownOpenerVisible:!0,horizontalPosition:"left",children:[P&&o.jsx(d.Dropdown.Header,{children:o.jsx(X.Search,{inputRef:g,onSearchChange:I,placeholder:$,searchValue:_,title:k})}),o.jsx(d.Dropdown.ItemCollection,{onNextPage:T,children:E}),A]})]}))};exports.TableInputSelect=le;
