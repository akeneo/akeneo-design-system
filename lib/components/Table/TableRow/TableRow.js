"use strict";var G=Object.defineProperty,J=Object.defineProperties;var K=Object.getOwnPropertyDescriptors;var u=Object.getOwnPropertySymbols;var $=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var w=(e,r,o)=>r in e?G(e,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[r]=o,D=(e,r)=>{for(var o in r||(r={}))$.call(r,o)&&w(e,o,r[o]);if(u)for(var o of u(r))y.call(r,o)&&w(e,o,r[o]);return e},j=(e,r)=>J(e,K(r));var q=(e,r)=>{var o={};for(var t in e)$.call(e,t)&&r.indexOf(t)<0&&(o[t]=e[t]);if(e!=null&&u)for(var t of u(e))r.indexOf(t)<0&&y.call(e,t)&&(o[t]=e[t]);return o};var i=require("react/jsx-runtime"),g=require("react"),n=require("styled-components"),a=require("../../../theme/theme.js"),N=require("../../Checkbox/Checkbox.js"),O=require("../TableContext.js"),b=require("../TableCell/TableCell.js"),Q=require("../../../icons/RowIcon.js"),X=require("../../../icons/DangerIcon.js"),Y=require("../../../icons/LockIcon.js"),Z=require("../../../hooks/usePlaceholderPosition.js"),S=require("../../../contexts/DraggedElementContext.js");function m(e){return e&&e.__esModule?e:{default:e}}var E=m(g),h=m(n);const ee=h.default.tr`
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
`,re=h.default.td`
  background: none !important;
  opacity: ${({isVisible:e})=>e?1:0};
  cursor: auto;

  > div {
    justify-content: center;
  }
`,oe=h.default(b.TableCell)`
  cursor: grab;
  width: 20px;

  > div {
    justify-content: center;
  }

  :active {
    cursor: grabbing;
  }
`,R=e=>{switch(e){case"warning":return i.jsx(te,{});case"tertiary":return i.jsx(Y.LockIcon,{})}},te=h.default(X.DangerIcon)`
  color: ${a.getColor("yellow",120)};
`,ae=g.forwardRef((ne,L)=>{var p=ne,{rowIndex:e=0,isSelected:r=!1,level:o,onSelectToggle:t,onClick:C,draggable:_,children:P}=p,I=q(p,["rowIndex","isSelected","level","onSelectToggle","onClick","draggable","children"]);const[T,z,A,M]=Z.usePlaceholderPosition(e),{isSelectable:x,displayCheckbox:v,isDragAndDroppable:l,hasWarningRows:W,hasLockedRows:H}=g.useContext(O.TableContext);if(x&&(r===void 0||t===void 0))throw Error('A row in a selectable table should have the prop "isSelected" and "onSelectToggle"');const{index:f,onDragStart:c,onDragEnd:s}=g.useContext(S.DraggedElementContext),k=d=>{d.stopPropagation(),t==null||t(!r)},U=()=>{f!==null&&z(f)},V=d=>{d.dataTransfer.setData("text",e.toString()),c==null||c(e)},B=()=>{M(),s==null||s()};return i.jsxs(ee,j(D({ref:L,isClickable:C!==void 0,isSelected:!!r,level:o,isDragAndDroppable:l,onClick:C,placeholderPosition:l?T:"none",draggable:l&&_,"data-draggable-index":e,onDragEnter:U,onDragLeave:A,onDragStart:V,onDragEnd:B},I),{children:[x&&i.jsx(re,{"aria-hidden":!v&&!r,isVisible:v||!!r,onClick:k,children:i.jsx(N.Checkbox,{checked:r,onChange:(d,F)=>{k(F)}})}),l&&i.jsx(oe,{onMouseDown:()=>c==null?void 0:c(e),onMouseUp:s,"data-testid":"dragAndDrop",children:i.jsx(Q.RowIcon,{size:16})}),W&&i.jsx(b.TableCell,{children:o==="warning"&&E.default.cloneElement(R(o),{size:16,"data-testid":"warning-icon"})}),P,H&&i.jsx(b.TableCell,{children:o==="tertiary"&&E.default.cloneElement(R(o),{size:16,"data-testid":"lock-icon"})})]}))});exports.TableRow=ae;
