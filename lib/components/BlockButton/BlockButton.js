"use strict";var _=Object.defineProperty,q=Object.defineProperties;var B=Object.getOwnPropertyDescriptors;var s=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var g=(e,r,t)=>r in e?_(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,h=(e,r)=>{for(var t in r||(r={}))x.call(r,t)&&g(e,t,r[t]);if(s)for(var t of s(r))y.call(r,t)&&g(e,t,r[t]);return e},m=(e,r)=>q(e,B(r));var C=(e,r)=>{var t={};for(var o in e)x.call(e,o)&&r.indexOf(o)<0&&(t[o]=e[o]);if(e!=null&&s)for(var o of s(e))r.indexOf(o)<0&&y.call(e,o)&&(t[o]=e[o]);return t};var a=require("react/jsx-runtime"),i=require("react"),d=require("styled-components"),n=require("../../theme/theme.js");function E(e){return e&&e.__esModule?e:{default:e}}var u=E(d);const k=({disabled:e})=>e?d.css`
      border-color: ${n.getColor("grey",100)};
      color: ${n.getColor("grey",100)};
    `:d.css`
    background-color: ${n.getColor("white")};
    border-color: ${n.getColor("blue",100)};
    color: ${n.getColor("blue",100)};
  `,R=u.default.button`
  box-sizing: border-box;
  width: 100%;
  padding: 14px 20px;
  border-style: solid;
  border-width: 1px;
  border-radius: 2px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: inherit;
  font-size: ${n.getFontSize("default")};
  font-weight: 400;
  outline-style: none;
  cursor: ${({disabled:e})=>e?"not-allowed":"pointer"};
  white-space: nowrap;
  text-transform: uppercase;

  &:focus {
    box-shadow: 0 0 0 2px ${n.getColor("blue",40)};
  }

  ${k}
`,A=u.default.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,S=u.default.div`
  display: flex;
  align-items: center;
`,V=i.forwardRef((D,z)=>{var f=D,{icon:e,disabled:r=!1,ariaDescribedBy:t,ariaLabel:o,ariaLabelledBy:w,children:$,onClick:c}=f,v=C(f,["icon","disabled","ariaDescribedBy","ariaLabel","ariaLabelledBy","children","onClick"]);var p;const j=l=>{r||c===void 0||c(l)};return a.jsxs(R,m(h({disabled:r,"aria-describedby":t,"aria-disabled":r,"aria-label":o,"aria-labelledby":w,ref:z,role:"button",onClick:j},v),{children:[a.jsx(A,{children:i.Children.map($,l=>{var b;return i.isValidElement(l)?i.cloneElement(l,{size:(b=l.props.size)!=null?b:18}):l})}),a.jsx(S,{children:i.isValidElement(e)&&i.cloneElement(e,{size:(p=e.props.size)!=null?p:18})})]}))});exports.BlockButton=V;
