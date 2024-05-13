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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableInput = void 0;
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importStar(require("styled-components"));
var TableInputHeader_1 = require("./TableInputHeader/TableInputHeader");
var TableInputHeaderCell_1 = require("./TableInputHeaderCell/TableInputHeaderCell");
var TableInputBody_1 = require("./TableInputBody/TableInputBody");
var TableInputCell_1 = require("./TableInputCell/TableInputCell");
var TableInputRow_1 = require("./TableInputRow/TableInputRow");
var TableInputText_1 = require("./TableInputText/TableInputText");
var TableInputDate_1 = require("./TableInputDate/TableInputDate");
var TableInputNumber_1 = require("./TableInputNumber/TableInputNumber");
var TableInputBoolean_1 = require("./TableInputBoolean/TableInputBoolean");
var TableInputSelect_1 = require("./TableInputSelect/TableInputSelect");
var TableInputContext_1 = require("./TableInputContext");
var TableInputCellContent_1 = require("./TableInputCellContent/TableInputCellContent");
var TableInputMeasurement_1 = require("./TableInputMeasurement/TableInputMeasurement");
var TableInputContainer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n  overflow: auto;\n"], ["\n  width: 100%;\n  overflow: auto;\n"])));
var TableInputTable = styled_components_1.default.table(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  border-spacing: 0;\n  width: 100%;\n\n  & th:first-child {\n    transition: box-shadow 0.15s;\n  }\n  &.shadowed th:first-child {\n    box-shadow: rgba(0, 0, 0, 0.2) 0px 7.5px 15px 0px;\n  }\n\n  ", "\n"], ["\n  border-spacing: 0;\n  width: 100%;\n\n  & th:first-child {\n    transition: box-shadow 0.15s;\n  }\n  &.shadowed th:first-child {\n    box-shadow: rgba(0, 0, 0, 0.2) 0px 7.5px 15px 0px;\n  }\n\n  ", "\n"])), function (_a) {
    var isDragAndDroppable = _a.isDragAndDroppable;
    return !isDragAndDroppable
        ? (0, styled_components_1.css)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n          & tr > td:first-child {\n            transition: box-shadow 0.15s;\n          }\n          &.shadowed tr > td:first-child {\n            box-shadow: rgba(0, 0, 0, 0.2) 0px 15px 15px 0px;\n          }\n        "], ["\n          & tr > td:first-child {\n            transition: box-shadow 0.15s;\n          }\n          &.shadowed tr > td:first-child {\n            box-shadow: rgba(0, 0, 0, 0.2) 0px 15px 15px 0px;\n          }\n        "]))) : (0, styled_components_1.css)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n          & tr > td:nth-child(2) {\n            transition: box-shadow 0.15s;\n          }\n          &.shadowed tr > td:nth-child(2) {\n            box-shadow: rgba(0, 0, 0, 0.2) 0px 15px 15px 0px;\n          }\n        "], ["\n          & tr > td:nth-child(2) {\n            transition: box-shadow 0.15s;\n          }\n          &.shadowed tr > td:nth-child(2) {\n            box-shadow: rgba(0, 0, 0, 0.2) 0px 15px 15px 0px;\n          }\n        "])));
});
var TableInput = function (_a) {
    var children = _a.children, _b = _a.readOnly, readOnly = _b === void 0 ? false : _b, _c = _a.isDragAndDroppable, isDragAndDroppable = _c === void 0 ? false : _c, onReorder = _a.onReorder, rest = __rest(_a, ["children", "readOnly", "isDragAndDroppable", "onReorder"]);
    var _d = react_1.default.useState(false), shadowed = _d[0], setShadowed = _d[1];
    var handleScroll = function (event) {
        setShadowed(event.currentTarget.scrollLeft > 0);
    };
    return (react_1.default.createElement(TableInputContext_1.TableInputContext.Provider, { value: { readOnly: readOnly, isDragAndDroppable: isDragAndDroppable, onReorder: onReorder } },
        react_1.default.createElement(TableInputContainer, __assign({ onScroll: handleScroll }, rest),
            react_1.default.createElement(TableInputTable, { className: shadowed ? 'shadowed' : '', isDragAndDroppable: isDragAndDroppable }, children))));
};
exports.TableInput = TableInput;
TableInput.Header = TableInputHeader_1.TableInputHeader;
TableInput.HeaderCell = TableInputHeaderCell_1.TableInputHeaderCell;
TableInput.Body = TableInputBody_1.TableInputBody;
TableInput.Row = TableInputRow_1.TableInputRow;
TableInput.Cell = TableInputCell_1.TableInputCell;
TableInput.CellContent = TableInputCellContent_1.TableInputCellContent;
TableInput.Text = TableInputText_1.TableInputText;
TableInput.Date = TableInputDate_1.TableInputDate;
TableInput.Number = TableInputNumber_1.TableInputNumber;
TableInput.Boolean = TableInputBoolean_1.TableInputBoolean;
TableInput.Select = TableInputSelect_1.TableInputSelect;
TableInput.Measurement = TableInputMeasurement_1.TableInputMeasurement;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=TableInput.js.map