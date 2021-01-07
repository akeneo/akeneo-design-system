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
exports.Dropdown = void 0;
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var Overlay_1 = require("./Overlay/Overlay");
var Item_1 = require("./Item/Item");
var ItemCollection_1 = require("./ItemCollection/ItemCollection");
var theme_1 = require("../../theme");
var DropdownContainer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  display: inline-block;\n"], ["\n  position: relative;\n  display: inline-block;\n"])));
var Header = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  box-sizing: border-box;\n  border-bottom: 1px solid ", ";\n  height: 44px;\n  line-height: 44px;\n  margin: 0 20px 10px 20px;\n"], ["\n  box-sizing: border-box;\n  border-bottom: 1px solid ", ";\n  height: 44px;\n  line-height: 44px;\n  margin: 0 20px 10px 20px;\n"])), theme_1.getColor('brand', 100));
var Content = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject([""], [""])));
var Title = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  font-size: 11px;\n  text-transform: uppercase;\n  color: ", ";\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n"], ["\n  font-size: 11px;\n  text-transform: uppercase;\n  color: ", ";\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n"])), theme_1.getColor('brand', 100));
var Dropdown = function (_a) {
    var children = _a.children, rest = __rest(_a, ["children"]);
    return react_1.default.createElement(DropdownContainer, __assign({}, rest), children);
};
exports.Dropdown = Dropdown;
Header.displayName = 'Dropdown.Header';
Title.displayName = 'Dropdown.Title';
ItemCollection_1.ItemCollection.displayName = 'Dropdown.ItemCollection';
Content.displayName = 'Dropdown.Content';
Dropdown.Overlay = Overlay_1.Overlay;
Dropdown.Header = Header;
Dropdown.Item = Item_1.Item;
Dropdown.ItemLabel = Item_1.ItemLabel;
Dropdown.Title = Title;
Dropdown.ItemCollection = ItemCollection_1.ItemCollection;
Dropdown.Content = Content;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=Dropdown.js.map