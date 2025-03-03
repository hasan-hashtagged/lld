import { Duck } from "./duck";
import { MalllardDuck } from "./MallardDuck";
import { TurkeyAdapter } from "./TurkeyAdapter";
import { WildTurkey } from "./WildTurkey";

function run() {
  let dodo = new WildTurkey();
  let gwen = new MalllardDuck();
  let kevin = new TurkeyAdapter(dodo);
  dodo.gobble();
  dodo.fly();
  testDuck(gwen);
  testDuck(kevin);
}

function testDuck(d: Duck): void {
  d.quack();
  d.fly();
}

run();
