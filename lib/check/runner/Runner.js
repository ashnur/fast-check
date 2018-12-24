"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
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
var Stream_1 = require("../../stream/Stream");
var TimeoutProperty_1 = require("../property/TimeoutProperty");
var UnbiasedProperty_1 = require("../property/UnbiasedProperty");
var QualifiedParameters_1 = require("./configuration/QualifiedParameters");
var RunExecution_1 = require("./reporter/RunExecution");
var Tosser_1 = require("./Tosser");
var PathWalker_1 = require("./utils/PathWalker");
var RunDetailsFormatter_1 = require("./utils/RunDetailsFormatter");
/** @hidden */
function runIt(property, initialValues, maxInitialIterations, remainingSkips, verbose) {
    var e_1, _a;
    var runExecution = new RunExecution_1.RunExecution(verbose);
    var done = false;
    function g() {
        var n;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(--maxInitialIterations !== -1 && remainingSkips >= 0)) return [3 /*break*/, 2];
                    n = initialValues.next();
                    if (n.done)
                        return [2 /*return*/];
                    return [4 /*yield*/, n.value()];
                case 1:
                    _a.sent();
                    return [3 /*break*/, 0];
                case 2: return [2 /*return*/];
            }
        });
    }
    var values = g();
    while (!done) {
        done = true;
        var idx = 0;
        try {
            for (var values_1 = __values(values), values_1_1 = values_1.next(); !values_1_1.done; values_1_1 = values_1.next()) {
                var v = values_1_1.value;
                var out = property.run(v.value_);
                if (out != null && typeof out === 'string') {
                    runExecution.fail(v.value_, idx, out);
                    values = v.shrink();
                    done = false;
                    break;
                }
                if (out != null) {
                    // skipped the run
                    runExecution.skip(v.value_);
                    --remainingSkips;
                    ++maxInitialIterations;
                }
                else {
                    runExecution.success(v.value_);
                }
                ++idx;
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (values_1_1 && !values_1_1.done && (_a = values_1["return"])) _a.call(values_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    }
    return runExecution;
}
/** @hidden */
function asyncRunIt(property, initialValues, maxInitialIterations, remainingSkips, verbose) {
    return __awaiter(this, void 0, void 0, function () {
        function g() {
            var n;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(--maxInitialIterations !== -1 && remainingSkips >= 0)) return [3 /*break*/, 2];
                        n = initialValues.next();
                        if (n.done)
                            return [2 /*return*/];
                        return [4 /*yield*/, n.value()];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 0];
                    case 2: return [2 /*return*/];
                }
            });
        }
        var e_2, _a, runExecution, done, values, idx, values_2, values_2_1, v, out, e_2_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    runExecution = new RunExecution_1.RunExecution(verbose);
                    done = false;
                    values = g();
                    _b.label = 1;
                case 1:
                    if (!!done) return [3 /*break*/, 10];
                    done = true;
                    idx = 0;
                    _b.label = 2;
                case 2:
                    _b.trys.push([2, 7, 8, 9]);
                    values_2 = __values(values), values_2_1 = values_2.next();
                    _b.label = 3;
                case 3:
                    if (!!values_2_1.done) return [3 /*break*/, 6];
                    v = values_2_1.value;
                    return [4 /*yield*/, property.run(v.value_)];
                case 4:
                    out = _b.sent();
                    if (out != null && typeof out === 'string') {
                        runExecution.fail(v.value_, idx, out);
                        values = v.shrink();
                        done = false;
                        return [3 /*break*/, 6];
                    }
                    if (out != null) {
                        // skipped the run
                        runExecution.skip(v.value_);
                        --remainingSkips;
                        ++maxInitialIterations;
                    }
                    else {
                        runExecution.success(v.value_);
                    }
                    ++idx;
                    _b.label = 5;
                case 5:
                    values_2_1 = values_2.next();
                    return [3 /*break*/, 3];
                case 6: return [3 /*break*/, 9];
                case 7:
                    e_2_1 = _b.sent();
                    e_2 = { error: e_2_1 };
                    return [3 /*break*/, 9];
                case 8:
                    try {
                        if (values_2_1 && !values_2_1.done && (_a = values_2["return"])) _a.call(values_2);
                    }
                    finally { if (e_2) throw e_2.error; }
                    return [7 /*endfinally*/];
                case 9: return [3 /*break*/, 1];
                case 10: return [2 /*return*/, runExecution];
            }
        });
    });
}
/** @hidden */
function decorateProperty(rawProperty, qParams) {
    var propA = rawProperty.isAsync() && qParams.timeout != null ? new TimeoutProperty_1.TimeoutProperty(rawProperty, qParams.timeout) : rawProperty;
    return qParams.unbiased === true ? new UnbiasedProperty_1.UnbiasedProperty(propA) : propA;
}
/** @hidden */
function runnerPathWalker(valueProducers, path) {
    var pathPoints = path.split(':');
    var pathStream = Stream_1.stream(valueProducers)
        .drop(pathPoints.length > 0 ? +pathPoints[0] : 0)
        .map(function (producer) { return producer(); });
    var adaptedPath = __spread(['0'], pathPoints.slice(1)).join(':');
    return Stream_1.stream(PathWalker_1.pathWalk(adaptedPath, pathStream)).map(function (v) { return function () { return v; }; });
}
function check(rawProperty, params) {
    if (rawProperty == null || rawProperty.generate == null)
        throw new Error('Invalid property encountered, please use a valid property');
    if (rawProperty.run == null)
        throw new Error('Invalid property encountered, please use a valid property not an arbitrary');
    var qParams = QualifiedParameters_1.QualifiedParameters.read(params);
    var property = decorateProperty(rawProperty, qParams);
    var generator = Tosser_1.toss(property, qParams.seed, qParams.randomType, qParams.examples);
    var maxInitialIterations = qParams.path.length === 0 ? qParams.numRuns : -1;
    var maxSkips = qParams.numRuns * qParams.maxSkipsPerRun;
    var initialValues = qParams.path.length === 0 ? generator : runnerPathWalker(generator, qParams.path);
    return property.isAsync()
        ? asyncRunIt(property, initialValues, maxInitialIterations, maxSkips, qParams.verbose).then(function (e) {
            return e.toRunDetails(qParams.seed, qParams.path, qParams.numRuns, maxSkips);
        })
        : runIt(property, initialValues, maxInitialIterations, maxSkips, qParams.verbose).toRunDetails(qParams.seed, qParams.path, qParams.numRuns, maxSkips);
}
exports.check = check;
function assert(property, params) {
    var out = check(property, params);
    if (property.isAsync())
        return out.then(RunDetailsFormatter_1.throwIfFailed);
    else
        RunDetailsFormatter_1.throwIfFailed(out);
}
exports.assert = assert;
//# sourceMappingURL=Runner.js.map