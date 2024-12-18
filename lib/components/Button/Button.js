"use strict";var j=Object.defineProperty,A=Object.defineProperties;var S=Object.getOwnPropertyDescriptors;var s=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable;var v=(o,e,r)=>e in o?j(o,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):o[e]=r,u=(o,e)=>{for(var r in e||(e={}))L.call(e,r)&&v(o,r,e[r]);if(s)for(var r of s(e))k.call(e,r)&&v(o,r,e[r]);return o},d=(o,e)=>A(o,S(e));var z=(o,e)=>{var r={};for(var n in o)L.call(o,n)&&e.indexOf(n)<0&&(r[n]=o[n]);if(o!=null&&s)for(var n of s(o))e.indexOf(n)<0&&k.call(o,n)&&(r[n]=o[n]);return r};var _=require("react/jsx-runtime"),i=require("react"),c=require("styled-components"),t=require("../../theme/theme.js");function R(o){return o&&o.__esModule?o:{default:o}}var q=R(c);const E=({$level:o,$ghost:e,$active:r,disabled:n})=>e?c.css`
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
    `:c.css`
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
  `,V=q.default.button`
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

  &:focus {
    box-shadow: 0 0 0 2px ${t.getColor("blue",40)};
  }

  ${E}
`,B=q.default.a`
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

  &:focus {
    box-shadow: 0 0 0 2px ${t.getColor("blue",40)};
  }

  ${E}
`,M=i.forwardRef((D,F)=>{var w=D,{level:o="primary",ghost:e=!1,disabled:r=!1,active:n=!1,size:p="default",href:g,ariaDescribedBy:f,ariaLabel:b,ariaLabelledBy:x,children:C,onClick:$,type:m="button"}=w,h=z(w,["level","ghost","disabled","active","size","href","ariaDescribedBy","ariaLabel","ariaLabelledBy","children","onClick","type"]);const y=l=>{r||$===void 0||$(l)};return g!==void 0?_.jsx(B,d(u({$level:o,$ghost:e,$active:n,$size:p,disabled:r,"aria-describedby":f,"aria-disabled":r,"aria-label":b,"aria-labelledby":x,ref:F,role:"button",type:m,onClick:y,href:r?void 0:g},h),{children:i.Children.map(C,l=>{var a;return i.isValidElement(l)?i.cloneElement(l,{size:(a=l.props.size)!=null?a:18}):l})})):_.jsx(V,d(u({$level:o,$ghost:e,$active:n,$size:p,disabled:r,"aria-describedby":f,"aria-disabled":r,"aria-label":b,"aria-labelledby":x,ref:F,role:"button",type:m,onClick:y},h),{children:i.Children.map(C,l=>{var a;return i.isValidElement(l)?i.cloneElement(l,{size:(a=l.props.size)!=null?a:18}):l})}))});exports.Button=M;
