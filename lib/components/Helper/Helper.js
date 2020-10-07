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
exports.Helper = void 0;
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importStar(require("styled-components"));
var theme_1 = require("../../theme");
var icons_1 = require("../../icons");
var getBackgroundColor = function (level) {
    switch (level) {
        case 'info':
            return theme_1.getColor('blue10');
        case 'warning':
            return theme_1.getColor('yellow10');
        case 'error':
            return theme_1.getColor('red10');
    }
};
var getFontColor = function (level, inline) {
    switch (level) {
        case 'info':
            return theme_1.getColor('grey120');
        case 'warning':
            return inline ? theme_1.getColor('yellow100') : theme_1.getColor('yellow120');
        case 'error':
            return inline ? theme_1.getColor('red100') : theme_1.getColor('red120');
    }
};
var getIconColor = function (level, inline) {
    switch (level) {
        case 'info':
            return theme_1.getColor('blue100');
        case 'warning':
            return inline ? theme_1.getColor('yellow100') : theme_1.getColor('yellow120');
        case 'error':
            return inline ? theme_1.getColor('red100') : theme_1.getColor('red120');
    }
};
var getIcon = function (level, inline) {
    var iconSize = inline ? 16 : 20;
    switch (level) {
        case 'info':
            return react_1.default.createElement(icons_1.InfoRoundIcon, { size: iconSize });
        case 'warning':
            return react_1.default.createElement(icons_1.DangerIcon, { size: iconSize });
        case 'error':
            return react_1.default.createElement(icons_1.DangerIcon, { size: iconSize });
    }
};
var getSeparatorColor = function (level) {
    switch (level) {
        case 'info':
            return theme_1.getColor('grey80');
        case 'warning':
            return theme_1.getColor('yellow120');
        case 'error':
            return theme_1.getColor('red120');
    }
};
var Container = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  align-items: center;\n  display: flex;\n  font-weight: 400;\n  padding-right: 15px;\n  color: ", ";\n\n  ", "\n"], ["\n  align-items: center;\n  display: flex;\n  font-weight: 400;\n  padding-right: 15px;\n  color: ", ";\n\n  ",
    "\n"])), function (props) { return getFontColor(props.level, props.inline); }, function (props) {
    return !props.inline && styled_components_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      min-height: 24px;\n      background-color: ", ";\n    "], ["\n      min-height: 24px;\n      background-color: ", ";\n    "])), getBackgroundColor(props.level));
});
var IconContainer = styled_components_1.default.span(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  height: ", ";\n  padding-right: ", ";\n  color: ", ";\n\n  ", "\n"], ["\n  height: ", ";\n  padding-right: ", ";\n  color: ", ";\n\n  ",
    "\n"])), function (props) { return (props.inline ? '16px' : '20px'); }, function (props) { return (props.inline ? '4px' : '12px'); }, function (props) { return getIconColor(props.level, props.inline); }, function (props) {
    return !props.inline && styled_components_1.css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n      margin: 12px 15px 12px 12px;\n      border-right: 1px solid ", ";\n    "], ["\n      margin: 12px 15px 12px 12px;\n      border-right: 1px solid ", ";\n    "])), getSeparatorColor(props.level));
});
var Helper = react_1.default.forwardRef(function (_a, forwardedRef) {
    var level = _a.level, _b = _a.inline, inline = _b === void 0 ? false : _b, children = _a.children, rest = __rest(_a, ["level", "inline", "children"]);
    return (react_1.default.createElement(Container, __assign({ ref: forwardedRef, level: level, inline: inline }, rest),
        react_1.default.createElement(IconContainer, { inline: inline, level: level }, getIcon(level, inline)),
        children));
});
exports.Helper = Helper;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=Helper.js.map