import { Quackable } from "./quackable";

export class MallardDuck implements Quackable {
  quack(): void {
    console.log("Quack!!!");
  }
}

export class DuckCall implements Quackable {
  quack(): void {
    console.log("Kwak Kwak!!!");
  }
}

export class RubberDuck implements Quackable {
  quack(): void {
    console.log("Squeak");
  }
}
