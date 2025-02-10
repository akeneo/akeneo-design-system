"use strict";var A=Object.defineProperty,S=Object.defineProperties;var R=Object.getOwnPropertyDescriptors;var u=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable;var L=(o,e,r)=>e in o?A(o,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):o[e]=r,d=(o,e)=>{for(var r in e||(e={}))k.call(e,r)&&L(o,r,e[r]);if(u)for(var r of u(e))z.call(e,r)&&L(o,r,e[r]);return o},c=(o,e)=>S(o,R(e));var _=(o,e)=>{var r={};for(var n in o)k.call(o,n)&&e.indexOf(n)<0&&(r[n]=o[n]);if(o!=null&&u)for(var n of u(o))e.indexOf(n)<0&&z.call(o,n)&&(r[n]=o[n]);return r};var q=require("react/jsx-runtime"),a=require("react"),s=require("styled-components"),t=require("../../theme/theme.js");function V(o){return o&&o.__esModule?o:{default:o}}var E=V(s);const j=({$level:o,$ghost:e,$active:r,disabled:n})=>e?s.css`
      color: ${t.getColorForLevel(o,n?80:r?140:120)};
      background-color: ${t.getColor("white")};
      border-color: ${t.getColorForLevel(o,n?60:r?140:100)};

      &:hover:not([disabled]) {
        color: ${t.getColorForLevel(o,140)};
        background-color: ${t.getColorForLevel(o,20)};
        border-color: ${t.getColorForLevel(o,120)};
      }

      &:active:not([disabled]) {
        color: ${t.getColorForLevel(o,140)};
        border-color: ${t.getColorForLevel(o,140)};
      }
    `:s.css`
    color: ${t.getColor("white")};
    background-color: ${t.getColorForLevel(o,n?40:r?140:100)};
    border-color: ${t.getColorForLevel(o,n?40:r?140:100)};

    &:hover:not([disabled]) {
      background-color: ${t.getColorForLevel(o,120)};
      border-color: ${t.getColorForLevel(o,120)};
    }

    &:active:not([disabled]) {
      background-color: ${t.getColorForLevel(o,140)};
      border-color: ${t.getColorForLevel(o,140)};
    }
  `,B=E.default.button`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  border-width: 1px;
  font-size: ${t.getFontSize("default")};
  font-weight: 400;
  text-transform: uppercase;
  border-radius: 16px;
  border-style: solid;
  padding: ${({$size:o})=>o==="small"?"0 10px":"0 15px"};
  height: ${({$size:o})=>o==="small"?"24px":"32px"};
  cursor: ${({disabled:o})=>o?"not-allowed":"pointer"};
  font-family: inherit;
  transition: background-color 0.1s ease;
  outline-style: none;
  text-decoration: none;
  white-space: nowrap;
  ${({shadow:o})=>o&&s.css`
      box-shadow: 0 0 16px rgba(89, 146, 199, 0.25);
    `}

  &:focus {
    box-shadow: 0 0 0 2px ${t.getColor("blue",40)};
  }

  ${j}
`,M=E.default.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  border-width: 1px;
  font-size: ${t.getFontSize("default")};
  font-weight: 400;
  text-transform: uppercase;
  border-radius: 16px;
  border-style: solid;
  padding: ${({$size:o})=>o==="small"?"0 10px":"0 15px"};
  height: ${({$size:o})=>o==="small"?"24px":"32px"};
  cursor: ${({disabled:o})=>o?"not-allowed":"pointer"};
  font-family: inherit;
  transition: background-color 0.1s ease;
  outline-style: none;
  text-decoration: none;
  white-space: nowrap;

  ${({shadow:o})=>o&&s.css`
      box-shadow: 0 0 16px rgba(89, 146, 199, 0.25);
    `}

  &:focus {
    box-shadow: 0 0 0 2px ${t.getColor("blue",40)};
  }

  ${j}
`,D=a.forwardRef((G,F)=>{var y=G,{level:o="primary",ghost:e=!1,disabled:r=!1,active:n=!1,size:p="default",href:g,ariaDescribedBy:b,shadow:f,ariaLabel:x,ariaLabelledBy:C,children:$,onClick:h,type:m="button"}=y,w=_(y,["level","ghost","disabled","active","size","href","ariaDescribedBy","shadow","ariaLabel","ariaLabelledBy","children","onClick","type"]);const v=l=>{r||h===void 0||h(l)};return g!==void 0?q.jsx(M,c(d({$level:o,$ghost:e,$active:n,$size:p,disabled:r,shadow:f,"aria-describedby":b,"aria-disabled":r,"aria-label":x,"aria-labelledby":C,ref:F,role:"button",type:m,onClick:v,href:r?void 0:g},w),{children:a.Children.map($,l=>{var i;return a.isValidElement(l)?a.cloneElement(l,{size:(i=l.props.size)!=null?i:18}):l})})):q.jsx(B,c(d({$level:o,$ghost:e,$active:n,$size:p,disabled:r,shadow:f,"aria-describedby":b,"aria-disabled":r,"aria-label":x,"aria-labelledby":C,ref:F,role:"button",type:m,onClick:v},w),{children:a.Children.map($,l=>{var i;return a.isValidElement(l)?a.cloneElement(l,{size:(i=l.props.size)!=null?i:18}):l})}))});exports.Button=D;
