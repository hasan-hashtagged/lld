import { Beverage } from "./beverage";
import { Condiments } from "./condiments";

export class Mocha extends Condiments {
  bevarage: Beverage;

  constructor(bev: Beverage) {
    super();
    this.bevarage = bev;
  }

  getDescription(): string {
    return this.bevarage.getDescription() + ", Mocha";
  }

  cost(): number {
    return 1 + this.bevarage.cost();
  }
}