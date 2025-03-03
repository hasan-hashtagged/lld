import { Quackable } from "./quackable";
import { GooseFactory } from "./gooseFactory";
import { DuckFactory } from "./duckFactory";


import { QuackCounter } from "./quackcounter";

function simulate(duck: Quackable) {
  duck.quack();
}

function run() {
  const duckFactory: DuckFactory = new DuckFactory();
  const gooseFactory: GooseFactory = new GooseFactory();
  const maddy: Quackable = duckFactory.createMallardDuck();
  const toy: Quackable = duckFactory.createRubberDuck();
  const whistle: Quackable = duckFactory.createDuckCall();
  const gooseAdapter: Quackable = gooseFactory.createGooseDuck();
  simulate(maddy);
  simulate(toy);
  simulate(whistle);
  simulate(gooseAdapter);
  console.log("The ducks quacked " + QuackCounter.quackCount + " times.")
}

run();
