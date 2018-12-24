"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
exports.__esModule = true;
var ArrayArbitrary_1 = require("./ArrayArbitrary");
var BooleanArbitrary_1 = require("./BooleanArbitrary");
var ConstantArbitrary_1 = require("./ConstantArbitrary");
var DictionaryArbitrary_1 = require("./DictionaryArbitrary");
var FloatingPointArbitrary_1 = require("./FloatingPointArbitrary");
var IntegerArbitrary_1 = require("./IntegerArbitrary");
var OneOfArbitrary_1 = require("./OneOfArbitrary");
var StringArbitrary_1 = require("./StringArbitrary");
var ObjectConstraints = /** @class */ (function () {
    function ObjectConstraints(key, values, maxDepth) {
        this.key = key;
        this.values = values;
        this.maxDepth = maxDepth;
    }
    ObjectConstraints.prototype.next = function () {
        return new ObjectConstraints(this.key, this.values, this.maxDepth - 1);
    };
    /**
     * Default value of ObjectConstraints.Settings.values field
     */
    ObjectConstraints.defaultValues = function () {
        return [
            BooleanArbitrary_1.boolean(),
            IntegerArbitrary_1.integer(),
            FloatingPointArbitrary_1.double(),
            StringArbitrary_1.string(),
            OneOfArbitrary_1.oneof(StringArbitrary_1.string(), ConstantArbitrary_1.constant(null), ConstantArbitrary_1.constant(undefined)),
            OneOfArbitrary_1.oneof(FloatingPointArbitrary_1.double(), ConstantArbitrary_1.constant(-0), ConstantArbitrary_1.constant(0), ConstantArbitrary_1.constant(Number.NaN), ConstantArbitrary_1.constant(Number.POSITIVE_INFINITY), ConstantArbitrary_1.constant(Number.NEGATIVE_INFINITY), ConstantArbitrary_1.constant(Number.EPSILON), ConstantArbitrary_1.constant(Number.MIN_VALUE), ConstantArbitrary_1.constant(Number.MAX_VALUE), ConstantArbitrary_1.constant(Number.MIN_SAFE_INTEGER), ConstantArbitrary_1.constant(Number.MAX_SAFE_INTEGER))
        ];
    };
    ObjectConstraints.from = function (settings) {
        function getOr(access, value) {
            return settings != null && access() != null ? access() : value;
        }
        return new ObjectConstraints(getOr(function () { return settings.key; }, StringArbitrary_1.string()), getOr(function () { return settings.values; }, ObjectConstraints.defaultValues()), getOr(function () { return settings.maxDepth; }, 2));
    };
    return ObjectConstraints;
}());
exports.ObjectConstraints = ObjectConstraints;
/** @hidden */
var anythingInternal = function (subConstraints) {
    var potentialArbValue = __spread(subConstraints.values); // base
    if (subConstraints.maxDepth > 0) {
        potentialArbValue.push(objectInternal(subConstraints.next())); // sub-object
        potentialArbValue.push.apply(// sub-object
        potentialArbValue, __spread(subConstraints.values.map(function (arb) { return ArrayArbitrary_1.array(arb); }))); // arrays of base
        potentialArbValue.push(ArrayArbitrary_1.array(anythingInternal(subConstraints.next()))); // mixed content arrays
    }
    if (subConstraints.maxDepth > 1) {
        potentialArbValue.push(ArrayArbitrary_1.array(objectInternal(subConstraints.next().next()))); // array of Object
    }
    return OneOfArbitrary_1.oneof.apply(void 0, __spread(potentialArbValue));
};
/** @hidden */
var objectInternal = function (constraints) {
    return DictionaryArbitrary_1.dictionary(constraints.key, anythingInternal(constraints));
};
function anything(settings) {
    return anythingInternal(ObjectConstraints.from(settings));
}
exports.anything = anything;
function object(settings) {
    return objectInternal(ObjectConstraints.from(settings));
}
exports.object = object;
/** @hidden */
function jsonSettings(stringArbitrary, maxDepth) {
    var key = stringArbitrary;
    var values = [BooleanArbitrary_1.boolean(), IntegerArbitrary_1.integer(), FloatingPointArbitrary_1.double(), stringArbitrary, ConstantArbitrary_1.constant(null)];
    return maxDepth != null ? { key: key, values: values, maxDepth: maxDepth } : { key: key, values: values };
}
function jsonObject(maxDepth) {
    return anything(jsonSettings(StringArbitrary_1.string(), maxDepth));
}
exports.jsonObject = jsonObject;
function unicodeJsonObject(maxDepth) {
    return anything(jsonSettings(StringArbitrary_1.unicodeString(), maxDepth));
}
exports.unicodeJsonObject = unicodeJsonObject;
function json(maxDepth) {
    var arb = maxDepth != null ? jsonObject(maxDepth) : jsonObject();
    return arb.map(JSON.stringify);
}
exports.json = json;
function unicodeJson(maxDepth) {
    var arb = maxDepth != null ? unicodeJsonObject(maxDepth) : unicodeJsonObject();
    return arb.map(JSON.stringify);
}
exports.unicodeJson = unicodeJson;
//# sourceMappingURL=ObjectArbitrary.js.map