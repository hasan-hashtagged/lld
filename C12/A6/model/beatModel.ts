import { BPMObserver } from "../bpmObserver";

export interface BeatModel {
  // Controller calls
  initialize(): void;
  on(): void;
  off(): void;
  setBPM(bpm: number): void;
  getBPM(): number;

  // Observer
  registerObserver(obs: BPMObserver): void;
  removeObserver(obs: BPMObserver): void;

  // registerObserver(/* Add object after creation*/): void;
  // removeObserver(/* Add object after creation*/): void;
}
