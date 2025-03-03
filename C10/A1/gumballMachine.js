"use strict";
exports.__esModule = true;
exports.GumballMachine = void 0;
var GumballMachine = /** @class */ (function () {
    function GumballMachine(cnt) {
        this.state = GumballMachine.SOLD_OUT;
        this.count = 0;
        this.count = cnt;
        if (this.count > 0) {
            this.state = GumballMachine.NO_COIN;
        }
    }
    GumballMachine.prototype.ejectCoin = function () {
        switch (this.state) {
            case GumballMachine.NO_COIN: {
                console.log("You haven't inserted coin...");
                break;
            }
            case GumballMachine.HAS_COIN: {
                this.state = GumballMachine.NO_COIN;
                console.log("Please collect your coin");
                break;
            }
            case GumballMachine.SOLD: {
                console.log("You have turned the crank... Please collect the gumball");
                break;
            }
            case GumballMachine.SOLD_OUT: {
                console.log("No coins to eject");
                break;
            }
        }
    };
    GumballMachine.prototype.insertCoin = function () {
        switch (this.state) {
            case GumballMachine.NO_COIN: {
                this.state = GumballMachine.HAS_COIN;
                console.log("Coin Inserted..");
                break;
            }
            case GumballMachine.HAS_COIN: {
                console.log("Coin already there..");
                break;
            }
            case GumballMachine.SOLD: {
                console.log("We are dispensing the gumball, Please wait!!!");
                break;
            }
            case GumballMachine.SOLD_OUT: {
                console.log("Out of Gumballs.. Sorry for inconvinience");
                break;
            }
        }
    };
    GumballMachine.prototype.turnCrank = function () {
        switch (this.state) {
            case GumballMachine.NO_COIN: {
                console.log("Please insert a coin and turn");
                break;
            }
            case GumballMachine.HAS_COIN: {
                console.log("Please wait while we process...");
                this.state = GumballMachine.SOLD;
                this._dispense();
                break;
            }
            case GumballMachine.SOLD: {
                console.log('Please wait while we process the previous transaction...');
                break;
            }
            case GumballMachine.SOLD_OUT: {
                console.log("No gumball available!!");
                break;
            }
        }
    };
    GumballMachine.prototype._dispense = function () {
        switch (this.state) {
            case GumballMachine.SOLD: {
                if (this.count > 0) {
                    this.count -= 1;
                    this.state = GumballMachine.NO_COIN;
                    console.log('Collect the Gumball from the slot');
                }
                if (this.count === 0) {
                    this.state = GumballMachine.SOLD_OUT;
                }
                break;
            }
            case GumballMachine.NO_COIN: {
                console.log("Please insert the coin first");
                break;
            }
            case GumballMachine.HAS_COIN: {
                console.log("Please turn the crank!!");
                break;
            }
            case GumballMachine.SOLD_OUT: {
                console.log("No Gumball dispensed");
                break;
            }
        }
    };
    GumballMachine.NO_COIN = 0;
    GumballMachine.HAS_COIN = 1;
    GumballMachine.SOLD = 2;
    GumballMachine.SOLD_OUT = 3;
    return GumballMachine;
}());
exports.GumballMachine = GumballMachine;
