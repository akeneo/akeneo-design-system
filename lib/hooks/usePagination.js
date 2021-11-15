"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usePagination = void 0;
var react_1 = require("react");
var usePagination = function (containerRef, lastOptionRef, onNextPage, isVisible) {
    (0, react_1.useEffect)(function () {
        var containerElement = containerRef.current;
        var lastElement = lastOptionRef.current;
        if (undefined === onNextPage ||
            null === containerElement ||
            null === lastOptionRef.current ||
            null === lastElement) {
            return;
        }
        var options = {
            root: containerElement,
            rootMargin: '0px 0px 100% 0px',
            threshold: 0,
        };
        var observer = new IntersectionObserver(function (entries) {
            var lastEntry = entries[entries.length - 1];
            if (lastEntry.isIntersecting) {
                onNextPage();
            }
        }, options);
        observer.observe(lastElement);
        return function () { return observer.unobserve(lastElement); };
    }, [onNextPage, isVisible]);
};
exports.usePagination = usePagination;
//# sourceMappingURL=usePagination.js.map