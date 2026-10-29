"use strict";var K=Object.defineProperty,N=Object.defineProperties;var O=Object.getOwnPropertyDescriptors;var g=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var k=(e,r,o)=>r in e?K(e,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[r]=o,q=(e,r)=>{for(var o in r||(r={}))y.call(r,o)&&k(e,o,r[o]);if(g)for(var o of g(r))j.call(r,o)&&k(e,o,r[o]);return e},E=(e,r)=>N(e,O(r));var m=(e,r)=>{var o={};for(var t in e)y.call(e,t)&&r.indexOf(t)<0&&(o[t]=e[t]);if(e!=null&&g)for(var t of g(e))r.indexOf(t)<0&&j.call(e,t)&&(o[t]=e[t]);return o};var l=require("react/jsx-runtime"),h=require("react"),n=require("styled-components"),a=require("../../../theme/theme.js"),Q=require("../../Checkbox/Checkbox.js"),X=require("../TableContext.js"),C=require("../TableCell/TableCell.js"),Y=require("../../../icons/RowIcon.js"),Z=require("../../../icons/DangerIcon.js"),S=require("../../../icons/LockIcon.js"),ee=require("../../../hooks/usePlaceholderPosition.js"),re=require("../../../contexts/DraggedElementContext.js");function P(e){return e&&e.__esModule?e:{default:e}}var R=P(h),b=P(n);const oe=b.default.tr`
  ${({$isSelected:e})=>e&&n.css`
      > td {
        background-color: ${a.getColor("blue",20)};
      }
    `};

  ${({$isClickable:e})=>e&&n.css`
      &:hover {
        cursor: pointer;
      }
    `}

  ${({$isDragAndDroppable:e})=>e&&n.css`
      & > *:first-child {
        width: 44px;
      }
    `}

  ${({$placeholderPosition:e})=>e==="top"&&n.css`
      background: linear-gradient(to bottom, ${a.getColor("blue",40)} 4px, ${a.getColor("white")} 0px);
    `}

  ${({$placeholderPosition:e})=>e==="bottom"&&n.css`
      background: linear-gradient(to top, ${a.getColor("blue",40)} 4px, ${a.getColor("white")} 0px);
    `}

  ${({$placeholderPosition:e})=>e==="full_row"&&n.css`
      background-color: ${a.getColor("grey",20)};
    `}

  &:hover > td {
    opacity: 1;
    ${({$isClickable:e})=>e&&n.css`
        background-color: ${a.getColor("grey",20)};
      `}
  }

  &:hover > td > div {
    opacity: 1;
  }

  ${({$level:e})=>e==="warning"?n.css`
          > td {
            :first-child {
              padding: 0 0 0 5px;
            }
            background-color: ${a.getColor("yellow",10)};
          }
        `:e==="tertiary"&&n.css`
          > td {
            background-color: ${a.getColor("grey",20)};
            color: ${a.getColor("grey",120)};
          }
        `};
`,te=b.default.td`
  cursor: auto;

  > div {
    justify-content: center;
    opacity: ${({$isVisible:e})=>e?1:0};
  }
`,ae=b.default(C.TableCell)`
  cursor: grab;
  width: 20px;

  > div {
    justify-content: center;
  }

  :active {
    cursor: grabbing;
  }

  ${({$readOnly:e})=>e&&n.css`
      color: ${a.getColor("grey",40)};
    `}
`,_=e=>{switch(e){case"warning":return l.jsx(ne,{});case"tertiary":return l.jsx(S.LockIcon,{})}},ne=b.default(Z.DangerIcon)`
  color: ${a.getColor("yellow",120)};
`,le=h.forwardRef((se,L)=>{var $=se,{rowIndex:e=0,isSelected:r=!1,isSelectionReadOnly:o=!1,level:t,onSelectToggle:c,onClick:p,draggable:x,children:A}=$,I=m($,["rowIndex","isSelected","isSelectionReadOnly","level","onSelectToggle","onClick","draggable","children"]);const{isSelectable:f,displayCheckbox:v,isDragAndDroppable:i,hasWarningRows:T,hasLockedRows:M,dragAndDropMode:z}=h.useContext(X.TableContext),[W,H,U,V]=ee.usePlaceholderPosition(e,z);if(f&&!o&&(r===void 0||c===void 0))throw Error('A row in a selectable table should have the prop "isSelected" and "onSelectToggle"');const{index:w,onDragStart:s,onDragEnd:d}=h.useContext(re.DraggedElementContext),D=u=>{u.stopPropagation(),!o&&(c==null||c(!r))},B=()=>{w!==null&&H(w)},F=u=>{u.dataTransfer.setData("text",e.toString()),s==null||s(e)},G=()=>{V(),d==null||d()};return l.jsxs(oe,E(q({ref:L,$isClickable:p!==void 0,$isSelected:!!r,$level:t,$isDragAndDroppable:i,onClick:p,$placeholderPosition:i?W:"none",draggable:i&&x,"data-draggable-index":e,onDragEnter:B,onDragLeave:U,onDragStart:F,onDragEnd:G},I),{children:[f&&l.jsx(te,{"aria-hidden":!v&&!r,$isVisible:v||!!r,onClick:D,children:l.jsx(Q.Checkbox,{checked:r,readOnly:o,onChange:(u,J)=>{D(J)}})}),i&&l.jsx(ae,{onMouseDown:()=>s==null?void 0:s(e),onMouseUp:d,"data-testid":"dragAndDrop",$readOnly:x===!1,children:l.jsx(Y.RowIcon,{size:16})}),T&&l.jsx(C.TableCell,{children:t==="warning"&&R.default.cloneElement(_(t),{size:16,"data-testid":"warning-icon"})}),A,M&&l.jsx(C.TableCell,{children:t==="tertiary"&&R.default.cloneElement(_(t),{size:16,"data-testid":"lock-icon"})})]}))});exports.TableRow=le;
