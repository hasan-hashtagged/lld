"use strict";
exports.__esModule = true;
var Coffee_1 = require("./Coffee");
var Tea_1 = require("./Tea");
function test() {
    var myCoffee = new Coffee_1.Coffee();
    console.log('***************************');
    console.log('Getting the Coffee');
    console.log('***************************');
    myCoffee.prepareReciepe();
    console.log('***************************');
    console.log('***************************');
    console.log("Getting the Tea");
    console.log('***************************');
    var myTea = new Tea_1.Tea();
    myTea.prepareReciepe();
    console.log('***************************');
}
test();
