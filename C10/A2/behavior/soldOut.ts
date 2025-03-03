import { GumballMachine } from "../gumballMachine";
import { State } from "./state";

export class SoldOutState implements State {
  gumballMachine: GumballMachine;
  constructor(gm: GumballMachine) {
    this.gumballMachine = gm;
  }

  ejectCoin(): void {
    console.log("No coin inserted!!!");
  }

  insertCoin(): void {
    console.log("We are out of order. Sorry for inconvinience");
  }

  turnCrank(): void {
    console.log("We are out of order. Sorry for inconvinience");
  }

  _dispense(): void {
    console.log("We are out of order. Sorry for inconvinience");
  }

}
