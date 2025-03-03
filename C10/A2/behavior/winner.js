"use strict";
exports.__esModule = true;
exports.WinnerState = void 0;
var WinnerState = /** @class */ (function () {
    function WinnerState(gball) {
        this.gumballMachine = gball;
    }
    WinnerState.prototype.ejectCoin = function () {
        console.log("No coin inserted!!");
    };
    WinnerState.prototype.insertCoin = function () {
        console.log("We are serving. Please Wait...");
    };
    WinnerState.prototype.turnCrank = function () {
        console.log("We are already working, Kindly wait!!!");
    };
    WinnerState.prototype._dispense = function () {
        this.gumballMachine.releaseBall();
        if (this.gumballMachine.getCount() == 0) {
            this.gumballMachine.setState(this.gumballMachine.getSoldOutState());
        }
        else {
            this.gumballMachine.releaseBall();
            console.log("Congrats!, You are the winner.");
            if (this.gumballMachine.getCount() > 0) {
                this.gumballMachine.setState(this.gumballMachine.getNoCoinState());
            }
            else {
                this.gumballMachine.setState(this.gumballMachine.getSoldOutState());
            }
        }
    };
    return WinnerState;
}());
exports.WinnerState = WinnerState;
