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
exports.DuckFactory = void 0;
var quackcounter_1 = require("./quackcounter");
var ducks_1 = require("./ducks");
var AbstractDuckFactory = /** @class */ (function () {
    function AbstractDuckFactory() {
    }
    return AbstractDuckFactory;
}());
var DuckFactory = /** @class */ (function (_super) {
    __extends(DuckFactory, _super);
    function DuckFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DuckFactory.prototype.createMallardDuck = function () {
        return new quackcounter_1.QuackCounter(new ducks_1.MallardDuck());
    };
    DuckFactory.prototype.createDuckCall = function () {
        return new quackcounter_1.QuackCounter(new ducks_1.RubberDuck());
    };
    DuckFactory.prototype.createRubberDuck = function () {
        return new quackcounter_1.QuackCounter(new ducks_1.DuckCall());
    };
    return DuckFactory;
}(AbstractDuckFactory));
exports.DuckFactory = DuckFactory;
