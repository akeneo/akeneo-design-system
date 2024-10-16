"use strict";var j=Object.defineProperty,q=Object.defineProperties;var z=Object.getOwnPropertyDescriptors;var d=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable;var p=(e,r,t)=>r in e?j(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,x=(e,r)=>{for(var t in r||(r={}))v.call(r,t)&&p(e,t,r[t]);if(d)for(var t of d(r))h.call(r,t)&&p(e,t,r[t]);return e},b=(e,r)=>q(e,z(r));var m=(e,r)=>{var t={};for(var n in e)v.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&d)for(var n of d(e))r.indexOf(n)<0&&h.call(e,n)&&(t[n]=e[n]);return t};var g=require("react/jsx-runtime"),R=require("react"),T=require("styled-components"),o=require("../../../theme/theme.js"),E=require("../../Tags/Tags.js");function w(e){return e&&e.__esModule?e:{default:e}}var s=w(R),f=w(T);const M=f.default.a`
  align-items: center;
  box-sizing: border-box;
  cursor: ${({$disabled:e})=>e?"not-allowed":"pointer"};
  display: flex;
  flex-direction: column;
  font-size: ${o.getFontSize("small")};
  height: 70px;
  justify-content: center;
  line-height: 1.15;
  margin: 0;
  outline-style: none;
  padding: 7px;
  position: relative;
  text-decoration: none;
  width: 80px;

  border-left: 4px solid
    ${({$active:e,$disabled:r})=>!r&&e?o.getColor("brand",100):"transparent"};

  color: ${({$active:e,$disabled:r})=>r?o.getColor("grey",100):e?o.getColor("brand",100):o.getColor("grey",120)};

  svg {
    color: ${({$active:e,$disabled:r})=>r?o.getColor("grey",80):e?o.getColor("brand",100):o.getColor("grey",100)};
  }

  &:hover {
    border-color: ${({$disabled:e})=>!e&&o.getColor("brand",100)};
    color: ${({$disabled:e})=>!e&&o.getColor("brand",100)};
    svg {
      color: ${({$disabled:e})=>!e&&o.getColor("brand",100)};
    }
  }

  &:focus:not(:active) {
    box-shadow: 0 0 0 2px ${o.getColor("blue",40)};
    outline: none;
  }
`,D=f.default.span`
  margin-top: 7px;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,I=f.default.div`
  overflow: hidden;
  position: absolute;
  right: 0;
  top: 7px;
  width: 50%;
`,L=s.default.forwardRef((N,C)=>{var c=N,{children:e,href:r,icon:t,active:n=!1,disabled:a=!1,onClick:u}=c,y=m(c,["children","href","icon","active","disabled","onClick"]);const $=l=>{if(a){l.preventDefault();return}u==null||u(l)};let i=null;const _=s.default.Children.map(e,l=>{if(s.default.isValidElement(l)&&l.type===E.Tag){if(i===null)return i=l,null;throw new Error("You can only provide one component of type Tag.")}return l});return g.jsxs(M,b(x({ref:C,href:a?void 0:r,$active:n,$disabled:a,"aria-disabled":a,onClick:$},y),{children:[s.default.cloneElement(t,{size:24}),i&&g.jsx(I,{children:i}),g.jsx(D,{children:_})]}))});exports.MainNavigationItem=L;
