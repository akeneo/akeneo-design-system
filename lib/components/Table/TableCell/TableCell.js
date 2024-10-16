"use strict";var x=Object.defineProperty,C=Object.defineProperties;var b=Object.getOwnPropertyDescriptors;var i=Object.getOwnPropertySymbols;var s=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable;var u=(e,t,r)=>t in e?x(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,c=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&u(e,r,t[r]);if(i)for(var r of i(t))f.call(t,r)&&u(e,r,t[r]);return e},m=(e,t)=>C(e,b(t));var p=(e,t)=>{var r={};for(var l in e)s.call(e,l)&&t.indexOf(l)<0&&(r[l]=e[l]);if(e!=null&&i)for(var l of i(e))t.indexOf(l)<0&&f.call(e,l)&&(r[l]=e[l]);return r};var g=require("react/jsx-runtime"),y=require("react"),v=require("styled-components"),o=require("../../../theme/theme.js"),_=require("../../Image/Image.js");function h(e){return e&&e.__esModule?e:{default:e}}var n=h(y),w=h(v);const q=w.default.td`
  color: ${o.getColor("grey",140)};
  border-bottom: 1px solid ${o.getColor("grey",60)};
  padding: 15px 10px;
  max-width: 15vw;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  min-width: 0;

  ${e=>e.rowTitle&&v.css`
      color: ${o.getColor("brand",100)};
      font-style: italic;
    `}
`,T=w.default.div`
  display: flex;
  align-items: center;
  min-height: 24px;
`,R=n.default.forwardRef(($,l)=>{var d=$,{children:e,rowTitle:t=!1}=d,r=p(d,["children","rowTitle"]);return g.jsx(q,m(c({ref:l,rowTitle:t},r),{children:g.jsx(T,{children:n.default.Children.map(e,a=>!n.default.isValidElement(a)||a.type!==_.Image?a:n.default.cloneElement(a,{width:44,height:44}))})}))});exports.TableCell=R;
