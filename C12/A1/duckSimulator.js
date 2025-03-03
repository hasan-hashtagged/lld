"use strict";
exports.__esModule = true;
var ducks_1 = require("./ducks");
function simulate(duck) {
    duck.quack();
}
function run() {
    var maddy = new ducks_1.MallardDuck();
    var toy = new ducks_1.RubberDuck();
    var whistle = new ducks_1.DuckCall();
    simulate(maddy);
    simulate(toy);
    simulate(whistle);
}
run();
