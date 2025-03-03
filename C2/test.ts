import { AverageCondition } from "./averageCondition";
import { CurrentCondition } from "./currentCondition";
import { WeatherData } from "./weatherData";

function run() {
  let wdata : WeatherData = new WeatherData();
  let cDisplay : CurrentCondition = new CurrentCondition(wdata);
  wdata.setMeasurements(10, 50, 750);
  wdata.setMeasurements(123, 10, 769);
  let avgDisplay: AverageCondition = new AverageCondition(wdata);
  wdata.setMeasurements(100, 20, 790);
  wdata.setMeasurements(10, 50, 750);
  wdata.removeObserver(avgDisplay);
  wdata.setMeasurements(100, 20, 790);
  wdata.setMeasurements(10, 50, 750);
}

run();