import { CaffeineBeverage } from "./CaffeineBeverage";

export class Coffee extends CaffeineBeverage {
  addCondiments(): void {
    console.log("Adding milk!!!");
  }

  brew(): void {
    console.log("Brewing the coffee beans!!!");
  }
}
