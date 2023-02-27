"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pagination = void 0;
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importStar(require("styled-components"));
var theme_1 = require("../../theme");
var PaginationItem_1 = require("./PaginationItem");
var MAX_PAGINATION_ITEMS_WITHOUT_SEPARATOR = 4;
var Pagination = function (_a) {
    var currentPage = _a.currentPage, totalItems = _a.totalItems, _b = _a.itemsPerPage, itemsPerPage = _b === void 0 ? 25 : _b, sticky = _a.sticky, followPage = _a.followPage;
    if (itemsPerPage <= 0) {
        throw new Error('Number of items per page cannot be lower or equal than 0');
    }
    var numberOfPages = Math.ceil(totalItems / itemsPerPage);
    if (numberOfPages <= 1) {
        return null;
    }
    if (currentPage > numberOfPages) {
        throw new Error('The current page cannot be greater than the total number of pages');
    }
    var pages = computePages(currentPage, numberOfPages);
    return (react_1.default.createElement(PaginationContainer, { sticky: sticky }, pages.map(function (page, index) {
        return (react_1.default.createElement(PaginationItem_1.PaginationItem, { currentPage: page === currentPage, key: index, followPage: followPage, page: page }));
    })));
};
exports.Pagination = Pagination;
var PaginationContainer = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  height: 44px;\n  margin: 10px 0 10px 0;\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  gap: 10px;\n  background-color: ", ";\n\n  ", "\n"], ["\n  height: 44px;\n  margin: 10px 0 10px 0;\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  gap: 10px;\n  background-color: ", ";\n\n  ", "\n"])), (0, theme_1.getColor)('white'), function (_a) {
    var sticky = _a.sticky;
    return undefined !== sticky && (0, styled_components_1.css)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      position: sticky;\n      top: ", "px;\n      z-index: 9;\n    "], ["\n      position: sticky;\n      top: ", "px;\n      z-index: 9;\n    "])), sticky);
});
function computePages(currentPage, numberOfPages) {
    if (numberOfPages <= MAX_PAGINATION_ITEMS_WITHOUT_SEPARATOR) {
        return Array.from(Array(numberOfPages).keys()).map(function (page) { return page + 1; });
    }
    var FIRST_PAGE = 1;
    var SECOND_PAGE = 2;
    var THIRD_PAGE = 3;
    var FOURTH_PAGE = 4;
    var LAST_PAGE = numberOfPages;
    var SECOND_LAST = LAST_PAGE - 1;
    var THIRD_LAST = LAST_PAGE - 2;
    var FOURTH_LAST = LAST_PAGE - 3;
    var PREVIOUS_PAGE = currentPage - 1;
    var NEXT_PAGE = currentPage + 1;
    var pages = [FIRST_PAGE];
    if (currentPage >= FOURTH_PAGE) {
        pages.push(PaginationItem_1.PAGINATION_SEPARATOR);
    }
    if (currentPage > SECOND_PAGE) {
        if (currentPage === LAST_PAGE) {
            pages.push(THIRD_LAST);
        }
        pages.push(PREVIOUS_PAGE);
    }
    if (currentPage !== FIRST_PAGE && currentPage !== LAST_PAGE) {
        pages.push(currentPage);
    }
    if (currentPage < SECOND_LAST) {
        pages.push(NEXT_PAGE);
    }
    if (currentPage === FIRST_PAGE) {
        pages.push(THIRD_PAGE);
    }
    if (currentPage <= FOURTH_LAST) {
        pages.push(PaginationItem_1.PAGINATION_SEPARATOR);
    }
    pages.push(LAST_PAGE);
    return pages;
}
var templateObject_1, templateObject_2;
//# sourceMappingURL=Pagination.js.map