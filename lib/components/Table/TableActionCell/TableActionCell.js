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
exports.TableActionCell = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var react_1 = __importDefault(require("react"));
var __1 = require("../../");
var theme_1 = require("../../../theme");
var TableActionCellContainer = styled_components_1.default.td(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  color: ", ";\n  border-bottom: 1px solid ", ";\n  padding: 0 10px;\n  max-width: 15vw;\n  min-width: 0;\n"], ["\n  color: ", ";\n  border-bottom: 1px solid ", ";\n  padding: 0 10px;\n  max-width: 15vw;\n  min-width: 0;\n"])), (0, theme_1.getColor)('grey', 140), (0, theme_1.getColor)('grey', 60));
var InnerTableActionCellContainer = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  opacity: 0;\n  display: flex;\n  gap: 10px;\n"], ["\n  opacity: 0;\n  display: flex;\n  gap: 10px;\n"])));
var TableActionCell = react_1.default.forwardRef(function (_a, forwardedRef) {
    var children = _a.children, rest = __rest(_a, ["children"]);
    var decoratedChildren = react_1.default.Children.map(children, function (child) {
        if (react_1.default.isValidElement(child) && (child.type === __1.Button || child.type === __1.IconButton)) {
            return react_1.default.cloneElement(child, {
                onClick: function (e) {
                    e.stopPropagation();
                    child.props.onClick && child.props.onClick(e);
                },
            });
        }
        return child;
    });
    return (react_1.default.createElement(TableActionCellContainer, __assign({ ref: forwardedRef }, rest),
        react_1.default.createElement(InnerTableActionCellContainer, null, decoratedChildren)));
});
exports.TableActionCell = TableActionCell;
var templateObject_1, templateObject_2;
//# sourceMappingURL=TableActionCell.js.map