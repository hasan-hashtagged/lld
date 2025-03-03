"use strict";
exports.__esModule = true;
var gooseAdapter_1 = require("./gooseAdapter");
var goose_1 = require("./goose");
var ducks_1 = require("./ducks");
var quackcounter_1 = require("./quackcounter");
function simulate(duck) {
    duck.quack();
}
function run() {
    var maddy = new quackcounter_1.QuackCounter(new ducks_1.MallardDuck());
    var toy = new quackcounter_1.QuackCounter(new ducks_1.RubberDuck());
    var whistle = new quackcounter_1.QuackCounter(new ducks_1.DuckCall());
    var gooseAdapter = new gooseAdapter_1.GooseAdapter(new goose_1.Goose());
    simulate(maddy);
    simulate(toy);
    simulate(whistle);
    simulate(gooseAdapter);
    console.log("The ducks quacked " + quackcounter_1.QuackCounter.quackCount + " times.");
}
run();
