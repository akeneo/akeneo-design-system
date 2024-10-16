"use strict";var b=Object.defineProperty,_=Object.defineProperties;var k=Object.getOwnPropertyDescriptors;var i=Object.getOwnPropertySymbols;var g=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable;var f=(e,t,r)=>t in e?b(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,x=(e,t)=>{for(var r in t||(t={}))g.call(t,r)&&f(e,r,t[r]);if(i)for(var r of i(t))c.call(t,r)&&f(e,r,t[r]);return e},v=(e,t)=>_(e,k(t));var m=(e,t)=>{var r={};for(var a in e)g.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&i)for(var a of i(e))t.indexOf(a)<0&&c.call(e,a)&&(r[a]=e[a]);return r};var q=require("react/jsx-runtime"),h=require("react"),A=require("styled-components"),s=require("../../theme/theme.js");function w(e){return e&&e.__esModule?e:{default:e}}var p=w(h),T=w(A);const d=e=>e.replace(/_([a-z])/g,function(t){return t[1].toUpperCase()}),y=T.default.li`
  border: 1px solid;
  border-color: ${({tint:e})=>s.getColorAlternative(d(e),100)};
  color: ${({tint:e})=>s.getColorAlternative(d(e),120)};
  background-color: ${({tint:e})=>s.getColorAlternative(d(e),10)};
  height: 16px;
  line-height: 16px;
  padding: 0 6px;
  display: inline-block;
  border-radius: 2px;
  font-size: ${s.getFontSize("small")};
  text-transform: uppercase;
  overflow: hidden;
  max-width: 200px;
  white-space: nowrap;
  text-overflow: ellipsis;
`,R=T.default.ul`
  display: flex;
  flex-wrap: wrap;
  padding-inline-start: 0;
  margin-block-end: 0;
  margin-block-start: 0;
  list-style-type: none;
  gap: 10px;
`,$=p.default.forwardRef((a,r)=>{var u=a,{children:e}=u,t=m(u,["children"]);const C=l=>{let n="";return p.default.Children.map(l,o=>{typeof o=="string"&&(n+=o)}),n};return q.jsx(R,v(x({ref:r},t),{children:p.default.Children.map(e,l=>{var n,o;if(h.isValidElement(l)&&l.type===y)return p.default.cloneElement(l,{title:((n=l.props)==null?void 0:n.title)||C((o=l.props)==null?void 0:o.children)});throw new Error("A Tags element can only have Tag children")})}))});exports.Tag=y;exports.Tags=$;
