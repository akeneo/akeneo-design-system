"use strict";var M=Object.defineProperty;var C=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,K=Object.prototype.propertyIsEnumerable;var E=(e,s,i)=>s in e?M(e,s,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[s]=i,L=(e,s)=>{for(var i in s||(s={}))v.call(s,i)&&E(e,i,s[i]);if(C)for(var i of C(s))K.call(s,i)&&E(e,i,s[i]);return e};var _=(e,s)=>{var i={};for(var o in e)v.call(e,o)&&s.indexOf(o)<0&&(i[o]=e[o]);if(e!=null&&C)for(var o of C(e))s.indexOf(o)<0&&K.call(e,o)&&(i[o]=e[o]);return i};var c=require("react/jsx-runtime"),x=require("react"),U=require("styled-components"),n=require("../../../theme/theme.js"),V=require("../../../icons/CloseIcon.js"),G=require("../../../icons/LockIcon.js"),H=require("../../../shared/array.js"),k=require("../../../shared/key.js");function J(e){return e&&e.__esModule?e:{default:e}}var d=J(U);const N=d.default(V.CloseIcon)`
  min-width: 12px;
  width: 12px;
  height: 12px;
  margin-right: 2px;
  cursor: pointer;
  color: ${({$isErrored:e})=>e?n.getColor("red",100):n.getColor("grey",120)};
`,Q=d.default.ul`
  border: 1px solid ${({$invalid:e})=>e?n.getColor("red",100):n.getColor("grey",80)};
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
`,X=d.default.li`
  list-style-type: none;
  padding: ${({readOnly:e})=>e?"3px 17px 3px 17px":"3px 17px 3px 4px"};
  border: 1px ${({$isErrored:e})=>e?n.getColor("red",80):n.getColor("grey",80)} solid;
  background-color: ${({$isSelected:e,$isErrored:s})=>s?n.getColor("red",20):e?n.getColor("grey",40):n.getColor("grey",20)};
  display: flex;
  align-items: center;
  height: 30px;
  box-sizing: border-box;
  max-width: 100%;
  color: ${({readOnly:e,$isErrored:s})=>s?n.getColor("red",100):e?n.getColor("grey",100):n.getColor("grey",140)};
`,Y=d.default.span`
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Z=d.default.li`
  list-style-type: none;
  color: ${n.getColor("grey",120)};
  border: 0;
  flex: 1;
  padding: ${({$hasTags:e})=>e?"0":"0 11px"};
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
`,O=d.default(G.LockIcon)`
  position: absolute;
  right: 0;
  top: 0;
  margin: 11px;
  color: ${n.getColor("grey",100)};
`,ee=te=>{var R=te,{onChange:e,placeholder:s,invalid:i,value:o=[],readOnly:l,onSubmit:$,separators:I=["\\s",",",";"],labels:w,invalidValue:j=[]}=R,P=_(R,["onChange","placeholder","invalid","value","readOnly","onSubmit","separators","labels","invalidValue"]);const[h,q]=x.useState(!1),a=x.useRef(null),T=x.useRef(null),m=x.useRef(null),z=t=>{const r=t.currentTarget.value;if(r!==""){const g=r.split(new RegExp(`[${I.join("")}]+`,"g"));if(g.length===1)return;const p=g.filter(u=>u.trim()!=="");y([...o,...p])}},A=t=>{const r=t.currentTarget.value.trim();r!==""&&y([...o,r])},B=t=>{const r=t.clipboardData.getData("text");if(r!==""){const g=I.join(""),p=new RegExp(`[${g}]+`,"g"),f=r.split(p).filter(b=>b.trim()!=="");f.length>0&&(t.preventDefault(),y([...o,...f]))}},y=t=>{t=H.arrayUnique(t),e(t),a&&a.current&&(a.current.value="")},F=t=>{const r=[...o];r.splice(t,1),e(r)},D=t=>{a&&a.current&&(T&&T.current===t.target||m&&m.current===t.target)&&a.current.focus()},S=t=>{var u,f;const r=(f=(u=a==null?void 0:a.current)==null?void 0:u.value.trim())!=null?f:"";if(k.Key.Enter===t.key&&!h&&!l){r===""?$==null||$():y([...o,r]);return}const g=[k.Key.Backspace.toString(),k.Key.Delete.toString()].includes(t.key),p=o.length===0;if(!g||p||r!==""){q(!1);return}if(h){const b=o.slice(0,o.length-1);e(b)}q(!h)},W=x.useCallback(t=>{var r;return typeof w=="undefined"?t:(r=w[t])!=null?r:`[${t}]`},[w]);return c.jsxs(Q,{"data-testid":"tagInputContainer",ref:T,$invalid:i,onClick:D,readOnly:l,children:[o.map((t,r)=>c.jsxs(X,{"data-testid":"tag",$isSelected:r===o.length-1&&h,readOnly:l,$isErrored:j.includes(t),children:[!l&&c.jsx(N,{onClick:()=>F(r),"data-testid":`remove-${r}`,$isErrored:j.includes(t)}),c.jsx(Y,{children:W(t)})]},`${t}-${r}`)),c.jsxs(Z,{ref:m,onClick:D,$hasTags:o.length>0,children:[c.jsx("input",L({type:"text","data-testid":"tag-input",ref:a,placeholder:o.length===0?s:"",onKeyDown:S,onChange:z,onBlurCapture:A,onPaste:B,"aria-invalid":i,readOnly:l,disabled:l},P)),l&&c.jsx(O,{size:16})]})]})};exports.TagInput=ee;
