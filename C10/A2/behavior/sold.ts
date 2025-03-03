import { GumballMachine } from "../gumballMachine";
import { State } from "./state";

export class SoldState implements State {
  gumballMachine: GumballMachine;
  constructor(gm: GumballMachine) {
    this.gumballMachine = gm;
  }

  ejectCoin(): void {
    console.log("Coin already processed!!!");
  }

  insertCoin(): void {
    console.log("Please let the previous transaction to complete");
  }

  turnCrank(): void {
    console.log("We are already working, Kindly wait!!!");
  }

  _dispense(): void {
    this.gumballMachine.releaseBall();
    if (this.gumballMachine.getCount() >= 0) {
      this.gumballMachine.setState(this.gumballMachine.getNoCoinState());
      console.log("Please collect the gumball!!")
    } else if (this.gumballMachine.getCount() < 0)  {
      this.gumballMachine.setState(this.gumballMachine.getHasCoinState());
      this.gumballMachine.state.ejectCoin();
      this.gumballMachine.setState(this.gumballMachine.getSoldOutState());
      this.gumballMachine.state._dispense();
    }
  }

}
