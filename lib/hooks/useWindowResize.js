"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useWindowResize = void 0;
var react_1 = require("react");
var useWindowResize = function () {
    var _a = (0, react_1.useState)({ width: window.innerWidth, height: window.innerHeight }), windowSize = _a[0], setWindowSize = _a[1];
    (0, react_1.useEffect)(function () {
        var onResize = function () { return setWindowSize({ width: window.innerWidth, height: window.innerHeight }); };
        window.addEventListener('resize', onResize);
        return function () { return window.removeEventListener('resize', onResize); };
    });
    return windowSize;
};
exports.useWindowResize = useWindowResize;
//# sourceMappingURL=useWindowResize.js.map