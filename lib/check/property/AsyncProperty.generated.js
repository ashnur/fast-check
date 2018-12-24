"use strict";
exports.__esModule = true;
var TupleArbitrary_1 = require("../arbitrary/TupleArbitrary");
var AsyncProperty_generic_1 = require("./AsyncProperty.generic");
function asyncProperty(arb0, arb1, arb2, arb3, arb4, arb5, arb6, arb7, arb8, arb9, arb10, arb11, arb12, arb13, arb14, arb15, arb16, arb17, arb18, arb19, arb20, arb21, arb22, arb23) {
    if (arb22) {
        var p_1 = arb22;
        return new AsyncProperty_generic_1.AsyncProperty(TupleArbitrary_1.tuple(arb0, arb1, arb2, arb3, arb4, arb5, arb6, arb7, arb8, arb9, arb10, arb11, arb12, arb13, arb14, arb15, arb16, arb17, arb18, arb19, arb20, arb21), function (t) { return p_1(t[0], t[1], t[2], t[3], t[4], t[5], t[6], t[7], t[8], t[9], t[10], t[11], t[12], t[13], t[14], t[15], t[16], t[17], t[18], t[19], t[20], t[21]); });
    }
    if (arb21) {
        var p_2 = arb21;
        return new AsyncProperty_generic_1.AsyncProperty(TupleArbitrary_1.tuple(arb0, arb1, arb2, arb3, arb4, arb5, arb6, arb7, arb8, arb9, arb10, arb11, arb12, arb13, arb14, arb15, arb16, arb17, arb18, arb19, arb20), function (t) { return p_2(t[0], t[1], t[2], t[3], t[4], t[5], t[6], t[7], t[8], t[9], t[10], t[11], t[12], t[13], t[14], t[15], t[16], t[17], t[18], t[19], t[20]); });
    }
    if (arb20) {
        var p_3 = arb20;
        return new AsyncProperty_generic_1.AsyncProperty(TupleArbitrary_1.tuple(arb0, arb1, arb2, arb3, arb4, arb5, arb6, arb7, arb8, arb9, arb10, arb11, arb12, arb13, arb14, arb15, arb16, arb17, arb18, arb19), function (t) { return p_3(t[0], t[1], t[2], t[3], t[4], t[5], t[6], t[7], t[8], t[9], t[10], t[11], t[12], t[13], t[14], t[15], t[16], t[17], t[18], t[19]); });
    }
    if (arb19) {
        var p_4 = arb19;
        return new AsyncProperty_generic_1.AsyncProperty(TupleArbitrary_1.tuple(arb0, arb1, arb2, arb3, arb4, arb5, arb6, arb7, arb8, arb9, arb10, arb11, arb12, arb13, arb14, arb15, arb16, arb17, arb18), function (t) { return p_4(t[0], t[1], t[2], t[3], t[4], t[5], t[6], t[7], t[8], t[9], t[10], t[11], t[12], t[13], t[14], t[15], t[16], t[17], t[18]); });
    }
    if (arb18) {
        var p_5 = arb18;
        return new AsyncProperty_generic_1.AsyncProperty(TupleArbitrary_1.tuple(arb0, arb1, arb2, arb3, arb4, arb5, arb6, arb7, arb8, arb9, arb10, arb11, arb12, arb13, arb14, arb15, arb16, arb17), function (t) { return p_5(t[0], t[1], t[2], t[3], t[4], t[5], t[6], t[7], t[8], t[9], t[10], t[11], t[12], t[13], t[14], t[15], t[16], t[17]); });
    }
    if (arb17) {
        var p_6 = arb17;
        return new AsyncProperty_generic_1.AsyncProperty(TupleArbitrary_1.tuple(arb0, arb1, arb2, arb3, arb4, arb5, arb6, arb7, arb8, arb9, arb10, arb11, arb12, arb13, arb14, arb15, arb16), function (t) { return p_6(t[0], t[1], t[2], t[3], t[4], t[5], t[6], t[7], t[8], t[9], t[10], t[11], t[12], t[13], t[14], t[15], t[16]); });
    }
    if (arb16) {
        var p_7 = arb16;
        return new AsyncProperty_generic_1.AsyncProperty(TupleArbitrary_1.tuple(arb0, arb1, arb2, arb3, arb4, arb5, arb6, arb7, arb8, arb9, arb10, arb11, arb12, arb13, arb14, arb15), function (t) { return p_7(t[0], t[1], t[2], t[3], t[4], t[5], t[6], t[7], t[8], t[9], t[10], t[11], t[12], t[13], t[14], t[15]); });
    }
    if (arb15) {
        var p_8 = arb15;
        return new AsyncProperty_generic_1.AsyncProperty(TupleArbitrary_1.tuple(arb0, arb1, arb2, arb3, arb4, arb5, arb6, arb7, arb8, arb9, arb10, arb11, arb12, arb13, arb14), function (t) { return p_8(t[0], t[1], t[2], t[3], t[4], t[5], t[6], t[7], t[8], t[9], t[10], t[11], t[12], t[13], t[14]); });
    }
    if (arb14) {
        var p_9 = arb14;
        return new AsyncProperty_generic_1.AsyncProperty(TupleArbitrary_1.tuple(arb0, arb1, arb2, arb3, arb4, arb5, arb6, arb7, arb8, arb9, arb10, arb11, arb12, arb13), function (t) { return p_9(t[0], t[1], t[2], t[3], t[4], t[5], t[6], t[7], t[8], t[9], t[10], t[11], t[12], t[13]); });
    }
    if (arb13) {
        var p_10 = arb13;
        return new AsyncProperty_generic_1.AsyncProperty(TupleArbitrary_1.tuple(arb0, arb1, arb2, arb3, arb4, arb5, arb6, arb7, arb8, arb9, arb10, arb11, arb12), function (t) { return p_10(t[0], t[1], t[2], t[3], t[4], t[5], t[6], t[7], t[8], t[9], t[10], t[11], t[12]); });
    }
    if (arb12) {
        var p_11 = arb12;
        return new AsyncProperty_generic_1.AsyncProperty(TupleArbitrary_1.tuple(arb0, arb1, arb2, arb3, arb4, arb5, arb6, arb7, arb8, arb9, arb10, arb11), function (t) { return p_11(t[0], t[1], t[2], t[3], t[4], t[5], t[6], t[7], t[8], t[9], t[10], t[11]); });
    }
    if (arb11) {
        var p_12 = arb11;
        return new AsyncProperty_generic_1.AsyncProperty(TupleArbitrary_1.tuple(arb0, arb1, arb2, arb3, arb4, arb5, arb6, arb7, arb8, arb9, arb10), function (t) { return p_12(t[0], t[1], t[2], t[3], t[4], t[5], t[6], t[7], t[8], t[9], t[10]); });
    }
    if (arb10) {
        var p_13 = arb10;
        return new AsyncProperty_generic_1.AsyncProperty(TupleArbitrary_1.tuple(arb0, arb1, arb2, arb3, arb4, arb5, arb6, arb7, arb8, arb9), function (t) { return p_13(t[0], t[1], t[2], t[3], t[4], t[5], t[6], t[7], t[8], t[9]); });
    }
    if (arb9) {
        var p_14 = arb9;
        return new AsyncProperty_generic_1.AsyncProperty(TupleArbitrary_1.tuple(arb0, arb1, arb2, arb3, arb4, arb5, arb6, arb7, arb8), function (t) { return p_14(t[0], t[1], t[2], t[3], t[4], t[5], t[6], t[7], t[8]); });
    }
    if (arb8) {
        var p_15 = arb8;
        return new AsyncProperty_generic_1.AsyncProperty(TupleArbitrary_1.tuple(arb0, arb1, arb2, arb3, arb4, arb5, arb6, arb7), function (t) { return p_15(t[0], t[1], t[2], t[3], t[4], t[5], t[6], t[7]); });
    }
    if (arb7) {
        var p_16 = arb7;
        return new AsyncProperty_generic_1.AsyncProperty(TupleArbitrary_1.tuple(arb0, arb1, arb2, arb3, arb4, arb5, arb6), function (t) { return p_16(t[0], t[1], t[2], t[3], t[4], t[5], t[6]); });
    }
    if (arb6) {
        var p_17 = arb6;
        return new AsyncProperty_generic_1.AsyncProperty(TupleArbitrary_1.tuple(arb0, arb1, arb2, arb3, arb4, arb5), function (t) { return p_17(t[0], t[1], t[2], t[3], t[4], t[5]); });
    }
    if (arb5) {
        var p_18 = arb5;
        return new AsyncProperty_generic_1.AsyncProperty(TupleArbitrary_1.tuple(arb0, arb1, arb2, arb3, arb4), function (t) { return p_18(t[0], t[1], t[2], t[3], t[4]); });
    }
    if (arb4) {
        var p_19 = arb4;
        return new AsyncProperty_generic_1.AsyncProperty(TupleArbitrary_1.tuple(arb0, arb1, arb2, arb3), function (t) { return p_19(t[0], t[1], t[2], t[3]); });
    }
    if (arb3) {
        var p_20 = arb3;
        return new AsyncProperty_generic_1.AsyncProperty(TupleArbitrary_1.tuple(arb0, arb1, arb2), function (t) { return p_20(t[0], t[1], t[2]); });
    }
    if (arb2) {
        var p_21 = arb2;
        return new AsyncProperty_generic_1.AsyncProperty(TupleArbitrary_1.tuple(arb0, arb1), function (t) { return p_21(t[0], t[1]); });
    }
    if (arb1) {
        var p_22 = arb1;
        return new AsyncProperty_generic_1.AsyncProperty(TupleArbitrary_1.tuple(arb0), function (t) { return p_22(t[0]); });
    }
}
exports.asyncProperty = asyncProperty;
//# sourceMappingURL=AsyncProperty.generated.js.map