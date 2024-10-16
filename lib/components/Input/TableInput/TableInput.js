"use strict";var C=Object.defineProperty,m=Object.defineProperties;var g=Object.getOwnPropertyDescriptors;var n=Object.getOwnPropertySymbols;var i=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;var s=(e,t,a)=>t in e?C(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,p=(e,t)=>{for(var a in t||(t={}))i.call(t,a)&&s(e,a,t[a]);if(n)for(var a of n(t))b.call(t,a)&&s(e,a,t[a]);return e},T=(e,t)=>m(e,g(t));var I=(e,t)=>{var a={};for(var l in e)i.call(e,l)&&t.indexOf(l)<0&&(a[l]=e[l]);if(e!=null&&n)for(var l of n(e))t.indexOf(l)<0&&b.call(e,l)&&(a[l]=e[l]);return a};var u=require("react/jsx-runtime"),S=require("react"),d=require("styled-components"),_=require("./TableInputHeader/TableInputHeader.js"),B=require("./TableInputHeaderCell/TableInputHeaderCell.js"),H=require("./TableInputBody/TableInputBody.js"),R=require("./TableInputCell/TableInputCell.js"),j=require("./TableInputRow/TableInputRow.js"),y=require("./TableInputText/TableInputText.js"),D=require("./TableInputDate/TableInputDate.js"),M=require("./TableInputNumber/TableInputNumber.js"),N=require("./TableInputBoolean/TableInputBoolean.js"),E=require("./TableInputSelect/TableInputSelect.js"),P=require("./TableInputContext.js"),L=require("./TableInputCellContent/TableInputCellContent.js"),$=require("./TableInputMeasurement/TableInputMeasurement.js"),k=require("../../../contexts/DraggedElementContext.js");function c(e){return e&&e.__esModule?e:{default:e}}var z=c(S),x=c(d);const F=x.default.div`
  width: 100%;
  overflow: auto;
`,G=x.default.table`
  border-spacing: 0;
  width: 100%;

  & th:first-child {
    transition: box-shadow 0.15s;
  }
  &.shadowed th:first-child {
    box-shadow: rgba(0, 0, 0, 0.2) 0px 7.5px 15px 0px;
  }

  ${({isDragAndDroppable:e})=>e?d.css`
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
`,r=J=>{var o=J,{children:e,readOnly:t=!1,isDragAndDroppable:a=!1,onReorder:l}=o,h=I(o,["children","readOnly","isDragAndDroppable","onReorder"]);const[v,w]=z.default.useState(!1),f=q=>{w(q.currentTarget.scrollLeft>0)};return u.jsx(P.TableInputContext.Provider,{value:{readOnly:t,isDragAndDroppable:a,onReorder:l},children:u.jsx(F,T(p({onScroll:f},h),{children:u.jsx(k.DraggedElementProvider,{children:u.jsx(G,{className:v?"shadowed":"",isDragAndDroppable:a,children:e})})}))})};r.Header=_.TableInputHeader;r.HeaderCell=B.TableInputHeaderCell;r.Body=H.TableInputBody;r.Row=j.TableInputRow;r.Cell=R.TableInputCell;r.CellContent=L.TableInputCellContent;r.Text=y.TableInputText;r.Date=D.TableInputDate;r.Number=M.TableInputNumber;r.Boolean=N.TableInputBoolean;r.Select=E.TableInputSelect;r.Measurement=$.TableInputMeasurement;exports.TableInput=r;
