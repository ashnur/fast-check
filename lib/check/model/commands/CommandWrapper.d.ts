import { ICommand } from '../command/ICommand';
/** @hidden */
export declare class CommandWrapper<Model extends object, Real, RunResult> implements ICommand<Model, Real, RunResult> {
    readonly cmd: ICommand<Model, Real, RunResult>;
    hasRan: boolean;
    constructor(cmd: ICommand<Model, Real, RunResult>);
    check(m: Readonly<Model>): boolean;
    run(m: Model, r: Real): RunResult;
    clone(): CommandWrapper<Model, Real, RunResult>;
    toString(): string;
}
