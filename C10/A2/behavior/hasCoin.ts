import { GumballMachine } from "../gumballMachine";
import { State } from "./state";

export class HasCoinState implements State {
  gumballMachine: GumballMachine;
  constructor(gm: GumballMachine) {
    this.gumballMachine = gm;
  }

  ejectCoin(): void {
    this.gumballMachine.setState(this.gumballMachine.getNoCoinState());
    console.log("Please collect your coin!!!");
  }

  insertCoin(): void {
    console.log("There is already a coin inserted.");
  }

  turnCrank(): void {
    let randomWinner = Math.random() * 10;
    console.log("Please wait while we process!!!");
    if (
      randomWinner >= 1 &&
      randomWinner < 2 &&
      this.gumballMachine.getCount() > 1
    ) {
      this.gumballMachine.setState(this.gumballMachine.getWinnerState());
    } else {
      this.gumballMachine.setState(this.gumballMachine.getSoldState());
    }
  }

  _dispense(): void {
    console.log("Please turn the crank!!!");
  }

}
