import { Quackable } from "./quackable";
import { GooseAdapter } from "./gooseAdapter";
import { Goose } from "./goose";
import {
  MallardDuck,
  RubberDuck,
  DuckCall
} from "./ducks";

import { QuackCounter } from "./quackcounter";

function simulate(duck: Quackable) {
  duck.quack();
}

function run() {
  const maddy: Quackable = new QuackCounter(new MallardDuck());
  const toy: Quackable = new QuackCounter(new RubberDuck());
  const whistle: Quackable = new QuackCounter(new DuckCall());
  const gooseAdapter: Quackable = new GooseAdapter(new Goose());
  simulate(maddy);
  simulate(toy);
  simulate(whistle);
  simulate(gooseAdapter);
  console.log("The ducks quacked " + QuackCounter.quackCount + " times.")
}

run();
