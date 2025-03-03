import { GumballMachine } from "../gumballMachine";
import { State } from "./state";

export class NoCoinState implements State {
  gumballMachine: GumballMachine;
  constructor(gm: GumballMachine) {
    this.gumballMachine = gm;
  }

  ejectCoin(): void {
    console.log("No coin inserted!!!");
  }

  insertCoin(): void {
    this.gumballMachine.setState(this.gumballMachine.getHasCoinState());
    console.log("Coin Inserted :)");
  }

  turnCrank(): void {
    console.log("Please insert the coin and turn!!!");
  }

  _dispense(): void {
    console.log("Pay and get the gumball!!!!");
  }

}
