"use strict";var D=Object.defineProperty,R=Object.defineProperties;var I=Object.getOwnPropertyDescriptors;var x=Object.getOwnPropertySymbols;var C=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var T=(e,r,t)=>r in e?D(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,h=(e,r)=>{for(var t in r||(r={}))C.call(r,t)&&T(e,t,r[t]);if(x)for(var t of x(r))w.call(r,t)&&T(e,t,r[t]);return e},y=(e,r)=>R(e,I(r));var v=(e,r)=>{var t={};for(var l in e)C.call(e,l)&&r.indexOf(l)<0&&(t[l]=e[l]);if(e!=null&&x)for(var l of x(e))r.indexOf(l)<0&&w.call(e,l)&&(t[l]=e[l]);return t};var u=require("react/jsx-runtime"),d=require("react"),i=require("styled-components"),a=require("../../theme/theme.js"),K=require("../../shared/key.js"),j=require("../Tooltip/Tooltip.js");function E(e){return e&&e.__esModule?e:{default:e}}var m=E(d),f=E(i);const V=f.default.div`
  display: grid;
  ${({size:e})=>e==="small"?i.css`
          gap: 20px;
          grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
        `:i.css`
          gap: 30px;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        `};
`,k=f.default.div`
  position: relative;
  margin: 1px;
  ${({size:e,inline:r})=>r?i.css`
      height: auto;
    `:e==="small"?i.css`
            height: 130px;
            text-align: center;
          `:i.css`
            height: 200px;
            text-align: center;
          `}
  transition: border-color 0.2s, color 0.2s, background 0.2s;
  ${({onClick:e,disabled:r})=>e!==void 0&&!r&&i.css`
      cursor: pointer;
    `}
  ${({selected:e})=>e?i.css`
          border: 2px solid ${a.getColor("blue",100)};
          color: ${a.getColor("blue",100)};
          margin: 0;
          background: ${a.getColor("blue",10)};
        `:i.css`
          border: 1px solid ${a.getColor("grey",80)};
        `}
  ${({disabled:e})=>!e&&i.css`
      &:hover {
        border: 2px solid ${a.getColor("blue",100)};
        color: ${a.getColor("blue",100)};
        margin: 0;
        background: ${a.getColor("blue",10)};
      }
    `}
  box-sizing: border-box;
  ${({disabled:e})=>e&&i.css`
      color: ${a.getColor("grey",120)};
      cursor: not-allowed;
      background-color: ${a.getColor("grey",20)};
    `}

  div[role=tooltip] {
    position: absolute;
    right: 5px;
  }
`,F=f.default.div`
  box-sizing: content-box;
  ${({size:e})=>e==="small"?i.css`
          padding: 25px 0 0 0;
          height: 54px;
        `:i.css`
          padding: 40px 0 0 0;
          height: 100px;
        `}
  ${({disabled:e})=>e&&i.css`
      color: ${a.getColor("grey",100)};
    `}}
`,L=f.default.div`
  margin: 10px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-height: 1.3;
`,M=f.default.div`
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`,_=z=>{var $=z,{icon:e,selected:r=!1,size:t="small",inline:l=!1,onClick:n,children:b,disabled:s=!1}=$,g=v($,["icon","selected","size","inline","onClick","children","disabled"]);const q=d.useCallback(o=>{o.currentTarget!==null&&o.key===K.Key.Enter&&(n==null||n(),o.preventDefault())},[n]),A=()=>{s||n==null||n()};let c=d.Children.map(b,o=>{if(d.isValidElement(o)&&o.type===j.Tooltip)return o});c=Array.isArray(c)?c.filter(o=>!!o):c;let p=d.Children.map(b,o=>{if(!(d.isValidElement(o)&&o.type===j.Tooltip))return o});return p=Array.isArray(p)?p.filter(o=>!!o):p,u.jsxs(k,y(h({selected:r,size:t,inline:l,onClick:A,onKeyDown:q,tabIndex:0,"aria-disabled":s,disabled:s},g),{children:[c&&u.jsx(u.Fragment,{children:c}),!l&&e&&u.jsx(F,{size:t,disabled:s,children:m.default.cloneElement(e,{size:t==="small"?54:100})}),l?u.jsx(M,{children:p}):u.jsx(L,{children:p})]}))},W=m.default.forwardRef((b,n)=>{var s=b,{size:e="small",inline:r=!1,children:t}=s,l=v(s,["size","inline","children"]);return u.jsx(V,y(h({size:e,ref:n},l),{children:m.default.Children.map(t,g=>{if(d.isValidElement(g)&&g.type===_)return m.default.cloneElement(g,{size:e,inline:r});throw new Error("A Tiles element can only have Tile children")})}))});exports.Tile=_;exports.Tiles=W;
