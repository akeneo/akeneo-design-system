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
exports.Overlay = void 0;
var react_1 = __importStar(require("react"));
var react_dom_1 = require("react-dom");
var styled_components_1 = __importDefault(require("styled-components"));
var shared_1 = require("../../../shared");
var hooks_1 = require("../../../hooks");
var theme_1 = require("../../../theme");
var BORDER_SHADOW_OFFSET = 2;
var Container = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", "\n  background: ", ";\n  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.3);\n  padding: 10px 0;\n  max-width: 400px;\n  min-width: 150px;\n  position: fixed;\n  opacity: ", ";\n  transition: opacity 0.15s ease-in-out;\n  z-index: 1901;\n  top: ", "px;\n  left: ", "px;\n"], ["\n  ", "\n  background: ", ";\n  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.3);\n  padding: 10px 0;\n  max-width: 400px;\n  min-width: 150px;\n  position: fixed;\n  opacity: ", ";\n  transition: opacity 0.15s ease-in-out;\n  z-index: 1901;\n  top: ", "px;\n  left: ", "px;\n"])), theme_1.CommonStyle, (0, theme_1.getColor)('white'), function (_a) {
    var visible = _a.visible;
    return (visible ? 1 : 0);
}, function (_a) {
    var top = _a.top;
    return top;
}, function (_a) {
    var left = _a.left;
    return left;
});
var Backdrop = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 1900;\n"], ["\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 1900;\n"])));
var getOverlayPosition = function (verticalPosition, horizontalPosition, dropdownOpenerVisible, parentRef, elementRef) {
    if (undefined === parentRef ||
        undefined === elementRef ||
        null === parentRef.current ||
        null === elementRef.current) {
        return [0, 0];
    }
    var parentRect = parentRef.current.getBoundingClientRect();
    var elementRect = elementRef.current.getBoundingClientRect();
    var top = 'up' === verticalPosition
        ? parentRect.bottom - elementRect.height + BORDER_SHADOW_OFFSET
        : parentRect.top - BORDER_SHADOW_OFFSET;
    if (dropdownOpenerVisible) {
        top = 'up' === verticalPosition ? parentRect.top - elementRect.height : parentRect.bottom + 1;
    }
    var left = 'left' === horizontalPosition ? parentRect.right - elementRect.width : parentRect.left;
    return [top, left];
};
var Overlay = function (_a) {
    var verticalPosition = _a.verticalPosition, horizontalPosition = _a.horizontalPosition, _b = _a.dropdownOpenerVisible, dropdownOpenerVisible = _b === void 0 ? false : _b, parentRef = _a.parentRef, onClose = _a.onClose, children = _a.children, rest = __rest(_a, ["verticalPosition", "horizontalPosition", "dropdownOpenerVisible", "parentRef", "onClose", "children"]);
    var _c = (0, react_1.useState)([0, 0]), overlayPosition = _c[0], setOverlayPosition = _c[1];
    var portalNode = document.createElement('div');
    portalNode.setAttribute('id', 'dropdown-root');
    var portalRef = (0, react_1.useRef)(portalNode);
    var overlayRef = (0, react_1.useRef)(null);
    var overlayVerticalPosition = (0, hooks_1.useVerticalPosition)(overlayRef, verticalPosition);
    var overlayHorizontalPosition = (0, hooks_1.useHorizontalPosition)(overlayRef, horizontalPosition);
    var _d = (0, react_1.useState)(false), visible = _d[0], setVisible = _d[1];
    (0, hooks_1.useShortcut)(shared_1.Key.Escape, onClose);
    (0, hooks_1.useWindowResize)();
    (0, react_1.useEffect)(function () {
        setVisible(true);
        document.body.appendChild(portalRef.current);
        return function () {
            document.body.removeChild(portalRef.current);
        };
    }, []);
    (0, react_1.useEffect)(function () {
        setOverlayPosition(getOverlayPosition(overlayVerticalPosition, overlayHorizontalPosition, dropdownOpenerVisible, parentRef, overlayRef));
    }, [children, overlayVerticalPosition, overlayHorizontalPosition, parentRef, overlayRef, dropdownOpenerVisible]);
    var top = overlayPosition[0], left = overlayPosition[1];
    return (0, react_dom_1.createPortal)(react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Backdrop, { "data-testid": "backdrop", onClick: onClose }),
        react_1.default.createElement(Container, __assign({ ref: overlayRef, visible: visible, top: top, left: left }, rest), children)), portalRef.current);
};
exports.Overlay = Overlay;
Overlay.displayName = 'Overlay';
var templateObject_1, templateObject_2;
//# sourceMappingURL=Overlay.js.map