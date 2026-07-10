"use strict";var Re=Object.defineProperty,qe=Object.defineProperties;var Oe=Object.getOwnPropertyDescriptors;var R=Object.getOwnPropertySymbols;var te=Object.prototype.hasOwnProperty,re=Object.prototype.propertyIsEnumerable;var ee=(t,l,s)=>l in t?Re(t,l,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[l]=s,oe=(t,l)=>{for(var s in l||(l={}))te.call(l,s)&&ee(t,s,l[s]);if(R)for(var s of R(l))re.call(l,s)&&ee(t,s,l[s]);return t},le=(t,l)=>qe(t,Oe(l));var ie=(t,l)=>{var s={};for(var r in t)te.call(t,r)&&l.indexOf(r)<0&&(s[r]=t[r]);if(t!=null&&R)for(var r of R(t))l.indexOf(r)<0&&re.call(t,r)&&(s[r]=t[r]);return s};var u=require("react/jsx-runtime"),o=require("react"),V=require("styled-components"),c=require("../../../shared/key.js"),Se=require("../common/Overlay.js"),se=require("../../IconButton/IconButton.js"),Ae=require("../TextInput/TextInput.js"),Ge=require("../../../hooks/useBooleanState.js"),Te=require("../../../hooks/useShortcut.js"),n=require("../../../theme/theme.js"),ze=require("../../../icons/ArrowDownIcon.js"),Ce=require("../../../icons/CloseIcon.js"),_e=require("../../../icons/LockIcon.js"),Ve=require("../../../hooks/usePagination.js");function ne(t){return t&&t.__esModule?t:{default:t}}var C=ne(o),p=ne(V);const Be=t=>t.length>0&&t.every(l=>{var s,r;return(r=(s=l.props)==null?void 0:s.disabled)!=null?r:!1}),Me=p.default.div`
  width: 100%;

  & input[type='text'] {
    cursor: ${({readOnly:t})=>t?"not-allowed":"pointer"};
    background: ${({value:t,readOnly:l})=>t===null&&l?n.getColor("grey",20):"transparent"};

    &:focus {
      z-index: 2;
    }
  }
`,Le=p.default.div`
  position: relative;
  background: ${n.getColor("white")};
`,Ne=p.default(Ae.TextInput)`
  &::placeholder {
    opacity: ${({$isPlaceholderVisible:t})=>t?1:0};
  }
`,Pe=p.default.div`
  position: absolute;
  right: 8px;
  top: 0;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  z-index: 2;
`,Ue=p.default.div`
  position: relative;
  margin-bottom: -34px;
  top: 3px;
  width: 100%;
  height: 34px;
  display: flex;
  align-items: center;
  padding: 0 ${({$clearable:t})=>t?68:38}px 0 16px;
  background: ${({readOnly:t})=>t?n.getColor("grey",20):n.getColor("white")};
  box-sizing: border-box;
  color: ${({readOnly:t})=>t?n.getColor("grey",100):n.getColor("grey",140)};
`,Fe=p.default.span`
  display: block;
  flex: 1;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,We=p.default.div`
  background: ${n.getColor("white")};
  padding: 0 20px;
  align-items: center;
  gap: 10px;
  cursor: ${({disabled:t})=>t?"not-allowed":"pointer"};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({disabled:t})=>t?n.getColor("grey",100):n.getColor("grey",120)};
  line-height: 34px;
  display: flex;
  justify-content: space-between;

  ${({disabled:t})=>!t&&V.css`
      &:focus {
        background: ${n.getColor("grey",20)};
        color: ${n.getColor("brand",140)};
      }
      &:hover {
        background: ${n.getColor("grey",20)};
        color: ${n.getColor("brand",140)};
      }
      &:active {
        color: ${n.getColor("brand",100)};
        font-weight: 700;
      }
    `}
`,He=p.default.div`
  background: ${n.getColor("white")};
  height: 20px;
  padding: 0 20px;
  align-items: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${n.getColor("grey",100)};
  line-height: 20px;
  text-align: center;
`,Je=p.default.div`
  max-height: 320px;
  overflow-y: auto;
  padding-left: ${({$withGroups:t})=>t?"20px":"0"};
`,ue=V.css`
  display: block;
  line-height: 34px;
  min-height: 34px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,ae=p.default.span`
  ${ue};
`,ce=p.default.span`
  ${ue};
`,Qe=p.default.div`
  background: ${n.getColor("white")};
  height: 34px;
  padding: 0 20px 0 0;
  align-items: center;
  gap: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${n.getColor("grey",100)};
  line-height: 34px;
  display: flex;
  justify-content: space-between;
  text-transform: uppercase;
`,q=t=>(t==null?void 0:t.type.displayName)==="SelectInput.OptionGroup",_=t=>(t==null?void 0:t.type.displayName)==="SelectInput.Option",B=Xe=>{var P=Xe,{id:t,placeholder:l,invalid:s,value:r,emptyResultLabel:pe,children:M,onChange:d,clearable:L=!0,clearLabel:de="",openLabel:fe,readOnly:k=!1,verticalPosition:ye,onNextPage:xe,onSearchChange:$,disableInternalSearch:N=!1,"aria-labelledby":we,selectedValueComponent:O,onOpenChange:w,title:S,keepDropdownOnSelect:ge=!1}=P,ve=ie(P,["id","placeholder","invalid","value","emptyResultLabel","children","onChange","clearable","clearLabel","openLabel","readOnly","verticalPosition","onNextPage","onSearchChange","disableInternalSearch","aria-labelledby","selectedValueComponent","onOpenChange","title","keepDropdownOnSelect"]);var Q,X;const[g,D]=o.useState(""),[be,ke]=o.useState(!1),[v,U,F]=Ge.useBooleanState(),h=o.useRef(null),W=o.useRef(null),A=o.useRef(null),H=o.useRef(null),G=o.useRef(null),I=o.useCallback(()=>{U(),w==null||w(!0)},[U,w]),T=o.useCallback(()=>{F(),w==null||w(!1)},[F,w]),m=o.useMemo(()=>C.default.Children.toArray(M).filter(e=>o.isValidElement(e)),[M]);k=k||Be(m),m.reduce((e,i)=>{if(q(i))return e;if(e.includes(i.props.value))throw new Error(`Duplicate option value ${i.props.value}`);return e.push(i.props.value),e},[]);const f=o.useMemo(()=>N?m:m.filter(e=>{var E;const i=typeof e.props.children=="string"?e.props.children:"",x=(E=e.props.title)!=null?E:"",a=e.props.value+i+x;return q(e)||a.toLowerCase().includes(g.toLowerCase())}),[N,m,g]),he=o.useMemo(()=>f.some(e=>_(e)),[f]),$e=o.useMemo(()=>f.findIndex(e=>_(e)),[f]),y=(Q=m.find(e=>{const i=e.props.value;return r===i}))!=null?Q:r,z=typeof y=="string"?y:o.isValidElement(y)?(X=y.props.title)!=null?X:typeof y.props.children=="string"?y.props.children:void 0:void 0,Ie=o.isValidElement(y)?o.cloneElement(y,{title:void 0}):y,me=e=>{$==null||$(e),D(e),I()},De=(e,i)=>()=>{i||(d==null||d(e),J())},je=e=>{var i;d==null||d(null),e.preventDefault(),(i=h.current)==null||i.focus()},j=()=>{var e;D(""),T(),(e=h.current)==null||e.focus()},J=()=>{var e;ge?(D(""),$==null||$(""),(e=h.current)==null||e.focus()):j()};Te.useShortcut(c.Key.Escape,j,h);const Ee=o.useCallback(e=>{var i;e.currentTarget!==null&&(e.key===c.Key.Tab&&(D(""),T()),e.key===c.Key.ArrowDown?(e.preventDefault(),v?(i=A.current||G.current)==null||i.focus():I()):e.key===c.Key.ArrowUp?(e.preventDefault(),I()):e.key===c.Key.Enter&&(e.preventDefault(),v||I()))},[r,v]);o.useEffect(()=>{var e;v&&g===""&&((e=G.current||A.current)==null||e.focus())},[v]),o.useEffect(()=>{f.some(e=>q(e))&&ke(!0)},[f]);const Ke=o.useCallback((e,i)=>{var x,b;if(e.currentTarget!==null)if(e.key===c.Key.Tab&&(D(""),T()),[c.Key.ArrowDown,c.Key.ArrowUp,c.Key.Enter,c.Key.Escape].includes(e.key)){if(e.key===c.Key.ArrowDown){const a=e.currentTarget.nextSibling;a==null||a.focus(),e.preventDefault()}if(e.key===c.Key.ArrowUp){const a=e.currentTarget.previousSibling;a==null||a.focus(),e.preventDefault()}if(e.key===c.Key.Enter&&!i){const a=(x=e.currentTarget.firstChild)==null?void 0:x.getAttribute("value");d==null||d(a),J()}e.key===c.Key.Escape&&j()}else(b=h.current)==null||b.focus()},[d,r]);return Ve.usePagination(W,H,xe,v,f),u.jsxs(Me,le(oe({readOnly:k,value:r},ve),{children:[u.jsxs(Le,{children:[r!==null&&g===""&&(O!=null?O:u.jsx(Ue,{readOnly:k,$clearable:L,children:u.jsx(Fe,{children:Ie})})),u.jsx(Ne,{id:t,ref:h,value:g,title:S!=null?S:g===""&&z!=null?z:g,readOnly:k,invalid:s,placeholder:l,$isPlaceholderVisible:r===null,onChange:me,onClick:e=>{I(),e.preventDefault()},"aria-labelledby":we,onKeyDown:Ee,"data-form-type":"other",size:1}),!k&&u.jsxs(Pe,{children:[!v&&r!==null&&L&&u.jsx(se.IconButton,{ghost:"borderless",level:"tertiary",size:"small",icon:u.jsx(Ce.CloseIcon,{}),title:de,onClick:je,tabIndex:0}),u.jsx(se.IconButton,{ghost:"borderless",level:"tertiary",size:"small",icon:u.jsx(ze.ArrowDownIcon,{}),title:fe,onClick:I,onFocus:j,tabIndex:-1})]})]}),v&&!k&&u.jsx(Se.Overlay,{parentRef:h,verticalPosition:ye,onClose:j,children:u.jsx(Je,{ref:W,$withGroups:be,children:he?f.map((e,i)=>{var a,E,Y,Z;const x=e.props.value,b=(E=(a=e.props)==null?void 0:a.disabled)!=null?E:!1;return q(e)?_(f[i+1])?u.jsx(Qe,{role:"option-group","data-testid":(Y=e.props)==null?void 0:Y.title,children:C.default.cloneElement(e)},(Z=e.props)==null?void 0:Z.title):null:u.jsxs(We,{role:"option","data-testid":x,onClick:De(x,b),onKeyDown:K=>Ke(K,b),tabIndex:0,ref:K=>{switch(i){case $e:A.current=K;break;case f.length-1:H.current=K;break}r===x&&(G.current=K)},disabled:b,children:[C.default.cloneElement(e),b&&u.jsx(_e.LockIcon,{size:18})]},x)}):u.jsx(He,{children:pe})})})]}))};ae.displayName="SelectInput.Option";ce.displayName="SelectInput.OptionGroup";B.Option=ae;B.OptionGroup=ce;exports.SelectInput=B;
