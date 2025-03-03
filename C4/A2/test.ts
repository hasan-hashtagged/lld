import {
  NYPizzaStore,
  ChicagoPizzaStore
} from "./pizzaStore";

function run() {
  let nyStore: NYPizzaStore = new NYPizzaStore();
  nyStore.orderPizza('Cheese');
  let cgStore: ChicagoPizzaStore = new ChicagoPizzaStore();
  cgStore.orderPizza('Veggie');
}

run();
