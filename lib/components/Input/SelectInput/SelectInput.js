"use strict";var Te=Object.defineProperty,Ge=Object.defineProperties;var Me=Object.getOwnPropertyDescriptors;var R=Object.getOwnPropertySymbols;var ae=Object.prototype.hasOwnProperty,ce=Object.prototype.propertyIsEnumerable;var ue=(t,r,i)=>r in t?Te(t,r,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[r]=i,L=(t,r)=>{for(var i in r||(r={}))ae.call(r,i)&&ue(t,i,r[i]);if(R)for(var i of R(r))ce.call(r,i)&&ue(t,i,r[i]);return t},N=(t,r)=>Ge(t,Me(r));var F=(t,r)=>{var i={};for(var s in t)ae.call(t,s)&&r.indexOf(s)<0&&(i[s]=t[s]);if(t!=null&&R)for(var s of R(t))r.indexOf(s)<0&&ce.call(t,s)&&(i[s]=t[s]);return i};var u=require("react/jsx-runtime"),l=require("react"),U=require("styled-components"),c=require("../../../shared/key.js"),_e=require("../common/Overlay.js"),pe=require("../../IconButton/IconButton.js"),Be=require("../TextInput/TextInput.js"),Ve=require("../../../hooks/useBooleanState.js"),Ce=require("../../../hooks/useShortcut.js"),n=require("../../../theme/theme.js"),Le=require("../../../icons/ArrowDownIcon.js"),Ne=require("../../../icons/CloseIcon.js"),Fe=require("../../../icons/LockIcon.js"),Pe=require("../../../hooks/usePagination.js");function de(t){return t&&t.__esModule?t:{default:t}}var P=de(l),a=de(U);const Ue=t=>t.length>0&&t.every(r=>{var i,s;return(s=(i=r.props)==null?void 0:i.disabled)!=null?s:!1}),We={default:34,big:44},He=a.default.div`
  width: 100%;

  & input[type='text'] {
    cursor: ${({readOnly:t})=>t?"not-allowed":"pointer"};
    background: ${({value:t,readOnly:r})=>t===null&&r?n.getColor("grey",20):"transparent"};

    &:focus {
      z-index: 2;
    }
  }
`,Je=a.default.div`
  position: relative;
  background: ${n.getColor("white")};
`,Qe=a.default(Be.TextInput)`
  &::placeholder {
    opacity: ${({$isPlaceholderVisible:t})=>t?1:0};
  }
`,Xe=a.default.div`
  position: absolute;
  right: 8px;
  top: 0;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  z-index: 2;
`,Ye=a.default.div`
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
`,Ze=a.default.span`
  display: block;
  flex: 1;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,et=a.default.div`
  background: ${({$highlighted:t})=>t?n.getColor("grey",20):n.getColor("white")};
  min-height: ${({$size:t})=>We[t]}px;
  padding: 0 20px;
  align-items: center;
  gap: 10px;
  cursor: ${({disabled:t})=>t?"not-allowed":"pointer"};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({disabled:t,$highlighted:r})=>t?n.getColor("grey",100):r?n.getColor("brand",140):n.getColor("grey",120)};
  line-height: 34px;
  display: flex;
  justify-content: space-between;

  ${({disabled:t})=>!t&&U.css`
      &:focus {
        background: ${n.getColor("grey",20)};
        color: ${n.getColor("brand",140)};
        outline: none;
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
`,tt=a.default.div`
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
`,rt=a.default.div`
  max-height: 320px;
  overflow-y: auto;
  padding-left: ${({$withGroups:t})=>t?"20px":"0"};
`,fe=U.css`
  display: block;
  line-height: 34px;
  min-height: 34px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,xe=a.default.span`
  ${fe};
`,ye=a.default.span`
  ${fe};
`,ot=a.default.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
  line-height: normal;
  overflow: hidden;
`,lt=a.default.span`
  color: ${n.getColor("grey",100)};
  font-size: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
`,it=a.default.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1;
`,st=s=>{var E=s,{label:t,children:r}=E,i=F(E,["label","children"]);return u.jsxs(ot,N(L({},i),{children:[u.jsx(lt,{title:t,children:t}),u.jsx(it,{children:r})]}))},nt=a.default.div`
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
`,q=t=>(t==null?void 0:t.type.displayName)==="SelectInput.OptionGroup",O=t=>(t==null?void 0:t.type.displayName)==="SelectInput.Option",A=ut=>{var Q=ut,{id:t,placeholder:r,invalid:i,value:s,emptyResultLabel:E,children:W,onChange:f,clearable:H=!0,clearLabel:we="",openLabel:ve,readOnly:b=!1,verticalPosition:ge,onNextPage:be,onSearchChange:I,optionsFilteredExternally:J=!1,"aria-labelledby":he,selectedValueComponent:z,onOpenChange:v,title:T,keepDropdownOnSelect:ke=!1,size:Ie="default"}=Q,$e=F(Q,["id","placeholder","invalid","value","emptyResultLabel","children","onChange","clearable","clearLabel","openLabel","readOnly","verticalPosition","onNextPage","onSearchChange","optionsFilteredExternally","aria-labelledby","selectedValueComponent","onOpenChange","title","keepDropdownOnSelect","size"]);var oe,le;const[y,X]=l.useState(""),[me,Y]=l.useState(!1),[je,Se]=l.useState(!1),[h,Z,ee]=Ve.useBooleanState(),k=l.useRef(null),te=l.useRef(null),G=l.useRef(null),re=l.useRef(null),M=l.useRef(null),$=l.useCallback(()=>{Z(),v==null||v(!0)},[Z,v]),_=l.useCallback(()=>{ee(),v==null||v(!1)},[ee,v]),m=l.useMemo(()=>P.default.Children.toArray(W).filter(e=>l.isValidElement(e)),[W]);b=b||Ue(m),m.reduce((e,o)=>{if(q(o))return e;if(e.includes(o.props.value))throw new Error(`Duplicate option value ${o.props.value}`);return e.push(o.props.value),e},[]);const p=l.useMemo(()=>J?m:m.filter(e=>{var S;const o=typeof e.props.children=="string"?e.props.children:"",x=(S=e.props.title)!=null?S:"",d=e.props.value+o+x;return q(e)||d.toLowerCase().includes(y.toLowerCase())}),[J,m,y]),De=l.useMemo(()=>p.some(e=>O(e)),[p]),Ee=l.useMemo(()=>p.findIndex(e=>O(e)),[p]),B=l.useMemo(()=>p.findIndex(e=>{var o,x;return O(e)&&!((x=(o=e.props)==null?void 0:o.disabled)!=null&&x)}),[p]),w=(oe=m.find(e=>{const o=e.props.value;return s===o}))!=null?oe:s,V=typeof w=="string"?w:l.isValidElement(w)?(le=w.props.title)!=null?le:typeof w.props.children=="string"?w.props.children:void 0:void 0,Ke=l.isValidElement(w)?l.cloneElement(w,{title:void 0}):w,Re=e=>{I==null||I(e),X(e),$()},K=()=>{y!==""&&(X(""),I==null||I(""))},qe=(e,o)=>()=>{o||(f==null||f(e),C())},Oe=e=>{var o;f==null||f(null),e.preventDefault(),(o=k.current)==null||o.focus()},j=()=>{var e;K(),_(),(e=k.current)==null||e.focus()},C=()=>{var e;ke?(K(),(e=k.current)==null||e.focus()):j()};Ce.useShortcut(c.Key.Escape,j,k);const Ae=e=>{var o;e.currentTarget!==null&&(e.key===c.Key.Tab&&(K(),_()),e.key===c.Key.ArrowDown?(e.preventDefault(),h?(o=G.current||M.current)==null||o.focus():$()):e.key===c.Key.ArrowUp?(e.preventDefault(),$()):e.key===c.Key.Enter&&(e.preventDefault(),h?y!==""&&B!==-1&&(f==null||f(p[B].props.value),C()):$()))};l.useEffect(()=>{var e;h&&y===""&&((e=M.current||G.current)==null||e.focus())},[h]),l.useEffect(()=>{p.some(e=>q(e))&&Se(!0)},[p]);const ze=(e,o)=>{var x,g;if(e.currentTarget!==null)if(e.key===c.Key.Tab&&(K(),_()),[c.Key.ArrowDown,c.Key.ArrowUp,c.Key.Enter,c.Key.Escape].includes(e.key)){if(e.key===c.Key.ArrowDown){const d=e.currentTarget.nextSibling;d==null||d.focus(),e.preventDefault()}if(e.key===c.Key.ArrowUp){const d=e.currentTarget.previousSibling;d==null||d.focus(),e.preventDefault()}if(e.key===c.Key.Enter&&!o){const d=(x=e.currentTarget.firstChild)==null?void 0:x.getAttribute("value");f==null||f(d),C()}e.key===c.Key.Escape&&j()}else(g=k.current)==null||g.focus()};return Pe.usePagination(te,re,be,h,p),u.jsxs(He,N(L({readOnly:b,value:s},$e),{children:[u.jsxs(Je,{children:[s!==null&&y===""&&(z!=null?z:u.jsx(Ye,{readOnly:b,$clearable:H,children:u.jsx(Ze,{children:Ke})})),u.jsx(Qe,{id:t,ref:k,value:y,title:T!=null?T:y===""&&V!=null?V:y,readOnly:b,invalid:i,placeholder:r,$isPlaceholderVisible:s===null,onChange:Re,onClick:e=>{$(),e.preventDefault()},onFocus:()=>Y(!0),onBlur:()=>Y(!1),"aria-labelledby":he,onKeyDown:Ae,"data-form-type":"other",size:1}),!b&&u.jsxs(Xe,{children:[!h&&s!==null&&H&&u.jsx(pe.IconButton,{ghost:"borderless",level:"tertiary",size:"small",icon:u.jsx(Ne.CloseIcon,{}),title:we,onClick:Oe,tabIndex:0}),u.jsx(pe.IconButton,{ghost:"borderless",level:"tertiary",size:"small",icon:u.jsx(Le.ArrowDownIcon,{}),title:ve,onClick:$,onFocus:j,tabIndex:-1})]})]}),h&&!b&&u.jsx(_e.Overlay,{parentRef:k,verticalPosition:ge,onClose:j,children:u.jsx(rt,{ref:te,$withGroups:je,children:De?p.map((e,o)=>{var S,ie,se,ne;const x=e.props.value,g=(ie=(S=e.props)==null?void 0:S.disabled)!=null?ie:!1,d=o===B&&y!==""&&me;return q(e)?O(p[o+1])?u.jsx(nt,{role:"option-group","data-testid":(se=e.props)==null?void 0:se.title,children:P.default.cloneElement(e)},(ne=e.props)==null?void 0:ne.title):null:u.jsxs(et,{role:"option","data-testid":x,$size:Ie,onClick:qe(x,g),onKeyDown:D=>ze(D,g),tabIndex:0,ref:D=>{switch(o){case Ee:G.current=D;break;case p.length-1:re.current=D;break}s===x&&(M.current=D)},disabled:g,$highlighted:d,children:[P.default.cloneElement(e),g&&u.jsx(Fe.LockIcon,{size:18})]},x)}):u.jsx(tt,{children:E})})})]}))};xe.displayName="SelectInput.Option";ye.displayName="SelectInput.OptionGroup";A.Option=xe;A.OptionGroup=ye;A.Surtitle=st;exports.SelectInput=A;
