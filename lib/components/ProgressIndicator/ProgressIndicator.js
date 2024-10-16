"use strict";var $=Object.defineProperty,S=Object.defineProperties;var j=Object.getOwnPropertyDescriptors;var u=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable;var m=(e,r,o)=>r in e?$(e,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[r]=o,y=(e,r)=>{for(var o in r||(r={}))x.call(r,o)&&m(e,o,r[o]);if(u)for(var o of u(r))h.call(r,o)&&m(e,o,r[o]);return e},C=(e,r)=>S(e,j(r));var b=(e,r)=>{var o={};for(var t in e)x.call(e,t)&&r.indexOf(t)<0&&(o[t]=e[t]);if(e!=null&&u)for(var t of u(e))r.indexOf(t)<0&&h.call(e,t)&&(o[t]=e[t]);return o};var d=require("react/jsx-runtime"),l=require("react"),I=require("styled-components"),n=require("../../theme/theme.js");function P(e){return e&&e.__esModule?e:{default:e}}var g=P(I);const _=g.default.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 32px;
  width: 32px;
  font-size: ${n.getFontSize("big")};
  color: ${({state:e})=>e==="done"?n.getColor("white"):e==="inprogress"?n.getColor("green",100):n.getColor("grey",120)};
  background-color: ${({state:e})=>e==="done"?n.getColor("green",100):n.getColor("white")};
  border-radius: 50%;
  border: 1px solid
    ${({state:e})=>e==="done"?"transparent":e==="inprogress"?n.getColor("green",100):n.getColor("grey",80)};
`,q=g.default.div`
  font-size: ${n.getFontSize("small")};
  font-weight: normal;
  color: ${({state:e})=>e==="inprogress"?n.getColor("green",100):e==="done"?n.getColor("grey",140):n.getColor("grey",120)};
  text-transform: uppercase;
  padding-top: 10px;
  line-height: initial;
`,v=g.default.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  cursor: ${({disabled:e})=>e?"not-allowed":"pointer"};
  opacity: ${({disabled:e})=>e?.6:1};

  &:before {
    display: block;
    content: ' ';
    width: calc(100% - 34px);
    border-bottom-width: 1px;
    border-bottom-style: ${({state:e})=>e==="todo"?"dashed":"solid"};
    border-bottom-color: ${({state:e})=>e!=="todo"?n.getColor("green",100):n.getColor("grey",80)};
    position: relative;
    left: -50%;
    top: 17px;
  }
`,z=g.default.ul`
  display: flex;
  justify-content: space-between;

  ${v}:first-child:before {
    display: none;
    border: none;
  }
`,c=l.forwardRef((s,i)=>{var p=s,{state:e,children:r,disabled:o,onClick:t,index:a}=p,f=b(p,["state","children","disabled","onClick","index"]);if(e===void 0)throw new Error("ProgressIndicator.Step cannot be used outside a ProgressIndicator component");return d.jsxs(v,C(y({"aria-current":e==="inprogress"?"step":void 0,state:e,ref:i,"aria-disabled":o,onClick:o?void 0:t,disabled:o},f),{children:[d.jsx(_,{"aria-hidden":!0,state:e,children:d.jsx("span",{children:(a||0)+1})}),d.jsx(q,{state:e,children:r})]}))}),w=o=>{var t=o,{children:e}=t,r=b(t,["children"]);const a=l.Children.toArray(e).reduce((i,s,p)=>l.isValidElement(s)&&s.type===c&&s.props.current===!0?p:i,0),f=l.Children.map(e,(i,s)=>l.isValidElement(i)&&i.type===c&&i.props.state===void 0?l.cloneElement(i,{state:s>a?"todo":s<a?"done":"inprogress",index:s}):i);return d.jsx(z,C(y({"aria-label":"progress"},r),{children:f}))};c.displayName="ProgressIndicator.Step";w.Step=c;exports.ProgressIndicator=w;
