"use strict";var G=Object.defineProperty,K=Object.defineProperties;var Q=Object.getOwnPropertyDescriptors;var x=Object.getOwnPropertySymbols;var _=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable;var S=(e,o,r)=>o in e?G(e,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[o]=r,z=(e,o)=>{for(var r in o||(o={}))_.call(o,r)&&S(e,r,o[r]);if(x)for(var r of x(o))R.call(o,r)&&S(e,r,o[r]);return e},A=(e,o)=>K(e,Q(o));var E=(e,o)=>{var r={};for(var l in e)_.call(e,l)&&o.indexOf(l)<0&&(r[l]=e[l]);if(e!=null&&x)for(var l of x(e))o.indexOf(l)<0&&R.call(e,l)&&(r[l]=e[l]);return r};var t=require("react/jsx-runtime"),v=require("react"),g=require("styled-components"),s=require("../../theme/theme.js"),U=require("../../theme/common.js"),X=require("../Checkbox/Checkbox.js"),Y=require("../../icons/ArrowRightIcon.js"),Z=require("../../icons/FolderIcon.js"),ee=require("../../icons/FolderPlainIcon.js"),re=require("../../icons/FoldersIcon.js"),oe=require("../../icons/FoldersPlainIcon.js"),te=require("../../icons/LoaderIcon.js"),N=require("./Highlight.js");function P(e){return e&&e.__esModule?e:{default:e}}var i=P(v),n=P(g);const h=g.css`
  vertical-align: middle;
  transition: color 0.2s ease;
  margin-right: 5px;
`,le=n.default.li`
  display: block;
  color: ${s.getColor("grey140")};
`,ne=n.default.ul`
  margin: 0 0 0 20px;
  padding: 0;
`,ie=n.default(Y.ArrowRightIcon)`
  transform: rotate(${({$isFolderOpen:e})=>e?"90":"0"}deg);
  transition: transform 0.2s ease-out;
  vertical-align: middle;
  color: ${s.getColor("grey100")};
  cursor: pointer;
`,se=n.default(Z.FolderIcon)`
  ${h}
`,ae=n.default(oe.FoldersPlainIcon)`
  ${h}
  color: ${s.getColor("blue100")};
`,ce=n.default(ee.FolderPlainIcon)`
  ${h}
  color: ${s.getColor("blue100")};
`,de=n.default(re.FoldersIcon)`
  ${h}
`,ue=n.default(te.LoaderIcon)`
  ${h}
  color: ${s.getColor("grey100")};
`,fe=n.default.span`
  color: ${s.getColor("grey",100)};
`,ge=n.default.div`
  height: 40px;
  line-height: 40px;
  overflow: hidden;
  width: 100%;
  display: inline-flex;
  align-items: center;
  padding-right: 20px;
  ${({$selected:e})=>e&&g.css`
      color: ${s.getColor("blue100")};
    `}
`,he=n.default(X.Checkbox)`
  display: inline-block;
  vertical-align: middle;
  margin-right: 8px;
`,xe=n.default.button`
  height: 30px;
  width: 30px;
  vertical-align: middle;
  margin-right: 2px;
  padding: 0;
  border: none;
  background: none;
  &:not(:disabled) {
    cursor: pointer;
  }
`,pe=n.default.button`
  ${U.CommonStyle}
  height: 30px;
  vertical-align: middle;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0 5px 0 0;
  cursor: pointer;
  text-overflow: ellipsis;
  overflow: hidden;
  max-width: calc(100% - 35px);
  text-align: left;
  white-space: nowrap;
  ${({$selected:e})=>e&&g.css`
      color: ${s.getColor("blue100")};
    `}
  &:hover {
    ${({$selected:e})=>!e&&g.css`
        color: ${s.getColor("grey140")};
      `}
  }
`,me=({isLoading:e,isLeaf:o,selected:r})=>{if(e)return t.jsx(ue,{size:24});const l=r===!0||r==="mixed";return o?l?t.jsx(ce,{size:24}):t.jsx(se,{size:24}):l?t.jsx(ae,{size:24}):t.jsx(de,{size:24})},be=i.default.forwardRef(function($e,D){var w=$e,{label:o,value:r,children:l,isLeaf:c=!1,selected:u=!1,isLoading:H=!1,selectable:B=!1,readOnly:L=!1,onChange:p,onOpen:m,onClose:b,onClick:C,defaultOpen:$=!1,_isRoot:O=!0,valueLabel:T,highlight:k=""}=w,V=E(w,["label","value","children","isLeaf","selected","isLoading","selectable","readOnly","onChange","onOpen","onClose","onClick","defaultOpen","_isRoot","valueLabel","highlight"]);const d=[];i.default.Children.forEach(l,a=>{if(a!==null){if(!v.isValidElement(a))throw new Error("Tree component only accepts Tree as children");d.push(a)}});const[f,I]=i.default.useState(d.length>0);v.useEffect(()=>{d.length>0&&$&&I(!0)},[d.length,$]);const y=i.default.useCallback(()=>{I(!0),m&&m(r)},[m,r]),q=i.default.useCallback(()=>{I(!1),b&&b(r)},[b,r]),j=i.default.useCallback(()=>{c||(f?q():y())},[f,q,y,c]),J=i.default.useCallback(()=>{C?C(r):j()},[j,C,r]),M=i.default.useCallback((a,W)=>{p&&p(r,a,W)},[p,r]),F=t.jsxs(le,A(z({ref:D,role:"treeitem","aria-expanded":f},V),{children:[t.jsxs(ge,{$selected:u,children:[t.jsx(xe,{disabled:c,role:"button",onClick:j,children:!c&&t.jsx(ie,{$isFolderOpen:f,size:14})}),B&&t.jsx(he,{checked:u,onChange:M,readOnly:L}),t.jsxs(pe,{onClick:J,$selected:u,title:o,"aria-selected":!!u,children:[t.jsx(me,{isLoading:H,isLeaf:c,selected:u}),t.jsx(N.Highlight,{highlight:k,children:o})," ",T&&t.jsx(fe,{children:t.jsx(N.Highlight,{highlight:k,children:T})})]})]}),f&&!c&&d.length>0&&t.jsx(ne,{role:"group",children:d.map(a=>i.default.cloneElement(a,{key:JSON.stringify(a.props.value),defaultOpen:$,_isRoot:!1}))})]}));return O?t.jsx("ul",{role:"tree",children:F}):F}),Ce=Object.assign(be,{displayName:"Tree"});exports.Tree=Ce;
