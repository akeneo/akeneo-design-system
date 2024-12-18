"use strict";var S=Object.defineProperty,T=Object.defineProperties;var D=Object.getOwnPropertyDescriptors;var i=Object.getOwnPropertySymbols;var $=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable;var y=(e,o,r)=>o in e?S(e,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[o]=r,u=(e,o)=>{for(var r in o||(o={}))$.call(o,r)&&y(e,r,o[r]);if(i)for(var r of i(o))p.call(o,r)&&y(e,r,o[r]);return e},f=(e,o)=>T(e,D(o));var v=(e,o)=>{var r={};for(var t in e)$.call(e,t)&&o.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&i)for(var t of i(e))o.indexOf(t)<0&&p.call(e,t)&&(r[t]=e[t]);return r};var c=require("react/jsx-runtime"),F=require("react"),s=require("styled-components"),a=require("../../theme/theme.js"),M=require("../../icons/CheckIcon.js"),K=require("../../icons/CheckPartialIcon.js"),m=require("../../hooks/useId.js"),L=require("../../hooks/useShortcut.js"),A=require("../../shared/key.js");function I(e){return e&&e.__esModule?e:{default:e}}var B=I(F),n=I(s);const E=s.keyframes`
  to {
    stroke-dashoffset: 0;
  }
`,G=s.keyframes`
  to {
    stroke-dashoffset: 27px;
  }
`,H=n.default.div`
  display: flex;
  line-height: 20px;
`,q=n.default(M.CheckIcon)`
  animation: ${G} 0.2s ease-in forwards;
  opacity: 0;
  stroke-dasharray: 27px;
  stroke-dashoffset: 0;
  transition-delay: 0.2s;
  transition: opacity 0.1s ease-out;
`,J=n.default.div`
  background-color: transparent;
  height: 20px;
  width: 20px;
  border: 1px solid ${a.getColor("blue100")};
  border-radius: 3px;
  overflow: hidden;
  background-color: ${a.getColor("grey20")};
  transition: background-color 0.2s ease-out;
  box-sizing: border-box;
  color: ${a.getColor("white")};
  flex-shrink: 0;

  ${e=>e.checked&&s.css`
      background-color: ${a.getColor("blue100")};
      border-color: ${a.getColor("blue100")};

      ${q} {
        animation-delay: 0.2s;
        animation: ${E} 0.2s ease-out forwards;
        stroke-dashoffset: 27px;
        opacity: 1;
        transition-delay: 0s;
      }
    `}

  ${e=>e.checked&&e.readOnly&&s.css`
      background-color: ${a.getColor("grey20")};
      border-color: ${a.getColor("grey40")};
      color: ${a.getColor("grey40")};
    `}

  ${e=>!e.checked&&e.readOnly&&s.css`
      background-color: ${a.getColor("grey20")};
      border-color: ${a.getColor("grey40")};
    `}
`,N=n.default.label`
  color: ${a.getColor("grey140")};
  font-weight: 400;
  font-size: ${a.getFontSize("big")};
  padding-left: 10px;

  ${e=>e.readOnly&&s.css`
      color: ${a.getColor("grey100")};
    `}
`,O=B.default.forwardRef((Q,z)=>{var h=Q,{checked:e=!1,onChange:o,readOnly:r=!1,children:t,title:_,"aria-label":w,tabIndex:k}=h,j=v(h,["checked","onChange","readOnly","children","title","aria-label","tabIndex"]);const b=m.useId("checkbox_"),g=m.useId("label_"),x=e===!0,C=e==="mixed",d=l=>{if(!(!o||r)){switch(e){case!0:o(!1,l);break;case"mixed":case!1:o(!0,l);break}l.preventDefault(),l.stopPropagation()}},P=L.useShortcut(A.Key.Space,d,z),R=t?{"aria-labelledby":g,id:b}:{};return c.jsxs(H,f(u({},j),{children:[c.jsx(J,f(u({checked:x||C,readOnly:r,title:_,role:"checkbox",ref:P,"aria-checked":x,tabIndex:k!==void 0?k:r?-1:0,onClick:d,"aria-label":w},R),{children:C?c.jsx(K.CheckPartialIcon,{size:18}):c.jsx(q,{size:18})})),t?c.jsx(N,{onClick:d,id:g,readOnly:r,htmlFor:b,children:t}):null]}))});exports.Checkbox=O;
