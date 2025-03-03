"use strict";
exports.__esModule = true;
exports.NoCoinState = void 0;
var NoCoinState = /** @class */ (function () {
    function NoCoinState(gm) {
        this.gumballMachine = gm;
    }
    NoCoinState.prototype.ejectCoin = function () {
        console.log("No coin inserted!!!");
    };
    NoCoinState.prototype.insertCoin = function () {
        this.gumballMachine.setState(this.gumballMachine.getHasCoinState());
        console.log("Coin Inserted :)");
    };
    NoCoinState.prototype.turnCrank = function () {
        console.log("Please insert the coin and turn!!!");
    };
    NoCoinState.prototype._dispense = function () {
        console.log("Pay and get the gumball!!!!");
    };
    return NoCoinState;
}());
exports.NoCoinState = NoCoinState;
