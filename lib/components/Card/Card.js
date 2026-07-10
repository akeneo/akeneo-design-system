"use strict";var T=Object.defineProperty,V=Object.defineProperties;var M=Object.getOwnPropertyDescriptors;var g=Object.getOwnPropertySymbols;var j=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable;var k=(e,t,o)=>t in e?T(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,x=(e,t)=>{for(var o in t||(t={}))j.call(t,o)&&k(e,o,t[o]);if(g)for(var o of g(t))z.call(t,o)&&k(e,o,t[o]);return e},m=(e,t)=>V(e,M(t));var L=(e,t)=>{var o={};for(var r in e)j.call(e,r)&&t.indexOf(r)<0&&(o[r]=e[r]);if(e!=null&&g)for(var r of g(e))t.indexOf(r)<0&&z.call(e,r)&&(o[r]=e[r]);return o};var n=require("react/jsx-runtime"),c=require("react"),_=require("styled-components"),N=require("../Checkbox/Checkbox.js"),H=require("../Link/Link.js"),J=require("../Image/Image.js"),s=require("../../theme/theme.js");function I(e){return e&&e.__esModule?e:{default:e}}var q=I(c),a=I(_);const E=a.default.div.attrs(()=>({role:"none"}))`
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
    border-color: ${({isSelected:e})=>s.getColor(e?"blue":"grey",100)};
    background-color: ${s.getColor("white")};
  }

  ::before {
    transform: translate(6px, 6px);
  }

  ::after {
    transform: translate(3px, 3px);
  }
`,R=a.default.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(${({size:e})=>e==="big"?200:140}px, 1fr));
  gap: ${({size:e})=>e==="big"?40:20}px;

  ${({size:e})=>e==="big"&&_.css`
      ${E} {
        ::before {
          transform: translate(8px, 10px);
        }

        ::after {
          transform: translate(4px, 5px);
        }
      }
    `}
`;R.defaultProps={size:"normal"};const B=a.default.div`
  position: absolute;
  z-index: 2;
  top: 0;
  width: ${({$stacked:e})=>e?"95%":"100%"};
  height: ${({$stacked:e})=>e?"95%":"100%"};
  background-color: ${s.getColor("grey",140)};
  opacity: 0%;
  transition: opacity 0.3s ease-in;
`,K=a.default.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  line-height: 20px;
  font-size: ${s.getFontSize("default")};
  color: ${s.getColor("grey",120)};
  cursor: ${({actionable:e,disabled:t})=>t?"not-allowed":e?"pointer":"auto"};
  text-decoration: none;

  img {
    position: absolute;
    top: 0;
    width: ${({stacked:e})=>e?"95%":"100%"};
    height: ${({stacked:e})=>e?"95%":"100%"};
    opacity: ${({dimmed:e})=>e?.35:1};
  }
`,Q=a.default.a`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  line-height: 20px;
  font-size: ${s.getFontSize("default")};
  color: ${s.getColor("grey",120)};
  cursor: ${({actionable:e,disabled:t})=>t?"not-allowed":e?"pointer":"auto"};
  text-decoration: none;

  img {
    position: absolute;
    top: 0;
    width: ${({stacked:e})=>e?"95%":"100%"};
    height: ${({stacked:e})=>e?"95%":"100%"};
    opacity: ${({dimmed:e})=>e?.35:1};
  }
`,U=a.default.div`
  position: relative;

  &::before {
    content: '';
    display: block;
    padding-bottom: 100%;
  }

  :hover ${B} {
    opacity: 50%;
  }
`,W=a.default.div`
  position: absolute;
  top: 0;
  width: ${({stacked:e})=>e?"95%":"100%"};
  height: ${({stacked:e})=>e?"95%":"100%"};
  box-sizing: border-box;
  pointer-events: none;
  z-index: 1;
  border-style: solid;
  border-width: ${({isSelected:e})=>e?2:1}px;
  border-color: ${({isSelected:e})=>s.getColor(e?"blue":"grey",100)};
`,X=a.default.div`
  display: flex;
  align-items: center;
  margin-top: 7px;

  > :first-child {
    margin-right: 6px;
  }
`,Y=a.default.span`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`,h=a.default.div`
  position: absolute;
  z-index: 5;
  top: 10px;
  right: ${({stacked:e})=>e?"20px":"10px"};
  display: flex;
  gap: 5px;
`;h.displayName="BadgeContainer";h.defaultProps={stacked:!1};const Z=c.forwardRef((ee,D)=>{var y=ee,{src:e,fit:t="cover",loading:o="eager",isSelected:r=!1,onSelect:p,disabled:f=!1,dimmed:O=!1,children:P,onClick:b,stacked:l=!1}=y,A=L(y,["src","fit","loading","isSelected","onSelect","disabled","dimmed","children","onClick","stacked"]);const $=[],C=[];let d={};const w=e===null;q.default.Children.forEach(P,i=>{typeof i=="string"?C.push(i):c.isValidElement(i)&&H.Link===i.type?d=m(x({},i.props),{href:f?void 0:i.props.href}):c.isValidElement(i)&&h===i.type&&$.push(q.default.cloneElement(i,{key:i.key,stacked:l}))});const v="href"in d,u=typeof d.children=="string"?d.children:C[0],F=i=>{if(!f){if(b!==void 0){b(i);return}p!==void 0&&!v&&p(!r)}},G=v?Q:K;return n.jsxs(G,m(x(x({ref:D,isSelected:r,actionable:v||b!==void 0,onClick:F,disabled:f,dimmed:O,stacked:l,isLoading:w},d),A),{children:[n.jsxs(U,{children:[l&&n.jsx(E,{isSelected:r,"data-testid":"stack"}),n.jsx(B,{$stacked:l}),n.jsx(J.Image,{fit:t,src:e,alt:u,loading:o}),!w&&n.jsx(W,{isSelected:r,stacked:l})]}),n.jsxs(X,{children:[p!==void 0&&n.jsx(N.Checkbox,{"aria-label":u,checked:r,readOnly:f,onChange:p}),n.jsx(Y,{title:u,children:u})]}),$]}))}),S=Object.assign(Z,{BadgeContainer:h});exports.Card=S;exports.CardGrid=R;
