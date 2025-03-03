import { Quackable } from "./quackable";
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
  simulate(maddy);
  simulate(toy);
  simulate(whistle);

}

run();
