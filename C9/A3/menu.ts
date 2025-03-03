import { MenuComponent } from "./menuComponent";

export class Menu extends MenuComponent {
  name: string;
  description: string;
  menuComponents: Array<MenuComponent>;

  constructor(compName: string, compDes: string) {
    super();
    this.name = compName;
    this.description = compDes;
    this.menuComponents = [];
  }

  getName(): string {
    return this.name;
  }

  getDescription(): string {
    return this.description;
  }

  add(comp: MenuComponent): void {
    this.menuComponents.push(comp);
  }

  getChild(a: number): MenuComponent {
    return this.menuComponents[a];
  }

  print(): void {
    console.log('-----------------------------------------------------------');
    console.log('Menu: ', this.getName());
    console.log('Description: ', this.getDescription());
    console.log('-----------------------------------------------------------');
    for (const comp of this.menuComponents) {
      comp.print();
    }
  }
}
