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
exports.MenuItem = void 0;
var menuComponent_1 = require("./menuComponent");
var MenuItem = /** @class */ (function (_super) {
    __extends(MenuItem, _super);
    function MenuItem(itemName, itemDes, isVeg, rate) {
        var _this = _super.call(this) || this;
        _this.name = itemName;
        _this.description = itemDes;
        _this.isVegeterian = isVeg;
        _this.price = rate;
        return _this;
    }
    MenuItem.prototype.getName = function () {
        return this.name;
    };
    MenuItem.prototype.getDescription = function () {
        return this.description;
    };
    MenuItem.prototype.getIsVegeterian = function () {
        return this.isVegeterian;
    };
    MenuItem.prototype.getPrice = function () {
        return this.price;
    };
    MenuItem.prototype.print = function () {
        console.log('Name: ', this.getName());
        console.log('Description: ', this.getDescription());
        console.log('Veg?: ', this.getIsVegeterian().toString());
        console.log('Price: ', this.getPrice());
        console.log('-----------------------------------------------------------');
    };
    return MenuItem;
}(menuComponent_1.MenuComponent));
exports.MenuItem = MenuItem;
