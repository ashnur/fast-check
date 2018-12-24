"use strict";
exports.__esModule = true;
var symbols_1 = require("../symbols");
var ConstantArbitrary_1 = require("./ConstantArbitrary");
/** @hidden */
var ContextImplem = /** @class */ (function () {
    function ContextImplem() {
        this.receivedLogs = [];
    }
    ContextImplem.prototype.log = function (data) {
        this.receivedLogs.push(data);
    };
    ContextImplem.prototype.size = function () {
        return this.receivedLogs.length;
    };
    ContextImplem.prototype.toString = function () {
        return JSON.stringify({ logs: this.receivedLogs });
    };
    ContextImplem.prototype[symbols_1.cloneMethod] = function () {
        return new ContextImplem();
    };
    return ContextImplem;
}());
/**
 * Produce a {@link Context} instance
 */
exports.context = function () { return ConstantArbitrary_1.clonedConstant(new ContextImplem()); };
//# sourceMappingURL=ContextArbitrary.js.map