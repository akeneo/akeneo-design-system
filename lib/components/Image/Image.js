"use strict";var $=Object.defineProperty;var g=Object.getOwnPropertySymbols;var s=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable;var l=(e,r,t)=>r in e?$(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,u=(e,r)=>{for(var t in r||(r={}))s.call(r,t)&&l(e,t,r[t]);if(g)for(var t of g(r))d.call(r,t)&&l(e,t,r[t]);return e};var p=(e,r)=>{var t={};for(var a in e)s.call(e,a)&&r.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&g)for(var a of g(e))r.indexOf(a)<0&&d.call(e,a)&&(t[a]=e[a]);return t};var b=require("react/jsx-runtime"),m=require("react"),n=require("styled-components"),o=require("../../theme/theme.js"),v=require("../../theme/common.js");function x(e){return e&&e.__esModule?e:{default:e}}var C=x(m),h=x(n);const y='data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg"/>',w=h.default.img`
  border: 1px solid ${o.getColor("grey",80)};
  object-fit: ${({fit:e})=>e};
  box-sizing: border-box;

  ${({isStacked:e})=>e&&n.css`
      box-shadow: 1px -1px 0 0 ${o.getColor("white")}, 2px -2px 0 0 ${o.getColor("grey",80)},
        3px -3px 0 0 ${o.getColor("white")}, 4px -4px 0 0 ${o.getColor("grey",80)};
    `}

  ${({background:e,isLoading:r})=>e==="checkerboard"&&!r?n.css`
          background-image: linear-gradient(45deg, ${o.getColor("grey",60)} 25%, transparent 25%),
            linear-gradient(135deg, ${o.getColor("grey",60)} 25%, transparent 25%),
            linear-gradient(45deg, transparent 75%, ${o.getColor("grey",60)} 75%),
            linear-gradient(135deg, transparent 75%, ${o.getColor("grey",60)} 75%);
          background-size: 25px 25px; /* Must be a square */
          background-position: 0 0, 12.5px 0, 12.5px -12.5px, 0px 12.5px; /* Must be half of one side of the square */
        `:n.css`
          background: ${o.getColor(e)};
        `}

  ${({isLoading:e})=>e&&v.placeholderStyle}
`,_=C.default.forwardRef((q,f)=>{var i=q,{fit:e="cover",isStacked:r=!1,background:t="white",src:a}=i,c=p(i,["fit","isStacked","background","src"]);return b.jsx(w,u({isLoading:a===null,src:a!=null?a:y,ref:f,fit:e,isStacked:r,background:t},c))});exports.Image=_;
