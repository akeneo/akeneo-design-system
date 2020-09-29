var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "react"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PartialCheckIcon = void 0;
    var react_1 = __importDefault(require("react"));
    var PartialCheckIcon = function (_a) {
        var _b = _a.width, width = _b === void 0 ? 27 : _b, _c = _a.height, height = _c === void 0 ? 27 : _c, _d = _a.className, className = _d === void 0 ? '' : _d;
        return (react_1.default.createElement("svg", { width: width, height: height, viewBox: "0 0 27 27" },
            react_1.default.createElement("path", { className: className, d: "M2 12.5h20", stroke: "currentColor", strokeWidth: 2, fill: "none", fillRule: "evenodd", strokeLinecap: "round", strokeLinejoin: "round" })));
    };
    exports.PartialCheckIcon = PartialCheckIcon;
});
//# sourceMappingURL=PartialCheckIcon.js.map