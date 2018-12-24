"use strict";
exports.__esModule = true;
var PreconditionFailure_1 = require("./PreconditionFailure");
/**
 * Add pre-condition checks inside a property execution
 * @param expectTruthy cancel the run whenever this value is falsy
 */
exports.pre = function (expectTruthy) {
    if (!expectTruthy) {
        throw new PreconditionFailure_1.PreconditionFailure();
    }
};
//# sourceMappingURL=Pre.js.map