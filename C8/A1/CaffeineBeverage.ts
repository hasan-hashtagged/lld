export abstract class CaffeineBeverage {
  prepareReciepe(): void {
    this.boilWater();
    this.brew();
    this.addCondiments();
    this.pourInCup();
  }

  abstract addCondiments(): void;
  abstract brew(): void;

  boilWater(): void {
    console.log("Boiling Water!!!");
  }

  pourInCup(): void {
    console.log("Pour it in cup");
  }
}
