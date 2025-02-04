"use strict";var W=Object.defineProperty,G=Object.defineProperties;var K=Object.getOwnPropertyDescriptors;var h=Object.getOwnPropertySymbols;var q=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable;var T=(e,r,o)=>r in e?W(e,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[r]=o,S=(e,r)=>{for(var o in r||(r={}))q.call(r,o)&&T(e,o,r[o]);if(h)for(var o of h(r))F.call(r,o)&&T(e,o,r[o]);return e},_=(e,r)=>G(e,K(r));var z=(e,r)=>{var o={};for(var t in e)q.call(e,t)&&r.indexOf(t)<0&&(o[t]=e[t]);if(e!=null&&h)for(var t of h(e))r.indexOf(t)<0&&F.call(e,t)&&(o[t]=e[t]);return o};var l=require("react/jsx-runtime"),A=require("react"),u=require("styled-components"),i=require("../../theme/theme.js"),Q=require("../../theme/common.js"),U=require("../Checkbox/Checkbox.js"),X=require("../../icons/ArrowRightIcon.js"),Y=require("../../icons/FolderIcon.js"),Z=require("../../icons/FolderPlainIcon.js"),ee=require("../../icons/FoldersIcon.js"),re=require("../../icons/FoldersPlainIcon.js"),oe=require("../../icons/LoaderIcon.js"),R=require("./Highlight.js");function N(e){return e&&e.__esModule?e:{default:e}}var a=N(A),n=N(u);const f=u.css`
  vertical-align: middle;
  transition: color 0.2s ease;
  margin-right: 5px;
`,le=n.default.li`
  display: block;
  color: ${i.getColor("grey140")};
`,te=n.default.ul`
  margin: 0 0 0 20px;
  padding: 0;
`,ne=n.default(X.ArrowRightIcon)`
  transform: rotate(${({$isFolderOpen:e})=>e?"90":"0"}deg);
  transition: transform 0.2s ease-out;
  vertical-align: middle;
  color: ${i.getColor("grey100")};
  cursor: pointer;
`,ie=n.default(Y.FolderIcon)`
  ${f}
`,ae=n.default(re.FoldersPlainIcon)`
  ${f}
  color: ${i.getColor("blue100")};
`,se=n.default(Z.FolderPlainIcon)`
  ${f}
  color: ${i.getColor("blue100")};
`,ce=n.default(ee.FoldersIcon)`
  ${f}
`,de=n.default(oe.LoaderIcon)`
  ${f}
  color: ${i.getColor("grey100")};
`,ue=n.default.span`
  color: ${i.getColor("grey",100)};
`,fe=n.default.div`
  height: 40px;
  line-height: 40px;
  overflow: hidden;
  width: 100%;
  display: inline-flex;
  align-items: center;
  padding-right: 20px;
  ${({$selected:e})=>e&&u.css`
      color: ${i.getColor("blue100")};
    `}
`,ge=n.default(U.Checkbox)`
  display: inline-block;
  vertical-align: middle;
  margin-right: 8px;
`,he=n.default.button`
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
  ${Q.CommonStyle}
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
  ${({$selected:e})=>e&&u.css`
      color: ${i.getColor("blue100")};
    `}
  &:hover {
    ${({$selected:e})=>!e&&u.css`
        color: ${i.getColor("grey140")};
      `}
  }
`,xe=({isLoading:e,isLeaf:r,selected:o})=>e?l.jsx(de,{size:24}):r?o?l.jsx(se,{size:24}):l.jsx(ie,{size:24}):o?l.jsx(ae,{size:24}):l.jsx(ce,{size:24}),E=me=>{var j=me,{label:e,value:r,children:o,isLeaf:t=!1,selected:c=!1,isLoading:P=!1,selectable:H=!1,readOnly:O=!1,onChange:p,onOpen:x,onClose:m,onClick:b,defaultOpen:B=!1,_isRoot:L=!0,valueLabel:$,highlight:I=""}=j,V=z(j,["label","value","children","isLeaf","selected","isLoading","selectable","readOnly","onChange","onOpen","onClose","onClick","defaultOpen","_isRoot","valueLabel","highlight"]);const g=[];a.default.Children.forEach(o,s=>{if(!A.isValidElement(s))throw new Error("Tree component only accepts Tree as children");g.push(s)});const[d,v]=a.default.useState(g.length>0),k=a.default.useCallback(()=>{v(!0),x&&x(r)},[x,r]),w=a.default.useCallback(()=>{v(!1),m&&m(r)},[m,r]),C=a.default.useCallback(()=>{t||(d?w():k())},[d,w,k,t]),D=a.default.useCallback(()=>{b?b(r):C()},[C,b,r]),J=a.default.useCallback((s,M)=>{p&&p(r,s,M)},[p,r]),y=l.jsxs(le,_(S({role:"treeitem","aria-expanded":d},V),{children:[l.jsxs(fe,{$selected:c,children:[l.jsx(he,{disabled:t,role:"button",onClick:C,children:!t&&l.jsx(ne,{$isFolderOpen:d,size:14})}),H&&l.jsx(ge,{checked:c,onChange:J,readOnly:O}),l.jsxs(pe,{onClick:D,$selected:c,title:e,"aria-selected":!!c,children:[l.jsx(xe,{isLoading:P,isLeaf:t,selected:c}),l.jsx(R.Highlight,{highlight:I,children:e})," ",$&&l.jsx(ue,{children:l.jsx(R.Highlight,{highlight:I,children:$})})]})]}),d&&!t&&g.length>0&&l.jsx(te,{role:"group",children:g.map(s=>a.default.cloneElement(s,{key:JSON.stringify(s.props.value),defaultOpen:B,_isRoot:!1}))})]}));return L?l.jsx("ul",{role:"tree",children:y}):y};E.displayName="Tree";exports.Tree=E;
