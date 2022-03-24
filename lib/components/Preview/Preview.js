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
exports.Preview = void 0;
var react_1 = __importStar(require("react"));
var styled_components_1 = __importStar(require("styled-components"));
var theme_1 = require("../../theme");
var IconButton_1 = require("../IconButton/IconButton");
var icons_1 = require("../../icons");
var ANIMATION_DURATION = 100;
var PreviewContainer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  padding: 10px 15px;\n  background: ", ";\n  border-radius: 3px;\n  border: 1px solid ", ";\n  display: flex;\n  flex-direction: column;\n"], ["\n  padding: 10px 15px;\n  background: ", ";\n  border-radius: 3px;\n  border: 1px solid ", ";\n  display: flex;\n  flex-direction: column;\n"])), (0, theme_1.getColor)('blue', 10), (0, theme_1.getColor)('blue', 40));
var PreviewTitle = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  text-transform: uppercase;\n  font-size: ", ";\n  color: ", ";\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  text-transform: uppercase;\n  font-size: ", ";\n  color: ", ";\n"])), (0, theme_1.getFontSize)('small'), (0, theme_1.getColor)('blue', 100));
var PreviewList = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  overflow-wrap: break-word;\n  white-space: break-spaces;\n  color: ", ";\n  margin-top: ", "px;\n  ", "\n"], ["\n  overflow-wrap: break-word;\n  white-space: break-spaces;\n  color: ", ";\n  margin-top: ", "px;\n  ", "\n"])), (0, theme_1.getColor)('grey', 140), function (_a) {
    var $height = _a.$height, isCollapsable = _a.isCollapsable;
    return (0 === $height && isCollapsable ? 0 : 5);
}, function (_a) {
    var isCollapsable = _a.isCollapsable, $height = _a.$height, $overflow = _a.$overflow, shouldAnimate = _a.shouldAnimate;
    return isCollapsable && (0, styled_components_1.css)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n      max-height: ", "px;\n      overflow: ", ";\n      ", "\n    "], ["\n      max-height: ", "px;\n      overflow: ", ";\n      ", "\n    "])), $height, $overflow, shouldAnimate && (0, styled_components_1.css)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n        transition: all ", "ms ease-in-out;\n        transition-property: max-height, margin-top;\n      "], ["\n        transition: all ", "ms ease-in-out;\n        transition-property: max-height, margin-top;\n      "])), ANIMATION_DURATION));
});
var Highlight = styled_components_1.default.span(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  color: ", ";\n  font-weight: bold;\n"], ["\n  color: ", ";\n  font-weight: bold;\n"])), (0, theme_1.getColor)('brand', 100));
var ActionsContainer = styled_components_1.default.div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  opacity: 0;\n  display: flex;\n  align-items: center;\n  height: 0;\n\n  button:hover {\n    background: none !important;\n  }\n"], ["\n  opacity: 0;\n  display: flex;\n  align-items: center;\n  height: 0;\n\n  button:hover {\n    background: none !important;\n  }\n"])));
var RowContainer = styled_components_1.default.div(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin: 0 -4px;\n  padding: 4px;\n\n  &:hover {\n    background: ", ";\n\n    ", " {\n      opacity: 1;\n    }\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin: 0 -4px;\n  padding: 4px;\n\n  &:hover {\n    background: ", ";\n\n    ", " {\n      opacity: 1;\n    }\n  }\n"])), (0, theme_1.getColor)('blue', 20), ActionsContainer);
var Row = function (_a) {
    var action = _a.action, children = _a.children;
    return (react_1.default.createElement(RowContainer, null,
        children,
        action && (react_1.default.createElement(ActionsContainer, null, (0, react_1.isValidElement)(action) && action.type === IconButton_1.IconButton
            ? (0, react_1.cloneElement)(action, {
                level: 'tertiary',
                ghost: 'borderless',
                size: 'small',
            })
            : action))));
};
var Preview = function (_a) {
    var title = _a.title, isOpen = _a.isOpen, collapseButtonLabel = _a.collapseButtonLabel, onCollapse = _a.onCollapse, children = _a.children, rest = __rest(_a, ["title", "isOpen", "collapseButtonLabel", "onCollapse", "children"]);
    var _b = (0, react_1.useState)(0), contentHeight = _b[0], setContentHeight = _b[1];
    var _c = (0, react_1.useState)(false), shouldAnimate = _c[0], setShouldAnimate = _c[1];
    var contentRef = (0, react_1.useRef)(null);
    var isCollapsable = undefined !== collapseButtonLabel && undefined !== onCollapse && undefined !== isOpen;
    var handleCollapse = function () { return onCollapse === null || onCollapse === void 0 ? void 0 : onCollapse(!isOpen); };
    (0, react_1.useEffect)(function () {
        if (!isCollapsable)
            return;
        setContentHeight(function (contentHeight) {
            var _a, _b;
            var scrollHeight = (_b = (_a = contentRef.current) === null || _a === void 0 ? void 0 : _a.scrollHeight) !== null && _b !== void 0 ? _b : 0;
            return 0 === scrollHeight ? contentHeight : scrollHeight;
        });
        var shouldAnimateTimeoutId = window.setTimeout(function () {
            setShouldAnimate(true);
        }, ANIMATION_DURATION);
        return function () {
            window.clearTimeout(shouldAnimateTimeoutId);
        };
    }, [children]);
    return (react_1.default.createElement(PreviewContainer, __assign({}, rest),
        react_1.default.createElement(PreviewTitle, { onClick: handleCollapse },
            title,
            isCollapsable && (react_1.default.createElement(IconButton_1.IconButton, { icon: isOpen ? react_1.default.createElement(icons_1.ArrowUpIcon, null) : react_1.default.createElement(icons_1.ArrowDownIcon, null), title: collapseButtonLabel, level: "tertiary", ghost: "borderless", size: "small" }))),
        react_1.default.createElement(PreviewList, { ref: contentRef, isCollapsable: isCollapsable, "$overflow": shouldAnimate || !isOpen ? 'hidden' : 'inherit', "$height": true === isOpen ? contentHeight : 0, shouldAnimate: shouldAnimate, "aria-hidden": !isOpen }, children)));
};
exports.Preview = Preview;
Highlight.displayName = 'Preview.Highlight';
Row.displayName = 'Preview.Row';
Preview.Highlight = Highlight;
Preview.Row = Row;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;
//# sourceMappingURL=Preview.js.map