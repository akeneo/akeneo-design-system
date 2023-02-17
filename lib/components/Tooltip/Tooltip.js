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
exports.Tooltip = void 0;
var react_1 = __importStar(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var icons_1 = require("../../icons");
var theme_1 = require("../../theme");
var hooks_1 = require("../../hooks");
var TooltipContainer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  height: ", "px;\n"], ["\n  position: relative;\n  height: ", "px;\n"])), function (_a) {
    var size = _a.size;
    return size;
});
var TooltipIcon = (0, styled_components_1.default)(icons_1.HelpPlainIcon)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  margin: 5px;\n"], ["\n  margin: 5px;\n"])));
var TooltipContent = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  position: absolute;\n  border-radius: 4px;\n  left: 50%;\n  padding: 10px;\n  width: ", "px;\n  color: ", ";\n  background: ", ";\n  border: 1px solid ", ";\n  font-size: ", ";\n  line-height: 1;\n  text-transform: none;\n  z-index: ", ";\n  box-shadow: 0 0 16px rgba(89, 146, 199, 0.25);\n\n  ", "\n"], ["\n  position: absolute;\n  border-radius: 4px;\n  left: 50%;\n  padding: 10px;\n  width: ", "px;\n  color: ", ";\n  background: ", ";\n  border: 1px solid ", ";\n  font-size: ", ";\n  line-height: 1;\n  text-transform: none;\n  z-index: ", ";\n  box-shadow: 0 0 16px rgba(89, 146, 199, 0.25);\n\n  ", "\n"])), function (_a) {
    var width = _a.width;
    return width;
}, (0, theme_1.getColor)('grey', 120), (0, theme_1.getColor)('blue', 10), (0, theme_1.getColor)('blue', 40), (0, theme_1.getFontSize)('default'), function (_a) {
    var zIndex = _a.zIndex;
    return zIndex;
}, function (_a) {
    var direction = _a.direction;
    switch (direction) {
        case 'bottom':
            return "\n                top: calc(100%);\n                transform: translateX(-50%);\n              ";
        case 'left':
            return "\n                left: auto;\n                top: 50%;\n                right: calc(100%);\n                transform: translateY(-50%);\n              ";
        case 'right':
            return "\n                top: 50%;\n                left: calc(100%);\n                transform: translateY(-50%);\n              ";
        default:
            return "\n                bottom: calc(100%);\n                transform: translateX(-50%);\n              ";
    }
});
var Tooltip = (0, react_1.forwardRef)(function (_a, forwardedRef) {
    var _b = _a.direction, direction = _b === void 0 ? 'top' : _b, _c = _a.zIndex, zIndex = _c === void 0 ? 100 : _c, _d = _a.iconSize, iconSize = _d === void 0 ? 24 : _d, _e = _a.width, width = _e === void 0 ? 200 : _e, children = _a.children, rest = __rest(_a, ["direction", "zIndex", "iconSize", "width", "children"]);
    var _f = (0, react_1.useState)(false), visible = _f[0], setVisible = _f[1];
    var showTooltip = function () { return setVisible(true); };
    var hideTooltip = function () { return setVisible(false); };
    var theme = (0, hooks_1.useTheme)();
    return (react_1.default.createElement(TooltipContainer, __assign({ ref: forwardedRef }, rest, { size: iconSize, onMouseEnter: showTooltip, onMouseLeave: hideTooltip }),
        react_1.default.createElement(TooltipIcon, { size: iconSize, color: theme.color.blue100 }),
        visible && (react_1.default.createElement(TooltipContent, { direction: direction, zIndex: zIndex, width: width }, children))));
});
exports.Tooltip = Tooltip;
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=Tooltip.js.map