"use strict";var M=Object.defineProperty,R=Object.defineProperties;var A=Object.getOwnPropertyDescriptors;var m=Object.getOwnPropertySymbols;var D=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var q=(e,r,o)=>r in e?M(e,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[r]=o,$=(e,r)=>{for(var o in r||(r={}))D.call(r,o)&&q(e,o,r[o]);if(m)for(var o of m(r))S.call(r,o)&&q(e,o,r[o]);return e},B=(e,r)=>R(e,A(r));var I=(e,r)=>{var o={};for(var n in e)D.call(e,n)&&r.indexOf(n)<0&&(o[n]=e[n]);if(e!=null&&m)for(var n of m(e))r.indexOf(n)<0&&S.call(e,n)&&(o[n]=e[n]);return o};var i=require("react/jsx-runtime"),l=require("react"),z=require("styled-components"),s=require("../../theme/theme.js"),w=require("../Dropdown/Dropdown.js"),H=require("../IconButton/IconButton.js"),O=require("../../icons/MoreIcon.js"),F=require("../../hooks/useBooleanState.js"),k=require("../../shared/key.js");function P(e){return e&&e.__esModule?e:{default:e}}var y=P(z);const G=y.default.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${s.getColor("grey",80)};
  background: ${s.getColor("white")};

  ${({sticky:e})=>e!==void 0&&z.css`
      position: sticky;
      top: ${e}px;
      background-color: ${s.getColor("white")};
      z-index: 9;
    `}
`,J=y.default.div`
  display: flex;
  gap: 10px;
  flex-grow: 1;
  height: 44px;
  flex-wrap: wrap;
  overflow: hidden;
  margin-bottom: -1px;
`,L=y.default.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding-right: 40px;
  color: ${({isActive:e})=>e?s.getColor("brand",100):s.getColor("grey",100)};
  border-bottom: 3px solid ${({isActive:e})=>e?s.getColor("brand",100):"transparent"};
  font-size: ${s.getFontSize("big")};
  cursor: pointer;
  white-space: nowrap;
  height: 100%;
  box-sizing: border-box;

  &:hover {
    color: ${s.getColor("brand",100)};
    border-bottom: 3px solid ${s.getColor("brand",100)};
  }
`,N=y.default(w.Dropdown)`
  border-bottom: 3px solid ${({isActive:e})=>e?s.getColor("brand",100):"transparent"};
  margin-bottom: -1px;
  height: 44px;
  box-sizing: border-box;
  align-items: center;

  &:hover {
    color: ${s.getColor("brand",100)};
    border-bottom: 3px solid ${s.getColor("brand",100)};
  }
`,Q=j=>{var x=j,{children:e,onClick:r,isActive:o,parentRef:n,onVisibilityChange:d}=x,g=I(x,["children","onClick","isActive","parentRef","onVisibilityChange"]);const f=l.useRef(null),T=a=>{(a.key===k.Key.Space||a.key===k.Key.Enter)&&(r==null||r())};return l.useEffect(()=>{if(n===void 0)throw new Error("TabBar.Tab can not be used outside TabBar");const a=f.current,c=n.current;if(a===null)return;const C={root:c,rootMargin:"0px",threshold:0},v=new IntersectionObserver(t=>{const b=t[t.length-1];d==null||d(b.isIntersecting)},C);return v.observe(a),()=>{v.unobserve(a)}},[]),i.jsx(L,B($({onKeyDown:T,onClick:r,ref:f,tabIndex:0,role:"tab","aria-selected":o,isActive:o},g),{children:e}))},_=n=>{var d=n,{moreButtonTitle:e,children:r}=d,o=I(d,["moreButtonTitle","children"]);const g=l.useRef(null),[j,x]=l.useState([]),[f,T,a]=F.useBooleanState(),c=[],C=l.Children.map(r,(t,b)=>{if(!t)return;if(!l.isValidElement(t))throw new Error("TabBar only accepts TabBar.Tab as children");const p=t.key!==null?t.key:b,u=j.includes(String(p));return u&&c.push(t),l.cloneElement(t,{parentRef:g,tabIndex:u?-1:0,onVisibilityChange:h=>{x(E=>h?E.filter(K=>K!==String(p)):[String(p),...E])}})}),v=c.find(t=>t.props.isActive)!==void 0;return i.jsxs(G,B($({},o),{children:[i.jsx(J,{ref:g,role:"tablist",children:C}),0<c.length&&i.jsxs(N,{isActive:v,children:[i.jsx(H.IconButton,{level:"tertiary",ghost:"borderless",icon:i.jsx(O.MoreIcon,{}),title:e,onClick:T}),f&&i.jsx(w.Dropdown.Overlay,{verticalPosition:"down",onClose:a,children:i.jsx(w.Dropdown.ItemCollection,{children:c.map((t,b)=>{const p=()=>{var u,h;a(),(h=(u=t.props).onClick)==null||h.call(u)};return i.jsx(w.Dropdown.Item,{onClick:p,isActive:t.props.isActive,children:t.props.children},b)})})})]})]}))};_.Tab=Q;exports.TabBar=_;
