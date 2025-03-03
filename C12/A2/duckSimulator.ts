import { Quackable } from "./quackable";
import { GooseAdapter } from "./gooseAdapter";
import { Goose } from "./goose";
import {
  MallardDuck,
  RubberDuck,
  DuckCall
} from "./ducks";

function simulate(duck: Quackable) {
  duck.quack();
}

function run() {
  const maddy: Quackable = new MallardDuck();
  const toy: Quackable = new RubberDuck();
  const whistle: Quackable = new DuckCall();
  const gooseAdapter: Quackable = new GooseAdapter(new Goose());
  simulate(maddy);
  simulate(toy);
  simulate(whistle);
  simulate(gooseAdapter);
}

run();
