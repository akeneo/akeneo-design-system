"use strict";var h=Object.defineProperty,C=Object.defineProperties;var j=Object.getOwnPropertyDescriptors;var d=Object.getOwnPropertySymbols;var u=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable;var a=(e,i,r)=>i in e?h(e,i,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[i]=r,g=(e,i)=>{for(var r in i||(i={}))u.call(i,r)&&a(e,r,i[r]);if(d)for(var r of d(i))c.call(i,r)&&a(e,r,i[r]);return e},x=(e,i)=>C(e,j(i));var f=(e,i)=>{var r={};for(var t in e)u.call(e,t)&&i.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&d)for(var t of d(e))i.indexOf(t)<0&&c.call(e,t)&&(r[t]=e[t]);return r};var n=require("react/jsx-runtime"),p=require("react"),F=require("styled-components"),o=require("../../theme/theme.js");function y(e){return e&&e.__esModule?e:{default:e}}var $=y(p),l=y(F);const b=l.default.div`
  color: ${o.getColor("brand",100)};
  font-size: 16px;
  margin: 0 15px 0 3px;
  display: flex;
  align-items: center;

  :only-child {
    margin: 0;
  }
`,w=({label:e,children:i})=>n.jsxs(n.Fragment,{children:[e&&`${e} `,n.jsx(b,{children:i})]}),_=l.default.div`
  height: 90px;
  display: inline-flex;
  box-sizing: border-box;
  background: ${o.getColor("white")};
  border: 1px ${o.getColor("grey",40)} solid;
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
  color: ${o.getColor("grey",120)};
  font-size: 16px;
`,m=G=>{var s=G,{icon:e,title:i,children:r}=s,t=f(s,["icon","title","children"]);const v=p.isValidElement(e)&&$.default.cloneElement(e,{size:30});return n.jsxs(_,x(g({},t),{children:[n.jsx(z,{children:v}),n.jsxs(K,{children:[n.jsx(q,{children:i}),n.jsx(R,{children:r})]})]}))},E=l.default.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 20px;
`;m.Figure=w;exports.KeyFigure=m;exports.KeyFigureGrid=E;
