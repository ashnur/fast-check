import { VerbosityLevel } from '../configuration/VerbosityLevel';
import { ExecutionTree } from './ExecutionTree';
import { RunDetails } from './RunDetails';
/**
 * @hidden
 *
 * Report the status of a run
 *
 * It receives notification from the runner in case of failures
 */
export declare class RunExecution<Ts> {
    readonly verbosity: VerbosityLevel;
    readonly rootExecutionTrees: ExecutionTree<Ts>[];
    currentLevelExecutionTrees: ExecutionTree<Ts>[];
    pathToFailure?: string;
    value?: Ts;
    failure: string;
    numSkips: number;
    numSuccesses: number;
    constructor(verbosity: VerbosityLevel);
    private appendExecutionTree;
    fail(value: Ts, id: number, message: string): void;
    skip(value: Ts): void;
    success(value: Ts): void;
    private isSuccess;
    private firstFailure;
    private numShrinks;
    private extractFailures;
    private static mergePaths;
    toRunDetails(seed: number, basePath: string, numRuns: number, maxSkips: number): RunDetails<Ts>;
}
