"use strict";var I=Object.defineProperty,y=Object.defineProperties;var S=Object.getOwnPropertyDescriptors;var l=Object.getOwnPropertySymbols;var m=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var w=(e,t,o)=>t in e?I(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,a=(e,t)=>{for(var o in t||(t={}))m.call(t,o)&&w(e,o,t[o]);if(l)for(var o of l(t))x.call(t,o)&&w(e,o,t[o]);return e},u=(e,t)=>y(e,S(t));var v=(e,t)=>{var o={};for(var r in e)m.call(e,r)&&t.indexOf(r)<0&&(o[r]=e[r]);if(e!=null&&l)for(var r of l(e))t.indexOf(r)<0&&x.call(e,r)&&(o[r]=e[r]);return o};var n=require("react/jsx-runtime"),d=require("react"),_=require("../../icons/ArrowDownIcon.js"),C=require("../Button/Button.js"),s=require("../Dropdown/Dropdown.js"),g=require("../../hooks/useBooleanState.js"),k=require("styled-components");function R(e){return e&&e.__esModule?e:{default:e}}var p=R(k);const B=r=>{var c=r,{label:e,children:t}=c,o=v(c,["label","children"]);const[D,b,f]=g.useBooleanState(),h=d.Children.map(t,i=>d.isValidElement(i)?d.cloneElement(i,{onClick:(...q)=>{i.props.onClick&&i.props.onClick(...q),f()}}):i);return n.jsxs(A,{children:[n.jsx(E,u(a({},o),{children:e})),n.jsxs(s.Dropdown,{children:[n.jsx(O,u(a({},o),{type:"button",onClick:b,children:n.jsx(_.ArrowDownIcon,{})})),D&&n.jsx(s.Dropdown.Overlay,{verticalPosition:"down",onClose:f,children:n.jsx(s.Dropdown.ItemCollection,{children:h})})]})]})},A=p.default.div`
  display: inline-flex;
`,E=p.default(C.Button)`
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-right: 1px white solid;
`,O=p.default(C.Button)`
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  padding-left: 10px;
`,j=d.forwardRef(({children:e,onClick:t},o)=>n.jsx(s.Dropdown.Item,{onClick:t,ref:o,children:e}));j.displayName="SplitButton.Item";B.Item=j;exports.SplitButton=B;
