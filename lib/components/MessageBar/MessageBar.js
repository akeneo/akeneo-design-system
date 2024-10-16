"use strict";var t=require("react/jsx-runtime"),n=require("react"),h=require("styled-components"),r=require("../../theme/theme.js"),O=require("../../icons/CheckIcon.js"),z=require("../../icons/CloseIcon.js"),_=require("../../icons/DangerIcon.js"),F=require("../../icons/InfoIcon.js"),R=require("../../hooks/useAutoFocus.js");function $(e){return e&&e.__esModule?e:{default:e}}var y=$(n),s=$(h);const w=s.default.div`
  padding: 0 25px;
  display: inline-flex;
`,S=s.default.svg.attrs(({$ratio:e})=>({style:{strokeDashoffset:`calc(100% * ${Math.PI*e-Math.PI})`}}))`
  position: absolute;
  overflow: visible;
  top: -10%;
  left: -10%;
  width: 120%;
  height: 120%;

  circle {
    fill: transparent;
    stroke: ${({$level:e})=>g(e)};
    stroke-linecap: round;
    stroke-width: 5%;
    stroke-dasharray: calc(100% * ${Math.PI});
    transform: rotate(-88deg);
    transform-origin: 50% 50%;
    transition: all 1s linear;
  }
`,C=s.default.div`
  padding: 10px 20px;
  font-size: ${r.getFontSize("small")};
  border-left: 1px solid;
  flex: 1;
  line-height: 1.5;

  a {
    color: ${r.getColor("grey",140)};
  }
`,b=s.default.div`
  font-size: ${r.getFontSize("big")};
  margin-bottom: 4px;
`,M=s.default.div`
  font-weight: 100;
`,f=s.default(z.CloseIcon)``,T=s.default.button`
  position: relative;
  width: 24px;
  height: 24px;
  color: ${r.getColor("grey",100)};
  border: 0;
  background: none;
  cursor: pointer;
  display: inline-flex;
  font-size: ${r.getFontSize("bigger")};

  & > * {
    position: absolute;
    line-height: 24px;
    width: 100%;
    top: 0;
    left: 0;
    transition: opacity 0.2s ease-in-out;
  }

  ${f} {
    opacity: ${({$showIcon:e})=>e?1:0};
  }

  :hover {
    ${f} {
      opacity: 1;
    }
    ${M} {
      opacity: 0;
    }
  }
`,E=h.keyframes`
  0% {
    transform: translateX(0);
  }
  75% {
    transform: translateX(calc(100% + 50px));
    max-height: 150px;
    opacity: 0;
  }
  100% {
    transform: translateX(calc(100% + 50px));
    max-height: 0;
    opacity: 0;
  }
`,X=h.keyframes`
  0% {
    transform: translateX(calc(100% + 50px));
  }
  100% {
    transform: translateX(0);
  }
`,j=1e3,P=s.default.div`
  animation: ${({$unmounting:e})=>e?E:X}
    ${j}ms forwards;
  max-height: 150px;
`,L=({children:e})=>{if(e.type!==k)throw new Error("Only MessageBar element can be passed to AnimateMessageBar");const[a,o]=n.useState(!1),i=()=>{setTimeout(()=>o(!0),0),setTimeout(()=>{e.props.onClose()},j)};return t.jsx(P,{$unmounting:a,children:y.default.cloneElement(e,{onClose:i})})},N=s.default.div`
  display: flex;
  align-items: center;
  min-width: 400px;
  max-width: 500px;
  padding: 10px 20px 10px 0;
  box-shadow: 2px 4px 8px 0 rgba(9, 30, 66, 0.25);
  background-color: ${r.getColor("white")};

  ${b}, ${w} {
    color: ${({$level:e})=>g(e)};
  }

  ${C} {
    border-color: ${({$level:e})=>g(e)};
  }
`,g=e=>{switch(e){case"info":return r.getColor("blue",100);case"success":return r.getColor("green",100);case"warning":return r.getColor("yellow",120);case"error":return r.getColor("red",100)}},U=e=>{switch(e){case"success":case"info":case"warning":return 5;case"error":return 8}},H=e=>{switch(e){case"success":return t.jsx(O.CheckIcon,{});case"info":return t.jsx(F.InfoIcon,{});case"warning":case"error":return t.jsx(_.DangerIcon,{})}},G=()=>{const[e,a]=n.useState(!1),o=n.useCallback(()=>{a(!0)},[]),i=n.useCallback(()=>{a(!1)},[]);return[e,o,i]},k=({level:e="info",title:a,icon:o,dismissTitle:i,onClose:p,children:A})=>{const l=U(e),[u,x]=n.useState(l),[m,q,B]=G();n.useEffect(()=>{const c=setInterval(()=>x(d=>0>d?(clearInterval(c),p(),d):d-1),1e3);if(m){clearInterval(c);return}return()=>clearInterval(c)},[m]),n.useEffect(()=>{x(c=>c-1)},[]);const v=n.useRef(null);R.useAutoFocus(v);const I=u===-1,D=I?"":Math.min(u+1,l);return t.jsxs(N,{ref:v,tabIndex:-1,role:e==="error"?"alert":"status",$level:e,onMouseOver:q,onMouseOut:B,children:[t.jsx(w,{"aria-hidden":"true",children:y.default.cloneElement(o!=null?o:H(e),{size:24})}),t.jsxs(C,{children:[t.jsx(b,{children:a}),A]}),t.jsxs(T,{onClick:p,$showIcon:I,title:i,children:[t.jsxs(M,{"aria-hidden":"true",children:[D,t.jsx(S,{$ratio:Math.max(0,u/l),$level:e,children:t.jsx("circle",{r:"50%",cx:"50%",cy:"50%"})})]}),t.jsx(f,{size:24})]})]})};exports.AnimateMessageBar=L;exports.MessageBar=k;
