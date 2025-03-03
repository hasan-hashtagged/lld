export abstract class MenuComponent {
  getName() : string {
    throw Error('Method not supported');
  }
  getDescription(): string {
    throw Error('Method not supported');
  }
  getIsVegeterian(): boolean {
    throw Error('Method not supported');
  }
  getPrice(): string {
    throw Error('Mehtod not supported');
  }

  add(comp: MenuComponent) {
    throw Error('Method not supported');
  }

  getChild(a: number): MenuComponent {
    throw Error('Method not supported');
  }

  print(): void {
    throw Error('Method not supported');
  }
}
