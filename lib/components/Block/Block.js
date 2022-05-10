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
exports.Block = void 0;
var react_1 = __importStar(require("react"));
var styled_components_1 = __importStar(require("styled-components"));
var theme_1 = require("../../theme");
var icons_1 = require("../../icons");
var IconButton_1 = require("../IconButton/IconButton");
var ANIMATION_DURATION = 100;
var ActionsContainer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  column-gap: 10px;\n  justify-content: space-between;\n"], ["\n  display: flex;\n  align-items: center;\n  column-gap: 10px;\n  justify-content: space-between;\n"])));
var BlockTitle = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  min-height: 24px;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  min-height: 24px;\n"])));
var BlockContent = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  overflow-wrap: break-word;\n  white-space: break-spaces;\n  color: ", ";\n  margin-top: ", "px;\n  ", "\n"], ["\n  overflow-wrap: break-word;\n  white-space: break-spaces;\n  color: ", ";\n  margin-top: ", "px;\n  ", "\n"])), (0, theme_1.getColor)('grey', 140), function (_a) {
    var $height = _a.$height, isCollapsable = _a.isCollapsable;
    return (0 === $height && isCollapsable ? 0 : 5);
}, function (_a) {
    var isCollapsable = _a.isCollapsable, $height = _a.$height, $overflow = _a.$overflow, shouldAnimate = _a.shouldAnimate;
    return isCollapsable && (0, styled_components_1.css)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n      max-height: ", "px;\n      overflow: ", ";\n      ", "\n    "], ["\n      max-height: ", "px;\n      overflow: ", ";\n      ", "\n    "])), $height, $overflow, shouldAnimate && (0, styled_components_1.css)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n        transition: all ", "ms ease-in-out;\n        transition-property: max-height, margin-top;\n      "], ["\n        transition: all ", "ms ease-in-out;\n        transition-property: max-height, margin-top;\n      "])), ANIMATION_DURATION));
});
var Container = styled_components_1.default.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  box-sizing: border-box;\n  padding: 10px 15px;\n  border-style: solid;\n  border-width: 1px;\n  border-radius: 2px;\n  display: flex;\n  flex-direction: column;\n  font-family: inherit;\n  font-size: ", ";\n  font-weight: 400;\n\n  background-color: ", ";\n  border-color: ", ";\n  color: ", ";\n\n  &:hover {\n    background-color: ", ";\n  }\n"], ["\n  box-sizing: border-box;\n  padding: 10px 15px;\n  border-style: solid;\n  border-width: 1px;\n  border-radius: 2px;\n  display: flex;\n  flex-direction: column;\n  font-family: inherit;\n  font-size: ", ";\n  font-weight: 400;\n\n  background-color: ", ";\n  border-color: ", ";\n  color: ", ";\n\n  &:hover {\n    background-color: ", ";\n  }\n"])), (0, theme_1.getFontSize)('default'), (0, theme_1.getColor)('white'), (0, theme_1.getColor)('grey', 80), (0, theme_1.getColor)('grey', 140), (0, theme_1.getColor)('grey', 20));
var Block = react_1.default.forwardRef(function (_a, forwardedRef) {
    var title = _a.title, actions = _a.actions, ariaDescribedBy = _a.ariaDescribedBy, ariaLabel = _a.ariaLabel, ariaLabelledBy = _a.ariaLabelledBy, isOpen = _a.isOpen, collapseButtonLabel = _a.collapseButtonLabel, onCollapse = _a.onCollapse, children = _a.children, rest = __rest(_a, ["title", "actions", "ariaDescribedBy", "ariaLabel", "ariaLabelledBy", "isOpen", "collapseButtonLabel", "onCollapse", "children"]);
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
    return (react_1.default.createElement(Container, __assign({ "aria-describedby": ariaDescribedBy, "aria-label": ariaLabel, "aria-labelledby": ariaLabelledBy, ref: forwardedRef }, rest),
        react_1.default.createElement(BlockTitle, null,
            title,
            react_1.default.createElement(ActionsContainer, null,
                actions,
                !isCollapsable ? null : (react_1.default.createElement(IconButton_1.IconButton, { icon: isOpen ? react_1.default.createElement(icons_1.ArrowUpIcon, null) : react_1.default.createElement(icons_1.ArrowDownIcon, null), title: collapseButtonLabel, level: "tertiary", ghost: true, size: "small", onClick: handleCollapse })))),
        !isCollapsable ? null : (react_1.default.createElement(BlockContent, { ref: contentRef, isCollapsable: isCollapsable, "$overflow": shouldAnimate || !isOpen ? 'hidden' : 'inherit', "$height": true === isOpen ? contentHeight : 0, shouldAnimate: shouldAnimate, "aria-hidden": !isOpen }, children))));
});
exports.Block = Block;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
//# sourceMappingURL=Block.js.map