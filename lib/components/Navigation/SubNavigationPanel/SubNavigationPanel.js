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
exports.SubNavigationPanel = void 0;
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importStar(require("styled-components"));
var icons_1 = require("../../../icons");
var theme_1 = require("../../../theme");
var collapsableStyles = styled_components_1.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  opacity: ", ";\n  transition: opacity 0.3s;\n  transition-delay: 0.3s;\n\n  position: relative;\n  z-index: 1;\n  ", "\n"], ["\n  opacity: ", ";\n  transition: opacity 0.3s;\n  transition-delay: 0.3s;\n\n  position: relative;\n  z-index: 1;\n  ",
    "\n"])), function (_a) {
    var isOpen = _a.isOpen;
    return (isOpen ? 1 : 0);
}, function (_a) {
    var isOpen = _a.isOpen;
    return !isOpen && styled_components_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      position: absolute;\n      z-index: 0;\n    "], ["\n      position: absolute;\n      z-index: 0;\n    "])));
});
var Panel = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  height: calc(100% - 54px);\n  width: 100%;\n  position: absolute;\n  overflow-y: ", ";\n  overflow-x: hidden;\n"], ["\n  display: flex;\n  flex-direction: column;\n  height: calc(100% - 54px);\n  width: 100%;\n  position: absolute;\n  overflow-y: ", ";\n  overflow-x: hidden;\n"])), function (_a) {
    var isOpen = _a.isOpen;
    return (isOpen ? 'auto' : 'hidden');
});
var PanelContent = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  box-sizing: border-box;\n  flex-grow: 1;\n  width: 100%;\n  padding: ", ";\n  ", "\n"], ["\n  box-sizing: border-box;\n  flex-grow: 1;\n  width: 100%;\n  padding: ", ";\n  ", "\n"])), function (_a) {
    var isOpen = _a.isOpen;
    return (isOpen ? '30px' : '10px 5px');
}, collapsableStyles);
var ToggleButton = styled_components_1.default.button(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  align-items: center;\n  background: none;\n  border: none;\n  border-top: 1px solid ", ";\n  cursor: pointer;\n  height: 54px;\n  margin: ", ";\n  padding: ", ";\n  transition: margin 0.3s ease-in-out, padding 0.3s ease-in-out;\n  text-align: left;\n  position: absolute;\n  bottom: 0;\n  width: ", ";\n\n  svg {\n    color: ", ";\n    width: 15px;\n  }\n"], ["\n  align-items: center;\n  background: none;\n  border: none;\n  border-top: 1px solid ", ";\n  cursor: pointer;\n  height: 54px;\n  margin: ", ";\n  padding: ", ";\n  transition: margin 0.3s ease-in-out, padding 0.3s ease-in-out;\n  text-align: left;\n  position: absolute;\n  bottom: 0;\n  width: ", ";\n\n  svg {\n    color: ", ";\n    width: 15px;\n  }\n"])), theme_1.getColor('grey', 80), function (_a) {
    var isOpen = _a.isOpen;
    return (isOpen ? '0 20px' : '0');
}, function (_a) {
    var isOpen = _a.isOpen;
    return (isOpen ? '0' : '0 12.5px');
}, function (_a) {
    var isOpen = _a.isOpen;
    return (isOpen ? '240px' : '40px');
}, theme_1.getColor('grey', 100));
var Container = styled_components_1.default.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  width: ", ";\n  transition: width 0.3s linear;\n  position: relative;\n  order: -10;\n  background-color: ", ";\n  border-right: 1px solid ", ";\n  flex-shrink: 0;\n  height: 100%;\n  z-index: 802;\n  overflow: hidden;\n"], ["\n  width: ", ";\n  transition: width 0.3s linear;\n  position: relative;\n  order: -10;\n  background-color: ", ";\n  border-right: 1px solid ", ";\n  flex-shrink: 0;\n  height: 100%;\n  z-index: 802;\n  overflow: hidden;\n"])), function (_a) {
    var isOpen = _a.isOpen;
    return (isOpen ? '280px' : '40px');
}, theme_1.getColor('grey', 20), theme_1.getColor('grey', 80));
var Collapsed = styled_components_1.default.div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  flex-grow: 1;\n  padding: 10px 5px;\n  ", "\n"], ["\n  flex-grow: 1;\n  padding: 10px 5px;\n  ", "\n"])), collapsableStyles);
Collapsed.displayName = 'Collapsed';
Collapsed.defaultProps = {
    isOpen: false,
};
var SubNavigationPanel = react_1.default.forwardRef(function (_a, forwardedRef) {
    var children = _a.children, _b = _a.isOpen, isOpen = _b === void 0 ? true : _b, open = _a.open, close = _a.close, _c = _a.closeTitle, closeTitle = _c === void 0 ? '' : _c, _d = _a.openTitle, openTitle = _d === void 0 ? '' : _d, rest = __rest(_a, ["children", "isOpen", "open", "close", "closeTitle", "openTitle"]);
    var contentChildren = [];
    var collapsedContent = null;
    react_1.default.Children.forEach(children, function (child) {
        if (react_1.default.isValidElement(child) && child.type === Collapsed) {
            collapsedContent = react_1.default.cloneElement(child, { isOpen: !isOpen });
            return;
        }
        contentChildren.push(child);
    });
    return (react_1.default.createElement(Container, __assign({ ref: forwardedRef, isOpen: isOpen }, rest),
        react_1.default.createElement(Panel, { isOpen: isOpen },
            collapsedContent,
            react_1.default.createElement(PanelContent, { isOpen: isOpen }, isOpen && contentChildren)),
        react_1.default.createElement(ToggleButton, { isOpen: isOpen, onClick: function () { return (isOpen ? close() : open()); }, title: isOpen ? closeTitle : openTitle, "data-testid": "open-subnavigation-button" }, isOpen ? react_1.default.createElement(icons_1.PanelCloseIcon, null) : react_1.default.createElement(icons_1.PanelOpenIcon, null))));
});
exports.SubNavigationPanel = SubNavigationPanel;
SubNavigationPanel.Collapsed = Collapsed;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
//# sourceMappingURL=SubNavigationPanel.js.map