"use strict";var z=Object.defineProperty,O=Object.defineProperties;var B=Object.getOwnPropertyDescriptors;var g=Object.getOwnPropertySymbols;var E=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;var x=(e,o,t)=>o in e?z(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,I=(e,o)=>{for(var t in o||(o={}))E.call(o,t)&&x(e,t,o[t]);if(g)for(var t of g(o))b.call(o,t)&&x(e,t,o[t]);return e},$=(e,o)=>O(e,B(o));var k=(e,o)=>{var t={};for(var a in e)E.call(e,a)&&o.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&g)for(var a of g(e))o.indexOf(a)<0&&b.call(e,a)&&(t[a]=e[a]);return t};var i=require("react/jsx-runtime"),l=require("react"),c=require("styled-components"),n=require("../../../theme/theme.js"),D=require("../../Image/Image.js"),F=require("../../Checkbox/Checkbox.js"),G=require("../../Link/Link.js"),w=require("../../../shared/key.js"),L=require("../../../icons/LockIcon.js"),K=require("../Surtitle/Surtitle.js"),N=require("../Subtitle/Subtitle.js");function q(e){return e&&e.__esModule?e:{default:e}}var u=q(l),R=q(c);const y=R.default.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1;
`,_={default:34,big:44,bigger:64},S="[data-dropdown-item]",W=`${S}:not([aria-disabled="true"])`,H=R.default.div`
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

  /* :focus-visible rather than :focus: the ring shows for keyboard navigation, and not on the item the overlay
     focuses when it opens from a pointer click, where it read as a selection the user never made. */
  &:focus-visible {
    outline: none;
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

  ${({$isActive:e,$italicWhenActive:o})=>e&&c.css`
      color: ${n.getColor("brand",100)};
      font-style: ${o?"italic":"normal"};
      font-weight: 700;
    `}
`,J=u.default.forwardRef((P,A)=>{var C=P,{children:e,onKeyDown:o,disabled:t=!1,isActive:a=!1,italicWhenActive:j=!0,onClick:v,title:f}=C,T=k(C,["children","onKeyDown","disabled","isActive","italicWhenActive","onClick","title"]);let d=!1,p=!1;const s=l.useRef(null),m=l.useCallback(r=>{t||(s.current!==null&&s.current!==r.target?s.current.click():v!==void 0&&v(r))},[t]),M=l.useCallback(r=>{if(w.Key.Enter===r.key||w.Key.Space===r.key){r.preventDefault(),m(r);return}o&&o(r)},[o,m]),V=u.default.Children.map(e,r=>typeof r=="string"?i.jsxs(i.Fragment,{children:[i.jsx(y,{title:f!=null?f:r,children:r}),t&&i.jsx(L.LockIcon,{size:18})]}):l.isValidElement(r)&&r.type===D.Image?(d=!0,u.default.cloneElement(r,{width:34,height:34})):l.isValidElement(r)&&r.type===G.Link?i.jsxs(i.Fragment,{children:[i.jsx(y,{children:u.default.cloneElement(r,{ref:s,decorated:!1,disabled:t,tabIndex:-1})}),t&&i.jsx(L.LockIcon,{size:18})]}):l.isValidElement(r)&&r.type===F.Checkbox?u.default.cloneElement(r,{ref:s,readOnly:t,tabIndex:-1}):(l.isValidElement(r)&&(r.type===K.Surtitle||r.type===N.Subtitle)&&(p=!0),r));let h="default";return(d||p)&&(h="big"),d&&p&&(h="bigger"),i.jsx(H,$(I({$size:h,tabIndex:s.current===null&&!t?0:-1,onClick:m,onKeyDown:M,disabled:t,"aria-disabled":t,"data-dropdown-item":!0,$isActive:a,$italicWhenActive:j,title:f},T),{ref:A,children:V}))});exports.ITEM_SELECTOR=S;exports.Item=J;exports.ItemLabel=y;exports.NAVIGABLE_ITEM_SELECTOR=W;
