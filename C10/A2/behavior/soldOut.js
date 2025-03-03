"use strict";
exports.__esModule = true;
exports.SoldOutState = void 0;
var SoldOutState = /** @class */ (function () {
    function SoldOutState(gm) {
        this.gumballMachine = gm;
    }
    SoldOutState.prototype.ejectCoin = function () {
        console.log("No coin inserted!!!");
    };
    SoldOutState.prototype.insertCoin = function () {
        console.log("We are out of order. Sorry for inconvinience");
    };
    SoldOutState.prototype.turnCrank = function () {
        console.log("We are out of order. Sorry for inconvinience");
    };
    SoldOutState.prototype._dispense = function () {
        console.log("We are out of order. Sorry for inconvinience");
    };
    return SoldOutState;
}());
exports.SoldOutState = SoldOutState;
