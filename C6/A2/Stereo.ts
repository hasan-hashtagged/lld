export class Stereo {
  turnOn(): void {
    console.log("Stereo powered on");
  }
  insertCD(): void {
    console.log("CD inserted");
  }
  setVolume(num: number): void {
    console.log("Volume set to: ", num);
  }

  turnOff(): void {
    console.log("Stereo turned off");
  }
}