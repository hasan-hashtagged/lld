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
exports.GooseFactory = void 0;
var goose_1 = require("./goose");
var gooseAdapter_1 = require("./gooseAdapter");
var AbstractGooseFactory = /** @class */ (function () {
    function AbstractGooseFactory() {
    }
    return AbstractGooseFactory;
}());
var GooseFactory = /** @class */ (function (_super) {
    __extends(GooseFactory, _super);
    function GooseFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GooseFactory.prototype.createGooseDuck = function () {
        return new gooseAdapter_1.GooseAdapter(new goose_1.Goose());
    };
    return GooseFactory;
}(AbstractGooseFactory));
exports.GooseFactory = GooseFactory;
