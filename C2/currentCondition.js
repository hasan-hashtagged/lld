"use strict";
exports.__esModule = true;
exports.CurrentCondition = void 0;
var CurrentCondition = /** @class */ (function () {
    function CurrentCondition(wthr) {
        this.weatherData = wthr;
        wthr.registerObserver(this);
    }
    CurrentCondition.prototype.update = function (temprature, humidity, pressure) {
        this.temprature = temprature;
        this.humidity = humidity;
        this.pressure = pressure;
        this.display();
    };
    CurrentCondition.prototype.display = function () {
        console.log("Temprature: ".concat(this.temprature, "\nHumidity: ").concat(this.humidity) +
            "\nPressure: ".concat(this.pressure));
    };
    return CurrentCondition;
}());
exports.CurrentCondition = CurrentCondition;
