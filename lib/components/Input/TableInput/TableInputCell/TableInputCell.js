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
exports.TableInputCell = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var react_1 = __importDefault(require("react"));
var TableInputTd = styled_components_1.default.td(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  padding: 0;\n  min-width: 150px;\n  max-width: 250px;\n"], ["\n  padding: 0;\n  min-width: 150px;\n  max-width: 250px;\n"])));
var TableInputCell = react_1.default.forwardRef(function (_a, forwardedRef) {
    var children = _a.children, rest = __rest(_a, ["children"]);
    return (react_1.default.createElement(TableInputTd, __assign({ ref: forwardedRef }, rest), children));
});
exports.TableInputCell = TableInputCell;
TableInputCell.displayName = 'TableInput.Cell';
var templateObject_1;
//# sourceMappingURL=TableInputCell.js.map