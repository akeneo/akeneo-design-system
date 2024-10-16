"use strict";var z=Object.defineProperty;var d=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var f=(e,t,r)=>t in e?z(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,I=(e,t)=>{for(var r in t||(t={}))h.call(t,r)&&f(e,r,t[r]);if(d)for(var r of d(t))v.call(t,r)&&f(e,r,t[r]);return e};var y=(e,t)=>{var r={};for(var o in e)h.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(e!=null&&d)for(var o of d(e))t.indexOf(o)<0&&v.call(e,o)&&(r[o]=e[o]);return r};var i=require("react/jsx-runtime"),a=require("react"),q=require("styled-components"),P=require("../../../shared/key.js"),n=require("../../../theme/theme.js"),T=require("../../../illustrations/DefaultPictureIllustration.js"),w=require("../../IconButton/IconButton.js"),B=require("../../Image/Image.js"),R=require("../../../icons/LockIcon.js"),A=require("../../../hooks/useShortcut.js"),F=require("../../../static/illustrations/DefaultPicture.svg.js");function b(e){return e&&e.__esModule?e:{default:e}}var C=b(a),c=b(q);const K=c.default.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px;
  border: 1px solid ${({invalid:e})=>e?n.getColor("red",100):n.getColor("grey",80)};
  border-radius: 2px;
  height: 74px;
  gap: 10px;
  outline-style: none;
  box-sizing: border-box;
  background: ${({readOnly:e})=>e?n.getColor("grey",20):n.getColor("white")};
  cursor: ${({readOnly:e})=>e?"not-allowed":"auto"};
  overflow: hidden;
  ${({readOnly:e})=>!e&&q.css`
      &:focus-within {
        box-shadow: 0 0 0 2px ${n.getColor("blue",40)};
      }
    `}
`,V=c.default.input`
  border: none;
  flex: 1;
  outline: none;
  color: ${({readOnly:e})=>e?n.getColor("grey",100):n.getColor("grey",140)};
  background: transparent;
  cursor: ${({readOnly:e})=>e?"not-allowed":"auto"};
  height: 100%;

  &::placeholder {
    opacity: 1;
    color: ${n.getColor("grey",100)};
  }
`,G=c.default(R.LockIcon)`
  margin-left: 4px;
`,H=c.default.div`
  display: flex;
  gap: 2px;
  align-items: center;
  color: ${n.getColor("grey",100)};
`,J=c.default(B.Image)`
  border: none;
`,N=C.default.forwardRef((Q,s)=>{var p=Q,{onChange:e,value:t,placeholder:r,thumbnailUrl:o,children:k,invalid:m=!1,readOnly:l=!1,onSubmit:g}=p,$=y(p,["onChange","value","placeholder","thumbnailUrl","children","invalid","readOnly","onSubmit"]);const j=a.useRef(null);s=s!=null?s:j;const _=a.useRef(null),[E,x]=a.useState(o);a.useEffect(()=>{x(o)},[o]);const L=C.default.Children.map(k,u=>a.isValidElement(u)&&w.IconButton===u.type?a.cloneElement(u,{level:"tertiary",ghost:"borderless",size:"small"}):null),D=u=>{!l&&e&&e(u.currentTarget.value)},M=()=>{!l&&(g==null||g())};return A.useShortcut(P.Key.Enter,M,s),i.jsx(i.Fragment,{children:i.jsxs(K,{ref:_,tabIndex:l?-1:0,invalid:m,readOnly:l,children:[t!==""?i.jsx(J,{src:E,height:47,width:47,alt:t,onError:()=>x(F)}):i.jsx(T.DefaultPictureIllustration,{title:r,size:47}),i.jsx(V,I({ref:s,type:"text",onChange:D,readOnly:l,disabled:l,value:t,placeholder:r},$)),i.jsxs(H,{children:[t!==""&&L,l&&i.jsx(G,{size:16})]})]})})});exports.MediaLinkInput=N;
