"use strict";
exports.__esModule = true;
var gumballMachine_1 = require("./gumballMachine");
function run() {
    var PhoenixMachine = new gumballMachine_1.GumballMachine(10);
    PhoenixMachine.insertCoin();
    PhoenixMachine.ejectCoin();
    PhoenixMachine.turnCrank();
    for (var i = 1; i <= 10; i++) {
        console.log("Iteration: ", i);
        PhoenixMachine.insertCoin();
        PhoenixMachine.turnCrank();
    }
}
run();
