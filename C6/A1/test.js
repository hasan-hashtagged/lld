"use strict";
exports.__esModule = true;
var command_1 = require("./command");
var GarageDoor_1 = require("./GarageDoor");
var Light_1 = require("./Light");
var SimpleRemote_1 = require("./SimpleRemote");
function run() {
    var remote = new SimpleRemote_1.SimpleRemote();
    var lght = new Light_1.Light();
    var command = new command_1.LightOnCommand(lght);
    remote.setCommand(command);
    remote.buttonPressed();
    var gd = new GarageDoor_1.GarageDoor();
    var cmd = new command_1.GarageDoorOpenCommand(gd);
    remote.setCommand(cmd);
    remote.buttonPressed();
}
run();
