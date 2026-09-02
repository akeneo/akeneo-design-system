"use strict";var Dt=Object.defineProperty,At=Object.defineProperties;var Pt=Object.getOwnPropertyDescriptors;var D=Object.getOwnPropertySymbols;var it=Object.prototype.hasOwnProperty,lt=Object.prototype.propertyIsEnumerable;var ot=(e,o,l)=>o in e?Dt(e,o,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[o]=l,A=(e,o)=>{for(var l in o||(o={}))it.call(o,l)&&ot(e,l,o[l]);if(D)for(var l of D(o))lt.call(o,l)&&ot(e,l,o[l]);return e},P=(e,o)=>At(e,Pt(o));var G=(e,o)=>{var l={};for(var i in e)it.call(e,i)&&o.indexOf(i)<0&&(l[i]=e[i]);if(e!=null&&D)for(var i of D(e))o.indexOf(i)<0&&lt.call(e,i)&&(l[i]=e[i]);return l};var p=require("react/jsx-runtime"),s=require("react"),Gt=require("styled-components"),z=require("../../../shared/array.js"),_=require("../../../shared/key.js"),_t=require("../common/Overlay.js"),Lt=require("../../IconButton/IconButton.js"),ht=require("../../../hooks/useBooleanState.js"),L=require("../../../hooks/useShortcut.js"),a=require("../../../theme/theme.js"),Bt=require("../../../icons/ArrowDownIcon.js"),Ut=require("./ChipInput.js"),Kt=require("../../../hooks/usePagination.js"),Nt=require("../../Locale/Locale.js");function ut(e){return e&&e.__esModule?e:{default:e}}var F=ut(s),m=ut(Gt);const st=new RegExp("[\\n\\r\\t,;]+","g"),Vt=m.default.div`
  width: 100%;

  & input[type='text'] {
    cursor: ${({$readOnly:e})=>e?"not-allowed":"pointer"};
    background: ${({$value:e,$readOnly:o})=>e===null&&o?a.getColor("grey",20):"transparent"};

    &:focus {
      z-index: 2;
    }
  }
`,Wt=m.default.div`
  position: relative;
`,zt=m.default.div`
  position: absolute;
  right: 8px;
  top: 0;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
`,Ft=m.default.div`
  background: ${({$highlighted:e})=>e?a.getColor("grey",20):a.getColor("white")};
  height: 34px;
  padding: 0 20px;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({$highlighted:e})=>e?a.getColor("brand",140):a.getColor("grey",120)};
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
`,Tt=m.default.div`
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
`,Ht=m.default.div`
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
`,Xt=m.default.div`
  max-height: 320px;
  overflow-y: auto;
  padding-left: ${({$withGroups:e})=>e?"20px":"0"};
`,nt=i=>{var E=i,{children:e,enableLocaleRender:o}=E,l=G(E,["children","enableLocaleRender"]);return p.jsx("span",P(A({},l),{children:o?p.jsx(Nt.Locale,{code:l.value,languageLabel:e}):e}))},ct=l=>{var i=l,{children:e}=i,o=G(i,["children"]);return p.jsx("span",P(A({},o),{children:e}))},h=e=>(e==null?void 0:e.type.displayName)==="MultiSelectInput.OptionGroup",j=e=>(e==null?void 0:e.type.displayName)==="MultiSelectInput.Option",T=Yt=>{var J=Yt,{id:e,placeholder:o,invalid:l,value:i=[],invalidValue:E=[],emptyResultLabel:pt,children:H=[],onChange:d,removeLabel:at,onSubmit:B,openLabel:dt,readOnly:g=!1,verticalPosition:Jt,dropdownMinWidth:ft,onNextPage:vt,onSearchChange:n,optionsFilteredExternally:U=!1,disableAutoSelect:X=!1,lockedValues:wt=[],"aria-labelledby":Qt,onOpenChange:w}=J,xt=G(J,["id","placeholder","invalid","value","invalidValue","emptyResultLabel","children","onChange","removeLabel","onSubmit","openLabel","readOnly","verticalPosition","dropdownMinWidth","onNextPage","onSearchChange","optionsFilteredExternally","disableAutoSelect","lockedValues","aria-labelledby","onOpenChange"]);const[M,R]=s.useState(""),[yt,mt]=s.useState(!1),[I,Q]=s.useState(0),[v,Y,Z]=ht.useBooleanState(),x=s.useRef(null),S=s.useRef(null),K=s.useRef(null),N=s.useRef(null),b=s.useCallback(()=>{Y(),v||w==null||w(!0)},[v,Y,w]),V=s.useCallback(()=>{Z(),v&&(w==null||w(!1))},[v,Z,w]),$=s.useMemo(()=>F.default.Children.toArray(H).filter(t=>s.isValidElement(t)),[H]),It=s.useMemo(()=>$.reduce((t,r)=>{if(h(r))return t;const u=r.props.children,f=r.props.value;if(typeof u!="string")throw new Error("Multi select only accepts string as Option");if(Object.prototype.hasOwnProperty.call(t,f))throw new Error(`Duplicate option value ${f}`);return t[f]={code:f,label:u},t},{}),[$]),c=s.useMemo(()=>$.filter(t=>{const r=t.props.value,u=r+t.props.children;return h(t)||!i.includes(r)&&(U||u.toLowerCase().includes(M.toLowerCase()))}),[U,$,M,i]),bt=s.useMemo(()=>c.some(t=>j(t)),[c]),C=c.findIndex(t=>j(t)),k=c.reduce((t,r,u)=>(j(r)&&t.push(u),t),[]),tt=t=>{if(k.length===0)return;const r=k.indexOf(I),u=Math.min(Math.max(r+t,0),k.length-1);Q(k[u])},Ot=t=>{if(t.preventDefault(),!v){b();return}tt(1)},gt=t=>{if(t.preventDefault(),!v){b();return}tt(-1)},Rt=()=>{if(c.length>0&&v&&j(c[I])){const t=c[I].props.value;d==null||d(z.arrayUnique([...i,t])),R(""),n==null||n(""),V()}else!g&&(B==null||B())},et=(t,r)=>{const f=t.split(st).map(y=>y.trim()).filter(y=>y!==""),O=U&&r&&f.length>1?f:f.filter(y=>$.map(kt=>kt.props.value).includes(y));d==null||d(z.arrayUnique([...i,...O]));const q=O.length===0?t:f.filter(y=>!O.includes(y)).join(",");R(q),n==null||n(q),b()},$t=t=>{if(X||t.match(st)===null){R(t),n==null||n(t),b();return}et(t,!1)},qt=t=>{var O,q;if(X||!t.clipboardData)return;t.preventDefault();const r=t.currentTarget,u=(O=r.selectionStart)!=null?O:r.value.length,f=(q=r.selectionEnd)!=null?q:r.value.length,rt=r.value.slice(0,u)+t.clipboardData.getData("text")+r.value.slice(f);et(rt,!0)},jt=t=>{d==null||d(i.filter(r=>r!==t))},Et=t=>()=>{var r;d==null||d(z.arrayUnique([...i,t])),R(""),n==null||n(""),V(),(r=x.current)==null||r.focus()},W=()=>{var t;R(""),n==null||n(""),V(),(t=x.current)==null||t.blur()};Kt.usePagination(K,N,vt,v,c);const Mt=()=>b();return L.useShortcut(_.Key.Enter,Rt,x),L.useShortcut(_.Key.Escape,W,x),L.useShortcut(_.Key.ArrowDown,Ot,x),L.useShortcut(_.Key.ArrowUp,gt,x),s.useEffect(()=>{Q(C)},[v,M,c.length,C]),s.useEffect(()=>{var t,r,u;(u=(r=(t=K.current)==null?void 0:t.querySelector('[data-active="true"]'))==null?void 0:r.scrollIntoView)==null||u.call(r,{block:"nearest"})},[I]),s.useEffect(()=>{c.some(t=>h(t))&&mt(!0)},[c]),p.jsxs(Vt,P(A({ref:S,$readOnly:g,$value:i},xt),{children:[p.jsxs(Wt,{children:[p.jsx(Ut.ChipInput,{ref:x,id:e,placeholder:o,value:i.map(t=>{var r;return(r=It[t])!=null?r:{code:t,label:t}}),invalidValue:E,searchValue:M,removeLabel:at,readOnly:g,invalid:l,onSearchChange:$t,onPaste:qt,onRemove:jt,onFocus:Mt,lockedValues:wt}),!g&&p.jsx(zt,{children:p.jsx(Lt.IconButton,{ghost:"borderless",level:"tertiary",size:"small",icon:p.jsx(Bt.ArrowDownIcon,{}),title:dt,onClick:b,onFocus:W,tabIndex:0})})]}),v&&!g&&p.jsx(_t.Overlay,{parentRef:S,minWidth:ft,onClose:W,children:p.jsx(Xt,{ref:K,$withGroups:yt,children:bt?c.map((t,r)=>{var u;return h(t)?j(c[r+1])?p.jsx(Tt,{role:"option-group",ref:r===c.length-1?N:void 0,children:F.default.cloneElement(t)},(u=t.props)==null?void 0:u.title):null:p.jsx(Ft,{onClick:Et(t.props.value),ref:r===c.length-1?N:void 0,"data-active":r===I,$highlighted:r===I,children:F.default.cloneElement(t)},t.props.value)}):p.jsx(Ht,{children:pt})})})]}))};nt.displayName="MultiSelectInput.Option";ct.displayName="MultiSelectInput.OptionGroup";T.Option=nt;T.OptionGroup=ct;exports.MultiSelectInput=T;
