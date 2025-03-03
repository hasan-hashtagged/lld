"use strict";
exports.__esModule = true;
var gooseFactory_1 = require("./gooseFactory");
var duckFactory_1 = require("./duckFactory");
var quackcounter_1 = require("./quackcounter");
function simulate(duck) {
    duck.quack();
}
function run() {
    var duckFactory = new duckFactory_1.DuckFactory();
    var gooseFactory = new gooseFactory_1.GooseFactory();
    var maddy = duckFactory.createMallardDuck();
    var toy = duckFactory.createRubberDuck();
    var whistle = duckFactory.createDuckCall();
    var gooseAdapter = gooseFactory.createGooseDuck();
    simulate(maddy);
    simulate(toy);
    simulate(whistle);
    simulate(gooseAdapter);
    console.log("The ducks quacked " + quackcounter_1.QuackCounter.quackCount + " times.");
}
run();
