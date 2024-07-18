"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectorTheme = exports.sharedCatalogsTheme = exports.onboarderTheme = exports.pimTheme = exports.themes = void 0;
var pim_1 = require("./pim");
Object.defineProperty(exports, "pimTheme", { enumerable: true, get: function () { return pim_1.pimTheme; } });
var onboarder_1 = require("./onboarder");
Object.defineProperty(exports, "onboarderTheme", { enumerable: true, get: function () { return onboarder_1.onboarderTheme; } });
var shared_catalogs_1 = require("./shared-catalogs");
Object.defineProperty(exports, "sharedCatalogsTheme", { enumerable: true, get: function () { return shared_catalogs_1.sharedCatalogsTheme; } });
var connector_1 = require("./connector");
Object.defineProperty(exports, "connectorTheme", { enumerable: true, get: function () { return connector_1.connectorTheme; } });
var themes = [pim_1.pimTheme, onboarder_1.onboarderTheme, shared_catalogs_1.sharedCatalogsTheme, connector_1.connectorTheme];
exports.themes = themes;
//# sourceMappingURL=index.js.map