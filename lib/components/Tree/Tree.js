"use strict";var M=Object.defineProperty,V=Object.defineProperties;var W=Object.getOwnPropertyDescriptors;var h=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var w=(e,r,o)=>r in e?M(e,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[r]=o,q=(e,r)=>{for(var o in r||(r={}))T.call(r,o)&&w(e,o,r[o]);if(h)for(var o of h(r))y.call(r,o)&&w(e,o,r[o]);return e},F=(e,r)=>V(e,W(r));var S=(e,r)=>{var o={};for(var t in e)T.call(e,t)&&r.indexOf(t)<0&&(o[t]=e[t]);if(e!=null&&h)for(var t of h(e))r.indexOf(t)<0&&y.call(e,t)&&(o[t]=e[t]);return o};var l=require("react/jsx-runtime"),_=require("react"),u=require("styled-components"),a=require("../../theme/theme.js"),G=require("../../theme/common.js"),H=require("../Checkbox/Checkbox.js"),K=require("../../icons/ArrowRightIcon.js"),Q=require("../../icons/FolderIcon.js"),U=require("../../icons/FolderPlainIcon.js"),X=require("../../icons/FoldersIcon.js"),Y=require("../../icons/FoldersPlainIcon.js"),Z=require("../../icons/LoaderIcon.js");function z(e){return e&&e.__esModule?e:{default:e}}var i=z(_),n=z(u);const f=u.css`
  vertical-align: middle;
  transition: color 0.2s ease;
  margin-right: 5px;
`,ee=n.default.li`
  display: block;
  color: ${a.getColor("grey140")};
`,re=n.default.ul`
  margin: 0 0 0 20px;
  padding: 0;
`,oe=n.default(K.ArrowRightIcon)`
  transform: rotate(${({$isFolderOpen:e})=>e?"90":"0"}deg);
  transition: transform 0.2s ease-out;
  vertical-align: middle;
  color: ${a.getColor("grey100")};
  cursor: pointer;
`,te=n.default(Q.FolderIcon)`
  ${f}
`,le=n.default(Y.FoldersPlainIcon)`
  ${f}
  color: ${a.getColor("blue100")};
`,ne=n.default(U.FolderPlainIcon)`
  ${f}
  color: ${a.getColor("blue100")};
`,ie=n.default(X.FoldersIcon)`
  ${f}
`,ae=n.default(Z.LoaderIcon)`
  ${f}
  color: ${a.getColor("grey100")};
`,se=n.default.div`
  height: 40px;
  line-height: 40px;
  overflow: hidden;
  width: 100%;
  display: inline-flex;
  align-items: center;
  padding-right: 20px;
  ${({$selected:e})=>e&&u.css`
      color: ${a.getColor("blue100")};
    `}
`,ce=n.default(H.Checkbox)`
  display: inline-block;
  vertical-align: middle;
  margin-right: 8px;
`,de=n.default.button`
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
`,ue=n.default.button`
  ${G.CommonStyle}
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
      color: ${a.getColor("blue100")};
    `}
  &:hover {
    ${({$selected:e})=>!e&&u.css`
        color: ${a.getColor("grey140")};
      `}
  }
`,fe=({isLoading:e,isLeaf:r,selected:o})=>e?l.jsx(ae,{size:24}):r?o?l.jsx(ne,{size:24}):l.jsx(te,{size:24}):o?l.jsx(le,{size:24}):l.jsx(ie,{size:24}),R=ge=>{var $=ge,{label:e,value:r,children:o,isLeaf:t=!1,selected:c=!1,isLoading:A=!1,selectable:N=!1,readOnly:E=!1,onChange:p,onOpen:x,onClose:m,onClick:b,defaultOpen:P=!1,_isRoot:O=!0}=$,B=S($,["label","value","children","isLeaf","selected","isLoading","selectable","readOnly","onChange","onOpen","onClose","onClick","defaultOpen","_isRoot"]);const g=[];i.default.Children.forEach(o,s=>{if(!_.isValidElement(s))throw new Error("Tree component only accepts Tree as children");g.push(s)});const[d,I]=i.default.useState(g.length>0),v=i.default.useCallback(()=>{I(!0),x&&x(r)},[x,r]),k=i.default.useCallback(()=>{I(!1),m&&m(r)},[m,r]),C=i.default.useCallback(()=>{t||(d?k():v())},[d,k,v,t]),L=i.default.useCallback(()=>{b?b(r):C()},[C,b,r]),D=i.default.useCallback((s,J)=>{p&&p(r,s,J)},[p,r]),j=l.jsxs(ee,F(q({role:"treeitem","aria-expanded":d},B),{children:[l.jsxs(se,{$selected:c,children:[l.jsx(de,{disabled:t,role:"button",onClick:C,children:!t&&l.jsx(oe,{$isFolderOpen:d,size:14})}),N&&l.jsx(ce,{checked:c,onChange:D,readOnly:E}),l.jsxs(ue,{onClick:L,$selected:c,title:e,"aria-selected":!!c,children:[l.jsx(fe,{isLoading:A,isLeaf:t,selected:c}),e]})]}),d&&!t&&g.length>0&&l.jsx(re,{role:"group",children:g.map(s=>i.default.cloneElement(s,{key:JSON.stringify(s.props.value),defaultOpen:P,_isRoot:!1}))})]}));return O?l.jsx("ul",{role:"tree",children:j}):j};R.displayName="Tree";exports.Tree=R;
