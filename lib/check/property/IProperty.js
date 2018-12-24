"use strict";
exports.__esModule = true;
/**
 * @hidden
 * Convert runId (IProperty) into a frequency (Arbitrary)
 *
 * @param runId Id of the run starting at 0
 * @returns Frequency of bias starting at 2
 */
exports.runIdToFrequency = function (runId) { return 2 + Math.floor(Math.log(runId + 1) / Math.log(10)); };
//# sourceMappingURL=IProperty.js.map