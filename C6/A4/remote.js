"use strict";
exports.__esModule = true;
exports.Remote = void 0;
var command_1 = require("./command");
var Remote = /** @class */ (function () {
    function Remote() {
        this.onCommand = new Array(7);
        this.offCommand = new Array(7);
        this.undoCommand = new command_1.NoCommand();
    }
    Remote.prototype.setCommand = function (slot, on, off) {
        this.onCommand[slot] = on;
        this.offCommand[slot] = off;
    };
    Remote.prototype.onButton = function (slot) {
        this.onCommand[slot].execute();
        this.undoCommand = this.onCommand[slot];
    };
    Remote.prototype.offButton = function (slot) {
        this.offCommand[slot].execute();
        this.undoCommand = this.offCommand[slot];
    };
    Remote.prototype.undoButton = function () {
        this.undoCommand.undo();
    };
    return Remote;
}());
exports.Remote = Remote;
