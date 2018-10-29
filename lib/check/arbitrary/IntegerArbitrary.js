"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
exports.__esModule = true;
var Stream_1 = require("../../stream/Stream");
var ArbitraryWithShrink_1 = require("./definition/ArbitraryWithShrink");
var BiasedArbitraryWrapper_1 = require("./definition/BiasedArbitraryWrapper");
var Shrinkable_1 = require("./definition/Shrinkable");
/** @hidden */
var IntegerArbitrary = /** @class */ (function (_super) {
    __extends(IntegerArbitrary, _super);
    function IntegerArbitrary(min, max) {
        var _this = _super.call(this) || this;
        _this.biasedIntegerArbitrary = null;
        _this.min = min === undefined ? IntegerArbitrary.MIN_INT : min;
        _this.max = max === undefined ? IntegerArbitrary.MAX_INT : max;
        return _this;
    }
    IntegerArbitrary.prototype.wrapper = function (value, shrunkOnce) {
        var _this = this;
        return new Shrinkable_1.Shrinkable(value, function () { return _this.shrink(value, shrunkOnce).map(function (v) { return _this.wrapper(v, true); }); });
    };
    IntegerArbitrary.prototype.generate = function (mrng) {
        return this.wrapper(mrng.nextInt(this.min, this.max), false);
    };
    IntegerArbitrary.prototype.shrink_to = function (value, target, shrunkOnce) {
        var realGap = value - target;
        function shrink_decr() {
            var gap, toremove;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        gap = shrunkOnce ? Math.floor(realGap / 2) : realGap;
                        toremove = gap;
                        _a.label = 1;
                    case 1:
                        if (!(toremove > 0)) return [3 /*break*/, 4];
                        return [4 /*yield*/, value - toremove];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        toremove = Math.floor(toremove / 2);
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        }
        function shrink_incr() {
            var gap, toremove;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        gap = shrunkOnce ? Math.ceil(realGap / 2) : realGap;
                        toremove = gap;
                        _a.label = 1;
                    case 1:
                        if (!(toremove < 0)) return [3 /*break*/, 4];
                        return [4 /*yield*/, value - toremove];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        toremove = Math.ceil(toremove / 2);
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        }
        return realGap > 0 ? Stream_1.stream(shrink_decr()) : Stream_1.stream(shrink_incr());
    };
    IntegerArbitrary.prototype.shrink = function (value, shrunkOnce) {
        if (this.min <= 0 && this.max >= 0) {
            return this.shrink_to(value, 0, shrunkOnce === true);
        }
        return value < 0
            ? this.shrink_to(value, this.max, shrunkOnce === true)
            : this.shrink_to(value, this.min, shrunkOnce === true);
    };
    IntegerArbitrary.prototype.pureBiasedArbitrary = function () {
        if (this.biasedIntegerArbitrary != null) {
            return this.biasedIntegerArbitrary;
        }
        var log2 = function (v) { return Math.floor(Math.log(v) / Math.log(2)); };
        if (this.min === this.max) {
            this.biasedIntegerArbitrary = new IntegerArbitrary(this.min, this.max);
        }
        else if (this.min < 0) {
            this.biasedIntegerArbitrary =
                this.max > 0
                    ? new IntegerArbitrary(-log2(-this.min), log2(this.max)) // min and max != 0
                    : new IntegerArbitrary(this.max - log2(this.max - this.min), this.max); // max-min != 0
        }
        else {
            // min >= 0, so max >= 0
            this.biasedIntegerArbitrary = new IntegerArbitrary(this.min, this.min + log2(this.max - this.min)); // max-min != 0
        }
        return this.biasedIntegerArbitrary;
    };
    IntegerArbitrary.prototype.withBias = function (freq) {
        return BiasedArbitraryWrapper_1.biasWrapper(freq, this, function (originalArbitrary) { return originalArbitrary.pureBiasedArbitrary(); });
    };
    IntegerArbitrary.MIN_INT = 0x80000000 | 0;
    IntegerArbitrary.MAX_INT = 0x7fffffff | 0;
    return IntegerArbitrary;
}(ArbitraryWithShrink_1.ArbitraryWithShrink));
function integer(a, b) {
    return b === undefined ? new IntegerArbitrary(undefined, a) : new IntegerArbitrary(a, b);
}
exports.integer = integer;
function nat(a) {
    return new IntegerArbitrary(0, a);
}
exports.nat = nat;
