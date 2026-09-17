"use strict";var B=Object.defineProperty,S=Object.defineProperties;var C=Object.getOwnPropertyDescriptors;var i=Object.getOwnPropertySymbols;var f=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable;var p=(e,r,t)=>r in e?B(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,b=(e,r)=>{for(var t in r||(r={}))f.call(r,t)&&p(e,t,r[t]);if(i)for(var t of i(r))g.call(r,t)&&p(e,t,r[t]);return e},y=(e,r)=>S(e,C(r));var h=(e,r)=>{var t={};for(var a in e)f.call(e,a)&&r.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&i)for(var a of i(e))r.indexOf(a)<0&&g.call(e,a)&&(t[a]=e[a]);return t};var s=require("react/jsx-runtime"),n=require("react"),q=require("styled-components"),u=require("../../theme/theme.js"),x=require("../Link/Link.js");function _(e){return e&&e.__esModule?e:{default:e}}var c=_(q);const o=c.default(x.Link)`
  text-transform: uppercase;
  text-decoration: none;
  color: ${u.getColor("grey",120)};
`;o.displayName="Breadcrumb.Step";const j=c.default.nav`
  ${o}:last-child {
    color: ${u.getColor("grey",100)};
    cursor: initial;
  }
`,E=c.default.span`
  margin: 0 0.5rem;
  color: ${u.getColor("grey",120)};
`,v=t=>{var a=t,{children:e}=a,r=h(a,["children"]);const d=n.Children.toArray(e).filter(n.isValidElement);return s.jsx(j,y(b({"aria-label":"Breadcrumb"},r),{children:d.map((l,m)=>{if(!(n.isValidElement(l)&&l.type===o))throw new Error("Breadcrumb only accepts `Breacrumb.Step` elements as children");return d.length-1===m?n.cloneElement(l,{"aria-current":"page",disabled:!0}):s.jsxs(n.Fragment,{children:[l,s.jsx(E,{"aria-hidden":!0,children:"/"})]},m)})}))};v.Step=o;exports.Breadcrumb=v;
