"use strict";
exports.__esModule = true;
var stringify_1 = require("../../../utils/stringify");
/** @hidden */
function throwIfFailed(out) {
    if (out.failed) {
        if (out.counterexample == null) {
            throw new Error("Failed to run property, too many pre-condition failures encountered\n\nRan " + out.numRuns + " time(s)\nSkipped " + out.numSkips + " time(s)\n\nHint (1): Try to reduce the number of rejected values by combining map, flatMap and built-in arbitraries\nHint (2): Increase failure tolerance by setting maxSkipsPerRun to an higher value");
        }
        throw new Error("Property failed after " + out.numRuns + " tests\n{ seed: " + out.seed + ", path: \"" + out.counterexamplePath + "\" }\nCounterexample: " + stringify_1.stringify(out.counterexample) + "\nShrunk " + out.numShrinks + " time(s)\nGot error: " + out.error + "\n\n" + (out.failures.length === 0
            ? 'Hint: Enable verbose mode in order to have the list of all failing values encountered during the run'
            : "Encountered failures were:\n- " + out.failures.map(stringify_1.stringify).join('\n- ')));
    }
}
exports.throwIfFailed = throwIfFailed;
