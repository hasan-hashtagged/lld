"use strict";
exports.__esModule = true;
var djController_1 = require("./controller/djController");
var beat_1 = require("./model/beat");
function run() {
    var djModel = new beat_1.Beat();
    var ctrl = new djController_1.DJController(djModel);
    var myView = ctrl.getView();
    myView.start();
    myView.increase(10);
    myView.decrease(20);
    myView.stop();
}
run();
