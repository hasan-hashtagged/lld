import { AC } from "./AC";
import { Light } from "./Light";
import { RoomController } from "./RoomController";

function run() {
  const ac = new AC();
  const light = new Light();
  const RoomC = new RoomController(ac, light);

  RoomC.setupRoom();
  RoomC.getOut();
}

run();
