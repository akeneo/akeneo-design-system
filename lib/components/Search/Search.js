"use strict";var $=Object.defineProperty,S=Object.defineProperties;var j=Object.getOwnPropertyDescriptors;var a=Object.getOwnPropertySymbols;var u=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable;var c=(e,t,r)=>t in e?$(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,x=(e,t)=>{for(var r in t||(t={}))u.call(t,r)&&c(e,r,t[r]);if(a)for(var r of a(t))p.call(t,r)&&c(e,r,t[r]);return e},g=(e,t)=>S(e,j(t));var f=(e,t)=>{var r={};for(var o in e)u.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(e!=null&&a)for(var o of a(e))t.indexOf(o)<0&&p.call(e,o)&&(r[o]=e[o]);return r};var i=require("react/jsx-runtime"),h=require("styled-components"),n=require("../../theme/theme.js"),w=require("../../icons/SearchIcon.js");function _(e){return e&&e.__esModule?e:{default:e}}var l=_(h);const q=l.default.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${n.getColor("grey",100)};
  background: ${n.getColor("white")};
  height: 44px;
  box-sizing: border-box;
  gap: 10px;

  &:focus-within {
    border-bottom: 1px solid ${n.getColor("brand",100)};
  }

  ${({$sticky:e})=>e!==void 0&&h.css`
      position: sticky;
      top: ${e}px;
      z-index: 9;
    `}
`,z=l.default.div`
  display: flex;
  flex: 1;
  align-items: center;
`,I=l.default.input`
  border: none;
  flex: 1;
  margin-left: 6px;
  color: ${n.getColor("grey",140)};
  outline: none;

  ::placeholder {
    color: ${n.getColor("grey",120)};
  }
`,R=l.default.div`
  margin-left: 10px;
  border-left: 1px ${n.getColor("grey",100)} solid;
  padding-left: 10px;
  height: 24px;
  display: flex;
`,k=l.default.span`
  white-space: nowrap;
  color: ${n.getColor("brand",100)};
  margin-left: 10px;
  line-height: 16px;
  text-transform: none;
`,s=D=>{var d=D,{children:e,placeholder:t,title:r,searchValue:o,inputRef:b,onSearchChange:C,sticky:v}=d,y=f(d,["children","placeholder","title","searchValue","inputRef","onSearchChange","sticky"]);return i.jsxs(q,g(x({},y),{$sticky:v,children:[i.jsxs(z,{children:[i.jsx(w.SearchIcon,{size:20}),i.jsx(I,{ref:b,title:r,placeholder:t,value:o,onChange:m=>C(m.target.value)})]}),e]}))};s.ResultCount=k;s.Separator=R;exports.Search=s;
