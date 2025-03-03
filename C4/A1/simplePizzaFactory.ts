import type { Pizza } from "./pizza";
import { CheesePizza, VeggiePizza } from "./pizza";

export class SimplePizzaFactory {
  createPizza(type: string): Pizza {
    let pizza: Pizza;

    if (type === 'cheese') {
      pizza = new CheesePizza();
    } else if (type === 'veggie') {
      pizza = new VeggiePizza();
    } else {
      pizza = null;
    }

    return pizza;
  }

}
