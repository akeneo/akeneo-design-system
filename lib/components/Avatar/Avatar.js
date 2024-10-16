"use strict";var I=Object.defineProperty,R=Object.defineProperties;var G=Object.getOwnPropertyDescriptors;var i=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable;var p=(e,t,r)=>t in e?I(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,x=(e,t)=>{for(var r in t||(t={}))h.call(t,r)&&p(e,r,t[r]);if(i)for(var r of i(t))g.call(t,r)&&p(e,r,t[r]);return e},v=(e,t)=>R(e,G(t));var b=(e,t)=>{var r={};for(var o in e)h.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(e!=null&&i)for(var o of i(e))t.indexOf(o)<0&&g.call(e,o)&&(r[o]=e[o]);return r};var A=require("react/jsx-runtime"),M=require("react"),n=require("styled-components"),T=require("../../hooks/useTheme.js"),a=require("../../theme/theme.js");function B(e){return e&&e.__esModule?e:{default:e}}var f=B(n);const D=f.default.span`
  ${({size:e})=>e==="default"?n.css`
          height: 32px;
          width: 32px;
          border-radius: 32px;
        `:n.css`
          height: 140px;
          width: 140px;
          border-radius: 140px;
        `}
  ${({size:e,selected:t})=>e==="default"&&t?n.css`
          padding: 1px;
          border: 3px solid ${a.getColor("blue",100)};
          margin: -4px -8px 0 0;
        `:n.css`
          margin-right: -4px;
        `}
  box-sizing: content-box;
  display: inline-block;
  background-color: ${a.getColor("white")};
`,L=f.default.span`
  ${({size:e})=>e==="default"?n.css`
          line-height: 32px;
          font-size: 15px;
          border-radius: 32px;
        `:n.css`
          line-height: 140px;
          font-size: 66px;
          border-radius: 140px;
        `}
  ${({disabled:e})=>e?n.css`
          opacity: 50%;
        `:n.css``}
  height: 100%;
  width: 100%;
  display: block;
  color: ${a.getColor("white")};
  text-align: center;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  text-transform: uppercase;
`,P=E=>{var s=E,{username:e,firstName:t,lastName:r,avatarUrl:o,size:c="default",disabled:k=!1,selected:$=!1}=s,m=b(s,["username","firstName","lastName","avatarUrl","size","disabled","selected"]);const l=T.useTheme(),y=(t.trim().charAt(0)+r.trim().charAt(0)||e.substring(0,2)).toLocaleUpperCase(),d=`${t||""} ${r||""}`.trim()||e,C=d+" container",w=M.useMemo(()=>{const q=e.split("").reduce((j,z)=>j+z.charCodeAt(0),0),u=[l.colorAlternative.green120,l.colorAlternative.darkCyan120,l.colorAlternative.forestGreen120,l.colorAlternative.oliveGreen120,l.colorAlternative.blue120,l.colorAlternative.darkBlue120,l.colorAlternative.hotPink120,l.colorAlternative.red120,l.colorAlternative.coralRed120,l.colorAlternative.yellow120,l.colorAlternative.orange120,l.colorAlternative.chocolate120];return u[q%u.length]},[l,e]),_=o?{backgroundImage:`url(${o})`}:{backgroundColor:w};return A.jsx(D,{size:c,selected:$,title:C,children:A.jsx(L,v(x({size:c,disabled:k},m),{style:_,title:d,children:o?"":y}))})};exports.Avatar=P;
