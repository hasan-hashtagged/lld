"use strict";
exports.__esModule = true;
exports.PancakeMenu = void 0;
var pancakeMenuIterator_1 = require("./pancakeMenuIterator");
var PancakeMenu = /** @class */ (function () {
    function PancakeMenu(items) {
        this.menuItems = items;
    }
    PancakeMenu.prototype.addItems = function (item) {
        var pos = Object.keys(this.menuItems).length;
        this.menuItems[pos] = item;
    };
    PancakeMenu.prototype.createIterator = function () {
        return new pancakeMenuIterator_1.PanCakeIterator(this.menuItems);
    };
    return PancakeMenu;
}());
exports.PancakeMenu = PancakeMenu;
