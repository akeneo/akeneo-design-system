"use strict";var W=Object.defineProperty,F=Object.defineProperties;var I=Object.getOwnPropertyDescriptors;var f=Object.getOwnPropertySymbols;var H=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var M=(e,t,o)=>t in e?W(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,_=(e,t)=>{for(var o in t||(t={}))H.call(t,o)&&M(e,o,t[o]);if(f)for(var o of f(t))P.call(t,o)&&M(e,o,t[o]);return e},j=(e,t)=>F(e,I(t));var A=(e,t)=>{var o={};for(var r in e)H.call(e,r)&&t.indexOf(r)<0&&(o[r]=e[r]);if(e!=null&&f)for(var r of f(e))t.indexOf(r)<0&&P.call(e,r)&&(o[r]=e[r]);return o};var b=require("react/jsx-runtime"),i=require("react"),N=require("react-dom"),B=require("styled-components"),V=require("../../icons/HelpPlainIcon.js"),u=require("../../theme/theme.js"),G=require("../../theme/common.js"),J=require("../../hooks/useBooleanState.js");function K(e){return e&&e.__esModule?e:{default:e}}var h=K(B);const w=5,O=h.default.div`
  position: relative;
  display: inline-block;
  ${({$size:e})=>e!==void 0&&B.css`
      height: ${e+w*2}px;
      width: ${e+w*2}px;
    `}
`,Q=h.default(V.HelpPlainIcon)`
  margin: ${w}px;
  color: ${u.getColor("blue",100)};
`,U=h.default.div`
  ${G.CommonStyle}
  position: fixed;
  z-index: ${({$contentZIndex:e})=>e!=null?e:1901};
  border-radius: 4px;
  padding: 10px;
  width: ${({width:e})=>e}px;
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
`,X=h.default.div`
  color: ${u.getColor("blue",120)};
  font-weight: 700;
  margin-bottom: 5px;
`,Y=(e,t,o)=>{if(t===void 0||o===void 0||t.current===null||o.current===null)return[-1,-1];const{top:r,left:n,width:c,height:a}=t.current.getBoundingClientRect(),{width:l,height:p}=o.current.getBoundingClientRect(),m=r+a/2-p/2,s=n+c/2-l/2;switch(e){default:case"top":return[r-p,s];case"right":return[m,n+c];case"bottom":return[r+a,s];case"left":return[m,n-l]}},E=m=>{var s=m,{direction:e="top",iconSize:t=24,width:o=200,children:r,trigger:n,offset:c,contentZIndex:a,mouseEnterDelay:l=0}=s,p=A(s,["direction","iconSize","width","children","trigger","offset","contentZIndex","mouseEnterDelay"]);const[$,C,L]=J.useBooleanState(!1),T=i.useRef(),d=i.useRef(),R=document.createElement("div");R.setAttribute("id","tooltip-root");const g=i.useRef(R),v=i.useRef(null),x=i.useRef(null),[S,k]=i.useState([0,0]),q=()=>{clearTimeout(T.current),clearTimeout(d.current),l>0?d.current=window.setTimeout(C,l):C()},y=()=>{clearTimeout(d.current),T.current=window.setTimeout(()=>{L()},100)};i.useEffect(()=>(document.body.appendChild(g.current),()=>{document.body.removeChild(g.current),clearTimeout(T.current),clearTimeout(d.current)}),[]),i.useEffect(()=>{k(Y(e,v,x))},[r,e,v,x,$]);const[z,D]=S;return b.jsxs(O,j(_({ref:v,role:"tooltip"},p),{$size:n?void 0:t,onMouseEnter:q,onMouseLeave:y,children:[n||b.jsx(Q,{size:t}),$&&N.createPortal(b.jsx(U,{ref:x,$direction:e,width:o,$top:z,$left:D,$offset:c,$contentZIndex:a,onMouseEnter:q,onMouseLeave:y,children:r}),g.current)]}))};E.Title=X;exports.Tooltip=E;
