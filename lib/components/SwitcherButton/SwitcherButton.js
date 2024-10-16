"use strict";var C=Object.defineProperty,$=Object.defineProperties;var j=Object.getOwnPropertyDescriptors;var c=Object.getOwnPropertySymbols;var p=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable;var h=(e,r,t)=>r in e?C(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,x=(e,r)=>{for(var t in r||(r={}))p.call(r,t)&&h(e,t,r[t]);if(c)for(var t of c(r))g.call(r,t)&&h(e,t,r[t]);return e},m=(e,r)=>$(e,j(r));var w=(e,r)=>{var t={};for(var n in e)p.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&c)for(var n of c(e))r.indexOf(n)<0&&g.call(e,n)&&(t[n]=e[n]);return t};var o=require("react/jsx-runtime"),q=require("react"),u=require("styled-components"),I=require("../../icons/ArrowDownIcon.js"),_=require("../../icons/CloseIcon.js"),a=require("../../theme/theme.js"),A=require("../../theme/common.js"),S=require("../../hooks/useId.js");function k(e){return e&&e.__esModule?e:{default:e}}var i=k(u);const z=i.default.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  > *:nth-child(2) {
    opacity: 0;
    transition: opacity 0.2s;
  }
  &:hover > *:nth-child(2) {
    opacity: 1;
  }
`,B=i.default.button`
  ${A.CommonStyle};
  border: none;
  background: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: baseline;
  flex-direction: ${({$inline:e})=>e?"row":"column"};
`,L=i.default.label`
  cursor: pointer;
  white-space: nowrap;
  ${({$inline:e})=>e?u.css`
          margin-right: 3px;
          color: ${a.getColor("grey",140)};
        `:u.css`
          color: ${a.getColor("grey",100)};
          text-transform: uppercase;
          font-size: ${a.getFontSize("small")};
        `}
`,R=i.default.div`
  display: inline-flex;
  align-items: center;
`,F=i.default.span`
  color: ${({$inline:e})=>e?a.getColor("brand",100):a.getColor("grey",140)};
  margin-right: 5px;
  text-align: left;
`,V=i.default.button`
  border: none;
  background: none;
  width: 20px;
  height: 20px;
  cursor: pointer;
  padding: 0;
  flex-shrink: 0;
`,M=q.forwardRef((D,b)=>{var d=D,{label:e,children:r,onClick:t,deletable:n=!1,onDelete:l,inline:s=!0}=d,y=w(d,["label","children","onClick","deletable","onDelete","inline"]);const f=S.useId("button_"),v=()=>n&&(l==null?void 0:l());return o.jsxs(z,m(x({ref:b},y),{children:[o.jsxs(B,{type:"button",id:f,onClick:t,$inline:s,children:[o.jsx(L,{htmlFor:f,$inline:s,children:e?s?`${e}:`:e:""}),o.jsxs(R,{children:[o.jsx(F,{$inline:s,children:r}),o.jsx(I.ArrowDownIcon,{size:s?16:10})]})]}),n&&o.jsx(V,{onClick:v,children:o.jsx(_.CloseIcon,{size:10})})]}))});exports.SwitcherButton=M;
