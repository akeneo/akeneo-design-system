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
var hooks_1 = require("../../../hooks");
var theme_1 = require("../../../theme");
var OverlayContent = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", "\n  background: ", ";\n  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.3);\n  padding: 10px 0 10px 0;\n  position: fixed;\n  opacity: ", ";\n  transition: opacity 0.15s ease-in-out;\n  z-index: 2001;\n  top: ", "px;\n  left: ", "px;\n  width: ", "px;\n"], ["\n  ", "\n  background: ", ";\n  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.3);\n  padding: 10px 0 10px 0;\n  position: fixed;\n  opacity: ", ";\n  transition: opacity 0.15s ease-in-out;\n  z-index: 2001;\n  top: ", "px;\n  left: ", "px;\n  width: ", "px;\n"])), theme_1.CommonStyle, theme_1.getColor('white'), function (_a) {
    var visible = _a.visible;
    return (visible ? 1 : 0);
}, function (_a) {
    var top = _a.top;
    return top;
}, function (_a) {
    var left = _a.left;
    return left;
}, function (_a) {
    var width = _a.width;
    return width;
});
var Backdrop = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 2000;\n"], ["\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 2000;\n"])));
var getOverlayPosition = function (verticalPosition, parentRef, elementRef) {
    if (undefined === parentRef ||
        undefined === elementRef ||
        null === parentRef.current ||
        null === elementRef.current) {
        return [0, 0, 0];
    }
    var parentRect = parentRef.current.getBoundingClientRect();
    var elementRect = elementRef.current.getBoundingClientRect();
    var top = 'up' === verticalPosition ? parentRect.top - elementRect.height : parentRect.bottom;
    var left = parentRect.left;
    var width = parentRect.width;
    return [top, left, width];
};
var Overlay = function (_a) {
    var verticalPosition = _a.verticalPosition, parentRef = _a.parentRef, onClose = _a.onClose, children = _a.children, rest = __rest(_a, ["verticalPosition", "parentRef", "onClose", "children"]);
    var portalNode = document.createElement('div');
    portalNode.setAttribute('id', 'input-overlay-root');
    var portalRef = react_1.useRef(portalNode);
    var overlayRef = react_1.useRef(null);
    var _b = react_1.useState(false), visible = _b[0], setVisible = _b[1];
    verticalPosition = hooks_1.useVerticalPosition(overlayRef, verticalPosition);
    hooks_1.useWindowResize();
    react_1.useEffect(function () {
        setVisible(true);
        document.body.appendChild(portalRef.current);
        return function () {
            document.body.removeChild(portalRef.current);
        };
    }, []);
    var _c = getOverlayPosition(verticalPosition, parentRef, overlayRef), top = _c[0], left = _c[1], width = _c[2];
    return react_dom_1.createPortal(react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Backdrop, { "data-testid": "backdrop", onClick: onClose }),
        react_1.default.createElement(OverlayContent, __assign({ ref: overlayRef, visible: visible, top: top, left: left, width: width }, rest), children)), portalRef.current);
};
exports.Overlay = Overlay;
var templateObject_1, templateObject_2;
//# sourceMappingURL=Overlay.js.map