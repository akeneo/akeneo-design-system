"use strict";var B=Object.defineProperty,S=Object.defineProperties;var q=Object.getOwnPropertyDescriptors;var l=Object.getOwnPropertySymbols;var p=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable;var m=(e,r,t)=>r in e?B(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,b=(e,r)=>{for(var t in r||(r={}))p.call(r,t)&&m(e,t,r[t]);if(l)for(var t of l(r))f.call(r,t)&&m(e,t,r[t]);return e},g=(e,r)=>S(e,q(r));var h=(e,r)=>{var t={};for(var a in e)p.call(e,a)&&r.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&l)for(var a of l(e))r.indexOf(a)<0&&f.call(e,a)&&(t[a]=e[a]);return t};var u=require("react/jsx-runtime"),n=require("react"),x=require("styled-components"),v=require("../../theme/theme.js"),C=require("../Link/Link.js");function _(e){return e&&e.__esModule?e:{default:e}}var o=_(x);const s=o.default(C.Link)`
  text-transform: uppercase;
  text-decoration: none;
  color: ${v.getColor("grey",120)};
`;s.displayName="Breadcrumb.Step";const j=o.default.nav`
  ${s}:last-child {
    color: ${v.getColor("grey",100)};
    cursor: initial;
  }
`,E=o.default.span`
  margin: 0 0.5rem;
`,y=t=>{var a=t,{children:e}=a,r=h(a,["children"]);const c=n.Children.toArray(e).filter(n.isValidElement);return u.jsx(j,g(b({"aria-label":"Breadcrumb"},r),{children:c.map((i,d)=>{if(!(n.isValidElement(i)&&i.type===s))throw new Error("Breadcrumb only accepts `Breacrumb.Step` elements as children");return c.length-1===d?n.cloneElement(i,{"aria-current":"page",disabled:!0}):u.jsxs(n.Fragment,{children:[i,u.jsx(E,{"aria-hidden":!0,children:"/"})]},d)})}))};y.Step=s;exports.Breadcrumb=y;
