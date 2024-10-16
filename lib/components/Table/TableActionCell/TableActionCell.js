"use strict";var b=Object.defineProperty,m=Object.defineProperties;var q=Object.getOwnPropertyDescriptors;var a=Object.getOwnPropertySymbols;var p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable;var d=(e,t,r)=>t in e?b(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,c=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&d(e,r,t[r]);if(a)for(var r of a(t))s.call(t,r)&&d(e,r,t[r]);return e},f=(e,t)=>m(e,q(t));var C=(e,t)=>{var r={};for(var o in e)p.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(e!=null&&a)for(var o of a(e))t.indexOf(o)<0&&s.call(e,o)&&(r[o]=e[o]);return r};var v=require("react/jsx-runtime"),A=require("styled-components"),B=require("react"),R=require("../../Button/Button.js"),T=require("../../IconButton/IconButton.js"),x=require("../../../theme/theme.js");function y(e){return e&&e.__esModule?e:{default:e}}var g=y(A),l=y(B);const j=g.default.td`
  color: ${x.getColor("grey",140)};
  border-bottom: 1px solid ${x.getColor("grey",60)};
  padding: 0 10px;
  width: 50px;
`,k=g.default.div`
  opacity: 0;
  display: flex;
  gap: 10px;
`,I=l.default.forwardRef((o,r)=>{var u=o,{children:e}=u,t=C(u,["children"]);const _=l.default.Children.map(e,n=>l.default.isValidElement(n)&&(n.type===R.Button||n.type===T.IconButton)?l.default.cloneElement(n,{onClick:i=>{i.stopPropagation(),n.props.onClick&&n.props.onClick(i)}}):n);return v.jsx(j,f(c({ref:r},t),{children:v.jsx(k,{children:_})}))});exports.TableActionCell=I;
