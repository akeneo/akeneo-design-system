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
exports.SettingsIcon = void 0;
var react_1 = __importDefault(require("react"));
var SettingsIcon = function (_a) {
    var title = _a.title, _b = _a.size, size = _b === void 0 ? 24 : _b, _c = _a.color, color = _c === void 0 ? 'currentColor' : _c, props = __rest(_a, ["title", "size", "color"]);
    return (react_1.default.createElement("svg", __assign({ viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", width: size, height: size }, props),
        title && react_1.default.createElement("title", null, title),
        react_1.default.createElement("path", { d: "M12 15a3 3 0 100-6 3 3 0 000 6zm-9.5-5H5l.5-1.5L4 7l3-3 1.5 1.5 1.5-.47V2.5h3.953v2.53l1.547.47 2-1.5L20 6.5l-1.5 2L19 10h2.5v4H19l-.5 1.545L20 17.5 17.5 20l-2-1.5-1.547.5v2.5H10V19l-1.5-.5L7 20l-3-3 1.5-1.455L5 14H2.5v-4z", stroke: color, fill: "none", fillRule: "evenodd", strokeLinecap: "round", strokeLinejoin: "round" })));
};
exports.SettingsIcon = SettingsIcon;
//# sourceMappingURL=SettingsIcon.js.map