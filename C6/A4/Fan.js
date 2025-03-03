"use strict";
exports.__esModule = true;
exports.Fan = void 0;
var Fan = /** @class */ (function () {
    function Fan() {
    }
    Fan.prototype.turnOn = function () {
        console.log("Fan turned ON");
    };
    Fan.prototype.turnOff = function () {
        console.log("Fan turned off");
    };
    return Fan;
}());
exports.Fan = Fan;
