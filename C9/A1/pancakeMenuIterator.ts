import { Iterator } from "./iterator";
import type { MenuItem } from "./menuItem";

export class PanCakeIterator implements Iterator {
  items: object;
  position : number;

  constructor(options: object) {
    this.items = options;
    this.position = 0;
  }

  hasNext(): boolean {
    if (this.position >= Object.keys(this.items).length) {
      return false;
    }
    return true;
  }

  next(): MenuItem {
    const item: MenuItem = this.items[this.position];
    this.position++;
    return item
  }

}
