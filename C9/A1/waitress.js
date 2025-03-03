"use strict";
exports.__esModule = true;
exports.Waitress = void 0;
var Waitress = /** @class */ (function () {
    function Waitress(bfast, lunch) {
        this.breakfastMenu = bfast;
        this.lunchMenu = lunch;
    }
    Waitress.prototype.printMenu = function () {
        var bfastIterator = this.breakfastMenu.createIterator();
        console.log('-----------------BreakFast----------------');
        _printMenu(bfastIterator);
        console.log('-----------------Lunch--------------------');
        var lunchIterator = this.lunchMenu.createIterator();
        _printMenu(lunchIterator);
    };
    return Waitress;
}());
exports.Waitress = Waitress;
function _printMenu(menuIterator) {
    while (menuIterator.hasNext()) {
        var item = menuIterator.next();
        console.log('Name: ', item.name);
        console.log('Description: ', item.description);
        console.log('Vegetarian: ', item.isVegeterian.toString());
        console.log('Price:', item.price);
    }
}
