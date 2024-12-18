"use strict";var I=Object.defineProperty,T=Object.defineProperties;var V=Object.getOwnPropertyDescriptors;var x=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var j=(e,t,l)=>t in e?I(e,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[t]=l,u=(e,t)=>{for(var l in t||(t={}))L.call(t,l)&&j(e,l,t[l]);if(x)for(var l of x(t))_.call(t,l)&&j(e,l,t[l]);return e},p=(e,t)=>T(e,V(t));var c=(e,t)=>{var l={};for(var o in e)L.call(e,o)&&t.indexOf(o)<0&&(l[o]=e[o]);if(e!=null&&x)for(var o of x(e))t.indexOf(o)<0&&_.call(e,o)&&(l[o]=e[o]);return l};var a=require("react/jsx-runtime"),m=require("react"),v=require("styled-components"),s=require("../../theme/theme.js"),k=require("../Button/Button.js"),D=require("../IconButton/IconButton.js");function q(e){return e&&e.__esModule?e:{default:e}}var C=q(m),r=q(v);const H=r.default.div`
  display: flex;
  flex-direction: column;
`,f=r.default.div`
  min-height: 54px;
  padding: 17px 0;
  box-sizing: border-box;
  font-size: ${s.getFontSize("default")};
  color: ${s.getColor("grey",140)};
  display: flex;

  ${({width:e})=>e==="auto"?v.css`
          flex: 1;
        `:v.css`
          width: ${e}px;
        `};
`,w=r.default(f)`
  color: ${s.getColor("purple",100)};
  font-style: italic;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`,A=r.default(f)`
  opacity: 0;
  display: flex;
  gap: 10px;
`,E=r.default(f)``,R=l=>{var o=l,{children:e}=o,t=c(o,["children"]);return a.jsx(E,p(u({width:"auto"},t),{children:e}))},F=r.default.div`
  display: flex;
  margin-left: 30px;
  gap: 10px;
`,M=r.default.div`
  display: flex;
  flex-direction: column;
  outline-style: none;
  padding: 0 10px;
  border-bottom: 1px solid ${s.getColor("grey",60)};
  background-color: ${({isSelected:e})=>e?s.getColor("blue",20):"transparent"};

  &:hover {
    background-color: ${s.getColor("grey",20)};
  }

  &:focus {
    box-shadow: 0 0 0 2px ${s.getColor("blue",40)};
  }

  &:hover ${A} {
    opacity: 1;
  }

  ${f} {
    align-items: ${({isMultiline:e})=>e?"start":"center"};
  }

  ${w}, ${E} {
    height: ${({isMultiline:e})=>e?"74px":"auto"};
    align-items: center;
  }
`,S=r.default.div`
  display: flex;
`,G=r.default.div`
  display: flex;
  gap: 10px;
  flex: 1;
  min-width: 0;
`,N=r.default.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 10px;
`,z=y=>{var n=y,{children:e,isMultiline:t=!1,isSelected:l=!1}=n,o=c(n,["children","isMultiline","isSelected"]);const g=[],$=[],b=[];return C.default.Children.forEach(e,i=>{m.isValidElement(i)&&(i.type===R||i.type===h)?g.push(i):m.isValidElement(i)&&i.type===N?b.push(i):$.push(i)}),a.jsxs(M,p(u({isMultiline:t,tabIndex:0,isSelected:l},o),{children:[a.jsxs(S,{children:[a.jsx(G,{children:$}),g.length>0&&a.jsx(F,{children:g})]}),b]}))},B=y=>{var n=y,{title:e,width:t,children:l}=n,o=c(n,["title","width","children"]);return e=e===void 0&&typeof l=="string"?l:e,a.jsx(f,p(u({width:t,title:e},o),{children:l}))},h=l=>{var o=l,{children:e}=o,t=c(o,["children"]);const y=C.default.Children.map(e,n=>C.default.isValidElement(n)&&(n.type===k.Button||n.type===D.IconButton)?C.default.cloneElement(n,{size:"small",ghost:!0,level:"tertiary"}):n);return a.jsx(A,p(u({},t),{children:y}))},d=l=>{var o=l,{children:e}=o,t=c(o,["children"]);return a.jsx(H,p(u({},t),{children:e}))};z.displayName="List.Row";B.displayName="List.Cell";w.displayName="List.TitleCell";h.displayName="List.ActionCell";R.displayName="List.RemoveCell";d.Row=z;d.Cell=B;d.TitleCell=w;d.ActionCell=h;d.RemoveCell=R;d.RowHelpers=N;exports.List=d;
