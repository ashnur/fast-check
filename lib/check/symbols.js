"use strict";
exports.__esModule = true;
/**
 * Generated instances having a method [cloneMethod]
 * will be automatically cloned whenever necessary
 *
 * This is pretty useful for statefull generated values.
 * For instance, whenever you use a Stream you directly impact it.
 * Implementing [cloneMethod] on the generated Stream would force
 * the framework to clone it whenever it has to re-use it
 * (mainly required for chrinking process)
 */
exports.cloneMethod = Symbol["for"]('fast-check/cloneMethod');
/** @hidden */
exports.hasCloneMethod = function (instance) {
    // Valid values for `instanceof Object`:
    //   [], {}, () => {}, function() {}, async () => {}, async function() {}
    // Invalid ones:
    //   1, "", Symbol(), null, undefined
    return instance instanceof Object && typeof instance[exports.cloneMethod] === 'function';
};
//# sourceMappingURL=symbols.js.map