"use strict";
exports.__esModule = true;
var gumballMachine_1 = require("./gumballMachine");
function run() {
    var PheonixMachine = new gumballMachine_1.GumballMachine(2);
    PheonixMachine.insertCoin();
    PheonixMachine.ejectCoin();
    PheonixMachine.turnCrank();
    PheonixMachine.insertCoin();
    PheonixMachine.turnCrank();
    PheonixMachine.insertCoin();
    PheonixMachine.turnCrank();
    PheonixMachine.insertCoin();
    PheonixMachine.turnCrank();
}
run();
