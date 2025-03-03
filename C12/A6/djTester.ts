import { ControllerInterface } from "./controller/controllerInterface";
import { heartController } from "./controller/heartController";
import { HeartModel } from "./model/heart";

function run() {
  const heart: HeartModel = new HeartModel();
  const ctrl: heartController = new heartController(heart);
  const myView = ctrl.getView();
  myView.start();
  myView.increase(10);
  myView.decrease(20);
  myView.stop();
}

run();
