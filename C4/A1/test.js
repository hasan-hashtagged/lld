"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pizzaStore_1 = require("./pizzaStore");
var simplePizzaFactory_1 = require("./simplePizzaFactory");
function run() {
    var factory = new simplePizzaFactory_1.SimplePizzaFactory();
    var pS = new pizzaStore_1.PizzaStore(factory);
    pS.orderPizza('cheese');
    pS.orderPizza('veggie');
}
run();
