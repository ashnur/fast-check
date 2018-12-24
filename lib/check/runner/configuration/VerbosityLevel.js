"use strict";
exports.__esModule = true;
/**
 * Verbosity level
 */
var VerbosityLevel;
(function (VerbosityLevel) {
    /**
     * Level 0 (default)
     *
     * Minimal reporting:
     * - minimal failing case
     * - error log corresponding to the minimal failing case
     */
    VerbosityLevel[VerbosityLevel["None"] = 0] = "None";
    /**
     * Level 1
     *
     * Failures reporting:
     * - {@link VerbosityLevel.None}
     * - list all the failures encountered during the shrinking process
     */
    VerbosityLevel[VerbosityLevel["Verbose"] = 1] = "Verbose";
    /**
     * Level 2
     *
     * Execution flow reporting:
     * - {@link VerbosityLevel.None}
     * - all runs with their associated status displayed as a tree
     */
    VerbosityLevel[VerbosityLevel["VeryVerbose"] = 2] = "VeryVerbose";
})(VerbosityLevel = exports.VerbosityLevel || (exports.VerbosityLevel = {}));
//# sourceMappingURL=VerbosityLevel.js.map