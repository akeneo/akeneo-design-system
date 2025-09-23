"use strict";var ve=Object.defineProperty,ke=Object.defineProperties;var Ie=Object.getOwnPropertyDescriptors;var O=Object.getOwnPropertySymbols;var W=Object.prototype.hasOwnProperty,H=Object.prototype.propertyIsEnumerable;var F=(t,o,l)=>o in t?ve(t,o,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[o]=l,J=(t,o)=>{for(var l in o||(o={}))W.call(o,l)&&F(t,l,o[l]);if(O)for(var l of O(o))H.call(o,l)&&F(t,l,o[l]);return t},Q=(t,o)=>ke(t,Ie(o));var X=(t,o)=>{var l={};for(var r in t)W.call(t,r)&&o.indexOf(r)<0&&(l[r]=t[r]);if(t!=null&&O)for(var r of O(t))o.indexOf(r)<0&&H.call(t,r)&&(l[r]=t[r]);return l};var a=require("react/jsx-runtime"),n=require("react"),T=require("styled-components"),p=require("../../../shared/key.js"),$e=require("../common/Overlay.js"),Y=require("../../IconButton/IconButton.js"),Ce=require("../TextInput/TextInput.js"),De=require("../../../hooks/useBooleanState.js"),Oe=require("../../../hooks/useShortcut.js"),s=require("../../../theme/theme.js"),me=require("../../../icons/ArrowDownIcon.js"),je=require("../../../icons/CloseIcon.js"),Ke=require("../../../icons/LockIcon.js"),Ee=require("../../../hooks/usePagination.js");function Z(t){return t&&t.__esModule?t:{default:t}}var S=Z(n),c=Z(T);const Re=t=>t.length>0&&t.every(o=>{var l,r;return(r=(l=o.props)==null?void 0:l.disabled)!=null?r:!1}),qe=c.default.div`
  width: 100%;

  & input[type='text'] {
    cursor: ${({readOnly:t})=>t?"not-allowed":"pointer"};
    background: ${({value:t,readOnly:o})=>t===null&&o?s.getColor("grey",20):"transparent"};

    &:focus {
      z-index: 2;
    }
  }
`,Se=c.default.div`
  position: relative;
  background: ${s.getColor("white")};
`,Ae=c.default(Ce.TextInput)`
  &::placeholder {
    opacity: ${({isPlaceholderVisible:t})=>t?1:0};
  }
`,Te=c.default.div`
  position: absolute;
  right: 8px;
  top: 0;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  z-index: 2;
`,Ge=c.default.div`
  position: relative;
  margin-bottom: -34px;
  top: 3px;
  width: 100%;
  height: 34px;
  display: flex;
  align-items: center;
  padding: 0 ${({clearable:t})=>t?68:38}px 0 16px;
  background: ${({readOnly:t})=>t?s.getColor("grey",20):s.getColor("white")};
  box-sizing: border-box;
  color: ${({readOnly:t})=>t?s.getColor("grey",100):s.getColor("grey",140)};
`,ze=c.default.div`
  background: ${s.getColor("white")};
  padding: 0 20px;
  align-items: center;
  gap: 10px;
  cursor: ${({disabled:t})=>t?"not-allowed":"pointer"};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({disabled:t})=>t?s.getColor("grey",100):s.getColor("grey",120)};
  line-height: 34px;
  display: flex;
  justify-content: space-between;

  ${({disabled:t})=>!t&&T.css`
      &:focus {
        background: ${s.getColor("grey",20)};
        color: ${s.getColor("brand",140)};
      }
      &:hover {
        background: ${s.getColor("grey",20)};
        color: ${s.getColor("brand",140)};
      }
      &:active {
        color: ${s.getColor("brand",100)};
        font-weight: 700;
      }
    `}
`,_e=c.default.div`
  background: ${s.getColor("white")};
  height: 20px;
  padding: 0 20px;
  align-items: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${s.getColor("grey",100)};
  line-height: 20px;
  text-align: center;
`,Be=c.default.div`
  max-height: 320px;
  overflow-y: auto;
  padding-left: ${({withGroups:t})=>t?"20px":"0"};
`,ee=T.css`
  display: block;
  line-height: 34px;
  min-height: 34px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,te=c.default.span`
  ${ee};
`,re=c.default.span`
  ${ee};
`,Me=c.default.div`
  background: ${s.getColor("white")};
  height: 34px;
  padding: 0 20px 0 0;
  align-items: center;
  gap: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${s.getColor("grey",100)};
  line-height: 34px;
  display: flex;
  justify-content: space-between;
  text-transform: uppercase;
`,m=t=>(t==null?void 0:t.type.displayName)==="SelectInput.OptionGroup",A=t=>(t==null?void 0:t.type.displayName)==="SelectInput.Option",G=Le=>{var M=Le,{id:t,placeholder:o,invalid:l,value:r,emptyResultLabel:oe,children:z,onChange:f,clearable:_=!0,clearLabel:ie="",openLabel:le,readOnly:w=!1,verticalPosition:se,onNextPage:ne,onSearchChange:j,disableInternalSearch:B=!1,"aria-labelledby":ae,selectedValueComponent:K}=M,ue=X(M,["id","placeholder","invalid","value","emptyResultLabel","children","onChange","clearable","clearLabel","openLabel","readOnly","verticalPosition","onNextPage","onSearchChange","disableInternalSearch","aria-labelledby","selectedValueComponent"]);var V;const[I,D]=n.useState(""),[pe,ce]=n.useState(!1),[g,h,E]=De.useBooleanState(),b=n.useRef(null),L=n.useRef(null),R=n.useRef(null),N=n.useRef(null),q=n.useRef(null),v=n.useMemo(()=>S.default.Children.toArray(z).filter(e=>n.isValidElement(e)),[z]);w=w||Re(v),v.reduce((e,i)=>{if(m(i))return e;if(e.includes(i.props.value))throw new Error(`Duplicate option value ${i.props.value}`);return e.push(i.props.value),e},[]);const d=n.useMemo(()=>B?v:v.filter(e=>{var $;const i=typeof e.props.children=="string"?e.props.children:"",y=($=e.props.title)!=null?$:"",u=e.props.value+i+y;return m(e)||u.toLowerCase().includes(I.toLowerCase())}),[B,v,I]),fe=n.useMemo(()=>d.some(e=>A(e)),[d]),de=n.useMemo(()=>d.findIndex(e=>A(e)),[d]),ye=(V=v.find(e=>{const i=e.props.value;return r===i}))!=null?V:r,ge=e=>{j==null||j(e),D(e),h()},xe=(e,i)=>()=>{i||(f==null||f(e),k())},we=e=>{var i;f==null||f(null),e.preventDefault(),(i=b.current)==null||i.focus()},k=()=>{var e;D(""),E(),(e=b.current)==null||e.focus()};Oe.useShortcut(p.Key.Escape,k,b);const he=n.useCallback(e=>{var i;e.currentTarget!==null&&(e.key===p.Key.Tab&&(D(""),E()),e.key===p.Key.ArrowDown?(e.preventDefault(),g?(i=R.current||q.current)==null||i.focus():h()):e.key===p.Key.ArrowUp?(e.preventDefault(),h()):e.key===p.Key.Enter&&(e.preventDefault(),g||h()))},[r,g]);n.useEffect(()=>{var e;g&&I===""&&((e=q.current||R.current)==null||e.focus())},[g]),n.useEffect(()=>{d.some(e=>m(e))&&ce(!0)},[d]);const be=n.useCallback((e,i)=>{var y,x;if(e.currentTarget!==null)if(e.key===p.Key.Tab&&(D(""),E()),[p.Key.ArrowDown,p.Key.ArrowUp,p.Key.Enter,p.Key.Escape].includes(e.key)){if(e.key===p.Key.ArrowDown){const u=e.currentTarget.nextSibling;u==null||u.focus(),e.preventDefault()}if(e.key===p.Key.ArrowUp){const u=e.currentTarget.previousSibling;u==null||u.focus(),e.preventDefault()}if(e.key===p.Key.Enter&&!i){const u=(y=e.currentTarget.firstChild)==null?void 0:y.getAttribute("value");f==null||f(u),k()}e.key===p.Key.Escape&&k()}else(x=b.current)==null||x.focus()},[f,r]);return Ee.usePagination(L,N,ne,g,d),a.jsxs(qe,Q(J({readOnly:w,value:r},ue),{children:[a.jsxs(Se,{children:[r!==null&&I===""&&(K!=null?K:a.jsx(Ge,{readOnly:w,clearable:_,children:ye})),a.jsx(Ae,{id:t,ref:b,value:I,readOnly:w,invalid:l,placeholder:o,isPlaceholderVisible:r===null,onChange:ge,onClick:e=>{h(),e.preventDefault()},"aria-labelledby":ae,onKeyDown:he,"data-form-type":"other",size:1}),!w&&a.jsxs(Te,{children:[!g&&r!==null&&_&&a.jsx(Y.IconButton,{ghost:"borderless",level:"tertiary",size:"small",icon:a.jsx(je.CloseIcon,{}),title:ie,onClick:we,tabIndex:0}),a.jsx(Y.IconButton,{ghost:"borderless",level:"tertiary",size:"small",icon:a.jsx(me.ArrowDownIcon,{}),title:le,onClick:h,onFocus:k,tabIndex:-1})]})]}),g&&!w&&a.jsx($e.Overlay,{parentRef:b,verticalPosition:se,onClose:k,children:a.jsx(Be,{ref:L,withGroups:pe,children:fe?d.map((e,i)=>{var u,$,P,U;const y=e.props.value,x=($=(u=e.props)==null?void 0:u.disabled)!=null?$:!1;return m(e)?A(d[i+1])?a.jsx(Me,{role:"option-group","data-testid":(P=e.props)==null?void 0:P.title,children:S.default.cloneElement(e)},(U=e.props)==null?void 0:U.title):null:a.jsxs(ze,{role:"option","data-testid":y,onClick:xe(y,x),onKeyDown:C=>be(C,x),tabIndex:0,ref:C=>{switch(i){case de:R.current=C;break;case d.length-1:N.current=C;break}r===y&&(q.current=C)},disabled:x,children:[S.default.cloneElement(e),x&&a.jsx(Ke.LockIcon,{size:18})]},y)}):a.jsx(_e,{children:oe})})})]}))};te.displayName="SelectInput.Option";re.displayName="SelectInput.OptionGroup";G.Option=te;G.OptionGroup=re;exports.SelectInput=G;
