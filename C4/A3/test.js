"use strict";
exports.__esModule = true;
var pizzaStore_1 = require("./pizzaStore");
function run() {
    var nyStore = new pizzaStore_1.NYPizzaStore();
    nyStore.orderPizza('Cheese');
    var cgStore = new pizzaStore_1.ChicagoPizzaStore();
    cgStore.orderPizza('Veggie');
}
run();
