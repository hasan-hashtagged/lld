"use strict";
exports.__esModule = true;
exports.flyWithMotor = exports.noFly = exports.flyer = void 0;
var flyer = /** @class */ (function () {
    function flyer() {
    }
    flyer.prototype.fly = function () {
        console.log("Fly high, fly high, fly high!!!");
    };
    return flyer;
}());
exports.flyer = flyer;
var noFly = /** @class */ (function () {
    function noFly() {
    }
    noFly.prototype.fly = function () {
        console.log("I can't fly :(");
    };
    return noFly;
}());
exports.noFly = noFly;
var flyWithMotor = /** @class */ (function () {
    function flyWithMotor() {
    }
    flyWithMotor.prototype.fly = function () {
        console.log('I have a motor attached that helps me fly!!');
    };
    return flyWithMotor;
}());
exports.flyWithMotor = flyWithMotor;
