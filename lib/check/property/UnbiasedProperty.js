"use strict";
exports.__esModule = true;
/** @hidden */
var UnbiasedProperty = /** @class */ (function () {
    function UnbiasedProperty(property) {
        var _this = this;
        this.property = property;
        this.isAsync = function () { return _this.property.isAsync(); };
        this.generate = function (mrng, runId) { return _this.property.generate(mrng); };
        this.run = function (v) { return _this.property.run(v); };
    }
    return UnbiasedProperty;
}());
exports.UnbiasedProperty = UnbiasedProperty;
