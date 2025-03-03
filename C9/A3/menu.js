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
exports.Menu = void 0;
var menuComponent_1 = require("./menuComponent");
var Menu = /** @class */ (function (_super) {
    __extends(Menu, _super);
    function Menu(compName, compDes) {
        var _this = _super.call(this) || this;
        _this.name = compName;
        _this.description = compDes;
        _this.menuComponents = [];
        return _this;
    }
    Menu.prototype.getName = function () {
        return this.name;
    };
    Menu.prototype.getDescription = function () {
        return this.description;
    };
    Menu.prototype.add = function (comp) {
        this.menuComponents.push(comp);
    };
    Menu.prototype.getChild = function (a) {
        return this.menuComponents[a];
    };
    Menu.prototype.print = function () {
        console.log('-----------------------------------------------------------');
        console.log('Menu: ', this.getName());
        console.log('Description: ', this.getDescription());
        console.log('-----------------------------------------------------------');
        for (var _i = 0, _a = this.menuComponents; _i < _a.length; _i++) {
            var comp = _a[_i];
            comp.print();
        }
    };
    return Menu;
}(menuComponent_1.MenuComponent));
exports.Menu = Menu;
