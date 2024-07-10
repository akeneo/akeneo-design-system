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
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
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
exports.SwitcherButton = void 0;
var react_1 = __importStar(require("react"));
var styled_components_1 = __importStar(require("styled-components"));
var icons_1 = require("../../icons");
var theme_1 = require("../../theme");
var hooks_1 = require("../../hooks");
var SwitcherButtonContainer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  > *:nth-child(2) {\n    opacity: 0;\n    transition: opacity 0.2s;\n  }\n  &:hover > *:nth-child(2) {\n    opacity: 1;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  > *:nth-child(2) {\n    opacity: 0;\n    transition: opacity 0.2s;\n  }\n  &:hover > *:nth-child(2) {\n    opacity: 1;\n  }\n"])));
var LabelAndValueContainer = styled_components_1.default.button(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", ";\n  border: none;\n  background: none;\n  cursor: pointer;\n  padding: 0;\n  display: flex;\n  align-items: baseline;\n  flex-direction: ", ";\n"], ["\n  ", ";\n  border: none;\n  background: none;\n  cursor: pointer;\n  padding: 0;\n  display: flex;\n  align-items: baseline;\n  flex-direction: ", ";\n"])), theme_1.CommonStyle, function (_a) {
    var $inline = _a.$inline;
    return ($inline ? 'row' : 'column');
});
var Label = styled_components_1.default.label(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  cursor: pointer;\n  white-space: nowrap;\n  ", "\n"], ["\n  cursor: pointer;\n  white-space: nowrap;\n  ", "\n"])), function (_a) {
    var $inline = _a.$inline;
    return $inline
        ? (0, styled_components_1.css)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n          margin-right: 3px;\n          color: ", ";\n        "], ["\n          margin-right: 3px;\n          color: ", ";\n        "])), (0, theme_1.getColor)('grey', 140)) : (0, styled_components_1.css)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n          color: ", ";\n          text-transform: uppercase;\n          font-size: ", ";\n        "], ["\n          color: ", ";\n          text-transform: uppercase;\n          font-size: ", ";\n        "])), (0, theme_1.getColor)('grey', 100), (0, theme_1.getFontSize)('small'));
});
var LabelAndArrow = styled_components_1.default.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  display: inline-flex;\n  align-items: center;\n"], ["\n  display: inline-flex;\n  align-items: center;\n"])));
var Value = styled_components_1.default.span(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  color: ", ";\n  margin-right: 5px;\n  text-align: left;\n"], ["\n  color: ", ";\n  margin-right: 5px;\n  text-align: left;\n"])), function (_a) {
    var $inline = _a.$inline;
    return ($inline ? (0, theme_1.getColor)('brand', 100) : (0, theme_1.getColor)('grey', 140));
});
var CloseButton = styled_components_1.default.button(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  border: none;\n  background: none;\n  width: 20px;\n  height: 20px;\n  cursor: pointer;\n  padding: 0;\n  flex-shrink: 0;\n"], ["\n  border: none;\n  background: none;\n  width: 20px;\n  height: 20px;\n  cursor: pointer;\n  padding: 0;\n  flex-shrink: 0;\n"])));
var SwitcherButton = (0, react_1.forwardRef)(function (_a, forwardedRef) {
    var label = _a.label, children = _a.children, onClick = _a.onClick, _b = _a.deletable, deletable = _b === void 0 ? false : _b, onDelete = _a.onDelete, _c = _a.inline, inline = _c === void 0 ? true : _c, rest = __rest(_a, ["label", "children", "onClick", "deletable", "onDelete", "inline"]);
    var buttonId = (0, hooks_1.useId)('button_');
    var handleDelete = function () { return deletable && (onDelete === null || onDelete === void 0 ? void 0 : onDelete()); };
    return (react_1.default.createElement(SwitcherButtonContainer, __assign({ ref: forwardedRef }, rest),
        react_1.default.createElement(LabelAndValueContainer, { type: "button", id: buttonId, onClick: onClick, "$inline": inline },
            react_1.default.createElement(Label, { htmlFor: buttonId, "$inline": inline }, label ? (inline ? "".concat(label, ":") : label) : ''),
            react_1.default.createElement(LabelAndArrow, null,
                react_1.default.createElement(Value, { "$inline": inline }, children),
                react_1.default.createElement(icons_1.ArrowDownIcon, { size: inline ? 16 : 10 }))),
        deletable && (react_1.default.createElement(CloseButton, { onClick: handleDelete },
            react_1.default.createElement(icons_1.CloseIcon, { size: 10 })))));
});
exports.SwitcherButton = SwitcherButton;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;
//# sourceMappingURL=SwitcherButton.js.map