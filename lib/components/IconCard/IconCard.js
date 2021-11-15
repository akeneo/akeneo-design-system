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
exports.IconCardGrid = exports.IconCard = void 0;
var react_1 = __importStar(require("react"));
var styled_components_1 = __importStar(require("styled-components"));
var theme_1 = require("../../theme");
var Container = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  min-height: 80px;\n  border: 1px ", " solid;\n  box-sizing: border-box;\n  display: -ms-flexbox;\n  display: inline-flex;\n  opacity: ", ";\n  cursor: ", ";\n  background: ", "\n}\n\n;\n\n:hover {\n  border-color: ", ";\n  background: ", ";\n}\n\n:active {\n  outline: none;\n  background: ", ";\n  border-color: ", ";\n}\n\n:focus:not(:active) {\n  box-shadow: 0 0 0 2px ", ";\n  outline: none;\n}\n"], ["\n  min-height: 80px;\n  border: 1px ", " solid;\n  box-sizing: border-box;\n  display: -ms-flexbox;\n  display: inline-flex;\n  opacity: ", ";\n  cursor: ", ";\n  background: ", "\n}\n\n;\n\n:hover {\n  border-color: ", ";\n  background: ", ";\n}\n\n:active {\n  outline: none;\n  background: ", ";\n  border-color: ", ";\n}\n\n:focus:not(:active) {\n  box-shadow: 0 0 0 2px ", ";\n  outline: none;\n}\n"])), (0, theme_1.getColor)('grey', 40), function (_a) {
    var disabled = _a.disabled;
    return disabled && 0.5;
}, function (_a) {
    var disabled = _a.disabled, onClick = _a.onClick;
    return (disabled ? 'not-allowed' : onClick !== undefined ? 'pointer' : 'inherit');
}, (0, theme_1.getColor)('white'), function (_a) {
    var disabled = _a.disabled;
    return !disabled && (0, theme_1.getColor)('grey', 60);
}, function (_a) {
    var disabled = _a.disabled;
    return !disabled && (0, theme_1.getColor)('grey', 20);
}, function (_a) {
    var disabled = _a.disabled;
    return !disabled && (0, theme_1.getColor)('grey', 20);
}, function (_a) {
    var disabled = _a.disabled;
    return !disabled && (0, theme_1.getColor)('grey', 80);
}, (0, theme_1.getColor)('blue', 40));
var IconContainer = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  min-width: 80px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-right: 1px ", " solid;\n  margin: 10px 0;\n\n  svg {\n    color: ", ";\n  }\n"], ["\n  min-width: 80px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-right: 1px ", " solid;\n  margin: 10px 0;\n\n  svg {\n    color: ", ";\n  }\n"])), (0, theme_1.getColor)('grey', 60), (0, theme_1.getColor)('grey', 100));
var ContentContainer = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  margin: 15px;\n"], ["\n  margin: 15px;\n"])));
var TruncableMixin = (0, styled_components_1.css)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  line-clamp: 2;\n  -webkit-box-orient: vertical;\n  box-orient: vertical;\n  overflow: hidden;\n  word-break: break-word;\n"], ["\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  line-clamp: 2;\n  -webkit-box-orient: vertical;\n  box-orient: vertical;\n  overflow: hidden;\n  word-break: break-word;\n"])));
var Label = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  color: ", ";\n  font-size: ", ";\n  margin-bottom: 2px;\n\n  ", ";\n"], ["\n  color: ", ";\n  font-size: ", ";\n  margin-bottom: 2px;\n\n  ", ";\n"])), (0, theme_1.getColor)('brand', 100), (0, theme_1.getFontSize)('big'), TruncableMixin);
var Content = styled_components_1.default.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  color: ", ";\n  font-size: ", ";\n\n  ", ";\n"], ["\n  color: ", ";\n  font-size: ", ";\n\n  ", ";\n"])), (0, theme_1.getColor)('grey', 100), (0, theme_1.getFontSize)('small'), TruncableMixin);
var IconCardGrid = styled_components_1.default.div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 20px;\n"], ["\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 20px;\n"])));
exports.IconCardGrid = IconCardGrid;
var IconCard = react_1.default.forwardRef(function (_a, forwardedRef) {
    var icon = _a.icon, label = _a.label, content = _a.content, onClick = _a.onClick, _b = _a.disabled, disabled = _b === void 0 ? false : _b, rest = __rest(_a, ["icon", "label", "content", "onClick", "disabled"]);
    var validIcon = (0, react_1.isValidElement)(icon) && react_1.default.cloneElement(icon, { size: 30 });
    return (react_1.default.createElement(Container, __assign({ ref: forwardedRef, disabled: disabled, onClick: onClick }, rest),
        react_1.default.createElement(IconContainer, null, validIcon),
        react_1.default.createElement(ContentContainer, null,
            react_1.default.createElement(Label, null, label),
            content && react_1.default.createElement(Content, null, content))));
});
exports.IconCard = IconCard;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
//# sourceMappingURL=IconCard.js.map