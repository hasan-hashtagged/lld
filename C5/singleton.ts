class Singleton {
  static uniqueInstance: Singleton = new Singleton();
  private constructor() {
  }

  static getInstance(): Singleton {
    return Singleton.uniqueInstance;
  }

}