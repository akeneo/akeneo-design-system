"use strict";
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
exports.TableHeader = void 0;
var react_1 = __importDefault(require("react"));
var SelectableContext_1 = require("../SelectableContext");
var TableHeader = react_1.default.forwardRef(function (_a, forwardedRef) {
    var children = _a.children, rest = __rest(_a, ["children"]);
    var isSelectable = react_1.default.useContext(SelectableContext_1.SelectableContext).isSelectable;
    return (react_1.default.createElement("thead", { ref: forwardedRef },
        react_1.default.createElement("tr", __assign({}, rest),
            isSelectable && react_1.default.createElement("th", null),
            children)));
});
exports.TableHeader = TableHeader;
//# sourceMappingURL=TableHeader.js.map