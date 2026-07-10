"use strict";var I=Object.defineProperty,T=Object.defineProperties;var V=Object.getOwnPropertyDescriptors;var x=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var j=(e,t,l)=>t in e?I(e,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[t]=l,u=(e,t)=>{for(var l in t||(t={}))L.call(t,l)&&j(e,l,t[l]);if(x)for(var l of x(t))_.call(t,l)&&j(e,l,t[l]);return e},p=(e,t)=>T(e,V(t));var c=(e,t)=>{var l={};for(var o in e)L.call(e,o)&&t.indexOf(o)<0&&(l[o]=e[o]);if(e!=null&&x)for(var o of x(e))t.indexOf(o)<0&&_.call(e,o)&&(l[o]=e[o]);return l};var s=require("react/jsx-runtime"),m=require("react"),v=require("styled-components"),a=require("../../theme/theme.js"),k=require("../Button/Button.js"),D=require("../IconButton/IconButton.js");function q(e){return e&&e.__esModule?e:{default:e}}var C=q(m),i=q(v);const H=i.default.div`
  display: flex;
  flex-direction: column;
`,f=i.default.div`
  min-height: 54px;
  padding: 17px 0;
  box-sizing: border-box;
  font-size: ${a.getFontSize("default")};
  color: ${a.getColor("grey",140)};
  display: flex;

  ${({width:e})=>e==="auto"?v.css`
          flex: 1;
        `:v.css`
          width: ${e}px;
        `};
`,$=i.default(f)`
  color: ${a.getColor("purple",100)};
  font-style: italic;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`,A=i.default(f)`
  opacity: 0;
  display: flex;
  gap: 10px;
`,E=i.default(f)``,w=l=>{var o=l,{children:e}=o,t=c(o,["children"]);return s.jsx(E,p(u({width:"auto"},t),{children:e}))},M=i.default.div`
  display: flex;
  margin-left: 30px;
  gap: 10px;
`,S=i.default.div`
  display: flex;
  flex-direction: column;
  outline-style: none;
  padding: 0 10px;
  border-bottom: 1px solid ${a.getColor("grey",60)};
  background-color: ${({$isSelected:e})=>e?a.getColor("blue",20):"transparent"};

  &:hover {
    background-color: ${a.getColor("grey",20)};
  }

  &:focus {
    box-shadow: 0 0 0 2px ${a.getColor("blue",40)};
  }

  &:hover ${A} {
    opacity: 1;
  }

  ${f} {
    align-items: ${({$isMultiline:e})=>e?"start":"center"};
  }

  ${$}, ${E} {
    height: ${({$isMultiline:e})=>e?"74px":"auto"};
    align-items: center;
  }
`,F=i.default.div`
  display: flex;
`,G=i.default.div`
  display: flex;
  gap: 10px;
  flex: 1;
  min-width: 0;
`,N=i.default.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 10px;
`,z=y=>{var n=y,{children:e,isMultiline:t=!1,isSelected:l=!1}=n,o=c(n,["children","isMultiline","isSelected"]);const g=[],h=[],b=[];return C.default.Children.forEach(e,r=>{m.isValidElement(r)&&(r.type===w||r.type===R)?g.push(r):m.isValidElement(r)&&r.type===N?b.push(r):h.push(r)}),s.jsxs(S,p(u({$isMultiline:t,tabIndex:0,$isSelected:l},o),{children:[s.jsxs(F,{children:[s.jsx(G,{children:h}),g.length>0&&s.jsx(M,{children:g})]}),b]}))},B=y=>{var n=y,{title:e,width:t,children:l}=n,o=c(n,["title","width","children"]);return e=e===void 0&&typeof l=="string"?l:e,s.jsx(f,p(u({width:t,title:e},o),{children:l}))},R=l=>{var o=l,{children:e}=o,t=c(o,["children"]);const y=C.default.Children.map(e,n=>C.default.isValidElement(n)&&(n.type===k.Button||n.type===D.IconButton)?C.default.cloneElement(n,{size:"small",ghost:!0,level:"tertiary"}):n);return s.jsx(A,p(u({},t),{children:y}))},d=l=>{var o=l,{children:e}=o,t=c(o,["children"]);return s.jsx(H,p(u({},t),{children:e}))};z.displayName="List.Row";B.displayName="List.Cell";$.displayName="List.TitleCell";R.displayName="List.ActionCell";w.displayName="List.RemoveCell";d.Row=z;d.Cell=B;d.TitleCell=$;d.ActionCell=R;d.RemoveCell=w;d.RowHelpers=N;exports.List=d;
