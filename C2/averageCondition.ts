import { WeatherData } from "./weatherData";
import { Observer } from "./observer";
import { Display } from "./display";

export class AverageCondition implements Observer, Display {
  weatherData: WeatherData;
  avgTemp: number;
  avgHumidity: number;
  avgPressure: number;
  constructor(wthr: WeatherData) {
    this.avgTemp = 0;
    this.avgHumidity = 0;
    this.avgPressure = 0;
    this.weatherData = wthr;
    wthr.registerObserver(this);
  }

  update(temprature: number, humidity: number, pressure: number) : void {
    this.avgTemp = (this.avgTemp + temprature)/2;
    this.avgHumidity = (this.avgHumidity + humidity)/2;
    this.avgPressure = (this.avgPressure + pressure)/2;

    this.display();
  }

  display(): void {
    console.log(`Avg Temprature: ${this.avgTemp}` +
    `\nAvg Humidity: ${this.avgHumidity}` +
    `\nAvg Pressure: ${this.avgPressure}`);
  }
}