import { RandomGenerator } from 'pure-rand';
import { Parameters } from './Parameters';
/**
 * @hidden
 *
 * Configuration extracted from incoming Parameters
 *
 * It handles and set the default settings that will be used by runners.
 */
export declare class QualifiedParameters<T> {
    seed: number;
    randomType: (seed: number) => RandomGenerator;
    numRuns: number;
    maxSkipsPerRun: number;
    timeout: number | null;
    path: string;
    logger: (v: string) => void;
    unbiased: boolean;
    verbose: boolean;
    examples: T[];
    private static readSeed;
    private static readRandomType;
    private static readNumRuns;
    private static readMaxSkipsPerRun;
    private static readTimeout;
    private static readPath;
    private static readUnbiased;
    private static readVerbose;
    private static readLogger;
    private static readExamples;
    /**
     * Extract a runner configuration from Parameters
     * @param p Incoming Parameters
     */
    static read<T>(p?: Parameters<T>): QualifiedParameters<T>;
    /**
     * Extract a runner configuration from Parameters
     * or build one based on a maximal number of runs
     *
     * @param p Incoming Parameters or maximal number of runs
     */
    static readOrNumRuns<T>(p?: Parameters<T> | number): QualifiedParameters<T>;
}
