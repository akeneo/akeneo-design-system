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
exports.CardGrid = exports.Card = void 0;
var react_1 = __importStar(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var components_1 = require("../../components");
var theme_1 = require("../../theme");
var CardGrid = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(", "px, 1fr));\n  gap: ", "px;\n"], ["\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(", "px, 1fr));\n  gap: ", "px;\n"])), function (_a) {
    var size = _a.size;
    return ('big' === size ? 200 : 140);
}, function (_a) {
    var size = _a.size;
    return ('big' === size ? 40 : 20);
});
exports.CardGrid = CardGrid;
CardGrid.defaultProps = {
    size: 'normal',
};
var Overlay = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: absolute;\n  z-index: 2;\n  top: 0;\n  width: 100%;\n  padding-bottom: 100%;\n  background-color: ", ";\n  opacity: 0%;\n  transition: opacity 0.3s ease-in;\n"], ["\n  position: absolute;\n  z-index: 2;\n  top: 0;\n  width: 100%;\n  padding-bottom: 100%;\n  background-color: ", ";\n  opacity: 0%;\n  transition: opacity 0.3s ease-in;\n"])), theme_1.getColor('grey140'));
var CardContainer = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  line-height: 20px;\n  font-size: ", ";\n  color: ", ";\n  cursor: ", ";\n\n  img {\n    position: absolute;\n    top: 0;\n    object-fit: ", ";\n    width: 100%;\n    height: 100%;\n    box-sizing: border-box;\n    border-style: solid;\n    border-width: ", ";\n    border-color: ", ";\n  }\n"], ["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  line-height: 20px;\n  font-size: ", ";\n  color: ", ";\n  cursor: ", ";\n\n  img {\n    position: absolute;\n    top: 0;\n    object-fit: ", ";\n    width: 100%;\n    height: 100%;\n    box-sizing: border-box;\n    border-style: solid;\n    border-width: ", ";\n    border-color: ", ";\n  }\n"])), theme_1.getFontSize('default'), theme_1.getColor('grey120'), function (_a) {
    var onClick = _a.onClick;
    return (undefined !== onClick ? 'pointer' : 'default');
}, function (_a) {
    var fit = _a.fit;
    return fit;
}, function (_a) {
    var isSelected = _a.isSelected;
    return (isSelected ? '2px' : '1px');
}, function (_a) {
    var isSelected = _a.isSelected;
    return (isSelected ? theme_1.getColor('blue100') : theme_1.getColor('grey100'));
});
var ImageContainer = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  position: relative;\n\n  ::before {\n    content: '';\n    display: block;\n    padding-bottom: 100%;\n  }\n\n  :hover ", " {\n    opacity: 50%;\n  }\n"], ["\n  position: relative;\n\n  ::before {\n    content: '';\n    display: block;\n    padding-bottom: 100%;\n  }\n\n  :hover ", " {\n    opacity: 50%;\n  }\n"])), Overlay);
var CardLabel = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  margin-top: 7px;\n\n  > :first-child {\n    margin-right: 6px;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  margin-top: 7px;\n\n  > :first-child {\n    margin-right: 6px;\n  }\n"])));
var BadgeContainer = styled_components_1.default.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  position: absolute;\n  z-index: 5;\n  top: 10px;\n  right: 10px;\n"], ["\n  position: absolute;\n  z-index: 5;\n  top: 10px;\n  right: 10px;\n"])));
var Card = react_1.default.forwardRef(function (_a, forwardedRef) {
    var src = _a.src, _b = _a.fit, fit = _b === void 0 ? 'cover' : _b, _c = _a.isSelected, isSelected = _c === void 0 ? false : _c, onSelectCard = _a.onSelectCard, children = _a.children, rest = __rest(_a, ["src", "fit", "isSelected", "onSelectCard", "children"]);
    var badges = [];
    var texts = [];
    react_1.default.Children.forEach(children, function (child) {
        if (react_1.isValidElement(child) && child.type === components_1.Badge) {
            badges.push(child);
        }
        else if (typeof child === 'string') {
            texts.push(child);
        }
        else {
            throw new Error('Card component only accepts string or Badge as children');
        }
    });
    var toggleSelect = undefined !== onSelectCard ? function () { return onSelectCard(!isSelected); } : undefined;
    return (react_1.default.createElement(CardContainer, __assign({ ref: forwardedRef, fit: fit, isSelected: isSelected, onClick: toggleSelect }, rest),
        0 < badges.length && react_1.default.createElement(BadgeContainer, null, badges[0]),
        react_1.default.createElement(ImageContainer, null,
            react_1.default.createElement(Overlay, null),
            react_1.default.createElement("img", { src: src, alt: texts[0] })),
        react_1.default.createElement(CardLabel, null,
            undefined !== onSelectCard && react_1.default.createElement(components_1.Checkbox, { checked: isSelected, onChange: toggleSelect }),
            texts)));
});
exports.Card = Card;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
//# sourceMappingURL=Card.js.map