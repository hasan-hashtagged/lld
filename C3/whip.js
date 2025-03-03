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
exports.Whip = void 0;
var condiments_1 = require("./condiments");
var Whip = /** @class */ (function (_super) {
    __extends(Whip, _super);
    function Whip(bev) {
        var _this = _super.call(this) || this;
        _this.beverage = bev;
        return _this;
    }
    Whip.prototype.getDescription = function () {
        return this.beverage.getDescription() + ", Whip";
    };
    Whip.prototype.cost = function () {
        return 3 + this.beverage.cost();
    };
    return Whip;
}(condiments_1.Condiments));
exports.Whip = Whip;
