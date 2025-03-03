"use strict";
exports.__esModule = true;
exports.Duck = void 0;
var Duck = /** @class */ (function () {
    function Duck() {
    }
    ;
    Duck.prototype.performQuack = function () {
        this.quackbhvr.quack();
    };
    Duck.prototype.performFly = function () {
        this.flybhvr.fly();
    };
    Duck.prototype.swim = function () {
        console.log('I can swim');
    };
    Duck.prototype.display = function () {
        console.log('I look like bird');
    };
    Duck.prototype.setFlybhvr = function (fb) {
        this.flybhvr = fb;
    };
    Duck.prototype.setQuackbhvr = function (qb) {
        this.quackbhvr = qb;
    };
    return Duck;
}());
exports.Duck = Duck;
