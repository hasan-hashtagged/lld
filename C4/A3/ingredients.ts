export abstract class Cheese {
  name: string;
}

export abstract class Dough {
  name: string;
  constructor() {
    this.name = 'Dough';
  }
}

export abstract class Sauce {
  name: string;
  constructor() {
    this.name = 'Sauce';
  }
}

export class Feta extends Cheese {
  constructor() {
    super();
    this.name = 'Feta';
  }
}

export class Mozzarella extends Cheese {
  constructor() {
    super();
    this.name = 'Mozzarella';
  }
}

export class ThickCrustDough extends Dough {
  constructor() {
    super();
    this.name = 'Thick Crust';
  }
}
export class ThinCrustDough extends Dough {
  constructor() {
    super();
    this.name = 'Thin Crust';
  }
}

export class Marinara extends Sauce {
  constructor() {
    super();
    this.name = 'Marinara';
  }
}

export class PlumTomato extends Sauce {
  constructor() {
    super();
    this.name = 'Plum tomato';
  }
}
