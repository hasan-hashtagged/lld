import { Fan } from "./Fan";

export interface Command {
  execute(): void;
  undo(): void;
}

export class FanHighCommand implements Command {
  fan: Fan;
  prevSpeed: number;
  constructor(fn: Fan) {
    this.fan = fn;
  }

  execute(): void {
    this.prevSpeed = this.fan.getSpeed();
    this.fan.high();
  }

  undo(): void {
    if (this.prevSpeed === this.fan.highSpeed) {
      this.fan.high();
    } else if (this.prevSpeed === this.fan.mediumSpeed) {
      this.fan.medium();
    } else if (this.prevSpeed === this.fan.lowSpeed) {
      this.fan.low();
    } else {
      this.fan.turnOff();
    }
  }
}

export class FanMediumCommand implements Command {
  fan: Fan;
  prevSpeed: number;
  constructor(fn: Fan) {
    this.fan = fn;
  }

  execute(): void {
    this.prevSpeed = this.fan.getSpeed();
    this.fan.medium();
  }

  undo(): void {
    if (this.prevSpeed === this.fan.highSpeed) {
      this.fan.high();
    } else if (this.prevSpeed === this.fan.mediumSpeed) {
      this.fan.medium();
    } else if (this.prevSpeed === this.fan.lowSpeed) {
      this.fan.low();
    } else {
      this.fan.turnOff();
    }
  }
}

export class FanLowCommand implements Command {
  fan: Fan;
  prevSpeed: number;
  constructor(fn: Fan) {
    this.fan = fn;
  }

  execute(): void {
    this.prevSpeed = this.fan.getSpeed();
    this.fan.low();
  }

  undo(): void {
    if (this.prevSpeed === this.fan.highSpeed) {
      this.fan.high();
    } else if (this.prevSpeed === this.fan.mediumSpeed) {
      this.fan.medium();
    } else if (this.prevSpeed === this.fan.lowSpeed) {
      this.fan.low();
    } else {
      this.fan.turnOff();
    }
  }
}

export class FanOffCommand implements Command {
  fan: Fan;
  prevSpeed: number;
  constructor(fn: Fan) {
    this.fan = fn;
  }

  execute(): void {
    this.prevSpeed = this.fan.getSpeed();
    this.fan.turnOff();
  }

  undo(): void {
    if (this.prevSpeed === this.fan.highSpeed) {
      this.fan.high();
    } else if (this.prevSpeed === this.fan.mediumSpeed) {
      this.fan.medium();
    } else if (this.prevSpeed === this.fan.lowSpeed) {
      this.fan.low();
    } else {
      this.fan.turnOff();
    }
  }
}

export class NoCommand implements Command {
  execute(): void {
    
  }
  undo(): void {
    
  }
}
