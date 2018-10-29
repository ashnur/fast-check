"use strict";
exports.__esModule = true;
var pure_rand_1 = require("pure-rand");
/**
 * @hidden
 *
 * Configuration extracted from incoming Parameters
 *
 * It handles and set the default settings that will be used by runners.
 */
var QualifiedParameters = /** @class */ (function () {
    function QualifiedParameters() {
    }
    /**
     * Extract a runner configuration from Parameters
     * @param p Incoming Parameters
     */
    QualifiedParameters.read = function (p) {
        return {
            seed: QualifiedParameters.readSeed(p),
            randomType: QualifiedParameters.readRandomType(p),
            numRuns: QualifiedParameters.readNumRuns(p),
            maxSkipsPerRun: QualifiedParameters.readMaxSkipsPerRun(p),
            timeout: QualifiedParameters.readTimeout(p),
            logger: QualifiedParameters.readLogger(p),
            path: QualifiedParameters.readPath(p),
            unbiased: QualifiedParameters.readUnbiased(p),
            verbose: QualifiedParameters.readVerbose(p),
            examples: QualifiedParameters.readExamples(p)
        };
    };
    /**
     * Extract a runner configuration from Parameters
     * or build one based on a maximal number of runs
     *
     * @param p Incoming Parameters or maximal number of runs
     */
    QualifiedParameters.readOrNumRuns = function (p) {
        if (p == null)
            return QualifiedParameters.read();
        if (typeof p === 'number')
            return QualifiedParameters.read({ numRuns: p });
        return QualifiedParameters.read(p);
    };
    QualifiedParameters.readSeed = function (p) { return (p != null && p.seed != null ? p.seed : Date.now()); };
    QualifiedParameters.readRandomType = function (p) {
        if (p == null || p.randomType == null)
            return pure_rand_1["default"].xorshift128plus;
        if (typeof p.randomType === 'string') {
            switch (p.randomType) {
                case 'mersenne':
                    return pure_rand_1["default"].mersenne;
                case 'congruential':
                    return pure_rand_1["default"].congruential;
                case 'congruential32':
                    return pure_rand_1["default"].congruential32;
                case 'xorshift128plus':
                    return pure_rand_1["default"].xorshift128plus;
                default:
                    throw new Error("Invalid random specified: '" + p.randomType + "'");
            }
        }
        return p.randomType;
    };
    QualifiedParameters.readNumRuns = function (p) {
        var defaultValue = 100;
        if (p == null)
            return defaultValue;
        if (p.numRuns != null)
            return p.numRuns;
        if (p.num_runs != null)
            return p.num_runs;
        return defaultValue;
    };
    QualifiedParameters.readMaxSkipsPerRun = function (p) {
        return p != null && p.maxSkipsPerRun != null ? p.maxSkipsPerRun : 100;
    };
    QualifiedParameters.readTimeout = function (p) {
        return p != null && p.timeout != null ? p.timeout : null;
    };
    QualifiedParameters.readPath = function (p) { return (p != null && p.path != null ? p.path : ''); };
    QualifiedParameters.readUnbiased = function (p) { return p != null && p.unbiased === true; };
    QualifiedParameters.readVerbose = function (p) { return p != null && p.verbose === true; };
    QualifiedParameters.readLogger = function (p) {
        if (p != null && p.logger != null)
            return p.logger;
        return function (v) {
            // tslint:disable-next-line:no-console
            console.log(v);
        };
    };
    QualifiedParameters.readExamples = function (p) { return (p != null && p.examples != null ? p.examples : []); };
    return QualifiedParameters;
}());
exports.QualifiedParameters = QualifiedParameters;
