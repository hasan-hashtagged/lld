"use strict";
exports.__esModule = true;
exports.DinerMenuIterator = void 0;
var DinerMenuIterator = /** @class */ (function () {
    function DinerMenuIterator(options) {
        this.position = 0;
        this.items = options;
    }
    DinerMenuIterator.prototype.hasNext = function () {
        if (this.position >= this.items.length) {
            return false;
        }
        return true;
    };
    DinerMenuIterator.prototype.next = function () {
        var item = this.items[this.position];
        this.position++;
        return item;
    };
    return DinerMenuIterator;
}());
exports.DinerMenuIterator = DinerMenuIterator;
