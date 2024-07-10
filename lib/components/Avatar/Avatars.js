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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Avatars = void 0;
var react_1 = __importStar(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var theme_1 = require("../../theme");
var AvatarListContainer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: row-reverse;\n  justify-content: flex-end;\n  & > * {\n    position: relative;\n  }\n"], ["\n  display: flex;\n  flex-direction: row-reverse;\n  justify-content: flex-end;\n  & > * {\n    position: relative;\n  }\n"])));
var RemainingAvatar = styled_components_1.default.span(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  height: 32px;\n  width: 32px;\n  color: ", ";\n  border: 1px solid;\n  line-height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 15px;\n  border-radius: 32px;\n"], ["\n  height: 32px;\n  width: 32px;\n  color: ", ";\n  border: 1px solid;\n  line-height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 15px;\n  border-radius: 32px;\n"])), (0, theme_1.getColor)('grey', 120));
var Avatars = function (_a) {
    var max = _a.max, _b = _a.maxTitle, maxTitle = _b === void 0 ? 10 : _b, children = _a.children, rest = __rest(_a, ["max", "maxTitle", "children"]);
    var childrenArray = react_1.Children.toArray(children);
    var displayedChildren = childrenArray.slice(0, max);
    var remainingChildren = childrenArray.slice(max, childrenArray.length + 1);
    var remainingChildrenCount = childrenArray.length - max;
    var reverseChildren = displayedChildren.reverse();
    var remainingUsersTitle = (0, react_1.useMemo)(function () {
        var remainingNames = remainingChildren
            .map(function (child) {
            if (!react_1.default.isValidElement(child))
                return;
            var _a = child.props, firstName = _a.firstName, lastName = _a.lastName, username = _a.username;
            return "".concat(firstName || '', " ").concat(lastName || '').trim() || username;
        })
            .slice(0, maxTitle)
            .join('\n');
        if (remainingChildren.length > maxTitle) {
            return remainingNames.concat('\n', '...');
        }
        return remainingNames;
    }, [maxTitle, remainingChildren]);
    return (react_1.default.createElement(AvatarListContainer, __assign({ title: rest.title || remainingUsersTitle }, rest),
        remainingChildrenCount > 0 && react_1.default.createElement(RemainingAvatar, null,
            "+",
            remainingChildrenCount),
        reverseChildren));
};
exports.Avatars = Avatars;
var templateObject_1, templateObject_2;
//# sourceMappingURL=Avatars.js.map