"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Overlay = void 0;
var react_1 = __importStar(require("react"));
var styled_components_1 = __importStar(require("styled-components"));
var key_1 = require("../../../shared/key");
var hooks_1 = require("../../../hooks");
var theme_1 = require("../../../theme");
var Container = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  background: ", ";\n  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.3);\n  padding: 0 0 10px 0;\n  max-width: 320px;\n  min-width: 150px;\n  position: absolute;\n  opacity: ", ";\n  transition: opacity 0.15s ease-in-out;\n  z-index: 2;\n\n  ", "\n  ", ";\n"], ["\n  background: ", ";\n  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.3);\n  padding: 0 0 10px 0;\n  max-width: 320px;\n  min-width: 150px;\n  position: absolute;\n  opacity: ", ";\n  transition: opacity 0.15s ease-in-out;\n  z-index: 2;\n\n  ",
    "\n  ",
    ";\n"])), theme_1.getColor('white'), function (_a) {
    var visible = _a.visible;
    return (visible ? 1 : 0);
}, function (_a) {
    var verticalPosition = _a.verticalPosition;
    return 'up' === verticalPosition
        ? styled_components_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n          bottom: -1px;\n        "], ["\n          bottom: -1px;\n        "]))) : styled_components_1.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n          top: -1px;\n        "], ["\n          top: -1px;\n        "])));
}, function (_a) {
    var horizontalPosition = _a.horizontalPosition;
    return 'left' === horizontalPosition
        ? styled_components_1.css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n          right: -1px;\n        "], ["\n          right: -1px;\n        "]))) : styled_components_1.css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n          left: -1px;\n        "], ["\n          left: -1px;\n        "])));
});
var Backdrop = styled_components_1.default.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 1;\n"], ["\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 1;\n"])));
var Overlay = function (_a) {
    var defaultVerticalPosition = _a.verticalPosition, onClose = _a.onClose, children = _a.children;
    var overlayRef = react_1.useRef(null);
    var _b = react_1.useState(defaultVerticalPosition !== null && defaultVerticalPosition !== void 0 ? defaultVerticalPosition : 'down'), verticalPosition = _b[0], setVerticalPosition = _b[1];
    var _c = react_1.useState('right'), horizontalPosition = _c[0], setHorizontalPosition = _c[1];
    var _d = react_1.useState(false), visible = _d[0], setVisible = _d[1];
    hooks_1.useShortcut(key_1.Key.Escape, onClose);
    react_1.useEffect(function () {
        if (null !== overlayRef.current) {
            if (undefined === defaultVerticalPosition) {
                var elementHeight = overlayRef.current.getBoundingClientRect().height;
                var windowHeight = window.innerHeight;
                var distanceToTop = overlayRef.current.getBoundingClientRect().top;
                var distanceToBottom = windowHeight - (elementHeight + distanceToTop);
                setVerticalPosition(distanceToTop > distanceToBottom ? 'up' : 'down');
            }
            if (null !== overlayRef.current) {
                var elementWidth = overlayRef.current.getBoundingClientRect().width;
                var windowWidth = window.innerWidth;
                var distanceToLeft = overlayRef.current.getBoundingClientRect().left;
                var distanceToRight = windowWidth - (elementWidth + distanceToLeft);
                setHorizontalPosition(distanceToLeft > distanceToRight ? 'left' : 'right');
            }
            setVisible(true);
        }
    }, [defaultVerticalPosition]);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Backdrop, { "data-testid": "backdrop", onClick: onClose }),
        react_1.default.createElement(Container, { ref: overlayRef, visible: visible, horizontalPosition: horizontalPosition, verticalPosition: verticalPosition }, children)));
};
exports.Overlay = Overlay;
Overlay.displayName = 'Dropdown.Overlay';
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
//# sourceMappingURL=Overlay.js.map