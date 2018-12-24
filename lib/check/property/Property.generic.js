"use strict";
exports.__esModule = true;
var PreconditionFailure_1 = require("../precondition/PreconditionFailure");
var IProperty_1 = require("./IProperty");
/**
 * Property, see {@link IProperty}
 *
 * Prefer using {@link property} instead
 */
var Property = /** @class */ (function () {
    function Property(arb, predicate) {
        this.arb = arb;
        this.predicate = predicate;
        this.beforeEachHook = Property.dummyHook;
        this.afterEachHook = Property.dummyHook;
        this.isAsync = function () { return false; };
    }
    Property.prototype.generate = function (mrng, runId) {
        return runId != null ? this.arb.withBias(IProperty_1.runIdToFrequency(runId)).generate(mrng) : this.arb.generate(mrng);
    };
    Property.prototype.run = function (v) {
        this.beforeEachHook();
        try {
            var output = this.predicate(v);
            return output == null || output === true ? null : 'Property failed by returning false';
        }
        catch (err) {
            // precondition failure considered as success for the first version
            if (PreconditionFailure_1.PreconditionFailure.isFailure(err))
                return err;
            // exception as string in case of real failure
            if (err instanceof Error && err.stack)
                return err + "\n\nStack trace: " + err.stack;
            return "" + err;
        }
        finally {
            this.afterEachHook();
        }
    };
    /**
     * Define a function that should be called before all calls to the predicate
     * @param hookFunction Function to be called
     */
    Property.prototype.beforeEach = function (hookFunction) {
        this.beforeEachHook = hookFunction;
        return this;
    };
    /**
     * Define a function that should be called after all calls to the predicate
     * @param hookFunction Function to be called
     */
    Property.prototype.afterEach = function (hookFunction) {
        this.afterEachHook = hookFunction;
        return this;
    };
    Property.dummyHook = function () {
        return;
    };
    return Property;
}());
exports.Property = Property;
//# sourceMappingURL=Property.generic.js.map