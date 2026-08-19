"use strict";var ze=Object.defineProperty,Te=Object.defineProperties;var Ge=Object.getOwnPropertyDescriptors;var R=Object.getOwnPropertySymbols;var ue=Object.prototype.hasOwnProperty,ae=Object.prototype.propertyIsEnumerable;var ne=(t,r,s)=>r in t?ze(t,r,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[r]=s,L=(t,r)=>{for(var s in r||(r={}))ue.call(r,s)&&ne(t,s,r[s]);if(R)for(var s of R(r))ae.call(r,s)&&ne(t,s,r[s]);return t},N=(t,r)=>Te(t,Ge(r));var F=(t,r)=>{var s={};for(var i in t)ue.call(t,i)&&r.indexOf(i)<0&&(s[i]=t[i]);if(t!=null&&R)for(var i of R(t))r.indexOf(i)<0&&ae.call(t,i)&&(s[i]=t[i]);return s};var u=require("react/jsx-runtime"),l=require("react"),U=require("styled-components"),c=require("../../../shared/key.js"),Me=require("../common/Overlay.js"),ce=require("../../IconButton/IconButton.js"),_e=require("../TextInput/TextInput.js"),Be=require("../../../hooks/useBooleanState.js"),Ve=require("../../../hooks/useShortcut.js"),n=require("../../../theme/theme.js"),Ce=require("../../../icons/ArrowDownIcon.js"),Le=require("../../../icons/CloseIcon.js"),Ne=require("../../../icons/LockIcon.js"),Fe=require("../../../hooks/usePagination.js");function pe(t){return t&&t.__esModule?t:{default:t}}var P=pe(l),a=pe(U);const Pe=t=>t.length>0&&t.every(r=>{var s,i;return(i=(s=r.props)==null?void 0:s.disabled)!=null?i:!1}),Ue={default:34,big:44},We=a.default.div`
  width: 100%;

  & input[type='text'] {
    cursor: ${({readOnly:t})=>t?"not-allowed":"pointer"};
    background: ${({value:t,readOnly:r})=>t===null&&r?n.getColor("grey",20):"transparent"};

    &:focus {
      z-index: 2;
    }
  }
`,He=a.default.div`
  position: relative;
  background: ${n.getColor("white")};
`,Je=a.default(_e.TextInput)`
  &::placeholder {
    opacity: ${({$isPlaceholderVisible:t})=>t?1:0};
  }
`,Qe=a.default.div`
  position: absolute;
  right: 8px;
  top: 0;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  z-index: 2;
`,Xe=a.default.div`
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
`,Ye=a.default.span`
  display: block;
  flex: 1;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Ze=a.default.div`
  background: ${({$highlighted:t})=>t?n.getColor("grey",20):n.getColor("white")};
  min-height: ${({$size:t})=>Ue[t]}px;
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
`,et=a.default.div`
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
`,tt=a.default.div`
  max-height: 320px;
  overflow-y: auto;
  padding-left: ${({$withGroups:t})=>t?"20px":"0"};
`,de=U.css`
  display: block;
  line-height: 34px;
  min-height: 34px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,fe=a.default.span`
  ${de};
`,xe=a.default.span`
  ${de};
`,rt=a.default.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
  line-height: normal;
  overflow: hidden;
`,ot=a.default.span`
  color: ${n.getColor("grey",100)};
  font-size: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
`,lt=a.default.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1;
`,it=i=>{var K=i,{label:t,children:r}=K,s=F(K,["label","children"]);return u.jsxs(rt,N(L({},s),{children:[u.jsx(ot,{title:t,children:t}),u.jsx(lt,{children:r})]}))},st=a.default.div`
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
`,q=t=>(t==null?void 0:t.type.displayName)==="SelectInput.OptionGroup",O=t=>(t==null?void 0:t.type.displayName)==="SelectInput.Option",A=nt=>{var Q=nt,{id:t,placeholder:r,invalid:s,value:i,emptyResultLabel:K,children:W,onChange:p,clearable:H=!0,clearLabel:ye="",openLabel:we,readOnly:b=!1,verticalPosition:ve,onNextPage:ge,onSearchChange:I,optionsFilteredExternally:J=!1,"aria-labelledby":be,selectedValueComponent:z,onOpenChange:v,title:T,keepDropdownOnSelect:he=!1,size:ke="default"}=Q,Ie=F(Q,["id","placeholder","invalid","value","emptyResultLabel","children","onChange","clearable","clearLabel","openLabel","readOnly","verticalPosition","onNextPage","onSearchChange","optionsFilteredExternally","aria-labelledby","selectedValueComponent","onOpenChange","title","keepDropdownOnSelect","size"]);var re,oe;const[y,j]=l.useState(""),[$e,X]=l.useState(!1),[me,je]=l.useState(!1),[h,Y,Z]=Be.useBooleanState(),k=l.useRef(null),ee=l.useRef(null),G=l.useRef(null),te=l.useRef(null),M=l.useRef(null),$=l.useCallback(()=>{Y(),v==null||v(!0)},[Y,v]),_=l.useCallback(()=>{Z(),v==null||v(!1)},[Z,v]),m=l.useMemo(()=>P.default.Children.toArray(W).filter(e=>l.isValidElement(e)),[W]);b=b||Pe(m),m.reduce((e,o)=>{if(q(o))return e;if(e.includes(o.props.value))throw new Error(`Duplicate option value ${o.props.value}`);return e.push(o.props.value),e},[]);const d=l.useMemo(()=>J?m:m.filter(e=>{var D;const o=typeof e.props.children=="string"?e.props.children:"",x=(D=e.props.title)!=null?D:"",f=e.props.value+o+x;return q(e)||f.toLowerCase().includes(y.toLowerCase())}),[J,m,y]),Se=l.useMemo(()=>d.some(e=>O(e)),[d]),De=l.useMemo(()=>d.findIndex(e=>O(e)),[d]),B=l.useMemo(()=>d.findIndex(e=>{var o,x;return O(e)&&!((x=(o=e.props)==null?void 0:o.disabled)!=null&&x)}),[d]),w=(re=m.find(e=>{const o=e.props.value;return i===o}))!=null?re:i,V=typeof w=="string"?w:l.isValidElement(w)?(oe=w.props.title)!=null?oe:typeof w.props.children=="string"?w.props.children:void 0:void 0,Ee=l.isValidElement(w)?l.cloneElement(w,{title:void 0}):w,Ke=e=>{I==null||I(e),j(e),$()},Re=(e,o)=>()=>{o||(p==null||p(e),C())},qe=e=>{var o;p==null||p(null),e.preventDefault(),(o=k.current)==null||o.focus()},S=()=>{var e;j(""),_(),(e=k.current)==null||e.focus()},C=()=>{var e;he?(j(""),I==null||I(""),(e=k.current)==null||e.focus()):S()};Ve.useShortcut(c.Key.Escape,S,k);const Oe=e=>{var o;e.currentTarget!==null&&(e.key===c.Key.Tab&&(j(""),_()),e.key===c.Key.ArrowDown?(e.preventDefault(),h?(o=G.current||M.current)==null||o.focus():$()):e.key===c.Key.ArrowUp?(e.preventDefault(),$()):e.key===c.Key.Enter&&(e.preventDefault(),h?y!==""&&B!==-1&&(p==null||p(d[B].props.value),C()):$()))};l.useEffect(()=>{var e;h&&y===""&&((e=M.current||G.current)==null||e.focus())},[h]),l.useEffect(()=>{d.some(e=>q(e))&&je(!0)},[d]);const Ae=l.useCallback((e,o)=>{var x,g;if(e.currentTarget!==null)if(e.key===c.Key.Tab&&(j(""),_()),[c.Key.ArrowDown,c.Key.ArrowUp,c.Key.Enter,c.Key.Escape].includes(e.key)){if(e.key===c.Key.ArrowDown){const f=e.currentTarget.nextSibling;f==null||f.focus(),e.preventDefault()}if(e.key===c.Key.ArrowUp){const f=e.currentTarget.previousSibling;f==null||f.focus(),e.preventDefault()}if(e.key===c.Key.Enter&&!o){const f=(x=e.currentTarget.firstChild)==null?void 0:x.getAttribute("value");p==null||p(f),C()}e.key===c.Key.Escape&&S()}else(g=k.current)==null||g.focus()},[p,i]);return Fe.usePagination(ee,te,ge,h,d),u.jsxs(We,N(L({readOnly:b,value:i},Ie),{children:[u.jsxs(He,{children:[i!==null&&y===""&&(z!=null?z:u.jsx(Xe,{readOnly:b,$clearable:H,children:u.jsx(Ye,{children:Ee})})),u.jsx(Je,{id:t,ref:k,value:y,title:T!=null?T:y===""&&V!=null?V:y,readOnly:b,invalid:s,placeholder:r,$isPlaceholderVisible:i===null,onChange:Ke,onClick:e=>{$(),e.preventDefault()},onFocus:()=>X(!0),onBlur:()=>X(!1),"aria-labelledby":be,onKeyDown:Oe,"data-form-type":"other",size:1}),!b&&u.jsxs(Qe,{children:[!h&&i!==null&&H&&u.jsx(ce.IconButton,{ghost:"borderless",level:"tertiary",size:"small",icon:u.jsx(Le.CloseIcon,{}),title:ye,onClick:qe,tabIndex:0}),u.jsx(ce.IconButton,{ghost:"borderless",level:"tertiary",size:"small",icon:u.jsx(Ce.ArrowDownIcon,{}),title:we,onClick:$,onFocus:S,tabIndex:-1})]})]}),h&&!b&&u.jsx(Me.Overlay,{parentRef:k,verticalPosition:ve,onClose:S,children:u.jsx(tt,{ref:ee,$withGroups:me,children:Se?d.map((e,o)=>{var D,le,ie,se;const x=e.props.value,g=(le=(D=e.props)==null?void 0:D.disabled)!=null?le:!1,f=o===B&&y!==""&&$e;return q(e)?O(d[o+1])?u.jsx(st,{role:"option-group","data-testid":(ie=e.props)==null?void 0:ie.title,children:P.default.cloneElement(e)},(se=e.props)==null?void 0:se.title):null:u.jsxs(Ze,{role:"option","data-testid":x,$size:ke,onClick:Re(x,g),onKeyDown:E=>Ae(E,g),tabIndex:0,ref:E=>{switch(o){case De:G.current=E;break;case d.length-1:te.current=E;break}i===x&&(M.current=E)},disabled:g,$highlighted:f,children:[P.default.cloneElement(e),g&&u.jsx(Ne.LockIcon,{size:18})]},x)}):u.jsx(et,{children:K})})})]}))};fe.displayName="SelectInput.Option";xe.displayName="SelectInput.OptionGroup";A.Option=fe;A.OptionGroup=xe;A.Surtitle=it;exports.SelectInput=A;
