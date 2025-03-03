"use strict";
exports.__esModule = true;
exports.PanCakeIterator = void 0;
var PanCakeIterator = /** @class */ (function () {
    function PanCakeIterator(options) {
        this.items = options;
        this.position = 0;
    }
    PanCakeIterator.prototype.hasNext = function () {
        if (this.position >= Object.keys(this.items).length) {
            return false;
        }
        return true;
    };
    PanCakeIterator.prototype.next = function () {
        var item = this.items[this.position];
        this.position++;
        return item;
    };
    return PanCakeIterator;
}());
exports.PanCakeIterator = PanCakeIterator;
