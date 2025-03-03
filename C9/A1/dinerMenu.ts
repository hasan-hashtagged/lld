import { DinerMenuIterator } from "./dinerMenuIterator";
import { Iterator } from "./iterator";
import type { MenuItem } from "./menuItem";

export class DinerMenu {
  MAX_ITEM: number = 6;
  numOfItems: number = 0;
  menuItems: Array<MenuItem>;

  constructor(items: Array<MenuItem>) {
    this.menuItems = items;
  }

  addItems(item: MenuItem): void {
    if (this.numOfItems >= this.MAX_ITEM) {
      throw new Error('Menu full!!');
    }
    this.menuItems.push(item);
    this.numOfItems++;
  }

  createIterator(): Iterator {
    return new DinerMenuIterator(this.menuItems);
  }

}