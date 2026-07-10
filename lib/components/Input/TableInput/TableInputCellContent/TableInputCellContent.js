"use strict";var C=Object.defineProperty,v=Object.defineProperties;var c=Object.getOwnPropertyDescriptors;var i=Object.getOwnPropertySymbols;var o=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable;var a=(e,t,l)=>t in e?C(e,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[t]=l,u=(e,t)=>{for(var l in t||(t={}))o.call(t,l)&&a(e,l,t[l]);if(i)for(var l of i(t))s.call(t,l)&&a(e,l,t[l]);return e},h=(e,t)=>v(e,c(t));var d=(e,t)=>{var l={};for(var r in e)o.call(e,r)&&t.indexOf(r)<0&&(l[r]=e[r]);if(e!=null&&i)for(var r of i(e))t.indexOf(r)<0&&s.call(e,r)&&(l[r]=e[r]);return l};var b=require("react/jsx-runtime"),p=require("styled-components"),w=require("../../../../theme/theme.js"),x=require("../shared/highlightCell.js");function $(e){return e&&e.__esModule?e:{default:e}}var T=$(p);const _=T.default.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  ${({$rowTitle:e})=>e&&p.css`
      color: ${w.getColor("brand",100)};
      font-weight: bold;
    `}
  padding: 0 10px;
  height: 39px;
  margin-right: 1px;

  ${x.highlightCell};
`,g=m=>{var n=m,{children:e,rowTitle:t=!1,highlighted:l=!1,inError:r=!1}=n,f=d(n,["children","rowTitle","highlighted","inError"]);return b.jsx(_,h(u({},f),{$highlighted:l,$inError:r,$rowTitle:t,children:e}))};g.displayName="TableInput.CellContent";exports.TableInputCellContent=g;
