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
exports.Coffee = void 0;
var CaffeineBeverage_1 = require("./CaffeineBeverage");
var Coffee = /** @class */ (function (_super) {
    __extends(Coffee, _super);
    function Coffee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Coffee.prototype.addCondiments = function () {
        console.log("Adding milk!!!");
    };
    Coffee.prototype.brew = function () {
        console.log("Brewing the coffee beans!!!");
    };
    return Coffee;
}(CaffeineBeverage_1.CaffeineBeverage));
exports.Coffee = Coffee;
