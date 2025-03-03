import { Beverage } from "./beverage";

export class HouseBlend extends Beverage {
  constructor() {
    super();
    this.description = 'House Blend';
  }
  
  cost(): number {
    return 3;
  }
}