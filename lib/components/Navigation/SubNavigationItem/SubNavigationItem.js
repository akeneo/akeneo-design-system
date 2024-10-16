"use strict";var q=Object.defineProperty,C=Object.defineProperties;var R=Object.getOwnPropertyDescriptors;var i=Object.getOwnPropertySymbols;var g=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable;var s=(e,r,t)=>r in e?q(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,p=(e,r)=>{for(var t in r||(r={}))g.call(r,t)&&s(e,t,r[t]);if(i)for(var t of i(r))h.call(r,t)&&s(e,t,r[t]);return e},v=(e,r)=>C(e,R(r));var x=(e,r)=>{var t={};for(var o in e)g.call(e,o)&&r.indexOf(o)<0&&(t[o]=e[o]);if(e!=null&&i)for(var o of i(e))r.indexOf(o)<0&&h.call(e,o)&&(t[o]=e[o]);return t};var c=require("react/jsx-runtime"),T=require("react"),j=require("styled-components"),a=require("../../../theme/theme.js"),z=require("../../Tags/Tags.js");function w(e){return e&&e.__esModule?e:{default:e}}var f=w(T),b=w(j);const S=b.default.a`
  box-sizing: border-box;
  cursor: ${({disabled:e})=>e?"not-allowed":"pointer"};
  color: ${({active:e,disabled:r})=>r?a.getColor("grey",100):e?a.getColor("brand",100):a.getColor("grey",140)};
  display: flex;
  height: 38px;
  margin: 0;
  outline: none;
  text-decoration: none;
  overflow: hidden;
  line-height: 38px;

  :hover {
    color: ${({disabled:e})=>!e&&a.getColor("brand",100)};
  }
  :focus:not(:active) {
    box-shadow: 0 0 0 2px ${a.getColor("blue",40)};
  }
`,D=b.default.div`
  flex-shrink: 0;
  margin-right: ${({hasTag:e})=>e?"10px":"0px"};
  max-width: ${({hasTag:e})=>e?"84%":"100%"};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: ${a.getFontSize("big")};
`,E=f.default.forwardRef((I,y)=>{var d=I,{children:e,href:r,disabled:t,active:o,onClick:u}=d,m=x(d,["children","href","disabled","active","onClick"]);const _=n=>{if(t){n.preventDefault();return}u==null||u(n)};let l=null;const $=f.default.Children.map(e,n=>{if(f.default.isValidElement(n)&&n.type===z.Tag){if(l===null)return l=n,null;throw new Error("You can only provide one component of type Tag.")}return n});return c.jsxs(S,v(p({ref:y,href:t?void 0:r,active:o,disabled:t,"aria-disabled":t,role:"link",onClick:_},m),{children:[c.jsx(D,{hasTag:!!l,children:$}),l]}))});exports.SubNavigationItem=E;
