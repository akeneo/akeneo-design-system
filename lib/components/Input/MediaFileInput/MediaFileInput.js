"use strict";var re=Object.defineProperty;var m=Object.getOwnPropertySymbols;var C=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable;var B=(e,t,o)=>t in e?re(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,P=(e,t)=>{for(var o in t||(t={}))C.call(t,o)&&B(e,o,t[o]);if(m)for(var o of m(t))z.call(t,o)&&B(e,o,t[o]);return e};var _=(e,t)=>{var o={};for(var i in e)C.call(e,i)&&t.indexOf(i)<0&&(o[i]=e[i]);if(e!=null&&m)for(var i of m(e))t.indexOf(i)<0&&z.call(e,i)&&(o[i]=e[i]);return o};var k=(e,t,o)=>new Promise((i,f)=>{var I=s=>{try{g(o.next(s))}catch(x){f(x)}},h=s=>{try{g(o.throw(s))}catch(x){f(x)}},g=s=>s.done?i(s.value):Promise.resolve(s.value).then(I,h);g((o=o.apply(e,t)).next())});var r=require("react/jsx-runtime"),u=require("react"),j=require("styled-components"),ie=require("../../../shared/key.js"),c=require("../../../theme/theme.js"),A=require("../../../illustrations/ImportIllustration.js"),E=require("../../IconButton/IconButton.js"),le=require("../../Image/Image.js"),se=require("../../ProgressBar/ProgressBar.js"),ne=require("../../../icons/CloseIcon.js"),ae=require("../../../icons/LockIcon.js"),U=require("../../../hooks/useBooleanState.js"),ce=require("../../../hooks/useShortcut.js"),ue=require("../../../static/illustrations/DefaultPicture.svg.js");function K(e){return e&&e.__esModule?e:{default:e}}var D=K(u),d=K(j);const de=d.default.div`
  position: relative;
  display: flex;
  flex-direction: ${({isCompact:e})=>e?"row":"column"};
  align-items: center;
  padding: 12px;
  padding-top: ${({isCompact:e})=>e?12:20}px;
  border: 1px solid ${({invalid:e})=>e?c.getColor("red",100):c.getColor("grey",80)};
  border-radius: 2px;
  height: ${({isCompact:e})=>e?74:180}px;
  gap: ${({isCompact:e})=>e?10:0}px;
  outline-style: none;
  box-sizing: border-box;
  background: ${({readOnly:e})=>e?c.getColor("grey",20):c.getColor("white")};
  cursor: ${({readOnly:e})=>e?"not-allowed":"auto"};
  overflow: hidden;

  ${({readOnly:e})=>!e&&j.css`
      &:focus {
        box-shadow: 0 0 0 2px ${c.getColor("blue",40)};
      }
      &:hover {
        ${A.ImportIllustration.animatedMixin}
      }
    `}
`,pe=d.default.input`
  position: absolute;
  opacity: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  cursor: ${({readOnly:e})=>e?"not-allowed":"pointer"};
`,V=d.default.div`
  font-size: ${c.getFontSize("default")};
  font-weight: normal;
  color: ${c.getColor("grey",140)};
  flex-grow: 1;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`,L=d.default(V)`
  color: ${c.getColor("grey",120)};
`,ge=d.default(ae.LockIcon)`
  margin-left: 4px;
`,xe=d.default.div`
  ${({isCompact:e})=>!e&&j.css`
      position: absolute;
      top: 8px;
      right: 8px;
    `}

  display: flex;
  gap: 2px;
  align-items: center;
  color: ${c.getColor("grey",100)};
`,fe=d.default(se.ProgressBar)`
  flex: 1;
  width: 100%;
`,T=d.default(le.Image)`
  border: none;
`,he=D.default.forwardRef((me,a)=>{var $=me,{onChange:e,value:t,thumbnailUrl:o,uploadingLabel:i,uploader:f,size:I="default",placeholder:h,clearTitle:g,children:s,uploadErrorLabel:x,invalid:G=!1,readOnly:n=!1,clearable:H=!0,className:J}=$,N=_($,["onChange","value","thumbnailUrl","uploadingLabel","uploader","size","placeholder","clearTitle","children","uploadErrorLabel","invalid","readOnly","clearable","className"]);const b=u.useRef(null),Q=u.useRef(null),p=I==="small",[y,W,q]=U.useBooleanState(!1),[X,M]=u.useState(o),[S,Y,Z]=U.useBooleanState(!1),[w,v]=u.useState(0);a=a!=null?a:Q,u.useEffect(()=>{M(o)},[o]);const R=()=>{a&&typeof a!="function"&&a.current&&!n&&e&&a.current.click()},O=l=>k(exports,null,function*(){W();try{const F=yield f(l,v);Z(),v(0),q(),e==null||e(F)}catch(F){v(0),q(),Y(),console.log(F)}}),ee=l=>{l.preventDefault(),l.stopPropagation(),l.target.files&&O(l.target.files[0])},te=()=>!n&&(e==null?void 0:e(null));ce.useShortcut(ie.Key.Enter,R,b);const oe=D.default.Children.map(s,l=>u.isValidElement(l)&&E.IconButton===l.type?u.cloneElement(l,{level:"tertiary",ghost:"borderless",size:"small"}):null);return r.jsxs(de,{ref:b,tabIndex:n?-1:0,invalid:G||S,readOnly:n,isCompact:p,className:J,children:[!t&&!y&&r.jsx(pe,P({ref:a,type:"file",onChange:ee,readOnly:n,disabled:n,placeholder:h},N)),y?r.jsxs(r.Fragment,{children:[r.jsx(T,{height:p?47:120,width:p?47:120,src:null,alt:i}),r.jsx(fe,{title:i,progressLabel:`${Math.round(w*100)}%`,level:"primary",percent:w*100})]}):t!==null?r.jsxs(r.Fragment,{children:[r.jsx(T,{height:p?47:120,width:p?47:120,src:X,alt:t.originalFilename,fit:"contain",onError:()=>M(ue)}),n?r.jsx(L,{children:t.originalFilename}):r.jsx(V,{title:t.originalFilename,children:t.originalFilename})]}):r.jsxs(r.Fragment,{children:[r.jsx(A.ImportIllustration,{size:p?47:140}),r.jsx(L,{children:S?x:h})]}),r.jsxs(xe,{isCompact:p,children:[t&&r.jsxs(r.Fragment,{children:[!n&&H&&r.jsx(E.IconButton,{size:"small",level:"tertiary",ghost:"borderless",icon:r.jsx(ne.CloseIcon,{}),title:g,onClick:te}),oe]}),n&&r.jsx(ge,{size:16})]})]})});exports.MediaFileInput=he;
