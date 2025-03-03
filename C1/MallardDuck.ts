import { flyer } from './behaviour/fly';
import { quacker } from './behaviour/quack';
import { Duck } from './duck';

export class mallardDuck extends Duck {
  constructor() {
    super();
    this.flybhvr = new flyer();
    this.quackbhvr = new quacker();
  }

  display(): void {
    console.log("I am an ugly looking Duck!!!!");
  }
}