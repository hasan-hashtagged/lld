"use strict";
exports.__esModule = true;
exports.GarageDoorOpenCommand = exports.LightOffCommand = exports.LightOnCommand = void 0;
var LightOnCommand = /** @class */ (function () {
    function LightOnCommand(lght) {
        this.light = lght;
    }
    LightOnCommand.prototype.execute = function () {
        this.light.on();
    };
    return LightOnCommand;
}());
exports.LightOnCommand = LightOnCommand;
var LightOffCommand = /** @class */ (function () {
    function LightOffCommand(lght) {
        this.light = lght;
    }
    LightOffCommand.prototype.execute = function () {
        this.light.off();
    };
    return LightOffCommand;
}());
exports.LightOffCommand = LightOffCommand;
var GarageDoorOpenCommand = /** @class */ (function () {
    function GarageDoorOpenCommand(gd) {
        this.garageDoor = gd;
    }
    GarageDoorOpenCommand.prototype.execute = function () {
        this.garageDoor.up();
    };
    return GarageDoorOpenCommand;
}());
exports.GarageDoorOpenCommand = GarageDoorOpenCommand;
