"use strict";var i=require("react/jsx-runtime"),h=require("react"),w=require("styled-components"),z=require("../../../icons/CloseIcon.js"),C=require("../../../icons/LockIcon.js"),r=require("../../../theme/theme.js"),S=require("../../IconButton/IconButton.js"),_=require("../../../hooks/useBooleanState.js"),R=require("../../../hooks/useShortcut.js"),E=require("../../../hooks/useTheme.js"),T=require("../../../shared/key.js");function y(e){return e&&e.__esModule?e:{default:e}}var D=y(h),l=y(w);const F=l.default.ul`
  border: 1px solid ${({invalid:e})=>e?r.getColor("red",100):r.getColor("grey",80)};
  border-radius: 2px;
  padding: 4px 30px 4px 4px;
  display: flex;
  flex-wrap: wrap;
  min-height: 40px;
  gap: 5px;
  box-sizing: border-box;
  background: ${({readOnly:e})=>e?r.getColor("grey",20):r.getColor("white")};
  position: relative;
  margin: 0;
  max-height: 440px;
  overflow-y: auto;
  &:focus-within {
    box-shadow: 0 0 0 2px ${r.getColor("blue",40)};
  }
`,K=l.default.li`
  list-style-type: none;
  padding: 3px 15px;
  padding-left: ${({readOnly:e})=>e?"15px":"4px"};
  border: 1px ${({isErrored:e})=>e?r.getColor("red",80):r.getColor("grey",80)} solid;
  background-color: ${({isSelected:e,isErrored:o})=>o?r.getColor("red",20):e?r.getColor("grey",40):r.getColor("grey",20)};
  display: flex;
  align-items: center;
  height: 30px;
  box-sizing: border-box;
  color: ${({readOnly:e,isErrored:o,isLocked:g})=>o?r.getColor("red",100):e||g?r.getColor("grey",100):r.getColor("grey",140)};
`,b=l.default.input`
  width: 100%;
  height: 100%;
  border: 0;
  outline: 0;
  color: ${r.getColor("grey",120)};
  background-color: transparent;
  font-size: ${r.getFontSize("default")};

  &::placeholder {
    opacity: 1;
    color: ${r.getColor("grey",100)};
  }
`,M=l.default.li`
  list-style-type: none;
  color: ${r.getColor("grey",120)};
  border: 0;
  flex: 1;
  padding: 0;
  align-items: center;
  display: flex;

  :first-child > ${b} {
    padding-left: 11px;
  }
`,A=l.default(C.LockIcon)`
  position: absolute;
  right: 0;
  top: 0;
  margin: 11px;
  color: ${r.getColor("grey",100)};
`,G=l.default(C.LockIcon)`
  padding-right: 5px;
`,H=l.default(S.IconButton)`
  background-color: transparent;
  margin-left: -3px;
  margin-right: 1px;
  color: ${({isErrored:e})=>e?r.getColor("red",100):r.getColor("grey",100)};
`,J=D.default.forwardRef(({id:e,value:o,invalidValue:g,invalid:c,readOnly:s,placeholder:m,searchValue:d,removeLabel:$,onRemove:a,onSearchChange:I,onFocus:q,lockedValues:n},p)=>{const u=E.useTheme(),[x,v,f]=_.useBooleanState(),j=t=>I(t.target.value),B=()=>{d!==""||o.length===0||(x?a(o[o.length-1].code):v())};return h.useEffect(()=>{f()},[o,d]),R.useShortcut(T.Key.Backspace,B,p),i.jsxs(F,{invalid:c,readOnly:s,children:[o.map((t,L)=>i.jsxs(K,{readOnly:s,isLocked:n==null?void 0:n.includes(t.code),isErrored:g.includes(t.code),isSelected:L===o.length-1&&x,children:[!s&&!(n!=null&&n.includes(t.code))&&i.jsx(H,{title:$,ghost:"borderless",size:"small",level:"tertiary",icon:i.jsx(z.CloseIcon,{color:g.includes(t.code)?u.color.red100:u.color.grey100}),onClick:()=>a(t.code),isErrored:g.includes(t.code)}),(n==null?void 0:n.includes(t.code))&&i.jsx(G,{size:16}),t.label]},t.code)),i.jsxs(M,{children:[i.jsx(b,{type:"text",id:e,value:d,ref:p,placeholder:o.length===0?m:void 0,onChange:j,onBlur:f,"aria-invalid":c,readOnly:s,disabled:s,onFocus:q}),s&&i.jsx(A,{size:16})]})]})});exports.ChipInput=J;
