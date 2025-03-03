"use strict";
exports.__esModule = true;
exports.mute = exports.mimicQuaker = exports.squeaker = exports.quacker = void 0;
var quacker = /** @class */ (function () {
    function quacker() {
    }
    quacker.prototype.quack = function () {
        console.log("Quack!! Quack!! Quack!!");
    };
    return quacker;
}());
exports.quacker = quacker;
var squeaker = /** @class */ (function () {
    function squeaker() {
    }
    squeaker.prototype.quack = function () {
        console.log("Squeak!! Squeak!! Squeak!!");
    };
    return squeaker;
}());
exports.squeaker = squeaker;
var mimicQuaker = /** @class */ (function () {
    function mimicQuaker() {
    }
    mimicQuaker.prototype.quack = function () {
        console.log("I mimic Quack, Quack!! to call ducks");
    };
    return mimicQuaker;
}());
exports.mimicQuaker = mimicQuaker;
var mute = /** @class */ (function () {
    function mute() {
    }
    mute.prototype.quack = function () {
        console.log("No sound :(");
    };
    return mute;
}());
exports.mute = mute;
