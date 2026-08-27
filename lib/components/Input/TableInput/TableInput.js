"use strict";var m=Object.defineProperty,g=Object.defineProperties;var R=Object.getOwnPropertyDescriptors;var n=Object.getOwnPropertySymbols;var b=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;var s=(e,t,a)=>t in e?m(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,p=(e,t)=>{for(var a in t||(t={}))b.call(t,a)&&s(e,a,t[a]);if(n)for(var a of n(t))i.call(t,a)&&s(e,a,t[a]);return e},T=(e,t)=>g(e,R(t));var I=(e,t)=>{var a={};for(var l in e)b.call(e,l)&&t.indexOf(l)<0&&(a[l]=e[l]);if(e!=null&&n)for(var l of n(e))t.indexOf(l)<0&&i.call(e,l)&&(a[l]=e[l]);return a};var u=require("react/jsx-runtime"),y=require("react"),d=require("styled-components"),S=require("./TableInputHeader/TableInputHeader.js"),_=require("./TableInputHeaderCell/TableInputHeaderCell.js"),B=require("./TableInputBody/TableInputBody.js"),D=require("./TableInputCell/TableInputCell.js"),H=require("./TableInputRow/TableInputRow.js"),j=require("./TableInputText/TableInputText.js"),M=require("./TableInputDate/TableInputDate.js"),N=require("./TableInputNumber/TableInputNumber.js"),O=require("./TableInputBoolean/TableInputBoolean.js"),E=require("./TableInputSelect/TableInputSelect.js"),x=require("./TableInputContext.js"),P=require("./shared/TableInputReadOnlyCell.js"),$=require("./TableInputCellContent/TableInputCellContent.js"),L=require("./TableInputMeasurement/TableInputMeasurement.js"),k=require("../../../contexts/DraggedElementContext.js");function c(e){return e&&e.__esModule?e:{default:e}}var z=c(y),h=c(d);const A=h.default.div`
  width: 100%;
  overflow: auto;
`,F=h.default.table`
  border-spacing: 0;
  width: 100%;

  & th:first-child {
    transition: box-shadow 0.15s;
  }
  &.shadowed th:first-child {
    box-shadow: rgba(0, 0, 0, 0.2) 0px 7.5px 15px 0px;
  }

  ${({$isDragAndDroppable:e})=>e?d.css`
          & tr > td:nth-child(2) {
            transition: box-shadow 0.15s;
          }
          &.shadowed tr > td:nth-child(2) {
            box-shadow: rgba(0, 0, 0, 0.2) 0px 15px 15px 0px;
          }
        `:d.css`
          & tr > td:first-child {
            transition: box-shadow 0.15s;
          }
          &.shadowed tr > td:first-child {
            box-shadow: rgba(0, 0, 0, 0.2) 0px 15px 15px 0px;
          }
        `}
`,r=G=>{var o=G,{children:e,readOnly:t=!1,isDragAndDroppable:a=!1,onReorder:l}=o,v=I(o,["children","readOnly","isDragAndDroppable","onReorder"]);const[C,q]=z.default.useState(!1),w=f=>{q(f.currentTarget.scrollLeft>0)};return u.jsx(x.TableInputContext.Provider,{value:{readOnly:t,isDragAndDroppable:a,onReorder:l},children:u.jsx(A,T(p({onScroll:w},v),{children:u.jsx(k.DraggedElementProvider,{children:u.jsx(F,{className:C?"shadowed":"",$isDragAndDroppable:a,children:e})})}))})};r.Header=S.TableInputHeader;r.HeaderCell=_.TableInputHeaderCell;r.Body=B.TableInputBody;r.Row=H.TableInputRow;r.Cell=D.TableInputCell;r.CellContent=$.TableInputCellContent;r.Text=j.TableInputText;r.Date=M.TableInputDate;r.Number=N.TableInputNumber;r.Boolean=O.TableInputBoolean;r.Select=E.TableInputSelect;r.Measurement=L.TableInputMeasurement;r.ReadOnlyCell=P.TableInputReadOnlyCell;exports.useTableInputContext=x.useTableInputContext;exports.TableInput=r;
