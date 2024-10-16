"use strict";var T=Object.defineProperty,_=Object.defineProperties;var m=Object.getOwnPropertyDescriptors;var l=Object.getOwnPropertySymbols;var f=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable;var s=(e,r,t)=>r in e?T(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,c=(e,r)=>{for(var t in r||(r={}))f.call(r,t)&&s(e,t,r[t]);if(l)for(var t of l(r))p.call(r,t)&&s(e,t,r[t]);return e},b=(e,r)=>_(e,m(r));var g=(e,r)=>{var t={};for(var a in e)f.call(e,a)&&r.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&l)for(var a of l(e))r.indexOf(a)<0&&p.call(e,a)&&(t[a]=e[a]);return t};var x=require("react/jsx-runtime"),o=require("react"),I=require("styled-components"),d=require("../../../../theme/theme.js"),q=require("../TableInputContext.js");function h(e){return e&&e.__esModule?e:{default:e}}var u=h(o),H=h(I);const R=H.default.tr`
  height: 40px;
  background: ${d.getColor("grey",40)};
  & > th {
    border: 1px solid ${d.getColor("grey",60)};
    border-left-width: 0;

    &:first-child {
      border-left-width: 1px;
      position: sticky;
      left: 0;
      background: ${d.getColor("grey",40)};
      z-index: 1;
    }
  }
`,v=u.default.forwardRef((a,t)=>{var i=a,{children:e}=i,r=g(i,["children"]);const{isDragAndDroppable:y}=o.useContext(q.TableInputContext);return x.jsx("thead",b(c({ref:t},r),{children:x.jsx(R,{children:o.Children.map(e,(n,C)=>y&&C===0&&u.default.isValidElement(n)?u.default.cloneElement(n,{colSpan:2}):n)})}))});v.displayName="TableInput.Header";exports.TableInputHeader=v;
