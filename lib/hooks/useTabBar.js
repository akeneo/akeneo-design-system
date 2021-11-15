"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTabBar = void 0;
var react_1 = require("react");
var useTabBar = function (defaultTab) {
    var _a = (0, react_1.useState)(defaultTab), current = _a[0], setCurrent = _a[1];
    var isCurrent = (0, react_1.useCallback)(function (tab) { return tab === current; }, [current]);
    var switchTo = (0, react_1.useCallback)(function (tab) { return setCurrent(tab); }, []);
    return [isCurrent, switchTo, current];
};
exports.useTabBar = useTabBar;
//# sourceMappingURL=useTabBar.js.map