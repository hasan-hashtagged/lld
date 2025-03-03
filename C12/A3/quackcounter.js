"use strict";
exports.__esModule = true;
exports.QuackCounter = void 0;
var QuackCounter = /** @class */ (function () {
    function QuackCounter(quacker) {
        this.duck = quacker;
    }
    QuackCounter.prototype.quack = function () {
        this.duck.quack();
        QuackCounter.quackCount++;
    };
    QuackCounter.prototype.getCount = function () {
        return QuackCounter.quackCount;
    };
    QuackCounter.quackCount = 0;
    return QuackCounter;
}());
exports.QuackCounter = QuackCounter;
