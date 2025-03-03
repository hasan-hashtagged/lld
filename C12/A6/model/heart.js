"use strict";
exports.__esModule = true;
exports.HeartModel = void 0;
var HeartModel = /** @class */ (function () {
    function HeartModel() {
        this.bpm = 68;
        this.bpmObservers = [];
    }
    HeartModel.prototype.getHeartBeat = function () {
        return this.bpm;
    };
    HeartModel.prototype.registerObserver = function (obs) {
        this.bpmObservers.push(obs);
    };
    HeartModel.prototype.removeObserver = function (obs) {
        var idx = this.bpmObservers.indexOf(obs);
        ;
        this.bpmObservers.slice(idx, 1);
    };
    HeartModel.prototype.notifyObservers = function () {
        console.log("Current Heart rate:", this.bpm);
        this.bpm = 100;
        setTimeout(this.getHeartBeat, 2000);
        console.log("Current Heart rate:", this.bpm);
    };
    return HeartModel;
}());
exports.HeartModel = HeartModel;
