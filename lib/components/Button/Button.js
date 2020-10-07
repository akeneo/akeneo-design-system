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
exports.Button = void 0;
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importStar(require("styled-components"));
var theme_1 = require("../../theme");
var shared_1 = require("../../shared");
var hooks_1 = require("../../hooks");
var getColorStyle = function (props) {
    var level = props.level, ghost = props.ghost, disabled = props.disabled;
    if (ghost) {
        return styled_components_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      color: ", ";\n      background-color: white;\n      border-color: ", ";\n\n      &:hover:not([disabled]) {\n        color: ", ";\n        background-color: ", ";\n        border-color: ", ";\n      }\n\n      &:active:not([disabled]) {\n        color: ", ";\n        border-color: ", ";\n      }\n    "], ["\n      color: ", ";\n      background-color: white;\n      border-color: ", ";\n\n      &:hover:not([disabled]) {\n        color: ", ";\n        background-color: ", ";\n        border-color: ", ";\n      }\n\n      &:active:not([disabled]) {\n        color: ", ";\n        border-color: ", ";\n      }\n    "])), theme_1.getColorForLevel(level, disabled ? 80 : 120), theme_1.getColorForLevel(level, disabled ? 60 : 100), theme_1.getColorForLevel(level, 140), theme_1.getColorForLevel(level, 20), theme_1.getColorForLevel(level, 120), theme_1.getColorForLevel(level, 140), theme_1.getColorForLevel(level, 140));
    }
    return styled_components_1.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    color: white;\n    background-color: ", ";\n\n    &:hover:not([disabled]) {\n      background-color: ", ";\n    }\n\n    &:active:not([disabled]) {\n      background-color: ", ";\n    }\n  "], ["\n    color: white;\n    background-color: ", ";\n\n    &:hover:not([disabled]) {\n      background-color: ", ";\n    }\n\n    &:active:not([disabled]) {\n      background-color: ", ";\n    }\n  "])), theme_1.getColorForLevel(level, disabled ? 40 : 100), theme_1.getColorForLevel(level, 120), theme_1.getColorForLevel(level, 140));
};
var Container = styled_components_1.default.button(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  border-width: 1px;\n  border-style: ", ";\n  font-size: ", ";\n  font-weight: 400;\n  text-transform: uppercase;\n  padding: ", ";\n  border-radius: 16px;\n  height: ", ";\n\n  ", "\n\n  cursor: pointer;\n\n  &:disabled {\n    cursor: not-allowed;\n  }\n"], ["\n  border-width: 1px;\n  border-style: ", ";\n  font-size: ", ";\n  font-weight: 400;\n  text-transform: uppercase;\n  padding: ", ";\n  border-radius: 16px;\n  height: ", ";\n\n  ", "\n\n  cursor: pointer;\n\n  &:disabled {\n    cursor: not-allowed;\n  }\n"])), function (props) { return (props.ghost ? 'solid' : 'none'); }, theme_1.getFontSize('default'), function (props) { return (props.size === 'small' ? '0 10px' : '0 15px'); }, function (props) { return (props.size === 'small' ? '24px' : '32px'); }, getColorStyle);
var Button = react_1.default.forwardRef(function (_a, forwardedRef) {
    var _b = _a.level, level = _b === void 0 ? 'primary' : _b, _c = _a.ghost, ghost = _c === void 0 ? false : _c, _d = _a.disabled, disabled = _d === void 0 ? false : _d, _e = _a.size, size = _e === void 0 ? 'default' : _e, ariaDescribedBy = _a.ariaDescribedBy, ariaLabel = _a.ariaLabel, ariaLabelledBy = _a.ariaLabelledBy, children = _a.children, onClick = _a.onClick, _f = _a.type, type = _f === void 0 ? 'button' : _f, rest = __rest(_a, ["level", "ghost", "disabled", "size", "ariaDescribedBy", "ariaLabel", "ariaLabelledBy", "children", "onClick", "type"]);
    var ref = hooks_1.useShortcut(shared_1.Key.Enter, disabled ? function () { return null; } : onClick, forwardedRef);
    return (react_1.default.createElement(Container, __assign({ level: level, ghost: ghost, disabled: disabled, size: size, "aria-describedby": ariaDescribedBy, "aria-disabled": disabled, "aria-label": ariaLabel, "aria-labelledby": ariaLabelledBy, ref: ref, role: "button", type: type, onClick: disabled ? null : onClick }, rest), children));
});
exports.Button = Button;
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=Button.js.map