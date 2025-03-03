"use strict";
exports.__esModule = true;
var MallardDuck_1 = require("./MallardDuck");
var TurkeyAdapter_1 = require("./TurkeyAdapter");
var WildTurkey_1 = require("./WildTurkey");
function run() {
    var dodo = new WildTurkey_1.WildTurkey();
    var gwen = new MallardDuck_1.MalllardDuck();
    var kevin = new TurkeyAdapter_1.TurkeyAdapter(dodo);
    dodo.gobble();
    dodo.fly();
    testDuck(gwen);
    testDuck(kevin);
}
function testDuck(d) {
    d.quack();
    d.fly();
}
run();
