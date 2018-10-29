import { RunDetails } from './RunDetails';
/**
 * @hidden
 *
 * Report the status of a run
 *
 * It receives notification from the runner in case of failures
 */
export declare class RunExecution<Ts> {
    readonly storeFailures: boolean;
    pathToFailure?: string;
    value?: Ts;
    failure: string;
    allFailures: Ts[];
    numSkips: number;
    numSuccesses: number;
    constructor(storeFailures: boolean);
    fail(value: Ts, id: number, message: string): void;
    skip(): void;
    success(): void;
    private isSuccess;
    private firstFailure;
    private numShrinks;
    private static mergePaths;
    toRunDetails(seed: number, basePath: string, numRuns: number, maxSkips: number): RunDetails<Ts>;
}
