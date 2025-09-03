"use strict";var fe=Object.defineProperty,ve=Object.defineProperties;var we=Object.getOwnPropertyDescriptors;var j=Object.getOwnPropertySymbols;var U=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable;var L=(t,r,l)=>r in t?fe(t,r,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[r]=l,q=(t,r)=>{for(var l in r||(r={}))U.call(r,l)&&L(t,l,r[l]);if(j)for(var l of j(r))z.call(r,l)&&L(t,l,r[l]);return t},R=(t,r)=>ve(t,we(r));var b=(t,r)=>{var l={};for(var i in t)U.call(t,i)&&r.indexOf(i)<0&&(l[i]=t[i]);if(t!=null&&j)for(var i of j(t))r.indexOf(i)<0&&z.call(t,i)&&(l[i]=t[i]);return l};var s=require("react/jsx-runtime"),d=require("react"),xe=require("styled-components"),_=require("../../../shared/array.js"),K=require("../../../shared/key.js"),ye=require("../common/Overlay.js"),ge=require("../../IconButton/IconButton.js"),Oe=require("../../../hooks/useBooleanState.js"),W=require("../../../hooks/useShortcut.js"),a=require("../../../theme/theme.js"),Ie=require("../../../icons/ArrowDownIcon.js"),je=require("./ChipInput.js"),qe=require("../../../hooks/usePagination.js");function H(t){return t&&t.__esModule?t:{default:t}}var V=H(d),v=H(xe);const Re=v.default.div`
  width: 100%;

  & input[type='text'] {
    cursor: ${({readOnly:t})=>t?"not-allowed":"pointer"};
    background: ${({value:t,readOnly:r})=>t===null&&r?a.getColor("grey",20):"transparent"};

    &:focus {
      z-index: 2;
    }
  }
`,be=v.default.div`
  position: relative;
`,me=v.default.div`
  position: absolute;
  right: 8px;
  top: 0;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
`,$e=v.default.div`
  background: ${a.getColor("white")};
  height: 34px;
  padding: 0 20px;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${a.getColor("grey",120)};
  line-height: 34px;

  &:focus {
    color: ${a.getColor("grey",120)};
  }
  &:hover {
    background: ${a.getColor("grey",20)};
    color: ${a.getColor("brand",140)};
  }
  &:active {
    color: ${a.getColor("brand",100)};
    font-weight: 700;
  }
  &:disabled {
    color: ${a.getColor("grey",100)};
  }
`,Ee=v.default.div`
  background: ${a.getColor("white")};
  height: 34px;
  padding: 0 20px 0 0;
  align-items: center;
  gap: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${a.getColor("grey",100)};
  line-height: 34px;
  text-transform: uppercase;
`,Me=v.default.div`
  background: ${a.getColor("white")};
  height: 20px;
  padding: 0 20px;
  align-items: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${a.getColor("grey",100)};
  line-height: 20px;
  text-align: center;
`,ke=v.default.div`
  max-height: 320px;
  overflow-y: auto;
  padding-left: ${({withGroups:t})=>t?"20px":"0"};
`,J=l=>{var i=l,{children:t}=i,r=b(i,["children"]);return s.jsx("span",R(q({},r),{children:t}))},Q=l=>{var i=l,{children:t}=i,r=b(i,["children"]);return s.jsx("span",R(q({},r),{children:t}))},B=_e=>{var P=_e,{id:t,placeholder:r,invalid:l,value:i=[],invalidValue:T=[],emptyResultLabel:X,children:Y=[],onChange:n,removeLabel:Z,onSubmit:m,openLabel:C,readOnly:w=!1,verticalPosition:he,onNextPage:S,onSearchChange:u,disableInternalSearch:ee=!1,lockedValues:te=[],"aria-labelledby":Ge}=P,re=b(P,["id","placeholder","invalid","value","invalidValue","emptyResultLabel","children","onChange","removeLabel","onSubmit","openLabel","readOnly","verticalPosition","onNextPage","onSearchChange","disableInternalSearch","lockedValues","aria-labelledby"]);const[A,g]=d.useState(""),[ie,oe]=d.useState(!1),[$,E,M]=Oe.useBooleanState(),x=d.useRef(null),D=d.useRef(null),F=d.useRef(null),k=d.useRef(null),O=V.default.Children.toArray(Y).filter(e=>d.isValidElement(e)),I=e=>(e==null?void 0:e.type.displayName)==="MultiSelectInput.OptionGroup",h=e=>(e==null?void 0:e.type.displayName)==="MultiSelectInput.Option",le=O.reduce((e,o)=>{if(I(o))return e;const p=o.props.children,f=o.props.value;if(typeof p!="string")throw new Error("Multi select only accepts string as Option");if(Object.prototype.hasOwnProperty.call(e,f))throw new Error(`Duplicate option value ${f}`);return e[f]={code:f,label:p},e},{}),c=ee?O:O.filter(e=>{const o=e.props.value,p=o+e.props.children;return I(e)||!i.includes(o)&&p.toLowerCase().includes(A.toLowerCase())}),se=d.useMemo(()=>c.some(e=>h(e)),[c]),ne=()=>{if(c.length>0&&$){const e=c.findIndex(p=>h(p)),o=c[e].props.value;n==null||n(_.arrayUnique([...i,o])),g(""),u==null||u(""),M()}else!w&&(m==null||m())},ue=e=>{const p=e.split(new RegExp("(?:\\r\\n|[,;])+","g")).filter(y=>y.trim()!==""),f=p.filter(y=>O.map(de=>de.props.value).includes(y));n==null||n(_.arrayUnique([...i,...f]));const N=p.filter(y=>!f.includes(y)).join(",");g(N),u==null||u(N),E()},pe=e=>{n==null||n(i.filter(o=>o!==e))},ae=e=>()=>{var o;n==null||n(_.arrayUnique([...i,e])),g(""),u==null||u(""),M(),(o=x.current)==null||o.focus()},G=()=>{var e;g(""),u==null||u(""),M(),(e=x.current)==null||e.blur()};qe.usePagination(F,k,S,$);const ce=()=>E();return W.useShortcut(K.Key.Enter,ne,x),W.useShortcut(K.Key.Escape,G,x),d.useEffect(()=>{c.some(e=>I(e))&&oe(!0)},[c]),s.jsxs(Re,R(q({ref:D,readOnly:w,value:i},re),{children:[s.jsxs(be,{children:[s.jsx(je.ChipInput,{ref:x,id:t,placeholder:r,value:i.map(e=>{var o;return(o=le[e])!=null?o:{code:e,label:e}}),invalidValue:T,searchValue:A,removeLabel:Z,readOnly:w,invalid:l,onSearchChange:ue,onRemove:pe,onFocus:ce,lockedValues:te}),!w&&s.jsx(me,{children:s.jsx(ge.IconButton,{ghost:"borderless",level:"tertiary",size:"small",icon:s.jsx(Ie.ArrowDownIcon,{}),title:C,onClick:E,onFocus:G,tabIndex:0})})]}),$&&!w&&s.jsx(ye.Overlay,{parentRef:D,onClose:G,children:s.jsx(ke,{ref:F,withGroups:ie,children:se?c.map((e,o)=>{var p;return I(e)?h(c[o+1])?s.jsx(Ee,{role:"option-group",ref:o===c.length-1?k:void 0,children:V.default.cloneElement(e)},(p=e.props)==null?void 0:p.title):null:s.jsx($e,{onClick:ae(e.props.value),ref:o===c.length-1?k:void 0,children:V.default.cloneElement(e)},e.props.value)}):s.jsx(Me,{children:X})})})]}))};J.displayName="MultiSelectInput.Option";Q.displayName="MultiSelectInput.OptionGroup";B.Option=J;B.OptionGroup=Q;exports.MultiSelectInput=B;
