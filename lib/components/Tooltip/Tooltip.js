"use strict";var F=Object.defineProperty,I=Object.defineProperties;var N=Object.getOwnPropertyDescriptors;var f=Object.getOwnPropertySymbols;var _=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var P=(e,t,o)=>t in e?F(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,A=(e,t)=>{for(var o in t||(t={}))_.call(t,o)&&P(e,o,t[o]);if(f)for(var o of f(t))j.call(t,o)&&P(e,o,t[o]);return e},B=(e,t)=>I(e,N(t));var E=(e,t)=>{var o={};for(var r in e)_.call(e,r)&&t.indexOf(r)<0&&(o[r]=e[r]);if(e!=null&&f)for(var r of f(e))t.indexOf(r)<0&&j.call(e,r)&&(o[r]=e[r]);return o};var $=require("react/jsx-runtime"),i=require("react"),V=require("react-dom"),w=require("styled-components"),G=require("../../icons/HelpPlainIcon.js"),u=require("../../theme/theme.js"),J=require("../../theme/common.js"),K=require("../../hooks/useBooleanState.js");function O(e){return e&&e.__esModule?e:{default:e}}var h=O(w);const b=5,Q=h.default.div`
  position: relative;
  display: inline-block;
  ${({$size:e})=>e!==void 0&&w.css`
      height: ${e+b*2}px;
      width: ${e+b*2}px;
    `}
`,U=h.default(G.HelpPlainIcon)`
  margin: ${b}px;
  color: ${u.getColor("blue",100)};
`,X=h.default.div`
  ${J.CommonStyle}
  position: fixed;
  z-index: ${({$contentZIndex:e})=>e!=null?e:1901};
  border-radius: 4px;
  padding: 10px;
  width: ${({width:e,$maxWidth:t})=>t===void 0?`${e}px`:"max-content"};
  ${({$maxWidth:e})=>e!==void 0&&w.css`
      max-width: ${e}px;
    `}
  color: ${u.getColor("grey",120)};
  background: ${u.getColor("blue",10)};
  border: 1px solid ${u.getColor("blue",40)};
  font-size: ${u.getFontSize("default")};
  line-height: 1;
  text-transform: none;
  box-shadow: 0 0 16px rgba(89, 146, 199, 0.25);
  top: ${({$top:e,$direction:t,$offset:o=0})=>{switch(t){case"top":return`${e-o}px`;case"bottom":return`${e+o}px`;default:return`${e}px`}}};
  left: ${({$left:e,$direction:t,$offset:o=0})=>{switch(t){case"left":return`${e-o}px`;case"right":return`${e+o}px`;default:return`${e}px`}}};
  opacity: ${({$top:e,$left:t})=>e===-1&&t===-1?0:1};
`,Y=h.default.div`
  color: ${u.getColor("blue",120)};
  font-weight: 700;
  margin-bottom: 5px;
`,Z=(e,t,o)=>{if(t===void 0||o===void 0||t.current===null||o.current===null)return[-1,-1];const{top:r,left:n,width:l,height:c}=t.current.getBoundingClientRect(),{width:a,height:s}=o.current.getBoundingClientRect(),d=r+c/2-s/2,m=n+l/2-a/2;switch(e){default:case"top":return[r-s,m];case"right":return[d,n+l];case"bottom":return[r+c,m];case"left":return[d,n-a]}},L=m=>{var C=m,{direction:e="top",iconSize:t=24,width:o=200,maxWidth:r,children:n,trigger:l,offset:c,contentZIndex:a,mouseEnterDelay:s=0}=C,d=E(C,["direction","iconSize","width","maxWidth","children","trigger","offset","contentZIndex","mouseEnterDelay"]);const[R,q,S]=K.useBooleanState(!1),T=i.useRef(),p=i.useRef(),y=document.createElement("div");y.setAttribute("id","tooltip-root");const v=i.useRef(y),g=i.useRef(null),x=i.useRef(null),[k,z]=i.useState([0,0]),M=()=>{clearTimeout(T.current),clearTimeout(p.current),s>0?p.current=window.setTimeout(q,s):q()},H=()=>{clearTimeout(p.current),T.current=window.setTimeout(()=>{S()},100)};i.useEffect(()=>(document.body.appendChild(v.current),()=>{document.body.removeChild(v.current),clearTimeout(T.current),clearTimeout(p.current)}),[]),i.useEffect(()=>{z(Z(e,g,x))},[n,e,g,x,R]);const[D,W]=k;return $.jsxs(Q,B(A({ref:g,role:"tooltip"},d),{$size:l?void 0:t,onMouseEnter:M,onMouseLeave:H,children:[l||$.jsx(U,{size:t}),R&&V.createPortal($.jsx(X,{ref:x,$direction:e,width:o,$maxWidth:r,$top:D,$left:W,$offset:c,$contentZIndex:a,onMouseEnter:M,onMouseLeave:H,children:n}),v.current)]}))};L.Title=Y;exports.Tooltip=L;
