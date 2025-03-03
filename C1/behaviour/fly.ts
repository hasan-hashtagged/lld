export interface FlyBehaviour {
  fly();
}

export class flyer implements FlyBehaviour {
  fly() {
    console.log("Fly high, fly high, fly high!!!");
  }
}

export class noFly implements FlyBehaviour {
  fly() {
    console.log("I can't fly :(");
  }
}

export class flyWithMotor implements FlyBehaviour {
  fly() {
    console.log('I have a motor attached that helps me fly!!');
  }
}