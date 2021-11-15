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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TabBar = void 0;
var react_1 = __importStar(require("react"));
var styled_components_1 = __importStar(require("styled-components"));
var theme_1 = require("../../theme");
var components_1 = require("../../components");
var icons_1 = require("../../icons");
var hooks_1 = require("../../hooks");
var shared_1 = require("../../shared");
var Container = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  border-bottom: 1px solid ", ";\n  background: ", ";\n\n  ", "\n"], ["\n  display: flex;\n  align-items: center;\n  border-bottom: 1px solid ", ";\n  background: ", ";\n\n  ", "\n"])), (0, theme_1.getColor)('grey', 80), (0, theme_1.getColor)('white'), function (_a) {
    var sticky = _a.sticky;
    return undefined !== sticky && (0, styled_components_1.css)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      position: sticky;\n      top: ", "px;\n      background-color: ", ";\n      z-index: 9;\n    "], ["\n      position: sticky;\n      top: ", "px;\n      background-color: ", ";\n      z-index: 9;\n    "])), sticky, (0, theme_1.getColor)('white'));
});
var TabBarContainer = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  gap: 10px;\n  flex-grow: 1;\n  height: 44px;\n  flex-wrap: wrap;\n  overflow: hidden;\n  margin-bottom: -1px;\n"], ["\n  display: flex;\n  gap: 10px;\n  flex-grow: 1;\n  height: 44px;\n  flex-wrap: wrap;\n  overflow: hidden;\n  margin-bottom: -1px;\n"])));
var TabContainer = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding-right: 40px;\n  color: ", ";\n  border-bottom: 3px solid ", ";\n  font-size: ", ";\n  cursor: pointer;\n  white-space: nowrap;\n  height: 100%;\n  box-sizing: border-box;\n\n  &:hover {\n    color: ", ";\n    border-bottom: 3px solid ", ";\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding-right: 40px;\n  color: ", ";\n  border-bottom: 3px solid ", ";\n  font-size: ", ";\n  cursor: pointer;\n  white-space: nowrap;\n  height: 100%;\n  box-sizing: border-box;\n\n  &:hover {\n    color: ", ";\n    border-bottom: 3px solid ", ";\n  }\n"])), function (_a) {
    var isActive = _a.isActive;
    return (isActive ? (0, theme_1.getColor)('brand', 100) : (0, theme_1.getColor)('grey', 100));
}, function (_a) {
    var isActive = _a.isActive;
    return (isActive ? (0, theme_1.getColor)('brand', 100) : 'transparent');
}, (0, theme_1.getFontSize)('big'), (0, theme_1.getColor)('brand', 100), (0, theme_1.getColor)('brand', 100));
var HiddenTabsDropdown = (0, styled_components_1.default)(components_1.Dropdown)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  border-bottom: 3px solid ", ";\n  margin-bottom: -1px;\n  height: 44px;\n  box-sizing: border-box;\n  align-items: center;\n\n  &:hover {\n    color: ", ";\n    border-bottom: 3px solid ", ";\n  }\n"], ["\n  border-bottom: 3px solid ", ";\n  margin-bottom: -1px;\n  height: 44px;\n  box-sizing: border-box;\n  align-items: center;\n\n  &:hover {\n    color: ", ";\n    border-bottom: 3px solid ", ";\n  }\n"])), function (_a) {
    var isActive = _a.isActive;
    return (isActive ? (0, theme_1.getColor)('brand', 100) : 'transparent');
}, (0, theme_1.getColor)('brand', 100), (0, theme_1.getColor)('brand', 100));
var Tab = function (_a) {
    var children = _a.children, onClick = _a.onClick, isActive = _a.isActive, parentRef = _a.parentRef, onVisibilityChange = _a.onVisibilityChange, rest = __rest(_a, ["children", "onClick", "isActive", "parentRef", "onVisibilityChange"]);
    var ref = (0, react_1.useRef)(null);
    var handleKeyDown = function (event) {
        if (event.key === shared_1.Key.Space || event.key === shared_1.Key.Enter) {
            onClick === null || onClick === void 0 ? void 0 : onClick();
        }
    };
    (0, react_1.useEffect)(function () {
        if (undefined === parentRef) {
            throw new Error('TabBar.Tab can not be used outside TabBar');
        }
        var tabElement = ref.current;
        var tabBarElement = parentRef.current;
        if (null === tabElement)
            return;
        var options = {
            root: tabBarElement,
            rootMargin: '0px',
            threshold: 0,
        };
        var observer = new IntersectionObserver(function (entries) {
            var lastEntry = entries[entries.length - 1];
            onVisibilityChange === null || onVisibilityChange === void 0 ? void 0 : onVisibilityChange(lastEntry.isIntersecting);
        }, options);
        observer.observe(tabElement);
        return function () {
            observer.unobserve(tabElement);
        };
    }, []);
    return (react_1.default.createElement(TabContainer, __assign({ onKeyDown: handleKeyDown, onClick: onClick, ref: ref, tabIndex: 0, role: "tab", "aria-selected": isActive, isActive: isActive }, rest), children));
};
var TabBar = function (_a) {
    var moreButtonTitle = _a.moreButtonTitle, children = _a.children, rest = __rest(_a, ["moreButtonTitle", "children"]);
    var ref = (0, react_1.useRef)(null);
    var _b = (0, react_1.useState)([]), hiddenElements = _b[0], setHiddenElements = _b[1];
    var _c = (0, hooks_1.useBooleanState)(), isOpen = _c[0], open = _c[1], close = _c[2];
    var hiddenTabs = [];
    var decoratedChildren = react_1.Children.map(children, function (child, index) {
        if (!child) {
            return;
        }
        if (!(0, react_1.isValidElement)(child)) {
            throw new Error('TabBar only accepts TabBar.Tab as children');
        }
        var key = child.key !== null ? child.key : index;
        var isHidden = hiddenElements.includes(String(key));
        if (isHidden) {
            hiddenTabs.push(child);
        }
        return (0, react_1.cloneElement)(child, {
            parentRef: ref,
            tabIndex: isHidden ? -1 : 0,
            onVisibilityChange: function (isVisible) {
                setHiddenElements(function (previousHiddenElements) {
                    return isVisible
                        ? previousHiddenElements.filter(function (hiddenElement) { return hiddenElement !== String(key); })
                        : __spreadArray([String(key)], previousHiddenElements, true);
                });
            },
        });
    });
    var activeTabIsHidden = hiddenTabs.find(function (child) { return child.props.isActive; }) !== undefined;
    return (react_1.default.createElement(Container, __assign({}, rest),
        react_1.default.createElement(TabBarContainer, { ref: ref, role: "tablist" }, decoratedChildren),
        0 < hiddenTabs.length && (react_1.default.createElement(HiddenTabsDropdown, { isActive: activeTabIsHidden },
            react_1.default.createElement(components_1.IconButton, { level: "tertiary", ghost: "borderless", icon: react_1.default.createElement(icons_1.MoreIcon, null), title: moreButtonTitle, onClick: open }),
            isOpen && (react_1.default.createElement(components_1.Dropdown.Overlay, { verticalPosition: "down", onClose: close },
                react_1.default.createElement(components_1.Dropdown.ItemCollection, null, hiddenTabs.map(function (child, index) {
                    var handleClick = function () {
                        var _a, _b;
                        close();
                        (_b = (_a = child.props).onClick) === null || _b === void 0 ? void 0 : _b.call(_a);
                    };
                    return (react_1.default.createElement(components_1.Dropdown.Item, { key: index, onClick: handleClick, isActive: child.props.isActive }, child.props.children));
                }))))))));
};
exports.TabBar = TabBar;
TabBar.Tab = Tab;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
//# sourceMappingURL=TabBar.js.map