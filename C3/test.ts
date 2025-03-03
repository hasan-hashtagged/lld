import { Beverage } from "./beverage";
import { DarkRoast } from "./darkRoast";
import { Espresso } from "./espresso";
import { Mocha } from "./mocha";
import { Whip } from "./whip";


function run() {
  let bev1: Beverage = new Espresso();
  console.log(bev1.getDescription());
  let bev2: Beverage = new DarkRoast();
  bev2 = new Mocha(bev2);
  bev2 = new Mocha(bev2);
  bev2 = new Whip(bev2);
  console.log(bev2.getDescription());
  console.log("Your bill is :",bev2.cost());
}

run();