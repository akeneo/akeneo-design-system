"use strict";var k=Object.defineProperty,P=Object.defineProperties;var _=Object.getOwnPropertyDescriptors;var d=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable;var f=(e,r,i)=>r in e?k(e,r,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[r]=i,u=(e,r)=>{for(var i in r||(r={}))h.call(r,i)&&f(e,i,r[i]);if(d)for(var i of d(r))m.call(r,i)&&f(e,i,r[i]);return e},g=(e,r)=>P(e,_(r));var v=(e,r)=>{var i={};for(var t in e)h.call(e,t)&&r.indexOf(t)<0&&(i[t]=e[t]);if(e!=null&&d)for(var t of d(e))r.indexOf(t)<0&&m.call(e,t)&&(i[t]=e[t]);return i};var a=require("react/jsx-runtime"),q=require("react"),l=require("styled-components"),o=require("../../theme/theme.js"),w=require("../../hooks/useId.js");function z(e){return e&&e.__esModule?e:{default:e}}var s=z(l);const C=s.default.div`
  overflow: hidden;
`,F=l.keyframes`
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
  height: ${e=>A(e.size)};
  overflow: hidden;
  position: relative;
`,S=s.default.div.attrs(e=>({style:{width:`${e.width}%`}}))`
  ${({level:e,light:r})=>l.css`
    background: ${o.getColorForLevel(e,r?60:100)};
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
      animation: ${F} 1s linear infinite;
    `}
`,A=e=>{switch(e){case"large":return"10px";case"small":default:return"4px"}},b=e=>e==="indeterminate"||e>100?100:e<0?0:e,D=q.forwardRef((M,y)=>{var c=M,{level:e,percent:r,title:i,progressLabel:t,light:x=!1,size:p="small"}=c,$=v(c,["level","percent","title","progressLabel","light","size"]);const B=w.useId("label_"),j=w.useId("progress_"),n={};return r!=="indeterminate"&&isNaN(r)&&(r="indeterminate"),r!=="indeterminate"&&(n["aria-valuenow"]=b(r),n["aria-valuemin"]=0,n["aria-valuemax"]=100),a.jsxs(C,g(u({ref:y},$),{children:[(i||t)&&a.jsxs(I,{children:[a.jsx(R,{title:i,id:B,children:i}),t&&a.jsx(H,{title:t,children:t})]}),a.jsx(N,g(u({id:j},n),{role:"progressbar",size:p,children:a.jsx(S,{level:e,light:x,indeterminate:r==="indeterminate",width:b(r)})}))]}))});exports.ProgressBar=D;
