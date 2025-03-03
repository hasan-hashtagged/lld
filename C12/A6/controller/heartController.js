"use strict";
exports.__esModule = true;
exports.heartController = void 0;
var heartAdapter_1 = require("../model/heartAdapter");
var djview_1 = require("../view/djview");
var heartController = /** @class */ (function () {
    function heartController(model) {
        this.heartModel = model;
        this.djView = new djview_1.DJView(new heartAdapter_1.HeartAdapter(this.heartModel), this);
    }
    heartController.prototype.start = function () {
        this.heartModel.notifyObservers();
    };
    heartController.prototype.stop = function () {
        // noop
    };
    heartController.prototype.increaseBPM = function (val) {
        // noop
    };
    heartController.prototype.decreaseBPM = function (val) {
        // noop
    };
    heartController.prototype.getView = function () {
        return this.djView;
    };
    return heartController;
}());
exports.heartController = heartController;
