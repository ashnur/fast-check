"use strict";
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
exports.__esModule = true;
var StreamHelpers_1 = require("./StreamHelpers");
var Stream = /** @class */ (function () {
    // /*DEBUG*/ // no double iteration
    // /*DEBUG*/ private isLive: boolean;
    /**
     * Create a Stream based on `g`
     * @param g Underlying data of the Stream
     */
    function Stream(g) {
        this.g = g;
        // /*DEBUG*/ this.isLive = true;
    }
    /**
     * Create an empty stream of T
     */
    Stream.nil = function () {
        return new Stream(StreamHelpers_1.nilHelper());
    };
    // /*DEBUG*/ private closeCurrentStream() {
    // /*DEBUG*/   if (! this.isLive) throw new Error('Stream has already been closed');
    // /*DEBUG*/   this.isLive = false;
    // /*DEBUG*/ }
    Stream.prototype.next = function () {
        return this.g.next();
    };
    Stream.prototype[Symbol.iterator] = function () {
        // /*DEBUG*/ this.closeCurrentStream();
        return this.g;
    };
    /**
     * Map all elements of the Stream using `f`
     *
     * WARNING: It closes the current stream
     *
     * @param f Mapper function
     */
    Stream.prototype.map = function (f) {
        // /*DEBUG*/ this.closeCurrentStream();
        return new Stream(StreamHelpers_1.mapHelper(this.g, f));
    };
    /**
     * Flat map all elements of the Stream using `f`
     *
     * WARNING: It closes the current stream
     *
     * @param f Mapper function
     */
    Stream.prototype.flatMap = function (f) {
        // /*DEBUG*/ this.closeCurrentStream();
        return new Stream(StreamHelpers_1.flatMapHelper(this.g, f));
    };
    /**
     * Drop elements from the Stream while `f(element) === true`
     *
     * WARNING: It closes the current stream
     *
     * @param f Drop condition
     */
    Stream.prototype.dropWhile = function (f) {
        var foundEligible = false;
        function helper(v) {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(foundEligible || !f(v))) return [3 /*break*/, 2];
                        foundEligible = true;
                        return [4 /*yield*/, v];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        }
        return this.flatMap(helper);
    };
    /**
     * Drop `n` first elements of the Stream
     *
     * WARNING: It closes the current stream
     *
     * @param n Number of elements to drop
     */
    Stream.prototype.drop = function (n) {
        var idx = 0;
        function helper(v) {
            return idx++ < n;
        }
        return this.dropWhile(helper);
    };
    /**
     * Take elements from the Stream while `f(element) === true`
     *
     * WARNING: It closes the current stream
     *
     * @param f Take condition
     */
    Stream.prototype.takeWhile = function (f) {
        // /*DEBUG*/ this.closeCurrentStream();
        return new Stream(StreamHelpers_1.takeWhileHelper(this.g, f));
    };
    /**
     * Take `n` first elements of the Stream
     *
     * WARNING: It closes the current stream
     *
     * @param n Number of elements to take
     */
    Stream.prototype.take = function (n) {
        var idx = 0;
        function helper(v) {
            return idx++ < n;
        }
        return this.takeWhile(helper);
    };
    /**
     * Filter elements of the Stream
     *
     * WARNING: It closes the current stream
     *
     * @param f Elements to keep
     */
    Stream.prototype.filter = function (f) {
        // /*DEBUG*/ this.closeCurrentStream();
        return new Stream(StreamHelpers_1.filterHelper(this.g, f));
    };
    /**
     * Check whether all elements of the Stream are successful for `f`
     *
     * WARNING: It closes the current stream
     *
     * @param f Condition to check
     */
    Stream.prototype.every = function (f) {
        var e_1, _a;
        try {
            // /*DEBUG*/ this.closeCurrentStream();
            for (var _b = __values(this.g), _c = _b.next(); !_c.done; _c = _b.next()) {
                var v = _c.value;
                if (!f(v)) {
                    return false;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return true;
    };
    /**
     * Check whether one of the elements of the Stream is successful for `f`
     *
     * WARNING: It closes the current stream
     *
     * @param f Condition to check
     */
    Stream.prototype.has = function (f) {
        var e_2, _a;
        try {
            // /*DEBUG*/ this.closeCurrentStream();
            for (var _b = __values(this.g), _c = _b.next(); !_c.done; _c = _b.next()) {
                var v = _c.value;
                if (f(v)) {
                    return [true, v];
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return [false, null];
    };
    /**
     * Join `others` Stream to the current Stream
     *
     * WARNING: It closes the current stream and the other ones (as soon as it iterates over them)
     *
     * @param others Streams to join to the current Stream
     */
    Stream.prototype.join = function () {
        var others = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            others[_i] = arguments[_i];
        }
        // /*DEBUG*/ this.closeCurrentStream();
        return new Stream(StreamHelpers_1.joinHelper(this.g, others));
    };
    /**
     * Take the `nth` element of the Stream of the last (if it does not exist)
     *
     * WARNING: It closes the current stream
     *
     * @param nth Position of the element to extract
     */
    Stream.prototype.getNthOrLast = function (nth) {
        var e_3, _a;
        // /*DEBUG*/ this.closeCurrentStream();
        var remaining = nth;
        var last = null;
        try {
            for (var _b = __values(this.g), _c = _b.next(); !_c.done; _c = _b.next()) {
                var v = _c.value;
                if (remaining-- === 0)
                    return v;
                last = v;
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
            }
            finally { if (e_3) throw e_3.error; }
        }
        return last;
    };
    return Stream;
}());
exports.Stream = Stream;
/**
 * Create a Stream based on `g`
 * @param g Underlying data of the Stream
 */
function stream(g) {
    return new Stream(g);
}
exports.stream = stream;
