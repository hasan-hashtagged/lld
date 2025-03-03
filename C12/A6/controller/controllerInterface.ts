import { DJView } from "../view/djview";

export interface ControllerInterface {
  start(): void;
  stop(): void;
  increaseBPM(val: number): void;
  decreaseBPM(val: number): void;
  getView(): DJView;
}
