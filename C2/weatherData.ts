import { Observer } from './observer';
import { Subject } from './subject';

export class WeatherData implements Subject {
  observers: Array<Observer>;
  temprature: number;
  humidity: number;
  pressure: number;

  constructor() {
    this.observers = [];
  }

  registerObserver(o: Observer) {
    this.observers.push(o);
  }

  removeObserver(o: Observer): void {
    let pos = 0;
    this.observers.forEach(obsvr => {
      if (o === obsvr) {
        this.observers.splice(pos, 1);
        return;
      }
      pos += 1;
    });
  }

  notifyObserver() {
     this.observers.forEach(obsvr => {
      obsvr.update(this.temprature, this.humidity, this.pressure);
    });
  }

  measurementChanged() {
    this.notifyObserver();
  }

  setMeasurements(temp, hum, pres) {
    this.temprature = temp;
    this.humidity = hum;
    this.pressure = pres;
    this.measurementChanged();
  }

}