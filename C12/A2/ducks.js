"use strict";
exports.__esModule = true;
exports.RubberDuck = exports.DuckCall = exports.MallardDuck = void 0;
var MallardDuck = /** @class */ (function () {
    function MallardDuck() {
    }
    MallardDuck.prototype.quack = function () {
        console.log("Quack!!!");
    };
    return MallardDuck;
}());
exports.MallardDuck = MallardDuck;
var DuckCall = /** @class */ (function () {
    function DuckCall() {
    }
    DuckCall.prototype.quack = function () {
        console.log("Kwak Kwak!!!");
    };
    return DuckCall;
}());
exports.DuckCall = DuckCall;
var RubberDuck = /** @class */ (function () {
    function RubberDuck() {
    }
    RubberDuck.prototype.quack = function () {
        console.log("Squeak");
    };
    return RubberDuck;
}());
exports.RubberDuck = RubberDuck;
