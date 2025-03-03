import { ControllerInterface } from "./controller/controllerInterface";
import { DJController } from "./controller/djController";
import { Beat } from "./model/beat";
import { BeatModel } from "./model/beatModel";

function run() {
  const djModel: BeatModel = new Beat();
  const ctrl: ControllerInterface = new DJController(djModel);
  const myView = ctrl.getView();
  myView.start();
  myView.increase(10);
  myView.decrease(20);
  myView.stop();
}

run();
