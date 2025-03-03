import { MenuComponent } from "./menuComponent";

export class Waitress {
  allMenus: MenuComponent;

  constructor(menu: MenuComponent) {
    this.allMenus = menu;
  }

  print(): void {
    this.allMenus.print();
  }
}