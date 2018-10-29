"use strict";
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
exports.__esModule = true;
var Stream_1 = require("../../../stream/Stream");
/** @hidden */
function pathWalk(path, initialValues) {
    var e_1, _a;
    var values = Stream_1.stream(initialValues);
    var segments = path.split(':').map(function (text) { return +text; });
    if (segments.length === 0)
        return values;
    if (!segments.every(function (v) { return !Number.isNaN(v); })) {
        throw new Error("Unable to replay, got invalid path=" + path);
    }
    values = values.drop(segments[0]);
    try {
        for (var _b = __values(segments.slice(1)), _c = _b.next(); !_c.done; _c = _b.next()) {
            var s = _c.value;
            var valueToShrink = values.getNthOrLast(0);
            if (valueToShrink == null) {
                throw new Error("Unable to replay, got wrong path=" + path);
            }
            values = valueToShrink.shrink().drop(s);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return values;
}
exports.pathWalk = pathWalk;
