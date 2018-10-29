import { Random } from '../../random/generator/Random';
import { Arbitrary } from '../arbitrary/definition/Arbitrary';
import { Shrinkable } from '../arbitrary/definition/Shrinkable';
import { PreconditionFailure } from '../precondition/PreconditionFailure';
import { IProperty } from './IProperty';
/**
 * Property, see {@link IProperty}
 *
 * Prefer using {@link property} instead
 */
export declare class Property<Ts> implements IProperty<Ts> {
    readonly arb: Arbitrary<Ts>;
    readonly predicate: (t: Ts) => boolean | void;
    static dummyHook: (() => void);
    private beforeEachHook;
    private afterEachHook;
    constructor(arb: Arbitrary<Ts>, predicate: (t: Ts) => boolean | void);
    isAsync: () => boolean;
    generate(mrng: Random, runId?: number): Shrinkable<Ts>;
    run(v: Ts): PreconditionFailure | string | null;
    /**
     * Define a function that should be called before all calls to the predicate
     * @param hookFunction Function to be called
     */
    beforeEach(hookFunction: () => void): Property<Ts>;
    /**
     * Define a function that should be called after all calls to the predicate
     * @param hookFunction Function to be called
     */
    afterEach(hookFunction: () => void): Property<Ts>;
}
