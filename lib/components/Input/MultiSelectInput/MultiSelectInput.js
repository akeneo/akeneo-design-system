"use strict";var bt=Object.defineProperty,It=Object.defineProperties;var $t=Object.getOwnPropertyDescriptors;var E=Object.getOwnPropertySymbols;var J=Object.prototype.hasOwnProperty,Q=Object.prototype.propertyIsEnumerable;var H=(e,r,o)=>r in e?bt(e,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[r]=o,O=(e,r)=>{for(var o in r||(r={}))J.call(r,o)&&H(e,o,r[o]);if(E)for(var o of E(r))Q.call(r,o)&&H(e,o,r[o]);return e},k=(e,r)=>It(e,$t(r));var M=(e,r)=>{var o={};for(var l in e)J.call(e,l)&&r.indexOf(l)<0&&(o[l]=e[l]);if(e!=null&&E)for(var l of E(e))r.indexOf(l)<0&&Q.call(e,l)&&(o[l]=e[l]);return o};var u=require("react/jsx-runtime"),c=require("react"),jt=require("styled-components"),P=require("../../../shared/array.js"),T=require("../../../shared/key.js"),qt=require("../common/Overlay.js"),mt=require("../../IconButton/IconButton.js"),Rt=require("../../../hooks/useBooleanState.js"),X=require("../../../hooks/useShortcut.js"),a=require("../../../theme/theme.js"),Et=require("../../../icons/ArrowDownIcon.js"),Ot=require("./ChipInput.js"),kt=require("../../../hooks/usePagination.js"),Mt=require("../../Locale/Locale.js");function Y(e){return e&&e.__esModule?e:{default:e}}var A=Y(c),x=Y(jt);const Gt=x.default.div`
  width: 100%;

  & input[type='text'] {
    cursor: ${({$readOnly:e})=>e?"not-allowed":"pointer"};
    background: ${({$value:e,$readOnly:r})=>e===null&&r?a.getColor("grey",20):"transparent"};

    &:focus {
      z-index: 2;
    }
  }
`,_t=x.default.div`
  position: relative;
`,gt=x.default.div`
  position: absolute;
  right: 8px;
  top: 0;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
`,Lt=x.default.div`
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
`,Bt=x.default.div`
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
`,Pt=x.default.div`
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
`,At=x.default.div`
  max-height: 320px;
  overflow-y: auto;
  padding-left: ${({$withGroups:e})=>e?"20px":"0"};
`,Z=l=>{var j=l,{children:e,enableLocaleRender:r}=j,o=M(j,["children","enableLocaleRender"]);return u.jsx("span",k(O({},o),{children:r?u.jsx(Mt.Locale,{code:o.value,languageLabel:e}):e}))},S=o=>{var l=o,{children:e}=l,r=M(l,["children"]);return u.jsx("span",k(O({},r),{children:e}))},D=Nt=>{var F=Nt,{id:e,placeholder:r,invalid:o,value:l=[],invalidValue:j=[],emptyResultLabel:h,children:C=[],onChange:p,removeLabel:tt,onSubmit:G,openLabel:et,readOnly:y=!1,verticalPosition:Dt,dropdownMinWidth:rt,onNextPage:lt,onSearchChange:s,disableInternalSearch:it=!1,disableAutoSelect:ot=!1,lockedValues:st=[],"aria-labelledby":Ft,onOpenChange:f}=F,ut=M(F,["id","placeholder","invalid","value","invalidValue","emptyResultLabel","children","onChange","removeLabel","onSubmit","openLabel","readOnly","verticalPosition","dropdownMinWidth","onNextPage","onSearchChange","disableInternalSearch","disableAutoSelect","lockedValues","aria-labelledby","onOpenChange"]);const[N,b]=c.useState(""),[pt,nt]=c.useState(!1),[v,V,U]=Rt.useBooleanState(),I=c.useRef(null),W=c.useRef(null),z=c.useRef(null),_=c.useRef(null),q=c.useCallback(()=>{V(),v||f==null||f(!0)},[v,V,f]),g=c.useCallback(()=>{U(),v&&(f==null||f(!1))},[v,U,f]),m=A.default.Children.toArray(C).filter(t=>c.isValidElement(t)),R=t=>(t==null?void 0:t.type.displayName)==="MultiSelectInput.OptionGroup",L=t=>(t==null?void 0:t.type.displayName)==="MultiSelectInput.Option",ct=m.reduce((t,i)=>{if(R(i))return t;const n=i.props.children,w=i.props.value;if(typeof n!="string")throw new Error("Multi select only accepts string as Option");if(Object.prototype.hasOwnProperty.call(t,w))throw new Error(`Duplicate option value ${w}`);return t[w]={code:w,label:n},t},{}),d=it?m:m.filter(t=>{const i=t.props.value,n=i+t.props.children;return R(t)||!l.includes(i)&&n.toLowerCase().includes(N.toLowerCase())}),at=c.useMemo(()=>d.some(t=>L(t)),[d]),dt=()=>{if(d.length>0&&v){const t=d.findIndex(n=>L(n)),i=d[t].props.value;p==null||p(P.arrayUnique([...l,i])),b(""),s==null||s(""),g()}else!y&&(G==null||G())},ft=t=>{if(ot){b(t),s==null||s(t),q();return}const n=t.split(new RegExp("(?:\\r\\n|[,;])+","g")).filter($=>$.trim()!==""),w=n.filter($=>m.map(yt=>yt.props.value).includes($));p==null||p(P.arrayUnique([...l,...w]));const K=n.filter($=>!w.includes($)).join(",");b(K),s==null||s(K),q()},vt=t=>{p==null||p(l.filter(i=>i!==t))},wt=t=>()=>{var i;p==null||p(P.arrayUnique([...l,t])),b(""),s==null||s(""),g(),(i=I.current)==null||i.focus()},B=()=>{var t;b(""),s==null||s(""),g(),(t=I.current)==null||t.blur()};kt.usePagination(z,_,lt,v);const xt=()=>q();return X.useShortcut(T.Key.Enter,dt,I),X.useShortcut(T.Key.Escape,B,I),c.useEffect(()=>{d.some(t=>R(t))&&nt(!0)},[d]),u.jsxs(Gt,k(O({ref:W,$readOnly:y,$value:l},ut),{children:[u.jsxs(_t,{children:[u.jsx(Ot.ChipInput,{ref:I,id:e,placeholder:r,value:l.map(t=>{var i;return(i=ct[t])!=null?i:{code:t,label:t}}),invalidValue:j,searchValue:N,removeLabel:tt,readOnly:y,invalid:o,onSearchChange:ft,onRemove:vt,onFocus:xt,lockedValues:st}),!y&&u.jsx(gt,{children:u.jsx(mt.IconButton,{ghost:"borderless",level:"tertiary",size:"small",icon:u.jsx(Et.ArrowDownIcon,{}),title:et,onClick:q,onFocus:B,tabIndex:0})})]}),v&&!y&&u.jsx(qt.Overlay,{parentRef:W,minWidth:rt,onClose:B,children:u.jsx(At,{ref:z,$withGroups:pt,children:at?d.map((t,i)=>{var n;return R(t)?L(d[i+1])?u.jsx(Bt,{role:"option-group",ref:i===d.length-1?_:void 0,children:A.default.cloneElement(t)},(n=t.props)==null?void 0:n.title):null:u.jsx(Lt,{onClick:wt(t.props.value),ref:i===d.length-1?_:void 0,children:A.default.cloneElement(t)},t.props.value)}):u.jsx(Pt,{children:h})})})]}))};Z.displayName="MultiSelectInput.Option";S.displayName="MultiSelectInput.OptionGroup";D.Option=Z;D.OptionGroup=S;exports.MultiSelectInput=D;
