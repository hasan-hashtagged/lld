import { Duck } from "./duck";

export class MalllardDuck implements Duck {
  fly(): void {
    console.log("I can fly");
  }

  quack(): void {
    console.log("I can quauck");
  }
}