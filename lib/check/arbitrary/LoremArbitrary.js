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
var loremIpsum = require("lorem-ipsum");
var Arbitrary_1 = require("./definition/Arbitrary");
var Shrinkable_1 = require("./definition/Shrinkable");
var IntegerArbitrary_1 = require("./IntegerArbitrary");
var loremGen = loremIpsum;
// @ts-ignore
if (loremIpsum["default"]) {
    // @ts-ignore
    loremGen = loremIpsum["default"];
}
/** @hidden */
var LoremArbitrary = /** @class */ (function (_super) {
    __extends(LoremArbitrary, _super);
    function LoremArbitrary(numWords, mode) {
        var _this = _super.call(this) || this;
        _this.numWords = numWords;
        _this.mode = mode;
        return _this;
    }
    LoremArbitrary.prototype.generate = function (mrng) {
        var loremString = loremGen({
            count: this.numWords,
            units: this.mode,
            random: function () { return mrng.nextDouble(); }
        });
        return new Shrinkable_1.Shrinkable(loremString);
    };
    return LoremArbitrary;
}(Arbitrary_1.Arbitrary));
function lorem(maxWordsCount, sentencesMode) {
    var mode = sentencesMode ? 'sentences' : 'words';
    return IntegerArbitrary_1.nat(maxWordsCount || 5).chain(function (numWords) { return new LoremArbitrary(numWords, mode); });
}
exports.lorem = lorem;
//# sourceMappingURL=LoremArbitrary.js.map