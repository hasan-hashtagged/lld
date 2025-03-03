"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.ChicagoPizzaStore = exports.NYPizzaStore = void 0;
var pizza_1 = require("./pizza");
var PizzaStore = /** @class */ (function () {
    function PizzaStore() {
    }
    PizzaStore.prototype.orderPizza = function (type) {
        var pizza = this.createPizza(type);
        pizza.prepare();
        pizza.bake();
        pizza.cut();
        pizza.box();
    };
    return PizzaStore;
}());
var NYPizzaStore = /** @class */ (function (_super) {
    __extends(NYPizzaStore, _super);
    function NYPizzaStore() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NYPizzaStore.prototype.createPizza = function (type) {
        var pizza;
        if (type.toLowerCase() === 'cheese') {
            pizza = new pizza_1.NYStyleCheesePizza();
        }
        else if (type.toLowerCase() === 'veggie') {
            pizza = new pizza_1.NYStyleVeggiePizza();
        }
        else if (type.toLowerCase() === 'clam') {
            pizza = new pizza_1.NYStyleClamPizza();
        }
        else {
            pizza = new pizza_1.NYStyleNormalPizza();
        }
        return pizza;
    };
    return NYPizzaStore;
}(PizzaStore));
exports.NYPizzaStore = NYPizzaStore;
var ChicagoPizzaStore = /** @class */ (function (_super) {
    __extends(ChicagoPizzaStore, _super);
    function ChicagoPizzaStore() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ChicagoPizzaStore.prototype.createPizza = function (type) {
        var pizza;
        if (type.toLowerCase() === 'cheese') {
            pizza = new pizza_1.ChicagoStyleCheesePizza();
        }
        else if (type.toLowerCase() === 'veggie') {
            pizza = new pizza_1.ChicagoStyleVeggiePizza();
        }
        else if (type.toLowerCase() === 'clam') {
            pizza = new pizza_1.ChicagoStyleClamPizza();
        }
        else {
            pizza = new pizza_1.ChicagoStyleNormalPizza();
        }
        return pizza;
    };
    return ChicagoPizzaStore;
}(PizzaStore));
exports.ChicagoPizzaStore = ChicagoPizzaStore;
