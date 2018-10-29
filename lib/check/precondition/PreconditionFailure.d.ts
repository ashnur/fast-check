/** @hidden */
export declare class PreconditionFailure extends Error {
    private static readonly SharedFootPrint;
    private readonly footprint;
    constructor();
    static isFailure(err: any): err is PreconditionFailure;
}
