"use strict";var kt=Object.defineProperty,Dt=Object.defineProperties;var Mt=Object.getOwnPropertyDescriptors;var M=Object.getOwnPropertySymbols;var et=Object.prototype.hasOwnProperty,rt=Object.prototype.propertyIsEnumerable;var tt=(e,l,i)=>l in e?kt(e,l,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[l]=i,A=(e,l)=>{for(var i in l||(l={}))et.call(l,i)&&tt(e,i,l[i]);if(M)for(var i of M(l))rt.call(l,i)&&tt(e,i,l[i]);return e},P=(e,l)=>Dt(e,Mt(l));var G=(e,l)=>{var i={};for(var o in e)et.call(e,o)&&l.indexOf(o)<0&&(i[o]=e[o]);if(e!=null&&M)for(var o of M(e))l.indexOf(o)<0&&rt.call(e,o)&&(i[o]=e[o]);return i};var a=require("react/jsx-runtime"),n=require("react"),At=require("styled-components"),N=require("../../../shared/array.js"),_=require("../../../shared/key.js"),Pt=require("../common/Overlay.js"),Gt=require("../../IconButton/IconButton.js"),_t=require("../../../hooks/useBooleanState.js"),L=require("../../../hooks/useShortcut.js"),p=require("../../../theme/theme.js"),Lt=require("../../../icons/ArrowDownIcon.js"),ht=require("./ChipInput.js"),Bt=require("../../../hooks/usePagination.js"),Ut=require("../../Locale/Locale.js");function ot(e){return e&&e.__esModule?e:{default:e}}var W=ot(n),I=ot(At);const lt=new RegExp("(?:\\r\\n|[,;])+","g"),Vt=I.default.div`
  width: 100%;

  & input[type='text'] {
    cursor: ${({$readOnly:e})=>e?"not-allowed":"pointer"};
    background: ${({$value:e,$readOnly:l})=>e===null&&l?p.getColor("grey",20):"transparent"};

    &:focus {
      z-index: 2;
    }
  }
`,Ft=I.default.div`
  position: relative;
`,Kt=I.default.div`
  position: absolute;
  right: 8px;
  top: 0;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
`,Nt=I.default.div`
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
`,it=o=>{var g=o,{children:e,enableLocaleRender:l}=g,i=G(g,["children","enableLocaleRender"]);return a.jsx("span",P(A({},i),{children:l?a.jsx(Ut.Locale,{code:i.value,languageLabel:e}):e}))},st=i=>{var o=i,{children:e}=o,l=G(o,["children"]);return a.jsx("span",P(A({},l),{children:e}))},z=Jt=>{var H=Jt,{id:e,placeholder:l,invalid:i,value:o=[],invalidValue:g=[],emptyResultLabel:ut,children:nt=[],onChange:d,removeLabel:ct,onSubmit:h,openLabel:at,readOnly:E=!1,verticalPosition:Ht,dropdownMinWidth:pt,onNextPage:dt,onSearchChange:u,disableInternalSearch:ft=!1,disableAutoSelect:T=!1,lockedValues:vt=[],"aria-labelledby":Xt,onOpenChange:w}=H,wt=G(H,["id","placeholder","invalid","value","invalidValue","emptyResultLabel","children","onChange","removeLabel","onSubmit","openLabel","readOnly","verticalPosition","dropdownMinWidth","onNextPage","onSearchChange","disableInternalSearch","disableAutoSelect","lockedValues","aria-labelledby","onOpenChange"]);const[B,R]=n.useState(""),[xt,yt]=n.useState(!1),[b,X]=n.useState(0),[f,J,Q]=_t.useBooleanState(),y=n.useRef(null),Y=n.useRef(null),U=n.useRef(null),V=n.useRef(null),m=n.useCallback(()=>{J(),f||w==null||w(!0)},[f,J,w]),F=n.useCallback(()=>{Q(),f&&(w==null||w(!1))},[f,Q,w]),q=W.default.Children.toArray(nt).filter(t=>n.isValidElement(t)),j=t=>(t==null?void 0:t.type.displayName)==="MultiSelectInput.OptionGroup",$=t=>(t==null?void 0:t.type.displayName)==="MultiSelectInput.Option",It=q.reduce((t,r)=>{if(j(r))return t;const s=r.props.children,v=r.props.value;if(typeof s!="string")throw new Error("Multi select only accepts string as Option");if(Object.prototype.hasOwnProperty.call(t,v))throw new Error(`Duplicate option value ${v}`);return t[v]={code:v,label:s},t},{}),c=ft?q:q.filter(t=>{const r=t.props.value,s=r+t.props.children;return j(t)||!o.includes(r)&&s.toLowerCase().includes(B.toLowerCase())}),bt=n.useMemo(()=>c.some(t=>$(t)),[c]),Z=c.findIndex(t=>$(t)),O=c.reduce((t,r,s)=>($(r)&&t.push(s),t),[]),S=t=>{if(O.length===0)return;const r=O.indexOf(b),s=Math.min(Math.max(r+t,0),O.length-1);X(O[s])},mt=t=>{if(t.preventDefault(),!f){m();return}S(1)},Et=t=>{if(t.preventDefault(),!f){m();return}S(-1)},Rt=()=>{if(c.length>0&&f&&$(c[b])){const t=c[b].props.value;d==null||d(N.arrayUnique([...o,t])),R(""),u==null||u(""),F()}else!E&&(h==null||h())},C=t=>{const s=t.split(lt).filter(x=>x.trim()!==""),v=s.filter(x=>q.map(D=>D.props.value).includes(x));d==null||d(N.arrayUnique([...o,...v]));const k=s.filter(x=>!v.includes(x)).join(",");R(k),u==null||u(k),m()},$t=t=>{if(T||t.match(lt)===null){R(t),u==null||u(t),m();return}C(t)},gt=t=>{var x,D;if(T||!t.clipboardData)return;t.preventDefault();const r=t.currentTarget,s=(x=r.selectionStart)!=null?x:r.value.length,v=(D=r.selectionEnd)!=null?D:r.value.length,k=r.value.slice(0,s)+t.clipboardData.getData("text")+r.value.slice(v);C(k)},qt=t=>{d==null||d(o.filter(r=>r!==t))},jt=t=>()=>{var r;d==null||d(N.arrayUnique([...o,t])),R(""),u==null||u(""),F(),(r=y.current)==null||r.focus()},K=()=>{var t;R(""),u==null||u(""),F(),(t=y.current)==null||t.blur()};Bt.usePagination(U,V,dt,f);const Ot=()=>m();return L.useShortcut(_.Key.Enter,Rt,y),L.useShortcut(_.Key.Escape,K,y),L.useShortcut(_.Key.ArrowDown,mt,y),L.useShortcut(_.Key.ArrowUp,Et,y),n.useEffect(()=>{X(Z)},[f,B,c.length,Z]),n.useEffect(()=>{var t,r,s;(s=(r=(t=U.current)==null?void 0:t.querySelector('[data-active="true"]'))==null?void 0:r.scrollIntoView)==null||s.call(r,{block:"nearest"})},[b]),n.useEffect(()=>{c.some(t=>j(t))&&yt(!0)},[c]),a.jsxs(Vt,P(A({ref:Y,$readOnly:E,$value:o},wt),{children:[a.jsxs(Ft,{children:[a.jsx(ht.ChipInput,{ref:y,id:e,placeholder:l,value:o.map(t=>{var r;return(r=It[t])!=null?r:{code:t,label:t}}),invalidValue:g,searchValue:B,removeLabel:ct,readOnly:E,invalid:i,onSearchChange:$t,onPaste:gt,onRemove:qt,onFocus:Ot,lockedValues:vt}),!E&&a.jsx(Kt,{children:a.jsx(Gt.IconButton,{ghost:"borderless",level:"tertiary",size:"small",icon:a.jsx(Lt.ArrowDownIcon,{}),title:at,onClick:m,onFocus:K,tabIndex:0})})]}),f&&!E&&a.jsx(Pt.Overlay,{parentRef:Y,minWidth:pt,onClose:K,children:a.jsx(Tt,{ref:U,$withGroups:xt,children:bt?c.map((t,r)=>{var s;return j(t)?$(c[r+1])?a.jsx(Wt,{role:"option-group",ref:r===c.length-1?V:void 0,children:W.default.cloneElement(t)},(s=t.props)==null?void 0:s.title):null:a.jsx(Nt,{onClick:jt(t.props.value),ref:r===c.length-1?V:void 0,"data-active":r===b,$highlighted:r===b,children:W.default.cloneElement(t)},t.props.value)}):a.jsx(zt,{children:ut})})})]}))};it.displayName="MultiSelectInput.Option";st.displayName="MultiSelectInput.OptionGroup";z.Option=it;z.OptionGroup=st;exports.MultiSelectInput=z;
