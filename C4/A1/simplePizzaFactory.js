"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimplePizzaFactory = void 0;
var pizza_1 = require("./pizza");
var SimplePizzaFactory = /** @class */ (function () {
    function SimplePizzaFactory() {
    }
    SimplePizzaFactory.prototype.createPizza = function (type) {
        var pizza;
        if (type === 'cheese') {
            pizza = new pizza_1.CheesePizza();
        }
        else if (type === 'veggie') {
            pizza = new pizza_1.VeggiePizza();
        }
        else {
            pizza = null;
        }
        return pizza;
    };
    return SimplePizzaFactory;
}());
exports.SimplePizzaFactory = SimplePizzaFactory;
