"use strict";var z=Object.defineProperty,D=Object.defineProperties;var W=Object.getOwnPropertyDescriptors;var d=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable;var q=(e,t,o)=>t in e?z(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,M=(e,t)=>{for(var o in t||(t={}))y.call(t,o)&&q(e,o,t[o]);if(d)for(var o of d(t))R.call(t,o)&&q(e,o,t[o]);return e},E=(e,t)=>D(e,W(t));var H=(e,t)=>{var o={};for(var r in e)y.call(e,r)&&t.indexOf(r)<0&&(o[r]=e[r]);if(e!=null&&d)for(var r of d(e))t.indexOf(r)<0&&R.call(e,r)&&(o[r]=e[r]);return o};var x=require("react/jsx-runtime"),n=require("react"),F=require("react-dom"),P=require("styled-components"),I=require("../../icons/HelpPlainIcon.js"),l=require("../../theme/theme.js"),N=require("../../theme/common.js"),V=require("../../hooks/useBooleanState.js");function G(e){return e&&e.__esModule?e:{default:e}}var f=G(P);const b=5,J=f.default.div`
  position: relative;
  display: inline-block;
  ${({$size:e})=>e!==void 0&&P.css`
      height: ${e+b*2}px;
      width: ${e+b*2}px;
    `}
`,K=f.default(I.HelpPlainIcon)`
  margin: ${b}px;
  color: ${l.getColor("blue",100)};
`,O=f.default.div`
  ${N.CommonStyle}
  position: fixed;
  z-index: ${({$contentZIndex:e})=>e!=null?e:1901};
  border-radius: 4px;
  padding: 10px;
  width: ${({width:e})=>e}px;
  color: ${l.getColor("grey",120)};
  background: ${l.getColor("blue",10)};
  border: 1px solid ${l.getColor("blue",40)};
  font-size: ${l.getFontSize("default")};
  line-height: 1;
  text-transform: none;
  box-shadow: 0 0 16px rgba(89, 146, 199, 0.25);
  top: ${({$top:e,$direction:t,$offset:o=0})=>{switch(t){case"top":return`${e-o}px`;case"bottom":return`${e+o}px`;default:return`${e}px`}}};
  left: ${({$left:e,$direction:t,$offset:o=0})=>{switch(t){case"left":return`${e-o}px`;case"right":return`${e+o}px`;default:return`${e}px`}}};
  opacity: ${({$top:e,$left:t})=>e===-1&&t===-1?0:1};
`,Q=f.default.div`
  color: ${l.getColor("blue",120)};
  font-weight: 700;
  margin-bottom: 5px;
`,U=(e,t,o)=>{if(t===void 0||o===void 0||t.current===null||o.current===null)return[-1,-1];const{top:r,left:i,width:a,height:c}=t.current.getBoundingClientRect(),{width:p,height:h}=o.current.getBoundingClientRect(),u=r+c/2-h/2,s=i+a/2-p/2;switch(e){default:case"top":return[r-h,s];case"right":return[u,i+a];case"bottom":return[r+c,s];case"left":return[u,i-p]}},_=h=>{var u=h,{direction:e="top",iconSize:t=24,width:o=200,children:r,trigger:i,offset:a,contentZIndex:c}=u,p=H(u,["direction","iconSize","width","children","trigger","offset","contentZIndex"]);const[s,j,B]=V.useBooleanState(!1),g=n.useRef(),$=document.createElement("div");$.setAttribute("id","tooltip-root");const m=n.useRef($),v=n.useRef(null),T=n.useRef(null),[L,S]=n.useState([0,0]),C=()=>{clearTimeout(g.current),j()},w=()=>{g.current=window.setTimeout(()=>{B()},100)};n.useEffect(()=>(document.body.appendChild(m.current),()=>{document.body.removeChild(m.current),clearTimeout(g.current)}),[]),n.useEffect(()=>{S(U(e,v,T))},[r,e,v,T,s]);const[A,k]=L;return x.jsxs(J,E(M({ref:v,role:"tooltip"},p),{$size:i?void 0:t,onMouseEnter:C,onMouseLeave:w,children:[i||x.jsx(K,{size:t}),s&&F.createPortal(x.jsx(O,{ref:T,$direction:e,width:o,$top:A,$left:k,$offset:a,$contentZIndex:c,onMouseEnter:C,onMouseLeave:w,children:r}),m.current)]}))};_.Title=Q;exports.Tooltip=_;
