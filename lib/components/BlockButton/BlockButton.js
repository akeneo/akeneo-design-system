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
exports.BlockButton = void 0;
var react_1 = __importStar(require("react"));
var styled_components_1 = __importStar(require("styled-components"));
var theme_1 = require("../../theme");
var getColorStyle = function (_a) {
    var disabled = _a.disabled;
    if (disabled) {
        return (0, styled_components_1.css)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      border-color: ", ";\n      color: ", ";\n    "], ["\n      border-color: ", ";\n      color: ", ";\n    "])), (0, theme_1.getColor)('grey', 100), (0, theme_1.getColor)('grey', 100));
    }
    return (0, styled_components_1.css)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    background-color: ", ";\n    border-color: ", ";\n    color: ", ";\n  "], ["\n    background-color: ", ";\n    border-color: ", ";\n    color: ", ";\n  "])), (0, theme_1.getColor)('white'), (0, theme_1.getColor)('blue', 100), (0, theme_1.getColor)('blue', 100));
};
var Container = styled_components_1.default.button(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  box-sizing: border-box;\n  width: 100%;\n  padding: 14px 20px;\n  border-style: solid;\n  border-width: 1px;\n  border-radius: 2px;\n  height: 50px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-family: inherit;\n  font-size: ", ";\n  font-weight: 400;\n  outline-style: none;\n  cursor: ", ";\n  white-space: nowrap;\n  text-transform: uppercase;\n\n  &:focus {\n    box-shadow: 0 0 0 2px ", ";\n  }\n\n  ", "\n"], ["\n  box-sizing: border-box;\n  width: 100%;\n  padding: 14px 20px;\n  border-style: solid;\n  border-width: 1px;\n  border-radius: 2px;\n  height: 50px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-family: inherit;\n  font-size: ", ";\n  font-weight: 400;\n  outline-style: none;\n  cursor: ", ";\n  white-space: nowrap;\n  text-transform: uppercase;\n\n  &:focus {\n    box-shadow: 0 0 0 2px ", ";\n  }\n\n  ", "\n"])), (0, theme_1.getFontSize)('default'), function (_a) {
    var disabled = _a.disabled;
    return (disabled ? 'not-allowed' : 'pointer');
}, (0, theme_1.getColor)('blue', 40), getColorStyle);
var ChildrenContainer = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  gap: 10px;\n"], ["\n  display: flex;\n  align-items: center;\n  gap: 10px;\n"])));
var ActionsContainer = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n"], ["\n  display: flex;\n  align-items: center;\n"])));
var BlockButton = (0, react_1.forwardRef)(function (_a, forwardedRef) {
    var _b;
    var icon = _a.icon, _c = _a.disabled, disabled = _c === void 0 ? false : _c, ariaDescribedBy = _a.ariaDescribedBy, ariaLabel = _a.ariaLabel, ariaLabelledBy = _a.ariaLabelledBy, children = _a.children, onClick = _a.onClick, rest = __rest(_a, ["icon", "disabled", "ariaDescribedBy", "ariaLabel", "ariaLabelledBy", "children", "onClick"]);
    var handleAction = function (event) {
        if (disabled || undefined === onClick)
            return;
        onClick(event);
    };
    return (react_1.default.createElement(Container, __assign({ disabled: disabled, "aria-describedby": ariaDescribedBy, "aria-disabled": disabled, "aria-label": ariaLabel, "aria-labelledby": ariaLabelledBy, ref: forwardedRef, role: "button", onClick: handleAction }, rest),
        react_1.default.createElement(ChildrenContainer, null, react_1.Children.map(children, function (child) {
            var _a;
            if ((0, react_1.isValidElement)(child)) {
                return (0, react_1.cloneElement)(child, { size: (_a = child.props.size) !== null && _a !== void 0 ? _a : 18 });
            }
            return child;
        })),
        react_1.default.createElement(ActionsContainer, null, (0, react_1.isValidElement)(icon) && (0, react_1.cloneElement)(icon, { size: (_b = icon.props.size) !== null && _b !== void 0 ? _b : 18 }))));
});
exports.BlockButton = BlockButton;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
//# sourceMappingURL=BlockButton.js.map