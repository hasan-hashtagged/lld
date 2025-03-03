export abstract class Pizza {
  prepare() {
    console.log("Preparing...");
  }

  bake() {
    console.log("Baking...");
  }
  cut() {
    console.log("Cutting...");
  }

  box() {
    console.log("Finaally, Putting in a box...");
  }

}

export class CheesePizza extends Pizza {
  prepare() {
    console.log("Preparing cheesy...");
  }

  bake() {
    console.log("Baking cheesy...");
  }
  cut() {
    console.log("Cutting cheesy...");
  }

}

export class VeggiePizza extends Pizza {
  prepare() {
    console.log("Preparing veggie...");
  }

  bake() {
    console.log("Baking veggie...");
  }
  cut() {
    console.log("Cutting veggie...");
  }

}
