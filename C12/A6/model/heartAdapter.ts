import { BPMObserver } from "../bpmObserver";
import { BeatModel } from "./beatModel";
import { HeartModelInterface } from "./heartModel";

export class HeartAdapter implements BeatModel {
  heartModel: HeartModelInterface;

  constructor(heart: HeartModelInterface) {
    this.heartModel = heart;
  }

  initialize(): void {
    console.log("Machine initialized");
  }
  on(): void {
    // noop
  }

  off(): void {
    // noop
  }

  getBPM(): number {
    return this.heartModel.getHeartBeat();
  }

  setBPM(bpm: number): void {
    // noop
  }

  registerObserver(obs: BPMObserver): void {
    this.heartModel.registerObserver(obs);
  }

  removeObserver(obs: BPMObserver): void {
    this.heartModel.removeObserver(obs);
  }

}