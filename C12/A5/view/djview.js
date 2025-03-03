"use strict";
exports.__esModule = true;
exports.DJView = void 0;
var DJView = /** @class */ (function () {
    function DJView(mdl, ctrl) {
        this.model = mdl;
        this.controller = ctrl;
        this.model.registerObserver(this);
    }
    DJView.prototype.updateBPM = function () {
        var bpm = this.model.getBPM();
        if (bpm > 0) {
            console.log("The current BPM is: ", bpm);
        }
        else {
            console.log("Offline!!");
        }
    };
    // Control parts
    DJView.prototype.start = function () {
        this.actionPerformed("start");
    };
    DJView.prototype.stop = function () {
        this.actionPerformed("stopped");
    };
    DJView.prototype.increase = function (val) {
        this.actionPerformed("increase ".concat(val));
    };
    DJView.prototype.decrease = function (val) {
        this.actionPerformed("decrease ".concat(val));
    };
    DJView.prototype.actionPerformed = function (act) {
        if (act.startsWith("start")) {
            this.controller.start();
        }
        else if (act.startsWith("stop")) {
            this.controller.stop();
        }
        else if (act.startsWith("increase")) {
            var val = act.split(' ');
            this.controller.increaseBPM(Number(val[1]));
        }
        else {
            var val = act.split(' ');
            this.controller.decreaseBPM(Number(val[1]));
        }
    };
    return DJView;
}());
exports.DJView = DJView;
