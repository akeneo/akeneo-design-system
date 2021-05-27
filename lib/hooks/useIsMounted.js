"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useIsMounted = void 0;
var react_1 = require("react");
var useIsMounted = function () {
    var isMountedRef = react_1.useRef(true);
    var isMounted = react_1.useCallback(function () { return isMountedRef.current; }, []);
    react_1.useEffect(function () {
        return function () {
            isMountedRef.current = false;
        };
    }, []);
    return isMounted;
};
exports.useIsMounted = useIsMounted;
//# sourceMappingURL=useIsMounted.js.map