"use strict";
exports.__esModule = true;
exports.GarageDoor = void 0;
var GarageDoor = /** @class */ (function () {
    function GarageDoor() {
    }
    GarageDoor.prototype.up = function () {
        console.log("Door is Open");
    };
    GarageDoor.prototype.down = function () {
        console.log("Door is closed");
    };
    return GarageDoor;
}());
exports.GarageDoor = GarageDoor;
