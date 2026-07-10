"use strict";var yt=Object.defineProperty,bt=Object.defineProperties;var It=Object.getOwnPropertyDescriptors;var E=Object.getOwnPropertySymbols;var J=Object.prototype.hasOwnProperty,Q=Object.prototype.propertyIsEnumerable;var H=(e,r,o)=>r in e?yt(e,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[r]=o,O=(e,r)=>{for(var o in r||(r={}))J.call(r,o)&&H(e,o,r[o]);if(E)for(var o of E(r))Q.call(r,o)&&H(e,o,r[o]);return e},k=(e,r)=>bt(e,It(r));var M=(e,r)=>{var o={};for(var l in e)J.call(e,l)&&r.indexOf(l)<0&&(o[l]=e[l]);if(e!=null&&E)for(var l of E(e))r.indexOf(l)<0&&Q.call(e,l)&&(o[l]=e[l]);return o};var u=require("react/jsx-runtime"),c=require("react"),$t=require("styled-components"),P=require("../../../shared/array.js"),T=require("../../../shared/key.js"),jt=require("../common/Overlay.js"),qt=require("../../IconButton/IconButton.js"),Rt=require("../../../hooks/useBooleanState.js"),X=require("../../../hooks/useShortcut.js"),a=require("../../../theme/theme.js"),mt=require("../../../icons/ArrowDownIcon.js"),Et=require("./ChipInput.js"),Ot=require("../../../hooks/usePagination.js"),kt=require("../../Locale/Locale.js");function Y(e){return e&&e.__esModule?e:{default:e}}var A=Y(c),x=Y($t);const Mt=x.default.div`
  width: 100%;

  & input[type='text'] {
    cursor: ${({$readOnly:e})=>e?"not-allowed":"pointer"};
    background: ${({$value:e,$readOnly:r})=>e===null&&r?a.getColor("grey",20):"transparent"};

    &:focus {
      z-index: 2;
    }
  }
`,Gt=x.default.div`
  position: relative;
`,_t=x.default.div`
  position: absolute;
  right: 8px;
  top: 0;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
`,gt=x.default.div`
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
`,Lt=x.default.div`
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
`,Bt=x.default.div`
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
`,Pt=x.default.div`
  max-height: 320px;
  overflow-y: auto;
  padding-left: ${({$withGroups:e})=>e?"20px":"0"};
`,Z=l=>{var j=l,{children:e,enableLocaleRender:r}=j,o=M(j,["children","enableLocaleRender"]);return u.jsx("span",k(O({},o),{children:r?u.jsx(kt.Locale,{code:o.value,languageLabel:e}):e}))},S=o=>{var l=o,{children:e}=l,r=M(l,["children"]);return u.jsx("span",k(O({},r),{children:e}))},D=Ft=>{var F=Ft,{id:e,placeholder:r,invalid:o,value:l=[],invalidValue:j=[],emptyResultLabel:h,children:C=[],onChange:p,removeLabel:tt,onSubmit:G,openLabel:et,readOnly:y=!1,verticalPosition:At,onNextPage:rt,onSearchChange:s,disableInternalSearch:lt=!1,disableAutoSelect:it=!1,lockedValues:ot=[],"aria-labelledby":Dt,onOpenChange:f}=F,st=M(F,["id","placeholder","invalid","value","invalidValue","emptyResultLabel","children","onChange","removeLabel","onSubmit","openLabel","readOnly","verticalPosition","onNextPage","onSearchChange","disableInternalSearch","disableAutoSelect","lockedValues","aria-labelledby","onOpenChange"]);const[N,b]=c.useState(""),[ut,pt]=c.useState(!1),[v,V,U]=Rt.useBooleanState(),I=c.useRef(null),z=c.useRef(null),K=c.useRef(null),_=c.useRef(null),q=c.useCallback(()=>{V(),v||f==null||f(!0)},[v,V,f]),g=c.useCallback(()=>{U(),v&&(f==null||f(!1))},[v,U,f]),R=A.default.Children.toArray(C).filter(t=>c.isValidElement(t)),m=t=>(t==null?void 0:t.type.displayName)==="MultiSelectInput.OptionGroup",L=t=>(t==null?void 0:t.type.displayName)==="MultiSelectInput.Option",nt=R.reduce((t,i)=>{if(m(i))return t;const n=i.props.children,w=i.props.value;if(typeof n!="string")throw new Error("Multi select only accepts string as Option");if(Object.prototype.hasOwnProperty.call(t,w))throw new Error(`Duplicate option value ${w}`);return t[w]={code:w,label:n},t},{}),d=lt?R:R.filter(t=>{const i=t.props.value,n=i+t.props.children;return m(t)||!l.includes(i)&&n.toLowerCase().includes(N.toLowerCase())}),ct=c.useMemo(()=>d.some(t=>L(t)),[d]),at=()=>{if(d.length>0&&v){const t=d.findIndex(n=>L(n)),i=d[t].props.value;p==null||p(P.arrayUnique([...l,i])),b(""),s==null||s(""),g()}else!y&&(G==null||G())},dt=t=>{if(it){b(t),s==null||s(t),q();return}const n=t.split(new RegExp("(?:\\r\\n|[,;])+","g")).filter($=>$.trim()!==""),w=n.filter($=>R.map(xt=>xt.props.value).includes($));p==null||p(P.arrayUnique([...l,...w]));const W=n.filter($=>!w.includes($)).join(",");b(W),s==null||s(W),q()},ft=t=>{p==null||p(l.filter(i=>i!==t))},vt=t=>()=>{var i;p==null||p(P.arrayUnique([...l,t])),b(""),s==null||s(""),g(),(i=I.current)==null||i.focus()},B=()=>{var t;b(""),s==null||s(""),g(),(t=I.current)==null||t.blur()};Ot.usePagination(K,_,rt,v);const wt=()=>q();return X.useShortcut(T.Key.Enter,at,I),X.useShortcut(T.Key.Escape,B,I),c.useEffect(()=>{d.some(t=>m(t))&&pt(!0)},[d]),u.jsxs(Mt,k(O({ref:z,$readOnly:y,$value:l},st),{children:[u.jsxs(Gt,{children:[u.jsx(Et.ChipInput,{ref:I,id:e,placeholder:r,value:l.map(t=>{var i;return(i=nt[t])!=null?i:{code:t,label:t}}),invalidValue:j,searchValue:N,removeLabel:tt,readOnly:y,invalid:o,onSearchChange:dt,onRemove:ft,onFocus:wt,lockedValues:ot}),!y&&u.jsx(_t,{children:u.jsx(qt.IconButton,{ghost:"borderless",level:"tertiary",size:"small",icon:u.jsx(mt.ArrowDownIcon,{}),title:et,onClick:q,onFocus:B,tabIndex:0})})]}),v&&!y&&u.jsx(jt.Overlay,{parentRef:z,onClose:B,children:u.jsx(Pt,{ref:K,$withGroups:ut,children:ct?d.map((t,i)=>{var n;return m(t)?L(d[i+1])?u.jsx(Lt,{role:"option-group",ref:i===d.length-1?_:void 0,children:A.default.cloneElement(t)},(n=t.props)==null?void 0:n.title):null:u.jsx(gt,{onClick:vt(t.props.value),ref:i===d.length-1?_:void 0,children:A.default.cloneElement(t)},t.props.value)}):u.jsx(Bt,{children:h})})})]}))};Z.displayName="MultiSelectInput.Option";S.displayName="MultiSelectInput.OptionGroup";D.Option=Z;D.OptionGroup=S;exports.MultiSelectInput=D;
