import type { Pizza } from './pizza';
import { 
  NYStyleCheesePizza,
  NYStyleClamPizza,
  NYStyleNormalPizza,
  NYStyleVeggiePizza,
  ChicagoStyleCheesePizza,
  ChicagoStyleClamPizza,
  ChicagoStyleNormalPizza,
  ChicagoStyleVeggiePizza
} from './pizza';

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
    if (type.toLowerCase() === 'cheese') {
      pizza = new NYStyleCheesePizza();
    } else if (type.toLowerCase() === 'veggie') {
      pizza = new NYStyleVeggiePizza();
    } else if (type.toLowerCase() === 'clam') {
      pizza = new NYStyleClamPizza();
    } else {
      pizza = new NYStyleNormalPizza();
    }
    return pizza;
  }
}

export class ChicagoPizzaStore extends PizzaStore {
  createPizza(type: string) : Pizza {
    let pizza: Pizza;
    if (type.toLowerCase() === 'cheese') {
      pizza = new ChicagoStyleCheesePizza();
    } else if (type.toLowerCase() === 'veggie') {
      pizza = new ChicagoStyleVeggiePizza();
    } else if (type.toLowerCase() === 'clam') {
      pizza = new ChicagoStyleClamPizza();
    } else {
      pizza = new ChicagoStyleNormalPizza();
    }
    return pizza;
  }
}