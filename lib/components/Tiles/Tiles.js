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
exports.Tile = exports.Tiles = void 0;
var react_1 = __importStar(require("react"));
var styled_components_1 = __importStar(require("styled-components"));
var theme_1 = require("../../theme");
var TilesContainer = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: grid;\n  ", "\n"], ["\n  display: grid;\n  ",
    "\n"])), function (_a) {
    var size = _a.size;
    return size === 'small'
        ? styled_components_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n          gap: 20px;\n          grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));\n        "], ["\n          gap: 20px;\n          grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));\n        "]))) : styled_components_1.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n          gap: 30px;\n          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n        "], ["\n          gap: 30px;\n          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n        "])));
});
var TileContainer = styled_components_1.default.div(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  margin: 1px;\n  ", "\n  transition: border-color 0.2s, color 0.2s, background 0.2s;\n  ", "\n  text-align: center;\n  ", "\n  &:hover {\n    border: 2px solid ", ";\n    color: ", ";\n    margin: 0;\n    background: ", ";\n  }\n  box-sizing: border-box;\n"], ["\n  margin: 1px;\n  ",
    "\n  transition: border-color 0.2s, color 0.2s, background 0.2s;\n  ",
    "\n  text-align: center;\n  ",
    "\n  &:hover {\n    border: 2px solid ", ";\n    color: ", ";\n    margin: 0;\n    background: ", ";\n  }\n  box-sizing: border-box;\n"])), function (_a) {
    var size = _a.size;
    return size === 'small'
        ? styled_components_1.css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n          height: 130px;\n        "], ["\n          height: 130px;\n        "]))) : styled_components_1.css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n          height: 200px;\n        "], ["\n          height: 200px;\n        "])));
}, function (_a) {
    var onClick = _a.onClick;
    return onClick !== undefined && styled_components_1.css(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n      cursor: pointer;\n    "], ["\n      cursor: pointer;\n    "])));
}, function (_a) {
    var selected = _a.selected;
    return selected
        ? styled_components_1.css(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n          border: 2px solid ", ";\n          color: ", ";\n          margin: 0;\n          background: ", ";\n        "], ["\n          border: 2px solid ", ";\n          color: ", ";\n          margin: 0;\n          background: ", ";\n        "])), theme_1.getColor('blue', 100), theme_1.getColor('blue', 100), theme_1.getColor('blue', 10)) : styled_components_1.css(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n          border: 1px solid ", ";\n        "], ["\n          border: 1px solid ", ";\n        "])), theme_1.getColor('grey', 80));
}, theme_1.getColor('blue', 100), theme_1.getColor('blue', 100), theme_1.getColor('blue', 10));
var IconContainer = styled_components_1.default.div(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n  box-sizing: content-box;\n  ", "\n"], ["\n  box-sizing: content-box;\n  ",
    "\n"])), function (_a) {
    var size = _a.size;
    return size === 'small'
        ? styled_components_1.css(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n          padding: 25px 0 0 0;\n          height: 54px;\n        "], ["\n          padding: 25px 0 0 0;\n          height: 54px;\n        "]))) : styled_components_1.css(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n          padding: 40px 0 0 0;\n          height: 100px;\n        "], ["\n          padding: 40px 0 0 0;\n          height: 100px;\n        "])));
});
var LabelContainer = styled_components_1.default.div(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n  margin: 10px;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  line-height: 1.3;\n"], ["\n  margin: 10px;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  line-height: 1.3;\n"])));
var Tile = function (_a) {
    var icon = _a.icon, _b = _a.selected, selected = _b === void 0 ? false : _b, _c = _a.size, size = _c === void 0 ? 'small' : _c, onClick = _a.onClick, children = _a.children, rest = __rest(_a, ["icon", "selected", "size", "onClick", "children"]);
    return (react_1.default.createElement(TileContainer, __assign({ selected: selected, size: size, onClick: onClick }, rest),
        react_1.default.createElement(IconContainer, { size: size }, react_1.default.cloneElement(icon, { size: size === 'small' ? 54 : 100 })),
        react_1.default.createElement(LabelContainer, null, children)));
};
exports.Tile = Tile;
var Tiles = react_1.default.forwardRef(function (_a, forwardedRef) {
    var _b = _a.size, size = _b === void 0 ? 'small' : _b, children = _a.children, rest = __rest(_a, ["size", "children"]);
    return (react_1.default.createElement(TilesContainer, __assign({ size: size, ref: forwardedRef }, rest), react_1.default.Children.map(children, function (child) {
        if (react_1.isValidElement(child) && child.type === Tile) {
            return react_1.default.cloneElement(child, { size: size });
        }
        throw new Error('A Tiles element can only have Tile children');
    })));
});
exports.Tiles = Tiles;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13;
//# sourceMappingURL=Tiles.js.map