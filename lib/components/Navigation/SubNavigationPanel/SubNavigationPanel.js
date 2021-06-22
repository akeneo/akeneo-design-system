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
exports.SubNavigationPanel = void 0;
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var hooks_1 = require("../../../hooks");
var icons_1 = require("../../../icons");
var theme_1 = require("../../../theme");
var Panel = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background-color: ", ";\n  border-right: 1px solid ", ";\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  max-width: ", ";\n  transition: max-width 0.3s ease-in-out;\n"], ["\n  background-color: ", ";\n  border-right: 1px solid ", ";\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  max-width: ", ";\n  transition: max-width 0.3s ease-in-out;\n"])), theme_1.getColor('grey', 20), theme_1.getColor('grey', 80), function (_a) {
    var isOpen = _a.isOpen;
    return (isOpen ? '280px' : '40px');
});
var PanelContent = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  flex-grow: 1;\n  opacity: ", ";\n  padding: 20px;\n  transition: opacity 0.3s;\n  transition-delay: 0.3s;\n"], ["\n  flex-grow: 1;\n  opacity: ", ";\n  padding: 20px;\n  transition: opacity 0.3s;\n  transition-delay: 0.3s;\n"])), function (_a) {
    var isOpen = _a.isOpen;
    return (isOpen ? 1 : 0);
});
var ToggleButton = styled_components_1.default.button(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  align-items: center;\n  background: none;\n  border: none;\n  border-top: 1px solid ", ";\n  cursor: pointer;\n  height: 54px;\n  margin: ", ";\n  padding: ", ";\n  transition: margin 0.3s ease-in-out;\n  text-align: left;\n\n  svg {\n    color: ", ";\n    width: 15px;\n  }\n"], ["\n  align-items: center;\n  background: none;\n  border: none;\n  border-top: 1px solid ", ";\n  cursor: pointer;\n  height: 54px;\n  margin: ", ";\n  padding: ", ";\n  transition: margin 0.3s ease-in-out;\n  text-align: left;\n\n  svg {\n    color: ", ";\n    width: 15px;\n  }\n"])), theme_1.getColor('grey', 80), function (_a) {
    var isOpen = _a.isOpen;
    return (isOpen ? '0 20px' : '0');
}, function (_a) {
    var isOpen = _a.isOpen;
    return (isOpen ? '0' : '0 12.5px');
}, theme_1.getColor('grey', 100));
var SubNavigationPanel = react_1.default.forwardRef(function (_a, forwardedRef) {
    var children = _a.children, _b = _a.isOpen, defaultIsOpen = _b === void 0 ? true : _b, rest = __rest(_a, ["children", "isOpen"]);
    var _c = hooks_1.useBooleanState(defaultIsOpen), isOpen = _c[0], open = _c[1], close = _c[2];
    return (react_1.default.createElement(Panel, __assign({ ref: forwardedRef, isOpen: isOpen }, rest),
        react_1.default.createElement(PanelContent, { isOpen: isOpen }, isOpen && children),
        react_1.default.createElement(ToggleButton, { isOpen: isOpen, onClick: function () { return (isOpen ? close() : open()); }, title: isOpen ? 'Close' : 'Open' }, isOpen ? react_1.default.createElement(icons_1.PanelCloseIcon, null) : react_1.default.createElement(icons_1.PanelOpenIcon, null))));
});
exports.SubNavigationPanel = SubNavigationPanel;
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=SubNavigationPanel.js.map