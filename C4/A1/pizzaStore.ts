import type { Pizza } from './pizza';
import { SimplePizzaFactory } from './simplePizzaFactory';
export class PizzaStore {
  factory: SimplePizzaFactory;

  constructor(pFactory: SimplePizzaFactory) {
    this.factory = pFactory;
  }

  orderPizza(type: string): void {
    let pizza: Pizza = this.factory.createPizza(type);
    pizza.prepare();
    pizza.bake();
    pizza.cut();
    pizza.box();
  }

}
