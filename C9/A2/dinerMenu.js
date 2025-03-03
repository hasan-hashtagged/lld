"use strict";
exports.__esModule = true;
exports.DinerMenu = void 0;
var dinerMenuIterator_1 = require("./dinerMenuIterator");
var DinerMenu = /** @class */ (function () {
    function DinerMenu(items) {
        this.MAX_ITEM = 6;
        this.numOfItems = 0;
        this.menuItems = items;
    }
    DinerMenu.prototype.addItems = function (item) {
        if (this.numOfItems >= this.MAX_ITEM) {
            throw new Error('Menu full!!');
        }
        this.menuItems.push(item);
        this.numOfItems++;
    };
    DinerMenu.prototype.createIterator = function () {
        return new dinerMenuIterator_1.DinerMenuIterator(this.menuItems);
    };
    return DinerMenu;
}());
exports.DinerMenu = DinerMenu;
