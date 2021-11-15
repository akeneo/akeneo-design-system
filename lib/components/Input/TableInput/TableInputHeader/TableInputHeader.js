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
exports.TableInputHeader = void 0;
var react_1 = __importStar(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var theme_1 = require("../../../../theme");
var TableInputContext_1 = require("../TableInputContext");
var TableInputHeadTr = styled_components_1.default.tr(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  height: 40px;\n  background: ", ";\n  & > th {\n    border: 1px solid ", ";\n    border-left-width: 0;\n\n    &:first-child {\n      border-left-width: 1px;\n      position: sticky;\n      left: 0;\n      background: ", ";\n      z-index: 1;\n    }\n  }\n"], ["\n  height: 40px;\n  background: ", ";\n  & > th {\n    border: 1px solid ", ";\n    border-left-width: 0;\n\n    &:first-child {\n      border-left-width: 1px;\n      position: sticky;\n      left: 0;\n      background: ", ";\n      z-index: 1;\n    }\n  }\n"])), (0, theme_1.getColor)('grey', 40), (0, theme_1.getColor)('grey', 60), (0, theme_1.getColor)('grey', 40));
var TableInputHeader = react_1.default.forwardRef(function (_a, forwardedRef) {
    var children = _a.children, rest = __rest(_a, ["children"]);
    var isDragAndDroppable = (0, react_1.useContext)(TableInputContext_1.TableInputContext).isDragAndDroppable;
    return (react_1.default.createElement("thead", __assign({ ref: forwardedRef }, rest),
        react_1.default.createElement(TableInputHeadTr, null, react_1.Children.map(children, function (child, i) {
            return isDragAndDroppable && i === 0 && react_1.default.isValidElement(child)
                ? react_1.default.cloneElement(child, { colSpan: 2 })
                : child;
        }))));
});
exports.TableInputHeader = TableInputHeader;
TableInputHeader.displayName = 'TableInput.Header';
var templateObject_1;
//# sourceMappingURL=TableInputHeader.js.map