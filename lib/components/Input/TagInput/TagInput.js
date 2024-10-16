"use strict";var P=Object.defineProperty;var x=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var R=(e,i,s)=>i in e?P(e,i,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[i]=s,K=(e,i)=>{for(var s in i||(i={}))v.call(i,s)&&R(e,s,i[s]);if(x)for(var s of x(i))E.call(i,s)&&R(e,s,i[s]);return e};var D=(e,i)=>{var s={};for(var r in e)v.call(e,r)&&i.indexOf(r)<0&&(s[r]=e[r]);if(e!=null&&x)for(var r of x(e))i.indexOf(r)<0&&E.call(e,r)&&(s[r]=e[r]);return s};var c=require("react/jsx-runtime"),u=require("react"),U=require("styled-components"),n=require("../../../theme/theme.js"),V=require("../../../icons/CloseIcon.js"),W=require("../../../icons/LockIcon.js"),G=require("../../../shared/array.js"),T=require("../../../shared/key.js");function H(e){return e&&e.__esModule?e:{default:e}}var g=H(U);const J=g.default(V.CloseIcon)`
  min-width: 12px;
  width: 12px;
  height: 12px;
  margin-right: 2px;
  cursor: pointer;
  color: ${({$isErrored:e})=>e?n.getColor("red",100):n.getColor("grey",120)};
`,N=g.default.ul`
  border: 1px solid ${({invalid:e})=>e?n.getColor("red",100):n.getColor("grey",80)};
  border-radius: 2px;
  padding: 4px;
  display: flex;
  flex-wrap: wrap;
  min-height: 40px;
  gap: 5px;
  box-sizing: border-box;
  background: ${({readOnly:e})=>e?n.getColor("grey",20):n.getColor("white")};
  position: relative;
  width: 100%;
  margin: 0;

  &:focus-within {
    box-shadow: 0 0 0 2px ${n.getColor("blue",40)};
  }
`,Q=g.default.li`
  list-style-type: none;
  padding: ${({readOnly:e})=>e?"3px 17px 3px 17px":"3px 17px 3px 4px"};
  border: 1px ${({isErrored:e})=>e?n.getColor("red",80):n.getColor("grey",80)} solid;
  background-color: ${({isSelected:e,isErrored:i})=>i?n.getColor("red",20):e?n.getColor("grey",40):n.getColor("grey",20)};
  display: flex;
  align-items: center;
  height: 30px;
  box-sizing: border-box;
  max-width: 100%;
  color: ${({readOnly:e,isErrored:i})=>i?n.getColor("red",100):e?n.getColor("grey",100):n.getColor("grey",140)};
`,X=g.default.span`
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Y=g.default.li`
  list-style-type: none;
  color: ${n.getColor("grey",120)};
  border: 0;
  flex: 1;
  padding: ${({hasTags:e})=>e?"0":"0 11px"};
  align-items: center;
  display: flex;

  > input {
    border: 0;
    outline: 0;
    color: ${n.getColor("grey",120)};
    background-color: transparent;
    width: 100%;

    &::placeholder {
      opacity: 1;
      color: ${n.getColor("grey",100)};
      font-family: ${n.getFontFamily("default")};
    }
  }
`,Z=g.default(W.LockIcon)`
  position: absolute;
  right: 0;
  top: 0;
  margin: 11px;
  color: ${n.getColor("grey",100)};
`,O=ee=>{var k=ee,{onChange:e,placeholder:i,invalid:s,value:r=[],readOnly:a,onSubmit:h,separators:L=["\\s",",",";"],labels:y,invalidValue:b=[]}=k,_=D(k,["onChange","placeholder","invalid","value","readOnly","onSubmit","separators","labels","invalidValue"]);const[d,I]=u.useState(!1),l=u.useRef(null),C=u.useRef(null),$=u.useRef(null),z=t=>{const o=t.currentTarget.value;if(o!==""){const p=o.split(new RegExp(`[${L.join("")}]+`,"g"));if(p.length===1)return;const m=p.filter(f=>f.trim()!=="");w([...r,...m])}},A=t=>{const o=t.currentTarget.value.trim();o!==""&&w([...r,o])},w=t=>{t=G.arrayUnique(t),e(t),l&&l.current&&(l.current.value="")},B=t=>{const o=[...r];o.splice(t,1),e(o)},j=t=>{l&&l.current&&(C&&C.current===t.target||$&&$.current===t.target)&&l.current.focus()},F=t=>{var f,q;const o=(q=(f=l==null?void 0:l.current)==null?void 0:f.value.trim())!=null?q:"";if(T.Key.Enter===t.key&&!d&&!a){o===""?h==null||h():w([...r,o]);return}const p=[T.Key.Backspace.toString(),T.Key.Delete.toString()].includes(t.key),m=r.length===0;if(!p||m||o!==""){I(!1);return}if(d){const M=r.slice(0,r.length-1);e(M)}I(!d)},S=u.useCallback(t=>{var o;return typeof y=="undefined"?t:(o=y[t])!=null?o:`[${t}]`},[y]);return c.jsxs(N,{"data-testid":"tagInputContainer",ref:C,invalid:s,onClick:j,readOnly:a,children:[r.map((t,o)=>c.jsxs(Q,{"data-testid":"tag",isSelected:o===r.length-1&&d,readOnly:a,isErrored:b.includes(t),children:[!a&&c.jsx(J,{onClick:()=>B(o),"data-testid":`remove-${o}`,$isErrored:b.includes(t)}),c.jsx(X,{children:S(t)})]},`${t}-${o}`)),c.jsxs(Y,{ref:$,onClick:j,hasTags:r.length>0,children:[c.jsx("input",K({type:"text","data-testid":"tag-input",ref:l,placeholder:r.length===0?i:"",onKeyDown:F,onChange:z,onBlurCapture:A,"aria-invalid":s,readOnly:a,disabled:a},_)),a&&c.jsx(Z,{size:16})]})]})};exports.TagInput=O;
