"use strict";
exports.__esModule = true;
var Stream_1 = require("../../../stream/Stream");
/**
 * A Shrinkable<T> holds an internal value of type `T`
 * and can shrink it to smaller `T` values
 */
var Shrinkable = /** @class */ (function () {
    /**
     * @param value Internal value of the shrinkable
     * @param shrink Function producing Stream of shrinks associated to value
     */
    function Shrinkable(value, shrink) {
        if (shrink === void 0) { shrink = function () { return Stream_1.Stream.nil(); }; }
        this.value = value;
        this.shrink = shrink;
    }
    /**
     * Create another shrinkable by mapping all values using the provided `mapper`
     * Both the original value and the shrunk ones are impacted
     *
     * @param mapper Map function, to produce a new element based on an old one
     * @returns New shrinkable with mapped elements
     */
    Shrinkable.prototype.map = function (mapper) {
        var _this = this;
        return new Shrinkable(mapper(this.value), function () { return _this.shrink().map(function (v) { return v.map(mapper); }); });
    };
    /**
     * Create another shrinkable
     * by filtering its shrunk values against `predicate`
     *
     * All the shrunk values produced by the resulting `Shrinkable<T>`
     * satisfy `predicate(value) == true`
     *
     * @param predicate Predicate, to test each produced element. Return true to keep the element, false otherwise
     * @returns New shrinkable filtered using predicate
     */
    Shrinkable.prototype.filter = function (predicate) {
        var _this = this;
        return new Shrinkable(this.value, function () {
            return _this.shrink()
                .filter(function (v) { return predicate(v.value); })
                .map(function (v) { return v.filter(predicate); });
        });
    };
    return Shrinkable;
}());
exports.Shrinkable = Shrinkable;
