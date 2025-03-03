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
Object.defineProperty(exports, "__esModule", { value: true });
exports.VeggiePizza = exports.CheesePizza = exports.Pizza = void 0;
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
var CheesePizza = /** @class */ (function (_super) {
    __extends(CheesePizza, _super);
    function CheesePizza() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CheesePizza.prototype.prepare = function () {
        console.log("Preparing cheesy...");
    };
    CheesePizza.prototype.bake = function () {
        console.log("Baking cheesy...");
    };
    CheesePizza.prototype.cut = function () {
        console.log("Cutting cheesy...");
    };
    return CheesePizza;
}(Pizza));
exports.CheesePizza = CheesePizza;
var VeggiePizza = /** @class */ (function (_super) {
    __extends(VeggiePizza, _super);
    function VeggiePizza() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VeggiePizza.prototype.prepare = function () {
        console.log("Preparing veggie...");
    };
    VeggiePizza.prototype.bake = function () {
        console.log("Baking veggie...");
    };
    VeggiePizza.prototype.cut = function () {
        console.log("Cutting veggie...");
    };
    return VeggiePizza;
}(Pizza));
exports.VeggiePizza = VeggiePizza;
