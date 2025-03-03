import { Turkey } from "./turkey";

export class WildTurkey implements Turkey {
  gobble(): void {
    console.log("gobble gobble gobble");
  }

  fly(): void {
    console.log("Fly....");
  }
}