"use strict";
exports.__esModule = true;
/** @hidden */
function stringifyOne(value) {
    if (typeof value === 'string')
        return JSON.stringify(value);
    var defaultRepr = "" + value;
    if (/^\[object (Object|Null|Undefined)\]$/.exec(defaultRepr) === null)
        return defaultRepr;
    try {
        return JSON.stringify(value, function (k, v) {
            if (typeof v === 'bigint') {
                return v.toString() + 'n';
            }
            else {
                return v;
            }
        });
    }
    catch (err) {
        // ignored: object cannot be stringified using JSON.stringify
    }
    return defaultRepr;
}
/** @hidden */
function stringify(value) {
    if (Array.isArray(value))
        return "[" + value.map(stringify).join(',') + "]";
    return stringifyOne(value);
}
exports.stringify = stringify;
//# sourceMappingURL=stringify.js.map