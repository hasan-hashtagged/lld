import { Quackable } from './quackable';
import { QuackCounter } from './quackcounter';
import {
  MallardDuck,
  DuckCall,
  RubberDuck
} from './ducks';

abstract class AbstractDuckFactory {
  abstract createMallardDuck(): Quackable;
  abstract createRubberDuck(): Quackable;
  abstract createDuckCall(): Quackable;
}

export class DuckFactory extends AbstractDuckFactory {
  createMallardDuck(): Quackable {
    return new QuackCounter(new MallardDuck());
  }

  createDuckCall(): Quackable {
    return new QuackCounter(new RubberDuck());
  }

  createRubberDuck(): Quackable {
    return new QuackCounter(new DuckCall());
  }

}
