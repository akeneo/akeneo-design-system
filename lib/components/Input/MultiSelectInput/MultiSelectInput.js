"use strict";var kt=Object.defineProperty,Dt=Object.defineProperties;var At=Object.getOwnPropertyDescriptors;var D=Object.getOwnPropertySymbols;var ot=Object.prototype.hasOwnProperty,it=Object.prototype.propertyIsEnumerable;var rt=(e,o,s)=>o in e?kt(e,o,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[o]=s,A=(e,o)=>{for(var s in o||(o={}))ot.call(o,s)&&rt(e,s,o[s]);if(D)for(var s of D(o))it.call(o,s)&&rt(e,s,o[s]);return e},P=(e,o)=>Dt(e,At(o));var G=(e,o)=>{var s={};for(var i in e)ot.call(e,i)&&o.indexOf(i)<0&&(s[i]=e[i]);if(e!=null&&D)for(var i of D(e))o.indexOf(i)<0&&it.call(e,i)&&(s[i]=e[i]);return s};var p=require("react/jsx-runtime"),u=require("react"),Pt=require("styled-components"),z=require("../../../shared/array.js"),_=require("../../../shared/key.js"),Gt=require("../common/Overlay.js"),_t=require("../../IconButton/IconButton.js"),Lt=require("../../../hooks/useBooleanState.js"),L=require("../../../hooks/useShortcut.js"),a=require("../../../theme/theme.js"),ht=require("../../../icons/ArrowDownIcon.js"),Bt=require("./ChipInput.js"),Ut=require("../../../hooks/usePagination.js"),Vt=require("../../Locale/Locale.js");function st(e){return e&&e.__esModule?e:{default:e}}var F=st(u),m=st(Pt);const lt=new RegExp("[\\n\\r\\t,;]+","g"),Kt=m.default.div`
  width: 100%;

  & input[type='text'] {
    cursor: ${({$readOnly:e})=>e?"not-allowed":"pointer"};
    background: ${({$value:e,$readOnly:o})=>e===null&&o?a.getColor("grey",20):"transparent"};

    &:focus {
      z-index: 2;
    }
  }
`,Nt=m.default.div`
  position: relative;
`,Wt=m.default.div`
  position: absolute;
  right: 8px;
  top: 0;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
`,zt=m.default.div`
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
`,Ft=m.default.div`
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
`,Tt=m.default.div`
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
`,Ht=m.default.div`
  max-height: 320px;
  overflow-y: auto;
  padding-left: ${({$withGroups:e})=>e?"20px":"0"};
`,ut=i=>{var j=i,{children:e,enableLocaleRender:o}=j,s=G(j,["children","enableLocaleRender"]);return p.jsx("span",P(A({},s),{children:o?p.jsx(Vt.Locale,{code:s.value,languageLabel:e}):e}))},nt=s=>{var i=s,{children:e}=i,o=G(i,["children"]);return p.jsx("span",P(A({},o),{children:e}))},h=e=>(e==null?void 0:e.type.displayName)==="MultiSelectInput.OptionGroup",q=e=>(e==null?void 0:e.type.displayName)==="MultiSelectInput.Option",T=Qt=>{var J=Qt,{id:e,placeholder:o,invalid:s,value:i=[],invalidValue:j=[],emptyResultLabel:ct,children:H=[],onChange:d,removeLabel:pt,onSubmit:B,openLabel:at,readOnly:O=!1,verticalPosition:Xt,dropdownMinWidth:dt,onNextPage:ft,onSearchChange:n,optionsFilteredExternally:U=!1,disableAutoSelect:X=!1,lockedValues:vt=[],"aria-labelledby":Jt,onOpenChange:w}=J,wt=G(J,["id","placeholder","invalid","value","invalidValue","emptyResultLabel","children","onChange","removeLabel","onSubmit","openLabel","readOnly","verticalPosition","dropdownMinWidth","onNextPage","onSearchChange","optionsFilteredExternally","disableAutoSelect","lockedValues","aria-labelledby","onOpenChange"]);const[E,g]=u.useState(""),[xt,yt]=u.useState(!1),[I,Q]=u.useState(0),[f,Y,Z]=Lt.useBooleanState(),x=u.useRef(null),S=u.useRef(null),V=u.useRef(null),K=u.useRef(null),b=u.useCallback(()=>{Y(),f||w==null||w(!0)},[f,Y,w]),N=u.useCallback(()=>{Z(),f&&(w==null||w(!1))},[f,Z,w]),R=u.useMemo(()=>F.default.Children.toArray(H).filter(t=>u.isValidElement(t)),[H]),mt=u.useMemo(()=>R.reduce((t,r)=>{if(h(r))return t;const l=r.props.children,y=r.props.value;if(typeof l!="string")throw new Error("Multi select only accepts string as Option");if(Object.prototype.hasOwnProperty.call(t,y))throw new Error(`Duplicate option value ${y}`);return t[y]={code:y,label:l},t},{}),[R]),c=u.useMemo(()=>R.filter(t=>{const r=t.props.value,l=r+t.props.children;return h(t)||!i.includes(r)&&(U||l.toLowerCase().includes(E.toLowerCase()))}),[U,R,E,i]),It=u.useMemo(()=>c.some(t=>q(t)),[c]),C=c.findIndex(t=>q(t)),M=c.reduce((t,r,l)=>(q(r)&&t.push(l),t),[]),tt=t=>{if(M.length===0)return;const r=M.indexOf(I),l=Math.min(Math.max(r+t,0),M.length-1);Q(M[l])},bt=t=>{if(t.preventDefault(),!f){b();return}tt(1)},Ot=t=>{if(t.preventDefault(),!f){b();return}tt(-1)},gt=()=>{if(c.length>0&&f&&q(c[I])){const t=c[I].props.value;d==null||d(z.arrayUnique([...i,t])),g(""),n==null||n(""),N()}else!O&&(B==null||B())},et=t=>{const l=t.split(lt).map(v=>v.trim()).filter(v=>v!==""),k=U&&l.length>1?l:l.filter(v=>R.map(Mt=>Mt.props.value).includes(v));d==null||d(z.arrayUnique([...i,...k]));const $=l.filter(v=>!k.includes(v)).join(",");g($),n==null||n($),b()},Rt=t=>{if(X||t.match(lt)===null){g(t),n==null||n(t),b();return}et(t)},$t=t=>{var $,v;if(X||!t.clipboardData)return;t.preventDefault();const r=t.currentTarget,l=($=r.selectionStart)!=null?$:r.value.length,y=(v=r.selectionEnd)!=null?v:r.value.length,k=r.value.slice(0,l)+t.clipboardData.getData("text")+r.value.slice(y);et(k)},qt=t=>{d==null||d(i.filter(r=>r!==t))},jt=t=>()=>{var r;d==null||d(z.arrayUnique([...i,t])),g(""),n==null||n(""),N(),(r=x.current)==null||r.focus()},W=()=>{var t;g(""),n==null||n(""),N(),(t=x.current)==null||t.blur()};Ut.usePagination(V,K,ft,f,c);const Et=()=>b();return L.useShortcut(_.Key.Enter,gt,x),L.useShortcut(_.Key.Escape,W,x),L.useShortcut(_.Key.ArrowDown,bt,x),L.useShortcut(_.Key.ArrowUp,Ot,x),u.useEffect(()=>{Q(C)},[f,E,c.length,C]),u.useEffect(()=>{var t,r,l;(l=(r=(t=V.current)==null?void 0:t.querySelector('[data-active="true"]'))==null?void 0:r.scrollIntoView)==null||l.call(r,{block:"nearest"})},[I]),u.useEffect(()=>{c.some(t=>h(t))&&yt(!0)},[c]),p.jsxs(Kt,P(A({ref:S,$readOnly:O,$value:i},wt),{children:[p.jsxs(Nt,{children:[p.jsx(Bt.ChipInput,{ref:x,id:e,placeholder:o,value:i.map(t=>{var r;return(r=mt[t])!=null?r:{code:t,label:t}}),invalidValue:j,searchValue:E,removeLabel:pt,readOnly:O,invalid:s,onSearchChange:Rt,onPaste:$t,onRemove:qt,onFocus:Et,lockedValues:vt}),!O&&p.jsx(Wt,{children:p.jsx(_t.IconButton,{ghost:"borderless",level:"tertiary",size:"small",icon:p.jsx(ht.ArrowDownIcon,{}),title:at,onClick:b,onFocus:W,tabIndex:0})})]}),f&&!O&&p.jsx(Gt.Overlay,{parentRef:S,minWidth:dt,onClose:W,children:p.jsx(Ht,{ref:V,$withGroups:xt,children:It?c.map((t,r)=>{var l;return h(t)?q(c[r+1])?p.jsx(Ft,{role:"option-group",ref:r===c.length-1?K:void 0,children:F.default.cloneElement(t)},(l=t.props)==null?void 0:l.title):null:p.jsx(zt,{onClick:jt(t.props.value),ref:r===c.length-1?K:void 0,"data-active":r===I,$highlighted:r===I,children:F.default.cloneElement(t)},t.props.value)}):p.jsx(Tt,{children:ct})})})]}))};ut.displayName="MultiSelectInput.Option";nt.displayName="MultiSelectInput.OptionGroup";T.Option=ut;T.OptionGroup=nt;exports.MultiSelectInput=T;
