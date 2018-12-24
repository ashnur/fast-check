"use strict";
// All the implementations below are directly taken from https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference
exports.__esModule = true;
/** @hidden */
exports.ObjectEntriesImpl = function (obj) {
    var ownProps = Object.keys(obj);
    var i = ownProps.length;
    var resArray = new Array(i);
    while (i--)
        resArray[i] = [ownProps[i], obj[ownProps[i]]];
    return resArray;
};
/** @hidden */
exports.ObjectEntries = Object.entries ? Object.entries : exports.ObjectEntriesImpl;
/** @hidden */
var repeatUpToLength = function (src, targetLength) {
    for (; targetLength > src.length; src += src)
        ;
    return src;
};
/** @hidden */
exports.StringPadEndImpl = function (src, targetLength, padString) {
    targetLength = targetLength >> 0;
    if (padString === '' || src.length > targetLength)
        return String(src);
    targetLength = targetLength - src.length;
    padString = repeatUpToLength(typeof padString !== 'undefined' ? String(padString) : ' ', targetLength);
    return String(src) + padString.slice(0, targetLength);
};
/** @hidden */
exports.StringPadStartImpl = function (src, targetLength, padString) {
    targetLength = targetLength >> 0;
    if (padString === '' || src.length > targetLength)
        return String(src);
    targetLength = targetLength - src.length;
    padString = repeatUpToLength(typeof padString !== 'undefined' ? String(padString) : ' ', targetLength);
    return padString.slice(0, targetLength) + String(src);
};
/** @hidden */
var wrapStringPad = function (method) {
    return (method &&
        (function (src, targetLength, padString) { return method.call(src, targetLength, padString); }));
};
/** @hidden */
exports.StringPadEnd = wrapStringPad(String.prototype.padEnd) || exports.StringPadEndImpl;
/** @hidden */
exports.StringPadStart = wrapStringPad(String.prototype.padStart) || exports.StringPadStartImpl;
/** @hidden */
exports.StringFromCodePointLimitedImpl = function (codePoint) {
    if (codePoint < 0x10000)
        return String.fromCharCode(codePoint);
    codePoint -= 0x10000;
    return String.fromCharCode((codePoint >> 10) + 0xd800) + String.fromCharCode((codePoint % 0x400) + 0xdc00);
};
/** @hidden */
exports.StringFromCodePointLimited = String.fromCodePoint ? String.fromCodePoint : exports.StringFromCodePointLimitedImpl;
// only takes into account a single code point
//# sourceMappingURL=polyfills.js.map