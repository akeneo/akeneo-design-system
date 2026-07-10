"use strict";var R=Object.defineProperty,H=Object.defineProperties;var O=Object.getOwnPropertyDescriptors;var w=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var D=(e,r,o)=>r in e?R(e,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[r]=o,I=(e,r)=>{for(var o in r||(r={}))k.call(r,o)&&D(e,o,r[o]);if(w)for(var o of w(r))S.call(r,o)&&D(e,o,r[o]);return e},j=(e,r)=>H(e,O(r));var E=(e,r)=>{var o={};for(var t in e)k.call(e,t)&&r.indexOf(t)<0&&(o[t]=e[t]);if(e!=null&&w)for(var t of w(e))r.indexOf(t)<0&&S.call(e,t)&&(o[t]=e[t]);return o};var s=require("react/jsx-runtime"),l=require("react"),_=require("styled-components"),a=require("../../theme/theme.js"),y=require("../Dropdown/Dropdown.js"),F=require("../IconButton/IconButton.js"),N=require("../../icons/MoreIcon.js"),P=require("../../hooks/useBooleanState.js"),z=require("../../shared/key.js");function G(e){return e&&e.__esModule?e:{default:e}}var T=G(_);const J=T.default.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${a.getColor("grey",80)};
  background: ${a.getColor("white")};

  ${({$sticky:e})=>e!==void 0&&_.css`
      position: sticky;
      top: ${e}px;
      background-color: ${a.getColor("white")};
      z-index: 9;
    `}
`,L=T.default.div`
  display: flex;
  gap: 10px;
  flex-grow: 1;
  height: 44px;
  flex-wrap: wrap;
  overflow: hidden;
  margin-bottom: -1px;
`,Q=T.default.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding-right: 40px;
  color: ${({$isActive:e})=>e?a.getColor("brand",100):a.getColor("grey",100)};
  border-bottom: 3px solid ${({$isActive:e})=>e?a.getColor("brand",100):"transparent"};
  font-size: ${a.getFontSize("big")};
  cursor: pointer;
  white-space: nowrap;
  height: 100%;
  box-sizing: border-box;

  &:hover {
    color: ${a.getColor("brand",100)};
    border-bottom: 3px solid ${a.getColor("brand",100)};
  }
`,U=T.default(y.Dropdown)`
  border-bottom: 3px solid ${({$isActive:e})=>e?a.getColor("brand",100):"transparent"};
  margin-bottom: -1px;
  height: 44px;
  box-sizing: border-box;
  align-items: center;

  &:hover {
    color: ${a.getColor("brand",100)};
    border-bottom: 3px solid ${a.getColor("brand",100)};
  }
`,A=$=>{var g=$,{children:e,onClick:r,isActive:o,parentRef:t,onVisibilityChange:p}=g,u=E(g,["children","onClick","isActive","parentRef","onVisibilityChange"]);const x=l.useRef(null),C=i=>{(i.key===z.Key.Space||i.key===z.Key.Enter)&&(r==null||r())};return l.useEffect(()=>{if(t===void 0)throw new Error("TabBar.Tab can not be used outside TabBar");const i=x.current,f=t.current;if(i===null)return;const d={root:f,rootMargin:"0px",threshold:0},v=new IntersectionObserver(h=>{const n=h[h.length-1];p==null||p(n.isIntersecting)},d);return v.observe(i),()=>{v.unobserve(i)}},[]),s.jsx(Q,j(I({onKeyDown:C,onClick:r,ref:x,tabIndex:0,role:"tab","aria-selected":o,$isActive:o},u),{children:e}))},K=p=>{var u=p,{moreButtonTitle:e,children:r,sticky:o}=u,t=E(u,["moreButtonTitle","children","sticky"]);const $=l.useRef(null),[g,x]=l.useState([]),[C,i,f]=P.useBooleanState(),d=[],v=l.Children.map(r,(n,B)=>{if(!n)return;if(!l.isValidElement(n))throw new Error("TabBar only accepts TabBar.Tab as children");const c=n.key!==null?n.key:B,b=g.includes(String(c));return b&&d.push(n),l.cloneElement(n,{parentRef:$,tabIndex:b?-1:0,onVisibilityChange:m=>{x(q=>m?q.filter(M=>M!==String(c)):[String(c),...q])}})}),h=d.find(n=>n.props.isActive)!==void 0;return s.jsxs(J,j(I({},t),{$sticky:o,children:[s.jsx(L,{ref:$,role:"tablist",children:v}),0<d.length&&s.jsxs(U,{$isActive:h,children:[s.jsx(F.IconButton,{level:"tertiary",ghost:"borderless",icon:s.jsx(N.MoreIcon,{}),title:e,onClick:i}),C&&s.jsx(y.Dropdown.Overlay,{verticalPosition:"down",onClose:f,children:s.jsx(y.Dropdown.ItemCollection,{children:d.map((n,B)=>{const c=()=>{var b,m;f(),(m=(b=n.props).onClick)==null||m.call(b)};return s.jsx(y.Dropdown.Item,{onClick:c,isActive:n.props.isActive,children:n.props.children},B)})})})]})]}))};A.displayName="TabBar.Tab";K.Tab=A;exports.TabBar=K;
