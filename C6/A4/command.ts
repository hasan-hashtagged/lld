import { Fan } from "./Fan";
import { GarageDoor } from "./GarageDoor";
import { Light } from "./Light";
import { Stereo } from "./Stereo";

export interface Command {
  execute(): void;
  undo(): void;
}

export class LightOnCommand implements Command {
  light: Light;
  constructor(lght: Light) {
    this.light = lght;
  }
  execute(): void {
    this.light.turnOn();
  }

  undo(): void {
    this.light.turnOff();
  }
}

export class LightOffCommand implements Command {
  light: Light;
  constructor(lght: Light) {
    this.light = lght;
  }

  execute(): void {
    this.light.turnOff();
  }

  undo(): void {
    this.light.turnOn();
  }
}

export class StereoOnCommand implements Command {
  stereo: Stereo;
  constructor(stro: Stereo) {
    this.stereo = stro;
  }

  execute(): void {
    this.stereo.turnOn();
    this.stereo.insertCD();
    this.stereo.setVolume(10);  
  }

  undo(): void {
    this.stereo.turnOff();
  }

}

export class StereoOffCommand implements Command {
  stereo: Stereo;
  constructor(stro: Stereo) {
    this.stereo = stro;
  }

  execute(): void {
    this.stereo.turnOff();
  }

  undo(): void {
    this.stereo.insertCD();
    this.stereo.setVolume(10);
    this.stereo.turnOn();
  }
}

export class FanOnCommand implements Command {
  fan: Fan;
  constructor(fn: Fan) {
    this.fan = fn;
  }
  execute(): void {
    this.fan.turnOn();
  }

  undo(): void {
    this.fan.turnOff();
  }
}

export class FanOffCommand implements Command {
  fan: Fan;
  constructor(fn: Fan) {
    this.fan = fn;
    
  }
  execute(): void {
    this.fan.turnOff();
  }

  undo(): void {
    this.fan.turnOn();
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

  undo(): void {
    this.garageDoor.down();
  }
}

export class GarageDoorCloseCommand implements Command {
  garageDoor: GarageDoor;
  
  constructor(gd: GarageDoor) {
    this.garageDoor = gd;
  }

  execute(): void {
    this.garageDoor.down();
  }

  undo(): void {
    this.garageDoor.up();
  }
}

export class MacroCommand implements Command {
  commands: Array<Command>;

  constructor(cmds: Array<Command>) {
    this.commands = cmds;
  }

  execute(): void {
    for (let i = 0; i < this.commands.length; i++) {
      this.commands[i].execute();
    }
  }

  undo(): void {
    for (let i = 0; i < this.commands.length; i++) {
      this.commands[i].undo();
    }
  }
}

// NULL OBJECT
export class NoCommand implements Command {
  execute(): void {
    
  }
  undo(): void {
    
  }

}
