import { GarageDoor } from "./GarageDoor";
import type { Light } from "./Light";

export interface Command {
  execute(): void;
}

export class LightOnCommand implements Command {
  light : Light;
  constructor(lght: Light) {
    this.light = lght;
  }

  execute() {
    this.light.on();
  }
}

export class LightOffCommand implements Command {
  light: Light;
  constructor(lght: Light) {
    this.light = lght;
  }

  execute(): void {
    this.light.off();
  }
}

export class GarageDoorOpenCommand implements Command {
  garageDoor: GarageDoor;
  
  constructor(gd: GarageDoor) {
    this.garageDoor = gd;
  }

  execute(): void {
    this.garageDoor.up();
  }
}