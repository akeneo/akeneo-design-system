"use strict";var j=Object.defineProperty,k=Object.defineProperties;var C=Object.getOwnPropertyDescriptors;var d=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable;var f=(e,r,i)=>r in e?j(e,r,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[r]=i,u=(e,r)=>{for(var i in r||(r={}))h.call(r,i)&&f(e,i,r[i]);if(d)for(var i of d(r))m.call(r,i)&&f(e,i,r[i]);return e},g=(e,r)=>k(e,C(r));var v=(e,r)=>{var i={};for(var t in e)h.call(e,t)&&r.indexOf(t)<0&&(i[t]=e[t]);if(e!=null&&d)for(var t of d(e))r.indexOf(t)<0&&m.call(e,t)&&(i[t]=e[t]);return i};var a=require("react/jsx-runtime"),_=require("react"),l=require("styled-components"),o=require("../../theme/theme.js"),b=require("../../hooks/useId.js");function z(e){return e&&e.__esModule?e:{default:e}}var s=z(l);const F=s.default.div`
  overflow: hidden;
`,q=l.keyframes`
  from { background-position: 0 0; }
  to { background-position: 20px 0; }
`,I=s.default.div`
  display: flex;
  font-size: ${o.getFontSize("default")};
  justify-content: space-between;
`,R=s.default.div`
  color: ${o.getColor("grey",140)};
  padding-right: 20px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,H=s.default.div`
  color: ${o.getColor("grey",120)};
  white-space: nowrap;
`,N=s.default.div`
  background: ${o.getColor("grey",60)};
  height: ${e=>D(e.$size)};
  overflow: hidden;
  position: relative;
`,S=(e,r)=>e==="brand"?o.getColor("purple",r?60:100):o.getColorForLevel(e,r?60:100),A=s.default.div.attrs(e=>({style:{width:`${e.width}%`}}))`
  ${({level:e,light:r})=>l.css`
    background: ${S(e,r)};
  `}

  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  transition: width 0.3s;

  ${e=>e.indeterminate&&l.css`
      background-image: linear-gradient(
        315deg,
        rgba(255, 255, 255, 0.6) 25%,
        rgba(255, 255, 255, 0.4) 25%,
        rgba(255, 255, 255, 0.4) 50%,
        rgba(255, 255, 255, 0.6) 50%,
        rgba(255, 255, 255, 0.6) 75%,
        rgba(255, 255, 255, 0.4) 75%,
        rgba(255, 255, 255, 0.4) 100%
      );
      background-size: 20px 20px;
      transition: width 200ms ease;
      animation: ${q} 1s linear infinite;
    `}
`,D=e=>{switch(e){case"large":return"10px";case"small":default:return"4px"}},p=e=>e==="indeterminate"||e>100?100:e<0?0:e,M=_.forwardRef((T,B)=>{var c=T,{level:e,percent:r,title:i,progressLabel:t,light:w=!1,size:x="small"}=c,$=v(c,["level","percent","title","progressLabel","light","size"]);const y=b.useId("label_"),P=b.useId("progress_"),n={};return r!=="indeterminate"&&isNaN(r)&&(r="indeterminate"),r!=="indeterminate"&&(n["aria-valuenow"]=p(r),n["aria-valuemin"]=0,n["aria-valuemax"]=100),a.jsxs(F,g(u({ref:B},$),{children:[(i||t)&&a.jsxs(I,{children:[a.jsx(R,{title:i,id:y,children:i}),t&&a.jsx(H,{title:t,children:t})]}),a.jsx(N,g(u({id:P},n),{role:"progressbar",$size:x,children:a.jsx(A,{level:e,light:w,indeterminate:r==="indeterminate",width:p(r)})}))]}))});exports.ProgressBar=M;
