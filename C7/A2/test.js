"use strict";
exports.__esModule = true;
var AC_1 = require("./AC");
var Light_1 = require("./Light");
var RoomController_1 = require("./RoomController");
function run() {
    var ac = new AC_1.AC();
    var light = new Light_1.Light();
    var RoomC = new RoomController_1.RoomController(ac, light);
    RoomC.setupRoom();
    RoomC.getOut();
}
run();
