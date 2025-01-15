"use strict";var M=Object.defineProperty,W=Object.defineProperties;var G=Object.getOwnPropertyDescriptors;var h=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable;var y=(e,r,o)=>r in e?M(e,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[r]=o,F=(e,r)=>{for(var o in r||(r={}))T.call(r,o)&&y(e,o,r[o]);if(h)for(var o of h(r))q.call(r,o)&&y(e,o,r[o]);return e},S=(e,r)=>W(e,G(r));var _=(e,r)=>{var o={};for(var l in e)T.call(e,l)&&r.indexOf(l)<0&&(o[l]=e[l]);if(e!=null&&h)for(var l of h(e))r.indexOf(l)<0&&q.call(e,l)&&(o[l]=e[l]);return o};var t=require("react/jsx-runtime"),z=require("react"),u=require("styled-components"),i=require("../../theme/theme.js"),H=require("../../theme/common.js"),K=require("../Checkbox/Checkbox.js"),Q=require("../../icons/ArrowRightIcon.js"),U=require("../../icons/FolderIcon.js"),X=require("../../icons/FolderPlainIcon.js"),Y=require("../../icons/FoldersIcon.js"),Z=require("../../icons/FoldersPlainIcon.js"),ee=require("../../icons/LoaderIcon.js");function R(e){return e&&e.__esModule?e:{default:e}}var a=R(z),n=R(u);const f=u.css`
  vertical-align: middle;
  transition: color 0.2s ease;
  margin-right: 5px;
`,re=n.default.li`
  display: block;
  color: ${i.getColor("grey140")};
`,oe=n.default.ul`
  margin: 0 0 0 20px;
  padding: 0;
`,le=n.default(Q.ArrowRightIcon)`
  transform: rotate(${({$isFolderOpen:e})=>e?"90":"0"}deg);
  transition: transform 0.2s ease-out;
  vertical-align: middle;
  color: ${i.getColor("grey100")};
  cursor: pointer;
`,te=n.default(U.FolderIcon)`
  ${f}
`,ne=n.default(Z.FoldersPlainIcon)`
  ${f}
  color: ${i.getColor("blue100")};
`,ie=n.default(X.FolderPlainIcon)`
  ${f}
  color: ${i.getColor("blue100")};
`,ae=n.default(Y.FoldersIcon)`
  ${f}
`,se=n.default(ee.LoaderIcon)`
  ${f}
  color: ${i.getColor("grey100")};
`,ce=n.default.span`
  color: ${i.getColor("grey",100)};
`,de=n.default.div`
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
`,ue=n.default(K.Checkbox)`
  display: inline-block;
  vertical-align: middle;
  margin-right: 8px;
`,fe=n.default.button`
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
`,ge=n.default.button`
  ${H.CommonStyle}
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
`,he=({isLoading:e,isLeaf:r,selected:o})=>e?t.jsx(se,{size:24}):r?o?t.jsx(ie,{size:24}):t.jsx(te,{size:24}):o?t.jsx(ne,{size:24}):t.jsx(ae,{size:24}),A=pe=>{var I=pe,{label:e,value:r,children:o,isLeaf:l=!1,selected:c=!1,isLoading:N=!1,selectable:E=!1,readOnly:P=!1,onChange:p,onOpen:x,onClose:m,onClick:b,defaultOpen:O=!1,_isRoot:B=!0,valueLabel:$}=I,L=_(I,["label","value","children","isLeaf","selected","isLoading","selectable","readOnly","onChange","onOpen","onClose","onClick","defaultOpen","_isRoot","valueLabel"]);const g=[];a.default.Children.forEach(o,s=>{if(!z.isValidElement(s))throw new Error("Tree component only accepts Tree as children");g.push(s)});const[d,v]=a.default.useState(g.length>0),j=a.default.useCallback(()=>{v(!0),x&&x(r)},[x,r]),k=a.default.useCallback(()=>{v(!1),m&&m(r)},[m,r]),C=a.default.useCallback(()=>{l||(d?k():j())},[d,k,j,l]),V=a.default.useCallback(()=>{b?b(r):C()},[C,b,r]),D=a.default.useCallback((s,J)=>{p&&p(r,s,J)},[p,r]),w=t.jsxs(re,S(F({role:"treeitem","aria-expanded":d},L),{children:[t.jsxs(de,{$selected:c,children:[t.jsx(fe,{disabled:l,role:"button",onClick:C,children:!l&&t.jsx(le,{$isFolderOpen:d,size:14})}),E&&t.jsx(ue,{checked:c,onChange:D,readOnly:P}),t.jsxs(ge,{onClick:V,$selected:c,title:e,"aria-selected":!!c,children:[t.jsx(he,{isLoading:N,isLeaf:l,selected:c}),e," ",$&&t.jsx(ce,{children:$})]})]}),d&&!l&&g.length>0&&t.jsx(oe,{role:"group",children:g.map(s=>a.default.cloneElement(s,{key:JSON.stringify(s.props.value),defaultOpen:O,_isRoot:!1}))})]}));return B?t.jsx("ul",{role:"tree",children:w}):w};A.displayName="Tree";exports.Tree=A;
