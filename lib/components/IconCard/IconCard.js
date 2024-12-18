"use strict";var k=Object.defineProperty,j=Object.defineProperties;var _=Object.getOwnPropertyDescriptors;var a=Object.getOwnPropertySymbols;var s=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable;var c=(e,o,r)=>o in e?k(e,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[o]=r,u=(e,o)=>{for(var r in o||(o={}))s.call(o,r)&&c(e,r,o[r]);if(a)for(var r of a(o))g.call(o,r)&&c(e,r,o[r]);return e},x=(e,o)=>j(e,_(o));var f=(e,o)=>{var r={};for(var i in e)s.call(e,i)&&o.indexOf(i)<0&&(r[i]=e[i]);if(e!=null&&a)for(var i of a(e))o.indexOf(i)<0&&g.call(e,i)&&(r[i]=e[i]);return r};var l=require("react/jsx-runtime"),p=require("react"),v=require("styled-components"),t=require("../../theme/theme.js");function C(e){return e&&e.__esModule?e:{default:e}}var b=C(p),n=C(v);const z=n.default.div`
  min-height: 80px;
  border: 1px ${t.getColor("grey",60)} solid;
  box-sizing: border-box;
  display: -ms-flexbox;
  display: inline-flex;
  opacity: ${({disabled:e})=>e&&.5};
  cursor: ${({disabled:e,onClick:o})=>e?"not-allowed":o!==void 0?"pointer":"inherit"};
  background: ${t.getColor("white")}
}

:hover {
  border-color: ${({disabled:e})=>!e&&t.getColor("grey",100)};
  background: ${({disabled:e})=>!e&&t.getColor("grey",20)};
}

:active {
  outline: none;
  background: ${({disabled:e})=>!e&&t.getColor("grey",20)};
  border-color: ${({disabled:e})=>!e&&t.getColor("grey",80)};
}

:focus:not(:active) {
  box-shadow: 0 0 0 2px ${t.getColor("blue",40)};
  outline: none;
}
`,I=n.default.div`
  min-width: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px ${t.getColor("grey",60)} solid;
  margin: 10px 0;

  svg {
    color: ${t.getColor("grey",100)};
  }
`,q=n.default.div`
  margin: 15px;
`,m=v.css`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  box-orient: vertical;
  overflow: hidden;
  word-break: break-word;
`,R=n.default.div`
  color: ${t.getColor("grey",140)};
  font-size: ${t.getFontSize("big")};
  margin-bottom: 2px;

  ${m};
`,E=n.default.div`
  color: ${t.getColor("grey",100)};
  font-size: ${t.getFontSize("small")};

  ${m};
`,F=n.default.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
`,G=b.default.forwardRef((M,h)=>{var d=M,{icon:e,label:o,content:r,onClick:i,disabled:y=!1}=d,$=f(d,["icon","label","content","onClick","disabled"]);const w=p.isValidElement(e)&&b.default.cloneElement(e,{size:30});return l.jsxs(z,x(u({role:"button",ref:h,disabled:y,onClick:i},$),{children:[l.jsx(I,{children:w}),l.jsxs(q,{children:[l.jsx(R,{children:o}),r&&l.jsx(E,{children:r})]})]}))});exports.IconCard=G;exports.IconCardGrid=F;
