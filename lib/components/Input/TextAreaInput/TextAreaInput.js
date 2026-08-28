"use strict";var M=Object.defineProperty;var f=Object.getOwnPropertySymbols;var $=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable;var C=(e,t,o)=>t in e?M(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,w=(e,t)=>{for(var o in t||(t={}))$.call(t,o)&&C(e,o,t[o]);if(f)for(var o of f(t))m.call(t,o)&&C(e,o,t[o]);return e};var z=(e,t)=>{var o={};for(var n in e)$.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(e!=null&&f)for(var n of f(e))t.indexOf(n)<0&&m.call(e,n)&&(o[n]=e[n]);return o};var s=require("react/jsx-runtime"),i=require("react"),I=require("styled-components"),V=require("../../../icons/LockIcon.js"),l=require("../../../theme/theme.js"),B=require("../../IconButton/IconButton.js");function T(e){return e&&e.__esModule?e:{default:e}}var k=T(i),u=T(I);const j=u.default.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
`,F=I.css`
  border: 1px solid ${({$invalid:e})=>e?l.getColor("red",100):l.getColor("grey",80)};
  border-radius: 2px;
  color: ${({readOnly:e,isValueHidden:t})=>t?"transparent":e?l.getColor("grey",100):l.getColor("grey",140)};
  font-size: ${l.getFontSize("default")};
  line-height: 20px;
  width: 100%;
  box-sizing: border-box;
  font-family: inherit;
  outline-style: none;
  background: ${({readOnly:e})=>e?l.getColor("grey",20):l.getColor("white")};
  cursor: ${({readOnly:e})=>e?"not-allowed":"auto"};

  &:focus-within {
    box-shadow: 0 0 0 2px ${l.getColor("blue",40)};
  }

  a.rdw-dropdown-selectedtext > span {
    color: ${({readOnly:e})=>e?l.getColor("grey",100):l.getColor("grey",140)};
  }
`,_=u.default.textarea`
  ${F}
  resize: ${({$resizable:e})=>e?"both":"none"};
  height: 200px;
  padding: 10px 30px 10px 15px;

  &::placeholder {
    opacity: 1;
    color: ${l.getColor("grey",100)};
  }
`,H=u.default(_).attrs({as:"div",inert:""})`
  && {
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
    white-space: pre-wrap;
    word-break: break-word;
    resize: none;
    pointer-events: none;
    color: transparent;
    background: none;
    box-shadow: none;
    border-color: transparent;
    mix-blend-mode: multiply;
  }

  ${j}:focus-within & {
    display: none;
  }
`,N=u.default(V.LockIcon)`
  position: absolute;
  right: 0;
  top: 0;
  margin: 12px;
  color: ${l.getColor("grey",100)};
`,W={default:"grey100",warning:"yellow140",error:"red100"},D=u.default.div`
  font-size: ${l.getFontSize("small")};
  align-self: flex-end;
  color: ${({$variant:e})=>l.getColor(W[e])};
`,G=u.default.div`
  position: absolute;
  right: 0;
  top: 0;
  margin: 8px;
  color: ${l.getColor("grey",100)};
`,J=k.default.forwardRef((K,c)=>{var y=K,{value:e,invalid:t,onChange:o,readOnly:n,characterLeftLabel:h,children:q,characterLeftLabelVariant:R="default",resizable:E=!1,highlightable:g=!1}=y,x=z(y,["value","invalid","onChange","readOnly","characterLeftLabel","children","characterLeftLabelVariant","resizable","highlightable"]);const v=i.useRef(null),[d,A]=i.useState(null),L=i.useCallback(r=>{v.current=r,typeof c=="function"?c(r):c&&(c.current=r)},[c]),S=i.useCallback(r=>{!n&&o&&o(r.currentTarget.value)},[n,o]);i.useEffect(()=>{const r=v.current;if(!g||r===null||d===null)return;const p=()=>{d.style.width=`${r.offsetWidth}px`,d.style.height=`${r.offsetHeight}px`,d.scrollTop=r.scrollTop};p(),r.addEventListener("scroll",p);const a=typeof ResizeObserver=="undefined"?null:new ResizeObserver(p);return a==null||a.observe(r),()=>{r.removeEventListener("scroll",p),a==null||a.disconnect()}},[g,d]);const b=k.default.Children.map(q,r=>i.isValidElement(r)&&B.IconButton===r.type?i.cloneElement(r,{level:"tertiary",ghost:"borderless",size:"small"}):null);return s.jsxs(j,{children:[s.jsx(_,w({ref:L,value:e,onChange:S,type:"text",readOnly:n,disabled:n,"aria-invalid":t,$invalid:t,$resizable:E},x)),g&&!x.isValueHidden&&s.jsx(H,{ref:A,"aria-hidden":!0,className:x.className,children:e}),b&&s.jsx(G,{children:b}),n&&s.jsx(N,{size:16}),h&&s.jsx(D,{$variant:R,children:h})]})});exports.TextAreaInput=J;
