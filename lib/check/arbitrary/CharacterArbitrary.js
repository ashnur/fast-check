"use strict";
exports.__esModule = true;
var polyfills_1 = require("../../utils/polyfills");
var IntegerArbitrary_1 = require("./IntegerArbitrary");
/** @hidden */
function CharacterArbitrary(min, max, mapToCode) {
    return IntegerArbitrary_1.integer(min, max).map(function (n) { return polyfills_1.StringFromCodePointLimited(mapToCode(n)); });
}
/** @hidden */
var preferPrintableMapper = function (v) {
    if (v < 95)
        return v + 0x20; // 0x20-0x7e
    if (v <= 0x7e)
        return v - 95;
    return v;
};
/**
 * For single printable ascii characters - char code between 0x20 (included) and 0x7e (included)
 * @see https://www.ascii-code.com/
 */
function char() {
    // Only printable characters: https://www.ascii-code.com/
    return CharacterArbitrary(0x20, 0x7e, function (v) { return v; });
}
exports.char = char;
/**
 * For single hexadecimal characters - 0-9 or a-f
 */
function hexa() {
    function mapper(v) {
        return v < 10
            ? v + 48 // 0-9
            : v + 97 - 10; // a-f
    }
    return CharacterArbitrary(0, 15, mapper);
}
exports.hexa = hexa;
/**
 * For single base64 characters - A-Z, a-z, 0-9, + or /
 */
function base64() {
    function mapper(v) {
        if (v < 26)
            return v + 65; // A-Z
        if (v < 52)
            return v + 97 - 26; // a-z
        if (v < 62)
            return v + 48 - 52; // 0-9
        return v === 62 ? 43 : 47; // +/
    }
    return CharacterArbitrary(0, 63, mapper);
}
exports.base64 = base64;
/**
 * For single ascii characters - char code between 0x00 (included) and 0x7f (included)
 */
function ascii() {
    return CharacterArbitrary(0x00, 0x7f, preferPrintableMapper);
}
exports.ascii = ascii;
/**
 * For single characters - all values in 0x0000-0xffff can be generated
 *
 * WARNING:
 *
 * Some generated characters might appear invalid regarding UCS-2 and UTF-16 encoding.
 * Indeed values within 0xd800 and 0xdfff constitute surrogate pair characters and are illegal without their paired character.
 */
function char16bits() {
    return CharacterArbitrary(0x0000, 0xffff, preferPrintableMapper);
}
exports.char16bits = char16bits;
/**
 * For single unicode characters defined in the BMP plan - char code between 0x0000 (included) and 0xffff (included) and without the range 0xd800 to 0xdfff (surrogate pair characters)
 */
function unicode() {
    // Characters in the range: U+D800 to U+DFFF
    // are called 'surrogate pairs', they cannot be defined alone and come by pairs
    // JavaScript function 'fromCodePoint' can handle those
    // This unicode builder is able to produce a subset of UTF-16 characters called UCS-2
    // You can refer to 'fromCharCode' documentation for more details
    var gapSize = 0xdfff + 1 - 0xd800;
    function mapping(v) {
        if (v < 0xd800)
            return preferPrintableMapper(v);
        return v + gapSize;
    }
    return CharacterArbitrary(0x0000, 0xffff - gapSize, mapping);
}
exports.unicode = unicode;
/**
 * For single unicode characters - any of the code points defined in the unicode standard
 *
 * WARNING: Generated values can have a length greater than 1.
 *
 * @see https://tc39.github.io/ecma262/#sec-utf16encoding
 */
function fullUnicode() {
    // Be aware that 'characters' can have a length greater than 1
    // More details on: https://tc39.github.io/ecma262/#sec-utf16encoding
    // This unicode builder is able to produce all the UTF-16 characters
    // It only produces valid UTF-16 code points
    var gapSize = 0xdfff + 1 - 0xd800;
    function mapping(v) {
        if (v < 0xd800)
            return preferPrintableMapper(v);
        return v + gapSize;
    }
    return CharacterArbitrary(0x0000, 0x10ffff - gapSize, mapping);
}
exports.fullUnicode = fullUnicode;
//# sourceMappingURL=CharacterArbitrary.js.map