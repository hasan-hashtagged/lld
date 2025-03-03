"use strict";
exports.__esModule = true;
exports.AverageCondition = void 0;
var AverageCondition = /** @class */ (function () {
    function AverageCondition(wthr) {
        this.avgTemp = 0;
        this.avgHumidity = 0;
        this.avgPressure = 0;
        this.weatherData = wthr;
        wthr.registerObserver(this);
    }
    AverageCondition.prototype.update = function (temprature, humidity, pressure) {
        this.avgTemp = (this.avgTemp + temprature) / 2;
        this.avgHumidity = (this.avgHumidity + humidity) / 2;
        this.avgPressure = (this.avgPressure + pressure) / 2;
        this.display();
    };
    AverageCondition.prototype.display = function () {
        console.log("Avg Temprature: ".concat(this.avgTemp) +
            "\nAvg Humidity: ".concat(this.avgHumidity) +
            "\nAvg Pressure: ".concat(this.avgPressure));
    };
    return AverageCondition;
}());
exports.AverageCondition = AverageCondition;
