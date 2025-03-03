import { Beverage } from "./beverage";
import { Condiments } from "./condiments";

export class Soy extends Condiments {
  beverage: Beverage;
  constructor(bev: Beverage) {
    super();
    this.beverage = bev;
  }

  getDescription(): string {
    return this.beverage.getDescription() + ", Soy";
  }

  cost(): number {
    return 2 + this.beverage.cost();
  }
}