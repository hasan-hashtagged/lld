"use strict";
exports.__esModule = true;
exports.Waitress = void 0;
var Waitress = /** @class */ (function () {
    function Waitress(menu) {
        this.allMenus = menu;
    }
    Waitress.prototype.print = function () {
        this.allMenus.print();
    };
    return Waitress;
}());
exports.Waitress = Waitress;
