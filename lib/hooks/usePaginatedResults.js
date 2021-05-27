"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usePaginatedResults = void 0;
var _1 = require(".");
var react_1 = require("react");
var usePaginatedResults = function (fetcher, dependencies, shouldFetch) {
    if (shouldFetch === void 0) { shouldFetch = true; }
    var _a = react_1.useState(null), results = _a[0], setResults = _a[1];
    var _b = react_1.useState(0), page = _b[0], setPage = _b[1];
    var _c = _1.useBooleanState(), isFetching = _c[0], startFetching = _c[1], stopFetching = _c[2];
    var _d = _1.useBooleanState(), isLastPage = _d[0], onLastPage = _d[1], notOnLastPage = _d[2];
    var isMounted = _1.useIsMounted();
    react_1.useEffect(function () {
        if (null === results)
            return;
        setPage(0);
        notOnLastPage();
        setResults(__spreadArray([], results));
    }, dependencies);
    react_1.useEffect(function () {
        if (isFetching || isLastPage || !shouldFetch)
            return;
        var fetchResults = function () { return __awaiter(void 0, void 0, void 0, function () {
            var newResults;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, fetcher(page)];
                    case 1:
                        newResults = _a.sent();
                        if (!isMounted())
                            return [2];
                        if (newResults.length === 0)
                            onLastPage();
                        setResults(function (currentResults) {
                            if (0 === page || null === currentResults)
                                return newResults;
                            return __spreadArray(__spreadArray([], currentResults), newResults);
                        });
                        stopFetching();
                        return [2];
                }
            });
        }); };
        startFetching();
        void fetchResults();
    }, [page, results, shouldFetch]);
    react_1.useEffect(function () {
        if (shouldFetch)
            return;
        setPage(0);
        setResults(null);
        notOnLastPage();
    }, [shouldFetch]);
    var fetchNextPage = function () {
        if (isFetching || isLastPage)
            return;
        setPage(function (page) { return page + 1; });
    };
    return [results !== null && results !== void 0 ? results : [], fetchNextPage];
};
exports.usePaginatedResults = usePaginatedResults;
//# sourceMappingURL=usePaginatedResults.js.map