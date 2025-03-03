"use strict";
exports.__esModule = true;
var dinerMenu_1 = require("./dinerMenu");
var panCakeMenu_1 = require("./panCakeMenu");
// import type { MyObject } from "./pancakeMenuIterator";
var waitress_1 = require("./waitress");
// Create MenuItem and add to respective Diner and pancakes
var dinerItem = {
    name: 'Beef Jerkeys',
    description: 'Juicy beef tenderloinss',
    isVegeterian: false,
    price: '$20'
};
var DINER = [dinerItem];
var pancakeHouseItem = {
    name: 'Banana delight',
    description: 'Banoffe pancake with bananas on side',
    isVegeterian: true,
    price: '$2'
};
var PANCAKEHOUSE = {
    0: pancakeHouseItem
};
function run() {
    var bfast = new panCakeMenu_1.PancakeMenu(PANCAKEHOUSE);
    var lunch = new dinerMenu_1.DinerMenu(DINER);
    var linda = new waitress_1.Waitress(bfast, lunch);
    console.log('--------------Menu----------');
    linda.printMenu();
}
run();
