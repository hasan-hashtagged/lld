import { Display } from "./display";
import { Observer } from "./observer";
import { WeatherData } from "./weatherData";

export class CurrentCondition implements Observer, Display {
  temprature: number;
  humidity: number;
  pressure: number;
  weatherData: WeatherData;

  constructor(wthr: WeatherData) {
    this.weatherData = wthr;
    wthr.registerObserver(this);
  }

  update(temprature: number, humidity: number, pressure: number): void {
    this.temprature = temprature;
    this.humidity = humidity;
    this.pressure = pressure;
    this.display();
  }


  display(): void {
    console.log(`Temprature: ${this.temprature}\nHumidity: ${this.humidity}` +
      `\nPressure: ${this.pressure}`);
  }

}