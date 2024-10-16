"use strict";var ae=Object.defineProperty,ce=Object.defineProperties;var de=Object.getOwnPropertyDescriptors;var I=Object.getOwnPropertySymbols;var F=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable;var N=(t,r,i)=>r in t?ae(t,r,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[r]=i,O=(t,r)=>{for(var i in r||(r={}))F.call(r,i)&&N(t,i,r[i]);if(I)for(var i of I(r))L.call(r,i)&&N(t,i,r[i]);return t},q=(t,r)=>ce(t,de(r));var R=(t,r)=>{var i={};for(var o in t)F.call(t,o)&&r.indexOf(o)<0&&(i[o]=t[o]);if(t!=null&&I)for(var o of I(t))r.indexOf(o)<0&&L.call(t,o)&&(i[o]=t[o]);return i};var s=require("react/jsx-runtime"),a=require("react"),fe=require("styled-components"),P=require("../../../shared/array.js"),z=require("../../../shared/key.js"),ve=require("../common/Overlay.js"),xe=require("../../IconButton/IconButton.js"),we=require("../../../hooks/useBooleanState.js"),K=require("../../../hooks/useShortcut.js"),u=require("../../../theme/theme.js"),ye=require("../../../icons/ArrowDownIcon.js"),ge=require("./ChipInput.js"),Ie=require("../../../hooks/usePagination.js");function U(t){return t&&t.__esModule?t:{default:t}}var _=U(a),f=U(fe);const Oe=f.default.div`
  width: 100%;

  & input[type='text'] {
    cursor: ${({readOnly:t})=>t?"not-allowed":"pointer"};
    background: ${({value:t,readOnly:r})=>t===null&&r?u.getColor("grey",20):"transparent"};

    &:focus {
      z-index: 2;
    }
  }
`,qe=f.default.div`
  position: relative;
`,Re=f.default.div`
  position: absolute;
  right: 8px;
  top: 0;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
`,$e=f.default.div`
  background: ${u.getColor("white")};
  height: 34px;
  padding: 0 20px;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${u.getColor("grey",120)};
  line-height: 34px;

  &:focus {
    color: ${u.getColor("grey",120)};
  }
  &:hover {
    background: ${u.getColor("grey",20)};
    color: ${u.getColor("brand",140)};
  }
  &:active {
    color: ${u.getColor("brand",100)};
    font-weight: 700;
  }
  &:disabled {
    color: ${u.getColor("grey",100)};
  }
`,be=f.default.div`
  background: ${u.getColor("white")};
  height: 34px;
  padding: 0 20px 0 0;
  align-items: center;
  gap: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${u.getColor("grey",100)};
  line-height: 34px;
  text-transform: uppercase;
`,je=f.default.div`
  background: ${u.getColor("white")};
  height: 20px;
  padding: 0 20px;
  align-items: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${u.getColor("grey",100)};
  line-height: 20px;
  text-align: center;
`,me=f.default.div`
  max-height: 320px;
  overflow-y: auto;
  padding-left: ${({withGroups:t})=>t?"20px":"0"};
`,W=i=>{var o=i,{children:t}=o,r=R(o,["children"]);return s.jsx("span",q(O({},r),{children:t}))},H=i=>{var o=i,{children:t}=o,r=R(o,["children"]);return s.jsx("span",q(O({},r),{children:t}))},h=ke=>{var V=ke,{id:t,placeholder:r,invalid:i,value:o,invalidValue:J=[],emptyResultLabel:Q,children:T=[],onChange:c,removeLabel:X,onSubmit:$,openLabel:Y,readOnly:v=!1,verticalPosition:Ee,onNextPage:Z,onSearchChange:n,disableInternalSearch:C=!1,lockedValues:S=[],"aria-labelledby":Me}=V,ee=R(V,["id","placeholder","invalid","value","invalidValue","emptyResultLabel","children","onChange","removeLabel","onSubmit","openLabel","readOnly","verticalPosition","onNextPage","onSearchChange","disableInternalSearch","lockedValues","aria-labelledby"]);const[B,w]=a.useState(""),[te,re]=a.useState(!1),[b,j,m]=we.useBooleanState(),x=a.useRef(null),A=a.useRef(null),D=a.useRef(null),E=a.useRef(null),M=_.default.Children.toArray(T).filter(e=>a.isValidElement(e)),y=e=>(e==null?void 0:e.type.displayName)==="MultiSelectInput.OptionGroup",k=e=>(e==null?void 0:e.type.displayName)==="MultiSelectInput.Option",oe=M.reduce((e,l)=>{if(y(l))return e;const d=l.props.children,g=l.props.value;if(typeof d!="string")throw new Error("Multi select only accepts string as Option");if(g in e)throw new Error(`Duplicate option value ${g}`);return e[g]={code:g,label:d},e},{}),p=C?M:M.filter(e=>{const l=e.props.value,d=l+e.props.children;return y(e)||!o.includes(l)&&d.toLowerCase().includes(B.toLowerCase())}),le=a.useMemo(()=>p.some(e=>k(e)),[p]),ie=()=>{if(p.length>0&&b){const e=p.findIndex(d=>k(d)),l=p[e].props.value;c==null||c(P.arrayUnique([...o,l])),w(""),n==null||n(""),m()}else!v&&($==null||$())},se=e=>{w(e),n==null||n(e),j()},ne=e=>{c==null||c(o.filter(l=>l!==e))},ue=e=>()=>{var l;c==null||c(P.arrayUnique([...o,e])),w(""),n==null||n(""),m(),(l=x.current)==null||l.focus()},G=()=>{var e;w(""),n==null||n(""),m(),(e=x.current)==null||e.blur()};Ie.usePagination(D,E,Z,b);const pe=()=>j();return K.useShortcut(z.Key.Enter,ie,x),K.useShortcut(z.Key.Escape,G,x),a.useEffect(()=>{p.some(e=>y(e))&&re(!0)},[p]),s.jsxs(Oe,q(O({ref:A,readOnly:v,value:o},ee),{children:[s.jsxs(qe,{children:[s.jsx(ge.ChipInput,{ref:x,id:t,placeholder:r,value:o.map(e=>{var l;return(l=oe[e])!=null?l:{code:e,label:e}}),invalidValue:J,searchValue:B,removeLabel:X,readOnly:v,invalid:i,onSearchChange:se,onRemove:ne,onFocus:pe,lockedValues:S}),!v&&s.jsx(Re,{children:s.jsx(xe.IconButton,{ghost:"borderless",level:"tertiary",size:"small",icon:s.jsx(ye.ArrowDownIcon,{}),title:Y,onClick:j,onFocus:G,tabIndex:0})})]}),b&&!v&&s.jsx(ve.Overlay,{parentRef:A,onClose:G,children:s.jsx(me,{ref:D,withGroups:te,children:le?p.map((e,l)=>{var d;return y(e)?k(p[l+1])?s.jsx(be,{role:"option-group",ref:l===p.length-1?E:void 0,children:_.default.cloneElement(e)},(d=e.props)==null?void 0:d.title):null:s.jsx($e,{onClick:ue(e.props.value),ref:l===p.length-1?E:void 0,children:_.default.cloneElement(e)},e.props.value)}):s.jsx(je,{children:Q})})})]}))};W.displayName="MultiSelectInput.Option";H.displayName="MultiSelectInput.OptionGroup";h.Option=W;h.OptionGroup=H;exports.MultiSelectInput=h;
