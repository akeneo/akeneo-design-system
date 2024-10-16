"use strict";var h=Object.defineProperty,C=Object.defineProperties;var j=Object.getOwnPropertyDescriptors;var a=Object.getOwnPropertySymbols;var u=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable;var s=(e,i,t)=>i in e?h(e,i,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[i]=t,g=(e,i)=>{for(var t in i||(i={}))u.call(i,t)&&s(e,t,i[t]);if(a)for(var t of a(i))c.call(i,t)&&s(e,t,i[t]);return e},x=(e,i)=>C(e,j(i));var f=(e,i)=>{var t={};for(var r in e)u.call(e,r)&&i.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&a)for(var r of a(e))i.indexOf(r)<0&&c.call(e,r)&&(t[r]=e[r]);return t};var n=require("react/jsx-runtime"),p=require("react"),F=require("styled-components"),o=require("../../theme/theme.js");function y(e){return e&&e.__esModule?e:{default:e}}var $=y(p),l=y(F);const w=l.default.div`
  color: ${o.getColor("brand",100)};
  font-size: 16px;
  margin: 0 15px 0 3px;
  display: flex;
  align-items: center;

  :only-child {
    margin: 0;
  }
`,_=({label:e,children:i})=>n.jsxs(n.Fragment,{children:[e&&`${e} `,n.jsx(w,{children:i})]}),b=l.default.div`
  height: 80px;
  display: inline-flex;
  box-sizing: border-box;
  background: ${o.getColor("white")};
`,z=l.default.div`
  min-width: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px ${o.getColor("grey",80)} solid;
  margin: 10px 0;

  svg {
    color: ${o.getColor("grey",100)};
  }
`,K=l.default.div`
  margin: 15px 20px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  min-width: 0;
`,q=l.default.div`
  color: ${o.getColor("grey",140)};
  font-size: ${o.getFontSize("big")};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`,R=l.default.div`
  display: flex;
  color: ${o.getColor("grey",100)};
  font-size: 16px;
`,m=G=>{var d=G,{icon:e,title:i,children:t}=d,r=f(d,["icon","title","children"]);const v=p.isValidElement(e)&&$.default.cloneElement(e,{size:30});return n.jsxs(b,x(g({},r),{children:[n.jsx(z,{children:v}),n.jsxs(K,{children:[n.jsx(q,{children:i}),n.jsx(R,{children:t})]})]}))},E=l.default.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 20px;
`;m.Figure=_;exports.KeyFigure=m;exports.KeyFigureGrid=E;
