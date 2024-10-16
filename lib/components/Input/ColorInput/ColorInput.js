"use strict";var $=Object.defineProperty;var a=Object.getOwnPropertySymbols;var p=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable;var u=(o,e,r)=>e in o?$(o,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):o[e]=r,x=(o,e)=>{for(var r in e||(e={}))p.call(e,r)&&u(o,r,e[r]);if(a)for(var r of a(e))g.call(e,r)&&u(o,r,e[r]);return o};var h=(o,e)=>{var r={};for(var t in o)p.call(o,t)&&e.indexOf(t)<0&&(r[t]=o[t]);if(o!=null&&a)for(var t of a(o))e.indexOf(t)<0&&g.call(o,t)&&(r[t]=o[t]);return r};var i=require("react/jsx-runtime"),C=require("react"),b=require("styled-components"),k=require("../../../icons/DangerIcon.js"),q=require("../../../icons/LockIcon.js"),n=require("../../../theme/theme.js"),d=require("./Color.js");function v(o){return o&&o.__esModule?o:{default:o}}var l=v(b);const y=l.default.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px;
  border: 1px solid ${({invalid:o})=>o?n.getColor("red",100):n.getColor("grey",80)};
  border-radius: 2px;
  height: 74px;
  gap: 10px;
  outline-style: none;
  box-sizing: border-box;
  background: ${({readOnly:o})=>o?n.getColor("grey",20):n.getColor("white")};
  cursor: ${({readOnly:o})=>o?"not-allowed":"auto"};
  overflow: hidden;
  ${({readOnly:o})=>!o&&b.css`
      &:focus-within {
        box-shadow: 0 0 0 2px ${n.getColor("blue",40)};
      }
    `}
`,j=l.default.input`
  width: 47px;
  height: 47px;
  border: none;
  padding: 0;
  ::-moz-color-swatch-wrapper {
    padding: 0;
  }
  ::-webkit-color-swatch-wrapper {
    padding: 0;
  }
  ::-webkit-color-swatch {
    border: none;
  }
  ::-moz-color-swatch {
    border: none;
  }
`,m=l.default.input`
  border: none;
  flex: 1;
  outline: none;
  color: ${({readOnly:o})=>o?n.getColor("grey",100):n.getColor("grey",140)};
  background: transparent;
  cursor: ${({readOnly:o})=>o?"not-allowed":"auto"};
  height: 100%;

  &::placeholder {
    opacity: 1;
    color: ${n.getColor("grey",100)};
  }
`,z=l.default(q.LockIcon)`
  margin-left: 4px;
`,_=l.default(k.DangerIcon)`
  padding: 0 15px 0 16px;
  box-sizing: content-box;
`,R=C.forwardRef((D,w)=>{var s=D,{invalid:o,onChange:e,value:r,readOnly:t}=s,f=h(s,["invalid","onChange","value","readOnly"]);const c=C.useCallback(I=>{!t&&e&&e(I.currentTarget.value)},[t,e]);return r.startsWith("#")||(r=`#${r}`),i.jsxs(y,{invalid:o||!d.isValidColor(r),readOnly:t,children:[d.isValidColor(r)?i.jsx(j,{type:"color",value:d.convertColorToLongHexColor(r),onChange:c,disabled:t}):i.jsx(_,{role:"alert",size:16}),i.jsx(m,x({ref:w,value:r,onChange:c,type:"text",readOnly:t,disabled:t,"aria-invalid":o||!d.isValidColor(r)},f)),t&&i.jsx(z,{size:16})]})});exports.ColorInput=R;
