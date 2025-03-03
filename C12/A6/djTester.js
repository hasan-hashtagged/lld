"use strict";
exports.__esModule = true;
var heartController_1 = require("./controller/heartController");
var heart_1 = require("./model/heart");
function run() {
    var heart = new heart_1.HeartModel();
    var ctrl = new heartController_1.heartController(heart);
    var myView = ctrl.getView();
    myView.start();
    myView.increase(10);
    myView.decrease(20);
    myView.stop();
}
run();
