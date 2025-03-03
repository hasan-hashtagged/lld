import { noFly } from './behaviour/fly';
import { quacker } from './behaviour/quack';
import { Duck } from './duck';

export class ModelDuck extends Duck {
  constructor() {
    super();
    this.flybhvr = new noFly();
    this.quackbhvr = new quacker();
  }
  
  display(): void {
    console.log('I am made of plastic which children play with');
  }
}