import { Arbitrary } from './definition/Arbitrary';
export declare class ObjectConstraints {
    readonly key: Arbitrary<string>;
    readonly values: Arbitrary<any>[];
    readonly maxDepth: number;
    constructor(key: Arbitrary<string>, values: Arbitrary<any>[], maxDepth: number);
    next(): ObjectConstraints;
    /**
     * Default value of ObjectConstraints.Settings.values field
     */
    static defaultValues(): Arbitrary<any>[];
    static from(settings?: ObjectConstraints.Settings): ObjectConstraints;
}
export declare namespace ObjectConstraints {
    /** Constraints to be applied during object generation */
    interface Settings {
        /** Maximal depth allowed */
        maxDepth?: number;
        /**
         * Arbitrary for keys
         *
         * Default for `key` is: `fc.string()`
         */
        key?: Arbitrary<string>;
        /**
         * Arbitrary for values
         *
         * Default for `values` are:
         * - `fc.boolean()`,
         * - `fc.integer()`,
         * - `fc.double()`,
         * - `fc.string()`
         * - constants among:
         *  - `null`,
         *  - `undefined`,
         *  - `Number.NaN`,
         *  - `+0`,
         *  - `-0`,
         *  - `Number.EPSILON`,
         *  - `Number.MIN_VALUE`,
         *  - `Number.MAX_VALUE`,
         *  - `Number.MIN_SAFE_INTEGER`,
         *  - `Number.MAX_SAFE_INTEGER`,
         *  - `Number.POSITIVE_INFINITY`,
         *  - `Number.NEGATIVE_INFINITY`
         */
        values?: Arbitrary<any>[];
    }
}
/**
 * For any type of values
 *
 * You may use {@link sample} to preview the values that will be generated
 *
 * @example
 * ```null, undefined, 42, 6.5, 'Hello', {} or {k: [{}, 1, 2]}```
 */
declare function anything(): Arbitrary<any>;
/**
 * For any type of values following the constraints defined by `settings`
 *
 * You may use {@link sample} to preview the values that will be generated
 *
 * @example
 * ```null, undefined, 42, 6.5, 'Hello', {} or {k: [{}, 1, 2]}```
 *
 * @example
 * ```typescript
 * // Using custom settings
 * fc.anything({
 *     key: fc.char(),
 *     values: [fc.integer(10,20), fc.constant(42)],
 *     maxDepth: 2
 * });
 * // Can build entries such as:
 * // - 19
 * // - [{"2":12,"k":15,"A":42}]
 * // - {"4":[19,13,14,14,42,11,20,11],"6":42,"7":16,"L":10,"'":[20,11],"e":[42,20,42,14,13,17]}
 * // - [42,42,42]...
 * ```
 *
 * @param settings Constraints to apply when building instances
 */
declare function anything(settings: ObjectConstraints.Settings): Arbitrary<any>;
/**
 * For any objects
 *
 * You may use {@link sample} to preview the values that will be generated
 *
 * @example
 * ```{} or {k: [{}, 1, 2]}```
 */
declare function object(): Arbitrary<any>;
/**
 * For any objects following the constraints defined by `settings`
 *
 * You may use {@link sample} to preview the values that will be generated
 *
 * @example
 * ```{} or {k: [{}, 1, 2]}```
 *
 * @param settings Constraints to apply when building instances
 */
declare function object(settings: ObjectConstraints.Settings): Arbitrary<any>;
/**
 * For any JSON compliant values
 *
 * Keys and string values rely on {@link string}
 */
declare function jsonObject(): Arbitrary<any>;
/**
 * For any JSON compliant values with a maximal depth
 *
 * Keys and string values rely on {@link string}
 *
 * @param maxDepth Maximal depth of the generated values
 */
declare function jsonObject(maxDepth: number): Arbitrary<any>;
/**
 * For any JSON compliant values with unicode support
 *
 * Keys and string values rely on {@link unicode}
 */
declare function unicodeJsonObject(): Arbitrary<any>;
/**
 * For any JSON compliant values with unicode support and a maximal depth
 *
 * Keys and string values rely on {@link unicode}
 *
 * @param maxDepth Maximal depth of the generated values
 */
declare function unicodeJsonObject(maxDepth: number): Arbitrary<any>;
/**
 * For any JSON strings
 *
 * Keys and string values rely on {@link string}
 */
declare function json(): Arbitrary<string>;
/**
 * For any JSON strings with a maximal depth
 *
 * Keys and string values rely on {@link string}
 *
 * @param maxDepth Maximal depth of the generated objects
 */
declare function json(maxDepth: number): Arbitrary<string>;
/**
 * For any JSON strings with unicode support
 *
 * Keys and string values rely on {@link unicode}
 */
declare function unicodeJson(): Arbitrary<string>;
/**
 * For any JSON strings with unicode support and a maximal depth
 *
 * Keys and string values rely on {@link unicode}
 *
 * @param maxDepth Maximal depth of the generated objects
 */
declare function unicodeJson(maxDepth: number): Arbitrary<string>;
export { anything, object, jsonObject, unicodeJsonObject, json, unicodeJson };
