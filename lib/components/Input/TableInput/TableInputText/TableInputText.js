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
exports.TableInputText = void 0;
var react_1 = __importDefault(require("react"));
var TableInputRow_1 = require("../TableInputRow/TableInputRow");
var styled_components_1 = __importDefault(require("styled-components"));
var TextInput_1 = require("../../TextInput/TextInput");
var theme_1 = require("../../../../theme");
var TableInputContext_1 = require("../TableInputContext");
var TableInputReadOnlyCell_1 = require("../shared/TableInputReadOnlyCell");
var highlightCell_1 = require("../shared/highlightCell");
var EditableTableInputText = (0, styled_components_1.default)(TextInput_1.TextInput)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  height: 39px;\n  padding-left: 10px;\n  padding-right: 10px;\n  border-radius: 0;\n  border: none;\n  background: none;\n\n  ", ";\n\n  &:focus {\n    box-shadow: 0 0 0 1px ", ";\n  }\n"], ["\n  height: 39px;\n  padding-left: 10px;\n  padding-right: 10px;\n  border-radius: 0;\n  border: none;\n  background: none;\n\n  ", ";\n\n  &:focus {\n    box-shadow: 0 0 0 1px ", ";\n  }\n"])), highlightCell_1.highlightCell, (0, theme_1.getColor)('grey', 100));
var TableInputText = function (_a) {
    var children = _a.children, value = _a.value, rest = __rest(_a, ["children", "value"]);
    var readOnly = react_1.default.useContext(TableInputContext_1.TableInputContext).readOnly;
    if (readOnly) {
        return react_1.default.createElement(TableInputReadOnlyCell_1.TableInputReadOnlyCell, { title: value }, value);
    }
    else
        return (react_1.default.createElement(EditableTableInputText, __assign({ value: value }, rest), children));
};
exports.TableInputText = TableInputText;
TableInputRow_1.TableInputRow.displayName = 'TableInput.TextInput';
var templateObject_1;
//# sourceMappingURL=TableInputText.js.map