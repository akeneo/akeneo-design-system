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
exports.TableInputCellContent = void 0;
var styled_components_1 = __importStar(require("styled-components"));
var react_1 = __importDefault(require("react"));
var theme_1 = require("../../../../theme");
var TableInputCellContainer = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  ", "\n  padding: 0 10px;\n  height: 39px;\n  margin-right: 1px;\n\n  ", ";\n\n  ", ";\n"], ["\n  ", "\n  padding: 0 10px;\n  height: 39px;\n  margin-right: 1px;\n\n  ", ";\n\n  ", ";\n"])), function (_a) {
    var rowTitle = _a.rowTitle;
    return rowTitle && (0, styled_components_1.css)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      color: ", ";\n      font-weight: bold;\n    "], ["\n      color: ", ";\n      font-weight: bold;\n    "])), (0, theme_1.getColor)('brand', 100));
}, function (_a) {
    var highlighted = _a.highlighted, inError = _a.inError;
    return highlighted &&
        !inError && (0, styled_components_1.css)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      background: ", ";\n      box-shadow: 0 0 0 1px ", ";\n    "], ["\n      background: ", ";\n      box-shadow: 0 0 0 1px ", ";\n    "])), (0, theme_1.getColor)('green', 10), (0, theme_1.getColor)('green', 80));
}, function (_a) {
    var inError = _a.inError;
    return inError && (0, styled_components_1.css)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n      background: ", ";\n      box-shadow: 0 0 0 1px ", ";\n    "], ["\n      background: ", ";\n      box-shadow: 0 0 0 1px ", ";\n    "])), (0, theme_1.getColor)('red', 10), (0, theme_1.getColor)('red', 80));
});
var TableInputCellContent = function (_a) {
    var children = _a.children, _b = _a.rowTitle, rowTitle = _b === void 0 ? false : _b, _c = _a.highlighted, highlighted = _c === void 0 ? false : _c, _d = _a.inError, inError = _d === void 0 ? false : _d, rest = __rest(_a, ["children", "rowTitle", "highlighted", "inError"]);
    return (react_1.default.createElement(TableInputCellContainer, __assign({}, rest, { highlighted: highlighted, inError: inError, rowTitle: rowTitle }), children));
};
exports.TableInputCellContent = TableInputCellContent;
TableInputCellContent.displayName = 'TableInput.CellContent';
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=TableInputCellContent.js.map