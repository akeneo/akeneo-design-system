"use strict";var I=Object.defineProperty,S=Object.defineProperties;var R=Object.getOwnPropertyDescriptors;var l=Object.getOwnPropertySymbols;var b=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var x=(e,t,o)=>t in e?I(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,y=(e,t)=>{for(var o in t||(t={}))b.call(t,o)&&x(e,o,t[o]);if(l)for(var o of l(t))v.call(t,o)&&x(e,o,t[o]);return e},h=(e,t)=>S(e,R(t));var C=(e,t)=>{var o={};for(var n in e)b.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(e!=null&&l)for(var n of l(e))t.indexOf(n)<0&&v.call(e,n)&&(o[n]=e[n]);return o};var a=require("react/jsx-runtime"),m=require("react"),k=require("styled-components"),T=require("../../../icons/PanelCloseIcon.js"),z=require("../../../icons/PanelOpenIcon.js"),d=require("../../../theme/theme.js");function P(e){return e&&e.__esModule?e:{default:e}}var i=P(m),s=P(k);const B=s.default.div`
  background-color: ${d.getColor("blue",20)};
  border-right: 0px solid ${d.getColor("grey",80)};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 100%;
  transition: width 0.3s linear;
  width: ${({isOpen:e})=>e?"280px":"40px"};
`,D=s.default.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow-x: hidden;
  overflow-y: auto;
  opacity: ${({isOpen:e})=>e?"1":"0"};
  transition: ${({isOpen:e})=>e?"opacity 300ms linear 300ms":"none"};
  padding: ${({noPadding:e})=>e?"0":"30px"};
`,L=s.default.button`
  align-items: center;
  background: none;
  border: none;
  border-top: 1px solid ${d.getColor("grey",80)};
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  flex: 0 0 auto;
  height: 54px;
  padding: 0;
  padding-left: 12.5px;

  svg {
    color: ${d.getColor("grey",100)};
    width: 15px;
  }
`,u=s.default.div`
  padding: 10px 5px;
`,c=i.default.forwardRef((M,q)=>{var f=M,{children:e,isOpen:t=!0,open:o,close:n,closeTitle:$="",openTitle:w="",noPadding:_=!1}=f,j=C(f,["children","isOpen","open","close","closeTitle","openTitle","noPadding"]);const p=[],g=[];i.default.Children.forEach(e,r=>{i.default.isValidElement(r)&&r.type===u?p.push(r):g.push(r)});const[N,E]=i.default.useState(t);return m.useLayoutEffect(()=>{E(t)},[t]),a.jsxs(B,h(y({ref:q,isOpen:t},j),{children:[!t&&p,a.jsx(D,{isOpen:N,noPadding:_,children:t&&g}),a.jsx(L,{onClick:()=>t?n():o(),title:t?$:w,"data-testid":"open-subnavigation-button",children:t?a.jsx(T.PanelCloseIcon,{}):a.jsx(z.PanelOpenIcon,{})})]}))});c.displayName="SubNavigationPanel";u.displayName="SubNavigationPanel.Collapsed";c.Collapsed=u;exports.SubNavigationPanel=c;
