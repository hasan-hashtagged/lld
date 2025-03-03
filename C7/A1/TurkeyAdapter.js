"use strict";
exports.__esModule = true;
exports.TurkeyAdapter = void 0;
var TurkeyAdapter = /** @class */ (function () {
    function TurkeyAdapter(t) {
        this.turkey = t;
    }
    TurkeyAdapter.prototype.quack = function () {
        this.turkey.gobble();
    };
    TurkeyAdapter.prototype.fly = function () {
        for (var i = 0; i < 3; i++) {
            this.turkey.fly();
        }
    };
    return TurkeyAdapter;
}());
exports.TurkeyAdapter = TurkeyAdapter;
