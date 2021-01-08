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
exports.ItemLabel = exports.Item = void 0;
var react_1 = __importStar(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var theme_1 = require("../../../theme");
var Image_1 = require("../../../components/Image/Image");
var Checkbox_1 = require("../../../components/Checkbox/Checkbox");
var Link_1 = require("../../../components/Link/Link");
var shared_1 = require("../../../shared");
var ItemLabel = styled_components_1.default.span(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  flex: 1;\n  color: ", ";\n  line-height: 34px;\n"], ["\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  flex: 1;\n  color: ", ";\n  line-height: 34px;\n"])), theme_1.getColor('grey', 120));
exports.ItemLabel = ItemLabel;
var ItemContainer = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  background: ", ";\n  height: ", ";\n  padding: 0 20px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  cursor: pointer;\n\n  a {\n    color: ", ";\n  }\n\n  &:focus ", " {\n    color: ", ";\n  }\n  &:hover {\n    background: ", ";\n  }\n  &:hover ", " {\n    color: ", ";\n  }\n  &:active ", " {\n    color: ", ";\n    font-style: italic;\n    font-weight: 700;\n  }\n  &:disabled ", " {\n    color: ", ";\n  }\n"], ["\n  background: ", ";\n  height: ", ";\n  padding: 0 20px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  cursor: pointer;\n\n  a {\n    color: ", ";\n  }\n\n  &:focus ", " {\n    color: ", ";\n  }\n  &:hover {\n    background: ", ";\n  }\n  &:hover ", " {\n    color: ", ";\n  }\n  &:active ", " {\n    color: ", ";\n    font-style: italic;\n    font-weight: 700;\n  }\n  &:disabled ", " {\n    color: ", ";\n  }\n"])), theme_1.getColor('white'), function (_a) {
    var tall = _a.tall;
    return (tall ? '44px' : '34px');
}, theme_1.getColor('grey', 120), ItemLabel, theme_1.getColor('grey', 120), theme_1.getColor('grey', 20), ItemLabel, theme_1.getColor('brand', 140), ItemLabel, theme_1.getColor('brand', 100), ItemLabel, theme_1.getColor('grey', 100));
var Item = react_1.default.forwardRef(function (_a, forwardedRef) {
    var children = _a.children, onKeyDown = _a.onKeyDown, rest = __rest(_a, ["children", "onKeyDown"]);
    var tall = false;
    var actionableRef = react_1.useRef(null);
    var handleClick = react_1.useCallback(function () {
        if (actionableRef.current !== null) {
            actionableRef.current.click();
        }
    }, []);
    var handleKeyDown = react_1.useCallback(function (event) {
        if (shared_1.Key.Enter === event.key || shared_1.Key.Space === event.key) {
            event.preventDefault();
            handleClick();
            return;
        }
        onKeyDown && onKeyDown(event);
    }, [onKeyDown, handleClick]);
    var decoratedChildren = react_1.default.Children.map(children, function (child) {
        if (typeof child === 'string') {
            return react_1.default.createElement(ItemLabel, { title: child }, child);
        }
        if (react_1.default.isValidElement(child) && child.type === Image_1.Image) {
            tall = true;
            return react_1.default.cloneElement(child, {
                width: 34,
                height: 34,
            });
        }
        if (react_1.default.isValidElement(child) && child.type === Link_1.Link) {
            return (react_1.default.createElement(ItemLabel, null, react_1.default.cloneElement(child, {
                ref: actionableRef,
                decorated: false,
            })));
        }
        if (react_1.default.isValidElement(child) && child.type === Checkbox_1.Checkbox) {
            return react_1.default.cloneElement(child, {
                ref: actionableRef,
            });
        }
        return child;
    });
    return (react_1.default.createElement(ItemContainer, __assign({ tall: tall, tabIndex: actionableRef.current === null ? 0 : -1, onClick: handleClick, onKeyDown: handleKeyDown }, rest, { ref: forwardedRef }), decoratedChildren));
});
exports.Item = Item;
var templateObject_1, templateObject_2;
//# sourceMappingURL=Item.js.map