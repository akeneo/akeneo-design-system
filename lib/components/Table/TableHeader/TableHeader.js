"use strict";var j=Object.defineProperty,_=Object.defineProperties;var k=Object.getOwnPropertyDescriptors;var d=Object.getOwnPropertySymbols;var u=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable;var s=(e,t,r)=>t in e?j(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,x=(e,t)=>{for(var r in t||(t={}))u.call(t,r)&&s(e,r,t[r]);if(d)for(var r of d(t))c.call(t,r)&&s(e,r,t[r]);return e},g=(e,t)=>_(e,k(t));var h=(e,t)=>{var r={};for(var o in e)u.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(e!=null&&d)for(var o of d(e))t.indexOf(o)<0&&c.call(e,o)&&(r[o]=e[o]);return r};var l=require("react/jsx-runtime"),m=require("react"),f=require("styled-components"),a=require("../../../theme/theme.js"),R=require("../TableContext.js");function C(e){return e&&e.__esModule?e:{default:e}}var p=C(m),n=C(f);const q=n.default.thead`
  ${({sticky:e})=>e!==void 0&&f.css`
      th {
        position: sticky;
        top: ${e}px;
        z-index: 1;
        background-color: ${a.getColor("white")};
      }
    `}
`,y=n.default.th`
  width: 40px;
`,H=n.default.th`
  width: 20px;
  background: linear-gradient(to top, ${a.getColor("grey",120)} 1px, ${a.getColor("white")} 0px);
`,T=n.default.th`
  width: 20px;
  background: linear-gradient(to top, ${a.getColor("grey",120)} 1px, ${a.getColor("white")} 0px);
`,D=n.default.th`
  width: 40px;
  background: linear-gradient(to top, ${a.getColor("grey",120)} 1px, ${a.getColor("white")} 0px);
`,L=p.default.forwardRef((S,o)=>{var i=S,{children:e,sticky:t}=i,r=h(i,["children","sticky"]);const{isSelectable:b,isDragAndDroppable:w,hasWarningRows:$,hasLockedRows:v}=p.default.useContext(R.TableContext);return l.jsx(q,{sticky:t,ref:o,children:l.jsxs("tr",g(x({},r),{children:[b&&l.jsx(y,{}),$&&l.jsx(H,{}),w&&l.jsx(D,{}),e,v&&l.jsx(T,{})]}))})});exports.TableHeader=L;
