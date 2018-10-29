import { Random } from '../../random/generator/Random';
import { Shrinkable } from '../arbitrary/definition/Shrinkable';
import { IProperty } from './IProperty';
/** @hidden */
export declare class TimeoutProperty<Ts> implements IProperty<Ts> {
    readonly property: IProperty<Ts>;
    readonly timeMs: number;
    constructor(property: IProperty<Ts>, timeMs: number);
    isAsync: () => boolean;
    generate(mrng: Random, runId?: number): Shrinkable<Ts>;
    run(v: Ts): Promise<string | import("../precondition/PreconditionFailure").PreconditionFailure | null>;
}
