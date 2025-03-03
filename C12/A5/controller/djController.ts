import { BeatModel } from "../model/beatModel";
import { DJView } from "../view/djview";
import { ControllerInterface } from "./controllerInterface";

export class DJController implements ControllerInterface {
  model: BeatModel;
  view: DJView;

  constructor(mdl: BeatModel) {
    this.model = mdl;
    this.view = new DJView(this.model, this);
    this.model.initialize();
  }

  start(): void {
    this.model.on();
  }

  stop(): void {
    this.model.off();
  }

  increaseBPM(val: number): void {
    let bpm = this.model.getBPM();
    this.model.setBPM(bpm + val);
  }

  decreaseBPM(val: number): void {
    let bpm = this.model.getBPM();
    this.model.setBPM(bpm - val);
  }

  getView(): DJView {
    return this.view;
  }
}
