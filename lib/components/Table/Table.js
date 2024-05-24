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
exports.Table = void 0;
var react_1 = __importStar(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var TableCell_1 = require("./TableCell/TableCell");
var TableHeader_1 = require("./TableHeader/TableHeader");
var TableHeaderCell_1 = require("./TableHeaderCell/TableHeaderCell");
var TableActionCell_1 = require("./TableActionCell/TableActionCell");
var TableRow_1 = require("./TableRow/TableRow");
var TableContext_1 = require("./TableContext");
var TableBody_1 = require("./TableBody/TableBody");
var DraggedElementContext_1 = require("../../contexts/DraggedElementContext");
var TableContainer = styled_components_1.default.table(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  border-collapse: collapse;\n  width: 100%;\n"], ["\n  border-collapse: collapse;\n  width: 100%;\n"])));
var Table = function (_a) {
    var _b = _a.isSelectable, isSelectable = _b === void 0 ? false : _b, _c = _a.hasWarningRows, hasWarningRows = _c === void 0 ? false : _c, _d = _a.hasLockedRows, hasLockedRows = _d === void 0 ? false : _d, _e = _a.displayCheckbox, displayCheckbox = _e === void 0 ? false : _e, _f = _a.isDragAndDroppable, isDragAndDroppable = _f === void 0 ? false : _f, _g = _a.onReorder, onReorder = _g === void 0 ? undefined : _g, children = _a.children, rest = __rest(_a, ["isSelectable", "hasWarningRows", "hasLockedRows", "displayCheckbox", "isDragAndDroppable", "onReorder", "children"]);
    var providerValue = (0, react_1.useMemo)(function () { return ({ isSelectable: isSelectable, hasWarningRows: hasWarningRows, hasLockedRows: hasLockedRows, displayCheckbox: displayCheckbox, isDragAndDroppable: isDragAndDroppable, onReorder: onReorder }); }, [isSelectable, hasWarningRows, hasLockedRows, displayCheckbox, isDragAndDroppable, onReorder]);
    return (react_1.default.createElement(TableContext_1.TableContext.Provider, { value: providerValue },
        react_1.default.createElement(DraggedElementContext_1.DraggedElementProvider, null,
            react_1.default.createElement(TableContainer, __assign({}, rest), children))));
};
exports.Table = Table;
TableHeader_1.TableHeader.displayName = 'Table.Header';
TableHeaderCell_1.TableHeaderCell.displayName = 'Table.HeaderCell';
TableBody_1.TableBody.displayName = 'Table.Body';
TableRow_1.TableRow.displayName = 'Table.Row';
TableCell_1.TableCell.displayName = 'Table.Cell';
TableActionCell_1.TableActionCell.displayName = 'Table.ActionCell';
Table.Header = TableHeader_1.TableHeader;
Table.HeaderCell = TableHeaderCell_1.TableHeaderCell;
Table.Body = TableBody_1.TableBody;
Table.Row = TableRow_1.TableRow;
Table.Cell = TableCell_1.TableCell;
Table.ActionCell = TableActionCell_1.TableActionCell;
var templateObject_1;
//# sourceMappingURL=Table.js.map