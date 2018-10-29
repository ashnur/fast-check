"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
exports.__esModule = true;
/**
 * @hidden
 *
 * Report the status of a run
 *
 * It receives notification from the runner in case of failures
 */
var RunExecution = /** @class */ (function () {
    function RunExecution(storeFailures) {
        var _this = this;
        this.storeFailures = storeFailures;
        this.isSuccess = function () { return _this.pathToFailure == null; };
        this.firstFailure = function () { return (_this.pathToFailure ? +_this.pathToFailure.split(':')[0] : -1); };
        this.numShrinks = function () { return (_this.pathToFailure ? _this.pathToFailure.split(':').length - 1 : 0); };
        this.allFailures = [];
        this.numSkips = 0;
        this.numSuccesses = 0;
    }
    RunExecution.prototype.fail = function (value, id, message) {
        if (this.storeFailures)
            this.allFailures.push(value);
        if (this.pathToFailure == null)
            this.pathToFailure = "" + id;
        else
            this.pathToFailure += ":" + id;
        this.value = value;
        this.failure = message;
    };
    RunExecution.prototype.skip = function () {
        if (this.pathToFailure == null) {
            ++this.numSkips;
        }
    };
    RunExecution.prototype.success = function () {
        if (this.pathToFailure == null) {
            ++this.numSuccesses;
        }
    };
    RunExecution.prototype.toRunDetails = function (seed, basePath, numRuns, maxSkips) {
        if (!this.isSuccess()) {
            // encountered a property failure
            return {
                failed: true,
                numRuns: this.firstFailure() + 1 - this.numSkips,
                numSkips: this.numSkips,
                numShrinks: this.numShrinks(),
                seed: seed,
                counterexample: this.value,
                counterexamplePath: RunExecution.mergePaths(basePath, this.pathToFailure),
                error: this.failure,
                failures: this.allFailures
            };
        }
        if (this.numSkips > maxSkips) {
            // too many skips
            return {
                failed: true,
                numRuns: this.numSuccesses,
                numSkips: this.numSkips,
                numShrinks: 0,
                seed: seed,
                counterexample: null,
                counterexamplePath: null,
                error: null,
                failures: []
            };
        }
        return {
            failed: false,
            numRuns: numRuns,
            numSkips: this.numSkips,
            numShrinks: 0,
            seed: seed,
            counterexample: null,
            counterexamplePath: null,
            error: null,
            failures: []
        };
    };
    RunExecution.mergePaths = function (offsetPath, path) {
        if (offsetPath.length === 0)
            return path;
        var offsetItems = offsetPath.split(':');
        var remainingItems = path.split(':');
        var middle = +offsetItems[offsetItems.length - 1] + +remainingItems[0];
        return __spread(offsetItems.slice(0, offsetItems.length - 1), ["" + middle], remainingItems.slice(1)).join(':');
    };
    return RunExecution;
}());
exports.RunExecution = RunExecution;
