"use strict";
exports.__esModule = true;
exports.Beat = void 0;
var Beat = /** @class */ (function () {
    function Beat() {
        this.bpm = 90;
        this.stop = false;
        this.bpmObservers = [];
    }
    Beat.prototype.initialize = function () {
        console.log("Model Initialized");
    };
    Beat.prototype.on = function () {
        console.log("Turned on the beat");
        // notifyObservers();
        this.stop = false;
    };
    Beat.prototype.off = function () {
        this.stop = true;
        console.log("Turned off the beat");
    };
    Beat.prototype.setBPM = function (bpm) {
        this.bpm = bpm;
        this.notifyObservers();
    };
    Beat.prototype.getBPM = function () {
        return this.bpm;
    };
    Beat.prototype.registerObserver = function (o) {
        this.bpmObservers.push(o);
    };
    Beat.prototype.removeObserver = function (obs) {
        var idx = this.bpmObservers.indexOf(obs);
        this.bpmObservers.slice(idx, 1);
    };
    Beat.prototype.notifyObservers = function () {
        for (var _i = 0, _a = this.bpmObservers; _i < _a.length; _i++) {
            var obs = _a[_i];
            obs.updateBPM();
        }
    };
    return Beat;
}());
exports.Beat = Beat;
