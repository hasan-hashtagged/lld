import { mallardDuck } from "./MallardDuck";
import { ModelDuck } from "./ModelDuck";
import { flyWithMotor } from "./behaviour/fly";
import { Duck } from "./duck";

function run() {
  let d1: Duck = new mallardDuck();
  d1.performQuack();
  d1.performFly();
  d1.display();
  d1.swim();

  let d2 : Duck = new ModelDuck();
  d2.performFly();
  d2.setFlybhvr(new flyWithMotor());
  d2.performFly();


  interface User {
    name : string;
    age: number;
  }

  class UserAccount {
    name: string;
    age: number;

    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  }

  let user : User = new UserAccount("Hasan", 24);
  console.log(user.name, user.age);
}

run();