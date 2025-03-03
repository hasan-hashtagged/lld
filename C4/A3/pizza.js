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
exports.VeggiePizza = exports.CheesePizza = exports.Pizza = void 0;
var Pizza = /** @class */ (function () {
    function Pizza() {
    }
    Pizza.prototype.bake = function () {
        console.log("Baking...");
    };
    Pizza.prototype.cut = function () {
        console.log("Cutting...");
    };
    Pizza.prototype.box = function () {
        console.log("Finaally, Putting in a box...");
    };
    return Pizza;
}());
exports.Pizza = Pizza;
var CheesePizza = /** @class */ (function (_super) {
    __extends(CheesePizza, _super);
    function CheesePizza(ingFactory) {
        var _this = _super.call(this) || this;
        _this.ingredientFactory = ingFactory;
        return _this;
    }
    CheesePizza.prototype.prepare = function () {
        console.log("Preparing NYStyleCheesePizza...");
        this.cheese = this.ingredientFactory.createCheese();
        this.dough = this.ingredientFactory.createDough();
        this.sauce = this.ingredientFactory.createSauce();
        console.log('Cheese used: ', this.cheese);
        console.log('Dough used: ', this.dough);
    };
    return CheesePizza;
}(Pizza));
exports.CheesePizza = CheesePizza;
var VeggiePizza = /** @class */ (function (_super) {
    __extends(VeggiePizza, _super);
    function VeggiePizza(ingFactory) {
        var _this = _super.call(this) || this;
        _this.ingredientFactory = ingFactory;
        return _this;
    }
    VeggiePizza.prototype.prepare = function () {
        console.log("Preparing NYStyleVeggiePizza...");
        this.cheese = this.ingredientFactory.createCheese();
        this.dough = this.ingredientFactory.createDough();
        this.sauce = this.ingredientFactory.createSauce();
        console.log('Sauce used: ', this.sauce);
    };
    return VeggiePizza;
}(Pizza));
exports.VeggiePizza = VeggiePizza;
