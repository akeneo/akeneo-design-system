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
exports.FileXlsxIcon = void 0;
var react_1 = __importDefault(require("react"));
var FileXlsxIcon = function (_a) {
    var title = _a.title, _b = _a.size, size = _b === void 0 ? 24 : _b, _c = _a.color, color = _c === void 0 ? 'currentColor' : _c, props = __rest(_a, ["title", "size", "color"]);
    return (react_1.default.createElement("svg", __assign({ viewBox: "0 0 24 24", width: size, height: size }, props),
        title && react_1.default.createElement("title", null, title),
        react_1.default.createElement("g", { fill: "none", fillRule: "evenodd" },
            react_1.default.createElement("path", { d: "M6.5 18h10.605M6.5 14h10.605M3 2h18v20H3V2z", stroke: color, strokeLinecap: "round", strokeLinejoin: "round" }),
            react_1.default.createElement("path", { d: "M13.589 6c.24 0 .459.038.657.114.198.076.371.186.519.33l-.141.276a.233.233 0 01-.057.067.127.127 0 01-.078.023c-.034 0-.073-.017-.119-.051a1.889 1.889 0 00-.17-.113 1.388 1.388 0 00-.25-.112 1.071 1.071 0 00-.352-.051c-.13 0-.245.017-.345.053a.734.734 0 00-.25.142.585.585 0 00-.152.212.671.671 0 00-.051.262c0 .12.03.22.088.298a.762.762 0 00.235.203c.097.056.206.104.33.146.123.04.248.083.378.127.129.044.254.093.378.149.123.055.232.124.33.208a.95.95 0 01.234.309c.059.122.088.272.088.45 0 .188-.032.364-.096.53a1.22 1.22 0 01-.28.43 1.312 1.312 0 01-.454.288c-.179.07-.382.105-.61.105-.278 0-.531-.05-.76-.152a1.784 1.784 0 01-.587-.409l.168-.276a.22.22 0 01.058-.056.137.137 0 01.077-.022c.042 0 .09.022.144.067a2.4 2.4 0 00.202.149c.082.054.18.103.294.149.116.045.256.067.422.067.138 0 .261-.019.369-.057a.784.784 0 00.274-.16.695.695 0 00.173-.248.827.827 0 00.06-.321c0-.13-.03-.236-.088-.32a.734.734 0 00-.233-.208 1.625 1.625 0 00-.329-.143l-.377-.12a3.812 3.812 0 01-.379-.142 1.228 1.228 0 01-.328-.21.965.965 0 01-.232-.322 1.149 1.149 0 01-.089-.479 1.139 1.139 0 01.345-.819c.112-.11.25-.198.415-.264.166-.066.355-.099.569-.099zm-7.95.048c.042 0 .073.007.093.021.02.014.038.034.054.06l1.122 1.722a.813.813 0 01.063-.138L8.03 6.141a.282.282 0 01.059-.067.118.118 0 01.076-.026h.555L7.295 8.112l1.473 2.235h-.576a.147.147 0 01-.104-.034.318.318 0 01-.061-.077L6.875 8.433a.648.648 0 01-.054.12l-1.122 1.683a.458.458 0 01-.061.076.132.132 0 01-.098.035H5l1.479-2.208L5.06 6.048h.579zm4.281 0v3.81h1.86v.489H9.338V6.048h.582zm5.841 0c.042 0 .073.007.093.021.02.014.038.034.054.06l1.122 1.722a.813.813 0 01.063-.138l1.059-1.572a.282.282 0 01.058-.067.118.118 0 01.077-.026h.555l-1.425 2.064 1.473 2.235h-.576a.147.147 0 01-.104-.034.318.318 0 01-.061-.077l-1.152-1.803a.648.648 0 01-.054.12l-1.122 1.683a.458.458 0 01-.062.076.132.132 0 01-.097.035h-.54l1.479-2.208-1.419-2.091h.579z", fill: color }))));
};
exports.FileXlsxIcon = FileXlsxIcon;
//# sourceMappingURL=FileXlsxIcon.js.map