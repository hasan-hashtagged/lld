"use strict";
exports.__esModule = true;
exports.SoldState = void 0;
var SoldState = /** @class */ (function () {
    function SoldState(gm) {
        this.gumballMachine = gm;
    }
    SoldState.prototype.ejectCoin = function () {
        console.log("Coin already processed!!!");
    };
    SoldState.prototype.insertCoin = function () {
        console.log("Please let the previous transaction to complete");
    };
    SoldState.prototype.turnCrank = function () {
        console.log("We are already working, Kindly wait!!!");
    };
    SoldState.prototype._dispense = function () {
        this.gumballMachine.releaseBall();
        if (this.gumballMachine.getCount() >= 0) {
            this.gumballMachine.setState(this.gumballMachine.getNoCoinState());
            console.log("Please collect the gumball!!");
        }
        else if (this.gumballMachine.getCount() < 0) {
            this.gumballMachine.setState(this.gumballMachine.getHasCoinState());
            this.gumballMachine.state.ejectCoin();
            this.gumballMachine.setState(this.gumballMachine.getSoldOutState());
            this.gumballMachine.state._dispense();
        }
    };
    return SoldState;
}());
exports.SoldState = SoldState;
