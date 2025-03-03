import { Coffee } from "./Coffee";
import { Tea } from "./Tea";

function test() {
  const myCoffee = new Coffee();
  console.log('***************************');
  console.log('Getting the Coffee');
  console.log('***************************');
  myCoffee.prepareReciepe();
  console.log('***************************');
  console.log('***************************');
  console.log("Getting the Tea");
  console.log('***************************');
  const myTea = new Tea();
  myTea.prepareReciepe();
  console.log('***************************');
}

test();
