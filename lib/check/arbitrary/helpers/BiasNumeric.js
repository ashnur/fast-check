"use strict";
exports.__esModule = true;
/** @hidden */
function biasNumeric(min, max, Ctor, logLike) {
    if (min === max) {
        return new Ctor(min, max);
    }
    if (min < 0) {
        return max > 0
            ? new Ctor(-logLike(-min), logLike(max)) // min and max != 0
            : new Ctor((max - logLike((max - min))), max); // max-min != 0
    }
    // min >= 0, so max >= 0
    return new Ctor(min, min + logLike((max - min))); // max-min != 0
}
exports.biasNumeric = biasNumeric;
//# sourceMappingURL=BiasNumeric.js.map