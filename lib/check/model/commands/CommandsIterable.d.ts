import { cloneMethod } from '../../symbols';
import { CommandWrapper } from './CommandWrapper';
/** @hidden */
export declare class CommandsIterable<Model extends object, Real, RunResult, CheckAsync extends boolean = false> implements Iterable<CommandWrapper<Model, Real, RunResult, CheckAsync>> {
    readonly commands: CommandWrapper<Model, Real, RunResult, CheckAsync>[];
    constructor(commands: CommandWrapper<Model, Real, RunResult, CheckAsync>[]);
    [Symbol.iterator](): Iterator<CommandWrapper<Model, Real, RunResult, CheckAsync>>;
    [cloneMethod](): CommandsIterable<Model, Real, RunResult, CheckAsync>;
    toString(): string;
}
