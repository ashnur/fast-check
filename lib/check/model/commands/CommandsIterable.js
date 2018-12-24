"use strict";
exports.__esModule = true;
var symbols_1 = require("../../symbols");
/** @hidden */
var CommandsIterable = /** @class */ (function () {
    function CommandsIterable(commands) {
        this.commands = commands;
    }
    CommandsIterable.prototype[Symbol.iterator] = function () {
        return this.commands[Symbol.iterator]();
    };
    CommandsIterable.prototype[symbols_1.cloneMethod] = function () {
        return new CommandsIterable(this.commands.map(function (c) { return c.clone(); }));
    };
    CommandsIterable.prototype.toString = function () {
        return this.commands
            .filter(function (c) { return c.hasRan; })
            .map(function (c) { return c.toString(); })
            .join(',');
    };
    return CommandsIterable;
}());
exports.CommandsIterable = CommandsIterable;
//# sourceMappingURL=CommandsIterable.js.map