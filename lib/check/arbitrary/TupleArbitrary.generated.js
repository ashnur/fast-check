"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Arbitrary_1 = require("./definition/Arbitrary");
var TupleArbitrary_generic_1 = require("./TupleArbitrary.generic");
/** @hidden */
var Tuple1Arbitrary = /** @class */ (function (_super) {
    __extends(Tuple1Arbitrary, _super);
    function Tuple1Arbitrary(arb0) {
        var _this = _super.call(this) || this;
        _this.arb0 = arb0;
        _this.tupleArb = new TupleArbitrary_generic_1.GenericTupleArbitrary([arb0]);
        return _this;
    }
    Tuple1Arbitrary.prototype.generate = function (mrng) {
        return this.tupleArb.generate(mrng);
    };
    Tuple1Arbitrary.prototype.withBias = function (freq) {
        return new Tuple1Arbitrary(this.arb0.withBias(freq));
    };
    return Tuple1Arbitrary;
}(Arbitrary_1.Arbitrary));
exports.Tuple1Arbitrary = Tuple1Arbitrary;
;
/** @hidden */
var Tuple2Arbitrary = /** @class */ (function (_super) {
    __extends(Tuple2Arbitrary, _super);
    function Tuple2Arbitrary(arb0, arb1) {
        var _this = _super.call(this) || this;
        _this.arb0 = arb0;
        _this.arb1 = arb1;
        _this.tupleArb = new TupleArbitrary_generic_1.GenericTupleArbitrary([arb0, arb1]);
        return _this;
    }
    Tuple2Arbitrary.prototype.generate = function (mrng) {
        return this.tupleArb.generate(mrng);
    };
    Tuple2Arbitrary.prototype.withBias = function (freq) {
        return new Tuple2Arbitrary(this.arb0.withBias(freq), this.arb1.withBias(freq));
    };
    return Tuple2Arbitrary;
}(Arbitrary_1.Arbitrary));
exports.Tuple2Arbitrary = Tuple2Arbitrary;
;
/** @hidden */
var Tuple3Arbitrary = /** @class */ (function (_super) {
    __extends(Tuple3Arbitrary, _super);
    function Tuple3Arbitrary(arb0, arb1, arb2) {
        var _this = _super.call(this) || this;
        _this.arb0 = arb0;
        _this.arb1 = arb1;
        _this.arb2 = arb2;
        _this.tupleArb = new TupleArbitrary_generic_1.GenericTupleArbitrary([arb0, arb1, arb2]);
        return _this;
    }
    Tuple3Arbitrary.prototype.generate = function (mrng) {
        return this.tupleArb.generate(mrng);
    };
    Tuple3Arbitrary.prototype.withBias = function (freq) {
        return new Tuple3Arbitrary(this.arb0.withBias(freq), this.arb1.withBias(freq), this.arb2.withBias(freq));
    };
    return Tuple3Arbitrary;
}(Arbitrary_1.Arbitrary));
exports.Tuple3Arbitrary = Tuple3Arbitrary;
;
/** @hidden */
var Tuple4Arbitrary = /** @class */ (function (_super) {
    __extends(Tuple4Arbitrary, _super);
    function Tuple4Arbitrary(arb0, arb1, arb2, arb3) {
        var _this = _super.call(this) || this;
        _this.arb0 = arb0;
        _this.arb1 = arb1;
        _this.arb2 = arb2;
        _this.arb3 = arb3;
        _this.tupleArb = new TupleArbitrary_generic_1.GenericTupleArbitrary([arb0, arb1, arb2, arb3]);
        return _this;
    }
    Tuple4Arbitrary.prototype.generate = function (mrng) {
        return this.tupleArb.generate(mrng);
    };
    Tuple4Arbitrary.prototype.withBias = function (freq) {
        return new Tuple4Arbitrary(this.arb0.withBias(freq), this.arb1.withBias(freq), this.arb2.withBias(freq), this.arb3.withBias(freq));
    };
    return Tuple4Arbitrary;
}(Arbitrary_1.Arbitrary));
exports.Tuple4Arbitrary = Tuple4Arbitrary;
;
/** @hidden */
var Tuple5Arbitrary = /** @class */ (function (_super) {
    __extends(Tuple5Arbitrary, _super);
    function Tuple5Arbitrary(arb0, arb1, arb2, arb3, arb4) {
        var _this = _super.call(this) || this;
        _this.arb0 = arb0;
        _this.arb1 = arb1;
        _this.arb2 = arb2;
        _this.arb3 = arb3;
        _this.arb4 = arb4;
        _this.tupleArb = new TupleArbitrary_generic_1.GenericTupleArbitrary([arb0, arb1, arb2, arb3, arb4]);
        return _this;
    }
    Tuple5Arbitrary.prototype.generate = function (mrng) {
        return this.tupleArb.generate(mrng);
    };
    Tuple5Arbitrary.prototype.withBias = function (freq) {
        return new Tuple5Arbitrary(this.arb0.withBias(freq), this.arb1.withBias(freq), this.arb2.withBias(freq), this.arb3.withBias(freq), this.arb4.withBias(freq));
    };
    return Tuple5Arbitrary;
}(Arbitrary_1.Arbitrary));
exports.Tuple5Arbitrary = Tuple5Arbitrary;
;
/** @hidden */
var Tuple6Arbitrary = /** @class */ (function (_super) {
    __extends(Tuple6Arbitrary, _super);
    function Tuple6Arbitrary(arb0, arb1, arb2, arb3, arb4, arb5) {
        var _this = _super.call(this) || this;
        _this.arb0 = arb0;
        _this.arb1 = arb1;
        _this.arb2 = arb2;
        _this.arb3 = arb3;
        _this.arb4 = arb4;
        _this.arb5 = arb5;
        _this.tupleArb = new TupleArbitrary_generic_1.GenericTupleArbitrary([arb0, arb1, arb2, arb3, arb4, arb5]);
        return _this;
    }
    Tuple6Arbitrary.prototype.generate = function (mrng) {
        return this.tupleArb.generate(mrng);
    };
    Tuple6Arbitrary.prototype.withBias = function (freq) {
        return new Tuple6Arbitrary(this.arb0.withBias(freq), this.arb1.withBias(freq), this.arb2.withBias(freq), this.arb3.withBias(freq), this.arb4.withBias(freq), this.arb5.withBias(freq));
    };
    return Tuple6Arbitrary;
}(Arbitrary_1.Arbitrary));
exports.Tuple6Arbitrary = Tuple6Arbitrary;
;
/** @hidden */
var Tuple7Arbitrary = /** @class */ (function (_super) {
    __extends(Tuple7Arbitrary, _super);
    function Tuple7Arbitrary(arb0, arb1, arb2, arb3, arb4, arb5, arb6) {
        var _this = _super.call(this) || this;
        _this.arb0 = arb0;
        _this.arb1 = arb1;
        _this.arb2 = arb2;
        _this.arb3 = arb3;
        _this.arb4 = arb4;
        _this.arb5 = arb5;
        _this.arb6 = arb6;
        _this.tupleArb = new TupleArbitrary_generic_1.GenericTupleArbitrary([arb0, arb1, arb2, arb3, arb4, arb5, arb6]);
        return _this;
    }
    Tuple7Arbitrary.prototype.generate = function (mrng) {
        return this.tupleArb.generate(mrng);
    };
    Tuple7Arbitrary.prototype.withBias = function (freq) {
        return new Tuple7Arbitrary(this.arb0.withBias(freq), this.arb1.withBias(freq), this.arb2.withBias(freq), this.arb3.withBias(freq), this.arb4.withBias(freq), this.arb5.withBias(freq), this.arb6.withBias(freq));
    };
    return Tuple7Arbitrary;
}(Arbitrary_1.Arbitrary));
exports.Tuple7Arbitrary = Tuple7Arbitrary;
;
/** @hidden */
var Tuple8Arbitrary = /** @class */ (function (_super) {
    __extends(Tuple8Arbitrary, _super);
    function Tuple8Arbitrary(arb0, arb1, arb2, arb3, arb4, arb5, arb6, arb7) {
        var _this = _super.call(this) || this;
        _this.arb0 = arb0;
        _this.arb1 = arb1;
        _this.arb2 = arb2;
        _this.arb3 = arb3;
        _this.arb4 = arb4;
        _this.arb5 = arb5;
        _this.arb6 = arb6;
        _this.arb7 = arb7;
        _this.tupleArb = new TupleArbitrary_generic_1.GenericTupleArbitrary([arb0, arb1, arb2, arb3, arb4, arb5, arb6, arb7]);
        return _this;
    }
    Tuple8Arbitrary.prototype.generate = function (mrng) {
        return this.tupleArb.generate(mrng);
    };
    Tuple8Arbitrary.prototype.withBias = function (freq) {
        return new Tuple8Arbitrary(this.arb0.withBias(freq), this.arb1.withBias(freq), this.arb2.withBias(freq), this.arb3.withBias(freq), this.arb4.withBias(freq), this.arb5.withBias(freq), this.arb6.withBias(freq), this.arb7.withBias(freq));
    };
    return Tuple8Arbitrary;
}(Arbitrary_1.Arbitrary));
exports.Tuple8Arbitrary = Tuple8Arbitrary;
;
/** @hidden */
var Tuple9Arbitrary = /** @class */ (function (_super) {
    __extends(Tuple9Arbitrary, _super);
    function Tuple9Arbitrary(arb0, arb1, arb2, arb3, arb4, arb5, arb6, arb7, arb8) {
        var _this = _super.call(this) || this;
        _this.arb0 = arb0;
        _this.arb1 = arb1;
        _this.arb2 = arb2;
        _this.arb3 = arb3;
        _this.arb4 = arb4;
        _this.arb5 = arb5;
        _this.arb6 = arb6;
        _this.arb7 = arb7;
        _this.arb8 = arb8;
        _this.tupleArb = new TupleArbitrary_generic_1.GenericTupleArbitrary([arb0, arb1, arb2, arb3, arb4, arb5, arb6, arb7, arb8]);
        return _this;
    }
    Tuple9Arbitrary.prototype.generate = function (mrng) {
        return this.tupleArb.generate(mrng);
    };
    Tuple9Arbitrary.prototype.withBias = function (freq) {
        return new Tuple9Arbitrary(this.arb0.withBias(freq), this.arb1.withBias(freq), this.arb2.withBias(freq), this.arb3.withBias(freq), this.arb4.withBias(freq), this.arb5.withBias(freq), this.arb6.withBias(freq), this.arb7.withBias(freq), this.arb8.withBias(freq));
    };
    return Tuple9Arbitrary;
}(Arbitrary_1.Arbitrary));
exports.Tuple9Arbitrary = Tuple9Arbitrary;
;
/** @hidden */
var Tuple10Arbitrary = /** @class */ (function (_super) {
    __extends(Tuple10Arbitrary, _super);
    function Tuple10Arbitrary(arb0, arb1, arb2, arb3, arb4, arb5, arb6, arb7, arb8, arb9) {
        var _this = _super.call(this) || this;
        _this.arb0 = arb0;
        _this.arb1 = arb1;
        _this.arb2 = arb2;
        _this.arb3 = arb3;
        _this.arb4 = arb4;
        _this.arb5 = arb5;
        _this.arb6 = arb6;
        _this.arb7 = arb7;
        _this.arb8 = arb8;
        _this.arb9 = arb9;
        _this.tupleArb = new TupleArbitrary_generic_1.GenericTupleArbitrary([arb0, arb1, arb2, arb3, arb4, arb5, arb6, arb7, arb8, arb9]);
        return _this;
    }
    Tuple10Arbitrary.prototype.generate = function (mrng) {
        return this.tupleArb.generate(mrng);
    };
    Tuple10Arbitrary.prototype.withBias = function (freq) {
        return new Tuple10Arbitrary(this.arb0.withBias(freq), this.arb1.withBias(freq), this.arb2.withBias(freq), this.arb3.withBias(freq), this.arb4.withBias(freq), this.arb5.withBias(freq), this.arb6.withBias(freq), this.arb7.withBias(freq), this.arb8.withBias(freq), this.arb9.withBias(freq));
    };
    return Tuple10Arbitrary;
}(Arbitrary_1.Arbitrary));
exports.Tuple10Arbitrary = Tuple10Arbitrary;
;
/** @hidden */
var Tuple11Arbitrary = /** @class */ (function (_super) {
    __extends(Tuple11Arbitrary, _super);
    function Tuple11Arbitrary(arb0, arb1, arb2, arb3, arb4, arb5, arb6, arb7, arb8, arb9, arb10) {
        var _this = _super.call(this) || this;
        _this.arb0 = arb0;
        _this.arb1 = arb1;
        _this.arb2 = arb2;
        _this.arb3 = arb3;
        _this.arb4 = arb4;
        _this.arb5 = arb5;
        _this.arb6 = arb6;
        _this.arb7 = arb7;
        _this.arb8 = arb8;
        _this.arb9 = arb9;
        _this.arb10 = arb10;
        _this.tupleArb = new TupleArbitrary_generic_1.GenericTupleArbitrary([arb0, arb1, arb2, arb3, arb4, arb5, arb6, arb7, arb8, arb9, arb10]);
        return _this;
    }
    Tuple11Arbitrary.prototype.generate = function (mrng) {
        return this.tupleArb.generate(mrng);
    };
    Tuple11Arbitrary.prototype.withBias = function (freq) {
        return new Tuple11Arbitrary(this.arb0.withBias(freq), this.arb1.withBias(freq), this.arb2.withBias(freq), this.arb3.withBias(freq), this.arb4.withBias(freq), this.arb5.withBias(freq), this.arb6.withBias(freq), this.arb7.withBias(freq), this.arb8.withBias(freq), this.arb9.withBias(freq), this.arb10.withBias(freq));
    };
    return Tuple11Arbitrary;
}(Arbitrary_1.Arbitrary));
exports.Tuple11Arbitrary = Tuple11Arbitrary;
;
/** @hidden */
var Tuple12Arbitrary = /** @class */ (function (_super) {
    __extends(Tuple12Arbitrary, _super);
    function Tuple12Arbitrary(arb0, arb1, arb2, arb3, arb4, arb5, arb6, arb7, arb8, arb9, arb10, arb11) {
        var _this = _super.call(this) || this;
        _this.arb0 = arb0;
        _this.arb1 = arb1;
        _this.arb2 = arb2;
        _this.arb3 = arb3;
        _this.arb4 = arb4;
        _this.arb5 = arb5;
        _this.arb6 = arb6;
        _this.arb7 = arb7;
        _this.arb8 = arb8;
        _this.arb9 = arb9;
        _this.arb10 = arb10;
        _this.arb11 = arb11;
        _this.tupleArb = new TupleArbitrary_generic_1.GenericTupleArbitrary([arb0, arb1, arb2, arb3, arb4, arb5, arb6, arb7, arb8, arb9, arb10, arb11]);
        return _this;
    }
    Tuple12Arbitrary.prototype.generate = function (mrng) {
        return this.tupleArb.generate(mrng);
    };
    Tuple12Arbitrary.prototype.withBias = function (freq) {
        return new Tuple12Arbitrary(this.arb0.withBias(freq), this.arb1.withBias(freq), this.arb2.withBias(freq), this.arb3.withBias(freq), this.arb4.withBias(freq), this.arb5.withBias(freq), this.arb6.withBias(freq), this.arb7.withBias(freq), this.arb8.withBias(freq), this.arb9.withBias(freq), this.arb10.withBias(freq), this.arb11.withBias(freq));
    };
    return Tuple12Arbitrary;
}(Arbitrary_1.Arbitrary));
exports.Tuple12Arbitrary = Tuple12Arbitrary;
;
/** @hidden */
var Tuple13Arbitrary = /** @class */ (function (_super) {
    __extends(Tuple13Arbitrary, _super);
    function Tuple13Arbitrary(arb0, arb1, arb2, arb3, arb4, arb5, arb6, arb7, arb8, arb9, arb10, arb11, arb12) {
        var _this = _super.call(this) || this;
        _this.arb0 = arb0;
        _this.arb1 = arb1;
        _this.arb2 = arb2;
        _this.arb3 = arb3;
        _this.arb4 = arb4;
        _this.arb5 = arb5;
        _this.arb6 = arb6;
        _this.arb7 = arb7;
        _this.arb8 = arb8;
        _this.arb9 = arb9;
        _this.arb10 = arb10;
        _this.arb11 = arb11;
        _this.arb12 = arb12;
        _this.tupleArb = new TupleArbitrary_generic_1.GenericTupleArbitrary([arb0, arb1, arb2, arb3, arb4, arb5, arb6, arb7, arb8, arb9, arb10, arb11, arb12]);
        return _this;
    }
    Tuple13Arbitrary.prototype.generate = function (mrng) {
        return this.tupleArb.generate(mrng);
    };
    Tuple13Arbitrary.prototype.withBias = function (freq) {
        return new Tuple13Arbitrary(this.arb0.withBias(freq), this.arb1.withBias(freq), this.arb2.withBias(freq), this.arb3.withBias(freq), this.arb4.withBias(freq), this.arb5.withBias(freq), this.arb6.withBias(freq), this.arb7.withBias(freq), this.arb8.withBias(freq), this.arb9.withBias(freq), this.arb10.withBias(freq), this.arb11.withBias(freq), this.arb12.withBias(freq));
    };
    return Tuple13Arbitrary;
}(Arbitrary_1.Arbitrary));
exports.Tuple13Arbitrary = Tuple13Arbitrary;
;
/** @hidden */
var Tuple14Arbitrary = /** @class */ (function (_super) {
    __extends(Tuple14Arbitrary, _super);
    function Tuple14Arbitrary(arb0, arb1, arb2, arb3, arb4, arb5, arb6, arb7, arb8, arb9, arb10, arb11, arb12, arb13) {
        var _this = _super.call(this) || this;
        _this.arb0 = arb0;
        _this.arb1 = arb1;
        _this.arb2 = arb2;
        _this.arb3 = arb3;
        _this.arb4 = arb4;
        _this.arb5 = arb5;
        _this.arb6 = arb6;
        _this.arb7 = arb7;
        _this.arb8 = arb8;
        _this.arb9 = arb9;
        _this.arb10 = arb10;
        _this.arb11 = arb11;
        _this.arb12 = arb12;
        _this.arb13 = arb13;
        _this.tupleArb = new TupleArbitrary_generic_1.GenericTupleArbitrary([arb0, arb1, arb2, arb3, arb4, arb5, arb6, arb7, arb8, arb9, arb10, arb11, arb12, arb13]);
        return _this;
    }
    Tuple14Arbitrary.prototype.generate = function (mrng) {
        return this.tupleArb.generate(mrng);
    };
    Tuple14Arbitrary.prototype.withBias = function (freq) {
        return new Tuple14Arbitrary(this.arb0.withBias(freq), this.arb1.withBias(freq), this.arb2.withBias(freq), this.arb3.withBias(freq), this.arb4.withBias(freq), this.arb5.withBias(freq), this.arb6.withBias(freq), this.arb7.withBias(freq), this.arb8.withBias(freq), this.arb9.withBias(freq), this.arb10.withBias(freq), this.arb11.withBias(freq), this.arb12.withBias(freq), this.arb13.withBias(freq));
    };
    return Tuple14Arbitrary;
}(Arbitrary_1.Arbitrary));
exports.Tuple14Arbitrary = Tuple14Arbitrary;
;
/** @hidden */
var Tuple15Arbitrary = /** @class */ (function (_super) {
    __extends(Tuple15Arbitrary, _super);
    function Tuple15Arbitrary(arb0, arb1, arb2, arb3, arb4, arb5, arb6, arb7, arb8, arb9, arb10, arb11, arb12, arb13, arb14) {
        var _this = _super.call(this) || this;
        _this.arb0 = arb0;
        _this.arb1 = arb1;
        _this.arb2 = arb2;
        _this.arb3 = arb3;
        _this.arb4 = arb4;
        _this.arb5 = arb5;
        _this.arb6 = arb6;
        _this.arb7 = arb7;
        _this.arb8 = arb8;
        _this.arb9 = arb9;
        _this.arb10 = arb10;
        _this.arb11 = arb11;
        _this.arb12 = arb12;
        _this.arb13 = arb13;
        _this.arb14 = arb14;
        _this.tupleArb = new TupleArbitrary_generic_1.GenericTupleArbitrary([arb0, arb1, arb2, arb3, arb4, arb5, arb6, arb7, arb8, arb9, arb10, arb11, arb12, arb13, arb14]);
        return _this;
    }
    Tuple15Arbitrary.prototype.generate = function (mrng) {
        return this.tupleArb.generate(mrng);
    };
    Tuple15Arbitrary.prototype.withBias = function (freq) {
        return new Tuple15Arbitrary(this.arb0.withBias(freq), this.arb1.withBias(freq), this.arb2.withBias(freq), this.arb3.withBias(freq), this.arb4.withBias(freq), this.arb5.withBias(freq), this.arb6.withBias(freq), this.arb7.withBias(freq), this.arb8.withBias(freq), this.arb9.withBias(freq), this.arb10.withBias(freq), this.arb11.withBias(freq), this.arb12.withBias(freq), this.arb13.withBias(freq), this.arb14.withBias(freq));
    };
    return Tuple15Arbitrary;
}(Arbitrary_1.Arbitrary));
exports.Tuple15Arbitrary = Tuple15Arbitrary;
;
/** @hidden */
var Tuple16Arbitrary = /** @class */ (function (_super) {
    __extends(Tuple16Arbitrary, _super);
    function Tuple16Arbitrary(arb0, arb1, arb2, arb3, arb4, arb5, arb6, arb7, arb8, arb9, arb10, arb11, arb12, arb13, arb14, arb15) {
        var _this = _super.call(this) || this;
        _this.arb0 = arb0;
        _this.arb1 = arb1;
        _this.arb2 = arb2;
        _this.arb3 = arb3;
        _this.arb4 = arb4;
        _this.arb5 = arb5;
        _this.arb6 = arb6;
        _this.arb7 = arb7;
        _this.arb8 = arb8;
        _this.arb9 = arb9;
        _this.arb10 = arb10;
        _this.arb11 = arb11;
        _this.arb12 = arb12;
        _this.arb13 = arb13;
        _this.arb14 = arb14;
        _this.arb15 = arb15;
        _this.tupleArb = new TupleArbitrary_generic_1.GenericTupleArbitrary([arb0, arb1, arb2, arb3, arb4, arb5, arb6, arb7, arb8, arb9, arb10, arb11, arb12, arb13, arb14, arb15]);
        return _this;
    }
    Tuple16Arbitrary.prototype.generate = function (mrng) {
        return this.tupleArb.generate(mrng);
    };
    Tuple16Arbitrary.prototype.withBias = function (freq) {
        return new Tuple16Arbitrary(this.arb0.withBias(freq), this.arb1.withBias(freq), this.arb2.withBias(freq), this.arb3.withBias(freq), this.arb4.withBias(freq), this.arb5.withBias(freq), this.arb6.withBias(freq), this.arb7.withBias(freq), this.arb8.withBias(freq), this.arb9.withBias(freq), this.arb10.withBias(freq), this.arb11.withBias(freq), this.arb12.withBias(freq), this.arb13.withBias(freq), this.arb14.withBias(freq), this.arb15.withBias(freq));
    };
    return Tuple16Arbitrary;
}(Arbitrary_1.Arbitrary));
exports.Tuple16Arbitrary = Tuple16Arbitrary;
;
/** @hidden */
var Tuple17Arbitrary = /** @class */ (function (_super) {
    __extends(Tuple17Arbitrary, _super);
    function Tuple17Arbitrary(arb0, arb1, arb2, arb3, arb4, arb5, arb6, arb7, arb8, arb9, arb10, arb11, arb12, arb13, arb14, arb15, arb16) {
        var _this = _super.call(this) || this;
        _this.arb0 = arb0;
        _this.arb1 = arb1;
        _this.arb2 = arb2;
        _this.arb3 = arb3;
        _this.arb4 = arb4;
        _this.arb5 = arb5;
        _this.arb6 = arb6;
        _this.arb7 = arb7;
        _this.arb8 = arb8;
        _this.arb9 = arb9;
        _this.arb10 = arb10;
        _this.arb11 = arb11;
        _this.arb12 = arb12;
        _this.arb13 = arb13;
        _this.arb14 = arb14;
        _this.arb15 = arb15;
        _this.arb16 = arb16;
        _this.tupleArb = new TupleArbitrary_generic_1.GenericTupleArbitrary([arb0, arb1, arb2, arb3, arb4, arb5, arb6, arb7, arb8, arb9, arb10, arb11, arb12, arb13, arb14, arb15, arb16]);
        return _this;
    }
    Tuple17Arbitrary.prototype.generate = function (mrng) {
        return this.tupleArb.generate(mrng);
    };
    Tuple17Arbitrary.prototype.withBias = function (freq) {
        return new Tuple17Arbitrary(this.arb0.withBias(freq), this.arb1.withBias(freq), this.arb2.withBias(freq), this.arb3.withBias(freq), this.arb4.withBias(freq), this.arb5.withBias(freq), this.arb6.withBias(freq), this.arb7.withBias(freq), this.arb8.withBias(freq), this.arb9.withBias(freq), this.arb10.withBias(freq), this.arb11.withBias(freq), this.arb12.withBias(freq), this.arb13.withBias(freq), this.arb14.withBias(freq), this.arb15.withBias(freq), this.arb16.withBias(freq));
    };
    return Tuple17Arbitrary;
}(Arbitrary_1.Arbitrary));
exports.Tuple17Arbitrary = Tuple17Arbitrary;
;
/** @hidden */
var Tuple18Arbitrary = /** @class */ (function (_super) {
    __extends(Tuple18Arbitrary, _super);
    function Tuple18Arbitrary(arb0, arb1, arb2, arb3, arb4, arb5, arb6, arb7, arb8, arb9, arb10, arb11, arb12, arb13, arb14, arb15, arb16, arb17) {
        var _this = _super.call(this) || this;
        _this.arb0 = arb0;
        _this.arb1 = arb1;
        _this.arb2 = arb2;
        _this.arb3 = arb3;
        _this.arb4 = arb4;
        _this.arb5 = arb5;
        _this.arb6 = arb6;
        _this.arb7 = arb7;
        _this.arb8 = arb8;
        _this.arb9 = arb9;
        _this.arb10 = arb10;
        _this.arb11 = arb11;
        _this.arb12 = arb12;
        _this.arb13 = arb13;
        _this.arb14 = arb14;
        _this.arb15 = arb15;
        _this.arb16 = arb16;
        _this.arb17 = arb17;
        _this.tupleArb = new TupleArbitrary_generic_1.GenericTupleArbitrary([arb0, arb1, arb2, arb3, arb4, arb5, arb6, arb7, arb8, arb9, arb10, arb11, arb12, arb13, arb14, arb15, arb16, arb17]);
        return _this;
    }
    Tuple18Arbitrary.prototype.generate = function (mrng) {
        return this.tupleArb.generate(mrng);
    };
    Tuple18Arbitrary.prototype.withBias = function (freq) {
        return new Tuple18Arbitrary(this.arb0.withBias(freq), this.arb1.withBias(freq), this.arb2.withBias(freq), this.arb3.withBias(freq), this.arb4.withBias(freq), this.arb5.withBias(freq), this.arb6.withBias(freq), this.arb7.withBias(freq), this.arb8.withBias(freq), this.arb9.withBias(freq), this.arb10.withBias(freq), this.arb11.withBias(freq), this.arb12.withBias(freq), this.arb13.withBias(freq), this.arb14.withBias(freq), this.arb15.withBias(freq), this.arb16.withBias(freq), this.arb17.withBias(freq));
    };
    return Tuple18Arbitrary;
}(Arbitrary_1.Arbitrary));
exports.Tuple18Arbitrary = Tuple18Arbitrary;
;
/** @hidden */
var Tuple19Arbitrary = /** @class */ (function (_super) {
    __extends(Tuple19Arbitrary, _super);
    function Tuple19Arbitrary(arb0, arb1, arb2, arb3, arb4, arb5, arb6, arb7, arb8, arb9, arb10, arb11, arb12, arb13, arb14, arb15, arb16, arb17, arb18) {
        var _this = _super.call(this) || this;
        _this.arb0 = arb0;
        _this.arb1 = arb1;
        _this.arb2 = arb2;
        _this.arb3 = arb3;
        _this.arb4 = arb4;
        _this.arb5 = arb5;
        _this.arb6 = arb6;
        _this.arb7 = arb7;
        _this.arb8 = arb8;
        _this.arb9 = arb9;
        _this.arb10 = arb10;
        _this.arb11 = arb11;
        _this.arb12 = arb12;
        _this.arb13 = arb13;
        _this.arb14 = arb14;
        _this.arb15 = arb15;
        _this.arb16 = arb16;
        _this.arb17 = arb17;
        _this.arb18 = arb18;
        _this.tupleArb = new TupleArbitrary_generic_1.GenericTupleArbitrary([arb0, arb1, arb2, arb3, arb4, arb5, arb6, arb7, arb8, arb9, arb10, arb11, arb12, arb13, arb14, arb15, arb16, arb17, arb18]);
        return _this;
    }
    Tuple19Arbitrary.prototype.generate = function (mrng) {
        return this.tupleArb.generate(mrng);
    };
    Tuple19Arbitrary.prototype.withBias = function (freq) {
        return new Tuple19Arbitrary(this.arb0.withBias(freq), this.arb1.withBias(freq), this.arb2.withBias(freq), this.arb3.withBias(freq), this.arb4.withBias(freq), this.arb5.withBias(freq), this.arb6.withBias(freq), this.arb7.withBias(freq), this.arb8.withBias(freq), this.arb9.withBias(freq), this.arb10.withBias(freq), this.arb11.withBias(freq), this.arb12.withBias(freq), this.arb13.withBias(freq), this.arb14.withBias(freq), this.arb15.withBias(freq), this.arb16.withBias(freq), this.arb17.withBias(freq), this.arb18.withBias(freq));
    };
    return Tuple19Arbitrary;
}(Arbitrary_1.Arbitrary));
exports.Tuple19Arbitrary = Tuple19Arbitrary;
;
/** @hidden */
var Tuple20Arbitrary = /** @class */ (function (_super) {
    __extends(Tuple20Arbitrary, _super);
    function Tuple20Arbitrary(arb0, arb1, arb2, arb3, arb4, arb5, arb6, arb7, arb8, arb9, arb10, arb11, arb12, arb13, arb14, arb15, arb16, arb17, arb18, arb19) {
        var _this = _super.call(this) || this;
        _this.arb0 = arb0;
        _this.arb1 = arb1;
        _this.arb2 = arb2;
        _this.arb3 = arb3;
        _this.arb4 = arb4;
        _this.arb5 = arb5;
        _this.arb6 = arb6;
        _this.arb7 = arb7;
        _this.arb8 = arb8;
        _this.arb9 = arb9;
        _this.arb10 = arb10;
        _this.arb11 = arb11;
        _this.arb12 = arb12;
        _this.arb13 = arb13;
        _this.arb14 = arb14;
        _this.arb15 = arb15;
        _this.arb16 = arb16;
        _this.arb17 = arb17;
        _this.arb18 = arb18;
        _this.arb19 = arb19;
        _this.tupleArb = new TupleArbitrary_generic_1.GenericTupleArbitrary([arb0, arb1, arb2, arb3, arb4, arb5, arb6, arb7, arb8, arb9, arb10, arb11, arb12, arb13, arb14, arb15, arb16, arb17, arb18, arb19]);
        return _this;
    }
    Tuple20Arbitrary.prototype.generate = function (mrng) {
        return this.tupleArb.generate(mrng);
    };
    Tuple20Arbitrary.prototype.withBias = function (freq) {
        return new Tuple20Arbitrary(this.arb0.withBias(freq), this.arb1.withBias(freq), this.arb2.withBias(freq), this.arb3.withBias(freq), this.arb4.withBias(freq), this.arb5.withBias(freq), this.arb6.withBias(freq), this.arb7.withBias(freq), this.arb8.withBias(freq), this.arb9.withBias(freq), this.arb10.withBias(freq), this.arb11.withBias(freq), this.arb12.withBias(freq), this.arb13.withBias(freq), this.arb14.withBias(freq), this.arb15.withBias(freq), this.arb16.withBias(freq), this.arb17.withBias(freq), this.arb18.withBias(freq), this.arb19.withBias(freq));
    };
    return Tuple20Arbitrary;
}(Arbitrary_1.Arbitrary));
exports.Tuple20Arbitrary = Tuple20Arbitrary;
;
/** @hidden */
var Tuple21Arbitrary = /** @class */ (function (_super) {
    __extends(Tuple21Arbitrary, _super);
    function Tuple21Arbitrary(arb0, arb1, arb2, arb3, arb4, arb5, arb6, arb7, arb8, arb9, arb10, arb11, arb12, arb13, arb14, arb15, arb16, arb17, arb18, arb19, arb20) {
        var _this = _super.call(this) || this;
        _this.arb0 = arb0;
        _this.arb1 = arb1;
        _this.arb2 = arb2;
        _this.arb3 = arb3;
        _this.arb4 = arb4;
        _this.arb5 = arb5;
        _this.arb6 = arb6;
        _this.arb7 = arb7;
        _this.arb8 = arb8;
        _this.arb9 = arb9;
        _this.arb10 = arb10;
        _this.arb11 = arb11;
        _this.arb12 = arb12;
        _this.arb13 = arb13;
        _this.arb14 = arb14;
        _this.arb15 = arb15;
        _this.arb16 = arb16;
        _this.arb17 = arb17;
        _this.arb18 = arb18;
        _this.arb19 = arb19;
        _this.arb20 = arb20;
        _this.tupleArb = new TupleArbitrary_generic_1.GenericTupleArbitrary([arb0, arb1, arb2, arb3, arb4, arb5, arb6, arb7, arb8, arb9, arb10, arb11, arb12, arb13, arb14, arb15, arb16, arb17, arb18, arb19, arb20]);
        return _this;
    }
    Tuple21Arbitrary.prototype.generate = function (mrng) {
        return this.tupleArb.generate(mrng);
    };
    Tuple21Arbitrary.prototype.withBias = function (freq) {
        return new Tuple21Arbitrary(this.arb0.withBias(freq), this.arb1.withBias(freq), this.arb2.withBias(freq), this.arb3.withBias(freq), this.arb4.withBias(freq), this.arb5.withBias(freq), this.arb6.withBias(freq), this.arb7.withBias(freq), this.arb8.withBias(freq), this.arb9.withBias(freq), this.arb10.withBias(freq), this.arb11.withBias(freq), this.arb12.withBias(freq), this.arb13.withBias(freq), this.arb14.withBias(freq), this.arb15.withBias(freq), this.arb16.withBias(freq), this.arb17.withBias(freq), this.arb18.withBias(freq), this.arb19.withBias(freq), this.arb20.withBias(freq));
    };
    return Tuple21Arbitrary;
}(Arbitrary_1.Arbitrary));
exports.Tuple21Arbitrary = Tuple21Arbitrary;
;
/** @hidden */
var Tuple22Arbitrary = /** @class */ (function (_super) {
    __extends(Tuple22Arbitrary, _super);
    function Tuple22Arbitrary(arb0, arb1, arb2, arb3, arb4, arb5, arb6, arb7, arb8, arb9, arb10, arb11, arb12, arb13, arb14, arb15, arb16, arb17, arb18, arb19, arb20, arb21) {
        var _this = _super.call(this) || this;
        _this.arb0 = arb0;
        _this.arb1 = arb1;
        _this.arb2 = arb2;
        _this.arb3 = arb3;
        _this.arb4 = arb4;
        _this.arb5 = arb5;
        _this.arb6 = arb6;
        _this.arb7 = arb7;
        _this.arb8 = arb8;
        _this.arb9 = arb9;
        _this.arb10 = arb10;
        _this.arb11 = arb11;
        _this.arb12 = arb12;
        _this.arb13 = arb13;
        _this.arb14 = arb14;
        _this.arb15 = arb15;
        _this.arb16 = arb16;
        _this.arb17 = arb17;
        _this.arb18 = arb18;
        _this.arb19 = arb19;
        _this.arb20 = arb20;
        _this.arb21 = arb21;
        _this.tupleArb = new TupleArbitrary_generic_1.GenericTupleArbitrary([arb0, arb1, arb2, arb3, arb4, arb5, arb6, arb7, arb8, arb9, arb10, arb11, arb12, arb13, arb14, arb15, arb16, arb17, arb18, arb19, arb20, arb21]);
        return _this;
    }
    Tuple22Arbitrary.prototype.generate = function (mrng) {
        return this.tupleArb.generate(mrng);
    };
    Tuple22Arbitrary.prototype.withBias = function (freq) {
        return new Tuple22Arbitrary(this.arb0.withBias(freq), this.arb1.withBias(freq), this.arb2.withBias(freq), this.arb3.withBias(freq), this.arb4.withBias(freq), this.arb5.withBias(freq), this.arb6.withBias(freq), this.arb7.withBias(freq), this.arb8.withBias(freq), this.arb9.withBias(freq), this.arb10.withBias(freq), this.arb11.withBias(freq), this.arb12.withBias(freq), this.arb13.withBias(freq), this.arb14.withBias(freq), this.arb15.withBias(freq), this.arb16.withBias(freq), this.arb17.withBias(freq), this.arb18.withBias(freq), this.arb19.withBias(freq), this.arb20.withBias(freq), this.arb21.withBias(freq));
    };
    return Tuple22Arbitrary;
}(Arbitrary_1.Arbitrary));
exports.Tuple22Arbitrary = Tuple22Arbitrary;
;
/**
 * For tuples of [T0,T1,T2,T3,T4,T5,T6,T7,T8,T9,T10,T11,T12,T13,T14,T15,T16,T17,T18,T19,T20,T21]
 * @param arb0 Arbitrary responsible for T0
* @param arb1 Arbitrary responsible for T1
* @param arb2 Arbitrary responsible for T2
* @param arb3 Arbitrary responsible for T3
* @param arb4 Arbitrary responsible for T4
* @param arb5 Arbitrary responsible for T5
* @param arb6 Arbitrary responsible for T6
* @param arb7 Arbitrary responsible for T7
* @param arb8 Arbitrary responsible for T8
* @param arb9 Arbitrary responsible for T9
* @param arb10 Arbitrary responsible for T10
* @param arb11 Arbitrary responsible for T11
* @param arb12 Arbitrary responsible for T12
* @param arb13 Arbitrary responsible for T13
* @param arb14 Arbitrary responsible for T14
* @param arb15 Arbitrary responsible for T15
* @param arb16 Arbitrary responsible for T16
* @param arb17 Arbitrary responsible for T17
* @param arb18 Arbitrary responsible for T18
* @param arb19 Arbitrary responsible for T19
* @param arb20 Arbitrary responsible for T20
* @param arb21 Arbitrary responsible for T21
 */
function tuple(arb0, arb1, arb2, arb3, arb4, arb5, arb6, arb7, arb8, arb9, arb10, arb11, arb12, arb13, arb14, arb15, arb16, arb17, arb18, arb19, arb20, arb21) {
    if (arb21) {
        return new Tuple22Arbitrary(arb0, arb1, arb2, arb3, arb4, arb5, arb6, arb7, arb8, arb9, arb10, arb11, arb12, arb13, arb14, arb15, arb16, arb17, arb18, arb19, arb20, arb21);
    }
    if (arb20) {
        return new Tuple21Arbitrary(arb0, arb1, arb2, arb3, arb4, arb5, arb6, arb7, arb8, arb9, arb10, arb11, arb12, arb13, arb14, arb15, arb16, arb17, arb18, arb19, arb20);
    }
    if (arb19) {
        return new Tuple20Arbitrary(arb0, arb1, arb2, arb3, arb4, arb5, arb6, arb7, arb8, arb9, arb10, arb11, arb12, arb13, arb14, arb15, arb16, arb17, arb18, arb19);
    }
    if (arb18) {
        return new Tuple19Arbitrary(arb0, arb1, arb2, arb3, arb4, arb5, arb6, arb7, arb8, arb9, arb10, arb11, arb12, arb13, arb14, arb15, arb16, arb17, arb18);
    }
    if (arb17) {
        return new Tuple18Arbitrary(arb0, arb1, arb2, arb3, arb4, arb5, arb6, arb7, arb8, arb9, arb10, arb11, arb12, arb13, arb14, arb15, arb16, arb17);
    }
    if (arb16) {
        return new Tuple17Arbitrary(arb0, arb1, arb2, arb3, arb4, arb5, arb6, arb7, arb8, arb9, arb10, arb11, arb12, arb13, arb14, arb15, arb16);
    }
    if (arb15) {
        return new Tuple16Arbitrary(arb0, arb1, arb2, arb3, arb4, arb5, arb6, arb7, arb8, arb9, arb10, arb11, arb12, arb13, arb14, arb15);
    }
    if (arb14) {
        return new Tuple15Arbitrary(arb0, arb1, arb2, arb3, arb4, arb5, arb6, arb7, arb8, arb9, arb10, arb11, arb12, arb13, arb14);
    }
    if (arb13) {
        return new Tuple14Arbitrary(arb0, arb1, arb2, arb3, arb4, arb5, arb6, arb7, arb8, arb9, arb10, arb11, arb12, arb13);
    }
    if (arb12) {
        return new Tuple13Arbitrary(arb0, arb1, arb2, arb3, arb4, arb5, arb6, arb7, arb8, arb9, arb10, arb11, arb12);
    }
    if (arb11) {
        return new Tuple12Arbitrary(arb0, arb1, arb2, arb3, arb4, arb5, arb6, arb7, arb8, arb9, arb10, arb11);
    }
    if (arb10) {
        return new Tuple11Arbitrary(arb0, arb1, arb2, arb3, arb4, arb5, arb6, arb7, arb8, arb9, arb10);
    }
    if (arb9) {
        return new Tuple10Arbitrary(arb0, arb1, arb2, arb3, arb4, arb5, arb6, arb7, arb8, arb9);
    }
    if (arb8) {
        return new Tuple9Arbitrary(arb0, arb1, arb2, arb3, arb4, arb5, arb6, arb7, arb8);
    }
    if (arb7) {
        return new Tuple8Arbitrary(arb0, arb1, arb2, arb3, arb4, arb5, arb6, arb7);
    }
    if (arb6) {
        return new Tuple7Arbitrary(arb0, arb1, arb2, arb3, arb4, arb5, arb6);
    }
    if (arb5) {
        return new Tuple6Arbitrary(arb0, arb1, arb2, arb3, arb4, arb5);
    }
    if (arb4) {
        return new Tuple5Arbitrary(arb0, arb1, arb2, arb3, arb4);
    }
    if (arb3) {
        return new Tuple4Arbitrary(arb0, arb1, arb2, arb3);
    }
    if (arb2) {
        return new Tuple3Arbitrary(arb0, arb1, arb2);
    }
    if (arb1) {
        return new Tuple2Arbitrary(arb0, arb1);
    }
    if (arb0) {
        return new Tuple1Arbitrary(arb0);
    }
}
exports.tuple = tuple;
