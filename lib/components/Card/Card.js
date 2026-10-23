"use strict";var M=Object.defineProperty,H=Object.defineProperties;var J=Object.getOwnPropertyDescriptors;var g=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable;var z=(e,t,o)=>t in e?M(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,h=(e,t)=>{for(var o in t||(t={}))L.call(t,o)&&z(e,o,t[o]);if(g)for(var o of g(t))q.call(t,o)&&z(e,o,t[o]);return e},C=(e,t)=>H(e,J(t));var _=(e,t)=>{var o={};for(var r in e)L.call(e,r)&&t.indexOf(r)<0&&(o[r]=e[r]);if(e!=null&&g)for(var r of g(e))t.indexOf(r)<0&&q.call(e,r)&&(o[r]=e[r]);return o};var a=require("react/jsx-runtime"),f=require("react"),R=require("styled-components"),K=require("../Checkbox/Checkbox.js"),Q=require("../Link/Link.js"),U=require("../Image/Image.js"),l=require("../../theme/theme.js");function B(e){return e&&e.__esModule?e:{default:e}}var E=B(f),n=B(R);const O=n.default.div.attrs(()=>({role:"none"}))`
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
    border-color: ${({isSelected:e})=>l.getColor(e?"blue":"grey",100)};
    background-color: ${l.getColor("white")};
  }

  ::before {
    transform: translate(6px, 6px);
  }

  ::after {
    transform: translate(3px, 3px);
  }
`,P=n.default.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(${({size:e})=>e==="big"?200:140}px, 1fr));
  gap: ${({size:e})=>e==="big"?40:20}px;

  ${({size:e})=>e==="big"&&R.css`
      ${O} {
        ::before {
          transform: translate(8px, 10px);
        }

        ::after {
          transform: translate(4px, 5px);
        }
      }
    `}
`;P.defaultProps={size:"normal"};const T=n.default.div`
  position: absolute;
  z-index: 2;
  top: 0;
  width: ${({$stacked:e})=>e?"95%":"100%"};
  height: ${({$stacked:e})=>e?"95%":"100%"};
  background-color: ${l.getColor("grey",140)};
  opacity: 0%;
  transition: opacity 0.3s ease-in;
`,W=n.default.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  line-height: 20px;
  font-size: ${l.getFontSize("default")};
  color: ${l.getColor("grey",120)};
  cursor: ${({actionable:e,disabled:t})=>t?"not-allowed":e?"pointer":"auto"};
  text-decoration: none;

  img {
    position: absolute;
    top: 0;
    width: ${({stacked:e})=>e?"95%":"100%"};
    height: ${({stacked:e})=>e?"95%":"100%"};
    opacity: ${({dimmed:e})=>e?.35:1};
  }
`,X=n.default.a`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  line-height: 20px;
  font-size: ${l.getFontSize("default")};
  color: ${l.getColor("grey",120)};
  cursor: ${({actionable:e,disabled:t})=>t?"not-allowed":e?"pointer":"auto"};
  text-decoration: none;

  img {
    position: absolute;
    top: 0;
    width: ${({stacked:e})=>e?"95%":"100%"};
    height: ${({stacked:e})=>e?"95%":"100%"};
    opacity: ${({dimmed:e})=>e?.35:1};
  }
`,Y=n.default.div`
  position: relative;

  &::before {
    content: '';
    display: block;
    padding-bottom: 100%;
  }

  :hover ${T} {
    opacity: 50%;
  }
`,Z=n.default.div`
  position: absolute;
  top: 0;
  width: ${({stacked:e})=>e?"95%":"100%"};
  height: ${({stacked:e})=>e?"95%":"100%"};
  box-sizing: border-box;
  pointer-events: none;
  z-index: 1;
  border-style: solid;
  border-width: ${({isSelected:e})=>e?2:1}px;
  border-color: ${({isSelected:e})=>l.getColor(e?"blue":"grey",100)};
`,S=n.default.div`
  display: flex;
  align-items: center;
  margin-top: 7px;

  > :first-child {
    margin-right: 6px;
  }
`,I=n.default.span`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`,ee=n.default.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
`,b=n.default.span`
  color: ${l.getColor("grey",100)};
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;b.displayName="Card.Subtitle";const v=n.default.div`
  position: absolute;
  z-index: 5;
  top: 10px;
  right: ${({stacked:e})=>e?"20px":"10px"};
  display: flex;
  gap: 5px;
`;v.displayName="BadgeContainer";v.defaultProps={stacked:!1};const te=f.forwardRef((re,F)=>{var $=re,{src:e,fit:t="cover",loading:o="eager",isSelected:r=!1,onSelect:u,disabled:x=!1,dimmed:V=!1,children:A,onClick:m,stacked:d=!1}=$,D=_($,["src","fit","loading","isSelected","onSelect","disabled","dimmed","children","onClick","stacked"]);const w=[],j=[];let c,p={};const k=e===null;E.default.Children.forEach(A,i=>{typeof i=="string"?j.push(i):f.isValidElement(i)&&b===i.type?c=i.props.children:f.isValidElement(i)&&Q.Link===i.type?p=C(h({},i.props),{href:x?void 0:i.props.href}):f.isValidElement(i)&&v===i.type&&w.push(E.default.cloneElement(i,{key:i.key,stacked:d}))});const y="href"in p,s=typeof p.children=="string"?p.children:j[0],G=i=>{if(!x){if(m!==void 0){m(i);return}u!==void 0&&!y&&u(!r)}},N=y?X:W;return a.jsxs(N,C(h(h({ref:F,isSelected:r,actionable:y||m!==void 0,onClick:G,disabled:x,dimmed:V,stacked:d,isLoading:k},p),D),{children:[a.jsxs(Y,{children:[d&&a.jsx(O,{isSelected:r,"data-testid":"stack"}),a.jsx(T,{$stacked:d}),a.jsx(U.Image,{fit:t,src:e,alt:s,loading:o}),!k&&a.jsx(Z,{isSelected:r,stacked:d})]}),a.jsxs(S,{children:[u!==void 0&&a.jsx(K.Checkbox,{"aria-label":s,checked:r,readOnly:x,onChange:u}),c===void 0?a.jsx(I,{title:s,children:s}):a.jsxs(ee,{children:[a.jsx(I,{title:s,children:s}),a.jsx(b,{title:c,children:c})]})]}),w]}))}),oe=Object.assign(te,{BadgeContainer:v,Subtitle:b});exports.Card=oe;exports.CardGrid=P;
