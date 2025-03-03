import { Command, NoCommand } from "./command";

export class RemoteControl {
  onSlot: Array<Command>;
  offSlot: Array<Command>;
  undoCommand: Command;

  constructor() {
    this.onSlot = new Array<Command>(4);
    this.offSlot = new Array<Command>(4);
    this.undoCommand = new NoCommand();
  }

  setCommand(slot: number, onCommand: Command, offCommand: Command) {
    this.onSlot[slot] = onCommand;
    this.offSlot[slot] = offCommand;
  }

  onButtonPressed(slot: number): void {
    this.onSlot[slot].execute();
    this.undoCommand = this.onSlot[slot];
  }

  offButtonPressed(slot: number): void {
    this.offSlot[slot].execute();
    this.undoCommand = this.offSlot[slot];
  }

  undoPressed(): void {
    this.undoCommand.undo();
  }
}
