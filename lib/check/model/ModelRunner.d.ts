import { AsyncCommand } from './command/AsyncCommand';
import { Command } from './command/Command';
import { CommandsIterable } from './commands/CommandsIterable';
declare type Setup<Model, Real> = () => {
    model: Model;
    real: Real;
};
declare type AsyncSetup<Model, Real> = () => Promise<{
    model: Model;
    real: Real;
}>;
/**
 * Run synchronous commands over a `Model` and the `Real` system
 *
 * Throw in case of inconsistency
 *
 * @param s Initial state provider
 * @param cmds Synchronous commands to be executed
 */
export declare const modelRun: <Model extends object, Real>(s: Setup<Model, Real>, cmds: Iterable<Command<Model, Real>> | CommandsIterable<Model, Real, void, false>) => void;
/**
 * Run asynchronous commands over a `Model` and the `Real` system
 *
 * Throw in case of inconsistency
 *
 * @param s Initial state provider
 * @param cmds Asynchronous commands to be executed
 */
export declare const asyncModelRun: <Model extends object, Real, CheckAsync extends boolean>(s: Setup<Model, Real> | AsyncSetup<Model, Real>, cmds: Iterable<AsyncCommand<Model, Real, CheckAsync>> | CommandsIterable<Model, Real, Promise<void>, CheckAsync>) => Promise<void>;
export {};
