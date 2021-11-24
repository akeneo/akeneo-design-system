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
exports.Dropdown = void 0;
var react_1 = __importStar(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var Overlay_1 = require("./Overlay/Overlay");
var Item_1 = require("./Item/Item");
var ItemCollection_1 = require("./ItemCollection/ItemCollection");
var Header_1 = require("./Header/Header");
var Title_1 = require("./Header/Title");
var theme_1 = require("../../theme");
var Surtitle_1 = require("./Surtitle/Surtitle");
var Section = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background: ", ";\n  color: ", ";\n  height: 34px;\n  line-height: 34px;\n  padding: 0 20px;\n  outline-style: none;\n  white-space: nowrap;\n  text-transform: uppercase;\n  margin-top: 10px;\n"], ["\n  background: ", ";\n  color: ", ";\n  height: 34px;\n  line-height: 34px;\n  padding: 0 20px;\n  outline-style: none;\n  white-space: nowrap;\n  text-transform: uppercase;\n  margin-top: 10px;\n"])), (0, theme_1.getColor)('white'), (0, theme_1.getColor)('grey', 100));
var DropdownContainer = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: relative;\n  display: inline-flex;\n"], ["\n  position: relative;\n  display: inline-flex;\n"])));
var Dropdown = function (_a) {
    var children = _a.children, rest = __rest(_a, ["children"]);
    var ref = (0, react_1.useRef)(null);
    var decoratedChildren = react_1.Children.map(children, function (child) {
        if (!(0, react_1.isValidElement)(child) || child.type !== Overlay_1.Overlay)
            return child;
        return (0, react_1.cloneElement)(child, {
            parentRef: ref,
        });
    });
    return (react_1.default.createElement(DropdownContainer, __assign({ ref: ref }, rest), decoratedChildren));
};
exports.Dropdown = Dropdown;
Overlay_1.Overlay.displayName = 'Dropdown.Overlay';
Header_1.Header.displayName = 'Dropdown.Header';
Title_1.Title.displayName = 'Dropdown.Title';
ItemCollection_1.ItemCollection.displayName = 'Dropdown.ItemCollection';
Item_1.Item.displayName = 'Dropdown.Item';
Section.displayName = 'Dropdown.Section';
Dropdown.Overlay = Overlay_1.Overlay;
Dropdown.Header = Header_1.Header;
Dropdown.Item = Item_1.Item;
Dropdown.Section = Section;
Dropdown.Title = Title_1.Title;
Dropdown.ItemCollection = ItemCollection_1.ItemCollection;
Dropdown.Surtitle = Surtitle_1.Surtitle;
var templateObject_1, templateObject_2;
//# sourceMappingURL=Dropdown.js.map