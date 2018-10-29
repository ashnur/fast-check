import { AsyncCommand } from './command/AsyncCommand';
import { Command } from './command/Command';
import { CommandsIterable } from './commands/CommandsIterable';
declare type Setup<Model, Real> = () => {
    model: Model;
    real: Real;
};
/**
 * Run synchronous commands over a `Model` and the `Real` system
 *
 * Throw in case of inconsistency
 *
 * @param s Initial state provider
 * @param cmds Synchronous commands to be executed
 */
export declare const modelRun: <Model extends object, Real>(s: Setup<Model, Real>, cmds: Iterable<Command<Model, Real>> | CommandsIterable<Model, Real, void>) => void;
/**
 * Run asynchronous commands over a `Model` and the `Real` system
 *
 * Throw in case of inconsistency
 *
 * @param s Initial state provider
 * @param cmds Asynchronous commands to be executed
 */
export declare const asyncModelRun: <Model extends object, Real>(s: Setup<Model, Real>, cmds: Iterable<AsyncCommand<Model, Real>> | CommandsIterable<Model, Real, Promise<void>>) => Promise<void>;
export {};
