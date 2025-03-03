import { HeartAdapter } from "../model/heartAdapter";
import { HeartModelInterface } from "../model/heartModel";
import { DJView } from "../view/djview";
import { ControllerInterface } from "./controllerInterface";

export class heartController implements ControllerInterface {
  heartModel: HeartModelInterface;
  djView: DJView;

  constructor(model: HeartModelInterface) {
    this.heartModel = model;
    this.djView = new DJView(new HeartAdapter(this.heartModel), this);
  }

  start(): void {
    this.heartModel.notifyObservers();
  }

  stop(): void {
    // noop
  }

  increaseBPM(val: number): void {
    // noop
  }

  decreaseBPM(val: number): void {
    // noop
  }

  getView(): DJView {
    return this.djView;
  }
}