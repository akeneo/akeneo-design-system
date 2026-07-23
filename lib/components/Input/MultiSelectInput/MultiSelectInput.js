"use strict";var Rt=Object.defineProperty,gt=Object.defineProperties;var Et=Object.getOwnPropertyDescriptors;var k=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var Z=(e,i,o)=>i in e?Rt(e,i,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[i]=o,M=(e,i)=>{for(var o in i||(i={}))S.call(i,o)&&Z(e,o,i[o]);if(k)for(var o of k(i))C.call(i,o)&&Z(e,o,i[o]);return e},A=(e,i)=>gt(e,Et(i));var G=(e,i)=>{var o={};for(var l in e)S.call(e,l)&&i.indexOf(l)<0&&(o[l]=e[l]);if(e!=null&&k)for(var l of k(e))i.indexOf(l)<0&&C.call(e,l)&&(o[l]=e[l]);return o};var c=require("react/jsx-runtime"),n=require("react"),kt=require("styled-components"),K=require("../../../shared/array.js"),D=require("../../../shared/key.js"),Mt=require("../common/Overlay.js"),At=require("../../IconButton/IconButton.js"),Gt=require("../../../hooks/useBooleanState.js"),P=require("../../../hooks/useShortcut.js"),a=require("../../../theme/theme.js"),Dt=require("../../../icons/ArrowDownIcon.js"),Pt=require("./ChipInput.js"),_t=require("../../../hooks/usePagination.js"),Lt=require("../../Locale/Locale.js");function tt(e){return e&&e.__esModule?e:{default:e}}var N=tt(n),y=tt(kt);const Bt=y.default.div`
  width: 100%;

  & input[type='text'] {
    cursor: ${({$readOnly:e})=>e?"not-allowed":"pointer"};
    background: ${({$value:e,$readOnly:i})=>e===null&&i?a.getColor("grey",20):"transparent"};

    &:focus {
      z-index: 2;
    }
  }
`,Ut=y.default.div`
  position: relative;
`,Vt=y.default.div`
  position: absolute;
  right: 8px;
  top: 0;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
`,Ft=y.default.div`
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
`,Kt=y.default.div`
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
`,Nt=y.default.div`
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
`,Wt=y.default.div`
  max-height: 320px;
  overflow-y: auto;
  padding-left: ${({$withGroups:e})=>e?"20px":"0"};
`,et=l=>{var O=l,{children:e,enableLocaleRender:i}=O,o=G(O,["children","enableLocaleRender"]);return c.jsx("span",A(M({},o),{children:i?c.jsx(Lt.Locale,{code:o.value,languageLabel:e}):e}))},rt=o=>{var l=o,{children:e}=l,i=G(l,["children"]);return c.jsx("span",A(M({},i),{children:e}))},W=Ht=>{var z=Ht,{id:e,placeholder:i,invalid:o,value:l=[],invalidValue:O=[],emptyResultLabel:it,children:lt=[],onChange:d,removeLabel:ot,onSubmit:_,openLabel:st,readOnly:m=!1,verticalPosition:zt,dropdownMinWidth:ut,onNextPage:nt,onSearchChange:u,disableInternalSearch:pt=!1,disableAutoSelect:ct=!1,lockedValues:at=[],"aria-labelledby":ht,onOpenChange:v}=z,dt=G(z,["id","placeholder","invalid","value","invalidValue","emptyResultLabel","children","onChange","removeLabel","onSubmit","openLabel","readOnly","verticalPosition","dropdownMinWidth","onNextPage","onSearchChange","disableInternalSearch","disableAutoSelect","lockedValues","aria-labelledby","onOpenChange"]);const[L,$]=n.useState(""),[ft,vt]=n.useState(!1),[I,h]=n.useState(0),[f,H,J]=Gt.useBooleanState(),w=n.useRef(null),Q=n.useRef(null),B=n.useRef(null),U=n.useRef(null),b=n.useCallback(()=>{H(),f||v==null||v(!0)},[f,H,v]),V=n.useCallback(()=>{J(),f&&(v==null||v(!1))},[f,J,v]),R=N.default.Children.toArray(lt).filter(t=>n.isValidElement(t)),g=t=>(t==null?void 0:t.type.displayName)==="MultiSelectInput.OptionGroup",q=t=>(t==null?void 0:t.type.displayName)==="MultiSelectInput.Option",wt=R.reduce((t,r)=>{if(g(r))return t;const s=r.props.children,x=r.props.value;if(typeof s!="string")throw new Error("Multi select only accepts string as Option");if(Object.prototype.hasOwnProperty.call(t,x))throw new Error(`Duplicate option value ${x}`);return t[x]={code:x,label:s},t},{}),p=pt?R:R.filter(t=>{const r=t.props.value,s=r+t.props.children;return g(t)||!l.includes(r)&&s.toLowerCase().includes(L.toLowerCase())}),xt=n.useMemo(()=>p.some(t=>q(t)),[p]),T=p.findIndex(t=>q(t)),E=p.reduce((t,r,s)=>(q(r)&&t.push(s),t),[]),X=t=>{if(E.length===0)return;const r=E.indexOf(I),s=Math.min(Math.max(r+t,0),E.length-1);h(E[s])},yt=t=>{if(t.preventDefault(),!f){b();return}X(1)},It=t=>{if(t.preventDefault(),!f){b();return}X(-1)},bt=()=>{if(p.length>0&&f&&q(p[I])){const t=p[I].props.value;d==null||d(K.arrayUnique([...l,t])),$(""),u==null||u(""),V()}else!m&&(_==null||_())},mt=t=>{if(ct){$(t),u==null||u(t),b();return}const s=t.split(new RegExp("(?:\\r\\n|[,;])+","g")).filter(j=>j.trim()!==""),x=s.filter(j=>R.map(Ot=>Ot.props.value).includes(j));d==null||d(K.arrayUnique([...l,...x]));const Y=s.filter(j=>!x.includes(j)).join(",");$(Y),u==null||u(Y),b()},$t=t=>{d==null||d(l.filter(r=>r!==t))},qt=t=>()=>{var r;d==null||d(K.arrayUnique([...l,t])),$(""),u==null||u(""),V(),(r=w.current)==null||r.focus()},F=()=>{var t;$(""),u==null||u(""),V(),(t=w.current)==null||t.blur()};_t.usePagination(B,U,nt,f);const jt=()=>b();return P.useShortcut(D.Key.Enter,bt,w),P.useShortcut(D.Key.Escape,F,w),P.useShortcut(D.Key.ArrowDown,yt,w),P.useShortcut(D.Key.ArrowUp,It,w),n.useEffect(()=>{h(T)},[f,L,p.length,T]),n.useEffect(()=>{var t,r,s;(s=(r=(t=B.current)==null?void 0:t.querySelector('[data-active="true"]'))==null?void 0:r.scrollIntoView)==null||s.call(r,{block:"nearest"})},[I]),n.useEffect(()=>{p.some(t=>g(t))&&vt(!0)},[p]),c.jsxs(Bt,A(M({ref:Q,$readOnly:m,$value:l},dt),{children:[c.jsxs(Ut,{children:[c.jsx(Pt.ChipInput,{ref:w,id:e,placeholder:i,value:l.map(t=>{var r;return(r=wt[t])!=null?r:{code:t,label:t}}),invalidValue:O,searchValue:L,removeLabel:ot,readOnly:m,invalid:o,onSearchChange:mt,onRemove:$t,onFocus:jt,lockedValues:at}),!m&&c.jsx(Vt,{children:c.jsx(At.IconButton,{ghost:"borderless",level:"tertiary",size:"small",icon:c.jsx(Dt.ArrowDownIcon,{}),title:st,onClick:b,onFocus:F,tabIndex:0})})]}),f&&!m&&c.jsx(Mt.Overlay,{parentRef:Q,minWidth:ut,onClose:F,children:c.jsx(Wt,{ref:B,$withGroups:ft,children:xt?p.map((t,r)=>{var s;return g(t)?q(p[r+1])?c.jsx(Kt,{role:"option-group",ref:r===p.length-1?U:void 0,children:N.default.cloneElement(t)},(s=t.props)==null?void 0:s.title):null:c.jsx(Ft,{onClick:qt(t.props.value),ref:r===p.length-1?U:void 0,"data-active":r===I,$highlighted:r===I,children:N.default.cloneElement(t)},t.props.value)}):c.jsx(Nt,{children:it})})})]}))};et.displayName="MultiSelectInput.Option";rt.displayName="MultiSelectInput.OptionGroup";W.Option=et;W.OptionGroup=rt;exports.MultiSelectInput=W;
