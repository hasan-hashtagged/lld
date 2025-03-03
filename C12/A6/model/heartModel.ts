import { BPMObserver } from "../bpmObserver";

export interface HeartModelInterface {
  getHeartBeat(): number;
  registerObserver(obs: BPMObserver): void;
  removeObserver(obs: BPMObserver): void;
  notifyObservers(): void;
}
