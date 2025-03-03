import { DinerMenu } from "./dinerMenu";
import type { MenuItem } from "./menuItem";
import { PancakeMenu } from "./panCakeMenu";
// import type { MyObject } from "./pancakeMenuIterator";
import { Waitress } from "./waitress";

// Create MenuItem and add to respective Diner and pancakes

const dinerItem: MenuItem = {
  name: 'Beef Jerkeys',
  description: 'Juicy beef tenderloinss',
  isVegeterian: false,
  price: '$20'
};

const DINER = [dinerItem];

const pancakeHouseItem: MenuItem = {
  name: 'Banana delight',
  description: 'Banoffe pancake with bananas on side',
  isVegeterian: true,
  price: '$2'
}
const PANCAKEHOUSE = {
  0: pancakeHouseItem
}

function run(): void {
  const bfast = new PancakeMenu(PANCAKEHOUSE);
  const lunch = new DinerMenu(DINER);

  const linda = new Waitress(bfast, lunch);
  console.log('--------------Menu----------');
  linda.printMenu();

}

run();
