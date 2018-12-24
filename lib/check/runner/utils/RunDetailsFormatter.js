"use strict";
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
exports.__esModule = true;
var stringify_1 = require("../../../utils/stringify");
/** @hidden */
function formatHints(hints) {
    if (hints.length === 1) {
        return "Hint: " + hints[0];
    }
    return hints.map(function (h, idx) { return "Hint (" + (idx + 1) + "): " + h; }).join('\n');
}
/** @hidden */
function formatFailures(failures) {
    return "Encountered failures were:\n- " + failures.map(stringify_1.stringify).join('\n- ');
}
/** @hidden */
function formatExecutionSummary(executionTrees) {
    var e_1, _a, e_2, _b;
    var summaryLines = [];
    var remainingTreesAndDepth = [];
    try {
        for (var _c = __values(executionTrees.reverse()), _d = _c.next(); !_d.done; _d = _c.next()) {
            var tree = _d.value;
            remainingTreesAndDepth.push({ depth: 1, tree: tree });
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_d && !_d.done && (_a = _c["return"])) _a.call(_c);
        }
        finally { if (e_1) throw e_1.error; }
    }
    while (remainingTreesAndDepth.length !== 0) {
        var currentTreeAndDepth = remainingTreesAndDepth.pop();
        // format current tree according to its depth
        var currentTree = currentTreeAndDepth.tree;
        var currentDepth = currentTreeAndDepth.depth;
        var statusIcon = currentTree.status === 0 /* Success */
            ? '\x1b[32m\u221A\x1b[0m'
            : currentTree.status === 1 /* Failure */
                ? '\x1b[31m\xD7\x1b[0m'
                : '\x1b[33m!\x1b[0m';
        var leftPadding = Array(currentDepth).join('. ');
        summaryLines.push("" + leftPadding + statusIcon + " " + stringify_1.stringify(currentTree.value));
        try {
            // push its children to the queue
            for (var _e = __values(currentTree.children.reverse()), _f = _e.next(); !_f.done; _f = _e.next()) {
                var tree = _f.value;
                remainingTreesAndDepth.push({ depth: currentDepth + 1, tree: tree });
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_f && !_f.done && (_b = _e["return"])) _b.call(_e);
            }
            finally { if (e_2) throw e_2.error; }
        }
    }
    return "Execution summary:\n" + summaryLines.join('\n');
}
/** @hidden */
function preFormatTooManySkipped(out) {
    var message = "Failed to run property, too many pre-condition failures encountered\n\nRan " + out.numRuns + " time(s)\nSkipped " + out.numSkips + " time(s)";
    var details = null;
    var hints = [
        'Try to reduce the number of rejected values by combining map, flatMap and built-in arbitraries',
        'Increase failure tolerance by setting maxSkipsPerRun to an higher value'
    ];
    if (out.verbose >= 2 /* VeryVerbose */) {
        details = formatExecutionSummary(out.executionSummary);
    }
    else {
        hints.push('Enable verbose mode at level VeryVerbose in order to check all generated values and their associated status');
    }
    return { message: message, details: details, hints: hints };
}
/** @hidden */
function preFormatFailure(out) {
    var message = "Property failed after " + out.numRuns + " tests\n{ seed: " + out.seed + ", path: \"" + out.counterexamplePath + "\" }\nCounterexample: " + stringify_1.stringify(out.counterexample) + "\nShrunk " + out.numShrinks + " time(s)\nGot error: " + out.error;
    var details = null;
    var hints = [];
    if (out.verbose >= 2 /* VeryVerbose */) {
        details = formatExecutionSummary(out.executionSummary);
    }
    else if (out.verbose === 1 /* Verbose */) {
        details = formatFailures(out.failures);
    }
    else {
        hints.push('Enable verbose mode in order to have the list of all failing values encountered during the run');
    }
    return { message: message, details: details, hints: hints };
}
/** @hidden */
function throwIfFailed(out) {
    if (!out.failed)
        return;
    var _a = out.counterexample == null ? preFormatTooManySkipped(out) : preFormatFailure(out), message = _a.message, details = _a.details, hints = _a.hints;
    var errorMessage = message;
    if (details != null)
        errorMessage += "\n\n" + details;
    if (hints.length > 0)
        errorMessage += "\n\n" + formatHints(hints);
    throw new Error(errorMessage);
}
exports.throwIfFailed = throwIfFailed;
//# sourceMappingURL=RunDetailsFormatter.js.map