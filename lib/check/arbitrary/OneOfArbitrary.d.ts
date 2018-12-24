import { Arbitrary } from './definition/Arbitrary';
/**
 * For one of the values generated by `...arbs` - with all `...arbs` equiprobable
 *
 * **WARNING**: It expects at least one arbitrary
 *
 * @param arbs Arbitraries that might be called to produce a value
 */
declare function oneof<T>(...arbs: Arbitrary<T>[]): Arbitrary<T>;
export { oneof };