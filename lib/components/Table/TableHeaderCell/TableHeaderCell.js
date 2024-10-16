"use strict";var b=Object.defineProperty,_=Object.defineProperties;var q=Object.getOwnPropertyDescriptors;var d=Object.getOwnPropertySymbols;var i=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable;var s=(e,r,o)=>r in e?b(e,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[r]=o,u=(e,r)=>{for(var o in r||(r={}))i.call(r,o)&&s(e,o,r[o]);if(d)for(var o of d(r))c.call(r,o)&&s(e,o,r[o]);return e},p=(e,r)=>_(e,q(r));var f=(e,r)=>{var o={};for(var a in e)i.call(e,a)&&r.indexOf(a)<0&&(o[a]=e[a]);if(e!=null&&d)for(var a of d(e))r.indexOf(a)<0&&c.call(e,a)&&(o[a]=e[a]);return o};var n=require("react/jsx-runtime"),j=require("react"),g=require("styled-components"),l=require("../../../theme/theme.js"),k=require("../../../icons/ArrowDownIcon.js"),y=require("../../../icons/ArrowUpIcon.js");function v(e){return e&&e.__esModule?e:{default:e}}var $=v(j),w=v(g);const m=w.default.th`
  background: linear-gradient(to top, ${l.getColor("grey",120)} 1px, ${l.getColor("white")} 0px);
  height: 44px;
  text-align: left;
  color: ${({isSorted:e})=>l.getColor(e?"brand":"grey",100)};
  font-weight: normal;
  box-sizing: content-box;

  ${({isSortable:e})=>e&&g.css`
      cursor: pointer;
    `};
`,A=w.default.span`
  color: ${l.getColor("grey",140)};
  padding: 0 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  + svg {
    vertical-align: middle;
  }
`,H=$.default.forwardRef((I,x)=>{var t=I,{isSortable:e=!1,onDirectionChange:r,sortDirection:o,children:a}=t,h=f(t,["isSortable","onDirectionChange","sortDirection","children"]);if(e&&(r===void 0||o===void 0))throw Error("Sortable header should provide onDirectionChange and direction props");if(!e&&(r!==void 0||o!==void 0))throw Error("Not sortable header does not provide onDirectionChange and direction props");const C=()=>{switch(o){case"ascending":r&&r("descending");break;case"descending":case"none":r&&r("ascending");break}};return n.jsxs(m,p(u({isSorted:o!=="none",isSortable:e,"aria-sort":o,onClick:C},h),{children:[n.jsx(A,{ref:x,children:a}),e&&(o==="descending"||o==="none"?n.jsx(k.ArrowDownIcon,{size:14}):n.jsx(y.ArrowUpIcon,{size:14}))]}))});exports.TableHeaderCell=H;
