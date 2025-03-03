import { Beverage } from "./beverage";
import { Condiments } from "./condiments";

export class Whip extends Condiments {
  beverage: Beverage;
  constructor(bev: Beverage) {
    super();
    this.beverage = bev;
  }

  getDescription(): string {
    return this.beverage.getDescription() + ", Whip";
  }

  cost(): number {
    return 3 + this.beverage.cost();
  }
}