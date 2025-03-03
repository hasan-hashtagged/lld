"use strict";
exports.__esModule = true;
exports.DJController = void 0;
var djview_1 = require("../view/djview");
var DJController = /** @class */ (function () {
    function DJController(mdl) {
        this.model = mdl;
        this.view = new djview_1.DJView(this.model, this);
        this.model.initialize();
    }
    DJController.prototype.start = function () {
        this.model.on();
    };
    DJController.prototype.stop = function () {
        this.model.off();
    };
    DJController.prototype.increaseBPM = function (val) {
        var bpm = this.model.getBPM();
        this.model.setBPM(bpm + val);
    };
    DJController.prototype.decreaseBPM = function (val) {
        var bpm = this.model.getBPM();
        this.model.setBPM(bpm - val);
    };
    DJController.prototype.getView = function () {
        return this.view;
    };
    return DJController;
}());
exports.DJController = DJController;
