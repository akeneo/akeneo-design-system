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
exports.Surtitle = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var theme_1 = require("../../../theme");
var react_1 = __importDefault(require("react"));
var Item_1 = require("../Item/Item");
var SurtitleContainer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  flex-grow: 1;\n  line-height: normal;\n  overflow: hidden;\n"], ["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  flex-grow: 1;\n  line-height: normal;\n  overflow: hidden;\n"])));
var Title = styled_components_1.default.span(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  color: ", ";\n  font-size: 10px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n"], ["\n  color: ", ";\n  font-size: 10px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n"])), (0, theme_1.getColor)('grey', 100));
var Surtitle = function (_a) {
    var label = _a.label, children = _a.children, rest = __rest(_a, ["label", "children"]);
    return (react_1.default.createElement(SurtitleContainer, __assign({}, rest),
        react_1.default.createElement(Title, { title: label }, label),
        react_1.default.createElement(Item_1.ItemLabel, null, children)));
};
exports.Surtitle = Surtitle;
var templateObject_1, templateObject_2;
//# sourceMappingURL=Surtitle.js.map