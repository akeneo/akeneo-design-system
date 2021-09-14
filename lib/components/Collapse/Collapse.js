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
exports.Collapse = void 0;
var react_1 = __importStar(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var theme_1 = require("../../theme");
var components_1 = require("../../components");
var icons_1 = require("../../icons");
var ANIMATION_DURATION = 100;
var CollapseContainer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n  border: solid ", ";\n  border-width: 0 0 1px 0;\n\n  &:first-child {\n    border-width: 1px 0;\n  }\n"], ["\n  width: 100%;\n  border: solid ", ";\n  border-width: 0 0 1px 0;\n\n  &:first-child {\n    border-width: 1px 0;\n  }\n"])), theme_1.getColor('grey', 40));
var Content = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  max-height: ", "px;\n  overflow: ", ";\n  ", "\n  padding-bottom: ", "px;\n"], ["\n  max-height: ", "px;\n  overflow: ", ";\n  ",
    "\n  padding-bottom: ", "px;\n"])), function (_a) {
    var $height = _a.$height;
    return $height;
}, function (_a) {
    var $overflow = _a.$overflow;
    return $overflow;
}, function (_a) {
    var shouldAnimate = _a.shouldAnimate;
    return shouldAnimate &&
        "\n    transition: max-height " + ANIMATION_DURATION + "ms ease-in-out;\n  ";
}, function (_a) {
    var $height = _a.$height;
    return (0 === $height ? 0 : 10);
});
var LabelContainer = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  height: 44px;\n  padding-right: 2px; // To manage the outline of the collapse icon being cropped in case of overflow hidden\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n"], ["\n  height: 44px;\n  padding-right: 2px; // To manage the outline of the collapse icon being cropped in case of overflow hidden\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n"])));
var Label = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  flex: 1;\n  text-transform: uppercase;\n  color: ", ";\n  font-size: ", ";\n  display: flex;\n  align-items: center;\n  gap: 10px;\n"], ["\n  flex: 1;\n  text-transform: uppercase;\n  color: ", ";\n  font-size: ", ";\n  display: flex;\n  align-items: center;\n  gap: 10px;\n"])), theme_1.getColor('grey', 140), theme_1.getFontSize('small'));
var Collapse = react_1.default.forwardRef(function (_a, forwardedRef) {
    var label = _a.label, collapseButtonLabel = _a.collapseButtonLabel, isOpen = _a.isOpen, onCollapse = _a.onCollapse, children = _a.children, rest = __rest(_a, ["label", "collapseButtonLabel", "isOpen", "onCollapse", "children"]);
    var _b = react_1.useState(0), contentHeight = _b[0], setContentHeight = _b[1];
    var _c = react_1.useState(false), shouldAnimate = _c[0], setShouldAnimate = _c[1];
    var contentRef = react_1.useRef(null);
    var handleCollapse = function () { return onCollapse(!isOpen); };
    react_1.useEffect(function () {
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
    return (react_1.default.createElement(CollapseContainer, __assign({ ref: forwardedRef }, rest),
        react_1.default.createElement(LabelContainer, { onClick: handleCollapse },
            react_1.default.createElement(Label, null, label),
            react_1.default.createElement(components_1.IconButton, { size: "small", level: "tertiary", ghost: "borderless", title: collapseButtonLabel, icon: isOpen ? react_1.default.createElement(icons_1.CheckPartialIcon, null) : react_1.default.createElement(icons_1.PlusIcon, null) })),
        react_1.default.createElement(Content, { ref: contentRef, "$overflow": shouldAnimate || !isOpen ? 'hidden' : 'inherit', "$height": isOpen ? contentHeight : 0, shouldAnimate: shouldAnimate }, children)));
});
exports.Collapse = Collapse;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=Collapse.js.map