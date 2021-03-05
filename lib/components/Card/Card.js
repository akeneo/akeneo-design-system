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
exports.CardGrid = exports.Card = void 0;
var react_1 = __importStar(require("react"));
var styled_components_1 = __importStar(require("styled-components"));
var components_1 = require("../../components");
var theme_1 = require("../../theme");
var Stack = styled_components_1.default.div.attrs(function () { return ({
    role: 'none',
}); })(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ::before,\n  ::after {\n    content: ' ';\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 95%;\n    height: 95%;\n    box-sizing: border-box;\n    border-style: solid;\n    border-width: ", "px;\n    border-color: ", ";\n    background-color: ", ";\n  }\n\n  ::before {\n    transform: translate(6px, 6px);\n  }\n\n  ::after {\n    transform: translate(3px, 3px);\n  }\n"], ["\n  ::before,\n  ::after {\n    content: ' ';\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 95%;\n    height: 95%;\n    box-sizing: border-box;\n    border-style: solid;\n    border-width: ", "px;\n    border-color: ", ";\n    background-color: ", ";\n  }\n\n  ::before {\n    transform: translate(6px, 6px);\n  }\n\n  ::after {\n    transform: translate(3px, 3px);\n  }\n"])), function (_a) {
    var isSelected = _a.isSelected;
    return (isSelected ? 2 : 1);
}, function (_a) {
    var isSelected = _a.isSelected;
    return theme_1.getColor(isSelected ? 'blue' : 'grey', 100);
}, theme_1.getColor('white'));
var CardGrid = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(", "px, 1fr));\n  gap: ", "px;\n\n  ", "\n"], ["\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(", "px, 1fr));\n  gap: ", "px;\n\n  ",
    "\n"])), function (_a) {
    var size = _a.size;
    return ('big' === size ? 200 : 140);
}, function (_a) {
    var size = _a.size;
    return ('big' === size ? 40 : 20);
}, function (_a) {
    var size = _a.size;
    return 'big' === size && styled_components_1.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      ", " {\n        ::before {\n          transform: translate(8px, 10px);\n        }\n\n        ::after {\n          transform: translate(4px, 5px);\n        }\n      }\n    "], ["\n      ", " {\n        ::before {\n          transform: translate(8px, 10px);\n        }\n\n        ::after {\n          transform: translate(4px, 5px);\n        }\n      }\n    "])), Stack);
});
exports.CardGrid = CardGrid;
CardGrid.defaultProps = {
    size: 'normal',
};
var Overlay = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  position: absolute;\n  z-index: 2;\n  top: 0;\n  width: ", ";\n  height: ", ";\n  background-color: ", ";\n  opacity: 0%;\n  transition: opacity 0.3s ease-in;\n"], ["\n  position: absolute;\n  z-index: 2;\n  top: 0;\n  width: ", ";\n  height: ", ";\n  background-color: ", ";\n  opacity: 0%;\n  transition: opacity 0.3s ease-in;\n"])), function (_a) {
    var stacked = _a.stacked;
    return (stacked ? '95%' : '100%');
}, function (_a) {
    var stacked = _a.stacked;
    return (stacked ? '95%' : '100%');
}, theme_1.getColor('grey', 140));
var CardContainer = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  line-height: 20px;\n  font-size: ", ";\n  color: ", ";\n  cursor: ", ";\n\n  img {\n    position: absolute;\n    top: 0;\n    object-fit: ", ";\n    width: ", ";\n    height: ", ";\n    box-sizing: border-box;\n    border-style: solid;\n    border-width: ", "px;\n    border-color: ", ";\n  }\n\n  a,\n  a:hover {\n    color: inherit;\n    text-decoration: none;\n    background-color: ", ";\n  }\n"], ["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  line-height: 20px;\n  font-size: ", ";\n  color: ", ";\n  cursor: ", ";\n\n  img {\n    position: absolute;\n    top: 0;\n    object-fit: ", ";\n    width: ", ";\n    height: ", ";\n    box-sizing: border-box;\n    border-style: solid;\n    border-width: ", "px;\n    border-color: ", ";\n  }\n\n  a,\n  a:hover {\n    color: inherit;\n    text-decoration: none;\n    background-color: ", ";\n  }\n"])), theme_1.getFontSize('default'), theme_1.getColor('grey', 120), function (_a) {
    var actionable = _a.actionable, disabled = _a.disabled;
    return (disabled ? 'not-allowed' : actionable ? 'pointer' : 'auto');
}, function (_a) {
    var fit = _a.fit;
    return fit;
}, function (_a) {
    var stacked = _a.stacked;
    return (stacked ? '95%' : '100%');
}, function (_a) {
    var stacked = _a.stacked;
    return (stacked ? '95%' : '100%');
}, function (_a) {
    var isSelected = _a.isSelected;
    return (isSelected ? 2 : 1);
}, function (_a) {
    var isSelected = _a.isSelected;
    return theme_1.getColor(isSelected ? 'blue' : 'grey', 100);
}, theme_1.getColor('white'));
var ImageContainer = styled_components_1.default.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  ", "\n\n  position: relative;\n\n  ::before {\n    content: '';\n    display: block;\n    padding-bottom: 100%;\n  }\n\n  :hover ", " {\n    opacity: 50%;\n  }\n"], ["\n  ", "\n\n  position: relative;\n\n  ::before {\n    content: '';\n    display: block;\n    padding-bottom: 100%;\n  }\n\n  :hover ", " {\n    opacity: 50%;\n  }\n"])), function (_a) {
    var isLoading = _a.isLoading;
    return isLoading && theme_1.placeholderStyle;
}, Overlay);
var CardLabel = styled_components_1.default.div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  margin-top: 7px;\n\n  > :first-child {\n    margin-right: 6px;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  margin-top: 7px;\n\n  > :first-child {\n    margin-right: 6px;\n  }\n"])));
var CardText = styled_components_1.default.span(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n"], ["\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n"])));
var BadgeContainer = styled_components_1.default.div(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  position: absolute;\n  z-index: 5;\n  top: 10px;\n  right: ", ";\n"], ["\n  position: absolute;\n  z-index: 5;\n  top: 10px;\n  right: ", ";\n"])), function (_a) {
    var stacked = _a.stacked;
    return (stacked ? '20px' : '10px');
});
BadgeContainer.displayName = 'BadgeContainer';
BadgeContainer.defaultProps = {
    stacked: false,
};
var Card = function (_a) {
    var src = _a.src, _b = _a.fit, fit = _b === void 0 ? 'cover' : _b, _c = _a.isSelected, isSelected = _c === void 0 ? false : _c, onSelect = _a.onSelect, _d = _a.disabled, disabled = _d === void 0 ? false : _d, children = _a.children, onClick = _a.onClick, _e = _a.stacked, stacked = _e === void 0 ? false : _e, rest = __rest(_a, ["src", "fit", "isSelected", "onSelect", "disabled", "children", "onClick", "stacked"]);
    var linkRef = react_1.useRef(null);
    var nonLabelChildren = [];
    var links = [];
    var texts = [];
    react_1.default.Children.forEach(children, function (child, key) {
        if (typeof child === 'string') {
            texts.push(child);
        }
        else if (react_1.isValidElement(child)) {
            if (components_1.Link === child.type) {
                links.push(react_1.default.cloneElement(child, { key: key, ref: linkRef, disabled: disabled }));
            }
            else {
                var props = { key: child.key };
                if (child.type === BadgeContainer) {
                    props = __assign(__assign({}, props), { stacked: stacked });
                }
                nonLabelChildren.push(react_1.default.cloneElement(child, props));
            }
        }
    });
    var handleClick = function (event) {
        if (disabled || (null !== linkRef.current && linkRef.current === event.target)) {
            return;
        }
        if (null !== linkRef.current && linkRef.current !== event.target) {
            linkRef.current.click();
        }
        else if (undefined !== onClick) {
            onClick(event);
        }
        else {
            onSelect === null || onSelect === void 0 ? void 0 : onSelect(!isSelected);
        }
    };
    return (react_1.default.createElement(CardContainer, __assign({ fit: fit, isSelected: isSelected, actionable: 0 < links.length || undefined !== onClick, onClick: handleClick, disabled: disabled, stacked: stacked }, rest),
        react_1.default.createElement(ImageContainer, { isLoading: null === src },
            stacked && react_1.default.createElement(Stack, { isSelected: isSelected, "data-testid": "stack" }),
            react_1.default.createElement(Overlay, { stacked: stacked }),
            react_1.default.createElement("img", { src: src !== null && src !== void 0 ? src : '', alt: texts[0] })),
        react_1.default.createElement(CardLabel, null,
            undefined !== onSelect && (react_1.default.createElement(components_1.Checkbox, { "aria-label": texts[0], checked: isSelected, readOnly: disabled, onChange: onSelect })),
            react_1.default.createElement(CardText, { title: texts[0] },
                texts,
                links)),
        nonLabelChildren));
};
exports.Card = Card;
Card.BadgeContainer = BadgeContainer;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9;
//# sourceMappingURL=Card.js.map