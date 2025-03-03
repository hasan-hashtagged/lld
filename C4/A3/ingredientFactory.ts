import {
  Feta,
  Mozzarella,
  ThickCrustDough,
  ThinCrustDough,
  Marinara,
  PlumTomato
} from './ingredients';

export interface IngredientFactory {
  createCheese();
  createDough();
  createSauce();
}

export class NYIngredientFactory implements IngredientFactory {
  createCheese() {
    return new Mozzarella();
  }

  createDough() {
    return new ThinCrustDough();
  }

  createSauce() {
    return new Marinara();
  }

}

export class ChicagoIngredientFactory implements IngredientFactory {
  createCheese() {
    return new Feta();
  }

  createDough() {
    return new ThickCrustDough();
  }

  createSauce() {
    return new PlumTomato();
  }

}
