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
exports.Tag = exports.Tags = void 0;
var react_1 = __importStar(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var theme_1 = require("../../theme");
var Tag = styled_components_1.default.li(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  border: 1px solid;\n  border-color: ", ";\n  color: ", ";\n  background-color: ", ";\n  height: 16px;\n  line-height: 16px;\n  padding: 0 6px;\n  display: inline-block;\n  border-radius: 2px;\n  font-size: ", ";\n  text-transform: uppercase;\n  overflow: hidden;\n  max-width: 200px;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n"], ["\n  border: 1px solid;\n  border-color: ",
    ";\n  color: ",
    ";\n  background-color: ",
    ";\n  height: 16px;\n  line-height: 16px;\n  padding: 0 6px;\n  display: inline-block;\n  border-radius: 2px;\n  font-size: ", ";\n  text-transform: uppercase;\n  overflow: hidden;\n  max-width: 200px;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n"])), function (_a) {
    var tint = _a.tint;
    return ({
        green: '#81cccc',
        blue: '#4ca8e0',
        dark_blue: '#5e63b6',
        purple: '#9452ba',
        dark_purple: '#52267d',
        yellow: '#fcce76',
        red: '#f74b64',
    }[tint]);
}, function (_a) {
    var tint = _a.tint;
    return ({
        green: '#5da8a6',
        blue: '#3278b7',
        dark_blue: '#3b438c',
        purple: '#763e9e',
        dark_purple: '#36145e',
        yellow: '#ca8411',
        red: '#c92343',
    }[tint]);
}, function (_a) {
    var tint = _a.tint;
    return ({
        green: '#f5fafa',
        blue: '#f0f7fc',
        dark_blue: '#efeff8',
        purple: '#f3eef9',
        dark_purple: '#eeeaf2',
        yellow: '#fefbf2',
        red: '#fdedf0',
    }[tint]);
}, theme_1.getFontSize('small'));
exports.Tag = Tag;
var TagsContainer = styled_components_1.default.ul(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  flex-wrap: wrap;\n  padding-inline-start: 0;\n  margin-block-end: 0;\n  margin-block-start: 0;\n  list-style-type: none;\n  gap: 10px;\n"], ["\n  display: flex;\n  flex-wrap: wrap;\n  padding-inline-start: 0;\n  margin-block-end: 0;\n  margin-block-start: 0;\n  list-style-type: none;\n  gap: 10px;\n"])));
var Tags = react_1.default.forwardRef(function (_a, forwardedRef) {
    var children = _a.children, rest = __rest(_a, ["children"]);
    var getTitle = function (children) {
        var label = '';
        react_1.default.Children.map(children, function (child) {
            if (typeof child === 'string') {
                label += child;
            }
        });
        return label;
    };
    return (react_1.default.createElement(TagsContainer, __assign({ ref: forwardedRef }, rest), react_1.default.Children.map(children, function (child) {
        var _a, _b;
        if (react_1.isValidElement(child) && child.type === Tag) {
            return react_1.default.cloneElement(child, {
                title: ((_a = child.props) === null || _a === void 0 ? void 0 : _a.title) || getTitle((_b = child.props) === null || _b === void 0 ? void 0 : _b.children),
            });
        }
        throw new Error('A Tags element can only have Tag children');
    })));
});
exports.Tags = Tags;
var templateObject_1, templateObject_2;
//# sourceMappingURL=Tags.js.map