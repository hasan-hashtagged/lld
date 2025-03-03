import { Duck } from "./duck";
import { Turkey } from "./turkey";

export class TurkeyAdapter implements Duck {
  turkey: Turkey;
  constructor(t: Turkey) {
    this.turkey = t;
  }

  quack(): void {
    this.turkey.gobble();
  }

  fly(): void {
    for (let i = 0; i < 3; i++) {
      this.turkey.fly();
    }
  }
}