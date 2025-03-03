"use strict";
exports.__esModule = true;
var menu_1 = require("./menu");
var menuItem_1 = require("./menuItem");
var waitress_1 = require("./waitress");
function prepareMenu() {
    var dinerMenu = new menu_1.Menu('Diner Menu', 'Apt for lunch and Dinner');
    var breakfastMenu = new menu_1.Menu('BreakFast Menu', 'Pancakes and Pancakes!!!');
    var dessertMenu = new menu_1.Menu('Desserts', 'To all the sweet-tooth people!!!');
    var allMenus = new menu_1.Menu('All Menus', 'Read and Ravish!!!');
    allMenus.add(dinerMenu);
    allMenus.add(breakfastMenu);
    allMenus.add(dessertMenu);
    var jerky = new menuItem_1.MenuItem('Beef Jerky', 'Juicy beef tenderloin', false, '$20');
    var VeggieDelight = new menuItem_1.MenuItem('Veggie Delight', 'Indian curry with bell pepper, spuds, and tomato', true, '$10');
    var bananalicious = new menuItem_1.MenuItem('bananalicious', 'Banoffee bancakes with bananas on side', true, '$2');
    var massGainer = new menuItem_1.MenuItem('Mass Gainer', 'Oatmeal pancakes with beacons', false, '$7');
    var tiramisu = new menuItem_1.MenuItem('Tiramisu', 'Delicious chocolate laced tiramisu', true, '$15');
    dinerMenu.add(jerky);
    dinerMenu.add(VeggieDelight);
    breakfastMenu.add(bananalicious);
    breakfastMenu.add(massGainer);
    dessertMenu.add(tiramisu);
    return allMenus;
}
function tester() {
    var allMenus = prepareMenu();
    var linda = new waitress_1.Waitress(allMenus);
    linda.print();
}
tester();
