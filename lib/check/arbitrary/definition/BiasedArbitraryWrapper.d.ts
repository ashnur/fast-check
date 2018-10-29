import { Arbitrary } from './Arbitrary';
/**
 * @hidden
 *
 * Helper function automatically choosing between the biased and unbiased versions of an Arbitrary.
 * This helper has been introduced in order to provide higher performances when building custom biased arbitraries
 */
export declare function biasWrapper<T>(freq: number, arb: Arbitrary<T>, biasedArbBuilder: (unbiased: Arbitrary<T>) => Arbitrary<T>): Arbitrary<T>;
