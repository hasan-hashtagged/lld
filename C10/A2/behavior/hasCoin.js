"use strict";
exports.__esModule = true;
exports.HasCoinState = void 0;
var HasCoinState = /** @class */ (function () {
    function HasCoinState(gm) {
        this.gumballMachine = gm;
    }
    HasCoinState.prototype.ejectCoin = function () {
        this.gumballMachine.setState(this.gumballMachine.getNoCoinState());
        console.log("Please collect your coin!!!");
    };
    HasCoinState.prototype.insertCoin = function () {
        console.log("There is already a coin inserted.");
    };
    HasCoinState.prototype.turnCrank = function () {
        var randomWinner = Math.random() * 10;
        console.log("Please wait while we process!!!");
        if (randomWinner >= 1 &&
            randomWinner < 2 &&
            this.gumballMachine.getCount() > 1) {
            this.gumballMachine.setState(this.gumballMachine.getWinnerState());
        }
        else {
            this.gumballMachine.setState(this.gumballMachine.getSoldState());
        }
    };
    HasCoinState.prototype._dispense = function () {
        console.log("Please turn the crank!!!");
    };
    return HasCoinState;
}());
exports.HasCoinState = HasCoinState;
