"use strict";var U=Object.defineProperty,X=Object.defineProperties;var Y=Object.getOwnPropertyDescriptors;var x=Object.getOwnPropertySymbols;var R=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable;var z=(e,o,r)=>o in e?U(e,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[o]=r,E=(e,o)=>{for(var r in o||(o={}))R.call(o,r)&&z(e,r,o[r]);if(x)for(var r of x(o))A.call(o,r)&&z(e,r,o[r]);return e},L=(e,o)=>X(e,Y(o));var N=(e,o)=>{var r={};for(var n in e)R.call(e,n)&&o.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&x)for(var n of x(e))o.indexOf(n)<0&&A.call(e,n)&&(r[n]=e[n]);return r};var l=require("react/jsx-runtime"),y=require("react"),h=require("styled-components"),i=require("../../theme/theme.js"),Z=require("../../theme/common.js"),ee=require("../Checkbox/Checkbox.js"),re=require("../../icons/ArrowRightIcon.js"),oe=require("../../icons/FolderIcon.js"),le=require("../../icons/FolderPlainIcon.js"),te=require("../../icons/FoldersIcon.js"),ne=require("../../icons/FoldersPlainIcon.js"),ie=require("../../icons/LoaderIcon.js"),I=require("../../shared/Highlight.js");function H(e){return e&&e.__esModule?e:{default:e}}var s=H(y),t=H(h);const g=h.css`
  vertical-align: middle;
  transition: color 0.2s ease;
  margin-right: 5px;
`,se=t.default.li`
  display: block;
  color: ${i.getColor("grey140")};
`,ae=t.default.ul`
  margin: 0 0 0 20px;
  padding: 0;
`,ce=t.default(re.ArrowRightIcon)`
  transform: rotate(${({$isFolderOpen:e})=>e?"90":"0"}deg);
  transition: transform 0.2s ease-out;
  vertical-align: middle;
  color: ${i.getColor("grey100")};
  cursor: pointer;
`,de=t.default(oe.FolderIcon)`
  ${g}
`,ue=t.default(ne.FoldersPlainIcon)`
  ${g}
  color: ${i.getColor("blue100")};
`,fe=t.default(le.FolderPlainIcon)`
  ${g}
  color: ${i.getColor("blue100")};
`,he=t.default(te.FoldersIcon)`
  ${g}
`,ge=t.default(ie.LoaderIcon)`
  ${g}
  color: ${i.getColor("grey100")};
`,xe=t.default.span`
  color: ${i.getColor("grey",100)};
`,pe=t.default.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
  line-height: normal;
  overflow: hidden;
`,me=t.default.span`
  color: ${i.getColor("grey",100)};
  font-size: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
`,be=t.default.span`
  overflow: hidden;
  text-overflow: ellipsis;
`,Ce=t.default.div`
  height: 40px;
  line-height: 40px;
  overflow: hidden;
  width: 100%;
  display: inline-flex;
  align-items: center;
  padding-right: 20px;
  ${({$selected:e})=>e&&h.css`
      color: ${i.getColor("blue100")};
    `}
`,je=t.default(ee.Checkbox)`
  display: inline-block;
  vertical-align: middle;
  margin-right: 8px;
`,ve=t.default.button`
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
`,$e=t.default.button`
  ${Z.CommonStyle}
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
  ${({$selected:e})=>e&&h.css`
      color: ${i.getColor("blue100")};
    `}
  &:hover {
    ${({$selected:e})=>!e&&h.css`
        color: ${i.getColor("grey140")};
      `}
  }
`,we=({isLoading:e,isLeaf:o,selected:r})=>{if(e)return l.jsx(ge,{size:24});const n=r===!0||r==="mixed";return o?n?l.jsx(fe,{size:24}):l.jsx(de,{size:24}):n?l.jsx(ue,{size:24}):l.jsx(he,{size:24})},Ie=s.default.forwardRef(function(Te,W){var q=Te,{label:o,value:r,children:n,isLeaf:c=!1,selected:u=!1,isLoading:P=!1,selectable:B=!1,readOnly:O=!1,onChange:p,onOpen:m,onClose:b,onClick:C,defaultOpen:j=!1,_isRoot:V=!0,valueLabel:T,highlight:v="",additional:D,hideIcons:J=!1,code:k}=q,M=N(q,["label","value","children","isLeaf","selected","isLoading","selectable","readOnly","onChange","onOpen","onClose","onClick","defaultOpen","_isRoot","valueLabel","highlight","additional","hideIcons","code"]);const d=[];s.default.Children.forEach(n,a=>{if(a!==null){if(!y.isValidElement(a))throw new Error("Tree component only accepts Tree as children");d.push(a)}});const[f,$]=s.default.useState(d.length>0);y.useEffect(()=>{d.length>0&&j&&$(!0)},[d.length,j]);const F=s.default.useCallback(()=>{$(!0),m&&m(r)},[m,r]),S=s.default.useCallback(()=>{$(!1),b&&b(r)},[b,r]),w=s.default.useCallback(()=>{c||(f?S():F())},[f,S,F,c]),G=s.default.useCallback(()=>{C?C(r):w()},[w,C,r]),K=s.default.useCallback((a,Q)=>{p&&p(r,a,Q)},[p,r]),_=l.jsxs(se,L(E({ref:W,role:"treeitem","aria-expanded":f},M),{children:[l.jsxs(Ce,{$selected:u,children:[l.jsx(ve,{disabled:c,role:"button",onClick:w,children:!c&&l.jsx(ce,{$isFolderOpen:f,size:14})}),B&&l.jsx(je,{checked:u,onChange:K,readOnly:O}),l.jsxs($e,{onClick:G,$selected:u,title:o,"aria-selected":!!u,children:[!J&&l.jsx(we,{isLoading:P,isLeaf:c,selected:u}),k?l.jsxs(pe,{children:[l.jsx(me,{children:k}),l.jsx(be,{children:l.jsx(I.Highlight,{highlight:v,children:o})})]}):l.jsx(I.Highlight,{highlight:v,children:o})," ",D,T&&l.jsx(xe,{children:l.jsx(I.Highlight,{highlight:v,children:T})})]})]}),f&&!c&&d.length>0&&l.jsx(ae,{role:"group",children:d.map(a=>s.default.cloneElement(a,{key:JSON.stringify(a.props.value),defaultOpen:j,_isRoot:!1}))})]}));return V?l.jsx("ul",{role:"tree",children:_}):_}),ye=Object.assign(Ie,{displayName:"Tree"});exports.Tree=ye;
