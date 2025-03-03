"use strict";
exports.__esModule = true;
var darkRoast_1 = require("./darkRoast");
var espresso_1 = require("./espresso");
var mocha_1 = require("./mocha");
var whip_1 = require("./whip");
function run() {
    var bev1 = new espresso_1.Espresso();
    console.log(bev1.getDescription());
    var bev2 = new darkRoast_1.DarkRoast();
    bev2 = new mocha_1.Mocha(bev2);
    bev2 = new mocha_1.Mocha(bev2);
    bev2 = new whip_1.Whip(bev2);
    console.log(bev2.getDescription());
    console.log("Your bill is :", bev2.cost());
}
run();
