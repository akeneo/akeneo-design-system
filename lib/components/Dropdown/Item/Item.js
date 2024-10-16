"use strict";var D=Object.defineProperty,F=Object.defineProperties;var K=Object.getOwnPropertyDescriptors;var g=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;var k=(e,o,r)=>o in e?D(e,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[o]=r,$=(e,o)=>{for(var r in o||(o={}))v.call(o,r)&&k(e,r,o[r]);if(g)for(var r of g(o))b.call(o,r)&&k(e,r,o[r]);return e},I=(e,o)=>F(e,K(o));var w=(e,o)=>{var r={};for(var a in e)v.call(e,a)&&o.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&g)for(var a of g(e))o.indexOf(a)<0&&b.call(e,a)&&(r[a]=e[a]);return r};var n=require("react/jsx-runtime"),i=require("react"),c=require("styled-components"),l=require("../../../theme/theme.js"),M=require("../../Image/Image.js"),O=require("../../Checkbox/Checkbox.js"),A=require("../../Link/Link.js"),q=require("../../../shared/key.js"),j=require("../../../icons/LockIcon.js"),B=require("../Surtitle/Surtitle.js");function L(e){return e&&e.__esModule?e:{default:e}}var u=L(i),_=L(c);const y=_.default.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1;
`,E={default:34,big:44,bigger:64},G=_.default.div`
  background: ${l.getColor("white")};
  height: ${({size:e})=>E[e]}px;
  line-height: ${({size:e})=>E[e]}px;
  margin: 0 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  outline-style: none;
  cursor: pointer;
  white-space: nowrap;
  ${({size:e})=>e==="bigger"&&c.css`
      &:not(:last-child) {
        border-bottom: 1px solid ${l.getColor("grey",80)};
      }
    `}

  &:focus {
    box-shadow: inset 0 0 0 2px ${l.getColor("blue",40)};
  }

  ${({disabled:e})=>e?c.css`
          cursor: not-allowed;
          color: ${l.getColor("grey",100)};
        `:c.css`
          cursor: pointer;
          color: ${l.getColor("grey",120)};
          a {
            color: ${l.getColor("grey",120)};
          }

          &:hover a,
          &:hover {
            background: ${l.getColor("grey",20)};
            color: ${l.getColor("grey",140)};
          }
          &:active a,
          &:active {
            color: ${l.getColor("grey",140)};
          }
        `}

  ${({isActive:e})=>e&&c.css`
      color: ${l.getColor("brand",100)};
      font-style: italic;
      font-weight: 700;
    `}
`,H=u.default.forwardRef((J,z)=>{var h=J,{children:e,onKeyDown:o,disabled:r=!1,isActive:a=!1,onClick:C,title:f}=h,R=w(h,["children","onKeyDown","disabled","isActive","onClick","title"]);let p=!1,d=!1;const s=i.useRef(null),m=i.useCallback(t=>{r||(s.current!==null&&s.current!==t.target?s.current.click():C!==void 0&&C(t))},[r]),S=i.useCallback(t=>{if(q.Key.Enter===t.key||q.Key.Space===t.key){t.preventDefault(),m(t);return}o&&o(t)},[o,m]),V=u.default.Children.map(e,t=>typeof t=="string"?n.jsxs(n.Fragment,{children:[n.jsx(y,{title:f!=null?f:t,children:t}),r&&n.jsx(j.LockIcon,{size:18})]}):i.isValidElement(t)&&t.type===M.Image?(p=!0,u.default.cloneElement(t,{width:34,height:34})):i.isValidElement(t)&&t.type===A.Link?n.jsxs(n.Fragment,{children:[n.jsx(y,{children:u.default.cloneElement(t,{ref:s,decorated:!1,disabled:r,tabIndex:-1})}),r&&n.jsx(j.LockIcon,{size:18})]}):i.isValidElement(t)&&t.type===O.Checkbox?u.default.cloneElement(t,{ref:s,readOnly:r,tabIndex:-1}):(i.isValidElement(t)&&t.type===B.Surtitle&&(d=!0),t));let x="default";return(p||d)&&(x="big"),p&&d&&(x="bigger"),n.jsx(G,I($({size:x,tabIndex:s.current===null&&!r?0:-1,onClick:m,onKeyDown:S,disabled:r,"aria-disabled":r,isActive:a,title:f},R),{ref:z,children:V}))});exports.Item=H;exports.ItemLabel=y;
