"use strict";var b=Object.defineProperty,C=Object.defineProperties;var k=Object.getOwnPropertyDescriptors;var i=Object.getOwnPropertySymbols;var c=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable;var g=(e,r,t)=>r in e?b(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,_=(e,r)=>{for(var t in r||(r={}))c.call(r,t)&&g(e,t,r[t]);if(i)for(var t of i(r))f.call(r,t)&&g(e,t,r[t]);return e},v=(e,r)=>C(e,k(r));var x=(e,r)=>{var t={};for(var a in e)c.call(e,a)&&r.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&i)for(var a of i(e))r.indexOf(a)<0&&f.call(e,a)&&(t[a]=e[a]);return t};var q=require("react/jsx-runtime"),h=require("react"),A=require("styled-components"),s=require("../../theme/theme.js");function m(e){return e&&e.__esModule?e:{default:e}}var p=m(h),y=m(A);const R=["grey","green","blue","dark_blue","purple","dark_purple","yellow","red","dark_cyan","forest_green","olive_green","hot_pink","coral_red","orange","chocolate"],d=e=>e.replace(/_([a-z])/g,function(r){return r[1].toUpperCase()}),T=y.default.li`
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
`,$=y.default.ul`
  display: flex;
  flex-wrap: wrap;
  padding-inline-start: 0;
  margin-block-end: 0;
  margin-block-start: 0;
  list-style-type: none;
  gap: 10px;
`,z=p.default.forwardRef((a,t)=>{var u=a,{children:e}=u,r=x(u,["children"]);const w=l=>{let n="";return p.default.Children.map(l,o=>{typeof o=="string"&&(n+=o)}),n};return q.jsx($,v(_({ref:t},r),{children:p.default.Children.map(e,l=>{var n,o;if(h.isValidElement(l)&&l.type===T)return p.default.cloneElement(l,{title:((n=l.props)==null?void 0:n.title)||w((o=l.props)==null?void 0:o.children)});throw new Error("A Tags element can only have Tag children")})}))});exports.Tag=T;exports.Tags=z;exports.tagTints=R;
