import { Arbitrary } from './definition/Arbitrary';
import { Shrinkable } from './definition/Shrinkable';
import { Random } from '../../random/generator/Random';
import { GenericTupleArbitrary } from './TupleArbitrary.generic';
/** @hidden */
export declare class Tuple1Arbitrary<T0> extends Arbitrary<[T0]> {
    readonly arb0: Arbitrary<T0>;
    readonly tupleArb: GenericTupleArbitrary<T0>;
    constructor(arb0: Arbitrary<T0>);
    generate(mrng: Random): Shrinkable<[T0]>;
    withBias(freq: number): Tuple1Arbitrary<T0>;
}
/** @hidden */
export declare class Tuple2Arbitrary<T0, T1> extends Arbitrary<[T0, T1]> {
    readonly arb0: Arbitrary<T0>;
    readonly arb1: Arbitrary<T1>;
    readonly tupleArb: GenericTupleArbitrary<T0 | T1>;
    constructor(arb0: Arbitrary<T0>, arb1: Arbitrary<T1>);
    generate(mrng: Random): Shrinkable<[T0, T1]>;
    withBias(freq: number): Tuple2Arbitrary<T0, T1>;
}
/** @hidden */
export declare class Tuple3Arbitrary<T0, T1, T2> extends Arbitrary<[T0, T1, T2]> {
    readonly arb0: Arbitrary<T0>;
    readonly arb1: Arbitrary<T1>;
    readonly arb2: Arbitrary<T2>;
    readonly tupleArb: GenericTupleArbitrary<T0 | T1 | T2>;
    constructor(arb0: Arbitrary<T0>, arb1: Arbitrary<T1>, arb2: Arbitrary<T2>);
    generate(mrng: Random): Shrinkable<[T0, T1, T2]>;
    withBias(freq: number): Tuple3Arbitrary<T0, T1, T2>;
}
/** @hidden */
export declare class Tuple4Arbitrary<T0, T1, T2, T3> extends Arbitrary<[T0, T1, T2, T3]> {
    readonly arb0: Arbitrary<T0>;
    readonly arb1: Arbitrary<T1>;
    readonly arb2: Arbitrary<T2>;
    readonly arb3: Arbitrary<T3>;
    readonly tupleArb: GenericTupleArbitrary<T0 | T1 | T2 | T3>;
    constructor(arb0: Arbitrary<T0>, arb1: Arbitrary<T1>, arb2: Arbitrary<T2>, arb3: Arbitrary<T3>);
    generate(mrng: Random): Shrinkable<[T0, T1, T2, T3]>;
    withBias(freq: number): Tuple4Arbitrary<T0, T1, T2, T3>;
}
/** @hidden */
export declare class Tuple5Arbitrary<T0, T1, T2, T3, T4> extends Arbitrary<[T0, T1, T2, T3, T4]> {
    readonly arb0: Arbitrary<T0>;
    readonly arb1: Arbitrary<T1>;
    readonly arb2: Arbitrary<T2>;
    readonly arb3: Arbitrary<T3>;
    readonly arb4: Arbitrary<T4>;
    readonly tupleArb: GenericTupleArbitrary<T0 | T1 | T2 | T3 | T4>;
    constructor(arb0: Arbitrary<T0>, arb1: Arbitrary<T1>, arb2: Arbitrary<T2>, arb3: Arbitrary<T3>, arb4: Arbitrary<T4>);
    generate(mrng: Random): Shrinkable<[T0, T1, T2, T3, T4]>;
    withBias(freq: number): Tuple5Arbitrary<T0, T1, T2, T3, T4>;
}
/** @hidden */
export declare class Tuple6Arbitrary<T0, T1, T2, T3, T4, T5> extends Arbitrary<[T0, T1, T2, T3, T4, T5]> {
    readonly arb0: Arbitrary<T0>;
    readonly arb1: Arbitrary<T1>;
    readonly arb2: Arbitrary<T2>;
    readonly arb3: Arbitrary<T3>;
    readonly arb4: Arbitrary<T4>;
    readonly arb5: Arbitrary<T5>;
    readonly tupleArb: GenericTupleArbitrary<T0 | T1 | T2 | T3 | T4 | T5>;
    constructor(arb0: Arbitrary<T0>, arb1: Arbitrary<T1>, arb2: Arbitrary<T2>, arb3: Arbitrary<T3>, arb4: Arbitrary<T4>, arb5: Arbitrary<T5>);
    generate(mrng: Random): Shrinkable<[T0, T1, T2, T3, T4, T5]>;
    withBias(freq: number): Tuple6Arbitrary<T0, T1, T2, T3, T4, T5>;
}
/** @hidden */
export declare class Tuple7Arbitrary<T0, T1, T2, T3, T4, T5, T6> extends Arbitrary<[T0, T1, T2, T3, T4, T5, T6]> {
    readonly arb0: Arbitrary<T0>;
    readonly arb1: Arbitrary<T1>;
    readonly arb2: Arbitrary<T2>;
    readonly arb3: Arbitrary<T3>;
    readonly arb4: Arbitrary<T4>;
    readonly arb5: Arbitrary<T5>;
    readonly arb6: Arbitrary<T6>;
    readonly tupleArb: GenericTupleArbitrary<T0 | T1 | T2 | T3 | T4 | T5 | T6>;
    constructor(arb0: Arbitrary<T0>, arb1: Arbitrary<T1>, arb2: Arbitrary<T2>, arb3: Arbitrary<T3>, arb4: Arbitrary<T4>, arb5: Arbitrary<T5>, arb6: Arbitrary<T6>);
    generate(mrng: Random): Shrinkable<[T0, T1, T2, T3, T4, T5, T6]>;
    withBias(freq: number): Tuple7Arbitrary<T0, T1, T2, T3, T4, T5, T6>;
}
/** @hidden */
export declare class Tuple8Arbitrary<T0, T1, T2, T3, T4, T5, T6, T7> extends Arbitrary<[T0, T1, T2, T3, T4, T5, T6, T7]> {
    readonly arb0: Arbitrary<T0>;
    readonly arb1: Arbitrary<T1>;
    readonly arb2: Arbitrary<T2>;
    readonly arb3: Arbitrary<T3>;
    readonly arb4: Arbitrary<T4>;
    readonly arb5: Arbitrary<T5>;
    readonly arb6: Arbitrary<T6>;
    readonly arb7: Arbitrary<T7>;
    readonly tupleArb: GenericTupleArbitrary<T0 | T1 | T2 | T3 | T4 | T5 | T6 | T7>;
    constructor(arb0: Arbitrary<T0>, arb1: Arbitrary<T1>, arb2: Arbitrary<T2>, arb3: Arbitrary<T3>, arb4: Arbitrary<T4>, arb5: Arbitrary<T5>, arb6: Arbitrary<T6>, arb7: Arbitrary<T7>);
    generate(mrng: Random): Shrinkable<[T0, T1, T2, T3, T4, T5, T6, T7]>;
    withBias(freq: number): Tuple8Arbitrary<T0, T1, T2, T3, T4, T5, T6, T7>;
}
/** @hidden */
export declare class Tuple9Arbitrary<T0, T1, T2, T3, T4, T5, T6, T7, T8> extends Arbitrary<[T0, T1, T2, T3, T4, T5, T6, T7, T8]> {
    readonly arb0: Arbitrary<T0>;
    readonly arb1: Arbitrary<T1>;
    readonly arb2: Arbitrary<T2>;
    readonly arb3: Arbitrary<T3>;
    readonly arb4: Arbitrary<T4>;
    readonly arb5: Arbitrary<T5>;
    readonly arb6: Arbitrary<T6>;
    readonly arb7: Arbitrary<T7>;
    readonly arb8: Arbitrary<T8>;
    readonly tupleArb: GenericTupleArbitrary<T0 | T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8>;
    constructor(arb0: Arbitrary<T0>, arb1: Arbitrary<T1>, arb2: Arbitrary<T2>, arb3: Arbitrary<T3>, arb4: Arbitrary<T4>, arb5: Arbitrary<T5>, arb6: Arbitrary<T6>, arb7: Arbitrary<T7>, arb8: Arbitrary<T8>);
    generate(mrng: Random): Shrinkable<[T0, T1, T2, T3, T4, T5, T6, T7, T8]>;
    withBias(freq: number): Tuple9Arbitrary<T0, T1, T2, T3, T4, T5, T6, T7, T8>;
}
/** @hidden */
export declare class Tuple10Arbitrary<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9> extends Arbitrary<[T0, T1, T2, T3, T4, T5, T6, T7, T8, T9]> {
    readonly arb0: Arbitrary<T0>;
    readonly arb1: Arbitrary<T1>;
    readonly arb2: Arbitrary<T2>;
    readonly arb3: Arbitrary<T3>;
    readonly arb4: Arbitrary<T4>;
    readonly arb5: Arbitrary<T5>;
    readonly arb6: Arbitrary<T6>;
    readonly arb7: Arbitrary<T7>;
    readonly arb8: Arbitrary<T8>;
    readonly arb9: Arbitrary<T9>;
    readonly tupleArb: GenericTupleArbitrary<T0 | T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8 | T9>;
    constructor(arb0: Arbitrary<T0>, arb1: Arbitrary<T1>, arb2: Arbitrary<T2>, arb3: Arbitrary<T3>, arb4: Arbitrary<T4>, arb5: Arbitrary<T5>, arb6: Arbitrary<T6>, arb7: Arbitrary<T7>, arb8: Arbitrary<T8>, arb9: Arbitrary<T9>);
    generate(mrng: Random): Shrinkable<[T0, T1, T2, T3, T4, T5, T6, T7, T8, T9]>;
    withBias(freq: number): Tuple10Arbitrary<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9>;
}
/** @hidden */
export declare class Tuple11Arbitrary<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10> extends Arbitrary<[T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10]> {
    readonly arb0: Arbitrary<T0>;
    readonly arb1: Arbitrary<T1>;
    readonly arb2: Arbitrary<T2>;
    readonly arb3: Arbitrary<T3>;
    readonly arb4: Arbitrary<T4>;
    readonly arb5: Arbitrary<T5>;
    readonly arb6: Arbitrary<T6>;
    readonly arb7: Arbitrary<T7>;
    readonly arb8: Arbitrary<T8>;
    readonly arb9: Arbitrary<T9>;
    readonly arb10: Arbitrary<T10>;
    readonly tupleArb: GenericTupleArbitrary<T0 | T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8 | T9 | T10>;
    constructor(arb0: Arbitrary<T0>, arb1: Arbitrary<T1>, arb2: Arbitrary<T2>, arb3: Arbitrary<T3>, arb4: Arbitrary<T4>, arb5: Arbitrary<T5>, arb6: Arbitrary<T6>, arb7: Arbitrary<T7>, arb8: Arbitrary<T8>, arb9: Arbitrary<T9>, arb10: Arbitrary<T10>);
    generate(mrng: Random): Shrinkable<[T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10]>;
    withBias(freq: number): Tuple11Arbitrary<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>;
}
/** @hidden */
export declare class Tuple12Arbitrary<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11> extends Arbitrary<[T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11]> {
    readonly arb0: Arbitrary<T0>;
    readonly arb1: Arbitrary<T1>;
    readonly arb2: Arbitrary<T2>;
    readonly arb3: Arbitrary<T3>;
    readonly arb4: Arbitrary<T4>;
    readonly arb5: Arbitrary<T5>;
    readonly arb6: Arbitrary<T6>;
    readonly arb7: Arbitrary<T7>;
    readonly arb8: Arbitrary<T8>;
    readonly arb9: Arbitrary<T9>;
    readonly arb10: Arbitrary<T10>;
    readonly arb11: Arbitrary<T11>;
    readonly tupleArb: GenericTupleArbitrary<T0 | T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8 | T9 | T10 | T11>;
    constructor(arb0: Arbitrary<T0>, arb1: Arbitrary<T1>, arb2: Arbitrary<T2>, arb3: Arbitrary<T3>, arb4: Arbitrary<T4>, arb5: Arbitrary<T5>, arb6: Arbitrary<T6>, arb7: Arbitrary<T7>, arb8: Arbitrary<T8>, arb9: Arbitrary<T9>, arb10: Arbitrary<T10>, arb11: Arbitrary<T11>);
    generate(mrng: Random): Shrinkable<[T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11]>;
    withBias(freq: number): Tuple12Arbitrary<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11>;
}
/** @hidden */
export declare class Tuple13Arbitrary<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12> extends Arbitrary<[T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12]> {
    readonly arb0: Arbitrary<T0>;
    readonly arb1: Arbitrary<T1>;
    readonly arb2: Arbitrary<T2>;
    readonly arb3: Arbitrary<T3>;
    readonly arb4: Arbitrary<T4>;
    readonly arb5: Arbitrary<T5>;
    readonly arb6: Arbitrary<T6>;
    readonly arb7: Arbitrary<T7>;
    readonly arb8: Arbitrary<T8>;
    readonly arb9: Arbitrary<T9>;
    readonly arb10: Arbitrary<T10>;
    readonly arb11: Arbitrary<T11>;
    readonly arb12: Arbitrary<T12>;
    readonly tupleArb: GenericTupleArbitrary<T0 | T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8 | T9 | T10 | T11 | T12>;
    constructor(arb0: Arbitrary<T0>, arb1: Arbitrary<T1>, arb2: Arbitrary<T2>, arb3: Arbitrary<T3>, arb4: Arbitrary<T4>, arb5: Arbitrary<T5>, arb6: Arbitrary<T6>, arb7: Arbitrary<T7>, arb8: Arbitrary<T8>, arb9: Arbitrary<T9>, arb10: Arbitrary<T10>, arb11: Arbitrary<T11>, arb12: Arbitrary<T12>);
    generate(mrng: Random): Shrinkable<[T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12]>;
    withBias(freq: number): Tuple13Arbitrary<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12>;
}
/** @hidden */
export declare class Tuple14Arbitrary<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13> extends Arbitrary<[T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13]> {
    readonly arb0: Arbitrary<T0>;
    readonly arb1: Arbitrary<T1>;
    readonly arb2: Arbitrary<T2>;
    readonly arb3: Arbitrary<T3>;
    readonly arb4: Arbitrary<T4>;
    readonly arb5: Arbitrary<T5>;
    readonly arb6: Arbitrary<T6>;
    readonly arb7: Arbitrary<T7>;
    readonly arb8: Arbitrary<T8>;
    readonly arb9: Arbitrary<T9>;
    readonly arb10: Arbitrary<T10>;
    readonly arb11: Arbitrary<T11>;
    readonly arb12: Arbitrary<T12>;
    readonly arb13: Arbitrary<T13>;
    readonly tupleArb: GenericTupleArbitrary<T0 | T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8 | T9 | T10 | T11 | T12 | T13>;
    constructor(arb0: Arbitrary<T0>, arb1: Arbitrary<T1>, arb2: Arbitrary<T2>, arb3: Arbitrary<T3>, arb4: Arbitrary<T4>, arb5: Arbitrary<T5>, arb6: Arbitrary<T6>, arb7: Arbitrary<T7>, arb8: Arbitrary<T8>, arb9: Arbitrary<T9>, arb10: Arbitrary<T10>, arb11: Arbitrary<T11>, arb12: Arbitrary<T12>, arb13: Arbitrary<T13>);
    generate(mrng: Random): Shrinkable<[T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13]>;
    withBias(freq: number): Tuple14Arbitrary<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13>;
}
/** @hidden */
export declare class Tuple15Arbitrary<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14> extends Arbitrary<[T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14]> {
    readonly arb0: Arbitrary<T0>;
    readonly arb1: Arbitrary<T1>;
    readonly arb2: Arbitrary<T2>;
    readonly arb3: Arbitrary<T3>;
    readonly arb4: Arbitrary<T4>;
    readonly arb5: Arbitrary<T5>;
    readonly arb6: Arbitrary<T6>;
    readonly arb7: Arbitrary<T7>;
    readonly arb8: Arbitrary<T8>;
    readonly arb9: Arbitrary<T9>;
    readonly arb10: Arbitrary<T10>;
    readonly arb11: Arbitrary<T11>;
    readonly arb12: Arbitrary<T12>;
    readonly arb13: Arbitrary<T13>;
    readonly arb14: Arbitrary<T14>;
    readonly tupleArb: GenericTupleArbitrary<T0 | T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8 | T9 | T10 | T11 | T12 | T13 | T14>;
    constructor(arb0: Arbitrary<T0>, arb1: Arbitrary<T1>, arb2: Arbitrary<T2>, arb3: Arbitrary<T3>, arb4: Arbitrary<T4>, arb5: Arbitrary<T5>, arb6: Arbitrary<T6>, arb7: Arbitrary<T7>, arb8: Arbitrary<T8>, arb9: Arbitrary<T9>, arb10: Arbitrary<T10>, arb11: Arbitrary<T11>, arb12: Arbitrary<T12>, arb13: Arbitrary<T13>, arb14: Arbitrary<T14>);
    generate(mrng: Random): Shrinkable<[T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14]>;
    withBias(freq: number): Tuple15Arbitrary<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14>;
}
/** @hidden */
export declare class Tuple16Arbitrary<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15> extends Arbitrary<[T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15]> {
    readonly arb0: Arbitrary<T0>;
    readonly arb1: Arbitrary<T1>;
    readonly arb2: Arbitrary<T2>;
    readonly arb3: Arbitrary<T3>;
    readonly arb4: Arbitrary<T4>;
    readonly arb5: Arbitrary<T5>;
    readonly arb6: Arbitrary<T6>;
    readonly arb7: Arbitrary<T7>;
    readonly arb8: Arbitrary<T8>;
    readonly arb9: Arbitrary<T9>;
    readonly arb10: Arbitrary<T10>;
    readonly arb11: Arbitrary<T11>;
    readonly arb12: Arbitrary<T12>;
    readonly arb13: Arbitrary<T13>;
    readonly arb14: Arbitrary<T14>;
    readonly arb15: Arbitrary<T15>;
    readonly tupleArb: GenericTupleArbitrary<T0 | T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8 | T9 | T10 | T11 | T12 | T13 | T14 | T15>;
    constructor(arb0: Arbitrary<T0>, arb1: Arbitrary<T1>, arb2: Arbitrary<T2>, arb3: Arbitrary<T3>, arb4: Arbitrary<T4>, arb5: Arbitrary<T5>, arb6: Arbitrary<T6>, arb7: Arbitrary<T7>, arb8: Arbitrary<T8>, arb9: Arbitrary<T9>, arb10: Arbitrary<T10>, arb11: Arbitrary<T11>, arb12: Arbitrary<T12>, arb13: Arbitrary<T13>, arb14: Arbitrary<T14>, arb15: Arbitrary<T15>);
    generate(mrng: Random): Shrinkable<[T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15]>;
    withBias(freq: number): Tuple16Arbitrary<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15>;
}
/** @hidden */
export declare class Tuple17Arbitrary<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16> extends Arbitrary<[T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16]> {
    readonly arb0: Arbitrary<T0>;
    readonly arb1: Arbitrary<T1>;
    readonly arb2: Arbitrary<T2>;
    readonly arb3: Arbitrary<T3>;
    readonly arb4: Arbitrary<T4>;
    readonly arb5: Arbitrary<T5>;
    readonly arb6: Arbitrary<T6>;
    readonly arb7: Arbitrary<T7>;
    readonly arb8: Arbitrary<T8>;
    readonly arb9: Arbitrary<T9>;
    readonly arb10: Arbitrary<T10>;
    readonly arb11: Arbitrary<T11>;
    readonly arb12: Arbitrary<T12>;
    readonly arb13: Arbitrary<T13>;
    readonly arb14: Arbitrary<T14>;
    readonly arb15: Arbitrary<T15>;
    readonly arb16: Arbitrary<T16>;
    readonly tupleArb: GenericTupleArbitrary<T0 | T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8 | T9 | T10 | T11 | T12 | T13 | T14 | T15 | T16>;
    constructor(arb0: Arbitrary<T0>, arb1: Arbitrary<T1>, arb2: Arbitrary<T2>, arb3: Arbitrary<T3>, arb4: Arbitrary<T4>, arb5: Arbitrary<T5>, arb6: Arbitrary<T6>, arb7: Arbitrary<T7>, arb8: Arbitrary<T8>, arb9: Arbitrary<T9>, arb10: Arbitrary<T10>, arb11: Arbitrary<T11>, arb12: Arbitrary<T12>, arb13: Arbitrary<T13>, arb14: Arbitrary<T14>, arb15: Arbitrary<T15>, arb16: Arbitrary<T16>);
    generate(mrng: Random): Shrinkable<[T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16]>;
    withBias(freq: number): Tuple17Arbitrary<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16>;
}
/** @hidden */
export declare class Tuple18Arbitrary<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17> extends Arbitrary<[T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17]> {
    readonly arb0: Arbitrary<T0>;
    readonly arb1: Arbitrary<T1>;
    readonly arb2: Arbitrary<T2>;
    readonly arb3: Arbitrary<T3>;
    readonly arb4: Arbitrary<T4>;
    readonly arb5: Arbitrary<T5>;
    readonly arb6: Arbitrary<T6>;
    readonly arb7: Arbitrary<T7>;
    readonly arb8: Arbitrary<T8>;
    readonly arb9: Arbitrary<T9>;
    readonly arb10: Arbitrary<T10>;
    readonly arb11: Arbitrary<T11>;
    readonly arb12: Arbitrary<T12>;
    readonly arb13: Arbitrary<T13>;
    readonly arb14: Arbitrary<T14>;
    readonly arb15: Arbitrary<T15>;
    readonly arb16: Arbitrary<T16>;
    readonly arb17: Arbitrary<T17>;
    readonly tupleArb: GenericTupleArbitrary<T0 | T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8 | T9 | T10 | T11 | T12 | T13 | T14 | T15 | T16 | T17>;
    constructor(arb0: Arbitrary<T0>, arb1: Arbitrary<T1>, arb2: Arbitrary<T2>, arb3: Arbitrary<T3>, arb4: Arbitrary<T4>, arb5: Arbitrary<T5>, arb6: Arbitrary<T6>, arb7: Arbitrary<T7>, arb8: Arbitrary<T8>, arb9: Arbitrary<T9>, arb10: Arbitrary<T10>, arb11: Arbitrary<T11>, arb12: Arbitrary<T12>, arb13: Arbitrary<T13>, arb14: Arbitrary<T14>, arb15: Arbitrary<T15>, arb16: Arbitrary<T16>, arb17: Arbitrary<T17>);
    generate(mrng: Random): Shrinkable<[T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17]>;
    withBias(freq: number): Tuple18Arbitrary<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17>;
}
/** @hidden */
export declare class Tuple19Arbitrary<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18> extends Arbitrary<[T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18]> {
    readonly arb0: Arbitrary<T0>;
    readonly arb1: Arbitrary<T1>;
    readonly arb2: Arbitrary<T2>;
    readonly arb3: Arbitrary<T3>;
    readonly arb4: Arbitrary<T4>;
    readonly arb5: Arbitrary<T5>;
    readonly arb6: Arbitrary<T6>;
    readonly arb7: Arbitrary<T7>;
    readonly arb8: Arbitrary<T8>;
    readonly arb9: Arbitrary<T9>;
    readonly arb10: Arbitrary<T10>;
    readonly arb11: Arbitrary<T11>;
    readonly arb12: Arbitrary<T12>;
    readonly arb13: Arbitrary<T13>;
    readonly arb14: Arbitrary<T14>;
    readonly arb15: Arbitrary<T15>;
    readonly arb16: Arbitrary<T16>;
    readonly arb17: Arbitrary<T17>;
    readonly arb18: Arbitrary<T18>;
    readonly tupleArb: GenericTupleArbitrary<T0 | T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8 | T9 | T10 | T11 | T12 | T13 | T14 | T15 | T16 | T17 | T18>;
    constructor(arb0: Arbitrary<T0>, arb1: Arbitrary<T1>, arb2: Arbitrary<T2>, arb3: Arbitrary<T3>, arb4: Arbitrary<T4>, arb5: Arbitrary<T5>, arb6: Arbitrary<T6>, arb7: Arbitrary<T7>, arb8: Arbitrary<T8>, arb9: Arbitrary<T9>, arb10: Arbitrary<T10>, arb11: Arbitrary<T11>, arb12: Arbitrary<T12>, arb13: Arbitrary<T13>, arb14: Arbitrary<T14>, arb15: Arbitrary<T15>, arb16: Arbitrary<T16>, arb17: Arbitrary<T17>, arb18: Arbitrary<T18>);
    generate(mrng: Random): Shrinkable<[T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18]>;
    withBias(freq: number): Tuple19Arbitrary<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18>;
}
/** @hidden */
export declare class Tuple20Arbitrary<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19> extends Arbitrary<[T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19]> {
    readonly arb0: Arbitrary<T0>;
    readonly arb1: Arbitrary<T1>;
    readonly arb2: Arbitrary<T2>;
    readonly arb3: Arbitrary<T3>;
    readonly arb4: Arbitrary<T4>;
    readonly arb5: Arbitrary<T5>;
    readonly arb6: Arbitrary<T6>;
    readonly arb7: Arbitrary<T7>;
    readonly arb8: Arbitrary<T8>;
    readonly arb9: Arbitrary<T9>;
    readonly arb10: Arbitrary<T10>;
    readonly arb11: Arbitrary<T11>;
    readonly arb12: Arbitrary<T12>;
    readonly arb13: Arbitrary<T13>;
    readonly arb14: Arbitrary<T14>;
    readonly arb15: Arbitrary<T15>;
    readonly arb16: Arbitrary<T16>;
    readonly arb17: Arbitrary<T17>;
    readonly arb18: Arbitrary<T18>;
    readonly arb19: Arbitrary<T19>;
    readonly tupleArb: GenericTupleArbitrary<T0 | T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8 | T9 | T10 | T11 | T12 | T13 | T14 | T15 | T16 | T17 | T18 | T19>;
    constructor(arb0: Arbitrary<T0>, arb1: Arbitrary<T1>, arb2: Arbitrary<T2>, arb3: Arbitrary<T3>, arb4: Arbitrary<T4>, arb5: Arbitrary<T5>, arb6: Arbitrary<T6>, arb7: Arbitrary<T7>, arb8: Arbitrary<T8>, arb9: Arbitrary<T9>, arb10: Arbitrary<T10>, arb11: Arbitrary<T11>, arb12: Arbitrary<T12>, arb13: Arbitrary<T13>, arb14: Arbitrary<T14>, arb15: Arbitrary<T15>, arb16: Arbitrary<T16>, arb17: Arbitrary<T17>, arb18: Arbitrary<T18>, arb19: Arbitrary<T19>);
    generate(mrng: Random): Shrinkable<[T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19]>;
    withBias(freq: number): Tuple20Arbitrary<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19>;
}
/** @hidden */
export declare class Tuple21Arbitrary<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20> extends Arbitrary<[T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20]> {
    readonly arb0: Arbitrary<T0>;
    readonly arb1: Arbitrary<T1>;
    readonly arb2: Arbitrary<T2>;
    readonly arb3: Arbitrary<T3>;
    readonly arb4: Arbitrary<T4>;
    readonly arb5: Arbitrary<T5>;
    readonly arb6: Arbitrary<T6>;
    readonly arb7: Arbitrary<T7>;
    readonly arb8: Arbitrary<T8>;
    readonly arb9: Arbitrary<T9>;
    readonly arb10: Arbitrary<T10>;
    readonly arb11: Arbitrary<T11>;
    readonly arb12: Arbitrary<T12>;
    readonly arb13: Arbitrary<T13>;
    readonly arb14: Arbitrary<T14>;
    readonly arb15: Arbitrary<T15>;
    readonly arb16: Arbitrary<T16>;
    readonly arb17: Arbitrary<T17>;
    readonly arb18: Arbitrary<T18>;
    readonly arb19: Arbitrary<T19>;
    readonly arb20: Arbitrary<T20>;
    readonly tupleArb: GenericTupleArbitrary<T0 | T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8 | T9 | T10 | T11 | T12 | T13 | T14 | T15 | T16 | T17 | T18 | T19 | T20>;
    constructor(arb0: Arbitrary<T0>, arb1: Arbitrary<T1>, arb2: Arbitrary<T2>, arb3: Arbitrary<T3>, arb4: Arbitrary<T4>, arb5: Arbitrary<T5>, arb6: Arbitrary<T6>, arb7: Arbitrary<T7>, arb8: Arbitrary<T8>, arb9: Arbitrary<T9>, arb10: Arbitrary<T10>, arb11: Arbitrary<T11>, arb12: Arbitrary<T12>, arb13: Arbitrary<T13>, arb14: Arbitrary<T14>, arb15: Arbitrary<T15>, arb16: Arbitrary<T16>, arb17: Arbitrary<T17>, arb18: Arbitrary<T18>, arb19: Arbitrary<T19>, arb20: Arbitrary<T20>);
    generate(mrng: Random): Shrinkable<[T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20]>;
    withBias(freq: number): Tuple21Arbitrary<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20>;
}
/** @hidden */
export declare class Tuple22Arbitrary<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21> extends Arbitrary<[T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21]> {
    readonly arb0: Arbitrary<T0>;
    readonly arb1: Arbitrary<T1>;
    readonly arb2: Arbitrary<T2>;
    readonly arb3: Arbitrary<T3>;
    readonly arb4: Arbitrary<T4>;
    readonly arb5: Arbitrary<T5>;
    readonly arb6: Arbitrary<T6>;
    readonly arb7: Arbitrary<T7>;
    readonly arb8: Arbitrary<T8>;
    readonly arb9: Arbitrary<T9>;
    readonly arb10: Arbitrary<T10>;
    readonly arb11: Arbitrary<T11>;
    readonly arb12: Arbitrary<T12>;
    readonly arb13: Arbitrary<T13>;
    readonly arb14: Arbitrary<T14>;
    readonly arb15: Arbitrary<T15>;
    readonly arb16: Arbitrary<T16>;
    readonly arb17: Arbitrary<T17>;
    readonly arb18: Arbitrary<T18>;
    readonly arb19: Arbitrary<T19>;
    readonly arb20: Arbitrary<T20>;
    readonly arb21: Arbitrary<T21>;
    readonly tupleArb: GenericTupleArbitrary<T0 | T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8 | T9 | T10 | T11 | T12 | T13 | T14 | T15 | T16 | T17 | T18 | T19 | T20 | T21>;
    constructor(arb0: Arbitrary<T0>, arb1: Arbitrary<T1>, arb2: Arbitrary<T2>, arb3: Arbitrary<T3>, arb4: Arbitrary<T4>, arb5: Arbitrary<T5>, arb6: Arbitrary<T6>, arb7: Arbitrary<T7>, arb8: Arbitrary<T8>, arb9: Arbitrary<T9>, arb10: Arbitrary<T10>, arb11: Arbitrary<T11>, arb12: Arbitrary<T12>, arb13: Arbitrary<T13>, arb14: Arbitrary<T14>, arb15: Arbitrary<T15>, arb16: Arbitrary<T16>, arb17: Arbitrary<T17>, arb18: Arbitrary<T18>, arb19: Arbitrary<T19>, arb20: Arbitrary<T20>, arb21: Arbitrary<T21>);
    generate(mrng: Random): Shrinkable<[T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21]>;
    withBias(freq: number): Tuple22Arbitrary<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21>;
}
/**
 * For tuples of [T0]
 * @param arb0 Arbitrary responsible for T0
 */
declare function tuple<T0>(arb0: Arbitrary<T0>): Tuple1Arbitrary<T0>;
/**
 * For tuples of [T0,T1]
 * @param arb0 Arbitrary responsible for T0
* @param arb1 Arbitrary responsible for T1
 */
declare function tuple<T0, T1>(arb0: Arbitrary<T0>, arb1: Arbitrary<T1>): Tuple2Arbitrary<T0, T1>;
/**
 * For tuples of [T0,T1,T2]
 * @param arb0 Arbitrary responsible for T0
* @param arb1 Arbitrary responsible for T1
* @param arb2 Arbitrary responsible for T2
 */
declare function tuple<T0, T1, T2>(arb0: Arbitrary<T0>, arb1: Arbitrary<T1>, arb2: Arbitrary<T2>): Tuple3Arbitrary<T0, T1, T2>;
/**
 * For tuples of [T0,T1,T2,T3]
 * @param arb0 Arbitrary responsible for T0
* @param arb1 Arbitrary responsible for T1
* @param arb2 Arbitrary responsible for T2
* @param arb3 Arbitrary responsible for T3
 */
declare function tuple<T0, T1, T2, T3>(arb0: Arbitrary<T0>, arb1: Arbitrary<T1>, arb2: Arbitrary<T2>, arb3: Arbitrary<T3>): Tuple4Arbitrary<T0, T1, T2, T3>;
/**
 * For tuples of [T0,T1,T2,T3,T4]
 * @param arb0 Arbitrary responsible for T0
* @param arb1 Arbitrary responsible for T1
* @param arb2 Arbitrary responsible for T2
* @param arb3 Arbitrary responsible for T3
* @param arb4 Arbitrary responsible for T4
 */
declare function tuple<T0, T1, T2, T3, T4>(arb0: Arbitrary<T0>, arb1: Arbitrary<T1>, arb2: Arbitrary<T2>, arb3: Arbitrary<T3>, arb4: Arbitrary<T4>): Tuple5Arbitrary<T0, T1, T2, T3, T4>;
/**
 * For tuples of [T0,T1,T2,T3,T4,T5]
 * @param arb0 Arbitrary responsible for T0
* @param arb1 Arbitrary responsible for T1
* @param arb2 Arbitrary responsible for T2
* @param arb3 Arbitrary responsible for T3
* @param arb4 Arbitrary responsible for T4
* @param arb5 Arbitrary responsible for T5
 */
declare function tuple<T0, T1, T2, T3, T4, T5>(arb0: Arbitrary<T0>, arb1: Arbitrary<T1>, arb2: Arbitrary<T2>, arb3: Arbitrary<T3>, arb4: Arbitrary<T4>, arb5: Arbitrary<T5>): Tuple6Arbitrary<T0, T1, T2, T3, T4, T5>;
/**
 * For tuples of [T0,T1,T2,T3,T4,T5,T6]
 * @param arb0 Arbitrary responsible for T0
* @param arb1 Arbitrary responsible for T1
* @param arb2 Arbitrary responsible for T2
* @param arb3 Arbitrary responsible for T3
* @param arb4 Arbitrary responsible for T4
* @param arb5 Arbitrary responsible for T5
* @param arb6 Arbitrary responsible for T6
 */
declare function tuple<T0, T1, T2, T3, T4, T5, T6>(arb0: Arbitrary<T0>, arb1: Arbitrary<T1>, arb2: Arbitrary<T2>, arb3: Arbitrary<T3>, arb4: Arbitrary<T4>, arb5: Arbitrary<T5>, arb6: Arbitrary<T6>): Tuple7Arbitrary<T0, T1, T2, T3, T4, T5, T6>;
/**
 * For tuples of [T0,T1,T2,T3,T4,T5,T6,T7]
 * @param arb0 Arbitrary responsible for T0
* @param arb1 Arbitrary responsible for T1
* @param arb2 Arbitrary responsible for T2
* @param arb3 Arbitrary responsible for T3
* @param arb4 Arbitrary responsible for T4
* @param arb5 Arbitrary responsible for T5
* @param arb6 Arbitrary responsible for T6
* @param arb7 Arbitrary responsible for T7
 */
declare function tuple<T0, T1, T2, T3, T4, T5, T6, T7>(arb0: Arbitrary<T0>, arb1: Arbitrary<T1>, arb2: Arbitrary<T2>, arb3: Arbitrary<T3>, arb4: Arbitrary<T4>, arb5: Arbitrary<T5>, arb6: Arbitrary<T6>, arb7: Arbitrary<T7>): Tuple8Arbitrary<T0, T1, T2, T3, T4, T5, T6, T7>;
/**
 * For tuples of [T0,T1,T2,T3,T4,T5,T6,T7,T8]
 * @param arb0 Arbitrary responsible for T0
* @param arb1 Arbitrary responsible for T1
* @param arb2 Arbitrary responsible for T2
* @param arb3 Arbitrary responsible for T3
* @param arb4 Arbitrary responsible for T4
* @param arb5 Arbitrary responsible for T5
* @param arb6 Arbitrary responsible for T6
* @param arb7 Arbitrary responsible for T7
* @param arb8 Arbitrary responsible for T8
 */
declare function tuple<T0, T1, T2, T3, T4, T5, T6, T7, T8>(arb0: Arbitrary<T0>, arb1: Arbitrary<T1>, arb2: Arbitrary<T2>, arb3: Arbitrary<T3>, arb4: Arbitrary<T4>, arb5: Arbitrary<T5>, arb6: Arbitrary<T6>, arb7: Arbitrary<T7>, arb8: Arbitrary<T8>): Tuple9Arbitrary<T0, T1, T2, T3, T4, T5, T6, T7, T8>;
/**
 * For tuples of [T0,T1,T2,T3,T4,T5,T6,T7,T8,T9]
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
 */
declare function tuple<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9>(arb0: Arbitrary<T0>, arb1: Arbitrary<T1>, arb2: Arbitrary<T2>, arb3: Arbitrary<T3>, arb4: Arbitrary<T4>, arb5: Arbitrary<T5>, arb6: Arbitrary<T6>, arb7: Arbitrary<T7>, arb8: Arbitrary<T8>, arb9: Arbitrary<T9>): Tuple10Arbitrary<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9>;
/**
 * For tuples of [T0,T1,T2,T3,T4,T5,T6,T7,T8,T9,T10]
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
 */
declare function tuple<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(arb0: Arbitrary<T0>, arb1: Arbitrary<T1>, arb2: Arbitrary<T2>, arb3: Arbitrary<T3>, arb4: Arbitrary<T4>, arb5: Arbitrary<T5>, arb6: Arbitrary<T6>, arb7: Arbitrary<T7>, arb8: Arbitrary<T8>, arb9: Arbitrary<T9>, arb10: Arbitrary<T10>): Tuple11Arbitrary<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>;
/**
 * For tuples of [T0,T1,T2,T3,T4,T5,T6,T7,T8,T9,T10,T11]
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
 */
declare function tuple<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11>(arb0: Arbitrary<T0>, arb1: Arbitrary<T1>, arb2: Arbitrary<T2>, arb3: Arbitrary<T3>, arb4: Arbitrary<T4>, arb5: Arbitrary<T5>, arb6: Arbitrary<T6>, arb7: Arbitrary<T7>, arb8: Arbitrary<T8>, arb9: Arbitrary<T9>, arb10: Arbitrary<T10>, arb11: Arbitrary<T11>): Tuple12Arbitrary<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11>;
/**
 * For tuples of [T0,T1,T2,T3,T4,T5,T6,T7,T8,T9,T10,T11,T12]
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
 */
declare function tuple<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12>(arb0: Arbitrary<T0>, arb1: Arbitrary<T1>, arb2: Arbitrary<T2>, arb3: Arbitrary<T3>, arb4: Arbitrary<T4>, arb5: Arbitrary<T5>, arb6: Arbitrary<T6>, arb7: Arbitrary<T7>, arb8: Arbitrary<T8>, arb9: Arbitrary<T9>, arb10: Arbitrary<T10>, arb11: Arbitrary<T11>, arb12: Arbitrary<T12>): Tuple13Arbitrary<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12>;
/**
 * For tuples of [T0,T1,T2,T3,T4,T5,T6,T7,T8,T9,T10,T11,T12,T13]
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
 */
declare function tuple<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13>(arb0: Arbitrary<T0>, arb1: Arbitrary<T1>, arb2: Arbitrary<T2>, arb3: Arbitrary<T3>, arb4: Arbitrary<T4>, arb5: Arbitrary<T5>, arb6: Arbitrary<T6>, arb7: Arbitrary<T7>, arb8: Arbitrary<T8>, arb9: Arbitrary<T9>, arb10: Arbitrary<T10>, arb11: Arbitrary<T11>, arb12: Arbitrary<T12>, arb13: Arbitrary<T13>): Tuple14Arbitrary<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13>;
/**
 * For tuples of [T0,T1,T2,T3,T4,T5,T6,T7,T8,T9,T10,T11,T12,T13,T14]
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
 */
declare function tuple<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14>(arb0: Arbitrary<T0>, arb1: Arbitrary<T1>, arb2: Arbitrary<T2>, arb3: Arbitrary<T3>, arb4: Arbitrary<T4>, arb5: Arbitrary<T5>, arb6: Arbitrary<T6>, arb7: Arbitrary<T7>, arb8: Arbitrary<T8>, arb9: Arbitrary<T9>, arb10: Arbitrary<T10>, arb11: Arbitrary<T11>, arb12: Arbitrary<T12>, arb13: Arbitrary<T13>, arb14: Arbitrary<T14>): Tuple15Arbitrary<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14>;
/**
 * For tuples of [T0,T1,T2,T3,T4,T5,T6,T7,T8,T9,T10,T11,T12,T13,T14,T15]
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
 */
declare function tuple<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15>(arb0: Arbitrary<T0>, arb1: Arbitrary<T1>, arb2: Arbitrary<T2>, arb3: Arbitrary<T3>, arb4: Arbitrary<T4>, arb5: Arbitrary<T5>, arb6: Arbitrary<T6>, arb7: Arbitrary<T7>, arb8: Arbitrary<T8>, arb9: Arbitrary<T9>, arb10: Arbitrary<T10>, arb11: Arbitrary<T11>, arb12: Arbitrary<T12>, arb13: Arbitrary<T13>, arb14: Arbitrary<T14>, arb15: Arbitrary<T15>): Tuple16Arbitrary<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15>;
/**
 * For tuples of [T0,T1,T2,T3,T4,T5,T6,T7,T8,T9,T10,T11,T12,T13,T14,T15,T16]
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
 */
declare function tuple<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16>(arb0: Arbitrary<T0>, arb1: Arbitrary<T1>, arb2: Arbitrary<T2>, arb3: Arbitrary<T3>, arb4: Arbitrary<T4>, arb5: Arbitrary<T5>, arb6: Arbitrary<T6>, arb7: Arbitrary<T7>, arb8: Arbitrary<T8>, arb9: Arbitrary<T9>, arb10: Arbitrary<T10>, arb11: Arbitrary<T11>, arb12: Arbitrary<T12>, arb13: Arbitrary<T13>, arb14: Arbitrary<T14>, arb15: Arbitrary<T15>, arb16: Arbitrary<T16>): Tuple17Arbitrary<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16>;
/**
 * For tuples of [T0,T1,T2,T3,T4,T5,T6,T7,T8,T9,T10,T11,T12,T13,T14,T15,T16,T17]
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
 */
declare function tuple<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17>(arb0: Arbitrary<T0>, arb1: Arbitrary<T1>, arb2: Arbitrary<T2>, arb3: Arbitrary<T3>, arb4: Arbitrary<T4>, arb5: Arbitrary<T5>, arb6: Arbitrary<T6>, arb7: Arbitrary<T7>, arb8: Arbitrary<T8>, arb9: Arbitrary<T9>, arb10: Arbitrary<T10>, arb11: Arbitrary<T11>, arb12: Arbitrary<T12>, arb13: Arbitrary<T13>, arb14: Arbitrary<T14>, arb15: Arbitrary<T15>, arb16: Arbitrary<T16>, arb17: Arbitrary<T17>): Tuple18Arbitrary<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17>;
/**
 * For tuples of [T0,T1,T2,T3,T4,T5,T6,T7,T8,T9,T10,T11,T12,T13,T14,T15,T16,T17,T18]
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
 */
declare function tuple<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18>(arb0: Arbitrary<T0>, arb1: Arbitrary<T1>, arb2: Arbitrary<T2>, arb3: Arbitrary<T3>, arb4: Arbitrary<T4>, arb5: Arbitrary<T5>, arb6: Arbitrary<T6>, arb7: Arbitrary<T7>, arb8: Arbitrary<T8>, arb9: Arbitrary<T9>, arb10: Arbitrary<T10>, arb11: Arbitrary<T11>, arb12: Arbitrary<T12>, arb13: Arbitrary<T13>, arb14: Arbitrary<T14>, arb15: Arbitrary<T15>, arb16: Arbitrary<T16>, arb17: Arbitrary<T17>, arb18: Arbitrary<T18>): Tuple19Arbitrary<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18>;
/**
 * For tuples of [T0,T1,T2,T3,T4,T5,T6,T7,T8,T9,T10,T11,T12,T13,T14,T15,T16,T17,T18,T19]
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
 */
declare function tuple<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19>(arb0: Arbitrary<T0>, arb1: Arbitrary<T1>, arb2: Arbitrary<T2>, arb3: Arbitrary<T3>, arb4: Arbitrary<T4>, arb5: Arbitrary<T5>, arb6: Arbitrary<T6>, arb7: Arbitrary<T7>, arb8: Arbitrary<T8>, arb9: Arbitrary<T9>, arb10: Arbitrary<T10>, arb11: Arbitrary<T11>, arb12: Arbitrary<T12>, arb13: Arbitrary<T13>, arb14: Arbitrary<T14>, arb15: Arbitrary<T15>, arb16: Arbitrary<T16>, arb17: Arbitrary<T17>, arb18: Arbitrary<T18>, arb19: Arbitrary<T19>): Tuple20Arbitrary<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19>;
/**
 * For tuples of [T0,T1,T2,T3,T4,T5,T6,T7,T8,T9,T10,T11,T12,T13,T14,T15,T16,T17,T18,T19,T20]
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
 */
declare function tuple<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20>(arb0: Arbitrary<T0>, arb1: Arbitrary<T1>, arb2: Arbitrary<T2>, arb3: Arbitrary<T3>, arb4: Arbitrary<T4>, arb5: Arbitrary<T5>, arb6: Arbitrary<T6>, arb7: Arbitrary<T7>, arb8: Arbitrary<T8>, arb9: Arbitrary<T9>, arb10: Arbitrary<T10>, arb11: Arbitrary<T11>, arb12: Arbitrary<T12>, arb13: Arbitrary<T13>, arb14: Arbitrary<T14>, arb15: Arbitrary<T15>, arb16: Arbitrary<T16>, arb17: Arbitrary<T17>, arb18: Arbitrary<T18>, arb19: Arbitrary<T19>, arb20: Arbitrary<T20>): Tuple21Arbitrary<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20>;
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
declare function tuple<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21>(arb0: Arbitrary<T0>, arb1: Arbitrary<T1>, arb2: Arbitrary<T2>, arb3: Arbitrary<T3>, arb4: Arbitrary<T4>, arb5: Arbitrary<T5>, arb6: Arbitrary<T6>, arb7: Arbitrary<T7>, arb8: Arbitrary<T8>, arb9: Arbitrary<T9>, arb10: Arbitrary<T10>, arb11: Arbitrary<T11>, arb12: Arbitrary<T12>, arb13: Arbitrary<T13>, arb14: Arbitrary<T14>, arb15: Arbitrary<T15>, arb16: Arbitrary<T16>, arb17: Arbitrary<T17>, arb18: Arbitrary<T18>, arb19: Arbitrary<T19>, arb20: Arbitrary<T20>, arb21: Arbitrary<T21>): Tuple22Arbitrary<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21>;
export { tuple };
