"use strict";var B=Object.defineProperty,E=Object.defineProperties;var H=Object.getOwnPropertyDescriptors;var d=Object.getOwnPropertySymbols;var $=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable;var C=(t,e,o)=>e in t?B(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,q=(t,e)=>{for(var o in e||(e={}))$.call(e,o)&&C(t,o,e[o]);if(d)for(var o of d(e))T.call(e,o)&&C(t,o,e[o]);return t},w=(t,e)=>E(t,H(e));var y=(t,e)=>{var o={};for(var r in t)$.call(t,r)&&e.indexOf(r)<0&&(o[r]=t[r]);if(t!=null&&d)for(var r of d(t))e.indexOf(r)<0&&T.call(t,r)&&(o[r]=t[r]);return o};var m=require("react/jsx-runtime"),n=require("react"),I=require("react-dom"),M=require("styled-components"),S=require("../../icons/HelpPlainIcon.js"),i=require("../../theme/theme.js"),L=require("../../theme/common.js"),k=require("../../hooks/useBooleanState.js");function D(t){return t&&t.__esModule?t:{default:t}}var f=D(M);const b=5,W=f.default.div`
  position: relative;
  height: ${({size:t})=>t+b*2}px;
  width: ${({size:t})=>t+b*2}px;
  display: inline-block;
`,A=f.default(S.HelpPlainIcon)`
  margin: ${b}px;
  color: ${i.getColor("blue",100)};
`,F=f.default.div`
  ${L.CommonStyle}
  position: fixed;
  z-index: 1901;
  border-radius: 4px;
  padding: 10px;
  width: ${({width:t})=>t}px;
  color: ${i.getColor("grey",120)};
  background: ${i.getColor("blue",10)};
  border: 1px solid ${i.getColor("blue",40)};
  font-size: ${i.getFontSize("default")};
  line-height: 1;
  text-transform: none;
  box-shadow: 0 0 16px rgba(89, 146, 199, 0.25);
  top: ${({top:t})=>t}px;
  left: ${({left:t})=>t}px;
  opacity: ${({top:t,left:e})=>t===-1&&e===-1?0:1};
`,N=f.default.div`
  color: ${i.getColor("blue",120)};
  font-weight: 700;
  margin-bottom: 5px;
`,V=(t,e,o)=>{if(e===void 0||o===void 0||e.current===null||o.current===null)return[-1,-1];const{top:r,left:l,width:g,height:u}=e.current.getBoundingClientRect(),{width:s,height:c}=o.current.getBoundingClientRect(),p=r+u/2-c/2,a=l+g/2-s/2;switch(t){default:case"top":return[r-c,a];case"right":return[p,l+g];case"bottom":return[r+u,a];case"left":return[p,l-s]}},R=g=>{var u=g,{direction:t="top",iconSize:e=24,width:o=200,children:r}=u,l=y(u,["direction","iconSize","width","children"]);const[s,c,p]=k.useBooleanState(!1),a=document.createElement("div");a.setAttribute("id","tooltip-root");const h=n.useRef(a),v=n.useRef(null),x=n.useRef(null),[P,_]=n.useState([0,0]);n.useEffect(()=>(document.body.appendChild(h.current),()=>{document.body.removeChild(h.current)}),[]),n.useEffect(()=>{_(V(t,v,x))},[r,t,v,x,s]);const[j,z]=P;return m.jsxs(W,w(q({ref:v,role:"tooltip"},l),{size:e,onMouseEnter:c,onMouseLeave:p,children:[m.jsx(A,{size:e}),s&&I.createPortal(m.jsx(F,{ref:x,direction:t,width:o,top:j,left:z,children:r}),h.current)]}))};R.Title=N;exports.Tooltip=R;
