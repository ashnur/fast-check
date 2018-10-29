"use strict";
exports.__esModule = true;
/** @hidden */
var CommandsIterable = /** @class */ (function () {
    function CommandsIterable(commands) {
        this.commands = commands;
        this.lastErrorDetectedStr = '';
    }
    CommandsIterable.prototype[Symbol.iterator] = function () {
        for (var idx = 0; idx !== this.commands.length; ++idx) {
            this.commands[idx].hasRan = false;
        }
        return this.commands[Symbol.iterator]();
    };
    CommandsIterable.prototype.errorDetected = function () {
        this.lastErrorDetectedStr = this.commands
            .filter(function (c) { return c.hasRan; })
            .map(function (c) { return c.toString(); })
            .join(',');
    };
    CommandsIterable.prototype.toString = function () {
        return this.lastErrorDetectedStr;
    };
    return CommandsIterable;
}());
exports.CommandsIterable = CommandsIterable;
