export class Fan {
  highSpeed: number;
  lowSpeed: number;
  mediumSpeed: number;
  off: number;
  speed: number;

  constructor() {
    this.highSpeed = 3;
    this.lowSpeed = 1;
    this.mediumSpeed = 2;
    this.off = 0;
    this.speed = 0;
  }

  high(): void {
    this.speed = this.highSpeed;
    console.log("Speed high");
  }

  low(): void {
    this.speed = this.lowSpeed;
    console.log("Low Speed");
  }

  medium(): void {
    this.speed = this.mediumSpeed;
    console.log("Medium Speed");
  }

  turnOff(): void {
    this.speed = this.off;
    console.log("Fan turned off");
  }

  getSpeed(): number {
    return this.speed;
  }

}