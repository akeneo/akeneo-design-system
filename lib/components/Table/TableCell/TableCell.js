"use strict";var C=Object.defineProperty,T=Object.defineProperties;var $=Object.getOwnPropertyDescriptors;var o=Object.getOwnPropertySymbols;var u=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable;var f=(e,t,r)=>t in e?C(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))u.call(t,r)&&f(e,r,t[r]);if(o)for(var r of o(t))c.call(t,r)&&f(e,r,t[r]);return e},x=(e,t)=>T(e,$(t));var v=(e,t)=>{var r={};for(var a in e)u.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&o)for(var a of o(e))t.indexOf(a)<0&&c.call(e,a)&&(r[a]=e[a]);return r};var h=require("react/jsx-runtime"),m=require("react"),n=require("styled-components"),d=require("../../../theme/theme.js"),y=require("../../Image/Image.js"),_=require("../TableContext.js");function b(e){return e&&e.__esModule?e:{default:e}}var i=b(m),g=b(n);const q=g.default.td`
  color: ${d.getColor("grey",140)};
  border-bottom: 1px solid ${d.getColor("grey",60)};
  padding: 15px 10px;
  max-width: 15vw;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  min-width: 0;

  &:has(code) {
    max-width: none;
  }

  ${e=>e.$wrapText&&n.css`
      max-width: 40ch;
      white-space: normal;
      overflow: visible;
      overflow-wrap: break-word;
      text-overflow: clip;
      vertical-align: top;

      /* long code tokens (paths/URLs) break instead of overflowing */
      code {
        overflow-wrap: break-word;
      }
    `}

  ${e=>e.$rowTitle&&n.css`
      color: ${d.getColor("brand",100)};
      font-style: italic;
    `}
`,k=g.default.div`
  display: flex;
  align-items: center;
  min-height: 24px;

  ${e=>e.$wrapText&&n.css`
      display: block;
    `}
`,R=i.default.forwardRef((j,a)=>{var s=j,{children:e,rowTitle:t=!1}=s,r=v(s,["children","rowTitle"]);const{wrapText:w}=m.useContext(_.TableContext);return h.jsx(q,x(p({ref:a,$rowTitle:t,$wrapText:w},r),{children:h.jsx(k,{$wrapText:w,children:i.default.Children.map(e,l=>!i.default.isValidElement(l)||l.type!==y.Image?l:i.default.cloneElement(l,{width:44,height:44}))})}))});exports.TableCell=R;
