"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Arbitrary_1 = require("./Arbitrary");
var Shrinkable_1 = require("./Shrinkable");
/**
 * Abstract class able to generate and shrink values on type `T`
 */
var ArbitraryWithShrink = /** @class */ (function (_super) {
    __extends(ArbitraryWithShrink, _super);
    function ArbitraryWithShrink() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Build the Shrinkable associated to value
     *
     * @param value Value to shrink
     * @param shrunkOnce Indicate whether its the first shrink
     * @returns Shrinkable associated to value
     */
    ArbitraryWithShrink.prototype.shrinkableFor = function (value, shrunkOnce) {
        var _this = this;
        return new Shrinkable_1.Shrinkable(value, function () { return _this.shrink(value, shrunkOnce === true).map(function (v) { return _this.shrinkableFor(v, true); }); });
    };
    return ArbitraryWithShrink;
}(Arbitrary_1.Arbitrary));
exports.ArbitraryWithShrink = ArbitraryWithShrink;
//# sourceMappingURL=ArbitraryWithShrink.js.map