import type { Pizza } from './pizza';
import { 
  CheesePizza,
  VeggiePizza
} from './pizza';

import {
  NYIngredientFactory,
  ChicagoIngredientFactory,
} from './ingredientFactory';

abstract class PizzaStore {
  abstract createPizza(type: string): Pizza;

  orderPizza(type: string): void {
    let pizza : Pizza = this.createPizza(type);
    pizza.prepare();
    pizza.bake();
    pizza.cut();
    pizza.box();
  }

}

export class NYPizzaStore extends PizzaStore {
  createPizza(type: string) : Pizza {
    let pizza: Pizza;
    const ingFactory: NYIngredientFactory = new NYIngredientFactory();
    if (type.toLowerCase() === 'cheese') {
      pizza = new CheesePizza(ingFactory);
    } else if (type.toLowerCase() === 'veggie') {
      pizza = new VeggiePizza(ingFactory);
    }
    return pizza;
  }
}

export class ChicagoPizzaStore extends PizzaStore {
  createPizza(type: string) : Pizza {
    let pizza: Pizza;
    const ingFactory: ChicagoIngredientFactory = new ChicagoIngredientFactory();
    if (type.toLowerCase() === 'cheese') {
      pizza = new CheesePizza(ingFactory);
    } else if (type.toLowerCase() === 'veggie') {
      pizza = new VeggiePizza(ingFactory);
    }
    return pizza;
  }
}