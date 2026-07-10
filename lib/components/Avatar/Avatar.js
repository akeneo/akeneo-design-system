"use strict";var R=Object.defineProperty,G=Object.defineProperties;var M=Object.getOwnPropertyDescriptors;var l=Object.getOwnPropertySymbols;var g=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var h=(e,o,t)=>o in e?R(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,b=(e,o)=>{for(var t in o||(o={}))g.call(o,t)&&h(e,t,o[t]);if(l)for(var t of l(o))x.call(o,t)&&h(e,t,o[t]);return e},A=(e,o)=>G(e,M(o));var f=(e,o)=>{var t={};for(var r in e)g.call(e,r)&&o.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&l)for(var r of l(e))o.indexOf(r)<0&&x.call(e,r)&&(t[r]=e[r]);return t};var v=require("react/jsx-runtime"),T=require("react"),a=require("styled-components"),B=require("../../hooks/useTheme.js"),s=require("../../theme/theme.js");function D(e){return e&&e.__esModule?e:{default:e}}var k=D(a);const L=k.default.span`
  ${({size:e})=>e==="default"?a.css`
          height: 32px;
          width: 32px;
          border-radius: 32px;
        `:a.css`
          height: 140px;
          width: 140px;
          border-radius: 140px;
        `}
  ${({size:e,selected:o})=>e==="default"&&o?a.css`
          padding: 1px;
          border: 3px solid ${s.getColor("blue",100)};
          margin: -4px -8px 0 0;
        `:a.css`
          margin-right: -4px;
        `}
  box-sizing: content-box;
  display: inline-block;
  background-color: ${s.getColor("white")};
`,P=k.default.span`
  ${({size:e})=>e==="default"?a.css`
          line-height: 32px;
          font-size: 15px;
          border-radius: 32px;
        `:a.css`
          line-height: 140px;
          font-size: 66px;
          border-radius: 140px;
        `}
  ${({disabled:e})=>e?a.css`
          opacity: 50%;
        `:a.css``}
  height: 100%;
  width: 100%;
  display: block;
  color: ${s.getColor("white")};
  text-align: center;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  text-transform: uppercase;
`,E=F=>{var u=F,{username:e,firstName:o,lastName:t,avatarUrl:r,size:i="default",disabled:$=!1,selected:m=!1,title:c}=u,y=f(u,["username","firstName","lastName","avatarUrl","size","disabled","selected","title"]);const n=B.useTheme(),C=(o.trim().charAt(0)+t.trim().charAt(0)||e.substring(0,2)).toLocaleUpperCase(),d=c!=null?c:`${o||""} ${t||""}`.trim()||e,w=(c!=null?c:d)+" container",_=T.useMemo(()=>{const j=e.split("").reduce((z,I)=>z+I.charCodeAt(0),0),p=[n.colorAlternative.green120,n.colorAlternative.darkCyan120,n.colorAlternative.forestGreen120,n.colorAlternative.oliveGreen120,n.colorAlternative.blue120,n.colorAlternative.darkBlue120,n.colorAlternative.hotPink120,n.colorAlternative.red120,n.colorAlternative.coralRed120,n.colorAlternative.yellow120,n.colorAlternative.orange120,n.colorAlternative.chocolate120];return p[j%p.length]},[n,e]),q=r?{backgroundImage:`url(${r})`}:{backgroundColor:_};return v.jsx(L,{size:i,selected:m,title:w,children:v.jsx(P,A(b({size:i,disabled:$},y),{style:q,title:d,children:r?"":C}))})};exports.Avatar=E;
