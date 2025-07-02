"use strict";var J=Object.defineProperty,K=Object.defineProperties;var N=Object.getOwnPropertyDescriptors;var u=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable;var w=(e,r,o)=>r in e?J(e,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[r]=o,j=(e,r)=>{for(var o in r||(r={}))y.call(r,o)&&w(e,o,r[o]);if(u)for(var o of u(r))D.call(r,o)&&w(e,o,r[o]);return e},q=(e,r)=>K(e,N(r));var E=(e,r)=>{var o={};for(var t in e)y.call(e,t)&&r.indexOf(t)<0&&(o[t]=e[t]);if(e!=null&&u)for(var t of u(e))r.indexOf(t)<0&&D.call(e,t)&&(o[t]=e[t]);return o};var l=require("react/jsx-runtime"),g=require("react"),n=require("styled-components"),a=require("../../../theme/theme.js"),O=require("../../Checkbox/Checkbox.js"),Q=require("../TableContext.js"),b=require("../TableCell/TableCell.js"),X=require("../../../icons/RowIcon.js"),Y=require("../../../icons/DangerIcon.js"),Z=require("../../../icons/LockIcon.js"),S=require("../../../hooks/usePlaceholderPosition.js"),ee=require("../../../contexts/DraggedElementContext.js");function _(e){return e&&e.__esModule?e:{default:e}}var R=_(g),h=_(n);const re=h.default.tr`
  ${({isSelected:e})=>e&&n.css`
      > td {
        background-color: ${a.getColor("blue",20)};
      }
    `};

  ${({isClickable:e})=>e&&n.css`
      &:hover {
        cursor: pointer;
      }
    `}

  ${({isDragAndDroppable:e})=>e&&n.css`
      & > *:first-child {
        width: 44px;
      }
    `}

  ${({placeholderPosition:e})=>e==="top"&&n.css`
      background: linear-gradient(to bottom, ${a.getColor("blue",40)} 4px, ${a.getColor("white")} 0px);
    `}

  ${({placeholderPosition:e})=>e==="bottom"&&n.css`
      background: linear-gradient(to top, ${a.getColor("blue",40)} 4px, ${a.getColor("white")} 0px);
    `}

  ${({placeholderPosition:e})=>e==="full_row"&&n.css`
      background-color: ${a.getColor("grey",20)};
    `}

  &:hover > td {
    opacity: 1;
    ${({isClickable:e})=>e&&n.css`
        background-color: ${a.getColor("grey",20)};
      `}
  }

  &:hover > td > div {
    opacity: 1;
  }

  ${({level:e})=>e==="warning"?n.css`
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
`,oe=h.default.td`
  background: none !important;
  opacity: ${({isVisible:e})=>e?1:0};
  cursor: auto;

  > div {
    justify-content: center;
  }
`,te=h.default(b.TableCell)`
  cursor: grab;
  width: 20px;

  > div {
    justify-content: center;
  }

  :active {
    cursor: grabbing;
  }

  ${({readonly:e})=>e&&n.css`
      color: ${a.getColor("grey",40)};
    `}
`,m=e=>{switch(e){case"warning":return l.jsx(ae,{});case"tertiary":return l.jsx(Z.LockIcon,{})}},ae=h.default(Y.DangerIcon)`
  color: ${a.getColor("yellow",120)};
`,ne=g.forwardRef((le,L)=>{var x=le,{rowIndex:e=0,isSelected:r=!1,level:o,onSelectToggle:t,onClick:C,draggable:p,children:P}=x,I=E(x,["rowIndex","isSelected","level","onSelectToggle","onClick","draggable","children"]);const{isSelectable:f,displayCheckbox:v,isDragAndDroppable:i,hasWarningRows:T,hasLockedRows:A,dragAndDropMode:M}=g.useContext(Q.TableContext),[z,W,H,U]=S.usePlaceholderPosition(e,M);if(f&&(r===void 0||t===void 0))throw Error('A row in a selectable table should have the prop "isSelected" and "onSelectToggle"');const{index:$,onDragStart:c,onDragEnd:s}=g.useContext(ee.DraggedElementContext),k=d=>{d.stopPropagation(),t==null||t(!r)},V=()=>{$!==null&&W($)},B=d=>{d.dataTransfer.setData("text",e.toString()),c==null||c(e)},F=()=>{U(),s==null||s()};return l.jsxs(re,q(j({ref:L,isClickable:C!==void 0,isSelected:!!r,level:o,isDragAndDroppable:i,onClick:C,placeholderPosition:i?z:"none",draggable:i&&p,"data-draggable-index":e,onDragEnter:V,onDragLeave:H,onDragStart:B,onDragEnd:F},I),{children:[f&&l.jsx(oe,{"aria-hidden":!v&&!r,isVisible:v||!!r,onClick:k,children:l.jsx(O.Checkbox,{checked:r,onChange:(d,G)=>{k(G)}})}),i&&l.jsx(te,{onMouseDown:()=>c==null?void 0:c(e),onMouseUp:s,"data-testid":"dragAndDrop",readonly:p!==!1,children:l.jsx(X.RowIcon,{size:16})}),T&&l.jsx(b.TableCell,{children:o==="warning"&&R.default.cloneElement(m(o),{size:16,"data-testid":"warning-icon"})}),P,A&&l.jsx(b.TableCell,{children:o==="tertiary"&&R.default.cloneElement(m(o),{size:16,"data-testid":"lock-icon"})})]}))});exports.TableRow=ne;
