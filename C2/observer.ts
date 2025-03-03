export interface Observer {
  update(temprature: number, humidity: number, pressure: number): void;
}