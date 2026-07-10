"use strict";var G=Object.defineProperty,J=Object.defineProperties;var K=Object.getOwnPropertyDescriptors;var u=Object.getOwnPropertySymbols;var D=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable;var y=(e,r,o)=>r in e?G(e,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[r]=o,j=(e,r)=>{for(var o in r||(r={}))D.call(r,o)&&y(e,o,r[o]);if(u)for(var o of u(r))k.call(r,o)&&y(e,o,r[o]);return e},q=(e,r)=>J(e,K(r));var E=(e,r)=>{var o={};for(var t in e)D.call(e,t)&&r.indexOf(t)<0&&(o[t]=e[t]);if(e!=null&&u)for(var t of u(e))r.indexOf(t)<0&&k.call(e,t)&&(o[t]=e[t]);return o};var l=require("react/jsx-runtime"),g=require("react"),n=require("styled-components"),a=require("../../../theme/theme.js"),N=require("../../Checkbox/Checkbox.js"),Q=require("../TableContext.js"),b=require("../TableCell/TableCell.js"),X=require("../../../icons/RowIcon.js"),Y=require("../../../icons/DangerIcon.js"),Z=require("../../../icons/LockIcon.js"),S=require("../../../hooks/usePlaceholderPosition.js"),ee=require("../../../contexts/DraggedElementContext.js");function _(e){return e&&e.__esModule?e:{default:e}}var R=_(g),h=_(n);const re=h.default.tr`
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
`,oe=h.default.td`
  cursor: auto;

  > div {
    justify-content: center;
    opacity: ${({$isVisible:e})=>e?1:0};
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

  ${({$readOnly:e})=>e&&n.css`
      color: ${a.getColor("grey",40)};
    `}
`,m=e=>{switch(e){case"warning":return l.jsx(ae,{});case"tertiary":return l.jsx(Z.LockIcon,{})}},ae=h.default(Y.DangerIcon)`
  color: ${a.getColor("yellow",120)};
`,ne=g.forwardRef((le,I)=>{var x=le,{rowIndex:e=0,isSelected:r=!1,level:o,onSelectToggle:t,onClick:C,draggable:p,children:P}=x,A=E(x,["rowIndex","isSelected","level","onSelectToggle","onClick","draggable","children"]);const{isSelectable:$,displayCheckbox:f,isDragAndDroppable:s,hasWarningRows:L,hasLockedRows:T,dragAndDropMode:M}=g.useContext(Q.TableContext),[z,W,H,O]=S.usePlaceholderPosition(e,M);if($&&(r===void 0||t===void 0))throw Error('A row in a selectable table should have the prop "isSelected" and "onSelectToggle"');const{index:v,onDragStart:i,onDragEnd:c}=g.useContext(ee.DraggedElementContext),w=d=>{d.stopPropagation(),t==null||t(!r)},U=()=>{v!==null&&W(v)},V=d=>{d.dataTransfer.setData("text",e.toString()),i==null||i(e)},B=()=>{O(),c==null||c()};return l.jsxs(re,q(j({ref:I,$isClickable:C!==void 0,$isSelected:!!r,$level:o,$isDragAndDroppable:s,onClick:C,$placeholderPosition:s?z:"none",draggable:s&&p,"data-draggable-index":e,onDragEnter:U,onDragLeave:H,onDragStart:V,onDragEnd:B},A),{children:[$&&l.jsx(oe,{"aria-hidden":!f&&!r,$isVisible:f||!!r,onClick:w,children:l.jsx(N.Checkbox,{checked:r,onChange:(d,F)=>{w(F)}})}),s&&l.jsx(te,{onMouseDown:()=>i==null?void 0:i(e),onMouseUp:c,"data-testid":"dragAndDrop",$readOnly:p===!1,children:l.jsx(X.RowIcon,{size:16})}),L&&l.jsx(b.TableCell,{children:o==="warning"&&R.default.cloneElement(m(o),{size:16,"data-testid":"warning-icon"})}),P,T&&l.jsx(b.TableCell,{children:o==="tertiary"&&R.default.cloneElement(m(o),{size:16,"data-testid":"lock-icon"})})]}))});exports.TableRow=ne;
