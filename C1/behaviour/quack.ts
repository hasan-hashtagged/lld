export interface QuackBehavior {
  quack();
}

export class quacker implements QuackBehavior {
  quack() {
    console.log("Quack!! Quack!! Quack!!");
  }
}

export class squeaker implements QuackBehavior {
  quack() {
    console.log("Squeak!! Squeak!! Squeak!!");
  }
}

export class mimicQuaker implements QuackBehavior {
  quack() {
    console.log("I mimic Quack, Quack!! to call ducks");
  }
}

export class mute implements QuackBehavior {
  quack() {
    console.log("No sound :(");
  }
}