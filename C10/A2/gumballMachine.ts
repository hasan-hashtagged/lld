import { NoCoinState } from './behavior/noCoin';
import { HasCoinState } from './behavior/hasCoin';
import { SoldOutState } from './behavior/soldOut';
import { SoldState } from './behavior/sold'
import { State } from './behavior/state';
import { WinnerState } from './behavior/winner';

export class GumballMachine {
  noCoin: State;
  hasCoin: State;
  sold: State;
  soldOut: State;
  winner: State;

  state: State;
  count: number = 0;

  constructor(cnt: number | undefined) {
    this.count = cnt ? cnt: 0;
    this.noCoin = new NoCoinState(this);
    this.hasCoin = new HasCoinState(this);
    this.sold = new SoldState(this);
    this.soldOut = new SoldOutState(this);
    this.winner = new WinnerState(this);
    if (this.count > 0) {
      this.state = this.noCoin;
    } else {
      this.state = this.soldOut;
    }
  }

  ejectCoin(): void {
    this.state.ejectCoin();
  }

  insertCoin(): void {
    this.state.insertCoin();
  }

  turnCrank(): void {
    this.state.turnCrank();
    this.state._dispense();
  }

  releaseBall(): void {
    this.count -= 1;
  }

  // getters
  getCount(): number {
    return this.count;
  }

  getNoCoinState(): State {
    return this.noCoin;
  }

  getHasCoinState(): State {
    return this.hasCoin;
  }

  getSoldState(): State {
    return this.sold;
  }

  getSoldOutState(): State {
    return this.soldOut;
  }

  getWinnerState(): State {
    return this.winner;
  }

  // setters
  setState(st: State): void {
    this.state = st;
  }

}
