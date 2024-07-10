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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubNavigationPanel = void 0;
var react_1 = __importStar(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var icons_1 = require("../../../icons");
var theme_1 = require("../../../theme");
var Container = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background-color: ", ";\n  border-right: 1px solid ", ";\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  transition: width 0.3s linear;\n  width: ", ";\n"], ["\n  background-color: ", ";\n  border-right: 1px solid ", ";\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  transition: width 0.3s linear;\n  width: ", ";\n"])), (0, theme_1.getColor)('grey', 20), (0, theme_1.getColor)('grey', 80), function (_a) {
    var isOpen = _a.isOpen;
    return (isOpen ? '280px' : '40px');
});
var Content = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n  overflow-x: hidden;\n  overflow-y: auto;\n  opacity: ", ";\n  transition: ", ";\n  padding: ", ";\n"], ["\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n  overflow-x: hidden;\n  overflow-y: auto;\n  opacity: ", ";\n  transition: ", ";\n  padding: ", ";\n"])), function (_a) {
    var isOpen = _a.isOpen;
    return (isOpen ? '1' : '0');
}, function (_a) {
    var isOpen = _a.isOpen;
    return (isOpen ? 'opacity 300ms linear 300ms' : 'none');
}, function (_a) {
    var noPadding = _a.noPadding;
    return (noPadding ? '0' : '30px');
});
var ToggleButton = styled_components_1.default.button(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  align-items: center;\n  background: none;\n  border: none;\n  border-top: 1px solid ", ";\n  box-sizing: border-box;\n  cursor: pointer;\n  display: flex;\n  flex: 0 0 auto;\n  height: 54px;\n  padding: 0;\n  padding-left: 12.5px;\n\n  svg {\n    color: ", ";\n    width: 15px;\n  }\n"], ["\n  align-items: center;\n  background: none;\n  border: none;\n  border-top: 1px solid ", ";\n  box-sizing: border-box;\n  cursor: pointer;\n  display: flex;\n  flex: 0 0 auto;\n  height: 54px;\n  padding: 0;\n  padding-left: 12.5px;\n\n  svg {\n    color: ", ";\n    width: 15px;\n  }\n"])), (0, theme_1.getColor)('grey', 80), (0, theme_1.getColor)('grey', 100));
var Collapsed = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  padding: 10px 5px;\n"], ["\n  padding: 10px 5px;\n"])));
var SubNavigationPanel = react_1.default.forwardRef(function (_a, forwardedRef) {
    var children = _a.children, _b = _a.isOpen, isOpen = _b === void 0 ? true : _b, open = _a.open, close = _a.close, _c = _a.closeTitle, closeTitle = _c === void 0 ? '' : _c, _d = _a.openTitle, openTitle = _d === void 0 ? '' : _d, _e = _a.noPadding, noPadding = _e === void 0 ? false : _e, rest = __rest(_a, ["children", "isOpen", "open", "close", "closeTitle", "openTitle", "noPadding"]);
    var collapsedElements = [];
    var contentElements = [];
    react_1.default.Children.forEach(children, function (child) {
        if (react_1.default.isValidElement(child) && child.type === Collapsed) {
            collapsedElements.push(child);
        }
        else {
            contentElements.push(child);
        }
    });
    var _f = react_1.default.useState(isOpen), isOpenTransition = _f[0], setIsOpenTransition = _f[1];
    (0, react_1.useLayoutEffect)(function () {
        setIsOpenTransition(isOpen);
    }, [isOpen]);
    return (react_1.default.createElement(Container, __assign({ ref: forwardedRef, isOpen: isOpen }, rest),
        !isOpen && collapsedElements,
        react_1.default.createElement(Content, { isOpen: isOpenTransition, noPadding: noPadding }, isOpen && contentElements),
        react_1.default.createElement(ToggleButton, { onClick: function () { return (isOpen ? close() : open()); }, title: isOpen ? closeTitle : openTitle, "data-testid": "open-subnavigation-button" }, isOpen ? react_1.default.createElement(icons_1.PanelCloseIcon, null) : react_1.default.createElement(icons_1.PanelOpenIcon, null))));
});
exports.SubNavigationPanel = SubNavigationPanel;
SubNavigationPanel.displayName = 'SubNavigationPanel';
Collapsed.displayName = 'SubNavigationPanel.Collapsed';
SubNavigationPanel.Collapsed = Collapsed;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=SubNavigationPanel.js.map