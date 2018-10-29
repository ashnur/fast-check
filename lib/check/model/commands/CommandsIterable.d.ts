import { CommandWrapper } from './CommandWrapper';
/** @hidden */
export declare class CommandsIterable<Model extends object, Real, RunResult> implements Iterable<CommandWrapper<Model, Real, RunResult>> {
    readonly commands: CommandWrapper<Model, Real, RunResult>[];
    private lastErrorDetectedStr;
    constructor(commands: CommandWrapper<Model, Real, RunResult>[]);
    [Symbol.iterator](): Iterator<CommandWrapper<Model, Real, RunResult>>;
    errorDetected(): void;
    toString(): string;
}
