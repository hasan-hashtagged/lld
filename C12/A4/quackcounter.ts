import { Quackable } from './quackable';

export class QuackCounter implements Quackable {
  duck: Quackable;
  static quackCount: number = 0;

  constructor(quacker: Quackable) {
    this.duck = quacker;
  }

  quack(): void {
    this.duck.quack();
    QuackCounter.quackCount++;
  }

  getCount(): number {
    return QuackCounter.quackCount;
  }

}
