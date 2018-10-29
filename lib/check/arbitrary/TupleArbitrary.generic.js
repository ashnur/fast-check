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
exports.__esModule = true;
var Stream_1 = require("../../stream/Stream");
var Arbitrary_1 = require("./definition/Arbitrary");
var Shrinkable_1 = require("./definition/Shrinkable");
/** @hidden */
var GenericTupleArbitrary = /** @class */ (function (_super) {
    __extends(GenericTupleArbitrary, _super);
    function GenericTupleArbitrary(arbs) {
        var _this = _super.call(this) || this;
        _this.arbs = arbs;
        for (var idx = 0; idx !== arbs.length; ++idx) {
            var arb = arbs[idx];
            if (arb == null || arb.generate == null)
                throw new Error("Invalid parameter encountered at index " + idx + ": expecting an Arbitrary");
        }
        return _this;
    }
    GenericTupleArbitrary.wrapper = function (shrinkables) {
        return new Shrinkable_1.Shrinkable(shrinkables.map(function (s) { return s.value; }), function () {
            return GenericTupleArbitrary.shrinkImpl(shrinkables).map(GenericTupleArbitrary.wrapper);
        });
    };
    GenericTupleArbitrary.prototype.generate = function (mrng) {
        return GenericTupleArbitrary.wrapper(this.arbs.map(function (a) { return a.generate(mrng); }));
    };
    GenericTupleArbitrary.shrinkImpl = function (value) {
        // shrinking one by one is the not the most comprehensive
        // but allows a reasonable number of entries in the shrink
        var s = Stream_1.Stream.nil();
        var _loop_1 = function (idx) {
            s = s.join(value[idx].shrink().map(function (v) {
                return value
                    .slice(0, idx)
                    .concat([v])
                    .concat(value.slice(idx + 1));
            }));
        };
        for (var idx = 0; idx !== value.length; ++idx) {
            _loop_1(idx);
        }
        return s;
    };
    GenericTupleArbitrary.prototype.withBias = function (freq) {
        return new GenericTupleArbitrary(this.arbs.map(function (a) { return a.withBias(freq); }));
    };
    return GenericTupleArbitrary;
}(Arbitrary_1.Arbitrary));
exports.GenericTupleArbitrary = GenericTupleArbitrary;
/**
 * For tuples produced by the provided `arbs`
 * @param arbs Ordered list of arbitraries
 */
function genericTuple(arbs) {
    return new GenericTupleArbitrary(arbs);
}
exports.genericTuple = genericTuple;
