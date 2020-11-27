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
exports.TableCell = void 0;
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var theme_1 = require("../../../theme");
var __1 = require("../..");
var TableCellContainer = styled_components_1.default.td(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  color: ", ";\n  border-bottom: 1px solid ", ";\n  padding: 15px 10px;\n  max-width: 15vw;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  min-width: 0;\n"], ["\n  color: ", ";\n  border-bottom: 1px solid ", ";\n  padding: 15px 10px;\n  max-width: 15vw;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  min-width: 0;\n"])), theme_1.getColor('grey', 140), theme_1.getColor('grey', 60));
var TableCellInnerContainer = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n"], ["\n  display: flex;\n"])));
var TableCell = react_1.default.forwardRef(function (_a, forwardedRef) {
    var children = _a.children, rest = __rest(_a, ["children"]);
    return (react_1.default.createElement(TableCellContainer, __assign({ ref: forwardedRef }, rest),
        react_1.default.createElement(TableCellInnerContainer, null, react_1.default.Children.map(children, function (child) {
            if (!react_1.default.isValidElement(child) || child.type !== __1.Image)
                return children;
            return react_1.default.cloneElement(child, {
                width: 44,
                height: 44,
            });
        }))));
});
exports.TableCell = TableCell;
var templateObject_1, templateObject_2;
//# sourceMappingURL=TableCell.js.map