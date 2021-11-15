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
exports.Pill = void 0;
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var theme_1 = require("../../theme");
var PillContainer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 10px;\n  height: 10px;\n  min-width: 10px;\n  min-height: 10px;\n  background-color: ", ";\n  border-radius: 50%;\n"], ["\n  width: 10px;\n  height: 10px;\n  min-width: 10px;\n  min-height: 10px;\n  background-color: ", ";\n  border-radius: 50%;\n"])), function (_a) {
    var level = _a.level;
    return (0, theme_1.getColorForLevel)(level, 100);
});
var Pill = react_1.default.forwardRef(function (_a, forwardedRef) {
    var _b = _a.level, level = _b === void 0 ? 'warning' : _b, rest = __rest(_a, ["level"]);
    return react_1.default.createElement(PillContainer, __assign({ role: 'danger' === level ? 'alert' : undefined, level: level, ref: forwardedRef }, rest));
});
exports.Pill = Pill;
var templateObject_1;
//# sourceMappingURL=Pill.js.map