"use strict";var G=Object.defineProperty,K=Object.defineProperties;var Q=Object.getOwnPropertyDescriptors;var p=Object.getOwnPropertySymbols;var _=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable;var S=(e,o,r)=>o in e?G(e,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[o]=r,z=(e,o)=>{for(var r in o||(o={}))_.call(o,r)&&S(e,r,o[r]);if(p)for(var r of p(o))R.call(o,r)&&S(e,r,o[r]);return e},A=(e,o)=>K(e,Q(o));var E=(e,o)=>{var r={};for(var n in e)_.call(e,n)&&o.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&p)for(var n of p(e))o.indexOf(n)<0&&R.call(e,n)&&(r[n]=e[n]);return r};var t=require("react/jsx-runtime"),v=require("react"),g=require("styled-components"),a=require("../../theme/theme.js"),U=require("../../theme/common.js"),X=require("../Checkbox/Checkbox.js"),Y=require("../../icons/ArrowRightIcon.js"),Z=require("../../icons/FolderIcon.js"),ee=require("../../icons/FolderPlainIcon.js"),re=require("../../icons/FoldersIcon.js"),oe=require("../../icons/FoldersPlainIcon.js"),te=require("../../icons/LoaderIcon.js"),N=require("./Highlight.js");function P(e){return e&&e.__esModule?e:{default:e}}var i=P(v),l=P(g);const h=g.css`
  vertical-align: middle;
  transition: color 0.2s ease;
  margin-right: 5px;
`,le=l.default.li`
  display: block;
  color: ${a.getColor("grey140")};
`,ne=l.default.ul`
  margin: 0 0 0 20px;
  padding: 0;
`,ie=l.default(Y.ArrowRightIcon)`
  transform: rotate(${({$isFolderOpen:e})=>e?"90":"0"}deg);
  transition: transform 0.2s ease-out;
  vertical-align: middle;
  color: ${a.getColor("grey100")};
  cursor: pointer;
`,ae=l.default(Z.FolderIcon)`
  ${h}
`,se=l.default(oe.FoldersPlainIcon)`
  ${h}
  color: ${a.getColor("blue100")};
`,ce=l.default(ee.FolderPlainIcon)`
  ${h}
  color: ${a.getColor("blue100")};
`,de=l.default(re.FoldersIcon)`
  ${h}
`,ue=l.default(te.LoaderIcon)`
  ${h}
  color: ${a.getColor("grey100")};
`,fe=l.default.span`
  color: ${a.getColor("grey",100)};
`,ge=l.default.div`
  height: 40px;
  line-height: 40px;
  overflow: hidden;
  width: 100%;
  display: inline-flex;
  align-items: center;
  padding-right: 20px;
  ${({$selected:e})=>e&&g.css`
      color: ${a.getColor("blue100")};
    `}
`,he=l.default(X.Checkbox)`
  display: inline-block;
  vertical-align: middle;
  margin-right: 8px;
`,pe=l.default.button`
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
`,xe=l.default.button`
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
      color: ${a.getColor("blue100")};
    `}
  &:hover {
    ${({$selected:e})=>!e&&g.css`
        color: ${a.getColor("grey140")};
      `}
  }
`,me=({isLoading:e,isLeaf:o,selected:r})=>e?t.jsx(ue,{size:24}):o?r?t.jsx(ce,{size:24}):t.jsx(ae,{size:24}):r?t.jsx(se,{size:24}):t.jsx(de,{size:24}),be=i.default.forwardRef(function($e,D){var w=$e,{label:o,value:r,children:n,isLeaf:c=!1,selected:u=!1,isLoading:H=!1,selectable:B=!1,readOnly:L=!1,onChange:x,onOpen:m,onClose:b,onClick:C,defaultOpen:$=!1,_isRoot:O=!0,valueLabel:T,highlight:k=""}=w,V=E(w,["label","value","children","isLeaf","selected","isLoading","selectable","readOnly","onChange","onOpen","onClose","onClick","defaultOpen","_isRoot","valueLabel","highlight"]);const d=[];i.default.Children.forEach(n,s=>{if(s!==null){if(!v.isValidElement(s))throw new Error("Tree component only accepts Tree as children");d.push(s)}});const[f,I]=i.default.useState(d.length>0);v.useEffect(()=>{d.length>0&&$&&I(!0)},[d.length,$]);const y=i.default.useCallback(()=>{I(!0),m&&m(r)},[m,r]),q=i.default.useCallback(()=>{I(!1),b&&b(r)},[b,r]),j=i.default.useCallback(()=>{c||(f?q():y())},[f,q,y,c]),J=i.default.useCallback(()=>{C?C(r):j()},[j,C,r]),M=i.default.useCallback((s,W)=>{x&&x(r,s,W)},[x,r]),F=t.jsxs(le,A(z({ref:D,role:"treeitem","aria-expanded":f},V),{children:[t.jsxs(ge,{$selected:u,children:[t.jsx(pe,{disabled:c,role:"button",onClick:j,children:!c&&t.jsx(ie,{$isFolderOpen:f,size:14})}),B&&t.jsx(he,{checked:u,onChange:M,readOnly:L}),t.jsxs(xe,{onClick:J,$selected:u,title:o,"aria-selected":!!u,children:[t.jsx(me,{isLoading:H,isLeaf:c,selected:u}),t.jsx(N.Highlight,{highlight:k,children:o})," ",T&&t.jsx(fe,{children:t.jsx(N.Highlight,{highlight:k,children:T})})]})]}),f&&!c&&d.length>0&&t.jsx(ne,{role:"group",children:d.map(s=>i.default.cloneElement(s,{key:JSON.stringify(s.props.value),defaultOpen:$,_isRoot:!1}))})]}));return O?t.jsx("ul",{role:"tree",children:F}):F}),Ce=Object.assign(be,{displayName:"Tree"});exports.Tree=Ce;
