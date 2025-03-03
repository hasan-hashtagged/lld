"use strict";
exports.__esModule = true;
exports.Beverage = void 0;
var Beverage = /** @class */ (function () {
    function Beverage() {
        this.description = "Coffee Bar";
    }
    Beverage.prototype.cost = function () {
        return 0;
    };
    Beverage.prototype.getDescription = function () {
        return this.description;
    };
    return Beverage;
}());
exports.Beverage = Beverage;
