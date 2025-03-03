// Facade Pattern

import { AC } from "./AC";
import { Light } from "./Light";

export class RoomController {
  voltas: AC;
  syska: Light;
  constructor(ac: AC, light: Light) {
    this.voltas = ac;
    this.syska = light;
  }

  setupRoom(): void {
    this.voltas.turnOn();
    this.syska.turnOn();
  }

  getOut(): void {
    this.syska.turnOff();
    this.voltas.turnOff();
  }
}