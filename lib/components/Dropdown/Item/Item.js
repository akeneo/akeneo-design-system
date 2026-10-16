"use strict";var z=Object.defineProperty,A=Object.defineProperties;var O=Object.getOwnPropertyDescriptors;var g=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable;var I=(e,o,r)=>o in e?z(e,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[o]=r,v=(e,o)=>{for(var r in o||(o={}))h.call(o,r)&&I(e,r,o[r]);if(g)for(var r of g(o))$.call(o,r)&&I(e,r,o[r]);return e},b=(e,o)=>A(e,O(o));var k=(e,o)=>{var r={};for(var a in e)h.call(e,a)&&o.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&g)for(var a of g(e))o.indexOf(a)<0&&$.call(e,a)&&(r[a]=e[a]);return r};var l=require("react/jsx-runtime"),i=require("react"),c=require("styled-components"),n=require("../../../theme/theme.js"),B=require("../../Image/Image.js"),D=require("../../Checkbox/Checkbox.js"),F=require("../../Link/Link.js"),w=require("../../../shared/key.js"),L=require("../../../icons/LockIcon.js"),G=require("../Surtitle/Surtitle.js");function q(e){return e&&e.__esModule?e:{default:e}}var u=q(i),R=q(c);const x=R.default.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1;
`,_={default:34,big:44,bigger:64},j="[data-dropdown-item]",K=`${j}:not([aria-disabled="true"])`,N=R.default.div`
  background: ${n.getColor("white")};
  height: ${({$size:e})=>_[e]}px;
  line-height: ${({$size:e})=>_[e]}px;
  margin: 0 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  outline-style: none;
  cursor: pointer;
  white-space: nowrap;
  ${({$size:e})=>e==="bigger"&&c.css`
      &:not(:last-child) {
        border-bottom: 1px solid ${n.getColor("grey",80)};
      }
    `}

  &:focus {
    box-shadow: inset 0 0 0 2px ${n.getColor("blue",40)};
  }

  ${({disabled:e})=>e?c.css`
          cursor: not-allowed;
          color: ${n.getColor("grey",100)};
        `:c.css`
          cursor: pointer;
          color: ${n.getColor("grey",120)};
          a {
            color: ${n.getColor("grey",120)};
          }

          &:hover a,
          &:hover {
            background: ${n.getColor("grey",20)};
            color: ${n.getColor("grey",140)};
          }
          &:active a,
          &:active {
            color: ${n.getColor("grey",140)};
          }
        `}

  ${({$isActive:e})=>e&&c.css`
      color: ${n.getColor("brand",100)};
      font-style: italic;
      font-weight: 700;
    `}
`,H=u.default.forwardRef((J,T)=>{var E=J,{children:e,onKeyDown:o,disabled:r=!1,isActive:a=!1,onClick:y,title:f}=E,S=k(E,["children","onKeyDown","disabled","isActive","onClick","title"]);let d=!1,p=!1;const s=i.useRef(null),m=i.useCallback(t=>{r||(s.current!==null&&s.current!==t.target?s.current.click():y!==void 0&&y(t))},[r]),M=i.useCallback(t=>{if(w.Key.Enter===t.key||w.Key.Space===t.key){t.preventDefault(),m(t);return}o&&o(t)},[o,m]),V=u.default.Children.map(e,t=>typeof t=="string"?l.jsxs(l.Fragment,{children:[l.jsx(x,{title:f!=null?f:t,children:t}),r&&l.jsx(L.LockIcon,{size:18})]}):i.isValidElement(t)&&t.type===B.Image?(d=!0,u.default.cloneElement(t,{width:34,height:34})):i.isValidElement(t)&&t.type===F.Link?l.jsxs(l.Fragment,{children:[l.jsx(x,{children:u.default.cloneElement(t,{ref:s,decorated:!1,disabled:r,tabIndex:-1})}),r&&l.jsx(L.LockIcon,{size:18})]}):i.isValidElement(t)&&t.type===D.Checkbox?u.default.cloneElement(t,{ref:s,readOnly:r,tabIndex:-1}):(i.isValidElement(t)&&t.type===G.Surtitle&&(p=!0),t));let C="default";return(d||p)&&(C="big"),d&&p&&(C="bigger"),l.jsx(N,b(v({$size:C,tabIndex:s.current===null&&!r?0:-1,onClick:m,onKeyDown:M,disabled:r,"aria-disabled":r,"data-dropdown-item":!0,$isActive:a,title:f},S),{ref:T,children:V}))});exports.ITEM_SELECTOR=j;exports.Item=H;exports.ItemLabel=x;exports.NAVIGABLE_ITEM_SELECTOR=K;
