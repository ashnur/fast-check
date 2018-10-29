"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
exports.__esModule = true;
var Stream_1 = require("../../../stream/Stream");
var Arbitrary_1 = require("../../arbitrary/definition/Arbitrary");
var Shrinkable_1 = require("../../arbitrary/definition/Shrinkable");
var IntegerArbitrary_1 = require("../../arbitrary/IntegerArbitrary");
var OneOfArbitrary_1 = require("../../arbitrary/OneOfArbitrary");
var CommandsIterable_1 = require("./CommandsIterable");
var CommandWrapper_1 = require("./CommandWrapper");
/** @hidden */
var CommandsArbitrary = /** @class */ (function (_super) {
    __extends(CommandsArbitrary, _super);
    function CommandsArbitrary(commandArbs, maxCommands) {
        var _this = _super.call(this) || this;
        _this.oneCommandArb = OneOfArbitrary_1.oneof.apply(void 0, __spread(commandArbs)).map(function (c) { return new CommandWrapper_1.CommandWrapper(c); });
        _this.lengthArb = IntegerArbitrary_1.nat(maxCommands);
        return _this;
    }
    CommandsArbitrary.cloneCommands = function (cmds) {
        return cmds.map(function (c) { return new Shrinkable_1.Shrinkable(c.value.clone(), c.shrink); });
    };
    CommandsArbitrary.prototype.wrapper = function (items, shrunkOnce) {
        var _this = this;
        return new Shrinkable_1.Shrinkable(new CommandsIterable_1.CommandsIterable(items.map(function (s) { return s.value; })), function () {
            return _this.shrinkImpl(items, shrunkOnce).map(function (v) { return _this.wrapper(CommandsArbitrary.cloneCommands(v), true); });
        });
    };
    CommandsArbitrary.prototype.generate = function (mrng) {
        var size = this.lengthArb.generate(mrng);
        var items = Array(size.value);
        for (var idx = 0; idx !== size.value; ++idx) {
            items[idx] = this.oneCommandArb.generate(mrng);
        }
        return this.wrapper(items, false);
    };
    CommandsArbitrary.prototype.shrinkImpl = function (itemsRaw, shrunkOnce) {
        var items = itemsRaw.filter(function (c) { return c.value.hasRan; }); // filter out commands that have not been executed
        if (items.length === 0) {
            return Stream_1.Stream.nil();
        }
        // The shrinker of commands have to keep the last item
        // because it is the one causing the failure
        var emptyOrNil = shrunkOnce
            ? Stream_1.Stream.nil()
            : new Stream_1.Stream([[]][Symbol.iterator]());
        var size = this.lengthArb.shrinkableFor(items.length - 1, shrunkOnce);
        return emptyOrNil
            .join(size.shrink().map(function (l) { return items.slice(0, l.value).concat(items[items.length - 1]); })) // try: remove items except the last one
            .join(this.shrinkImpl(items.slice(0, items.length - 1), false).map(function (vs) { return vs.concat(items[items.length - 1]); })) // try: keep last, shrink remaining (rec)
            .join(items[0].shrink().map(function (v) { return [v].concat(items.slice(1)); })); // try: shrink first, keep others
    };
    return CommandsArbitrary;
}(Arbitrary_1.Arbitrary));
/**
 * For arrays of {@link ICommand} to be executed by {@link modelRun} or {@link asyncModelRun}
 *
 * This implementation comes with a shrinker adapted for commands.
 * It should shrink more efficiently than {@link array} for {@link ICommand} arrays.
 *
 * @param commandArbs Arbitraries responsible to build commands
 * @param maxCommands Maximal number of commands to build
 */
exports.commands = function (commandArbs, maxCommands) {
    return new CommandsArbitrary(commandArbs, maxCommands != null ? maxCommands : 10);
};
