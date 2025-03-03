"use strict";
exports.__esModule = true;
exports.NoCommand = exports.MacroCommand = exports.GarageDoorCloseCommand = exports.GarageDoorOpenCommand = exports.FanOffCommand = exports.FanOnCommand = exports.StereoOffCommand = exports.StereoOnCommand = exports.LightOffCommand = exports.LightOnCommand = void 0;
var LightOnCommand = /** @class */ (function () {
    function LightOnCommand(lght) {
        this.light = lght;
    }
    LightOnCommand.prototype.execute = function () {
        this.light.turnOn();
    };
    LightOnCommand.prototype.undo = function () {
        this.light.turnOff();
    };
    return LightOnCommand;
}());
exports.LightOnCommand = LightOnCommand;
var LightOffCommand = /** @class */ (function () {
    function LightOffCommand(lght) {
        this.light = lght;
    }
    LightOffCommand.prototype.execute = function () {
        this.light.turnOff();
    };
    LightOffCommand.prototype.undo = function () {
        this.light.turnOn();
    };
    return LightOffCommand;
}());
exports.LightOffCommand = LightOffCommand;
var StereoOnCommand = /** @class */ (function () {
    function StereoOnCommand(stro) {
        this.stereo = stro;
    }
    StereoOnCommand.prototype.execute = function () {
        this.stereo.turnOn();
        this.stereo.insertCD();
        this.stereo.setVolume(10);
    };
    StereoOnCommand.prototype.undo = function () {
        this.stereo.turnOff();
    };
    return StereoOnCommand;
}());
exports.StereoOnCommand = StereoOnCommand;
var StereoOffCommand = /** @class */ (function () {
    function StereoOffCommand(stro) {
        this.stereo = stro;
    }
    StereoOffCommand.prototype.execute = function () {
        this.stereo.turnOff();
    };
    StereoOffCommand.prototype.undo = function () {
        this.stereo.insertCD();
        this.stereo.setVolume(10);
        this.stereo.turnOn();
    };
    return StereoOffCommand;
}());
exports.StereoOffCommand = StereoOffCommand;
var FanOnCommand = /** @class */ (function () {
    function FanOnCommand(fn) {
        this.fan = fn;
    }
    FanOnCommand.prototype.execute = function () {
        this.fan.turnOn();
    };
    FanOnCommand.prototype.undo = function () {
        this.fan.turnOff();
    };
    return FanOnCommand;
}());
exports.FanOnCommand = FanOnCommand;
var FanOffCommand = /** @class */ (function () {
    function FanOffCommand(fn) {
        this.fan = fn;
    }
    FanOffCommand.prototype.execute = function () {
        this.fan.turnOff();
    };
    FanOffCommand.prototype.undo = function () {
        this.fan.turnOn();
    };
    return FanOffCommand;
}());
exports.FanOffCommand = FanOffCommand;
var GarageDoorOpenCommand = /** @class */ (function () {
    function GarageDoorOpenCommand(gd) {
        this.garageDoor = gd;
    }
    GarageDoorOpenCommand.prototype.execute = function () {
        this.garageDoor.up();
    };
    GarageDoorOpenCommand.prototype.undo = function () {
        this.garageDoor.down();
    };
    return GarageDoorOpenCommand;
}());
exports.GarageDoorOpenCommand = GarageDoorOpenCommand;
var GarageDoorCloseCommand = /** @class */ (function () {
    function GarageDoorCloseCommand(gd) {
        this.garageDoor = gd;
    }
    GarageDoorCloseCommand.prototype.execute = function () {
        this.garageDoor.down();
    };
    GarageDoorCloseCommand.prototype.undo = function () {
        this.garageDoor.up();
    };
    return GarageDoorCloseCommand;
}());
exports.GarageDoorCloseCommand = GarageDoorCloseCommand;
var MacroCommand = /** @class */ (function () {
    function MacroCommand(cmds) {
        this.commands = cmds;
    }
    MacroCommand.prototype.execute = function () {
        for (var i = 0; i < this.commands.length; i++) {
            this.commands[i].execute();
        }
    };
    MacroCommand.prototype.undo = function () {
        for (var i = 0; i < this.commands.length; i++) {
            this.commands[i].undo();
        }
    };
    return MacroCommand;
}());
exports.MacroCommand = MacroCommand;
// NULL OBJECT
var NoCommand = /** @class */ (function () {
    function NoCommand() {
    }
    NoCommand.prototype.execute = function () {
    };
    NoCommand.prototype.undo = function () {
    };
    return NoCommand;
}());
exports.NoCommand = NoCommand;
