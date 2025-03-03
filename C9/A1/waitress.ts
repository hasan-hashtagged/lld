import { DinerMenu } from "./dinerMenu";
import { Iterator } from "./iterator";
import type { MenuItem } from "./menuItem";
import { PancakeMenu } from "./panCakeMenu";

export class Waitress {
  breakfastMenu : PancakeMenu;
  lunchMenu: DinerMenu;

  constructor(bfast: PancakeMenu, lunch: DinerMenu) {
    // still bound to concrete class.
    this.breakfastMenu = bfast;
    this.lunchMenu = lunch;
  }

  printMenu(): void {
    // using interface Iterator.
    const bfastIterator: Iterator = this.breakfastMenu.createIterator();
    console.log('-----------------BreakFast----------------');
    _printMenu(bfastIterator);
    console.log('-----------------Lunch--------------------');
    const lunchIterator: Iterator = this.lunchMenu.createIterator();
    _printMenu( lunchIterator);
  }

}

function _printMenu(menuIterator: Iterator) {
  // looping polymorphically without knowing about the implementation.
  while (menuIterator.hasNext()) {
    const item: MenuItem = menuIterator.next();
    console.log('Name: ', item.name);
    console.log('Description: ', item.description);
    console.log('Vegetarian: ', item.isVegeterian.toString());
    console.log('Price:', item.price);
  }
}