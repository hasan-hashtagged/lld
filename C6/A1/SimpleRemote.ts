import { Command } from "./command";

export class SimpleRemote {
  slot : Command;

  setCommand(command: Command): void {
    this.slot = command;
  }

  buttonPressed(): void {
    this.slot.execute();
  }
}