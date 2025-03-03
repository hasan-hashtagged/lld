"use strict";
exports.__esModule = true;
var averageCondition_1 = require("./averageCondition");
var currentCondition_1 = require("./currentCondition");
var weatherData_1 = require("./weatherData");
function run() {
    var wdata = new weatherData_1.WeatherData();
    var cDisplay = new currentCondition_1.CurrentCondition(wdata);
    wdata.setMeasurements(10, 50, 750);
    wdata.setMeasurements(123, 10, 769);
    var avgDisplay = new averageCondition_1.AverageCondition(wdata);
    wdata.setMeasurements(100, 20, 790);
    wdata.setMeasurements(10, 50, 750);
    wdata.removeObserver(avgDisplay);
    wdata.setMeasurements(100, 20, 790);
    wdata.setMeasurements(10, 50, 750);
}
run();
