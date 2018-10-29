import { Random } from '../../random/generator/Random';
import { IProperty } from './IProperty';
/** @hidden */
export declare class UnbiasedProperty<Ts> implements IProperty<Ts> {
    readonly property: IProperty<Ts>;
    constructor(property: IProperty<Ts>);
    isAsync: () => boolean;
    generate: (mrng: Random, runId?: number | undefined) => import("../arbitrary/definition/Shrinkable").Shrinkable<Ts>;
    run: (v: Ts) => string | import("../precondition/PreconditionFailure").PreconditionFailure | Promise<string | import("../precondition/PreconditionFailure").PreconditionFailure | null> | null;
}
