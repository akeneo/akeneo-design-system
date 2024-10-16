"use strict";var g=Object.defineProperty,v=Object.defineProperties;var c=Object.getOwnPropertyDescriptors;var n=Object.getOwnPropertySymbols;var o=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable;var i=(e,t,l)=>t in e?g(e,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[t]=l,u=(e,t)=>{for(var l in t||(t={}))o.call(t,l)&&i(e,l,t[l]);if(n)for(var l of n(t))s.call(t,l)&&i(e,l,t[l]);return e},d=(e,t)=>v(e,c(t));var h=(e,t)=>{var l={};for(var r in e)o.call(e,r)&&t.indexOf(r)<0&&(l[r]=e[r]);if(e!=null&&n)for(var r of n(e))t.indexOf(r)<0&&s.call(e,r)&&(l[r]=e[r]);return l};var b=require("react/jsx-runtime"),p=require("styled-components"),x=require("../../../../theme/theme.js"),w=require("../shared/highlightCell.js");function _(e){return e&&e.__esModule?e:{default:e}}var m=_(p);const q=m.default.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  ${({rowTitle:e})=>e&&p.css`
      color: ${x.getColor("brand",100)};
      font-weight: bold;
    `}
  padding: 0 10px;
  height: 39px;
  margin-right: 1px;

  ${w.highlightCell};
`,f=I=>{var a=I,{children:e,rowTitle:t=!1,highlighted:l=!1,inError:r=!1}=a,C=h(a,["children","rowTitle","highlighted","inError"]);return b.jsx(q,d(u({},C),{highlighted:l,inError:r,rowTitle:t,children:e}))};f.displayName="TableInput.CellContent";exports.TableInputCellContent=f;
