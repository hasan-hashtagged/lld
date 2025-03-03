"use strict";
// Facade Pattern
exports.__esModule = true;
exports.RoomController = void 0;
var RoomController = /** @class */ (function () {
    function RoomController(ac, light) {
        this.voltas = ac;
        this.syska = light;
    }
    RoomController.prototype.setupRoom = function () {
        this.voltas.turnOn();
        this.syska.turnOn();
    };
    RoomController.prototype.getOut = function () {
        this.syska.turnOff();
        this.voltas.turnOff();
    };
    return RoomController;
}());
exports.RoomController = RoomController;
