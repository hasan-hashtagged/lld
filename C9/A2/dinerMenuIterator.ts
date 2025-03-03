import { Iterator } from "./iterator";
import type { MenuItem } from "./menuItem";

export class DinerMenuIterator implements Iterator {
  items: Array<MenuItem>;
  position: number = 0;

  constructor(options: Array<MenuItem>) {
    this.items = options;
  }

  hasNext(): boolean {
    if (this.position >= this.items.length) {
      return false;
    }

    return true;
  }

  next() : MenuItem {
    const item: MenuItem = this.items[this.position];
    this.position++;
    return item;
  }

}
