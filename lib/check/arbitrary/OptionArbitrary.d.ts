import { Arbitrary } from './definition/Arbitrary';
/**
 * For either null or a value coming from `arb`
 * @param arb Arbitrary that will be called to generate a non null value
 */
declare function option<T>(arb: Arbitrary<T>): Arbitrary<T | null>;
/**
 * For either null or a value coming from `arb` with custom frequency
 * @param arb Arbitrary that will be called to generate a non null value
 * @param freq The probability to build a null value is of `1 / freq`
 */
declare function option<T>(arb: Arbitrary<T>, freq: number): Arbitrary<T | null>;
export { option };
