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

export class NYStyleCheesePizza extends Pizza {
  prepare() {
    console.log("Preparing NYStyleCheesePizza...");
  }

  bake() {
    console.log("Baking NYStyleCheesePizza...");
  }
  cut() {
    console.log("Cutting NYStyleCheesePizza...");
  }
}

export class NYStyleVeggiePizza extends Pizza {
  prepare() {
    console.log("Preparing NYStyleVeggiePizza...");
  }

  bake() {
    console.log("Baking NYStyleVeggiePizza...");
  }
  cut() {
    console.log("Cutting NYStyleVeggiePizza...");
  }
}

export class NYStyleClamPizza extends Pizza {
  prepare() {
    console.log("Preparing NYStyleClamPizza...");
  }

  bake() {
    console.log("Baking NYStyleClamPizza...");
  }
  cut() {
    console.log("Cutting NYStyleClamPizza...");
  }
}

export class NYStyleNormalPizza extends Pizza {
  prepare() {
    console.log("Preparing NYStyleNormalPizza...");
  }

  bake() {
    console.log("Baking NYStyleNormalPizza...");
  }
  cut() {
    console.log("Cutting NYStyleNormalPizza...");
  }
}

export class ChicagoStyleCheesePizza extends Pizza {
  prepare() {
    console.log("Preparing ChicagoStyleCheesePizza...");
  }

  bake() {
    console.log("Baking ChicagoStyleCheesePizza...");
  }
  cut() {
    console.log("Cutting ChicagoStyleCheesePizza...");
  }
}

export class ChicagoStyleVeggiePizza extends Pizza {
  prepare() {
    console.log("Preparing ChicagoStyleVeggiePizza...");
  }

  bake() {
    console.log("Baking ChicagoStyleVeggiePizza...");
  }
  cut() {
    console.log("Cutting ChicagoStyleVeggiePizza...");
  }
}

export class ChicagoStyleClamPizza extends Pizza {
  prepare() {
    console.log("Preparing ChicagoStyleClamPizza...");
  }

  bake() {
    console.log("Baking ChicagoStyleClamPizza...");
  }
  cut() {
    console.log("Cutting ChicagoStyleClamPizza...");
  }
}

export class ChicagoStyleNormalPizza extends Pizza {
  prepare() {
    console.log("Preparing ChicagoStyleNormalPizza...");
  }

  bake() {
    console.log("Baking ChicagoStyleNormalPizza...");
  }
  cut() {
    console.log("Cutting ChicagoStyleNormalPizza...");
  }
}