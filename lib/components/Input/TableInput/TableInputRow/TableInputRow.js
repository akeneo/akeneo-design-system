"use strict";var _=Object.defineProperty,z=Object.defineProperties;var A=Object.getOwnPropertyDescriptors;var s=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var b=(e,t,r)=>t in e?_(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,f=(e,t)=>{for(var r in t||(t={}))x.call(t,r)&&b(e,r,t[r]);if(s)for(var r of s(t))C.call(t,r)&&b(e,r,t[r]);return e},m=(e,t)=>z(e,A(t));var v=(e,t)=>{var r={};for(var o in e)x.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(e!=null&&s)for(var o of s(e))t.indexOf(o)<0&&C.call(e,o)&&(r[o]=e[o]);return r};var g=require("react/jsx-runtime"),n=require("styled-components"),c=require("react"),l=require("../../../../theme/theme.js"),M=require("../TableInputContext.js"),L=require("../../../../icons/RowIcon.js"),B=require("../TableInputCell/TableInputCell.js"),N=require("../../../../hooks/usePlaceholderPosition.js"),U=require("../../../../contexts/DraggedElementContext.js");function Z(e){return e&&e.__esModule?e:{default:e}}var D=Z(n);const u=(e,t)=>e?l.getColor("blue",10):t%2===0?l.getColor("white"):l.getColor("grey",20),F=D.default.tr`
  height: 40px;
  & > td {
    border: 1px solid ${l.getColor("grey",60)};
    border-right-width: 0;
    border-top-width: 0;
    line-height: 39px;
  }
  & > td:first-child {
    position: sticky;
    left: 0;
    margin-right: -1px;
    z-index: 2;
  }

  ${({isDragAndDroppable:e})=>e&&n.css`
      & > td:nth-child(2) {
        position: sticky;
        left: 26px;
        z-index: 1;
        border-left: none;
      }
    `}

  & > td:last-child {
    border-right-width: 1px;
  }

  ${({placeholderPosition:e,rowIndex:t,highlighted:r})=>e==="bottom"&&n.css`
      & > td {
        background: linear-gradient(
          to top,
          ${l.getColor("blue",40)} 4px,
          ${u(r,t)} 0px
        );
      }
    `}

  ${({placeholderPosition:e,rowIndex:t,highlighted:r})=>e==="top"&&n.css`
      & > td {
        background: linear-gradient(
          to bottom,
          ${l.getColor("blue",40)} 4px,
          ${u(r,t)} 0px
        );
      }
    `}
  
  ${({placeholderPosition:e,rowIndex:t,highlighted:r})=>e==="none"&&n.css`
      & > td {
        background: ${u(r,t)};
      }
    `}
    
  ${({highlighted:e})=>e&&n.css`
      & > td {
        &:before {
          content: '';
          border-bottom: 1px solid ${l.getColor("blue",100)};
          position: relative;
          width: 100%;
          display: block;
          height: 0;
          margin-top: -1px;
        }
        border-bottom-color: ${l.getColor("blue",100)};
        border-left-color: ${l.getColor("blue",100)};
        &:last-child {
          border-right-color: ${l.getColor("blue",100)};
        }
      }
    `}
`,G=D.default(B.TableInputCell)`
  max-width: 26px;
  min-width: 26px;
  width: 26px;
  color: ${l.getColor("grey",100)};
  text-align: right;
  cursor: grab;
  vertical-align: middle;
  line-height: 0px !important;
  & > div {
    height: 39px;
    vertical-align: middle;
    line-height: 44px;
  }
`,$=c.forwardRef((H,T)=>{var p=H,{children:e,rowIndex:t=0,draggable:r,highlighted:o=!1}=p,w=v(p,["children","rowIndex","draggable","highlighted"]);const[q,y,E,R]=N.usePlaceholderPosition(t),{isDragAndDroppable:i}=c.useContext(M.TableInputContext),{index:h,onDragStart:a,onDragEnd:d}=c.useContext(U.DraggedElementContext),k=()=>{i&&h!==null&&y(h)},I=P=>{i&&(P.dataTransfer.setData("text/plain",t.toString()),a==null||a(t))},j=()=>{i&&(R(),d==null||d())};return g.jsxs(F,m(f({highlighted:o,draggable:i&&r,isDragAndDroppable:i,"data-draggable-index":t,onDragEnter:k,onDragLeave:E,onDragStart:I,onDragEnd:j,ref:T,placeholderPosition:q,rowIndex:t},w),{children:[i&&g.jsx(G,{onMouseDown:()=>a==null?void 0:a(t),onMouseUp:d,"data-testid":"dragAndDrop",children:g.jsx("div",{children:g.jsx(L.RowIcon,{size:16})})}),e]}))});$.displayName="TableInput.Row";exports.TableInputRow=$;
