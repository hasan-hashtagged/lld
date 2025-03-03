import { GumballMachine } from "../gumballMachine";
import { State } from "./state";

export class WinnerState implements State {
  gumballMachine: GumballMachine
  constructor(gball: GumballMachine) {
    this.gumballMachine = gball;
  }

  ejectCoin(): void {
    console.log("No coin inserted!!");
  }

  insertCoin(): void {
    console.log("We are serving. Please Wait...")
  }

  turnCrank(): void {
    console.log("We are already working, Kindly wait!!!");
  }

  _dispense(): void {
    this.gumballMachine.releaseBall();
    if (this.gumballMachine.getCount() == 0) {
      this.gumballMachine.setState(this.gumballMachine.getSoldOutState());
    } else {
      this.gumballMachine.releaseBall();
      console.log("Congrats!, You are the winner.")
      if (this.gumballMachine.getCount() > 0) {
        this.gumballMachine.setState(this.gumballMachine.getNoCoinState());
      } else {
        this.gumballMachine.setState(this.gumballMachine.getSoldOutState());
      }
    }
  }
}