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
exports.TableInputNumber = void 0;
var react_1 = __importDefault(require("react"));
var TableInputRow_1 = require("../TableInputRow/TableInputRow");
var styled_components_1 = __importStar(require("styled-components"));
var NumberInput_1 = require("../../NumberInput/NumberInput");
var theme_1 = require("../../../../theme");
var TableInputReadOnlyCell_1 = require("../TableInputReadOnlyCell");
var TableInputContext_1 = require("../TableInputContext");
var EditableTableInputNumber = styled_components_1.default(NumberInput_1.NumberInput)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  height: 39px;\n  padding-left: 10px;\n  padding-right: 35px;\n  border-radius: 0;\n  border: none;\n  background: none;\n\n  ", ";\n\n  ", ";\n\n  &:focus {\n    box-shadow: 0 0 0 1px ", ";\n  }\n"], ["\n  height: 39px;\n  padding-left: 10px;\n  padding-right: 35px;\n  border-radius: 0;\n  border: none;\n  background: none;\n\n  ",
    ";\n\n  ",
    ";\n\n  &:focus {\n    box-shadow: 0 0 0 1px ", ";\n  }\n"])), function (_a) {
    var highlighted = _a.highlighted, inError = _a.inError;
    return highlighted &&
        !inError && styled_components_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      background: ", ";\n      box-shadow: 0 0 0 1px ", ";\n    "], ["\n      background: ", ";\n      box-shadow: 0 0 0 1px ", ";\n    "])), theme_1.getColor('green', 10), theme_1.getColor('green', 80));
}, function (_a) {
    var inError = _a.inError;
    return inError && styled_components_1.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      background: ", ";\n      box-shadow: 0 0 0 1px ", ";\n    "], ["\n      background: ", ";\n      box-shadow: 0 0 0 1px ", ";\n    "])), theme_1.getColor('red', 10), theme_1.getColor('red', 80));
}, theme_1.getColor('grey', 100));
var TableInputNumber = function (_a) {
    var children = _a.children, value = _a.value, rest = __rest(_a, ["children", "value"]);
    var readOnly = react_1.default.useContext(TableInputContext_1.TableInputContext).readOnly;
    if (readOnly) {
        return react_1.default.createElement(TableInputReadOnlyCell_1.TableInputReadOnlyCell, { title: value }, value);
    }
    else
        return (react_1.default.createElement(EditableTableInputNumber, __assign({ value: value }, rest), children));
};
exports.TableInputNumber = TableInputNumber;
TableInputRow_1.TableInputRow.displayName = 'TableInput.NumberInput';
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=TableInputNumber.js.map