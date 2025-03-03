import { Quackable } from './quackable';
import type { Goose } from './goose';

export class GooseAdapter implements Quackable {
  goose: Goose;
  constructor(g: Goose) {
    this.goose = g;
  }
  quack(): void {
    this.goose.honk();
  }
}
