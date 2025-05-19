"use strict";var J=Object.defineProperty,K=Object.defineProperties;var N=Object.getOwnPropertyDescriptors;var u=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var k=(e,r,o)=>r in e?J(e,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[r]=o,D=(e,r)=>{for(var o in r||(r={}))w.call(r,o)&&k(e,o,r[o]);if(u)for(var o of u(r))y.call(r,o)&&k(e,o,r[o]);return e},j=(e,r)=>K(e,N(r));var q=(e,r)=>{var o={};for(var t in e)w.call(e,t)&&r.indexOf(t)<0&&(o[t]=e[t]);if(e!=null&&u)for(var t of u(e))r.indexOf(t)<0&&y.call(e,t)&&(o[t]=e[t]);return o};var i=require("react/jsx-runtime"),g=require("react"),n=require("styled-components"),a=require("../../../theme/theme.js"),O=require("../../Checkbox/Checkbox.js"),Q=require("../TableContext.js"),b=require("../TableCell/TableCell.js"),X=require("../../../icons/RowIcon.js"),Y=require("../../../icons/DangerIcon.js"),Z=require("../../../icons/LockIcon.js"),S=require("../../../hooks/usePlaceholderPosition.js"),ee=require("../../../contexts/DraggedElementContext.js");function m(e){return e&&e.__esModule?e:{default:e}}var E=m(g),h=m(n);const re=h.default.tr`
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
`,R=e=>{switch(e){case"warning":return i.jsx(ae,{});case"tertiary":return i.jsx(Z.LockIcon,{})}},ae=h.default(Y.DangerIcon)`
  color: ${a.getColor("yellow",120)};
`,ne=g.forwardRef((ie,L)=>{var p=ie,{rowIndex:e=0,isSelected:r=!1,level:o,onSelectToggle:t,onClick:C,draggable:_,children:P}=p,I=q(p,["rowIndex","isSelected","level","onSelectToggle","onClick","draggable","children"]);const{isSelectable:x,displayCheckbox:f,isDragAndDroppable:c,hasWarningRows:T,hasLockedRows:A,dragAndDropMode:M}=g.useContext(Q.TableContext),[z,W,H,U]=S.usePlaceholderPosition(e,M);if(x&&(r===void 0||t===void 0))throw Error('A row in a selectable table should have the prop "isSelected" and "onSelectToggle"');const{index:v,onDragStart:l,onDragEnd:s}=g.useContext(ee.DraggedElementContext),$=d=>{d.stopPropagation(),t==null||t(!r)},V=()=>{v!==null&&W(v)},B=d=>{d.dataTransfer.setData("text",e.toString()),l==null||l(e)},F=()=>{U(),s==null||s()};return i.jsxs(re,j(D({ref:L,isClickable:C!==void 0,isSelected:!!r,level:o,isDragAndDroppable:c,onClick:C,placeholderPosition:c?z:"none",draggable:c&&_,"data-draggable-index":e,onDragEnter:V,onDragLeave:H,onDragStart:B,onDragEnd:F},I),{children:[x&&i.jsx(oe,{"aria-hidden":!f&&!r,isVisible:f||!!r,onClick:$,children:i.jsx(O.Checkbox,{checked:r,onChange:(d,G)=>{$(G)}})}),c&&i.jsx(te,{onMouseDown:()=>l==null?void 0:l(e),onMouseUp:s,"data-testid":"dragAndDrop",children:i.jsx(X.RowIcon,{size:16})}),T&&i.jsx(b.TableCell,{children:o==="warning"&&E.default.cloneElement(R(o),{size:16,"data-testid":"warning-icon"})}),P,A&&i.jsx(b.TableCell,{children:o==="tertiary"&&E.default.cloneElement(R(o),{size:16,"data-testid":"lock-icon"})})]}))});exports.TableRow=ne;
