"use strict";
exports.__esModule = true;
exports.GooseAdapter = void 0;
var GooseAdapter = /** @class */ (function () {
    function GooseAdapter(g) {
        this.goose = g;
    }
    GooseAdapter.prototype.quack = function () {
        this.goose.honk();
    };
    return GooseAdapter;
}());
exports.GooseAdapter = GooseAdapter;
