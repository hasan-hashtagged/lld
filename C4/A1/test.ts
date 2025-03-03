import { PizzaStore } from "./pizzaStore";
import { SimplePizzaFactory } from "./simplePizzaFactory";

function run() {
  let factory = new SimplePizzaFactory();
  let pS = new PizzaStore(factory);
  pS.orderPizza('cheese');
  pS.orderPizza('veggie')
}

run();
