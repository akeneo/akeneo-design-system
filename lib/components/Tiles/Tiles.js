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
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
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
exports.Tile = exports.Tiles = void 0;
var react_1 = __importStar(require("react"));
var styled_components_1 = __importStar(require("styled-components"));
var theme_1 = require("../../theme");
var __1 = require("../../");
var components_1 = require("../../components");
var TilesContainer = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: grid;\n  ", ";\n"], ["\n  display: grid;\n  ", ";\n"])), function (_a) {
    var size = _a.size;
    return size === 'small'
        ? (0, styled_components_1.css)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n          gap: 20px;\n          grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));\n        "], ["\n          gap: 20px;\n          grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));\n        "]))) : (0, styled_components_1.css)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n          gap: 30px;\n          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n        "], ["\n          gap: 30px;\n          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n        "])));
});
var TileContainer = styled_components_1.default.div(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n  position: relative;\n  margin: 1px;\n  ", "\n  transition: border-color 0.2s, color 0.2s, background 0.2s;\n  ", "\n  ", "\n  ", "\n  box-sizing: border-box;\n  ", "\n\n  div[role=tooltip] {\n    position: absolute;\n    right: 5px;\n  }\n"], ["\n  position: relative;\n  margin: 1px;\n  ", "\n  transition: border-color 0.2s, color 0.2s, background 0.2s;\n  ", "\n  ", "\n  ", "\n  box-sizing: border-box;\n  ", "\n\n  div[role=tooltip] {\n    position: absolute;\n    right: 5px;\n  }\n"])), function (_a) {
    var size = _a.size, inline = _a.inline;
    if (!inline) {
        return size === 'small'
            ? (0, styled_components_1.css)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n            height: 130px;\n            text-align: center;\n          "], ["\n            height: 130px;\n            text-align: center;\n          "]))) : (0, styled_components_1.css)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n            height: 200px;\n            text-align: center;\n          "], ["\n            height: 200px;\n            text-align: center;\n          "])));
    }
    return (0, styled_components_1.css)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n      height: auto;\n    "], ["\n      height: auto;\n    "])));
}, function (_a) {
    var onClick = _a.onClick, disabled = _a.disabled;
    return onClick !== undefined &&
        !disabled && (0, styled_components_1.css)(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n      cursor: pointer;\n    "], ["\n      cursor: pointer;\n    "])));
}, function (_a) {
    var selected = _a.selected;
    return selected
        ? (0, styled_components_1.css)(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n          border: 2px solid ", ";\n          color: ", ";\n          margin: 0;\n          background: ", ";\n        "], ["\n          border: 2px solid ", ";\n          color: ", ";\n          margin: 0;\n          background: ", ";\n        "])), (0, theme_1.getColor)('blue', 100), (0, theme_1.getColor)('blue', 100), (0, theme_1.getColor)('blue', 10)) : (0, styled_components_1.css)(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n          border: 1px solid ", ";\n        "], ["\n          border: 1px solid ", ";\n        "])), (0, theme_1.getColor)('grey', 80));
}, function (_a) {
    var disabled = _a.disabled;
    return !disabled && (0, styled_components_1.css)(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n      &:hover {\n        border: 2px solid ", ";\n        color: ", ";\n        margin: 0;\n        background: ", ";\n      }\n    "], ["\n      &:hover {\n        border: 2px solid ", ";\n        color: ", ";\n        margin: 0;\n        background: ", ";\n      }\n    "])), (0, theme_1.getColor)('blue', 100), (0, theme_1.getColor)('blue', 100), (0, theme_1.getColor)('blue', 10));
}, function (_a) {
    var disabled = _a.disabled;
    return disabled && (0, styled_components_1.css)(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n      color: ", ";\n      cursor: not-allowed;\n      background-color: ", ";\n    "], ["\n      color: ", ";\n      cursor: not-allowed;\n      background-color: ", ";\n    "])), (0, theme_1.getColor)('grey', 120), (0, theme_1.getColor)('grey', 20));
});
var IconContainer = styled_components_1.default.div(templateObject_16 || (templateObject_16 = __makeTemplateObject(["\n  box-sizing: content-box;\n  ", "\n  ", "}\n"], ["\n  box-sizing: content-box;\n  ", "\n  ", "}\n"])), function (_a) {
    var size = _a.size;
    return size === 'small'
        ? (0, styled_components_1.css)(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n          padding: 25px 0 0 0;\n          height: 54px;\n        "], ["\n          padding: 25px 0 0 0;\n          height: 54px;\n        "]))) : (0, styled_components_1.css)(templateObject_14 || (templateObject_14 = __makeTemplateObject(["\n          padding: 40px 0 0 0;\n          height: 100px;\n        "], ["\n          padding: 40px 0 0 0;\n          height: 100px;\n        "])));
}, function (_a) {
    var disabled = _a.disabled;
    return disabled && (0, styled_components_1.css)(templateObject_15 || (templateObject_15 = __makeTemplateObject(["\n      color: ", ";\n    "], ["\n      color: ", ";\n    "])), (0, theme_1.getColor)('grey', 100));
});
var LabelContainer = styled_components_1.default.div(templateObject_17 || (templateObject_17 = __makeTemplateObject(["\n  margin: 10px;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  line-height: 1.3;\n"], ["\n  margin: 10px;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  line-height: 1.3;\n"])));
var InlineContainer = styled_components_1.default.div(templateObject_18 || (templateObject_18 = __makeTemplateObject(["\n  margin: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"], ["\n  margin: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"])));
var Tile = function (_a) {
    var _b, _c;
    var icon = _a.icon, _d = _a.selected, selected = _d === void 0 ? false : _d, _e = _a.size, size = _e === void 0 ? 'small' : _e, _f = _a.inline, inline = _f === void 0 ? false : _f, onClick = _a.onClick, children = _a.children, _g = _a.disabled, disabled = _g === void 0 ? false : _g, rest = __rest(_a, ["icon", "selected", "size", "inline", "onClick", "children", "disabled"]);
    var handleKeyDown = (0, react_1.useCallback)(function (event) {
        if (null !== event.currentTarget && event.key === __1.Key.Enter) {
            onClick === null || onClick === void 0 ? void 0 : onClick();
            event.preventDefault();
        }
    }, [onClick]);
    var handleClick = function () {
        if (disabled)
            return;
        onClick === null || onClick === void 0 ? void 0 : onClick();
    };
    var tooltipChildren = (_b = react_1.Children.map(children, function (child) {
        if ((0, react_1.isValidElement)(child) && child.type === components_1.Tooltip) {
            return child;
        }
        return undefined;
    })) === null || _b === void 0 ? void 0 : _b.filter(function (e) { return !!e; });
    var childrenWithoutTooltips = (_c = react_1.Children.map(children, function (child) {
        if ((0, react_1.isValidElement)(child) && child.type === components_1.Tooltip) {
            return undefined;
        }
        return child;
    })) === null || _c === void 0 ? void 0 : _c.filter(function (e) { return !!e; });
    return (react_1.default.createElement(TileContainer, __assign({ selected: selected, size: size, inline: inline, onClick: handleClick, onKeyDown: handleKeyDown, tabIndex: 0, "aria-disabled": disabled, disabled: disabled }, rest),
        tooltipChildren && react_1.default.createElement(react_1.default.Fragment, null, tooltipChildren),
        !inline && icon && (react_1.default.createElement(IconContainer, { size: size, disabled: disabled }, react_1.default.cloneElement(icon, { size: size === 'small' ? 54 : 100 }))),
        inline ? (react_1.default.createElement(InlineContainer, null, childrenWithoutTooltips)) : (react_1.default.createElement(LabelContainer, null, childrenWithoutTooltips))));
};
exports.Tile = Tile;
var Tiles = react_1.default.forwardRef(function (_a, forwardedRef) {
    var _b = _a.size, size = _b === void 0 ? 'small' : _b, _c = _a.inline, inline = _c === void 0 ? false : _c, children = _a.children, rest = __rest(_a, ["size", "inline", "children"]);
    return (react_1.default.createElement(TilesContainer, __assign({ size: size, ref: forwardedRef }, rest), react_1.default.Children.map(children, function (child) {
        if ((0, react_1.isValidElement)(child) && child.type === Tile) {
            return react_1.default.cloneElement(child, { size: size, inline: inline });
        }
        throw new Error('A Tiles element can only have Tile children');
    })));
});
exports.Tiles = Tiles;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17, templateObject_18;
//# sourceMappingURL=Tiles.js.map