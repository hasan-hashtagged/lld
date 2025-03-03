import { Command, NoCommand } from "./command";

export class Remote {
  onCommand: Array<Command>;
  offCommand: Array<Command>;
  undoCommand: Command;

  constructor() {
    this.onCommand = new Array<Command>(7);
    this.offCommand = new Array<Command>(7);
    this.undoCommand = new NoCommand();
  }

  setCommand(slot: number, on: Command, off: Command): void {
    this.onCommand[slot] = on;
    this.offCommand[slot] = off;
  }

  onButton(slot: number): void {
    this.onCommand[slot].execute();
    this.undoCommand = this.onCommand[slot];
  }

  offButton(slot: number): void {
    this.offCommand[slot].execute();
    this.undoCommand = this.offCommand[slot];
  }

  undoButton(): void {
    this.undoCommand.undo();
  }

 }