"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PizzaStore = void 0;
var PizzaStore = /** @class */ (function () {
    function PizzaStore(pFactory) {
        this.factory = pFactory;
    }
    PizzaStore.prototype.orderPizza = function (type) {
        var pizza = this.factory.createPizza(type);
        pizza.prepare();
        pizza.bake();
        pizza.cut();
        pizza.box();
    };
    return PizzaStore;
}());
exports.PizzaStore = PizzaStore;
