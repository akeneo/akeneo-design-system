"use strict";var y=Object.defineProperty,$=Object.defineProperties;var S=Object.getOwnPropertyDescriptors;var a=Object.getOwnPropertySymbols;var u=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable;var c=(e,t,r)=>t in e?y(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,x=(e,t)=>{for(var r in t||(t={}))u.call(t,r)&&c(e,r,t[r]);if(a)for(var r of a(t))p.call(t,r)&&c(e,r,t[r]);return e},g=(e,t)=>$(e,S(t));var f=(e,t)=>{var r={};for(var o in e)u.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(e!=null&&a)for(var o of a(e))t.indexOf(o)<0&&p.call(e,o)&&(r[o]=e[o]);return r};var i=require("react/jsx-runtime"),h=require("styled-components"),n=require("../../theme/theme.js"),j=require("../../icons/SearchIcon.js");function w(e){return e&&e.__esModule?e:{default:e}}var l=w(h);const _=l.default.div`
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

  ${({sticky:e})=>e!==void 0&&h.css`
      position: sticky;
      top: ${e}px;
      z-index: 9;
    `}
`,q=l.default.div`
  display: flex;
  flex: 1;
  align-items: center;
`,z=l.default.input`
  border: none;
  flex: 1;
  margin-left: 6px;
  color: ${n.getColor("grey",140)};
  outline: none;

  ::placeholder {
    color: ${n.getColor("grey",120)};
  }
`,I=l.default.div`
  margin-left: 10px;
  border-left: 1px ${n.getColor("grey",100)} solid;
  padding-left: 10px;
  height: 24px;
  display: flex;
`,R=l.default.span`
  white-space: nowrap;
  color: ${n.getColor("brand",100)};
  margin-left: 10px;
  line-height: 16px;
  text-transform: none;
`,s=k=>{var d=k,{children:e,placeholder:t,title:r,searchValue:o,inputRef:b,onSearchChange:C}=d,v=f(d,["children","placeholder","title","searchValue","inputRef","onSearchChange"]);return i.jsxs(_,g(x({},v),{children:[i.jsxs(q,{children:[i.jsx(j.SearchIcon,{size:20}),i.jsx(z,{ref:b,title:r,placeholder:t,value:o,onChange:m=>C(m.target.value)})]}),e]}))};s.ResultCount=R;s.Separator=I;exports.Search=s;
