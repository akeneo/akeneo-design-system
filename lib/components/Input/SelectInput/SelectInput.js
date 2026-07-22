"use strict";var Re=Object.defineProperty,qe=Object.defineProperties;var Oe=Object.getOwnPropertyDescriptors;var R=Object.getOwnPropertySymbols;var ie=Object.prototype.hasOwnProperty,se=Object.prototype.propertyIsEnumerable;var le=(t,r,i)=>r in t?Re(t,r,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[r]=i,M=(t,r)=>{for(var i in r||(r={}))ie.call(r,i)&&le(t,i,r[i]);if(R)for(var i of R(r))se.call(r,i)&&le(t,i,r[i]);return t},V=(t,r)=>qe(t,Oe(r));var B=(t,r)=>{var i={};for(var o in t)ie.call(t,o)&&r.indexOf(o)<0&&(i[o]=t[o]);if(t!=null&&R)for(var o of R(t))r.indexOf(o)<0&&se.call(t,o)&&(i[o]=t[o]);return i};var n=require("react/jsx-runtime"),l=require("react"),P=require("styled-components"),p=require("../../../shared/key.js"),Ae=require("../common/Overlay.js"),ne=require("../../IconButton/IconButton.js"),ze=require("../TextInput/TextInput.js"),Te=require("../../../hooks/useBooleanState.js"),Ce=require("../../../hooks/useShortcut.js"),u=require("../../../theme/theme.js"),Ge=require("../../../icons/ArrowDownIcon.js"),_e=require("../../../icons/CloseIcon.js"),Me=require("../../../icons/LockIcon.js"),Ve=require("../../../hooks/usePagination.js");function ue(t){return t&&t.__esModule?t:{default:t}}var L=ue(l),a=ue(P);const Be=t=>t.length>0&&t.every(r=>{var i,o;return(o=(i=r.props)==null?void 0:i.disabled)!=null?o:!1}),Le={default:34,big:44},Ne=a.default.div`
  width: 100%;

  & input[type='text'] {
    cursor: ${({readOnly:t})=>t?"not-allowed":"pointer"};
    background: ${({value:t,readOnly:r})=>t===null&&r?u.getColor("grey",20):"transparent"};

    &:focus {
      z-index: 2;
    }
  }
`,Pe=a.default.div`
  position: relative;
  background: ${u.getColor("white")};
`,Ue=a.default(ze.TextInput)`
  &::placeholder {
    opacity: ${({$isPlaceholderVisible:t})=>t?1:0};
  }
`,Fe=a.default.div`
  position: absolute;
  right: 8px;
  top: 0;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  z-index: 2;
`,We=a.default.div`
  position: relative;
  margin-bottom: -34px;
  top: 3px;
  width: 100%;
  height: 34px;
  display: flex;
  align-items: center;
  padding: 0 ${({$clearable:t})=>t?68:38}px 0 16px;
  background: ${({readOnly:t})=>t?u.getColor("grey",20):u.getColor("white")};
  box-sizing: border-box;
  color: ${({readOnly:t})=>t?u.getColor("grey",100):u.getColor("grey",140)};
`,He=a.default.span`
  display: block;
  flex: 1;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Je=a.default.div`
  background: ${u.getColor("white")};
  min-height: ${({$size:t})=>Le[t]}px;
  padding: 0 20px;
  align-items: center;
  gap: 10px;
  cursor: ${({disabled:t})=>t?"not-allowed":"pointer"};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({disabled:t})=>t?u.getColor("grey",100):u.getColor("grey",120)};
  line-height: 34px;
  display: flex;
  justify-content: space-between;

  ${({disabled:t})=>!t&&P.css`
      &:focus {
        background: ${u.getColor("grey",20)};
        color: ${u.getColor("brand",140)};
      }
      &:hover {
        background: ${u.getColor("grey",20)};
        color: ${u.getColor("brand",140)};
      }
      &:active {
        color: ${u.getColor("brand",100)};
        font-weight: 700;
      }
    `}
`,Qe=a.default.div`
  background: ${u.getColor("white")};
  height: 20px;
  padding: 0 20px;
  align-items: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${u.getColor("grey",100)};
  line-height: 20px;
  text-align: center;
`,Xe=a.default.div`
  max-height: 320px;
  overflow-y: auto;
  padding-left: ${({$withGroups:t})=>t?"20px":"0"};
`,ae=P.css`
  display: block;
  line-height: 34px;
  min-height: 34px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,ce=a.default.span`
  ${ae};
`,pe=a.default.span`
  ${ae};
`,Ye=a.default.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
  line-height: normal;
  overflow: hidden;
`,Ze=a.default.span`
  color: ${u.getColor("grey",100)};
  font-size: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
`,et=a.default.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1;
`,tt=o=>{var S=o,{label:t,children:r}=S,i=B(S,["label","children"]);return n.jsxs(Ye,V(M({},i),{children:[n.jsx(Ze,{title:t,children:t}),n.jsx(et,{children:r})]}))},rt=a.default.div`
  background: ${u.getColor("white")};
  height: 34px;
  padding: 0 20px 0 0;
  align-items: center;
  gap: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${u.getColor("grey",100)};
  line-height: 34px;
  display: flex;
  justify-content: space-between;
  text-transform: uppercase;
`,q=t=>(t==null?void 0:t.type.displayName)==="SelectInput.OptionGroup",N=t=>(t==null?void 0:t.type.displayName)==="SelectInput.Option",O=ot=>{var H=ot,{id:t,placeholder:r,invalid:i,value:o,emptyResultLabel:S,children:U,onChange:d,clearable:F=!0,clearLabel:de="",openLabel:fe,readOnly:h=!1,verticalPosition:xe,onNextPage:ye,onSearchChange:$,disableInternalSearch:W=!1,"aria-labelledby":we,selectedValueComponent:A,onOpenChange:w,title:z,keepDropdownOnSelect:ge=!1,size:ve="default"}=H,be=B(H,["id","placeholder","invalid","value","emptyResultLabel","children","onChange","clearable","clearLabel","openLabel","readOnly","verticalPosition","onNextPage","onSearchChange","disableInternalSearch","aria-labelledby","selectedValueComponent","onOpenChange","title","keepDropdownOnSelect","size"]);var ee,te;const[g,j]=l.useState(""),[he,ke]=l.useState(!1),[v,J,Q]=Te.useBooleanState(),k=l.useRef(null),X=l.useRef(null),T=l.useRef(null),Y=l.useRef(null),C=l.useRef(null),m=l.useCallback(()=>{J(),w==null||w(!0)},[J,w]),G=l.useCallback(()=>{Q(),w==null||w(!1)},[Q,w]),I=l.useMemo(()=>L.default.Children.toArray(U).filter(e=>l.isValidElement(e)),[U]);h=h||Be(I),I.reduce((e,s)=>{if(q(s))return e;if(e.includes(s.props.value))throw new Error(`Duplicate option value ${s.props.value}`);return e.push(s.props.value),e},[]);const f=l.useMemo(()=>W?I:I.filter(e=>{var E;const s=typeof e.props.children=="string"?e.props.children:"",y=(E=e.props.title)!=null?E:"",c=e.props.value+s+y;return q(e)||c.toLowerCase().includes(g.toLowerCase())}),[W,I,g]),$e=l.useMemo(()=>f.some(e=>N(e)),[f]),me=l.useMemo(()=>f.findIndex(e=>N(e)),[f]),x=(ee=I.find(e=>{const s=e.props.value;return o===s}))!=null?ee:o,_=typeof x=="string"?x:l.isValidElement(x)?(te=x.props.title)!=null?te:typeof x.props.children=="string"?x.props.children:void 0:void 0,Ie=l.isValidElement(x)?l.cloneElement(x,{title:void 0}):x,je=e=>{$==null||$(e),j(e),m()},De=(e,s)=>()=>{s||(d==null||d(e),Z())},Ee=e=>{var s;d==null||d(null),e.preventDefault(),(s=k.current)==null||s.focus()},D=()=>{var e;j(""),G(),(e=k.current)==null||e.focus()},Z=()=>{var e;ge?(j(""),$==null||$(""),(e=k.current)==null||e.focus()):D()};Ce.useShortcut(p.Key.Escape,D,k);const Ke=l.useCallback(e=>{var s;e.currentTarget!==null&&(e.key===p.Key.Tab&&(j(""),G()),e.key===p.Key.ArrowDown?(e.preventDefault(),v?(s=T.current||C.current)==null||s.focus():m()):e.key===p.Key.ArrowUp?(e.preventDefault(),m()):e.key===p.Key.Enter&&(e.preventDefault(),v||m()))},[o,v]);l.useEffect(()=>{var e;v&&g===""&&((e=C.current||T.current)==null||e.focus())},[v]),l.useEffect(()=>{f.some(e=>q(e))&&ke(!0)},[f]);const Se=l.useCallback((e,s)=>{var y,b;if(e.currentTarget!==null)if(e.key===p.Key.Tab&&(j(""),G()),[p.Key.ArrowDown,p.Key.ArrowUp,p.Key.Enter,p.Key.Escape].includes(e.key)){if(e.key===p.Key.ArrowDown){const c=e.currentTarget.nextSibling;c==null||c.focus(),e.preventDefault()}if(e.key===p.Key.ArrowUp){const c=e.currentTarget.previousSibling;c==null||c.focus(),e.preventDefault()}if(e.key===p.Key.Enter&&!s){const c=(y=e.currentTarget.firstChild)==null?void 0:y.getAttribute("value");d==null||d(c),Z()}e.key===p.Key.Escape&&D()}else(b=k.current)==null||b.focus()},[d,o]);return Ve.usePagination(X,Y,ye,v,f),n.jsxs(Ne,V(M({readOnly:h,value:o},be),{children:[n.jsxs(Pe,{children:[o!==null&&g===""&&(A!=null?A:n.jsx(We,{readOnly:h,$clearable:F,children:n.jsx(He,{children:Ie})})),n.jsx(Ue,{id:t,ref:k,value:g,title:z!=null?z:g===""&&_!=null?_:g,readOnly:h,invalid:i,placeholder:r,$isPlaceholderVisible:o===null,onChange:je,onClick:e=>{m(),e.preventDefault()},"aria-labelledby":we,onKeyDown:Ke,"data-form-type":"other",size:1}),!h&&n.jsxs(Fe,{children:[!v&&o!==null&&F&&n.jsx(ne.IconButton,{ghost:"borderless",level:"tertiary",size:"small",icon:n.jsx(_e.CloseIcon,{}),title:de,onClick:Ee,tabIndex:0}),n.jsx(ne.IconButton,{ghost:"borderless",level:"tertiary",size:"small",icon:n.jsx(Ge.ArrowDownIcon,{}),title:fe,onClick:m,onFocus:D,tabIndex:-1})]})]}),v&&!h&&n.jsx(Ae.Overlay,{parentRef:k,verticalPosition:xe,onClose:D,children:n.jsx(Xe,{ref:X,$withGroups:he,children:$e?f.map((e,s)=>{var c,E,re,oe;const y=e.props.value,b=(E=(c=e.props)==null?void 0:c.disabled)!=null?E:!1;return q(e)?N(f[s+1])?n.jsx(rt,{role:"option-group","data-testid":(re=e.props)==null?void 0:re.title,children:L.default.cloneElement(e)},(oe=e.props)==null?void 0:oe.title):null:n.jsxs(Je,{role:"option","data-testid":y,$size:ve,onClick:De(y,b),onKeyDown:K=>Se(K,b),tabIndex:0,ref:K=>{switch(s){case me:T.current=K;break;case f.length-1:Y.current=K;break}o===y&&(C.current=K)},disabled:b,children:[L.default.cloneElement(e),b&&n.jsx(Me.LockIcon,{size:18})]},y)}):n.jsx(Qe,{children:S})})})]}))};ce.displayName="SelectInput.Option";pe.displayName="SelectInput.OptionGroup";O.Option=ce;O.OptionGroup=pe;O.Surtitle=tt;exports.SelectInput=O;
