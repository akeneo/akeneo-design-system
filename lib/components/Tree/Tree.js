"use strict";var Z=Object.defineProperty,ee=Object.defineProperties;var re=Object.getOwnPropertyDescriptors;var m=Object.getOwnPropertySymbols;var E=Object.prototype.hasOwnProperty,H=Object.prototype.propertyIsEnumerable;var A=(e,l,r)=>l in e?Z(e,l,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[l]=r,N=(e,l)=>{for(var r in l||(l={}))E.call(l,r)&&A(e,r,l[r]);if(m)for(var r of m(l))H.call(l,r)&&A(e,r,l[r]);return e},P=(e,l)=>ee(e,re(l));var B=(e,l)=>{var r={};for(var n in e)E.call(e,n)&&l.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&m)for(var n of m(e))l.indexOf(n)<0&&H.call(e,n)&&(r[n]=e[n]);return r};var o=require("react/jsx-runtime"),T=require("react"),x=require("styled-components"),i=require("../../theme/theme.js"),oe=require("../../theme/common.js"),le=require("../Checkbox/Checkbox.js"),te=require("../../icons/ArrowRightIcon.js"),ne=require("../../icons/FolderIcon.js"),ie=require("../../icons/FolderPlainIcon.js"),se=require("../../icons/FoldersIcon.js"),ce=require("../../icons/FoldersPlainIcon.js"),ae=require("../../icons/LoaderIcon.js"),j=require("../../shared/Highlight.js");function O(e){return e&&e.__esModule?e:{default:e}}var s=O(T),t=O(x);const g=x.css`
  vertical-align: middle;
  transition: color 0.2s ease;
  margin-right: 5px;
  flex-shrink: 0;
`,de=t.default.li`
  display: block;
  color: ${i.getColor("grey140")};
`,ue=t.default.ul`
  margin: 0 0 0 20px;
  padding: 0;
`,fe=t.default(te.ArrowRightIcon)`
  transform: rotate(${({$isFolderOpen:e})=>e?"90":"0"}deg);
  transition: transform 0.2s ease-out;
  vertical-align: middle;
  color: ${i.getColor("grey100")};
  cursor: pointer;
`,he=t.default(ne.FolderIcon)`
  ${g}
`,xe=t.default(ce.FoldersPlainIcon)`
  ${g}
  color: ${i.getColor("blue100")};
`,ge=t.default(ie.FolderPlainIcon)`
  ${g}
  color: ${i.getColor("blue100")};
`,pe=t.default(se.FoldersIcon)`
  ${g}
`,me=t.default(ae.LoaderIcon)`
  ${g}
  color: ${i.getColor("grey100")};
`,L=t.default.span`
  color: ${i.getColor("grey",100)};
  margin-left: 5px;
`,je=t.default.span`
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1;
  min-width: 0;
`,Ce=t.default.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
  line-height: normal;
  overflow: hidden;
`,we=t.default.span`
  color: ${i.getColor("grey",100)};
  font-size: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
`,be=t.default.span`
  overflow: hidden;
  text-overflow: ellipsis;
`,$e=t.default.div`
  height: 40px;
  line-height: 40px;
  overflow: hidden;
  width: 100%;
  display: inline-flex;
  align-items: center;
  padding-right: 20px;
  ${({$selected:e})=>e&&x.css`
      color: ${i.getColor("blue100")};
    `}
`,ve=t.default(le.Checkbox)`
  display: inline-block;
  vertical-align: middle;
  margin-right: 8px;
`,ye=t.default.button`
  height: 30px;
  width: 30px;
  min-width: 30px;
  vertical-align: middle;
  margin-right: 2px;
  padding: 0;
  border: none;
  background: none;
  &:not(:disabled) {
    cursor: pointer;
  }
`,Ie=t.default.button`
  ${oe.CommonStyle}
  display: inline-flex;
  align-items: center;
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
  ${({$selected:e})=>e&&x.css`
      color: ${i.getColor("blue100")};
    `}
  &:hover {
    ${({$selected:e})=>!e&&x.css`
        color: ${i.getColor("grey140")};
      `}
  }
`,Te=({isLoading:e,isLeaf:l,selected:r})=>{if(e)return o.jsx(me,{size:24});const n=r===!0||r==="mixed";return l?n?o.jsx(ge,{size:24}):o.jsx(he,{size:24}):n?o.jsx(xe,{size:24}):o.jsx(pe,{size:24})},ke=s.default.forwardRef(function(Fe,Q){var F=Fe,{label:l,value:r,children:n,isLeaf:a=!1,selected:d=!1,isLoading:V=!1,selectable:D=!1,readOnly:J=!1,onChange:C,onOpen:w,onClose:b,onClick:$,defaultOpen:v=!1,_isRoot:M=!0,valueLabel:u,highlight:p="",additional:k,preLabel:W,hideIcons:G=!1,code:q}=F,K=B(F,["label","value","children","isLeaf","selected","isLoading","selectable","readOnly","onChange","onOpen","onClose","onClick","defaultOpen","_isRoot","valueLabel","highlight","additional","preLabel","hideIcons","code"]);const f=[];s.default.Children.forEach(n,c=>{if(c!==null){if(!T.isValidElement(c))throw new Error("Tree component only accepts Tree as children");f.push(c)}});const[h,y]=s.default.useState(f.length>0);T.useEffect(()=>{f.length>0&&v&&y(!0)},[f.length,v]);const S=s.default.useCallback(()=>{y(!0),w&&w(r)},[w,r]),_=s.default.useCallback(()=>{y(!1),b&&b(r)},[b,r]),I=s.default.useCallback(()=>{a||(h?_():S())},[h,_,S,a]),U=s.default.useCallback(()=>{$?$(r):I()},[I,$,r]),X=s.default.useCallback((c,Y)=>{C&&C(r,c,Y)},[C,r]),z=u?`${l} ${u}`:l,R=o.jsxs(de,P(N({ref:Q,role:"treeitem","aria-expanded":h},K),{children:[o.jsxs($e,{$selected:d,children:[o.jsx(ye,{disabled:a,role:"button",onClick:I,children:!a&&o.jsx(fe,{$isFolderOpen:h,size:14})}),D&&o.jsx(ve,{checked:d,onChange:X,readOnly:J,"aria-label":z}),o.jsxs(Ie,{onClick:U,$selected:d,title:z,"aria-selected":!!d,children:[!G&&o.jsx(Te,{isLoading:V,isLeaf:a,selected:d}),W,q?o.jsxs(o.Fragment,{children:[o.jsxs(Ce,{children:[o.jsx(we,{children:q}),o.jsx(be,{children:o.jsx(j.Highlight,{highlight:p,children:l})})]}),k,u&&o.jsx(L,{children:o.jsx(j.Highlight,{highlight:p,children:u})})]}):o.jsxs(je,{"aria-selected":!!d,children:[o.jsx(j.Highlight,{highlight:p,children:l}),k,u&&o.jsx(L,{children:o.jsx(j.Highlight,{highlight:p,children:u})})]})]})]}),h&&!a&&f.length>0&&o.jsx(ue,{role:"group",children:f.map(c=>s.default.cloneElement(c,{key:JSON.stringify(c.props.value),defaultOpen:v,_isRoot:!1}))})]}));return M?o.jsx("ul",{role:"tree",children:R}):R}),qe=Object.assign(ke,{displayName:"Tree"});exports.Tree=qe;
