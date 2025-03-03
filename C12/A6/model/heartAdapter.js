"use strict";
exports.__esModule = true;
exports.HeartAdapter = void 0;
var HeartAdapter = /** @class */ (function () {
    function HeartAdapter(heart) {
        this.heartModel = heart;
    }
    HeartAdapter.prototype.initialize = function () {
        console.log("Machine initialized");
    };
    HeartAdapter.prototype.on = function () {
        // noop
    };
    HeartAdapter.prototype.off = function () {
        // noop
    };
    HeartAdapter.prototype.getBPM = function () {
        return this.heartModel.getHeartBeat();
    };
    HeartAdapter.prototype.setBPM = function (bpm) {
        // noop
    };
    HeartAdapter.prototype.registerObserver = function (obs) {
        this.heartModel.registerObserver(obs);
    };
    HeartAdapter.prototype.removeObserver = function (obs) {
        this.heartModel.removeObserver(obs);
    };
    return HeartAdapter;
}());
exports.HeartAdapter = HeartAdapter;
