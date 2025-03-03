export class Beverage {
  description: string = "Coffee Bar";
  cost() : number {
    return 0;
  }
  getDescription() : string {
    return this.description;
  }
}