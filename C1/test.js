"use strict";
exports.__esModule = true;
var MallardDuck_1 = require("./MallardDuck");
var ModelDuck_1 = require("./ModelDuck");
var fly_1 = require("./behaviour/fly");
function run() {
    var d1 = new MallardDuck_1.mallardDuck();
    d1.performQuack();
    d1.performFly();
    d1.display();
    d1.swim();
    var d2 = new ModelDuck_1.ModelDuck();
    d2.performFly();
    d2.setFlybhvr(new fly_1.flyWithMotor());
    d2.performFly();
    var UserAccount = /** @class */ (function () {
        function UserAccount(name, age) {
            this.name = name;
            this.age = age;
        }
        return UserAccount;
    }());
    var user = new UserAccount("Hasan", 24);
    console.log(user.name, user.age);
}
run();
