import { FlyBehaviour } from './behaviour/fly';
import { QuackBehavior } from './behaviour/quack';

export class Duck {
  constructor() {};
  flybhvr : FlyBehaviour;
  quackbhvr : QuackBehavior;

  performQuack() {
    this.quackbhvr.quack();
  }
  performFly() {
    this.flybhvr.fly();
  }

  swim() {
    console.log('I can swim');
  }

  display() {
    console.log('I look like bird');
  }

  setFlybhvr(fb : FlyBehaviour) {
    this.flybhvr = fb;
  }

  setQuackbhvr(qb: QuackBehavior) {
    this.quackbhvr = qb;
  }
}