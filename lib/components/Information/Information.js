"use strict";var y=Object.defineProperty,_=Object.defineProperties;var $=Object.getOwnPropertyDescriptors;var l=Object.getOwnPropertySymbols;var g=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable;var s=(e,t,r)=>t in e?y(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,f=(e,t)=>{for(var r in t||(t={}))g.call(t,r)&&s(e,r,t[r]);if(l)for(var r of l(t))c.call(t,r)&&s(e,r,t[r]);return e},u=(e,t)=>_(e,$(t));var p=(e,t)=>{var r={};for(var i in e)g.call(e,i)&&t.indexOf(i)<0&&(r[i]=e[i]);if(e!=null&&l)for(var i of l(e))t.indexOf(i)<0&&c.call(e,i)&&(r[i]=e[i]);return r};var a=require("react/jsx-runtime"),h=require("react"),b=require("styled-components"),n=require("../../theme/theme.js");function m(e){return e&&e.__esModule?e:{default:e}}var x=m(h),o=m(b);const j=o.default.div`
  align-items: stretch;
  display: flex;
  font-weight: 400;
  padding-right: 15px;
  color: ${n.getColor("grey120")};
  min-height: 100px;
  background-color: ${n.getColor("brand20")};
`,q=o.default.span`
  min-height: 80px;
  display: flex;
  align-items: center;
  padding: 10px 20px;
  margin: 10px 20px 10px 0px;
  border-right: 1px solid ${n.getColor("grey80")};
`,z=o.default.div`
  color: ${n.getColor("grey140")};
  font-size: ${n.getFontSize("bigger")};
  font-weight: 700;
`,I=o.default.div`
  padding: 20px 0px;
`,R=x.default.forwardRef((H,v)=>{var d=H,{illustration:e,title:t,children:r}=d,i=p(d,["illustration","title","children"]);const C=h.isValidElement(e)&&x.default.cloneElement(e,{size:80});return a.jsxs(j,u(f({ref:v},i),{children:[a.jsx(q,{children:C}),a.jsxs(I,{children:[a.jsx(z,{children:t}),r]})]}))}),w=o.default.span`
  color: ${n.getColor("brand",100)};
`;exports.HighlightTitle=w;exports.Information=R;
