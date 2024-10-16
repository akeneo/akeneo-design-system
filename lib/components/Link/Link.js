"use strict";var C=Object.defineProperty,$=Object.defineProperties;var h=Object.getOwnPropertyDescriptors;var n=Object.getOwnPropertySymbols;var c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable;var u=(e,r,o)=>r in e?C(e,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[r]=o,d=(e,r)=>{for(var o in r||(r={}))c.call(r,o)&&u(e,o,r[o]);if(n)for(var o of n(r))s.call(r,o)&&u(e,o,r[o]);return e},f=(e,r)=>$(e,h(r));var x=(e,r)=>{var o={};for(var t in e)c.call(e,t)&&r.indexOf(t)<0&&(o[t]=e[t]);if(e!=null&&n)for(var t of n(e))r.indexOf(t)<0&&s.call(e,t)&&(o[t]=e[t]);return o};var k=require("react/jsx-runtime"),i=require("styled-components"),q=require("react"),a=require("../../theme/theme.js");function v(e){return e&&e.__esModule?e:{default:e}}var w=v(i),R=v(q);const y=w.default.a`
  ${({decorated:e,disabled:r})=>e?i.css`
          font-weight: 400;
          text-decoration: underline;
          color: ${r?a.getColor("grey",100):a.getColor("brand",100)};

          ${!r&&i.css`
            &:hover {
              color: ${a.getColor("brand",120)};
            }

            &:focus:not(:active) {
              border-radius: 0px;
              box-shadow: 0px 0px 0px 2px rgba(74, 144, 226, 0.3);
              outline: none;
            }

            &:active {
              outline: none;
              color: ${a.getColor("brand",140)};
            }
          `};
        `:i.css`
          text-decoration: none;
          box-sizing: border-box;
        `}

  cursor: ${({disabled:e})=>e?"not-allowed":"pointer"};
`,L=R.default.forwardRef((j,g)=>{var l=j,{disabled:e=!1,decorated:r=!0,target:o="_self",href:t,children:_,onClick:p}=l,b=x(l,["disabled","decorated","target","href","children","onClick"]);return k.jsx(y,f(d({disabled:e,ref:g,target:o,decorated:r,rel:o==="_blank"?"noopener noreferrer":"",href:e?void 0:t,onClick:e?void 0:p},b),{children:_}))});exports.Link=L;
