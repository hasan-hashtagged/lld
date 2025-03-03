import {
  Cheese,
  Dough,
  Sauce
} from './ingredients';

import {
  IngredientFactory,
  NYIngredientFactory,
  ChicagoIngredientFactory
} from './ingredientFactory';

export abstract class Pizza {
  cheese: Cheese;
  dough: Dough;
  sauce: Sauce;

  abstract prepare();

  bake() {
    console.log("Baking...");
  }
  cut() {
    console.log("Cutting...");
  }

  box() {
    console.log("Finaally, Putting in a box...");
  }
}

export class CheesePizza extends Pizza {
  ingredientFactory: IngredientFactory;
  constructor(ingFactory: IngredientFactory) {
    super();
    this.ingredientFactory = ingFactory;
  }

  prepare() {
    console.log("Preparing NYStyleCheesePizza...");
    this.cheese = this.ingredientFactory.createCheese();
    this.dough = this.ingredientFactory.createDough();
    this.sauce = this.ingredientFactory.createSauce();
    console.log('Cheese used: ', this.cheese);
    console.log('Dough used: ', this.dough);
  }
}

export class VeggiePizza extends Pizza {
  ingredientFactory: IngredientFactory;
  constructor(ingFactory: IngredientFactory) {
    super();
    this.ingredientFactory = ingFactory;
  }

  prepare() {
    console.log("Preparing NYStyleVeggiePizza...");
    this.cheese = this.ingredientFactory.createCheese();
    this.dough = this.ingredientFactory.createDough();
    this.sauce = this.ingredientFactory.createSauce();
    console.log('Sauce used: ', this.sauce);
  }

}
