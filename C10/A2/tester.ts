import { GumballMachine } from "./gumballMachine";

function run() {
  const PhoenixMachine: GumballMachine = new GumballMachine(10);
  PhoenixMachine.insertCoin();
  PhoenixMachine.ejectCoin();
  PhoenixMachine.turnCrank();
  for (let i = 1; i <= 10; i++) {
    console.log("Iteration: ", i);
    PhoenixMachine.insertCoin();
    PhoenixMachine.turnCrank();
  }
}

run();
