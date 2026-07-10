"use strict";var $=Object.defineProperty,q=Object.defineProperties;var T=Object.getOwnPropertyDescriptors;var t=Object.getOwnPropertySymbols;var c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable;var s=(e,r,o)=>r in e?$(e,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[r]=o,w=(e,r)=>{for(var o in r||(r={}))c.call(r,o)&&s(e,o,r[o]);if(t)for(var o of t(r))p.call(r,o)&&s(e,o,r[o]);return e},u=(e,r)=>q(e,T(r));var v=(e,r)=>{var o={};for(var a in e)c.call(e,a)&&r.indexOf(a)<0&&(o[a]=e[a]);if(e!=null&&t)for(var a of t(e))r.indexOf(a)<0&&p.call(e,a)&&(o[a]=e[a]);return o};var l=require("react/jsx-runtime"),f=require("react"),d=require("styled-components"),_=require("../../../icons/ArrowSimpleDownIcon.js"),k=require("../../../icons/ArrowSimpleUpIcon.js"),n=require("../../../theme/theme.js"),j=require("../TableContext.js");function x(e){return e&&e.__esModule?e:{default:e}}var y=x(f),g=x(d);const A=g.default.th`
  background: linear-gradient(to top, ${n.getColor("grey",120)} 1px, ${n.getColor("white")} 0px);
  height: 44px;
  text-align: left;
  color: ${({$isSorted:e})=>n.getColor(e?"brand":"grey",100)};
  font-weight: normal;
  box-sizing: content-box;

  ${({$isSortable:e})=>e&&d.css`
      cursor: pointer;
    `};
`,H=g.default.span`
  color: ${n.getColor("grey",140)};
  padding: 0 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  + svg {
    vertical-align: middle;
  }

  ${e=>e.$wrapText&&d.css`
      max-width: 40ch;
      white-space: normal;
      overflow: visible;
      overflow-wrap: break-word;
      text-overflow: clip;
    `}
`,I=y.default.forwardRef((R,C)=>{var i=R,{isSortable:e=!1,onDirectionChange:r,sortDirection:o,children:a}=i,h=v(i,["isSortable","onDirectionChange","sortDirection","children"]);const{wrapText:b}=f.useContext(j.TableContext);if(e&&(r===void 0||o===void 0))throw Error("Sortable header should provide onDirectionChange and direction props");if(!e&&(r!==void 0||o!==void 0))throw Error("Not sortable header does not provide onDirectionChange and direction props");const m=()=>{switch(o){case"ascending":r&&r("descending");break;case"descending":case"none":r&&r("ascending");break}};return l.jsxs(A,u(w({$isSorted:o!=="none",$isSortable:e,"aria-sort":o,onClick:m},h),{children:[l.jsx(H,{ref:C,$wrapText:b,children:a}),e&&(o==="descending"||o==="none"?l.jsx(_.ArrowSimpleDownIcon,{size:14}):l.jsx(k.ArrowSimpleUpIcon,{size:14}))]}))});exports.TableHeaderCell=I;
