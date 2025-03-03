"use strict";
exports.__esModule = true;
exports.Light = void 0;
var Light = /** @class */ (function () {
    function Light() {
    }
    Light.prototype.turnOn = function () {
        console.log("Light turned On");
    };
    Light.prototype.turnOff = function () {
        console.log('Light turned off');
    };
    return Light;
}());
exports.Light = Light;
