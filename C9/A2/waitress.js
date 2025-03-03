"use strict";
exports.__esModule = true;
exports.Waitress = void 0;
var Waitress = /** @class */ (function () {
    function Waitress(bfast, lunch) {
        // still bound to concrete class.
        this.breakfastMenu = bfast;
        this.lunchMenu = lunch;
    }
    Waitress.prototype.printMenu = function () {
        // using interface Iterator.
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
    // looping polymorphically without knowing about the implementation.
    while (menuIterator.hasNext()) {
        var item = menuIterator.next();
        console.log('Name: ', item.name);
        console.log('Description: ', item.description);
        console.log('Vegetarian: ', item.isVegeterian.toString());
        console.log('Price:', item.price);
    }
}
