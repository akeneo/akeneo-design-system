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
exports.Avatar = void 0;
var react_1 = __importStar(require("react"));
var styled_components_1 = __importStar(require("styled-components"));
var hooks_1 = require("../../hooks");
var theme_1 = require("../../theme");
var AvatarContainer = styled_components_1.default.span(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  ", "\n  ", "\n  display: inline-block;\n  background-color: ", ";\n"], ["\n  ", "\n  ", "\n  display: inline-block;\n  background-color: ", ";\n"])), function (_a) {
    var size = _a.size;
    return size === 'default'
        ? (0, styled_components_1.css)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n          height: 32px;\n          width: 32px;\n          border-radius: 32px;\n        "], ["\n          height: 32px;\n          width: 32px;\n          border-radius: 32px;\n        "]))) : (0, styled_components_1.css)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n          height: 140px;\n          width: 140px;\n          border-radius: 140px;\n        "], ["\n          height: 140px;\n          width: 140px;\n          border-radius: 140px;\n        "])));
}, function (_a) {
    var size = _a.size, selected = _a.selected;
    return size === 'default' && selected
        ? (0, styled_components_1.css)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n          padding: 1px;\n          border: 3px solid ", ";\n          margin: -4px -8px 0 0;\n        "], ["\n          padding: 1px;\n          border: 3px solid ", ";\n          margin: -4px -8px 0 0;\n        "])), (0, theme_1.getColor)('blue', 100)) : (0, styled_components_1.css)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n          margin-right: -4px;\n        "], ["\n          margin-right: -4px;\n        "])));
}, (0, theme_1.getColor)('white'));
var AvatarImage = styled_components_1.default.span(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  ", "\n  ", "\n  height: 100%;\n  width: 100%;\n  display: block;\n  color: ", ";\n  text-align: center;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  text-transform: uppercase;\n"], ["\n  ", "\n  ", "\n  height: 100%;\n  width: 100%;\n  display: block;\n  color: ", ";\n  text-align: center;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  text-transform: uppercase;\n"])), function (_a) {
    var size = _a.size;
    return size === 'default'
        ? (0, styled_components_1.css)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n          line-height: 32px;\n          font-size: 15px;\n          border-radius: 32px;\n        "], ["\n          line-height: 32px;\n          font-size: 15px;\n          border-radius: 32px;\n        "]))) : (0, styled_components_1.css)(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n          line-height: 140px;\n          font-size: 66px;\n          border-radius: 140px;\n        "], ["\n          line-height: 140px;\n          font-size: 66px;\n          border-radius: 140px;\n        "])));
}, function (_a) {
    var disabled = _a.disabled;
    return disabled
        ? (0, styled_components_1.css)(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n          opacity: 50%;\n        "], ["\n          opacity: 50%;\n        "]))) : (0, styled_components_1.css)(templateObject_9 || (templateObject_9 = __makeTemplateObject([""], [""])));
}, (0, theme_1.getColor)('white'));
var Avatar = function (_a) {
    var username = _a.username, firstName = _a.firstName, lastName = _a.lastName, avatarUrl = _a.avatarUrl, _b = _a.size, size = _b === void 0 ? 'default' : _b, _c = _a.disabled, disabled = _c === void 0 ? false : _c, _d = _a.selected, selected = _d === void 0 ? false : _d, rest = __rest(_a, ["username", "firstName", "lastName", "avatarUrl", "size", "disabled", "selected"]);
    var theme = (0, hooks_1.useTheme)();
    var fallback = (firstName.trim().charAt(0) + lastName.trim().charAt(0) || username.substring(0, 2)).toLocaleUpperCase();
    var title = ((firstName || '') + " " + (lastName || '')).trim() || username;
    var title_container = title + ' container';
    var backgroundColor = (0, react_1.useMemo)(function () {
        var colorId = username.split('').reduce(function (s, l) { return s + l.charCodeAt(0); }, 0);
        var colors = [
            theme.colorAlternative.green120,
            theme.colorAlternative.darkCyan120,
            theme.colorAlternative.forestGreen120,
            theme.colorAlternative.oliveGreen120,
            theme.colorAlternative.blue120,
            theme.colorAlternative.darkBlue120,
            theme.colorAlternative.hotPink120,
            theme.colorAlternative.red120,
            theme.colorAlternative.coralRed120,
            theme.colorAlternative.yellow120,
            theme.colorAlternative.orange120,
            theme.colorAlternative.chocolate120,
        ];
        return colors[colorId % colors.length];
    }, [theme, username]);
    var style = avatarUrl ? { backgroundImage: "url(" + avatarUrl + ")" } : { backgroundColor: backgroundColor };
    return (react_1.default.createElement(AvatarContainer, { size: size, selected: selected, title: title_container },
        react_1.default.createElement(AvatarImage, __assign({ size: size, disabled: disabled }, rest, { style: style, title: title }), avatarUrl ? '' : fallback)));
};
exports.Avatar = Avatar;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10;
//# sourceMappingURL=Avatar.js.map