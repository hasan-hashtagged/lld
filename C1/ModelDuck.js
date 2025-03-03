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
exports.ModelDuck = void 0;
var fly_1 = require("./behaviour/fly");
var quack_1 = require("./behaviour/quack");
var duck_1 = require("./duck");
var ModelDuck = /** @class */ (function (_super) {
    __extends(ModelDuck, _super);
    function ModelDuck() {
        var _this = _super.call(this) || this;
        _this.flybhvr = new fly_1.noFly();
        _this.quackbhvr = new quack_1.quacker();
        return _this;
    }
    ModelDuck.prototype.display = function () {
        console.log('I am made of plastic which children play with');
    };
    return ModelDuck;
}(duck_1.Duck));
exports.ModelDuck = ModelDuck;
