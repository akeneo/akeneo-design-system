"use strict";var F=Object.defineProperty,G=Object.defineProperties;var T=Object.getOwnPropertyDescriptors;var g=Object.getOwnPropertySymbols;var j=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable;var k=(e,t,o)=>t in e?F(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,x=(e,t)=>{for(var o in t||(t={}))j.call(t,o)&&k(e,o,t[o]);if(g)for(var o of g(t))z.call(t,o)&&k(e,o,t[o]);return e},y=(e,t)=>G(e,T(t));var q=(e,t)=>{var o={};for(var r in e)j.call(e,r)&&t.indexOf(r)<0&&(o[r]=e[r]);if(e!=null&&g)for(var r of g(e))t.indexOf(r)<0&&z.call(e,r)&&(o[r]=e[r]);return o};var s=require("react/jsx-runtime"),c=require("react"),b=require("styled-components"),V=require("../Checkbox/Checkbox.js"),M=require("../Link/Link.js"),N=require("../Image/Image.js"),a=require("../../theme/theme.js");function _(e){return e&&e.__esModule?e:{default:e}}var L=_(c),n=_(b);const E=n.default.div.attrs(()=>({role:"none"}))`
  ::before,
  ::after {
    content: ' ';
    position: absolute;
    top: 0;
    left: 0;
    width: 95%;
    height: 95%;
    box-sizing: border-box;
    border-style: solid;
    border-width: ${({isSelected:e})=>e?2:1}px;
    border-color: ${({isSelected:e})=>a.getColor(e?"blue":"grey",100)};
    background-color: ${a.getColor("white")};
  }

  ::before {
    transform: translate(6px, 6px);
  }

  ::after {
    transform: translate(3px, 3px);
  }
`,R=n.default.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(${({size:e})=>e==="big"?200:140}px, 1fr));
  gap: ${({size:e})=>e==="big"?40:20}px;

  ${({size:e})=>e==="big"&&b.css`
      ${E} {
        ::before {
          transform: translate(8px, 10px);
        }

        ::after {
          transform: translate(4px, 5px);
        }
      }
    `}
`;R.defaultProps={size:"normal"};const I=n.default.div`
  position: absolute;
  z-index: 2;
  top: 0;
  width: ${({stacked:e})=>e?"95%":"100%"};
  height: ${({stacked:e})=>e?"95%":"100%"};
  background-color: ${a.getColor("grey",140)};
  opacity: 0%;
  transition: opacity 0.3s ease-in;
`,H=n.default.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  line-height: 20px;
  font-size: ${a.getFontSize("default")};
  color: ${a.getColor("grey",120)};
  cursor: ${({actionable:e,disabled:t})=>t?"not-allowed":e?"pointer":"auto"};
  text-decoration: none;

  img {
    position: absolute;
    top: 0;
    width: ${({stacked:e})=>e?"95%":"100%"};
    height: ${({stacked:e})=>e?"95%":"100%"};
    box-sizing: border-box;
    ${({isLoading:e,isSelected:t})=>!e&&b.css`
        border-style: solid;
        border-width: ${t?2:1}px;
        border-color: ${a.getColor(t?"blue":"grey",100)};
      `}
  }
`,J=n.default.a`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  line-height: 20px;
  font-size: ${a.getFontSize("default")};
  color: ${a.getColor("grey",120)};
  cursor: ${({actionable:e,disabled:t})=>t?"not-allowed":e?"pointer":"auto"};
  text-decoration: none;

  img {
    position: absolute;
    top: 0;
    width: ${({stacked:e})=>e?"95%":"100%"};
    height: ${({stacked:e})=>e?"95%":"100%"};
    box-sizing: border-box;
    ${({isLoading:e,isSelected:t})=>!e&&b.css`
        border-style: solid;
        border-width: ${t?2:1}px;
        border-color: ${a.getColor(t?"blue":"grey",100)};
      `}
  }
`,K=n.default.div`
  position: relative;

  &::before {
    content: '';
    display: block;
    padding-bottom: 100%;
  }

  :hover ${I} {
    opacity: 50%;
  }
`,Q=n.default.div`
  display: flex;
  align-items: center;
  margin-top: 7px;

  > :first-child {
    margin-right: 6px;
  }
`,U=n.default.span`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`,h=n.default.div`
  position: absolute;
  z-index: 5;
  top: 10px;
  right: ${({stacked:e})=>e?"20px":"10px"};
`;h.displayName="BadgeContainer";h.defaultProps={stacked:!1};const W=c.forwardRef((Y,A)=>{var $=Y,{src:e,fit:t="cover",loading:o="eager",isSelected:r=!1,onSelect:d,disabled:p=!1,children:O,onClick:v,stacked:f=!1}=$,P=q($,["src","fit","loading","isSelected","onSelect","disabled","children","onClick","stacked"]);const m=[],w=[];let l={};L.default.Children.forEach(O,i=>{typeof i=="string"?w.push(i):c.isValidElement(i)&&M.Link===i.type?l=y(x({},i.props),{href:p?void 0:i.props.href}):c.isValidElement(i)&&h===i.type&&m.push(L.default.cloneElement(i,{key:i.key,stacked:f}))});const C="href"in l,u=typeof l.children=="string"?l.children:w[0],B=i=>{if(!p){if(v!==void 0){v(i);return}d!==void 0&&!C&&d(!r)}},D=C?J:H;return s.jsxs(D,y(x(x({ref:A,isSelected:r,actionable:C||v!==void 0,onClick:B,disabled:p,stacked:f,isLoading:e===null},l),P),{children:[s.jsxs(K,{children:[f&&s.jsx(E,{isSelected:r,"data-testid":"stack"}),s.jsx(I,{stacked:f}),s.jsx(N.Image,{fit:t,src:e,alt:u,loading:o})]}),s.jsxs(Q,{children:[d!==void 0&&s.jsx(V.Checkbox,{"aria-label":u,checked:r,readOnly:p,onChange:d}),s.jsx(U,{title:u,children:u})]}),m]}))}),X=Object.assign(W,{BadgeContainer:h});exports.Card=X;exports.CardGrid=R;
