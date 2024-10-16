"use strict";var h=Object.defineProperty,N=Object.defineProperties;var O=Object.getOwnPropertyDescriptors;var l=Object.getOwnPropertySymbols;var s=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable;var u=(e,r,t)=>r in e?h(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,c=(e,r)=>{for(var t in r||(r={}))s.call(r,t)&&u(e,t,r[t]);if(l)for(var t of l(r))m.call(r,t)&&u(e,t,r[t]);return e},v=(e,r)=>N(e,O(r));var y=(e,r)=>{var t={};for(var i in e)s.call(e,i)&&r.indexOf(i)<0&&(t[i]=e[i]);if(e!=null&&l)for(var i of l(e))r.indexOf(i)<0&&m.call(e,i)&&(t[i]=e[i]);return t};var S=require("react/jsx-runtime"),n=require("react"),H=require("styled-components"),d=require("./Overlay/Overlay.js"),w=require("./Item/Item.js"),q=require("./ItemCollection/ItemCollection.js"),C=require("./Header/Header.js"),D=require("./Header/Title.js"),f=require("../../theme/theme.js"),T=require("./Surtitle/Surtitle.js");function _(e){return e&&e.__esModule?e:{default:e}}var I=_(H);const g=I.default.div`
  background: ${f.getColor("white")};
  color: ${f.getColor("grey",100)};
  height: 34px;
  line-height: 34px;
  padding: 0 20px;
  outline-style: none;
  white-space: nowrap;
  text-transform: uppercase;
  margin-top: 10px;
`,R=I.default.div`
  position: relative;
  display: inline-flex;
`,o=t=>{var i=t,{children:e}=i,r=y(i,["children"]);const p=n.useRef(null),x=n.Children.map(e,a=>!n.isValidElement(a)||a.type!==d.Overlay?a:n.cloneElement(a,{parentRef:p}));return S.jsx(R,v(c({ref:p},r),{children:x}))};d.Overlay.displayName="Dropdown.Overlay";C.Header.displayName="Dropdown.Header";D.Title.displayName="Dropdown.Title";q.ItemCollection.displayName="Dropdown.ItemCollection";w.Item.displayName="Dropdown.Item";g.displayName="Dropdown.Section";o.Overlay=d.Overlay;o.Header=C.Header;o.Item=w.Item;o.Section=g;o.Title=D.Title;o.ItemCollection=q.ItemCollection;o.Surtitle=T.Surtitle;exports.Dropdown=o;
