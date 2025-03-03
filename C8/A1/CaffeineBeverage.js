"use strict";
exports.__esModule = true;
exports.CaffeineBeverage = void 0;
var CaffeineBeverage = /** @class */ (function () {
    function CaffeineBeverage() {
    }
    CaffeineBeverage.prototype.prepareReciepe = function () {
        this.boilWater();
        this.brew();
        this.addCondiments();
        this.pourInCup();
    };
    CaffeineBeverage.prototype.boilWater = function () {
        console.log("Boiling Water!!!");
    };
    CaffeineBeverage.prototype.pourInCup = function () {
        console.log("Pour it in cup");
    };
    return CaffeineBeverage;
}());
exports.CaffeineBeverage = CaffeineBeverage;
