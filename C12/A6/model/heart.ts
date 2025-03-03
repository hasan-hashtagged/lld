import { BPMObserver } from "../bpmObserver";
import { HeartModelInterface } from "./heartModel";

export class HeartModel implements HeartModelInterface {
  bpm: number = 68;
  bpmObservers: Array<BPMObserver> = [];

  getHeartBeat(): number {
    return this.bpm;
  }

  registerObserver(obs: BPMObserver): void {
    this.bpmObservers.push(obs);
  }

  removeObserver(obs: BPMObserver): void {
    const idx = this.bpmObservers.indexOf(obs);;
    this.bpmObservers.slice(idx, 1);
  }

  notifyObservers(): void {
    console.log("Current Heart rate:",  this.bpm);
    this.bpm = 100;
    setTimeout(this.getHeartBeat, 2000);
    console.log("Current Heart rate:",  this.bpm);
  }
}