"use strict";var O=Object.defineProperty,F=Object.defineProperties;var N=Object.getOwnPropertyDescriptors;var h=Object.getOwnPropertySymbols;var z=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable;var k=(e,r,o)=>r in e?O(e,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[r]=o,j=(e,r)=>{for(var o in r||(r={}))z.call(r,o)&&k(e,o,r[o]);if(h)for(var o of h(r))B.call(r,o)&&k(e,o,r[o]);return e},E=(e,r)=>F(e,N(r));var q=(e,r)=>{var o={};for(var t in e)z.call(e,t)&&r.indexOf(t)<0&&(o[t]=e[t]);if(e!=null&&h)for(var t of h(e))r.indexOf(t)<0&&B.call(e,t)&&(o[t]=e[t]);return o};var a=require("react/jsx-runtime"),d=require("react"),_=require("styled-components"),s=require("../../theme/theme.js"),w=require("../Dropdown/Dropdown.js"),P=require("../IconButton/IconButton.js"),G=require("../../icons/MoreIcon.js"),J=require("../../hooks/useBooleanState.js"),K=require("../../shared/key.js");function L(e){return e&&e.__esModule?e:{default:e}}var y=L(_);const Q=y.default.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${s.getColor("grey",80)};
  background: ${s.getColor("white")};

  ${({$sticky:e})=>e!==void 0&&_.css`
      position: sticky;
      top: ${e}px;
      background-color: ${s.getColor("white")};
      z-index: 9;
    `}
`,U=y.default.div`
  display: flex;
  gap: 10px;
  flex-grow: 1;
  height: 44px;
  flex-wrap: wrap;
  overflow: hidden;
  margin-bottom: -1px;
`,W=y.default.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding-right: 40px;
  color: ${({$isActive:e})=>e?s.getColor("brand",100):s.getColor("grey",100)};
  border-bottom: 3px solid ${({$isActive:e})=>e?s.getColor("brand",100):"transparent"};
  font-size: ${s.getFontSize("big")};
  cursor: pointer;
  white-space: nowrap;
  height: 100%;
  box-sizing: border-box;

  &:hover {
    color: ${s.getColor("brand",100)};
    border-bottom: 3px solid ${s.getColor("brand",100)};
  }
`,X=y.default(w.Dropdown)`
  border-bottom: 3px solid ${({$isActive:e})=>e?s.getColor("brand",100):"transparent"};
  margin-bottom: -1px;
  height: 44px;
  box-sizing: border-box;
  align-items: center;

  &:hover {
    color: ${s.getColor("brand",100)};
    border-bottom: 3px solid ${s.getColor("brand",100)};
  }
`,A=m=>{var p=m,{children:e,onClick:r,isActive:o,parentRef:t,onVisibilityChange:b}=p,D=q(p,["children","onClick","isActive","parentRef","onVisibilityChange"]);const g=d.useRef(null),T=i=>{(i.key===K.Key.Space||i.key===K.Key.Enter)&&(r==null||r())};return d.useEffect(()=>{if(t===void 0)throw new Error("TabBar.Tab can not be used outside TabBar");const i=g.current,$=t.current;if(i===null)return;const f={root:$,rootMargin:"0px",threshold:0},l=new IntersectionObserver(u=>{const C=u[u.length-1];b==null||b(C.isIntersecting)},f);return l.observe(i),()=>{l.unobserve(i)}},[]),a.jsx(W,E(j({onKeyDown:T,onClick:r,ref:g,tabIndex:0,role:"tab","aria-selected":o,$isActive:o},D),{children:e}))},M=D=>{var m=D,{moreButtonTitle:e,moreButtonBadge:r,children:o,sticky:t}=m,b=q(m,["moreButtonTitle","moreButtonBadge","children","sticky"]);const p=d.useRef(null),[g,T]=d.useState([]),[i,$,f]=J.useBooleanState(),l=[],u=[],C=d.Children.map(o,(n,I)=>{if(!n)return;if(!d.isValidElement(n))throw new Error("TabBar only accepts TabBar.Tab as children");const c=n.key!==null?n.key:I,x=g.includes(String(c));return x&&(l.push(n),u.push(String(c))),d.cloneElement(n,{parentRef:p,tabIndex:x?-1:0,onVisibilityChange:v=>{T(S=>v?S.filter(H=>H!==String(c)):[String(c),...S])}})}),R=l.find(n=>n.props.isActive)!==void 0;return a.jsxs(Q,E(j({},b),{$sticky:t,children:[a.jsx(U,{ref:p,role:"tablist",children:C}),0<l.length&&a.jsxs(X,{$isActive:R,children:[a.jsx(P.IconButton,{level:"tertiary",ghost:"borderless",icon:a.jsx(G.MoreIcon,{}),title:e,onClick:$}),r==null?void 0:r(u),i&&a.jsx(w.Dropdown.Overlay,{verticalPosition:"down",onClose:f,children:a.jsx(w.Dropdown.ItemCollection,{children:l.map((n,I)=>{const c=()=>{var x,v;f(),(v=(x=n.props).onClick)==null||v.call(x)};return a.jsx(w.Dropdown.Item,{onClick:c,isActive:n.props.isActive,children:n.props.children},I)})})})]})]}))};A.displayName="TabBar.Tab";M.Tab=A;exports.TabBar=M;
