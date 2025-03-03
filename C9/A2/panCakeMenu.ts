import { Iterator } from "./iterator";
import { PanCakeIterator } from "./pancakeMenuIterator";
import type { MenuItem } from "./menuItem";
import { Menu } from "./menu";

export class PancakeMenu implements Menu {
  menuItems: object;

  constructor(items: object) {
    this.menuItems = items;
  }

  addItems(item: MenuItem) : void {
    const pos = Object.keys(this.menuItems).length;
    this.menuItems[pos] = item;
  }

  createIterator(): Iterator {
    return new PanCakeIterator(this.menuItems);
  }
}
