import { CaffeineBeverage } from "./CaffeineBeverage";

export class Tea extends CaffeineBeverage {
  addCondiments(): void {
    console.log("Adding lemon drops for flavours!!!");
  }

  brew(): void {
    console.log("Adding tea leaves to the boiled water!!!!");
  }
}
