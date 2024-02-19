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
var react_dom_1 = require("react-dom");
var styled_components_1 = __importDefault(require("styled-components"));
var icons_1 = require("../../icons");
var theme_1 = require("../../theme");
var hooks_1 = require("../../hooks");
var TooltipIconMargin = 5;
var TooltipContainer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  height: ", "px;\n  width: ", "px;\n  display: inline-block;\n"], ["\n  position: relative;\n  height: ", "px;\n  width: ", "px;\n  display: inline-block;\n"])), function (_a) {
    var size = _a.size;
    return size + TooltipIconMargin * 2;
}, function (_a) {
    var size = _a.size;
    return size + TooltipIconMargin * 2;
});
var TooltipIcon = (0, styled_components_1.default)(icons_1.HelpPlainIcon)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  margin: ", "px;\n  color: ", ";\n"], ["\n  margin: ", "px;\n  color: ", ";\n"])), TooltipIconMargin, (0, theme_1.getColor)('blue', 100));
var TooltipContent = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  ", "\n  position: fixed;\n  z-index: 1901;\n  border-radius: 4px;\n  padding: 10px;\n  width: ", "px;\n  color: ", ";\n  background: ", ";\n  border: 1px solid ", ";\n  font-size: ", ";\n  line-height: 1;\n  text-transform: none;\n  box-shadow: 0 0 16px rgba(89, 146, 199, 0.25);\n  top: ", "px;\n  left: ", "px;\n  opacity: ", ";\n"], ["\n  ", "\n  position: fixed;\n  z-index: 1901;\n  border-radius: 4px;\n  padding: 10px;\n  width: ", "px;\n  color: ", ";\n  background: ", ";\n  border: 1px solid ", ";\n  font-size: ", ";\n  line-height: 1;\n  text-transform: none;\n  box-shadow: 0 0 16px rgba(89, 146, 199, 0.25);\n  top: ", "px;\n  left: ", "px;\n  opacity: ", ";\n"])), theme_1.CommonStyle, function (_a) {
    var width = _a.width;
    return width;
}, (0, theme_1.getColor)('grey', 120), (0, theme_1.getColor)('blue', 10), (0, theme_1.getColor)('blue', 40), (0, theme_1.getFontSize)('default'), function (_a) {
    var top = _a.top;
    return top;
}, function (_a) {
    var left = _a.left;
    return left;
}, function (_a) {
    var top = _a.top, left = _a.left;
    return (-1 === top && -1 === left ? 0 : 1);
});
var TooltipTitle = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  color: ", ";\n  font-weight: 700;\n  margin-bottom: 5px;\n"], ["\n  color: ", ";\n  font-weight: 700;\n  margin-bottom: 5px;\n"])), (0, theme_1.getColor)('blue', 120));
var computePosition = function (direction, parentRef, elementRef) {
    if (undefined === parentRef ||
        undefined === elementRef ||
        null === parentRef.current ||
        null === elementRef.current) {
        return [-1, -1];
    }
    var _a = parentRef.current.getBoundingClientRect(), parentTop = _a.top, parentLeft = _a.left, parentWidth = _a.width, parentHeight = _a.height;
    var _b = elementRef.current.getBoundingClientRect(), elementWidth = _b.width, elementHeight = _b.height;
    var relativeCenterTop = parentTop + parentHeight / 2 - elementHeight / 2;
    var relativeCenterLeft = parentLeft + parentWidth / 2 - elementWidth / 2;
    switch (direction) {
        default:
        case 'top':
            return [parentTop - elementHeight, relativeCenterLeft];
        case 'right':
            return [relativeCenterTop, parentLeft + parentWidth];
        case 'bottom':
            return [parentTop + parentHeight, relativeCenterLeft];
        case 'left':
            return [relativeCenterTop, parentLeft - elementWidth];
    }
};
var Tooltip = function (_a) {
    var _b = _a.direction, direction = _b === void 0 ? 'top' : _b, _c = _a.iconSize, iconSize = _c === void 0 ? 24 : _c, _d = _a.width, width = _d === void 0 ? 200 : _d, children = _a.children, rest = __rest(_a, ["direction", "iconSize", "width", "children"]);
    var _e = (0, hooks_1.useBooleanState)(false), isVisible = _e[0], showTooltip = _e[1], hideTooltip = _e[2];
    var portalNode = document.createElement('div');
    portalNode.setAttribute('id', 'tooltip-root');
    var portalRef = (0, react_1.useRef)(portalNode);
    var parentRef = (0, react_1.useRef)(null);
    var contentRef = (0, react_1.useRef)(null);
    var _f = (0, react_1.useState)([0, 0]), position = _f[0], setPosition = _f[1];
    (0, react_1.useEffect)(function () {
        document.body.appendChild(portalRef.current);
        return function () {
            document.body.removeChild(portalRef.current);
        };
    }, []);
    (0, react_1.useEffect)(function () {
        setPosition(computePosition(direction, parentRef, contentRef));
    }, [children, direction, parentRef, contentRef, isVisible]);
    var top = position[0], left = position[1];
    return (react_1.default.createElement(TooltipContainer, __assign({ ref: parentRef, role: "tooltip" }, rest, { size: iconSize, onMouseEnter: showTooltip, onMouseLeave: hideTooltip }),
        react_1.default.createElement(TooltipIcon, { size: iconSize }),
        isVisible &&
            (0, react_dom_1.createPortal)(react_1.default.createElement(TooltipContent, { ref: contentRef, direction: direction, width: width, top: top, left: left }, children), portalRef.current)));
};
exports.Tooltip = Tooltip;
Tooltip.Title = TooltipTitle;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=Tooltip.js.map