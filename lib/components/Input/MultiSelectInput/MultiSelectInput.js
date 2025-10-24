"use strict";var vt=Object.defineProperty,wt=Object.defineProperties;var xt=Object.getOwnPropertyDescriptors;var R=Object.getOwnPropertySymbols;var z=Object.prototype.hasOwnProperty,K=Object.prototype.propertyIsEnumerable;var U=(e,r,o)=>r in e?vt(e,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[r]=o,b=(e,r)=>{for(var o in r||(r={}))z.call(r,o)&&U(e,o,r[o]);if(R)for(var o of R(r))K.call(r,o)&&U(e,o,r[o]);return e},g=(e,r)=>wt(e,xt(r));var m=(e,r)=>{var o={};for(var i in e)z.call(e,i)&&r.indexOf(i)<0&&(o[i]=e[i]);if(e!=null&&R)for(var i of R(e))r.indexOf(i)<0&&K.call(e,i)&&(o[i]=e[i]);return o};var u=require("react/jsx-runtime"),d=require("react"),yt=require("styled-components"),B=require("../../../shared/array.js"),W=require("../../../shared/key.js"),Ot=require("../common/Overlay.js"),It=require("../../IconButton/IconButton.js"),jt=require("../../../hooks/useBooleanState.js"),H=require("../../../hooks/useShortcut.js"),a=require("../../../theme/theme.js"),qt=require("../../../icons/ArrowDownIcon.js"),Rt=require("./ChipInput.js"),bt=require("../../../hooks/usePagination.js");function J(e){return e&&e.__esModule?e:{default:e}}var P=J(d),v=J(yt);const gt=v.default.div`
  width: 100%;

  & input[type='text'] {
    cursor: ${({readOnly:e})=>e?"not-allowed":"pointer"};
    background: ${({value:e,readOnly:r})=>e===null&&r?a.getColor("grey",20):"transparent"};

    &:focus {
      z-index: 2;
    }
  }
`,mt=v.default.div`
  position: relative;
`,$t=v.default.div`
  position: absolute;
  right: 8px;
  top: 0;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
`,Et=v.default.div`
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
`,Mt=v.default.div`
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
`,kt=v.default.div`
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
`,Gt=v.default.div`
  max-height: 320px;
  overflow-y: auto;
  padding-left: ${({withGroups:e})=>e?"20px":"0"};
`,Q=o=>{var i=o,{children:e}=i,r=m(i,["children"]);return u.jsx("span",g(b({},r),{children:e}))},T=o=>{var i=o,{children:e}=i,r=m(i,["children"]);return u.jsx("span",g(b({},r),{children:e}))},A=Pt=>{var D=Pt,{id:e,placeholder:r,invalid:o,value:i=[],invalidValue:X=[],emptyResultLabel:Y,children:Z=[],onChange:n,removeLabel:h,onSubmit:$,openLabel:C,readOnly:w=!1,verticalPosition:_t,onNextPage:S,onSearchChange:s,disableInternalSearch:tt=!1,disableAutoSelect:et=!1,lockedValues:rt=[],"aria-labelledby":Bt}=D,it=m(D,["id","placeholder","invalid","value","invalidValue","emptyResultLabel","children","onChange","removeLabel","onSubmit","openLabel","readOnly","verticalPosition","onNextPage","onSearchChange","disableInternalSearch","disableAutoSelect","lockedValues","aria-labelledby"]);const[F,x]=d.useState(""),[lt,ot]=d.useState(!1),[E,I,M]=jt.useBooleanState(),y=d.useRef(null),N=d.useRef(null),V=d.useRef(null),k=d.useRef(null),j=P.default.Children.toArray(Z).filter(t=>d.isValidElement(t)),q=t=>(t==null?void 0:t.type.displayName)==="MultiSelectInput.OptionGroup",G=t=>(t==null?void 0:t.type.displayName)==="MultiSelectInput.Option",st=j.reduce((t,l)=>{if(q(l))return t;const p=l.props.children,f=l.props.value;if(typeof p!="string")throw new Error("Multi select only accepts string as Option");if(Object.prototype.hasOwnProperty.call(t,f))throw new Error(`Duplicate option value ${f}`);return t[f]={code:f,label:p},t},{}),c=tt?j:j.filter(t=>{const l=t.props.value,p=l+t.props.children;return q(t)||!i.includes(l)&&p.toLowerCase().includes(F.toLowerCase())}),ut=d.useMemo(()=>c.some(t=>G(t)),[c]),nt=()=>{if(c.length>0&&E){const t=c.findIndex(p=>G(p)),l=c[t].props.value;n==null||n(B.arrayUnique([...i,l])),x(""),s==null||s(""),M()}else!w&&($==null||$())},pt=t=>{if(et){x(t),s==null||s(t),I();return}const p=t.split(new RegExp("(?:\\r\\n|[,;])+","g")).filter(O=>O.trim()!==""),f=p.filter(O=>j.map(ft=>ft.props.value).includes(O));n==null||n(B.arrayUnique([...i,...f]));const L=p.filter(O=>!f.includes(O)).join(",");x(L),s==null||s(L),I()},at=t=>{n==null||n(i.filter(l=>l!==t))},ct=t=>()=>{var l;n==null||n(B.arrayUnique([...i,t])),x(""),s==null||s(""),M(),(l=y.current)==null||l.focus()},_=()=>{var t;x(""),s==null||s(""),M(),(t=y.current)==null||t.blur()};bt.usePagination(V,k,S,E);const dt=()=>I();return H.useShortcut(W.Key.Enter,nt,y),H.useShortcut(W.Key.Escape,_,y),d.useEffect(()=>{c.some(t=>q(t))&&ot(!0)},[c]),u.jsxs(gt,g(b({ref:N,readOnly:w,value:i},it),{children:[u.jsxs(mt,{children:[u.jsx(Rt.ChipInput,{ref:y,id:e,placeholder:r,value:i.map(t=>{var l;return(l=st[t])!=null?l:{code:t,label:t}}),invalidValue:X,searchValue:F,removeLabel:h,readOnly:w,invalid:o,onSearchChange:pt,onRemove:at,onFocus:dt,lockedValues:rt}),!w&&u.jsx($t,{children:u.jsx(It.IconButton,{ghost:"borderless",level:"tertiary",size:"small",icon:u.jsx(qt.ArrowDownIcon,{}),title:C,onClick:I,onFocus:_,tabIndex:0})})]}),E&&!w&&u.jsx(Ot.Overlay,{parentRef:N,onClose:_,children:u.jsx(Gt,{ref:V,withGroups:lt,children:ut?c.map((t,l)=>{var p;return q(t)?G(c[l+1])?u.jsx(Mt,{role:"option-group",ref:l===c.length-1?k:void 0,children:P.default.cloneElement(t)},(p=t.props)==null?void 0:p.title):null:u.jsx(Et,{onClick:ct(t.props.value),ref:l===c.length-1?k:void 0,children:P.default.cloneElement(t)},t.props.value)}):u.jsx(kt,{children:Y})})})]}))};Q.displayName="MultiSelectInput.Option";T.displayName="MultiSelectInput.OptionGroup";A.Option=Q;A.OptionGroup=T;exports.MultiSelectInput=A;
