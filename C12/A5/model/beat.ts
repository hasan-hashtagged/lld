import { BeatModel } from "./beatModel";
import { BPMObserver } from "../bpmObserver";

export class Beat implements BeatModel {
  bpm: number = 90;
  stop: boolean = false;
  bpmObservers: Array<BPMObserver> = [];
  initialize(): void {
    console.log("Model Initialized");
  }

  on(): void {
    console.log("Turned on the beat");
    // notifyObservers();
    this.stop = false;
  }

  off(): void {
    this.stop = true;
    console.log("Turned off the beat");
  }

  setBPM(bpm: number): void {
    this.bpm = bpm;
    this.notifyObservers();
  }

  getBPM(): number {
    return this.bpm;
  }

  registerObserver(o: BPMObserver): void {
    this.bpmObservers.push(o);
  }

  removeObserver(obs: BPMObserver): void {
    let idx = this.bpmObservers.indexOf(obs);
    this.bpmObservers.slice(idx, 1);
  }

  notifyObservers(): void {
    for (const obs of this.bpmObservers) {
      obs.updateBPM();
    }
  }

}
