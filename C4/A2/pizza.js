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
exports.ChicagoStyleNormalPizza = exports.ChicagoStyleClamPizza = exports.ChicagoStyleVeggiePizza = exports.ChicagoStyleCheesePizza = exports.NYStyleNormalPizza = exports.NYStyleClamPizza = exports.NYStyleVeggiePizza = exports.NYStyleCheesePizza = exports.Pizza = void 0;
var Pizza = /** @class */ (function () {
    function Pizza() {
    }
    Pizza.prototype.prepare = function () {
        console.log("Preparing...");
    };
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
var NYStyleCheesePizza = /** @class */ (function (_super) {
    __extends(NYStyleCheesePizza, _super);
    function NYStyleCheesePizza() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NYStyleCheesePizza.prototype.prepare = function () {
        console.log("Preparing NYStyleCheesePizza...");
    };
    NYStyleCheesePizza.prototype.bake = function () {
        console.log("Baking NYStyleCheesePizza...");
    };
    NYStyleCheesePizza.prototype.cut = function () {
        console.log("Cutting NYStyleCheesePizza...");
    };
    return NYStyleCheesePizza;
}(Pizza));
exports.NYStyleCheesePizza = NYStyleCheesePizza;
var NYStyleVeggiePizza = /** @class */ (function (_super) {
    __extends(NYStyleVeggiePizza, _super);
    function NYStyleVeggiePizza() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NYStyleVeggiePizza.prototype.prepare = function () {
        console.log("Preparing NYStyleVeggiePizza...");
    };
    NYStyleVeggiePizza.prototype.bake = function () {
        console.log("Baking NYStyleVeggiePizza...");
    };
    NYStyleVeggiePizza.prototype.cut = function () {
        console.log("Cutting NYStyleVeggiePizza...");
    };
    return NYStyleVeggiePizza;
}(Pizza));
exports.NYStyleVeggiePizza = NYStyleVeggiePizza;
var NYStyleClamPizza = /** @class */ (function (_super) {
    __extends(NYStyleClamPizza, _super);
    function NYStyleClamPizza() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NYStyleClamPizza.prototype.prepare = function () {
        console.log("Preparing NYStyleClamPizza...");
    };
    NYStyleClamPizza.prototype.bake = function () {
        console.log("Baking NYStyleClamPizza...");
    };
    NYStyleClamPizza.prototype.cut = function () {
        console.log("Cutting NYStyleClamPizza...");
    };
    return NYStyleClamPizza;
}(Pizza));
exports.NYStyleClamPizza = NYStyleClamPizza;
var NYStyleNormalPizza = /** @class */ (function (_super) {
    __extends(NYStyleNormalPizza, _super);
    function NYStyleNormalPizza() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NYStyleNormalPizza.prototype.prepare = function () {
        console.log("Preparing NYStyleNormalPizza...");
    };
    NYStyleNormalPizza.prototype.bake = function () {
        console.log("Baking NYStyleNormalPizza...");
    };
    NYStyleNormalPizza.prototype.cut = function () {
        console.log("Cutting NYStyleNormalPizza...");
    };
    return NYStyleNormalPizza;
}(Pizza));
exports.NYStyleNormalPizza = NYStyleNormalPizza;
var ChicagoStyleCheesePizza = /** @class */ (function (_super) {
    __extends(ChicagoStyleCheesePizza, _super);
    function ChicagoStyleCheesePizza() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ChicagoStyleCheesePizza.prototype.prepare = function () {
        console.log("Preparing ChicagoStyleCheesePizza...");
    };
    ChicagoStyleCheesePizza.prototype.bake = function () {
        console.log("Baking ChicagoStyleCheesePizza...");
    };
    ChicagoStyleCheesePizza.prototype.cut = function () {
        console.log("Cutting ChicagoStyleCheesePizza...");
    };
    return ChicagoStyleCheesePizza;
}(Pizza));
exports.ChicagoStyleCheesePizza = ChicagoStyleCheesePizza;
var ChicagoStyleVeggiePizza = /** @class */ (function (_super) {
    __extends(ChicagoStyleVeggiePizza, _super);
    function ChicagoStyleVeggiePizza() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ChicagoStyleVeggiePizza.prototype.prepare = function () {
        console.log("Preparing ChicagoStyleVeggiePizza...");
    };
    ChicagoStyleVeggiePizza.prototype.bake = function () {
        console.log("Baking ChicagoStyleVeggiePizza...");
    };
    ChicagoStyleVeggiePizza.prototype.cut = function () {
        console.log("Cutting ChicagoStyleVeggiePizza...");
    };
    return ChicagoStyleVeggiePizza;
}(Pizza));
exports.ChicagoStyleVeggiePizza = ChicagoStyleVeggiePizza;
var ChicagoStyleClamPizza = /** @class */ (function (_super) {
    __extends(ChicagoStyleClamPizza, _super);
    function ChicagoStyleClamPizza() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ChicagoStyleClamPizza.prototype.prepare = function () {
        console.log("Preparing ChicagoStyleClamPizza...");
    };
    ChicagoStyleClamPizza.prototype.bake = function () {
        console.log("Baking ChicagoStyleClamPizza...");
    };
    ChicagoStyleClamPizza.prototype.cut = function () {
        console.log("Cutting ChicagoStyleClamPizza...");
    };
    return ChicagoStyleClamPizza;
}(Pizza));
exports.ChicagoStyleClamPizza = ChicagoStyleClamPizza;
var ChicagoStyleNormalPizza = /** @class */ (function (_super) {
    __extends(ChicagoStyleNormalPizza, _super);
    function ChicagoStyleNormalPizza() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ChicagoStyleNormalPizza.prototype.prepare = function () {
        console.log("Preparing ChicagoStyleNormalPizza...");
    };
    ChicagoStyleNormalPizza.prototype.bake = function () {
        console.log("Baking ChicagoStyleNormalPizza...");
    };
    ChicagoStyleNormalPizza.prototype.cut = function () {
        console.log("Cutting ChicagoStyleNormalPizza...");
    };
    return ChicagoStyleNormalPizza;
}(Pizza));
exports.ChicagoStyleNormalPizza = ChicagoStyleNormalPizza;
