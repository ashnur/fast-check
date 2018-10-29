import { Arbitrary } from '../../arbitrary/definition/Arbitrary';
import { ICommand } from '../command/ICommand';
/**
 * For arrays of {@link ICommand} to be executed by {@link modelRun} or {@link asyncModelRun}
 *
 * This implementation comes with a shrinker adapted for commands.
 * It should shrink more efficiently than {@link array} for {@link ICommand} arrays.
 *
 * @param commandArbs Arbitraries responsible to build commands
 * @param maxCommands Maximal number of commands to build
 */
export declare const commands: <Model extends object, Real, RunResult>(commandArbs: Arbitrary<ICommand<Model, Real, RunResult>>[], maxCommands?: number | undefined) => Arbitrary<Iterable<ICommand<Model, Real, RunResult>>>;
