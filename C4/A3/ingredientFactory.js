"use strict";
exports.__esModule = true;
exports.ChicagoIngredientFactory = exports.NYIngredientFactory = void 0;
var ingredients_1 = require("./ingredients");
var NYIngredientFactory = /** @class */ (function () {
    function NYIngredientFactory() {
    }
    NYIngredientFactory.prototype.createCheese = function () {
        return new ingredients_1.Mozzarella();
    };
    NYIngredientFactory.prototype.createDough = function () {
        return new ingredients_1.ThinCrustDough();
    };
    NYIngredientFactory.prototype.createSauce = function () {
        return new ingredients_1.Marinara();
    };
    return NYIngredientFactory;
}());
exports.NYIngredientFactory = NYIngredientFactory;
var ChicagoIngredientFactory = /** @class */ (function () {
    function ChicagoIngredientFactory() {
    }
    ChicagoIngredientFactory.prototype.createCheese = function () {
        return new ingredients_1.Feta();
    };
    ChicagoIngredientFactory.prototype.createDough = function () {
        return new ingredients_1.ThickCrustDough();
    };
    ChicagoIngredientFactory.prototype.createSauce = function () {
        return new ingredients_1.PlumTomato();
    };
    return ChicagoIngredientFactory;
}());
exports.ChicagoIngredientFactory = ChicagoIngredientFactory;
