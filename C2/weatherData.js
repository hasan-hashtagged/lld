"use strict";
exports.__esModule = true;
exports.WeatherData = void 0;
var WeatherData = /** @class */ (function () {
    function WeatherData() {
        this.observers = [];
    }
    WeatherData.prototype.registerObserver = function (o) {
        this.observers.push(o);
    };
    WeatherData.prototype.removeObserver = function (o) {
        var _this = this;
        var pos = 0;
        this.observers.forEach(function (obsvr) {
            if (o === obsvr) {
                _this.observers.splice(pos, 1);
                return;
            }
            pos += 1;
        });
    };
    WeatherData.prototype.notifyObserver = function () {
        var _this = this;
        this.observers.forEach(function (obsvr) {
            obsvr.update(_this.temprature, _this.humidity, _this.pressure);
        });
    };
    WeatherData.prototype.measurementChanged = function () {
        this.notifyObserver();
    };
    WeatherData.prototype.setMeasurements = function (temp, hum, pres) {
        this.temprature = temp;
        this.humidity = hum;
        this.pressure = pres;
        this.measurementChanged();
    };
    return WeatherData;
}());
exports.WeatherData = WeatherData;
