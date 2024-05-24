"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableInputRow = void 0;
var styled_components_1 = __importStar(require("styled-components"));
var react_1 = __importStar(require("react"));
var theme_1 = require("../../../../theme");
var TableInputContext_1 = require("../TableInputContext");
var icons_1 = require("../../../../icons");
var TableInputCell_1 = require("../TableInputCell/TableInputCell");
var usePlaceholderPosition_1 = require("../../../../hooks/usePlaceholderPosition");
var DraggedElementContext_1 = require("../../../../contexts/DraggedElementContext");
var getZebraBackgroundColor = function (highlighted, rowIndex) {
    return highlighted ? (0, theme_1.getColor)('blue', 10) : rowIndex % 2 === 0 ? (0, theme_1.getColor)('white') : (0, theme_1.getColor)('grey', 20);
};
var TableInputTr = styled_components_1.default.tr(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  height: 40px;\n  & > td {\n    border: 1px solid ", ";\n    border-right-width: 0;\n    border-top-width: 0;\n    line-height: 39px;\n  }\n  & > td:first-child {\n    position: sticky;\n    left: 0;\n    margin-right: -1px;\n    z-index: 2;\n  }\n\n  ", "\n\n  & > td:last-child {\n    border-right-width: 1px;\n  }\n\n  ", "\n\n  ", "\n  \n  ", "\n    \n  ", "\n"], ["\n  height: 40px;\n  & > td {\n    border: 1px solid ", ";\n    border-right-width: 0;\n    border-top-width: 0;\n    line-height: 39px;\n  }\n  & > td:first-child {\n    position: sticky;\n    left: 0;\n    margin-right: -1px;\n    z-index: 2;\n  }\n\n  ", "\n\n  & > td:last-child {\n    border-right-width: 1px;\n  }\n\n  ", "\n\n  ", "\n  \n  ", "\n    \n  ", "\n"])), (0, theme_1.getColor)('grey', 60), function (_a) {
    var isDragAndDroppable = _a.isDragAndDroppable;
    return isDragAndDroppable && (0, styled_components_1.css)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      & > td:nth-child(2) {\n        position: sticky;\n        left: 26px;\n        z-index: 1;\n        border-left: none;\n      }\n    "], ["\n      & > td:nth-child(2) {\n        position: sticky;\n        left: 26px;\n        z-index: 1;\n        border-left: none;\n      }\n    "])));
}, function (_a) {
    var placeholderPosition = _a.placeholderPosition, rowIndex = _a.rowIndex, highlighted = _a.highlighted;
    return placeholderPosition === 'bottom' && (0, styled_components_1.css)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      & > td {\n        background: linear-gradient(\n          to top,\n          ", " 4px,\n          ", " 0px\n        );\n      }\n    "], ["\n      & > td {\n        background: linear-gradient(\n          to top,\n          ", " 4px,\n          ", " 0px\n        );\n      }\n    "])), (0, theme_1.getColor)('blue', 40), getZebraBackgroundColor(highlighted, rowIndex));
}, function (_a) {
    var placeholderPosition = _a.placeholderPosition, rowIndex = _a.rowIndex, highlighted = _a.highlighted;
    return placeholderPosition === 'top' && (0, styled_components_1.css)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n      & > td {\n        background: linear-gradient(\n          to bottom,\n          ", " 4px,\n          ", " 0px\n        );\n      }\n    "], ["\n      & > td {\n        background: linear-gradient(\n          to bottom,\n          ", " 4px,\n          ", " 0px\n        );\n      }\n    "])), (0, theme_1.getColor)('blue', 40), getZebraBackgroundColor(highlighted, rowIndex));
}, function (_a) {
    var placeholderPosition = _a.placeholderPosition, rowIndex = _a.rowIndex, highlighted = _a.highlighted;
    return placeholderPosition === 'none' && (0, styled_components_1.css)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n      & > td {\n        background: ", ";\n      }\n    "], ["\n      & > td {\n        background: ", ";\n      }\n    "])), getZebraBackgroundColor(highlighted, rowIndex));
}, function (_a) {
    var highlighted = _a.highlighted;
    return highlighted && (0, styled_components_1.css)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n      & > td {\n        &:before {\n          content: '';\n          border-bottom: 1px solid ", ";\n          position: relative;\n          width: 100%;\n          display: block;\n          height: 0;\n          margin-top: -1px;\n        }\n        border-bottom-color: ", ";\n        border-left-color: ", ";\n        &:last-child {\n          border-right-color: ", ";\n        }\n      }\n    "], ["\n      & > td {\n        &:before {\n          content: '';\n          border-bottom: 1px solid ", ";\n          position: relative;\n          width: 100%;\n          display: block;\n          height: 0;\n          margin-top: -1px;\n        }\n        border-bottom-color: ", ";\n        border-left-color: ", ";\n        &:last-child {\n          border-right-color: ", ";\n        }\n      }\n    "])), (0, theme_1.getColor)('blue', 100), (0, theme_1.getColor)('blue', 100), (0, theme_1.getColor)('blue', 100), (0, theme_1.getColor)('blue', 100));
});
var DragAndDropCell = (0, styled_components_1.default)(TableInputCell_1.TableInputCell)(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  max-width: 26px;\n  min-width: 26px;\n  width: 26px;\n  color: ", ";\n  text-align: right;\n  cursor: grab;\n  vertical-align: middle;\n  line-height: 0px !important;\n  & > div {\n    height: 39px;\n    vertical-align: middle;\n    line-height: 44px;\n  }\n"], ["\n  max-width: 26px;\n  min-width: 26px;\n  width: 26px;\n  color: ", ";\n  text-align: right;\n  cursor: grab;\n  vertical-align: middle;\n  line-height: 0px !important;\n  & > div {\n    height: 39px;\n    vertical-align: middle;\n    line-height: 44px;\n  }\n"])), (0, theme_1.getColor)('grey', 100));
var TableInputRow = (0, react_1.forwardRef)(function (_a, forwardedRef) {
    var children = _a.children, _b = _a.rowIndex, rowIndex = _b === void 0 ? 0 : _b, draggable = _a.draggable, _c = _a.highlighted, highlighted = _c === void 0 ? false : _c, rest = __rest(_a, ["children", "rowIndex", "draggable", "highlighted"]);
    var _d = (0, usePlaceholderPosition_1.usePlaceholderPosition)(rowIndex), placeholderPosition = _d[0], placeholderDragEnter = _d[1], placeholderDragLeave = _d[2], placeholderDragEnd = _d[3];
    var isDragAndDroppable = (0, react_1.useContext)(TableInputContext_1.TableInputContext).isDragAndDroppable;
    var _e = (0, react_1.useContext)(DraggedElementContext_1.DraggedElementContext), draggedElementIndex = _e.index, onDragStart = _e.onDragStart, onDragEnd = _e.onDragEnd;
    var handleDragEnter = function () {
        if (isDragAndDroppable && null !== draggedElementIndex) {
            placeholderDragEnter(draggedElementIndex);
        }
    };
    var handleDragStart = function (event) {
        if (isDragAndDroppable) {
            event.dataTransfer.setData('text/plain', rowIndex.toString());
            onDragStart === null || onDragStart === void 0 ? void 0 : onDragStart(rowIndex);
        }
    };
    var handleDragEnd = function () {
        if (isDragAndDroppable) {
            placeholderDragEnd();
            onDragEnd === null || onDragEnd === void 0 ? void 0 : onDragEnd();
        }
    };
    return (react_1.default.createElement(TableInputTr, __assign({ highlighted: highlighted, draggable: isDragAndDroppable && draggable, isDragAndDroppable: isDragAndDroppable, "data-draggable-index": rowIndex, onDragEnter: handleDragEnter, onDragLeave: placeholderDragLeave, onDragStart: handleDragStart, onDragEnd: handleDragEnd, ref: forwardedRef, placeholderPosition: placeholderPosition, rowIndex: rowIndex }, rest),
        isDragAndDroppable && (react_1.default.createElement(DragAndDropCell, { onMouseDown: function () { return onDragStart === null || onDragStart === void 0 ? void 0 : onDragStart(rowIndex); }, onMouseUp: onDragEnd, "data-testid": "dragAndDrop" },
            react_1.default.createElement("div", null,
                react_1.default.createElement(icons_1.RowIcon, { size: 16 })))),
        children));
});
exports.TableInputRow = TableInputRow;
TableInputRow.displayName = 'TableInput.Row';
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
//# sourceMappingURL=TableInputRow.js.map