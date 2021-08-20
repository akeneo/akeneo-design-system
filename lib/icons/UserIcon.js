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
exports.UserIcon = void 0;
var react_1 = __importDefault(require("react"));
var UserIcon = function (_a) {
    var title = _a.title, _b = _a.size, size = _b === void 0 ? 24 : _b, _c = _a.color, color = _c === void 0 ? 'currentColor' : _c, props = __rest(_a, ["title", "size", "color"]);
    return (react_1.default.createElement("svg", __assign({ viewBox: "0 0 24 24", width: size, height: size }, props),
        title && react_1.default.createElement("title", null, title),
        react_1.default.createElement("g", { stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd", strokeLinecap: "round", strokeLinejoin: "round" },
            react_1.default.createElement("path", { d: "M11.9881657,13 C14.1231982,13 16.0625982,13.837602 17.4956891,15.2021291 C19.0238774,16.657204 19.9763314,18.7114561 19.9763314,20.9881657 L19.9763314,20.9881657 L4,20.9881657 C4,16.5764236 7.5764236,13 11.9881657,13 Z M12,3.00430915 C14.6470453,3.00430915 16.7928994,5.15016331 16.7928994,7.79720856 C16.7928994,10.4442538 14.6470453,12.590108 12,12.590108 C9.35295475,12.590108 7.20710059,10.4442538 7.20710059,7.79720856 C7.20710059,5.15016331 9.35295475,3.00430915 12,3.00430915 Z", stroke: color }))));
};
exports.UserIcon = UserIcon;
//# sourceMappingURL=UserIcon.js.map