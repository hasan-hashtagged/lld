import { MenuComponent } from "./menuComponent";

export class MenuItem extends MenuComponent {
  name: string;
  description: string;
  isVegeterian: boolean;
  price: string;

  constructor(itemName: string, itemDes: string, isVeg: boolean, rate: string) {
    super();
    this.name = itemName;
    this.description = itemDes;
    this.isVegeterian = isVeg;
    this.price = rate;
  }

  getName(): string {
    return this.name;
  }

  getDescription(): string {
    return this.description;
  }

  getIsVegeterian(): boolean {
    return this.isVegeterian;
  }

  getPrice(): string {
    return this.price;
  }

  print(): void {
    console.log('Name: ', this.getName());
    console.log('Description: ', this.getDescription());
    console.log('Veg?: ', this.getIsVegeterian().toString());
    console.log('Price: ', this.getPrice());
    console.log('-----------------------------------------------------------');
  }
}
