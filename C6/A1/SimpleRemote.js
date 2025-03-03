"use strict";
exports.__esModule = true;
exports.SimpleRemote = void 0;
var SimpleRemote = /** @class */ (function () {
    function SimpleRemote() {
    }
    SimpleRemote.prototype.setCommand = function (command) {
        this.slot = command;
    };
    SimpleRemote.prototype.buttonPressed = function () {
        this.slot.execute();
    };
    return SimpleRemote;
}());
exports.SimpleRemote = SimpleRemote;
