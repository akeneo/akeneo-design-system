"use strict";var ht=Object.defineProperty,Ut=Object.defineProperties;var Kt=Object.getOwnPropertyDescriptors;var B=Object.getOwnPropertySymbols;var vt=Object.prototype.hasOwnProperty,wt=Object.prototype.propertyIsEnumerable;var dt=(e,s,u)=>s in e?ht(e,s,{enumerable:!0,configurable:!0,writable:!0,value:u}):e[s]=u,G=(e,s)=>{for(var u in s||(s={}))vt.call(s,u)&&dt(e,u,s[u]);if(B)for(var u of B(s))wt.call(s,u)&&dt(e,u,s[u]);return e},_=(e,s)=>Ut(e,Kt(s));var V=(e,s)=>{var u={};for(var o in e)vt.call(e,o)&&s.indexOf(o)<0&&(u[o]=e[o]);if(e!=null&&B)for(var o of B(e))s.indexOf(o)<0&&wt.call(e,o)&&(u[o]=e[o]);return u};var p=require("react/jsx-runtime"),n=require("react"),Nt=require("styled-components"),H=require("../../../shared/array.js"),h=require("../../../shared/key.js"),zt=require("../common/Overlay.js"),Ft=require("../../IconButton/IconButton.js"),Tt=require("../../../hooks/useBooleanState.js"),U=require("../../../hooks/useShortcut.js"),f=require("../../../theme/theme.js"),Wt=require("../../../icons/ArrowDownIcon.js"),Ht=require("./ChipInput.js"),Jt=require("../../../hooks/usePagination.js"),Qt=require("../../Locale/Locale.js");function yt(e){return e&&e.__esModule?e:{default:e}}var J=yt(n),b=yt(Nt);const Xt=["\\r","\\n","\\t",",",";"],Yt=b.default.div`
  width: 100%;

  & input[type='text'] {
    cursor: ${({$readOnly:e})=>e?"not-allowed":"pointer"};
    background: ${({$value:e,$readOnly:s})=>e===null&&s?f.getColor("grey",20):"transparent"};

    &:focus {
      z-index: 2;
    }
  }
`,Zt=b.default.div`
  position: relative;
`,St=b.default.div`
  position: absolute;
  right: 8px;
  top: 0;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
`,Ct=b.default.div`
  background: ${({$highlighted:e})=>e?f.getColor("grey",20):f.getColor("white")};
  height: 34px;
  padding: 0 20px;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({$highlighted:e})=>e?f.getColor("brand",140):f.getColor("grey",120)};
  line-height: 34px;

  &:focus {
    color: ${f.getColor("grey",120)};
  }
  &:hover {
    background: ${f.getColor("grey",20)};
    color: ${f.getColor("brand",140)};
  }
  &:active {
    color: ${f.getColor("brand",100)};
    font-weight: 700;
  }
  &:disabled {
    color: ${f.getColor("grey",100)};
  }
`,te=b.default.div`
  background: ${f.getColor("white")};
  height: 34px;
  padding: 0 20px 0 0;
  align-items: center;
  gap: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${f.getColor("grey",100)};
  line-height: 34px;
  text-transform: uppercase;
`,ee=b.default.div`
  background: ${f.getColor("white")};
  height: 20px;
  padding: 0 20px;
  align-items: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${f.getColor("grey",100)};
  line-height: 20px;
  text-align: center;
`,re=b.default.div`
  max-height: 320px;
  overflow-y: auto;
  padding-left: ${({$withGroups:e})=>e?"20px":"0"};
`,xt=X=>{var A=X,{children:e,enableLocaleRender:s,pasteAliases:u}=A,o=V(A,["children","enableLocaleRender","pasteAliases"]);return p.jsx("span",_(G({},o),{children:s?p.jsx(Qt.Locale,{code:o.value,languageLabel:e}):e}))},gt=u=>{var o=u,{children:e}=o,s=V(o,["children"]);return p.jsx("span",_(G({},s),{children:e}))},R=e=>(e==null?void 0:e.type.displayName)==="MultiSelectInput.OptionGroup",q=e=>(e==null?void 0:e.type.displayName)==="MultiSelectInput.Option",Q=le=>{var C=le,{id:e,placeholder:s,invalid:u,value:o=[],invalidValue:X=[],emptyResultLabel:A,children:Y=[],onChange:d,removeLabel:bt,onSubmit:K,openLabel:mt,readOnly:$=!1,verticalPosition:oe,dropdownMinWidth:It,separators:$t=Xt,onNextPage:jt,onSearchChange:a,optionsFilteredExternally:N=!1,disableAutoSelect:Z=!1,keepDropdownOnSelect:S=!1,resolvePastedLabels:Et=!1,lockedValues:Mt=[],"aria-labelledby":se,onOpenChange:x}=C,Ot=V(C,["id","placeholder","invalid","value","invalidValue","emptyResultLabel","children","onChange","removeLabel","onSubmit","openLabel","readOnly","verticalPosition","dropdownMinWidth","separators","onNextPage","onSearchChange","optionsFilteredExternally","disableAutoSelect","keepDropdownOnSelect","resolvePastedLabels","lockedValues","aria-labelledby","onOpenChange"]);const tt=new RegExp(`[${$t.join("")}]+`,"g"),[D,j]=n.useState(""),[Rt,qt]=n.useState(!1),[m,et]=n.useState(0),[v,rt,ot]=Tt.useBooleanState(),g=n.useRef(null),st=n.useRef(null),z=n.useRef(null),F=n.useRef(null),I=n.useCallback(()=>{rt(),v||x==null||x(!0)},[v,rt,x]),T=n.useCallback(()=>{ot(),v&&(x==null||x(!1))},[v,ot,x]),E=n.useMemo(()=>J.default.Children.toArray(Y).filter(t=>n.isValidElement(t)),[Y]),lt=n.useMemo(()=>E.reduce((t,r)=>{if(R(r))return t;const i=r.props.children,y=r.props.value;if(typeof i!="string")throw new Error("Multi select only accepts string as Option");if(Object.prototype.hasOwnProperty.call(t,y))throw new Error(`Duplicate option value ${y}`);return t[y]={code:y,label:i},t},{}),[E]),c=n.useMemo(()=>E.filter(t=>{const r=t.props.value,i=r+t.props.children;return R(t)||!o.includes(r)&&(N||i.toLowerCase().includes(D.toLowerCase()))}),[N,E,D,o]),At=n.useMemo(()=>c.some(t=>q(t)),[c]),it=c.findIndex(t=>q(t)),L=c.reduce((t,r,i)=>(q(r)&&t.push(i),t),[]),ut=t=>{if(L.length===0)return;const r=L.indexOf(m),i=Math.min(Math.max(r+t,0),L.length-1);et(L[i])},Dt=t=>{if(t.preventDefault(),!v){I();return}ut(1)},Lt=t=>{if(t.preventDefault(),!v){I();return}ut(-1)},kt=()=>{var t;if(c.length>0&&v&&q(c[m])){const r=c[m].props.value;d==null||d(H.arrayUnique([...o,r])),j(""),a==null||a(""),S||T(),(t=g.current)==null||t.focus()}else!$&&(K==null||K())},nt=(t,r)=>{const i=t.split(tt).map(l=>l.trim()).filter(l=>l!==""),y=Object.values(lt),k=new Map,M=new Map,O=new Map;y.forEach(({code:l})=>{k.set(l,l)}),E.forEach(l=>{var w;R(l)||(w=l.props.pasteAliases)==null||w.forEach(P=>M.set(P,l.props.value))}),Et&&y.forEach(({code:l,label:w})=>{O.set(w.toLowerCase(),l)});const at=l=>{var w,P;return(P=(w=k.get(l))!=null?w:M.get(l))!=null?P:O.get(l.toLowerCase())},ct=N&&r&&i.length>1,pt=i.flatMap(l=>{const w=at(l);return w!==void 0?[w]:ct?[l]:[]});d==null||d(H.arrayUnique([...o,...pt]));const ft=pt.length===0?t:ct?"":i.filter(l=>at(l)===void 0).join(",");j(ft),a==null||a(ft),I()},Pt=t=>{if(Z||t.match(tt)===null){j(t),a==null||a(t),I();return}nt(t,!1)},Bt=t=>{var M,O;if(Z||!t.clipboardData)return;t.preventDefault();const r=t.currentTarget,i=(M=r.selectionStart)!=null?M:r.value.length,y=(O=r.selectionEnd)!=null?O:r.value.length,k=r.value.slice(0,i)+t.clipboardData.getData("text")+r.value.slice(y);nt(k,!0)},Gt=t=>{d==null||d(o.filter(r=>r!==t))},_t=t=>()=>{var r;d==null||d(H.arrayUnique([...o,t])),j(""),a==null||a(""),S||T(),(r=g.current)==null||r.focus()},W=()=>{var t;j(""),a==null||a(""),T(),(t=g.current)==null||t.blur()};Jt.usePagination(z,F,jt,v,c);const Vt=()=>I();return U.useShortcut(h.Key.Enter,kt,g),U.useShortcut(h.Key.Escape,W,g),U.useShortcut(h.Key.ArrowDown,Dt,g),U.useShortcut(h.Key.ArrowUp,Lt,g),n.useEffect(()=>{et(it)},[v,D,c.length,it]),n.useEffect(()=>{var t,r,i;(i=(r=(t=z.current)==null?void 0:t.querySelector('[data-active="true"]'))==null?void 0:r.scrollIntoView)==null||i.call(r,{block:"nearest"})},[m]),n.useEffect(()=>{c.some(t=>R(t))&&qt(!0)},[c]),p.jsxs(Yt,_(G({ref:st,$readOnly:$,$value:o},Ot),{children:[p.jsxs(Zt,{children:[p.jsx(Ht.ChipInput,{ref:g,id:e,placeholder:s,value:o.map(t=>{var r;return(r=lt[t])!=null?r:{code:t,label:t}}),invalidValue:X,searchValue:D,removeLabel:bt,readOnly:$,invalid:u,onSearchChange:Pt,onPaste:Bt,onRemove:Gt,onFocus:Vt,lockedValues:Mt}),!$&&p.jsx(St,{children:p.jsx(Ft.IconButton,{ghost:"borderless",level:"tertiary",size:"small",icon:p.jsx(Wt.ArrowDownIcon,{}),title:mt,onClick:I,onFocus:W,tabIndex:0})})]}),v&&!$&&p.jsx(zt.Overlay,{parentRef:st,minWidth:It,onClose:W,children:p.jsx(re,{ref:z,$withGroups:Rt,children:At?c.map((t,r)=>{var i;return R(t)?q(c[r+1])?p.jsx(te,{role:"option-group",ref:r===c.length-1?F:void 0,children:J.default.cloneElement(t)},(i=t.props)==null?void 0:i.title):null:p.jsx(Ct,{onClick:_t(t.props.value),ref:r===c.length-1?F:void 0,"data-active":r===m,$highlighted:r===m,children:J.default.cloneElement(t)},t.props.value)}):p.jsx(ee,{children:A})})})]}))};xt.displayName="MultiSelectInput.Option";gt.displayName="MultiSelectInput.OptionGroup";Q.Option=xt;Q.OptionGroup=gt;exports.MultiSelectInput=Q;
