"use strict";var ae=Object.defineProperty,ce=Object.defineProperties;var de=Object.getOwnPropertyDescriptors;var O=Object.getOwnPropertySymbols;var P=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable;var N=(t,r,i)=>r in t?ae(t,r,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[r]=i,I=(t,r)=>{for(var i in r||(r={}))P.call(r,i)&&N(t,i,r[i]);if(O)for(var i of O(r))F.call(r,i)&&N(t,i,r[i]);return t},b=(t,r)=>ce(t,de(r));var j=(t,r)=>{var i={};for(var o in t)P.call(t,o)&&r.indexOf(o)<0&&(i[o]=t[o]);if(t!=null&&O)for(var o of O(t))r.indexOf(o)<0&&F.call(t,o)&&(i[o]=t[o]);return i};var s=require("react/jsx-runtime"),a=require("react"),fe=require("styled-components"),L=require("../../../shared/array.js"),z=require("../../../shared/key.js"),ve=require("../common/Overlay.js"),xe=require("../../IconButton/IconButton.js"),we=require("../../../hooks/useBooleanState.js"),K=require("../../../hooks/useShortcut.js"),u=require("../../../theme/theme.js"),ye=require("../../../icons/ArrowDownIcon.js"),ge=require("./ChipInput.js"),Oe=require("../../../hooks/usePagination.js");function U(t){return t&&t.__esModule?t:{default:t}}var h=U(a),f=U(fe);const Ie=f.default.div`
  width: 100%;

  & input[type='text'] {
    cursor: ${({readOnly:t})=>t?"not-allowed":"pointer"};
    background: ${({value:t,readOnly:r})=>t===null&&r?u.getColor("grey",20):"transparent"};

    &:focus {
      z-index: 2;
    }
  }
`,be=f.default.div`
  position: relative;
`,je=f.default.div`
  position: absolute;
  right: 8px;
  top: 0;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
`,qe=f.default.div`
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
`,Re=f.default.div`
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
`,$e=f.default.div`
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
`,W=i=>{var o=i,{children:t}=o,r=j(o,["children"]);return s.jsx("span",b(I({},r),{children:t}))},H=i=>{var o=i,{children:t}=o,r=j(o,["children"]);return s.jsx("span",b(I({},r),{children:t}))},_=ke=>{var V=ke,{id:t,placeholder:r,invalid:i,value:o,invalidValue:J=[],emptyResultLabel:Q,children:T=[],onChange:c,removeLabel:X,onSubmit:q,openLabel:Y,readOnly:v=!1,verticalPosition:Ee,onNextPage:Z,onSearchChange:n,disableInternalSearch:C=!1,lockedValues:S=[],"aria-labelledby":Me}=V,ee=j(V,["id","placeholder","invalid","value","invalidValue","emptyResultLabel","children","onChange","removeLabel","onSubmit","openLabel","readOnly","verticalPosition","onNextPage","onSearchChange","disableInternalSearch","lockedValues","aria-labelledby"]);const[B,w]=a.useState(""),[te,re]=a.useState(!1),[R,$,m]=we.useBooleanState(),x=a.useRef(null),A=a.useRef(null),D=a.useRef(null),E=a.useRef(null),M=h.default.Children.toArray(T).filter(e=>a.isValidElement(e)),y=e=>(e==null?void 0:e.type.displayName)==="MultiSelectInput.OptionGroup",k=e=>(e==null?void 0:e.type.displayName)==="MultiSelectInput.Option",oe=M.reduce((e,l)=>{if(y(l))return e;const d=l.props.children,g=l.props.value;if(typeof d!="string")throw new Error("Multi select only accepts string as Option");if(Object.prototype.hasOwnProperty.call(e,g))throw new Error(`Duplicate option value ${g}`);return e[g]={code:g,label:d},e},{}),p=C?M:M.filter(e=>{const l=e.props.value,d=l+e.props.children;return y(e)||!o.includes(l)&&d.toLowerCase().includes(B.toLowerCase())}),le=a.useMemo(()=>p.some(e=>k(e)),[p]),ie=()=>{if(p.length>0&&R){const e=p.findIndex(d=>k(d)),l=p[e].props.value;c==null||c(L.arrayUnique([...o,l])),w(""),n==null||n(""),m()}else!v&&(q==null||q())},se=e=>{w(e),n==null||n(e),$()},ne=e=>{c==null||c(o.filter(l=>l!==e))},ue=e=>()=>{var l;c==null||c(L.arrayUnique([...o,e])),w(""),n==null||n(""),m(),(l=x.current)==null||l.focus()},G=()=>{var e;w(""),n==null||n(""),m(),(e=x.current)==null||e.blur()};Oe.usePagination(D,E,Z,R);const pe=()=>$();return K.useShortcut(z.Key.Enter,ie,x),K.useShortcut(z.Key.Escape,G,x),a.useEffect(()=>{p.some(e=>y(e))&&re(!0)},[p]),s.jsxs(Ie,b(I({ref:A,readOnly:v,value:o},ee),{children:[s.jsxs(be,{children:[s.jsx(ge.ChipInput,{ref:x,id:t,placeholder:r,value:o.map(e=>{var l;return(l=oe[e])!=null?l:{code:e,label:e}}),invalidValue:J,searchValue:B,removeLabel:X,readOnly:v,invalid:i,onSearchChange:se,onRemove:ne,onFocus:pe,lockedValues:S}),!v&&s.jsx(je,{children:s.jsx(xe.IconButton,{ghost:"borderless",level:"tertiary",size:"small",icon:s.jsx(ye.ArrowDownIcon,{}),title:Y,onClick:$,onFocus:G,tabIndex:0})})]}),R&&!v&&s.jsx(ve.Overlay,{parentRef:A,onClose:G,children:s.jsx(me,{ref:D,withGroups:te,children:le?p.map((e,l)=>{var d;return y(e)?k(p[l+1])?s.jsx(Re,{role:"option-group",ref:l===p.length-1?E:void 0,children:h.default.cloneElement(e)},(d=e.props)==null?void 0:d.title):null:s.jsx(qe,{onClick:ue(e.props.value),ref:l===p.length-1?E:void 0,children:h.default.cloneElement(e)},e.props.value)}):s.jsx($e,{children:Q})})})]}))};W.displayName="MultiSelectInput.Option";H.displayName="MultiSelectInput.OptionGroup";_.Option=W;_.OptionGroup=H;exports.MultiSelectInput=_;
