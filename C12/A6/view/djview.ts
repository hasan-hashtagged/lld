import { BPMObserver } from "../bpmObserver";
import { ControllerInterface } from "../controller/controllerInterface";
import { BeatModel } from "../model/beatModel";

export class DJView implements BPMObserver {
  model: BeatModel;
  controller: ControllerInterface;

  constructor(mdl: BeatModel, ctrl: ControllerInterface) {
    this.model = mdl;
    this.controller = ctrl;
    this.model.registerObserver(this);
  }

  updateBPM(): void {
    const bpm = this.model.getBPM();
    if (bpm > 0) {
      console.log("The current BPM is: ", bpm);
    } else {
      console.log("Offline!!");
    }
  }

  // Control parts
  start(): void {
    this.actionPerformed("start");
  }

  stop(): void {
    this.actionPerformed("stopped");
  }

  increase(val: number): void {
    this.actionPerformed(`increase ${val}`);
  }

  decrease(val: number): void {
    this.actionPerformed(`decrease ${val}`);
  }

  actionPerformed(act: string): void {
    if (act.startsWith("start")) {
      this.controller.start();
    } else if (act.startsWith("stop")) {
      this.controller.stop();
    } else if (act.startsWith("increase")) {
      let val = act.split(' ');
      this.controller.increaseBPM(Number(val[1]));
    } else {
      let val = act.split(' ');
      this.controller.decreaseBPM(Number(val[1]));
    }
  }
}
