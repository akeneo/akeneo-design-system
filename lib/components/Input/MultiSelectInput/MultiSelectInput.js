"use strict";var Mt=Object.defineProperty,kt=Object.defineProperties;var Dt=Object.getOwnPropertyDescriptors;var D=Object.getOwnPropertySymbols;var ot=Object.prototype.hasOwnProperty,lt=Object.prototype.propertyIsEnumerable;var rt=(e,o,i)=>o in e?Mt(e,o,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[o]=i,A=(e,o)=>{for(var i in o||(o={}))ot.call(o,i)&&rt(e,i,o[i]);if(D)for(var i of D(o))lt.call(o,i)&&rt(e,i,o[i]);return e},P=(e,o)=>kt(e,Dt(o));var G=(e,o)=>{var i={};for(var l in e)ot.call(e,l)&&o.indexOf(l)<0&&(i[l]=e[l]);if(e!=null&&D)for(var l of D(e))o.indexOf(l)<0&&lt.call(e,l)&&(i[l]=e[l]);return i};var a=require("react/jsx-runtime"),u=require("react"),At=require("styled-components"),F=require("../../../shared/array.js"),_=require("../../../shared/key.js"),Pt=require("../common/Overlay.js"),Gt=require("../../IconButton/IconButton.js"),_t=require("../../../hooks/useBooleanState.js"),L=require("../../../hooks/useShortcut.js"),p=require("../../../theme/theme.js"),Lt=require("../../../icons/ArrowDownIcon.js"),Bt=require("./ChipInput.js"),Ut=require("../../../hooks/usePagination.js"),Vt=require("../../Locale/Locale.js");function st(e){return e&&e.__esModule?e:{default:e}}var W=st(u),I=st(At);const it=new RegExp("(?:\\r\\n|[,;])+","g"),ht=I.default.div`
  width: 100%;

  & input[type='text'] {
    cursor: ${({$readOnly:e})=>e?"not-allowed":"pointer"};
    background: ${({$value:e,$readOnly:o})=>e===null&&o?p.getColor("grey",20):"transparent"};

    &:focus {
      z-index: 2;
    }
  }
`,Kt=I.default.div`
  position: relative;
`,Nt=I.default.div`
  position: absolute;
  right: 8px;
  top: 0;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
`,Ft=I.default.div`
  background: ${({$highlighted:e})=>e?p.getColor("grey",20):p.getColor("white")};
  height: 34px;
  padding: 0 20px;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({$highlighted:e})=>e?p.getColor("brand",140):p.getColor("grey",120)};
  line-height: 34px;

  &:focus {
    color: ${p.getColor("grey",120)};
  }
  &:hover {
    background: ${p.getColor("grey",20)};
    color: ${p.getColor("brand",140)};
  }
  &:active {
    color: ${p.getColor("brand",100)};
    font-weight: 700;
  }
  &:disabled {
    color: ${p.getColor("grey",100)};
  }
`,Wt=I.default.div`
  background: ${p.getColor("white")};
  height: 34px;
  padding: 0 20px 0 0;
  align-items: center;
  gap: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${p.getColor("grey",100)};
  line-height: 34px;
  text-transform: uppercase;
`,zt=I.default.div`
  background: ${p.getColor("white")};
  height: 20px;
  padding: 0 20px;
  align-items: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${p.getColor("grey",100)};
  line-height: 20px;
  text-align: center;
`,Tt=I.default.div`
  max-height: 320px;
  overflow-y: auto;
  padding-left: ${({$withGroups:e})=>e?"20px":"0"};
`,ut=l=>{var E=l,{children:e,enableLocaleRender:o}=E,i=G(E,["children","enableLocaleRender"]);return a.jsx("span",P(A({},i),{children:o?a.jsx(Vt.Locale,{code:i.value,languageLabel:e}):e}))},nt=i=>{var l=i,{children:e}=l,o=G(l,["children"]);return a.jsx("span",P(A({},o),{children:e}))},B=e=>(e==null?void 0:e.type.displayName)==="MultiSelectInput.OptionGroup",q=e=>(e==null?void 0:e.type.displayName)==="MultiSelectInput.Option",z=Jt=>{var J=Jt,{id:e,placeholder:o,invalid:i,value:l=[],invalidValue:E=[],emptyResultLabel:ct,children:T=[],onChange:d,removeLabel:at,onSubmit:U,openLabel:pt,readOnly:R=!1,verticalPosition:Ht,dropdownMinWidth:dt,onNextPage:ft,onSearchChange:n,optionsFilteredExternally:H=!1,disableAutoSelect:X=!1,lockedValues:vt=[],"aria-labelledby":Xt,onOpenChange:w}=J,wt=G(J,["id","placeholder","invalid","value","invalidValue","emptyResultLabel","children","onChange","removeLabel","onSubmit","openLabel","readOnly","verticalPosition","dropdownMinWidth","onNextPage","onSearchChange","optionsFilteredExternally","disableAutoSelect","lockedValues","aria-labelledby","onOpenChange"]);const[j,$]=u.useState(""),[xt,yt]=u.useState(!1),[m,Q]=u.useState(0),[f,Y,Z]=_t.useBooleanState(),y=u.useRef(null),S=u.useRef(null),V=u.useRef(null),h=u.useRef(null),b=u.useCallback(()=>{Y(),f||w==null||w(!0)},[f,Y,w]),K=u.useCallback(()=>{Z(),f&&(w==null||w(!1))},[f,Z,w]),g=u.useMemo(()=>W.default.Children.toArray(T).filter(t=>u.isValidElement(t)),[T]),It=u.useMemo(()=>g.reduce((t,r)=>{if(B(r))return t;const s=r.props.children,v=r.props.value;if(typeof s!="string")throw new Error("Multi select only accepts string as Option");if(Object.prototype.hasOwnProperty.call(t,v))throw new Error(`Duplicate option value ${v}`);return t[v]={code:v,label:s},t},{}),[g]),c=u.useMemo(()=>g.filter(t=>{const r=t.props.value,s=r+t.props.children;return B(t)||!l.includes(r)&&(H||s.toLowerCase().includes(j.toLowerCase()))}),[H,g,j,l]),mt=u.useMemo(()=>c.some(t=>q(t)),[c]),C=c.findIndex(t=>q(t)),O=c.reduce((t,r,s)=>(q(r)&&t.push(s),t),[]),tt=t=>{if(O.length===0)return;const r=O.indexOf(m),s=Math.min(Math.max(r+t,0),O.length-1);Q(O[s])},bt=t=>{if(t.preventDefault(),!f){b();return}tt(1)},Rt=t=>{if(t.preventDefault(),!f){b();return}tt(-1)},$t=()=>{if(c.length>0&&f&&q(c[m])){const t=c[m].props.value;d==null||d(F.arrayUnique([...l,t])),$(""),n==null||n(""),K()}else!R&&(U==null||U())},et=t=>{const s=t.split(it).filter(x=>x.trim()!==""),v=s.filter(x=>g.map(k=>k.props.value).includes(x));d==null||d(F.arrayUnique([...l,...v]));const M=s.filter(x=>!v.includes(x)).join(",");$(M),n==null||n(M),b()},gt=t=>{if(X||t.match(it)===null){$(t),n==null||n(t),b();return}et(t)},qt=t=>{var x,k;if(X||!t.clipboardData)return;t.preventDefault();const r=t.currentTarget,s=(x=r.selectionStart)!=null?x:r.value.length,v=(k=r.selectionEnd)!=null?k:r.value.length,M=r.value.slice(0,s)+t.clipboardData.getData("text")+r.value.slice(v);et(M)},Et=t=>{d==null||d(l.filter(r=>r!==t))},jt=t=>()=>{var r;d==null||d(F.arrayUnique([...l,t])),$(""),n==null||n(""),K(),(r=y.current)==null||r.focus()},N=()=>{var t;$(""),n==null||n(""),K(),(t=y.current)==null||t.blur()};Ut.usePagination(V,h,ft,f,c);const Ot=()=>b();return L.useShortcut(_.Key.Enter,$t,y),L.useShortcut(_.Key.Escape,N,y),L.useShortcut(_.Key.ArrowDown,bt,y),L.useShortcut(_.Key.ArrowUp,Rt,y),u.useEffect(()=>{Q(C)},[f,j,c.length,C]),u.useEffect(()=>{var t,r,s;(s=(r=(t=V.current)==null?void 0:t.querySelector('[data-active="true"]'))==null?void 0:r.scrollIntoView)==null||s.call(r,{block:"nearest"})},[m]),u.useEffect(()=>{c.some(t=>B(t))&&yt(!0)},[c]),a.jsxs(ht,P(A({ref:S,$readOnly:R,$value:l},wt),{children:[a.jsxs(Kt,{children:[a.jsx(Bt.ChipInput,{ref:y,id:e,placeholder:o,value:l.map(t=>{var r;return(r=It[t])!=null?r:{code:t,label:t}}),invalidValue:E,searchValue:j,removeLabel:at,readOnly:R,invalid:i,onSearchChange:gt,onPaste:qt,onRemove:Et,onFocus:Ot,lockedValues:vt}),!R&&a.jsx(Nt,{children:a.jsx(Gt.IconButton,{ghost:"borderless",level:"tertiary",size:"small",icon:a.jsx(Lt.ArrowDownIcon,{}),title:pt,onClick:b,onFocus:N,tabIndex:0})})]}),f&&!R&&a.jsx(Pt.Overlay,{parentRef:S,minWidth:dt,onClose:N,children:a.jsx(Tt,{ref:V,$withGroups:xt,children:mt?c.map((t,r)=>{var s;return B(t)?q(c[r+1])?a.jsx(Wt,{role:"option-group",ref:r===c.length-1?h:void 0,children:W.default.cloneElement(t)},(s=t.props)==null?void 0:s.title):null:a.jsx(Ft,{onClick:jt(t.props.value),ref:r===c.length-1?h:void 0,"data-active":r===m,$highlighted:r===m,children:W.default.cloneElement(t)},t.props.value)}):a.jsx(zt,{children:ct})})})]}))};ut.displayName="MultiSelectInput.Option";nt.displayName="MultiSelectInput.OptionGroup";z.Option=ut;z.OptionGroup=nt;exports.MultiSelectInput=z;
