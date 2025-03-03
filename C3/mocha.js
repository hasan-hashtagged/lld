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
exports.Mocha = void 0;
var condiments_1 = require("./condiments");
var Mocha = /** @class */ (function (_super) {
    __extends(Mocha, _super);
    function Mocha(bev) {
        var _this = _super.call(this) || this;
        _this.bevarage = bev;
        return _this;
    }
    Mocha.prototype.getDescription = function () {
        return this.bevarage.getDescription() + ", Mocha";
    };
    Mocha.prototype.cost = function () {
        return 1 + this.bevarage.cost();
    };
    return Mocha;
}(condiments_1.Condiments));
exports.Mocha = Mocha;
