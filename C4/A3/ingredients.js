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
exports.PlumTomato = exports.Marinara = exports.ThinCrustDough = exports.ThickCrustDough = exports.Mozzarella = exports.Feta = exports.Sauce = exports.Dough = exports.Cheese = void 0;
var Cheese = /** @class */ (function () {
    function Cheese() {
    }
    return Cheese;
}());
exports.Cheese = Cheese;
var Dough = /** @class */ (function () {
    function Dough() {
        this.name = 'Dough';
    }
    return Dough;
}());
exports.Dough = Dough;
var Sauce = /** @class */ (function () {
    function Sauce() {
        this.name = 'Sauce';
    }
    return Sauce;
}());
exports.Sauce = Sauce;
var Feta = /** @class */ (function (_super) {
    __extends(Feta, _super);
    function Feta() {
        var _this = _super.call(this) || this;
        _this.name = 'Feta';
        return _this;
    }
    return Feta;
}(Cheese));
exports.Feta = Feta;
var Mozzarella = /** @class */ (function (_super) {
    __extends(Mozzarella, _super);
    function Mozzarella() {
        var _this = _super.call(this) || this;
        _this.name = 'Mozzarella';
        return _this;
    }
    return Mozzarella;
}(Cheese));
exports.Mozzarella = Mozzarella;
var ThickCrustDough = /** @class */ (function (_super) {
    __extends(ThickCrustDough, _super);
    function ThickCrustDough() {
        var _this = _super.call(this) || this;
        _this.name = 'Thick Crust';
        return _this;
    }
    return ThickCrustDough;
}(Dough));
exports.ThickCrustDough = ThickCrustDough;
var ThinCrustDough = /** @class */ (function (_super) {
    __extends(ThinCrustDough, _super);
    function ThinCrustDough() {
        var _this = _super.call(this) || this;
        _this.name = 'Thin Crust';
        return _this;
    }
    return ThinCrustDough;
}(Dough));
exports.ThinCrustDough = ThinCrustDough;
var Marinara = /** @class */ (function (_super) {
    __extends(Marinara, _super);
    function Marinara() {
        var _this = _super.call(this) || this;
        _this.name = 'Marinara';
        return _this;
    }
    return Marinara;
}(Sauce));
exports.Marinara = Marinara;
var PlumTomato = /** @class */ (function (_super) {
    __extends(PlumTomato, _super);
    function PlumTomato() {
        var _this = _super.call(this) || this;
        _this.name = 'Plum tomato';
        return _this;
    }
    return PlumTomato;
}(Sauce));
exports.PlumTomato = PlumTomato;
