"use strict";var x=Object.defineProperty,h=Object.defineProperties;var N=Object.getOwnPropertyDescriptors;var a=Object.getOwnPropertySymbols;var s=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable;var p=(e,r,t)=>r in e?x(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,v=(e,r)=>{for(var t in r||(r={}))s.call(r,t)&&p(e,t,r[t]);if(a)for(var t of a(r))m.call(r,t)&&p(e,t,r[t]);return e},c=(e,r)=>h(e,N(r));var y=(e,r)=>{var t={};for(var i in e)s.call(e,i)&&r.indexOf(i)<0&&(t[i]=e[i]);if(e!=null&&a)for(var i of a(e))r.indexOf(i)<0&&m.call(e,i)&&(t[i]=e[i]);return t};var O=require("react/jsx-runtime"),n=require("react"),H=require("styled-components"),d=require("./Overlay/Overlay.js"),w=require("./Item/Item.js"),q=require("./ItemCollection/ItemCollection.js"),C=require("./Header/Header.js"),D=require("./Header/Title.js"),f=require("../../theme/theme.js"),T=require("./Surtitle/Surtitle.js"),_=require("./Subtitle/Subtitle.js");function b(e){return e&&e.__esModule?e:{default:e}}var I=b(H);const S=I.default.div`
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
`,l=t=>{var i=t,{children:e}=i,r=y(i,["children"]);const u=n.useRef(null),g=n.Children.map(e,o=>!n.isValidElement(o)||o.type!==d.Overlay?o:n.cloneElement(o,{parentRef:u}));return O.jsx(R,c(v({ref:u},r),{children:g}))};d.Overlay.displayName="Dropdown.Overlay";C.Header.displayName="Dropdown.Header";D.Title.displayName="Dropdown.Title";q.ItemCollection.displayName="Dropdown.ItemCollection";w.Item.displayName="Dropdown.Item";S.displayName="Dropdown.Section";l.Overlay=d.Overlay;l.Header=C.Header;l.Item=w.Item;l.Section=S;l.Title=D.Title;l.ItemCollection=q.ItemCollection;l.Surtitle=T.Surtitle;l.Subtitle=_.Subtitle;exports.Dropdown=l;
