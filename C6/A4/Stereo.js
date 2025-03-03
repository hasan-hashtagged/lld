"use strict";
exports.__esModule = true;
exports.Stereo = void 0;
var Stereo = /** @class */ (function () {
    function Stereo() {
    }
    Stereo.prototype.turnOn = function () {
        console.log("Stereo powered on");
    };
    Stereo.prototype.insertCD = function () {
        console.log("CD inserted");
    };
    Stereo.prototype.setVolume = function (num) {
        console.log("Volume set to: ", num);
    };
    Stereo.prototype.turnOff = function () {
        console.log("Stereo turned off");
    };
    return Stereo;
}());
exports.Stereo = Stereo;
