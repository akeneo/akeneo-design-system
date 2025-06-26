"use strict";var be=Object.defineProperty,ve=Object.defineProperties;var ke=Object.getOwnPropertyDescriptors;var D=Object.getOwnPropertySymbols;var F=Object.prototype.hasOwnProperty,W=Object.prototype.propertyIsEnumerable;var U=(t,o,i)=>o in t?be(t,o,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[o]=i,H=(t,o)=>{for(var i in o||(o={}))F.call(o,i)&&U(t,i,o[i]);if(D)for(var i of D(o))W.call(o,i)&&U(t,i,o[i]);return t},J=(t,o)=>ve(t,ke(o));var Q=(t,o)=>{var i={};for(var r in t)F.call(t,r)&&o.indexOf(r)<0&&(i[r]=t[r]);if(t!=null&&D)for(var r of D(t))o.indexOf(r)<0&&W.call(t,r)&&(i[r]=t[r]);return i};var a=require("react/jsx-runtime"),n=require("react"),A=require("styled-components"),p=require("../../../shared/key.js"),Ie=require("../common/Overlay.js"),X=require("../../IconButton/IconButton.js"),Ce=require("../TextInput/TextInput.js"),$e=require("../../../hooks/useBooleanState.js"),me=require("../../../hooks/useShortcut.js"),s=require("../../../theme/theme.js"),De=require("../../../icons/ArrowDownIcon.js"),Oe=require("../../../icons/CloseIcon.js"),je=require("../../../icons/LockIcon.js"),Ke=require("../../../hooks/usePagination.js");function Y(t){return t&&t.__esModule?t:{default:t}}var q=Y(n),c=Y(A);const Ee=t=>t.length>0&&t.every(o=>{var i,r;return(r=(i=o.props)==null?void 0:i.disabled)!=null?r:!1}),Re=c.default.div`
  width: 100%;

  & input[type='text'] {
    cursor: ${({readOnly:t})=>t?"not-allowed":"pointer"};
    background: ${({value:t,readOnly:o})=>t===null&&o?s.getColor("grey",20):"transparent"};

    &:focus {
      z-index: 2;
    }
  }
`,qe=c.default.div`
  position: relative;
  background: ${s.getColor("white")};
`,Se=c.default(Ce.TextInput)`
  &::placeholder {
    opacity: ${({isPlaceholderVisible:t})=>t?1:0};
  }
`,Ae=c.default.div`
  position: absolute;
  right: 8px;
  top: 0;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  z-index: 2;
`,Te=c.default.div`
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
`,Ge=c.default.div`
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

  ${({disabled:t})=>!t&&A.css`
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
`,Ve=c.default.div`
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
`,ze=c.default.div`
  max-height: 320px;
  overflow-y: auto;
  padding-left: ${({withGroups:t})=>t?"20px":"0"};
`,Z=A.css`
  display: block;
  line-height: 34px;
  min-height: 34px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,ee=c.default.span`
  ${Z};
`,te=c.default.span`
  ${Z};
`,_e=c.default.div`
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
`,O=t=>(t==null?void 0:t.type.displayName)==="SelectInput.OptionGroup",S=t=>(t==null?void 0:t.type.displayName)==="SelectInput.Option",T=Be=>{var _=Be,{id:t,placeholder:o,invalid:i,value:r,emptyResultLabel:re,children:G,onChange:f,clearable:V=!0,clearLabel:oe="",openLabel:le,readOnly:w=!1,verticalPosition:ie,onNextPage:se,onSearchChange:j,disableInternalSearch:z=!1,"aria-labelledby":ne}=_,ae=Q(_,["id","placeholder","invalid","value","emptyResultLabel","children","onChange","clearable","clearLabel","openLabel","readOnly","verticalPosition","onNextPage","onSearchChange","disableInternalSearch","aria-labelledby"]);var L;const[I,m]=n.useState(""),[ue,pe]=n.useState(!1),[g,h,K]=$e.useBooleanState(),b=n.useRef(null),B=n.useRef(null),E=n.useRef(null),M=n.useRef(null),R=n.useRef(null),v=n.useMemo(()=>q.default.Children.toArray(G).filter(e=>n.isValidElement(e)),[G]);w=w||Ee(v),v.reduce((e,l)=>{if(O(l))return e;if(e.includes(l.props.value))throw new Error(`Duplicate option value ${l.props.value}`);return e.push(l.props.value),e},[]);const d=n.useMemo(()=>z?v:v.filter(e=>{var C;const l=typeof e.props.children=="string"?e.props.children:"",y=(C=e.props.title)!=null?C:"",u=e.props.value+l+y;return O(e)||u.toLowerCase().includes(I.toLowerCase())}),[z,v,I]),ce=n.useMemo(()=>d.some(e=>S(e)),[d]),fe=n.useMemo(()=>d.findIndex(e=>S(e)),[d]),de=(L=v.find(e=>{const l=e.props.value;return r===l}))!=null?L:r,ye=e=>{j==null||j(e),m(e),h()},ge=(e,l)=>()=>{l||(f==null||f(e),k())},xe=e=>{var l;f==null||f(null),e.preventDefault(),(l=b.current)==null||l.focus()},k=()=>{var e;m(""),K(),(e=b.current)==null||e.focus()};me.useShortcut(p.Key.Escape,k,b);const we=n.useCallback(e=>{var l;e.currentTarget!==null&&(e.key===p.Key.Tab&&(m(""),K()),e.key===p.Key.ArrowDown?(e.preventDefault(),g?(l=E.current||R.current)==null||l.focus():h()):e.key===p.Key.ArrowUp?(e.preventDefault(),h()):e.key===p.Key.Enter&&(e.preventDefault(),g||h()))},[r,g]);n.useEffect(()=>{var e;g&&I===""&&((e=R.current||E.current)==null||e.focus())},[g]),n.useEffect(()=>{d.some(e=>O(e))&&pe(!0)},[d]);const he=n.useCallback((e,l)=>{var y,x;if(e.currentTarget!==null)if(e.key===p.Key.Tab&&(m(""),K()),[p.Key.ArrowDown,p.Key.ArrowUp,p.Key.Enter,p.Key.Escape].includes(e.key)){if(e.key===p.Key.ArrowDown){const u=e.currentTarget.nextSibling;u==null||u.focus(),e.preventDefault()}if(e.key===p.Key.ArrowUp){const u=e.currentTarget.previousSibling;u==null||u.focus(),e.preventDefault()}if(e.key===p.Key.Enter&&!l){const u=(y=e.currentTarget.firstChild)==null?void 0:y.getAttribute("value");f==null||f(u),k()}e.key===p.Key.Escape&&k()}else(x=b.current)==null||x.focus()},[f,r]);return Ke.usePagination(B,M,se,g,d),a.jsxs(Re,J(H({readOnly:w,value:r},ae),{children:[a.jsxs(qe,{children:[r!==null&&I===""&&a.jsx(Te,{readOnly:w,clearable:V,children:de}),a.jsx(Se,{id:t,ref:b,value:I,readOnly:w,invalid:i,placeholder:o,isPlaceholderVisible:r===null,onChange:ye,onClick:e=>{h(),e.preventDefault()},"aria-labelledby":ne,onKeyDown:we,"data-form-type":"other",size:1}),!w&&a.jsxs(Ae,{children:[!g&&r!==null&&V&&a.jsx(X.IconButton,{ghost:"borderless",level:"tertiary",size:"small",icon:a.jsx(Oe.CloseIcon,{}),title:oe,onClick:xe,tabIndex:0}),a.jsx(X.IconButton,{ghost:"borderless",level:"tertiary",size:"small",icon:a.jsx(De.ArrowDownIcon,{}),title:le,onClick:h,onFocus:k,tabIndex:-1})]})]}),g&&!w&&a.jsx(Ie.Overlay,{parentRef:b,verticalPosition:ie,onClose:k,children:a.jsx(ze,{ref:B,withGroups:ue,children:ce?d.map((e,l)=>{var u,C,N,P;const y=e.props.value,x=(C=(u=e.props)==null?void 0:u.disabled)!=null?C:!1;return O(e)?S(d[l+1])?a.jsx(_e,{role:"option-group","data-testid":(N=e.props)==null?void 0:N.title,children:q.default.cloneElement(e)},(P=e.props)==null?void 0:P.title):null:a.jsxs(Ge,{role:"option","data-testid":y,onClick:ge(y,x),onKeyDown:$=>he($,x),tabIndex:0,ref:$=>{switch(l){case fe:E.current=$;break;case d.length-1:M.current=$;break}r===y&&(R.current=$)},disabled:x,children:[q.default.cloneElement(e),x&&a.jsx(je.LockIcon,{size:18})]},y)}):a.jsx(Ve,{children:re})})})]}))};ee.displayName="SelectInput.Option";te.displayName="SelectInput.OptionGroup";T.Option=ee;T.OptionGroup=te;exports.SelectInput=T;
