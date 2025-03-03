import { Iterator } from "./iterator";
import { Menu } from "./menu";
import type { MenuItem } from "./menuItem";


export class Waitress {
  breakfastMenu : Menu;
  lunchMenu: Menu;

  constructor(bfast: Menu, lunch: Menu) {
    // Bound to common Interface Menu.(solves previous problem)
    this.breakfastMenu = bfast;
    this.lunchMenu = lunch;
  }

  printMenu(): void {
    // using interface Iterator. (Adding new menu will require change.)
    // violates open-closed principle.
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