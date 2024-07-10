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
exports.ItemCollection = void 0;
var shared_1 = require("../../../shared");
var react_1 = __importStar(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var hooks_1 = require("../../../hooks");
var usePagination_1 = require("../../../hooks/usePagination");
var Placeholder_1 = require("../../Placeholder/Placeholder");
var theme_1 = require("../../../theme");
var ItemCollectionContainer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  max-height: 320px;\n  overflow-y: auto;\n  overflow-x: hidden;\n"], ["\n  max-height: 320px;\n  overflow-y: auto;\n  overflow-x: hidden;\n"])));
var NoResultPlaceholderContainer = (0, styled_components_1.default)(Placeholder_1.Placeholder)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  margin: 10px 10px 20px 10px;\n  & > div {\n    font-size: ", ";\n  }\n"], ["\n  margin: 10px 10px 20px 10px;\n  & > div {\n    font-size: ", ";\n  }\n"])), (0, theme_1.getFontSize)('default'));
var ItemCollection = react_1.default.forwardRef(function (_a, forwardedRef) {
    var children = _a.children, onNextPage = _a.onNextPage, noResultTitle = _a.noResultTitle, noResultIllustration = _a.noResultIllustration, rest = __rest(_a, ["children", "onNextPage", "noResultTitle", "noResultIllustration"]);
    var firstItemRef = (0, react_1.useRef)(null);
    var lastItemRef = (0, react_1.useRef)(null);
    var containerRef = (0, hooks_1.useCombinedRefs)(forwardedRef);
    var handleKeyDown = (0, react_1.useCallback)(function (event) {
        var _a, _b;
        if (null !== event.currentTarget) {
            if (event.key === shared_1.Key.ArrowDown) {
                (_a = event.currentTarget.nextSibling) === null || _a === void 0 ? void 0 : _a.focus();
                event.preventDefault();
            }
            if (event.key === shared_1.Key.ArrowUp) {
                (_b = event.currentTarget.previousSibling) === null || _b === void 0 ? void 0 : _b.focus();
                event.preventDefault();
            }
        }
    }, []);
    var childrenCount = react_1.Children.toArray(children).filter(react_1.isValidElement).length;
    var decoratedChildren = react_1.Children.map(children, function (child, index) {
        if ((0, react_1.isValidElement)(child)) {
            return (0, react_1.cloneElement)(child, {
                ref: 0 === index ? firstItemRef : index === childrenCount - 1 ? lastItemRef : undefined,
                onKeyDown: handleKeyDown,
            });
        }
        return child;
    });
    (0, usePagination_1.usePagination)(containerRef, lastItemRef, onNextPage, true);
    (0, hooks_1.useAutoFocus)(firstItemRef);
    return (react_1.default.createElement(ItemCollectionContainer, __assign({ role: "listbox" }, rest, { ref: containerRef }), childrenCount
        ? decoratedChildren
        : noResultIllustration &&
            noResultTitle && react_1.default.createElement(NoResultPlaceholderContainer, { illustration: noResultIllustration, title: noResultTitle })));
});
exports.ItemCollection = ItemCollection;
var templateObject_1, templateObject_2;
//# sourceMappingURL=ItemCollection.js.map