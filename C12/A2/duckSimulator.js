"use strict";
exports.__esModule = true;
var gooseAdapter_1 = require("./gooseAdapter");
var goose_1 = require("./goose");
var ducks_1 = require("./ducks");
function simulate(duck) {
    duck.quack();
}
function run() {
    var maddy = new ducks_1.MallardDuck();
    var toy = new ducks_1.RubberDuck();
    var whistle = new ducks_1.DuckCall();
    var gooseAdapter = new gooseAdapter_1.GooseAdapter(new goose_1.Goose());
    simulate(maddy);
    simulate(toy);
    simulate(whistle);
    simulate(gooseAdapter);
}
run();
