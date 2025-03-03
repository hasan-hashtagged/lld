import { GumballMachine } from "./gumballMachine";

function run() {
  const PheonixMachine = new GumballMachine(2);

  PheonixMachine.insertCoin();
  PheonixMachine.ejectCoin();
  PheonixMachine.turnCrank();
  PheonixMachine.insertCoin();
  PheonixMachine.turnCrank();
  PheonixMachine.insertCoin();
  PheonixMachine.turnCrank();
  PheonixMachine.insertCoin();
  PheonixMachine.turnCrank();
}

run();
