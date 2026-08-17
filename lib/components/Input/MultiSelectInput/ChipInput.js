"use strict";var i=require("react/jsx-runtime"),f=require("react"),z=require("styled-components"),S=require("../../../icons/CloseIcon.js"),C=require("../../../icons/LockIcon.js"),e=require("../../../theme/theme.js"),_=require("../../IconButton/IconButton.js"),R=require("../../../hooks/useBooleanState.js"),E=require("../../../hooks/useShortcut.js"),T=require("../../../hooks/useTheme.js"),D=require("../../../shared/key.js");function y(r){return r&&r.__esModule?r:{default:r}}var F=y(f),l=y(z);const K=l.default.ul`
  border: 1px solid ${({$invalid:r})=>r?e.getColor("red",100):e.getColor("grey",80)};
  border-radius: 2px;
  padding: 4px 30px 4px 4px;
  display: flex;
  flex-wrap: wrap;
  min-height: 40px;
  gap: 5px;
  box-sizing: border-box;
  background: ${({$readOnly:r})=>r?e.getColor("grey",20):e.getColor("white")};
  position: relative;
  margin: 0;
  max-height: 440px;
  overflow-y: auto;
  &:focus-within {
    box-shadow: 0 0 0 2px ${e.getColor("blue",40)};
  }
`,M=l.default.li`
  list-style-type: none;
  padding: 3px;
  border: 1px ${({$isErrored:r})=>r?e.getColor("red",80):e.getColor("grey",80)} solid;
  background-color: ${({$isSelected:r,$isErrored:t})=>t?e.getColor("red",20):r?e.getColor("grey",40):e.getColor("grey",20)};
  display: flex;
  align-items: center;
  height: 30px;
  max-width: 100%;
  box-sizing: border-box;
  color: ${({$readOnly:r,$isErrored:t,$isLocked:d})=>t?e.getColor("red",100):r||d?e.getColor("grey",100):e.getColor("grey",140)};
`,A=l.default.span`
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,b=l.default.input`
  width: 100%;
  height: 100%;
  border: 0;
  outline: 0;
  color: ${e.getColor("grey",120)};
  background-color: transparent;
  font-size: ${e.getFontSize("default")};

  &::placeholder {
    opacity: 1;
    color: ${e.getColor("grey",100)};
  }
`,G=l.default.li`
  list-style-type: none;
  color: ${e.getColor("grey",120)};
  border: 0;
  flex: 1;
  padding: 0;
  align-items: center;
  display: flex;

  :first-child > ${b} {
    padding-left: 11px;
  }
`,H=l.default(C.LockIcon)`
  position: absolute;
  right: 0;
  top: 0;
  margin: 11px;
  color: ${e.getColor("grey",100)};
`,J=l.default(C.LockIcon)`
  padding-right: 5px;
`,N=l.default(_.IconButton)`
  background-color: transparent;
  margin-left: -3px;
  margin-right: 1px;
  color: ${({$isErrored:r})=>r?e.getColor("red",100):e.getColor("grey",100)};
`,P=F.default.forwardRef(({id:r,value:t,invalidValue:d,invalid:g,readOnly:s,placeholder:$,searchValue:a,removeLabel:m,onRemove:c,onSearchChange:v,onPaste:w,onFocus:I,lockedValues:n},p)=>{const u=T.useTheme(),[x,q,h]=R.useBooleanState(),j=o=>v(o.target.value),L=()=>{a!==""||t.length===0||(x?c(t[t.length-1].code):q())};return f.useEffect(()=>{h()},[t,a]),E.useShortcut(D.Key.Backspace,L,p),i.jsxs(K,{$invalid:g,$readOnly:s,children:[t.map((o,B)=>i.jsxs(M,{title:o.label,$readOnly:s,$isLocked:n==null?void 0:n.includes(o.code),$isErrored:d.includes(o.code),$isSelected:B===t.length-1&&x,children:[!s&&!(n!=null&&n.includes(o.code))&&i.jsx(N,{title:m,ghost:"borderless",size:"small",level:"tertiary",icon:i.jsx(S.CloseIcon,{color:d.includes(o.code)?u.color.red100:u.color.grey100}),onClick:()=>c(o.code),$isErrored:d.includes(o.code)}),(n==null?void 0:n.includes(o.code))&&i.jsx(J,{size:16}),i.jsx(A,{children:o.label})]},o.code)),i.jsxs(G,{children:[i.jsx(b,{type:"text",id:r,value:a,ref:p,placeholder:t.length===0?$:void 0,onChange:j,onPaste:w,onBlur:h,"aria-invalid":g,readOnly:s,disabled:s,onFocus:I}),s&&i.jsx(H,{size:16})]})]})});exports.ChipInput=P;
