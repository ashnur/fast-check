import { Random } from '../../random/generator/Random';
import { Arbitrary } from '../arbitrary/definition/Arbitrary';
import { Shrinkable } from '../arbitrary/definition/Shrinkable';
import { PreconditionFailure } from '../precondition/PreconditionFailure';
import { IProperty } from './IProperty';
/**
 * Asynchronous property, see {@link IProperty}
 *
 * Prefer using {@link asyncProperty} instead
 */
export declare class AsyncProperty<Ts> implements IProperty<Ts> {
    readonly arb: Arbitrary<Ts>;
    readonly predicate: (t: Ts) => Promise<boolean | void>;
    static dummyHook: (() => Promise<void>);
    private beforeEachHook;
    private afterEachHook;
    constructor(arb: Arbitrary<Ts>, predicate: (t: Ts) => Promise<boolean | void>);
    isAsync: () => boolean;
    generate(mrng: Random, runId?: number): Shrinkable<Ts>;
    run(v: Ts): Promise<PreconditionFailure | string | null>;
    /**
     * Define a function that should be called before all calls to the predicate
     * @param hookFunction Function to be called
     */
    beforeEach(hookFunction: () => Promise<void>): AsyncProperty<Ts>;
    /**
     * Define a function that should be called after all calls to the predicate
     * @param hookFunction Function to be called
     */
    afterEach(hookFunction: () => Promise<void>): AsyncProperty<Ts>;
}
