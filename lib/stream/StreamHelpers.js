"use strict";
// The functions in this file have been extracted from Stream.ts
// for performance reasons
//
// They were originally defined as anonymous functions
// Most of the methods of Stream were calling Stream.prototype.flatMap (eg.: map, filter...)
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
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
var Nil = /** @class */ (function () {
    function Nil() {
    }
    Nil.prototype[Symbol.iterator] = function () {
        return this;
    };
    Nil.prototype.next = function (value) {
        return { value: value, done: true };
    };
    Nil.nil = new Nil();
    return Nil;
}());
/** @hidden */
function nilHelper() {
    return Nil.nil;
}
exports.nilHelper = nilHelper;
/** @hidden */
function mapHelper(g, f) {
    var e_1, _a, g_1, g_1_1, v, e_1_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 5, 6, 7]);
                g_1 = __values(g), g_1_1 = g_1.next();
                _b.label = 1;
            case 1:
                if (!!g_1_1.done) return [3 /*break*/, 4];
                v = g_1_1.value;
                return [4 /*yield*/, f(v)];
            case 2:
                _b.sent();
                _b.label = 3;
            case 3:
                g_1_1 = g_1.next();
                return [3 /*break*/, 1];
            case 4: return [3 /*break*/, 7];
            case 5:
                e_1_1 = _b.sent();
                e_1 = { error: e_1_1 };
                return [3 /*break*/, 7];
            case 6:
                try {
                    if (g_1_1 && !g_1_1.done && (_a = g_1["return"])) _a.call(g_1);
                }
                finally { if (e_1) throw e_1.error; }
                return [7 /*endfinally*/];
            case 7: return [2 /*return*/];
        }
    });
}
exports.mapHelper = mapHelper;
/** @hidden */
function flatMapHelper(g, f) {
    var e_2, _a, g_2, g_2_1, v, e_2_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 5, 6, 7]);
                g_2 = __values(g), g_2_1 = g_2.next();
                _b.label = 1;
            case 1:
                if (!!g_2_1.done) return [3 /*break*/, 4];
                v = g_2_1.value;
                return [5 /*yield**/, __values(f(v))];
            case 2:
                _b.sent();
                _b.label = 3;
            case 3:
                g_2_1 = g_2.next();
                return [3 /*break*/, 1];
            case 4: return [3 /*break*/, 7];
            case 5:
                e_2_1 = _b.sent();
                e_2 = { error: e_2_1 };
                return [3 /*break*/, 7];
            case 6:
                try {
                    if (g_2_1 && !g_2_1.done && (_a = g_2["return"])) _a.call(g_2);
                }
                finally { if (e_2) throw e_2.error; }
                return [7 /*endfinally*/];
            case 7: return [2 /*return*/];
        }
    });
}
exports.flatMapHelper = flatMapHelper;
/** @hidden */
function filterHelper(g, f) {
    var e_3, _a, g_3, g_3_1, v, e_3_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 5, 6, 7]);
                g_3 = __values(g), g_3_1 = g_3.next();
                _b.label = 1;
            case 1:
                if (!!g_3_1.done) return [3 /*break*/, 4];
                v = g_3_1.value;
                if (!f(v)) return [3 /*break*/, 3];
                return [4 /*yield*/, v];
            case 2:
                _b.sent();
                _b.label = 3;
            case 3:
                g_3_1 = g_3.next();
                return [3 /*break*/, 1];
            case 4: return [3 /*break*/, 7];
            case 5:
                e_3_1 = _b.sent();
                e_3 = { error: e_3_1 };
                return [3 /*break*/, 7];
            case 6:
                try {
                    if (g_3_1 && !g_3_1.done && (_a = g_3["return"])) _a.call(g_3);
                }
                finally { if (e_3) throw e_3.error; }
                return [7 /*endfinally*/];
            case 7: return [2 /*return*/];
        }
    });
}
exports.filterHelper = filterHelper;
/** @hidden */
function takeWhileHelper(g, f) {
    var cur;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                cur = g.next();
                _a.label = 1;
            case 1:
                if (!(!cur.done && f(cur.value))) return [3 /*break*/, 3];
                return [4 /*yield*/, cur.value];
            case 2:
                _a.sent();
                cur = g.next();
                return [3 /*break*/, 1];
            case 3: return [2 /*return*/];
        }
    });
}
exports.takeWhileHelper = takeWhileHelper;
/** @hidden */
function joinHelper(g, others) {
    var e_4, _a, cur, others_1, others_1_1, s, cur, e_4_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                cur = g.next();
                _b.label = 1;
            case 1:
                if (!!cur.done) return [3 /*break*/, 4];
                return [4 /*yield*/, cur.value];
            case 2:
                _b.sent();
                _b.label = 3;
            case 3:
                cur = g.next();
                return [3 /*break*/, 1];
            case 4:
                _b.trys.push([4, 11, 12, 13]);
                others_1 = __values(others), others_1_1 = others_1.next();
                _b.label = 5;
            case 5:
                if (!!others_1_1.done) return [3 /*break*/, 10];
                s = others_1_1.value;
                cur = s.next();
                _b.label = 6;
            case 6:
                if (!!cur.done) return [3 /*break*/, 9];
                return [4 /*yield*/, cur.value];
            case 7:
                _b.sent();
                _b.label = 8;
            case 8:
                cur = s.next();
                return [3 /*break*/, 6];
            case 9:
                others_1_1 = others_1.next();
                return [3 /*break*/, 5];
            case 10: return [3 /*break*/, 13];
            case 11:
                e_4_1 = _b.sent();
                e_4 = { error: e_4_1 };
                return [3 /*break*/, 13];
            case 12:
                try {
                    if (others_1_1 && !others_1_1.done && (_a = others_1["return"])) _a.call(others_1);
                }
                finally { if (e_4) throw e_4.error; }
                return [7 /*endfinally*/];
            case 13: return [2 /*return*/];
        }
    });
}
exports.joinHelper = joinHelper;
//# sourceMappingURL=StreamHelpers.js.map