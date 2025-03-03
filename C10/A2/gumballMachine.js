"use strict";
exports.__esModule = true;
exports.GumballMachine = void 0;
var noCoin_1 = require("./behavior/noCoin");
var hasCoin_1 = require("./behavior/hasCoin");
var soldOut_1 = require("./behavior/soldOut");
var sold_1 = require("./behavior/sold");
var winner_1 = require("./behavior/winner");
var GumballMachine = /** @class */ (function () {
    function GumballMachine(cnt) {
        this.count = 0;
        this.count = cnt ? cnt : 0;
        this.noCoin = new noCoin_1.NoCoinState(this);
        this.hasCoin = new hasCoin_1.HasCoinState(this);
        this.sold = new sold_1.SoldState(this);
        this.soldOut = new soldOut_1.SoldOutState(this);
        this.winner = new winner_1.WinnerState(this);
        if (this.count > 0) {
            this.state = this.noCoin;
        }
        else {
            this.state = this.soldOut;
        }
    }
    GumballMachine.prototype.ejectCoin = function () {
        this.state.ejectCoin();
    };
    GumballMachine.prototype.insertCoin = function () {
        this.state.insertCoin();
    };
    GumballMachine.prototype.turnCrank = function () {
        this.state.turnCrank();
        this.state._dispense();
    };
    GumballMachine.prototype.releaseBall = function () {
        this.count -= 1;
    };
    // getters
    GumballMachine.prototype.getCount = function () {
        return this.count;
    };
    GumballMachine.prototype.getNoCoinState = function () {
        return this.noCoin;
    };
    GumballMachine.prototype.getHasCoinState = function () {
        return this.hasCoin;
    };
    GumballMachine.prototype.getSoldState = function () {
        return this.sold;
    };
    GumballMachine.prototype.getSoldOutState = function () {
        return this.soldOut;
    };
    GumballMachine.prototype.getWinnerState = function () {
        return this.winner;
    };
    // setters
    GumballMachine.prototype.setState = function (st) {
        this.state = st;
    };
    return GumballMachine;
}());
exports.GumballMachine = GumballMachine;
