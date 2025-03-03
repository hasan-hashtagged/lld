import { Goose } from "./goose";
import { GooseAdapter } from "./gooseAdapter";
import { Quackable } from "./quackable";

abstract class AbstractGooseFactory {
  abstract createGooseDuck(): Quackable;
}

export class GooseFactory extends AbstractGooseFactory {
  createGooseDuck(): Quackable {
    return new GooseAdapter(new Goose());
  }

}
