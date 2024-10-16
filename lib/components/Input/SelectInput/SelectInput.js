"use strict";var ve=Object.defineProperty,ke=Object.defineProperties;var Ie=Object.getOwnPropertyDescriptors;var O=Object.getOwnPropertySymbols;var P=Object.prototype.hasOwnProperty,U=Object.prototype.propertyIsEnumerable;var M=(t,o,i)=>o in t?ve(t,o,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[o]=i,F=(t,o)=>{for(var i in o||(o={}))P.call(o,i)&&M(t,i,o[i]);if(O)for(var i of O(o))U.call(o,i)&&M(t,i,o[i]);return t},W=(t,o)=>ke(t,Ie(o));var H=(t,o)=>{var i={};for(var r in t)P.call(t,r)&&o.indexOf(r)<0&&(i[r]=t[r]);if(t!=null&&O)for(var r of O(t))o.indexOf(r)<0&&U.call(t,r)&&(i[r]=t[r]);return i};var a=require("react/jsx-runtime"),u=require("react"),S=require("styled-components"),p=require("../../../shared/key.js"),Ce=require("../common/Overlay.js"),J=require("../../IconButton/IconButton.js"),$e=require("../TextInput/TextInput.js"),me=require("../../../hooks/useBooleanState.js"),De=require("../../../hooks/useShortcut.js"),n=require("../../../theme/theme.js"),Oe=require("../../../icons/ArrowDownIcon.js"),je=require("../../../icons/CloseIcon.js"),Ke=require("../../../icons/LockIcon.js"),Ee=require("../../../hooks/usePagination.js");function Q(t){return t&&t.__esModule?t:{default:t}}var q=Q(u),c=Q(S);const Re=t=>t.length>0&&t.every(o=>{var i,r;return(r=(i=o.props)==null?void 0:i.disabled)!=null?r:!1}),qe=c.default.div`
  width: 100%;

  & input[type='text'] {
    cursor: ${({readOnly:t})=>t?"not-allowed":"pointer"};
    background: ${({value:t,readOnly:o})=>t===null&&o?n.getColor("grey",20):"transparent"};

    &:focus {
      z-index: 2;
    }
  }
`,Se=c.default.div`
  position: relative;
  background: ${n.getColor("white")};
`,Ae=c.default($e.TextInput)`
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
  background: ${({readOnly:t})=>t?n.getColor("grey",20):n.getColor("white")};
  box-sizing: border-box;
  color: ${({readOnly:t})=>t?n.getColor("grey",100):n.getColor("grey",140)};
`,Ve=c.default.div`
  background: ${n.getColor("white")};
  height: 34px;
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

  ${({disabled:t})=>!t&&S.css`
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
`,ze=c.default.div`
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
`,_e=c.default.div`
  max-height: 320px;
  overflow-y: auto;
  padding-left: ${({withGroups:t})=>t?"20px":"0"};
`,X=S.css`
  display: block;
  line-height: 34px;
  min-height: 34px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Y=c.default.span`
  ${X};
`,Z=c.default.span`
  ${X};
`,Be=c.default.div`
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
`,A=Le=>{var G=Le,{id:t,placeholder:o,invalid:i,value:r,emptyResultLabel:ee,children:te,onChange:d,clearable:T=!0,clearLabel:re="",openLabel:oe,readOnly:w=!1,verticalPosition:le,onNextPage:ie,onSearchChange:j,disableInternalSearch:ne=!1,"aria-labelledby":se}=G,ae=H(G,["id","placeholder","invalid","value","emptyResultLabel","children","onChange","clearable","clearLabel","openLabel","readOnly","verticalPosition","onNextPage","onSearchChange","disableInternalSearch","aria-labelledby"]);var _;const[C,$]=u.useState(""),[ue,pe]=u.useState(!1),[g,h,K]=me.useBooleanState(),b=u.useRef(null),V=u.useRef(null),E=u.useRef(null),z=u.useRef(null),m=u.useRef(null),D=e=>(e==null?void 0:e.type.displayName)==="SelectInput.OptionGroup",R=e=>(e==null?void 0:e.type.displayName)==="SelectInput.Option",k=q.default.Children.toArray(te).filter(e=>u.isValidElement(e));w=w||Re(k),k.reduce((e,l)=>{if(D(l))return e;if(e.includes(l.props.value))throw new Error(`Duplicate option value ${l.props.value}`);return e.push(l.props.value),e},[]);const f=ne?k:k.filter(e=>{var I;const l=typeof e.props.children=="string"?e.props.children:"",y=(I=e.props.title)!=null?I:"",s=e.props.value+l+y;return D(e)||s.toLowerCase().includes(C.toLowerCase())}),ce=u.useMemo(()=>f.some(e=>R(e)),[f]),de=u.useMemo(()=>f.findIndex(e=>R(e)),[f]),fe=(_=k.find(e=>{const l=e.props.value;return r===l}))!=null?_:r,ye=e=>{j==null||j(e),$(e),h()},ge=(e,l)=>()=>{l||(d==null||d(e),v())},xe=e=>{var l;d==null||d(null),e.preventDefault(),(l=b.current)==null||l.focus()},v=()=>{var e;$(""),K(),(e=b.current)==null||e.focus()};De.useShortcut(p.Key.Escape,v,b);const we=u.useCallback(e=>{var l;e.currentTarget!==null&&(e.key===p.Key.Tab&&($(""),K()),e.key===p.Key.ArrowDown?(e.preventDefault(),g?(l=E.current||m.current)==null||l.focus():h()):e.key===p.Key.ArrowUp?(e.preventDefault(),h()):e.key===p.Key.Enter&&(e.preventDefault(),g||h()))},[r,g]);u.useEffect(()=>{var e;g&&C===""&&((e=m.current||E.current)==null||e.focus())},[g,m.current]),u.useEffect(()=>{f.some(e=>D(e))&&pe(!0)},[f]);const he=u.useCallback((e,l)=>{var y,x;if(e.currentTarget!==null)if(e.key===p.Key.Tab&&($(""),K()),[p.Key.ArrowDown,p.Key.ArrowUp,p.Key.Enter,p.Key.Escape].includes(e.key)){if(e.key===p.Key.ArrowDown){const s=e.currentTarget.nextSibling;s==null||s.focus(),e.preventDefault()}if(e.key===p.Key.ArrowUp){const s=e.currentTarget.previousSibling;s==null||s.focus(),e.preventDefault()}if(e.key===p.Key.Enter&&!l){const s=(y=e.currentTarget.firstChild)==null?void 0:y.getAttribute("value");d==null||d(s),v()}e.key===p.Key.Escape&&v()}else(x=b.current)==null||x.focus()},[d,r]);return Ee.usePagination(V,z,ie,g),a.jsxs(qe,W(F({readOnly:w,value:r},ae),{children:[a.jsxs(Se,{children:[r!==null&&C===""&&a.jsx(Ge,{readOnly:w,clearable:T,children:fe}),a.jsx(Ae,{id:t,ref:b,value:C,readOnly:w,invalid:i,placeholder:o,isPlaceholderVisible:r===null,onChange:ye,onClick:e=>{h(),e.preventDefault()},"aria-labelledby":se,onKeyDown:we,"data-form-type":"other",size:1}),!w&&a.jsxs(Te,{children:[!g&&r!==null&&T&&a.jsx(J.IconButton,{ghost:"borderless",level:"tertiary",size:"small",icon:a.jsx(je.CloseIcon,{}),title:re,onClick:xe,tabIndex:0}),a.jsx(J.IconButton,{ghost:"borderless",level:"tertiary",size:"small",icon:a.jsx(Oe.ArrowDownIcon,{}),title:oe,onClick:h,onFocus:v,tabIndex:-1})]})]}),g&&!w&&a.jsx(Ce.Overlay,{parentRef:b,verticalPosition:le,onClose:v,children:a.jsx(_e,{ref:V,withGroups:ue,children:ce?f.map((e,l)=>{var I,B,L,N;const y=e.props.value;let x;switch(l){case de:x=E;break;case f.length-1:x=z;break}r===y&&(x=m);const s=(B=(I=e.props)==null?void 0:I.disabled)!=null?B:!1;return D(e)?R(f[l+1])?a.jsx(Be,{role:"option-group","data-testid":(L=e.props)==null?void 0:L.title,children:q.default.cloneElement(e)},(N=e.props)==null?void 0:N.title):null:a.jsxs(Ve,{role:"option","data-testid":y,onClick:ge(y,s),onKeyDown:be=>he(be,s),tabIndex:0,ref:x,disabled:s,children:[q.default.cloneElement(e),s&&a.jsx(Ke.LockIcon,{size:18})]},y)}):a.jsx(ze,{children:ee})})})]}))};Y.displayName="SelectInput.Option";Z.displayName="SelectInput.OptionGroup";A.Option=Y;A.OptionGroup=Z;exports.SelectInput=A;
